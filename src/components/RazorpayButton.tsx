"use client";

import React, { useEffect, useState } from "react";

interface RazorpayButtonProps {
  orderId: string;
  total: number;
  onSuccess: (paymentData: any) => void;
  onError: (error: any) => void;
  customerInfo?: {
    fullName?: string;
    email?: string;
    contactNumber?: string;
  };
}

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({
  orderId,
  total,
  onSuccess,
  onError,
  customerInfo,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const loadRazorpayScript = () => {
      // Check if we have valid Razorpay credentials
      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      // Check for valid Razorpay credentials (not mock/placeholder values)
      const isMockKey =
        !keyId ||
        keyId === "mock" ||
        keyId === "your_razorpay_key_id" ||
        keyId === "your_live_razorpay_key_id_here" ||
        keyId === "your_sandbox_razorpay_key_id_here" ||
        keyId.includes("your_") ||
        keyId.includes("_here");

      // Debug Razorpay configuration
      console.log("🔍 Razorpay Button Configuration:");
      console.log("   Key ID:", keyId ? keyId.substring(0, 10) + "..." : "Not set");
      console.log("   Mode:", process.env.RAZORPAY_MODE || "not set");
      console.log("   Is Mock Key:", isMockKey);
      console.log("   Razorpay SDK Available:", !!window.Razorpay);

      if (isMockKey) {
        console.log("🔄 No valid Razorpay credentials, using mock Razorpay button");
        console.log("💡 Current Key ID:", keyId);
        console.log("💡 To enable real Razorpay:");
        console.log("   1. Go to https://dashboard.razorpay.com/");
        console.log("   2. Create a Test or Live account");
        console.log("   3. Copy Key ID and Key Secret");
        console.log("   4. Update .env.local with real credentials");
        console.log("   5. Restart the server");
        setIsLoaded(true);
        return;
      }

      if (window.Razorpay) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
      };
      script.onerror = () => {
        console.error("Failed to load Razorpay SDK");
        onError(new Error("Failed to load Razorpay SDK"));
      };
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, [onError]);

  const handleRazorpayPayment = async () => {
    try {
      setIsProcessing(true);
      console.log("🔄 Creating Razorpay order for:", orderId, "Amount:", total);

      // Create Razorpay order
      const response = await fetch("/api/razorpay/create", {
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

      console.log("✅ Razorpay order created:", result.paymentId);

      // Check if we have valid Razorpay credentials
      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      const isMockKey =
        !keyId ||
        keyId === "mock" ||
        keyId === "your_razorpay_key_id" ||
        keyId === "your_live_razorpay_key_id_here" ||
        keyId === "your_sandbox_razorpay_key_id_here" ||
        keyId.includes("your_") ||
        keyId.includes("_here");

      if (isMockKey || !window.Razorpay) {
        // Mock payment flow
        console.log("🔄 Processing mock Razorpay payment...");
        await new Promise((resolve) => setTimeout(resolve, 2000));

        onSuccess({
          success: true,
          paymentId: result.paymentId,
          status: "completed",
          mock: true,
        });
        return;
      }

      // Real Razorpay payment flow
      const options = {
        key: result.keyId || keyId,
        amount: result.amount || Math.round(total * 100), // Convert to paise
        currency: result.currency || "USD",
        name: "EffeMark",
        description: `Order ${orderId} - Trademark Services`,
        order_id: result.paymentId,
        handler: async function (response: any) {
          try {
            console.log("🔄 Capturing Razorpay payment:", response.razorpay_payment_id);

            const captureResponse = await fetch("/api/razorpay/capture", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                orderId,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              }),
            });

            const captureResult = await captureResponse.json();

            if (!captureResult.success) {
              throw new Error(captureResult.error || "Failed to capture payment");
            }

            console.log("✅ Payment captured successfully");
            onSuccess(captureResult);
          } catch (error) {
            console.error("❌ Error capturing payment:", error);
            onError(error);
          }
        },
        prefill: {
          name: customerInfo?.fullName || "Customer",
          email: customerInfo?.email || "customer@example.com",
          contact: customerInfo?.contactNumber || "9999999999",
        },
        notes: {
          orderId: orderId,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            console.log("❌ Payment cancelled");
            onError(new Error("Payment was cancelled"));
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("❌ Error creating Razorpay payment:", error);
      onError(error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Loading Razorpay...</span>
      </div>
    );
  }

  // Check if we have valid Razorpay credentials
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const isMockKey =
    !keyId ||
    keyId === "mock" ||
    keyId === "your_razorpay_key_id" ||
    keyId === "your_live_razorpay_key_id_here" ||
    keyId === "your_sandbox_razorpay_key_id_here" ||
    keyId.includes("your_") ||
    keyId.includes("_here");

  if (isMockKey || !window.Razorpay) {
    // Show mock Razorpay button
    return (
      <div className="w-full">
        <button
          onClick={handleRazorpayPayment}
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:shadow-none"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Processing...
            </>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Pay with Razorpay (Mock)
            </>
          )}
        </button>
        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="text-yellow-800 text-sm text-center">
            ⚠️ <strong>Real Razorpay credentials needed</strong>
            <br />
            <small>
              Get credentials from{" "}
              <a
                href="https://dashboard.razorpay.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 underline"
              >
                Razorpay Dashboard
              </a>
            </small>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <button
        onClick={handleRazorpayPayment}
        disabled={isProcessing}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:shadow-none"
      >
        {isProcessing ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Processing...
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Pay with Razorpay
          </>
        )}
      </button>
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

export default RazorpayButton;
