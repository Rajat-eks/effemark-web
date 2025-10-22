import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { FallbackOrder } from '@/lib/fallback-storage';
import { paypalService } from '@/lib/paypal';

// Get specific order details
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: orderId } = await params;

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    let order;
    let useFallback = false;

    try {
      await connectDB();
      order = await Order.findById(orderId);
      
      if (!order) {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }

      console.log('✅ Order retrieved from MongoDB:', order.orderNumber);
    } catch (mongoError) {
      console.log('⚠️ MongoDB unavailable, using fallback storage');
      useFallback = true;
      
      order = await FallbackOrder.findById(orderId);
      
      if (!order) {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }
    }

    // Get PayPal order details if payment method is PayPal
    let paypalDetails = null;
    if (order.paymentMethod === 'paypal' && order.paymentId) {
      try {
        if (paypalService.isConfigured()) {
          paypalDetails = await paypalService.getOrderDetails(order.paymentId);
        }
      } catch (paypalError) {
        console.log('⚠️ Could not retrieve PayPal details:', paypalError instanceof Error ? paypalError.message : String(paypalError));
      }
    }

    return NextResponse.json({
      success: true,
      order: {
        id: order._id || order.id,
        orderNumber: order.orderNumber,
        status: order.status,
        paymentStatus: order.paymentStatus,
        total: order.total,
        currency: order.currency,
        paymentMethod: order.paymentMethod,
        paymentMode: order.paymentMode,
        customerInfo: order.customerInfo,
        items: order.items,
        notes: order.notes,
        trackingNumber: order.trackingNumber,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt
      },
      paypal: paypalDetails ? {
        id: paypalDetails.id,
        status: paypalDetails.status,
        amount: paypalDetails.purchase_units?.[0]?.amount,
        payer: paypalDetails.payer
      } : null,
      storage: useFallback ? 'fallback' : 'mongodb'
    });

  } catch (error) {
    console.error('❌ Error retrieving order:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve order' },
      { status: 500 }
    );
  }
}

// Update specific order
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: orderId } = await params;
    const body = await request.json();
    const { status, paymentStatus, notes, trackingNumber, paymentMethod } = body;

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    let updatedOrder;
    let useFallback = false;

    try {
      await connectDB();
      
      const updateData: any = {};
      if (status) updateData.status = status;
      if (paymentStatus) updateData.paymentStatus = paymentStatus;
      if (notes) updateData.notes = notes;
      if (trackingNumber) updateData.trackingNumber = trackingNumber;
      if (paymentMethod) updateData.paymentMethod = paymentMethod;
      if (paymentMethod) updateData.paymentMethod = paymentMethod;

      updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        updateData,
        { new: true }
      );

      if (!updatedOrder) {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }

      console.log('✅ Order updated in MongoDB:', updatedOrder.orderNumber);
    } catch (mongoError) {
      console.log('⚠️ MongoDB unavailable, using fallback storage');
      useFallback = true;
      
      const updateData: any = {};
      if (status) updateData.status = status;
      if (paymentStatus) updateData.paymentStatus = paymentStatus;
      if (notes) updateData.notes = notes;
      if (trackingNumber) updateData.trackingNumber = trackingNumber;
      if (paymentMethod) updateData.paymentMethod = paymentMethod;

      updatedOrder = await FallbackOrder.updateOrder(orderId, updateData);
      
      if (!updatedOrder) {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      order: {
        id: updatedOrder._id || updatedOrder.id,
        orderNumber: updatedOrder.orderNumber,
        status: updatedOrder.status,
        paymentStatus: updatedOrder.paymentStatus,
        total: updatedOrder.total,
        notes: updatedOrder.notes,
        trackingNumber: updatedOrder.trackingNumber,
        updatedAt: updatedOrder.updatedAt
      },
      storage: useFallback ? 'fallback' : 'mongodb'
    });

  } catch (error) {
    console.error('❌ Error updating order:', error);
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
}
