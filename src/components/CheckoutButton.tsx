"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { clearCart } from "@/lib/slices/cartSlice";
import PayPalButton from "./PayPalButton";
import RazorpayButton from "./RazorpayButton";

interface CheckoutButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  className = "w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors",
  children = "Proceed to Checkout",
}) => {
  const { items, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'paypal' | 'razorpay' | null>(null);

  const handleCheckout = async () => {
    if (items.length === 0) {
      setError("Your cart is empty");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Debug: Log the data being sent
      console.log('🔍 Checkout data:', {
        items: items.length,
        total: total,
        totalType: typeof total,
        customerInfo: items[0].customerInfo ? 'Present' : 'Missing'
      });

      // Create order using new comprehensive API
      const orderResponse = await fetch("/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerInfo: items[0].customerInfo, // Use customer info from first item
          items: items.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            banner: item.banner,
            included: item.included,
            addOns: item.addOns,
            selectedAddOns: item.selectedAddOns,
          })),
          total: total,
          currency: 'USD',
          paymentMethod: selectedPaymentMethod || 'paypal',
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error(orderData.error || "Failed to create order");
      }

      console.log("✅ Order created:", orderData.order.id);
      setOrderId(orderData.order.id);
      setShowPayment(true);
    } catch (err) {
      console.error("Checkout error:", err);
      setError(err instanceof Error ? err.message : "Checkout failed");
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = (paymentData: any) => {
    console.log("✅ Payment successful:", paymentData);
    dispatch(clearCart());
    // Redirect to success page
    window.location.href = `/payment/success?orderId=${orderId}`;
  };

  const handlePaymentError = (error: any) => {
    console.error("❌ Payment error:", error);
    setError(error.message || "Payment failed");
    setShowPayment(false);
    setSelectedPaymentMethod(null);
  };

  const updateOrderPaymentMethod = async (paymentMethod: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod: paymentMethod
        })
      });

      if (!response.ok) {
        console.error('Failed to update order payment method');
      } else {
        console.log(`✅ Order updated with payment method: ${paymentMethod}`);
      }
    } catch (error) {
      console.error('Error updating order payment method:', error);
    }
  };

  if (items.length === 0) {
    return null;
  }

  if (showPayment && orderId) {
    return (
      <div className="space-y-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-green-800 font-semibold mb-2">Order Created Successfully!</h3>
          <p className="text-green-700 text-sm">Order ID: {orderId}</p>
        </div>
        
        {!selectedPaymentMethod ? (
          <div className="border-t pt-4">
            <h4 className="text-lg font-semibold mb-3">Choose Payment Method</h4>
            <div className="space-y-3">
              {/* <button
                onClick={async () => {
                  setSelectedPaymentMethod('paypal');
                  // Update order with payment method
                  await updateOrderPaymentMethod('paypal');
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.105-.633c-.75-3.437-3.288-5.773-6.46-5.773H7.12c-.524 0-.968.382-1.05.9L2.47 20.597h4.606l1.12-7.106c.082-.518.526-.9 1.05-.9h2.19c4.298 0 7.664-1.747 8.647-6.797.03-.149.054-.294.077-.437.292-1.867-.002-3.137-1.012-4.287z"/>
                </svg>
                Pay with PayPal
              </button> */}
              
              <button
                onClick={async () => {
                  setSelectedPaymentMethod('razorpay');
                  // Update order with payment method
                  await updateOrderPaymentMethod('razorpay');
                }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Pay with Razorpay
              </button>
            </div>
          </div>
        ) : (
          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold">
                Complete Payment with {selectedPaymentMethod === 'paypal' ? 'PayPal' : 'Razorpay'}
              </h4>
              <button
                onClick={() => setSelectedPaymentMethod(null)}
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Change Method
              </button>
            </div>
            
            {selectedPaymentMethod === 'paypal' ? (
              <PayPalButton
                orderId={orderId}
                total={total}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            ) : (
              <RazorpayButton
                orderId={orderId}
                total={total}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
                customerInfo={items[0]?.customerInfo}
              />
            )}
          </div>
        )}

        <button
          onClick={() => {
            setShowPayment(false);
            setSelectedPaymentMethod(null);
          }}
          className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Cancel Payment
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <button
        onClick={handleCheckout}
        disabled={isProcessing}
        className={`${className} ${
          isProcessing ? "opacity-75 cursor-not-allowed" : ""
        }`}
      >
        {isProcessing ? "Creating Order..." : children}
      </button>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default CheckoutButton;
