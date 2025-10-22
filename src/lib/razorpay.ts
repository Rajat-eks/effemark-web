// Razorpay Backend Service
import Razorpay from 'razorpay';
import crypto from 'crypto';

export interface RazorpayConfig {
  keyId: string;
  keySecret: string;
  mode: 'sandbox' | 'live';
  baseUrl: string;
}

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  status: string;
  receipt: string;
  created_at: number;
  notes?: Record<string, any>;
}

export interface RazorpayPayment {
  id: string;
  order_id: string;
  status: string;
  amount: number;
  currency: string;
  method: string;
  description: string;
  created_at: number;
  captured: boolean;
  email: string;
  contact: string;
  notes?: Record<string, any>;
}

export interface RazorpayRefund {
  id: string;
  payment_id: string;
  amount: number;
  currency: string;
  status: string;
  created_at: number;
  notes?: Record<string, any>;
}

export class RazorpayService {
  private config: RazorpayConfig;
  private razorpay: Razorpay;

  constructor() {
    this.config = {
      keyId: process.env.RAZORPAY_KEY_ID || "",
      keySecret: process.env.RAZORPAY_KEY_SECRET || "",
      mode: (process.env.RAZORPAY_MODE as "sandbox" | "live") || "sandbox",
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    };

    this.razorpay = new Razorpay({
      key_id: this.config.keyId,
      key_secret: this.config.keySecret,
    });
  }

  private getApiUrl(): string {
    return this.config.mode === "live" 
      ? "https://api.razorpay.com" 
      : "https://api.razorpay.com";
  }

  async createOrder(orderData: {
    orderId: string;
    orderNumber: string;
    total: number;
    description: string;
    customerInfo: any;
    items?: any[];
    currency?: string;
  }): Promise<RazorpayOrder> {
    try {
      const amount = Math.round(orderData.total * 100); // Convert to paise/cents
      const currency = orderData.currency || "USD";

      console.log("💳 Creating Razorpay order:", {
        orderId: orderData.orderId,
        amount: orderData.total,
        currency,
        mode: this.config.mode,
      });

      const orderOptions = {
        amount: amount,
        currency: currency,
        receipt: orderData.orderNumber,
        notes: {
          orderId: orderData.orderId,
          orderNumber: orderData.orderNumber,
          customerEmail: orderData.customerInfo?.email,
          customerName: orderData.customerInfo?.name,
          description: orderData.description,
        },
      };

      const order = await this.razorpay.orders.create(orderOptions);

      console.log("✅ Razorpay order created:", order.id);
      return order as RazorpayOrder;
    } catch (error) {
      console.error("❌ Razorpay order creation error:", error);
      throw error;
    }
  }

  async capturePayment(paymentId: string, amount?: number): Promise<RazorpayPayment> {
    try {
      console.log("🔄 Capturing Razorpay payment:", paymentId);

      const captureAmount = amount ? Math.round(amount * 100) : 0; // Convert to paise/cents

      const payment = await this.razorpay.payments.capture(paymentId, captureAmount, 'INR');

      console.log("✅ Razorpay payment captured:", payment.id);
      return payment as RazorpayPayment;
    } catch (error) {
      console.error("❌ Razorpay capture error:", error);
      throw error;
    }
  }

  async getOrderDetails(orderId: string): Promise<RazorpayOrder> {
    try {
      const order = await this.razorpay.orders.fetch(orderId);
      console.log("✅ Razorpay order details retrieved:", order.id);    
      return order as RazorpayOrder;
    } catch (error) {
      console.error("❌ Razorpay order details error:", error);
      throw error;
    }
  }

  async getPaymentDetails(paymentId: string): Promise<RazorpayPayment> {
    try {
      const payment = await this.razorpay.payments.fetch(paymentId);
      console.log("✅ Razorpay payment details retrieved:", payment.id);
      return payment as RazorpayPayment;
    } catch (error) {
      console.error("❌ Razorpay payment details error:", error);
      throw error;
    }
  }

  async refundPayment(
    paymentId: string,
    amount?: number,
    reason?: string
  ): Promise<RazorpayRefund> {
    try {
      const refundOptions: any = {};
      if (amount) {
        refundOptions.amount = Math.round(amount * 100); // Convert to paise/cents
      }
      if (reason) {
        refundOptions.notes = { reason };
      }

      console.log("🔄 Refunding Razorpay payment:", paymentId);

      const refund = await this.razorpay.payments.refund(paymentId, refundOptions);

      console.log("✅ Razorpay refund processed:", refund.id);
      return refund as RazorpayRefund;
    } catch (error) {
      console.error("❌ Razorpay refund error:", error);
      throw error;
    }
  }

  // Verify webhook signature
  verifyWebhookSignature(body: string, signature: string): boolean {
    try {
      const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
      if (!webhookSecret) {
        console.warn("⚠️ Razorpay webhook secret not configured");
        return false;
      }

      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(body)
        .digest('hex');

      return crypto.timingSafeEqual(
        Buffer.from(signature, 'hex'),
        Buffer.from(expectedSignature, 'hex')
      );
    } catch (error) {
      console.error("❌ Razorpay webhook verification error:", error);
      return false;
    }
  }

  // Get configuration info
  getConfig(): RazorpayConfig {
    return { ...this.config };
  }

  // Check if service is properly configured
  isConfigured(): boolean {
    return !!(this.config.keyId && this.config.keySecret);
  }

  // Get client configuration for frontend
  getClientConfig() {
    return {
      keyId: this.config.keyId,
      mode: this.config.mode,
    };
  }
}

// Export singleton instance
export const razorpayService = new RazorpayService();
