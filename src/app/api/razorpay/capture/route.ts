import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { FallbackOrder } from '@/lib/fallback-storage';
import { razorpayService } from '@/lib/razorpay';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = body;

    if (!orderId || !razorpayPaymentId || !razorpayOrderId || !razorpaySignature) {
      return NextResponse.json(
        { error: 'Missing required payment parameters' },
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
      console.log('⚠️ MongoDB unavailable, using fallback storage for payment capture');
      useFallback = true;
      order = await FallbackOrder.findById(orderId);
    }

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    // Check if Razorpay is configured
    if (!razorpayService.isConfigured()) {
      console.log('🔄 Razorpay not configured, using mock capture');
      
      // Mock successful capture
      order.status = 'completed';
      order.paymentStatus = 'paid';
      order.paymentId = razorpayPaymentId;
      order.paymentMethod = 'razorpay';
      order.completedAt = new Date();

      if (useFallback) {
        await FallbackOrder.updateOrder(orderId, order);
      } else {
        await order.save();
      }

      return NextResponse.json({
        success: true,
        paymentId: razorpayPaymentId,
        orderId: orderId,
        status: 'completed',
        mock: true,
      });
    }

    try {
      // Verify the payment with Razorpay
      const paymentDetails = await razorpayService.getPaymentDetails(razorpayPaymentId);
      
      if (paymentDetails.status !== 'captured') {
        return NextResponse.json(
          { error: 'Payment not captured' },
          { status: 400 }
        );
      }

      // Update order status
      order.status = 'completed';
      order.paymentStatus = 'paid';
      order.paymentId = razorpayPaymentId;
      order.paymentMethod = 'razorpay';
      order.completedAt = new Date();

      if (useFallback) {
        await FallbackOrder.updateOrder(orderId, order);
      } else {
        await order.save();
      }

      console.log('✅ Razorpay payment captured successfully:', razorpayPaymentId);

      return NextResponse.json({
        success: true,
        paymentId: razorpayPaymentId,
        orderId: orderId,
        status: 'completed',
        amount: paymentDetails.amount / 100, // Convert from paise to rupees
        currency: paymentDetails.currency,
      });

    } catch (error) {
      console.error('❌ Error capturing Razorpay payment:', error);
      
      // Update order status to failed
      order.status = 'failed';
      order.paymentStatus = 'failed';
      order.paymentId = razorpayPaymentId;
      order.paymentMethod = 'razorpay';
      order.failedAt = new Date();
      order.failureReason = 'Payment capture failed';

      if (useFallback) {
        await FallbackOrder.updateOrder(orderId, order);
      } else {
        await order.save();
      }

      return NextResponse.json(
        { error: 'Failed to capture payment' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error capturing Razorpay payment:', error);
    return NextResponse.json(
      { error: 'Failed to capture payment' },
      { status: 500 }
    );
  }
}
