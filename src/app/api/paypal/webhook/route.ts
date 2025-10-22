import { NextRequest, NextResponse } from 'next/server';
import { paypalService } from '@/lib/paypal';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { FallbackOrder } from '@/lib/fallback-storage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headers = Object.fromEntries(request.headers.entries());

    // Validate webhook signature
    const isValid = await paypalService.validateWebhook(headers, body);
    if (!isValid) {
      console.error('❌ Invalid PayPal webhook signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(body);
    console.log('🔔 PayPal webhook received:', event.event_type);

    // Handle different webhook events
    switch (event.event_type) {
      case 'PAYMENT.CAPTURE.COMPLETED':
        await handlePaymentCompleted(event);
        break;
      case 'PAYMENT.CAPTURE.DENIED':
        await handlePaymentDenied(event);
        break;
      case 'PAYMENT.CAPTURE.REFUNDED':
        await handlePaymentRefunded(event);
        break;
      default:
        console.log('ℹ️ Unhandled webhook event:', event.event_type);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ PayPal webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handlePaymentCompleted(event: any) {
  try {
    const capture = event.resource;
    const orderId = capture.custom_id;
    const paypalOrderId = capture.id;

    console.log('✅ Payment completed:', { orderId, paypalOrderId });

    // Update order status
    await updateOrderStatus(orderId, 'completed', paypalOrderId);
  } catch (error) {
    console.error('❌ Error handling payment completed:', error);
  }
}

async function handlePaymentDenied(event: any) {
  try {
    const capture = event.resource;
    const orderId = capture.custom_id;
    const paypalOrderId = capture.id;

    console.log('❌ Payment denied:', { orderId, paypalOrderId });

    // Update order status
    await updateOrderStatus(orderId, 'failed', paypalOrderId);
  } catch (error) {
    console.error('❌ Error handling payment denied:', error);
  }
}

async function handlePaymentRefunded(event: any) {
  try {
    const refund = event.resource;
    const orderId = refund.custom_id;
    const paypalOrderId = refund.id;

    console.log('🔄 Payment refunded:', { orderId, paypalOrderId });

    // Update order status
    await updateOrderStatus(orderId, 'refunded', paypalOrderId);
  } catch (error) {
    console.error('❌ Error handling payment refunded:', error);
  }
}

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
    console.log('⚠️ MongoDB unavailable, using fallback storage for webhook update');
    await FallbackOrder.updateOrder(orderId, {
      status,
      paymentId,
      paymentStatus: status,
    });
    console.log(`✅ Fallback order ${orderId} updated to ${status}`);
  }
}
