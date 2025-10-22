import { NextRequest, NextResponse } from 'next/server';
import { paypalService } from '@/lib/paypal';

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

    // Check if PayPal is configured
    if (!paypalService.isConfigured()) {
      return NextResponse.json(
        { error: 'PayPal not configured' },
        { status: 400 }
      );
    }

    // Get order details from PayPal
    const orderDetails = await paypalService.getOrderDetails(orderId);

    return NextResponse.json({
      success: true,
      order: orderDetails,
    });
  } catch (error) {
    console.error('❌ Error fetching PayPal order:', error);
    return NextResponse.json(
      { error: 'Failed to fetch order details' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, orderId, captureId, amount, reason } = body;

    if (!paypalService.isConfigured()) {
      return NextResponse.json(
        { error: 'PayPal not configured' },
        { status: 400 }
      );
    }

    let result: any;

    switch (action) {
      case 'refund':
        if (!captureId) {
          return NextResponse.json(
            { error: 'Capture ID is required for refund' },
            { status: 400 }
          );
        }
        result = await paypalService.refundPayment(captureId, amount, reason);
        break;

      case 'details':
        if (!orderId) {
          return NextResponse.json(
            { error: 'Order ID is required' },
            { status: 400 }
          );
        }
        result = await paypalService.getOrderDetails(orderId);
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
    console.error('❌ Error processing PayPal action:', error);
    return NextResponse.json(
      { error: 'Failed to process action' },
      { status: 500 }
    );
  }
}
