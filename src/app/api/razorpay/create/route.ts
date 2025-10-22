import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { FallbackOrder } from '@/lib/fallback-storage';
import { razorpayService } from '@/lib/razorpay';

// Debug Razorpay configuration
console.log('🔍 Razorpay Configuration:', {
  KEY_ID: process.env.RAZORPAY_KEY_ID ? 'Set' : 'Not set',
  KEY_SECRET: process.env.RAZORPAY_KEY_SECRET ? 'Set' : 'Not set',
  MODE: process.env.RAZORPAY_MODE || 'sandbox',
  CONFIGURED: razorpayService.isConfigured()
});

// Create Razorpay Payment using the service
async function createRazorpayPayment(order: any) {
  try {
    // Check if Razorpay is properly configured
    if (!razorpayService.isConfigured()) {
      console.log('🔄 Razorpay not configured, using mock payment');
      const mockPaymentId = `MOCK-RZP-${Date.now()}`;
      return {
        success: true,
        paymentId: mockPaymentId,
        orderId: order._id || order.id,
        mock: true,
      };
    }

    // Use Razorpay service to create order
    const payment = await razorpayService.createOrder({
      orderId: order._id || order.id,
      orderNumber: order.orderNumber,
      total: order.total,
      description: `Order ${order.orderNumber} - Trademark Services`,
      customerInfo: order.customerInfo,
      currency: 'USD', // Using USD for international customers
    });

    return {
      success: true,
      paymentId: payment.id,
      orderId: order._id || order.id,
      amount: payment.amount,
      currency: payment.currency,
      keyId: razorpayService.getClientConfig().keyId,
    };

  } catch (error) {
    console.error('❌ Error creating Razorpay payment:', error);
    console.log('🔄 Falling back to mock Razorpay payment');
    
    // Fallback to mock payment if real Razorpay fails
    const mockPaymentId = `MOCK-RZP-${Date.now()}`;
    
    console.log('✅ Mock Razorpay payment created:', mockPaymentId);
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
        { error: 'Order ID is required' },
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
      console.log('⚠️ MongoDB unavailable, using fallback storage for payment');
      useFallback = true;
      order = await FallbackOrder.findById(orderId);
    }

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    if (order.status !== 'pending') {
      return NextResponse.json(
        { error: 'Order is not in pending status' },
        { status: 400 }
      );
    }

    // Create Razorpay payment
    const payment = await createRazorpayPayment(order);
    
    // Debug logging
    console.log("Created Razorpay payment:", payment);

    return NextResponse.json({
      success: true,
      paymentId: payment.paymentId,
      orderId: payment.orderId,
      amount: payment.amount,
      currency: payment.currency,
      keyId: payment.keyId,
      storage: useFallback ? 'fallback' : 'mongodb',
    });
  } catch (error) {
    console.error('Error creating Razorpay payment:', error);
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    );
  }
}
