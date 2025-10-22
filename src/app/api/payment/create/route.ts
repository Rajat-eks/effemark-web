import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import { FallbackOrder } from "@/lib/fallback-storage";
import { paypalService } from "@/lib/paypal";

// Debug PayPal configuration
console.log("🔍 PayPal Configuration:", {
  CLIENT_ID: process.env.PAYPAL_CLIENT_ID ? "Set" : "Not set",
  CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET ? "Set" : "Not set",
  MODE: process.env.PAYPAL_MODE || "sandbox",
  CONFIGURED: paypalService.isConfigured(),
});

// Create PayPal Payment using the service
async function createPayPalPayment(order: any) {
  try {
    // Check if PayPal is properly configured
    if (!paypalService.isConfigured()) {
      console.log("🔄 PayPal not configured, using mock payment");
      const mockPaymentId = `MOCK-PAY-${Date.now()}`;
      return {
        success: true,
        paymentId: mockPaymentId,
        orderId: order._id || order.id,
        mock: true,
      };
    }

    // Use PayPal service to create order
    const payment = await paypalService.createOrder({
      orderId: order._id || order.id,
      orderNumber: order.orderNumber,
      total: order.total,
      description: `Order ${order.orderNumber} - Trademark Services`,
      customerInfo: order.customerInfo,
    });

    return {
      success: true,
      paymentId: payment.id,
      orderId: order._id || order.id,
      approvalUrl: payment.links?.find((link: any) => link.rel === "approve")
        ?.href,
    };
  } catch (error) {
    console.error("❌ Error creating PayPal payment:", error);
    console.log("🔄 Falling back to mock PayPal payment");

    // Fallback to mock payment if real PayPal fails
    const mockPaymentId = `MOCK-PAY-${Date.now()}`;

    console.log("✅ Mock PayPal payment created:", mockPaymentId);
    return {
      success: true,
      paymentId: mockPaymentId,
      orderId: order._id || order.id,
      mock: true,
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId } = body;

    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }

    let order: any = null;
    let useFallback = false;

    try {
      // Try to connect to MongoDB
      await connectDB();
      order = await Order.findById(orderId);
    } catch (mongoError) {
      console.log("⚠️ MongoDB unavailable, using fallback storage for payment");
      useFallback = true;
      order = await FallbackOrder.findById(orderId);
    }

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (order.status !== "pending") {
      return NextResponse.json(
        { error: "Order is not in pending status" },
        { status: 400 }
      );
    }

    // Create PayPal payment
    const payment = await createPayPalPayment(order);

    // Debug logging
    console.log("Created payment:", payment);

    return NextResponse.json({
      success: true,
      paymentId: payment.paymentId,
      orderId: payment.orderId,
      storage: useFallback ? "fallback" : "mongodb",
    });
  } catch (error) {
    console.error("Error creating PayPal payment:", error);
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    );
  }
}
