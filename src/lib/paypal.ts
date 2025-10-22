// PayPal Backend Service
import { NextRequest } from "next/server";
import { getPayPalConfig, isPayPalConfigured, getPayPalApiUrl } from "./paypal-config";

export interface PayPalConfig {
  clientId: string;
  clientSecret: string;
  mode: "sandbox" | "live";
  baseUrl: string;
}

export interface PayPalOrder {
  id: string;
  status: string;
  amount: {
    currency_code: string;
    value: string;
  };
  payer?: {
    email_address: string;
    name: {
      given_name: string;
      surname: string;
    };
  };
  purchase_units: Array<{
    amount: {
      currency_code: string;
      value: string;
    };
    description: string;
    custom_id: string;
  }>;
}

export interface PayPalPayment {
  id: string;
  status: string;
  links: Array<{
    href: string;
    rel: string;
    method: string;
  }>;
}

export class PayPalService {
  private config: PayPalConfig;
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;

  constructor() {
    this.config = getPayPalConfig();
  }

  isConfigured(): boolean {
    return isPayPalConfigured();
  }

  private getApiUrl(): string {
    const apiUrl = getPayPalApiUrl(this.config.mode);

    console.log("🔗 PayPal API URL:", apiUrl);
    console.log("🔧 PayPal Mode:", this.config.mode);
    console.log("🔑 Client ID:", this.config.clientId ? "Set" : "Not set");

    return apiUrl;
  }

