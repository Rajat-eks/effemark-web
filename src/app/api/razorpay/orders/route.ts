import { NextRequest, NextResponse } from 'next/server';
import { razorpayService } from '@/lib/razorpay';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    // Check if Razorpay is configured
    if (!razorpayService.isConfigured()) {
      return NextResponse.json(
        { error: 'Razorpay not configured' },
        { status: 400 }
      );
    }

    // Get order details from Razorpay
    const orderDetails = await razorpayService.getOrderDetails(orderId);

    return NextResponse.json({
      success: true,
      order: orderDetails,
    });
  } catch (error) {
    console.error('❌ Error fetching Razorpay order:', error);
    return NextResponse.json(
      { error: 'Failed to fetch order details' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, orderId, paymentId, amount, reason } = body;

    if (!razorpayService.isConfigured()) {
      return NextResponse.json(
        { error: 'Razorpay not configured' },
        { status: 400 }
      );
    }

    let result: any;

    switch (action) {
      case 'refund':
        if (!paymentId) {
          return NextResponse.json(
            { error: 'Payment ID is required for refund' },
            { status: 400 }
          );
        }
        result = await razorpayService.refundPayment(paymentId, amount, reason);
        break;

      case 'details':
        if (!orderId) {
          return NextResponse.json(
            { error: 'Order ID is required' },
            { status: 400 }
          );
        }
        result = await razorpayService.getOrderDetails(orderId);
        break;

      case 'payment_details':
        if (!paymentId) {
          return NextResponse.json(
            { error: 'Payment ID is required' },
            { status: 400 }
          );
        }
        result = await razorpayService.getPaymentDetails(paymentId);
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error('❌ Error processing Razorpay action:', error);
    return NextResponse.json(
      { error: 'Failed to process action' },
      { status: 500 }
    );
  }
}
