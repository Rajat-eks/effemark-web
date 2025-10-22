"use client";

import React, { useEffect, useState } from "react";

interface PayPalButtonProps {
  orderId: string;
  total: number;
  onSuccess: (paymentData: any) => void;
  onError: (error: any) => void;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

const PayPalButton: React.FC<PayPalButtonProps> = ({
  orderId,
  total,
  onSuccess,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const loadPayPalScript = () => {
      // Check if we have valid PayPal credentials
      const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

      // Check for valid PayPal credentials (not mock/placeholder values)
      const isMockClient =
        !clientId ||
        clientId === "mock" ||
        clientId === "your_paypal_client_id" ||
        clientId === "your_live_paypal_client_id_here" ||
        clientId === "your_sandbox_paypal_client_id_here" ||
        clientId.includes("your_") ||
        clientId.includes("_here");

      // Debug PayPal configuration
      console.log("🔍 PayPal Button Configuration:");
      console.log(
        "   Client ID:",
        clientId ? clientId.substring(0, 10) + "..." : "Not set"
      );
      console.log("Mode:", process.env.PAYPAL_MODE || "not set");
      console.log("Is Mock Client:", isMockClient);
      console.log("PayPal SDK Available:", !!window.paypal);

      if (isMockClient) {
        console.log("🔄 No valid PayPal credentials, using mock PayPal button");
        console.log("💡 Current Client ID:", clientId);
        console.log("💡 To enable real PayPal:");
        console.log("1. Go to https://developer.paypal.com/");
        console.log("2. Create a Sandbox or Live app");
        console.log("3. Copy Client ID and Secret");
        console.log("4. Update .env.local with real credentials");
        console.log("5. Restart the server");
        setIsLoaded(true);
        return;
      }

      if (window.paypal) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture`;
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
      };
      script.onerror = () => {
        console.error("Failed to load PayPal SDK");
        onError(new Error("Failed to load PayPal SDK"));
      };
      document.body.appendChild(script);
    };

    loadPayPalScript();
  }, [onError]);

  useEffect(() => {
    if (!isLoaded) return;

    const paypalButtonContainer = document.getElementById(
      "paypal-button-container"
    );
    if (!paypalButtonContainer) return;

    // Clear previous buttons
    paypalButtonContainer.innerHTML = "";

    // Check if we have valid PayPal credentials
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

    // Check for valid PayPal credentials and SDK availability
    const isMockClient =
      !clientId ||
      clientId === "mock" ||
      clientId === "your_paypal_client_id" ||
      clientId === "your_live_paypal_client_id_here" ||
      clientId === "your_sandbox_paypal_client_id_here" ||
      clientId.includes("your_") ||
      clientId.includes("_here");

    if (isMockClient || !window.paypal) {
      // Show mock PayPal button
      console.log("🔄 Showing mock PayPal button");
      paypalButtonContainer.innerHTML = `
        <div class="mock-paypal-button" style="
          background: linear-gradient(135deg, #0070ba 0%, #005ea6 100%);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        " onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(0,0,0,0.1)'">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.105-.633c-.75-3.437-3.288-5.773-6.46-5.773H7.12c-.524 0-.968.382-1.05.9L2.47 20.597h4.606l1.12-7.106c.082-.518.526-.9 1.05-.9h2.19c4.298 0 7.664-1.747 8.647-6.797.03-.149.054-.294.077-.437.292-1.867-.002-3.137-1.012-4.287z"/>
          </svg>
          Pay with PayPal (Mock)
        </div>
        <div style="
          margin-top: 12px;
          padding: 12px;
          background: #fef3cd;
          border: 1px solid #f6d55c;
          border-radius: 6px;
          font-size: 14px;
          color: #856404;
          text-align: center;
        ">
          ⚠️ <strong>Real PayPal credentials needed</strong>
          <br>
          <small>
            Get credentials from <a href="https://developer.paypal.com/" target="_blank" style="color: #0070ba; text-decoration: underline;">PayPal Developer Dashboard</a>
          </small>
        </div>
      `;

      // Add click handler for mock button
      const mockButton = paypalButtonContainer.querySelector(
        ".mock-paypal-button"
      );
      if (mockButton) {
        mockButton.addEventListener("click", async () => {
          try {
            setIsProcessing(true);
            console.log("🔄 Mock PayPal payment processing...");

            // Simulate payment processing
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Call success callback
            onSuccess({
              success: true,
              paymentId: `MOCK-PAY-${Date.now()}`,
              status: "completed",
            });
          } catch (error) {
            onError(error);
          } finally {
            setIsProcessing(false);
          }
        });
      }
      return;
    }

    window.paypal
      .Buttons({
        style: {
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal",
        },
        createOrder: async (data: any, actions: any) => {
          try {
            setIsProcessing(true);
            console.log(
              "🔄 Creating PayPal order for:",
              orderId,
              "Amount:",
              total
            );

            const response = await fetch("/api/payment/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ orderId }),
            });

            const result = await response.json();

            if (!result.success) {
              throw new Error(result.error || "Failed to create payment");
            }

            console.log("✅ PayPal order created:", result.paymentId);
            return result.paymentId;
          } catch (error) {
            console.error("❌ Error creating PayPal order:", error);
            onError(error);
            throw error;
          } finally {
            setIsProcessing(false);
          }
        },
        onApprove: async (data: any, actions: any) => {
          try {
            setIsProcessing(true);
            console.log("🔄 Capturing PayPal payment:", data.orderID);

            const response = await fetch("/api/payment/capture", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                orderId,
                paypalOrderId: data.orderID,
              }),
            });

            const result = await response.json();

            if (!result.success) {
              throw new Error(result.error || "Failed to capture payment");
            }

            console.log("✅ Payment captured successfully");
            onSuccess(result);
          } catch (error) {
            console.error("❌ Error capturing payment:", error);
            onError(error);
          } finally {
            setIsProcessing(false);
          }
        },
        onError: (err: any) => {
          console.error("❌ PayPal error:", err);
          onError(err);
          setIsProcessing(false);
        },
        onCancel: (data: any) => {
          console.log("❌ Payment cancelled:", data);
          onError(new Error("Payment was cancelled"));
          setIsProcessing(false);
        },
      })
      .render("#paypal-button-container");
  }, [isLoaded, orderId, total, onSuccess, onError]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Loading PayPal...</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div id="paypal-button-container" className="w-full"></div>
      {isProcessing && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
            <span className="text-blue-800 text-sm">Processing payment...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayPalButton;
