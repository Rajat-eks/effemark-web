import { NextRequest, NextResponse } from 'next/server';
import { razorpayService } from '@/lib/razorpay';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { FallbackOrder } from '@/lib/fallback-storage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      console.error('❌ No Razorpay signature found');
      return NextResponse.json(
        { error: 'No signature found' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    if (!razorpayService.verifyWebhookSignature(body, signature)) {
      console.error('❌ Invalid Razorpay webhook signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);
    console.log('🔔 Razorpay webhook received:', event.event);

    // Handle different webhook events
    switch (event.event) {
      case 'payment.captured':
        await handlePaymentCaptured(event.payload.payment.entity);
        break;

      case 'payment.failed':
        await handlePaymentFailed(event.payload.payment.entity);
        break;

      case 'order.paid':
        await handleOrderPaid(event.payload.order.entity);
        break;

      default:
        console.log('ℹ️ Unhandled webhook event:', event.event);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Razorpay webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handlePaymentCaptured(payment: any) {
  try {
    console.log('✅ Payment captured:', payment.id);
    
    const orderId = payment.notes?.orderId;
    if (!orderId) {
      console.error('❌ No order ID in payment notes');
      return;
    }

    let order: any = null;
    let useFallback = false;

    try {
      await connectDB();
      order = await Order.findById(orderId);
    } catch (mongoError) {
      console.log('⚠️ MongoDB unavailable, using fallback storage');
      useFallback = true;
      order = await FallbackOrder.findById(orderId);
    }

    if (!order) {
      console.error('❌ Order not found:', orderId);
      return;
    }

    // Update order status
    order.status = 'completed';
    order.paymentStatus = 'paid';
    order.paymentId = payment.id;
    order.paymentMethod = 'razorpay';
    order.completedAt = new Date();

    if (useFallback) {
      await FallbackOrder.updateOrder(orderId, order);
    } else {
      await order.save();
    }

    console.log('✅ Order updated to completed:', orderId);
  } catch (error) {
    console.error('❌ Error handling payment captured:', error);
  }
}

async function handlePaymentFailed(payment: any) {
  try {
    console.log('❌ Payment failed:', payment.id);
    
    const orderId = payment.notes?.orderId;
    if (!orderId) {
      console.error('❌ No order ID in payment notes');
      return;
    }

    let order: any = null;
    let useFallback = false;

    try {
      await connectDB();
      order = await Order.findById(orderId);
    } catch (mongoError) {
      console.log('⚠️ MongoDB unavailable, using fallback storage');
      useFallback = true;
      order = await FallbackOrder.findById(orderId);
    }

    if (!order) {
      console.error('❌ Order not found:', orderId);
      return;
    }

    // Update order status
    order.status = 'failed';
    order.paymentStatus = 'failed';
    order.paymentId = payment.id;
    order.paymentMethod = 'razorpay';
    order.failedAt = new Date();
    order.failureReason = payment.error_description || 'Payment failed';

    if (useFallback) {
      await FallbackOrder.updateOrder(orderId, order);
    } else {
      await order.save();
    }

    console.log('❌ Order updated to failed:', orderId);
  } catch (error) {
    console.error('❌ Error handling payment failed:', error);
  }
}

async function handleOrderPaid(order: any) {
  try {
    console.log('✅ Order paid:', order.id);
    
    const orderId = order.notes?.orderId;
    if (!orderId) {
      console.error('❌ No order ID in order notes');
      return;
    }

    let orderDoc: any = null;
    let useFallback = false;

    try {
      await connectDB();
      orderDoc = await Order.findById(orderId);
    } catch (mongoError) {
      console.log('⚠️ MongoDB unavailable, using fallback storage');
      useFallback = true;
      orderDoc = await FallbackOrder.findById(orderId);
    }

    if (!orderDoc) {
      console.error('❌ Order not found:', orderId);
      return;
    }

    // Update order status
    orderDoc.status = 'completed';
    orderDoc.paymentStatus = 'paid';
    orderDoc.paymentMethod = 'razorpay';
    orderDoc.completedAt = new Date();

    if (useFallback) {
      await FallbackOrder.updateOrder(orderId, orderDoc);
    } else {
      await orderDoc.save();
    }

    console.log('✅ Order updated to completed:', orderId);
  } catch (error) {
    console.error('❌ Error handling order paid:', error);
  }
}