  private async getAccessToken(): Promise<any> {
    // Check if PayPal is configured
    if (!this.isConfigured()) {
      throw new Error("PayPal is not properly configured. Please check your credentials.");
    }

    // Check if we have a valid token
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    const apiUrl = this.getApiUrl();
    const auth = Buffer.from(
      `${this.config.clientId}:${this.config.clientSecret}`
    ).toString("base64");

    try {
      console.log("🔄 Requesting PayPal access token...");
      
      const response = await fetch(`${apiUrl}/v1/oauth2/token`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-Language": "en_US",
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ PayPal API Error:", {
          status: response.status,
          statusText: response.statusText,
          error: errorText
        });
        
        // Parse error for better debugging
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.error === "invalid_client") {
            throw new Error(
              `PayPal authentication failed: Invalid client credentials. Please check your Client ID and Secret. Mode: ${this.config.mode}`
            );
          }
        } catch (parseError) {
          // If we can't parse the error, use the original error
        }
        
        throw new Error(
          `PayPal authentication failed: ${response.status} - ${errorText}`
        );
      }

      const data = await response.json();

      if (!data.access_token) {
        throw new Error("No access token received from PayPal");
      }

      this.accessToken = data.access_token;
      this.tokenExpiry = Date.now() + data.expires_in * 1000 - 60000; // 1 minute buffer

      console.log("✅ PayPal access token obtained");
      return this.accessToken;
    } catch (error) {
      console.error("❌ PayPal authentication error:", error);
      throw error;
    }
  }

  async createOrder(orderData: {
    orderId: string;
    orderNumber: string;
    total: number;
    description: string;
    customerInfo: any;
    items?: any[];
    currency?: string;
  }): Promise<PayPalPayment> {
    try {
      const accessToken = await this.getAccessToken();
      const apiUrl = this.getApiUrl();

      // Build purchase units with detailed breakdown
      const purchaseUnits = [
        {
          amount: {
            currency_code: orderData.currency || "USD",
            value: orderData.total.toFixed(2),
            breakdown: orderData.items
              ? {
                  item_total: {
                    currency_code: orderData.currency || "USD",
                    value: orderData.items
                      .reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                      .toFixed(2),
                  },
                  tax_total: {
                    currency_code: orderData.currency || "USD",
                    value: "0.00",
                  },
                  shipping: {
                    currency_code: orderData.currency || "USD",
                    value: "0.00",
                  },
                  handling: {
                    currency_code: orderData.currency || "USD",
                    value: "0.00",
                  },
                  shipping_discount: {
                    currency_code: orderData.currency || "USD",
                    value: "0.00",
                  },
                  discount: {
                    currency_code: orderData.currency || "USD",
                    value: "0.00",
                  },
                }
              : undefined,
          },
          description: orderData.description,
          custom_id: orderData.orderId,
          invoice_id: orderData.orderNumber,
          items: orderData.items
            ? orderData.items.map((item) => ({
                name: item.name,
                description: item.included || item.description || "",
                quantity: item.quantity.toString(),
                unit_amount: {
                  currency_code: orderData.currency || "USD",
                  value: item.price.toFixed(2),
                },
                category: "DIGITAL_GOODS",
              }))
            : undefined,
        },
      ];

      const orderPayload = {
        intent: "CAPTURE",
        purchase_units: purchaseUnits,
        application_context: {
          brand_name: "EffeMark",
          landing_page: "NO_PREFERENCE",
          user_action: "PAY_NOW",
          return_url: `${this.config.baseUrl}/payment/success?orderId=${orderData.orderId}`,
          cancel_url: `${this.config.baseUrl}/payment/cancel?orderId=${orderData.orderId}`,
          shipping_preference: "NO_SHIPPING",
        },
      };

      console.log("💳 Creating PayPal order:", {
        orderId: orderData.orderId,
        amount: orderData.total,
        mode: this.config.mode,
      });

      const response = await fetch(`${apiUrl}/v2/checkout/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          "PayPal-Request-Id": orderData.orderId,
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `PayPal order creation failed: ${response.status} - ${errorText}`
        );
      }

      const paymentData = await response.json();

      if (!paymentData.id) {
        throw new Error("No order ID received from PayPal");
      }

      console.log("✅ PayPal order created:", paymentData.id);
      return paymentData;
    } catch (error) {
      console.error("❌ PayPal order creation error:", error);
      throw error;
    }
  }

  async captureOrder(paypalOrderId: string): Promise<PayPalPayment> {
    try {
      const accessToken = await this.getAccessToken();
      const apiUrl = this.getApiUrl();

      console.log("🔄 Capturing PayPal payment:", paypalOrderId);

      const response = await fetch(
        `${apiUrl}/v2/checkout/orders/${paypalOrderId}/capture`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({}),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `PayPal capture failed: ${response.status} - ${errorText}`
        );
      }

      const captureData = await response.json();

      if (captureData.status !== "COMPLETED") {
        throw new Error(
          `Payment capture failed with status: ${captureData.status}`
        );
      }

      console.log("✅ PayPal payment captured:", captureData.id);
      return captureData;
    } catch (error) {
      console.error("❌ PayPal capture error:", error);
      throw error;
    }
  }

  async getOrderDetails(paypalOrderId: string): Promise<PayPalOrder> {
    try {
      const accessToken = await this.getAccessToken();
      const apiUrl = this.getApiUrl();

      const response = await fetch(
        `${apiUrl}/v2/checkout/orders/${paypalOrderId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `PayPal order details failed: ${response.status} - ${errorText}`
        );
      }

      const orderData = await response.json();
      console.log("✅ PayPal order details retrieved:", orderData.id);
      return orderData;
    } catch (error) {
      console.error("❌ PayPal order details error:", error);
      throw error;
    }
  }

  async refundPayment(
    captureId: string,
    amount?: number,
    reason?: string
  ): Promise<any> {
    try {
      const accessToken = await this.getAccessToken();
      const apiUrl = this.getApiUrl();

      const refundPayload = {
        amount: amount
          ? {
              currency_code: "USD",
              value: amount.toFixed(2),
            }
          : undefined,
        reason: reason || "Refund requested",
      };

      console.log("🔄 Refunding PayPal payment:", captureId);

      const response = await fetch(
        `${apiUrl}/v2/payments/captures/${captureId}/refund`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(refundPayload),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `PayPal refund failed: ${response.status} - ${errorText}`
        );
      }

      const refundData = await response.json();
      console.log("✅ PayPal refund processed:", refundData.id);
      return refundData;
    } catch (error) {
      console.error("❌ PayPal refund error:", error);
      throw error;
    }
  }

  // Validate webhook signature
  async validateWebhook(headers: any, body: string): Promise<boolean> {
    try {
      const webhookId = process.env.PAYPAL_WEBHOOK_ID;
      if (!webhookId) {
        console.warn("⚠️ PayPal webhook ID not configured");
        return false;
      }

      const apiUrl = this.getApiUrl();
      const accessToken = await this.getAccessToken();

      const response = await fetch(
        `${apiUrl}/v1/notifications/verify-webhook-signature`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            auth_algo: headers["paypal-auth-algo"],
            cert_id: headers["paypal-cert-id"],
            transmission_id: headers["paypal-transmission-id"],
            transmission_sig: headers["paypal-transmission-sig"],
            transmission_time: headers["paypal-transmission-time"],
            webhook_id: webhookId,
            webhook_event: JSON.parse(body),
          }),
        }
      );

      const result = await response.json();
      return result.verification_status === "SUCCESS";
    } catch (error) {
      console.error("❌ PayPal webhook validation error:", error);
      return false;
    }
  }

  // Get configuration info
  getConfig(): PayPalConfig {
    return { ...this.config };
  }
}

// Export singleton instance
export const paypalService = new PayPalService();
