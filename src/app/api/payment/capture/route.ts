import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order, { IOrder } from "@/models/Order";
import { FallbackOrder } from "@/lib/fallback-storage";
import { paypalService } from "@/lib/paypal";

// Capture PayPal Payment using the service
async function capturePayPalPayment(orderId: string, paypalOrderId: string) {
  try {
    // Check if PayPal is properly configured
    if (!paypalService.isConfigured()) {
      console.log('🔄 PayPal not configured, using mock capture');
      const mockCapture = {
        id: `MOCK-CAPTURE-${Date.now()}`,
        status: "COMPLETED",
      };

      // Update order status
      await updateOrderStatus(orderId, 'completed', paypalOrderId);
      return mockCapture;
    }

    // Use PayPal service to capture payment
    const captureData = await paypalService.captureOrder(paypalOrderId);
    
    if (captureData.status === 'COMPLETED') {
      // Update order status to completed
      await updateOrderStatus(orderId, 'completed', paypalOrderId);
    } else {
      throw new Error(`Payment capture failed with status: ${captureData.status}`);
    }

    return captureData;

  } catch (error) {
    console.error("❌ Error capturing PayPal payment:", error);

    // Update order status to failed
    await updateOrderStatus(orderId, 'failed', paypalOrderId);
    throw error;
  }
}

// Helper function to update order status
async function updateOrderStatus(orderId: string, status: string, paymentId?: string) {
  try {
    await connectDB();
    const order = await Order.findById(orderId);
    if (order) {
      order.status = status;
      if (paymentId) {
        order.paymentId = paymentId;
      }
      order.paymentStatus = status;
      await order.save();
      console.log(`✅ Order ${orderId} updated to ${status}`);
    }
  } catch (mongoError) {
    console.log('⚠️ MongoDB unavailable, using fallback storage for order update');
    await FallbackOrder.updateOrder(orderId, {
      status,
      paymentId,
      paymentStatus: status,
    });
    console.log(`✅ Fallback order ${orderId} updated to ${status}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, paypalOrderId, paypalSignature } = body;

    if (!orderId || !paypalOrderId) {
      return NextResponse.json(
        { error: "Order ID and PayPal Order ID are required" },
        { status: 400 }
      );
    }

    let order: any = null;
    let useFallback = false;

    try {
      await connectDB();
      order = await Order.findById(orderId);
    } catch (mongoError) {
      console.log('⚠️ MongoDB unavailable, using fallback storage for capture');
      useFallback = true;
      order = await FallbackOrder.findById(orderId);
    }

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Capture PayPal payment
    const capture = await capturePayPalPayment(orderId, paypalOrderId);

    return NextResponse.json({
      success: true,
      captureId: capture.id,
      status: capture.status,
      order: {
        id: order._id || order.id,
        orderNumber: order.orderNumber,
        status: order.status,
        total: order.total,
      },
      storage: useFallback ? 'fallback' : 'mongodb',
    });
  } catch (error) {
    console.error("Error capturing PayPal payment:", error);
    return NextResponse.json(
      { error: "Failed to capture payment" },
      { status: 500 }
    );
  }
}