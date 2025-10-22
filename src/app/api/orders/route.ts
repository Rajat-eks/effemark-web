import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { FallbackOrder, fallbackStorage } from '@/lib/fallback-storage';
import { paypalService } from '@/lib/paypal';

// Get orders with filtering and pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('id');
    const orderNumber = searchParams.get('orderNumber');
    const email = searchParams.get('email');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    let orders: any[] = [];
    let useFallback = false;

    try {
      await connectDB();
      
      // Build query
      const query: any = {};
      if (orderId) query._id = orderId;
      if (orderNumber) query.orderNumber = orderNumber;
      if (email) query['customerInfo.email'] = email;
      if (status) query.status = status;

      // Get orders from MongoDB
      orders = await Order.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean();

      console.log('✅ Orders retrieved from MongoDB:', orders.length);
    } catch (mongoError) {
      console.log('⚠️ MongoDB unavailable, using fallback storage');
      useFallback = true;
      
      // Get orders from fallback storage
      const allOrders = await fallbackStorage.getAllOrders();
      
      // Apply filters
      orders = allOrders.filter(order => {
        if (orderId && order._id !== orderId) return false;
        if (orderNumber && order.orderNumber !== orderNumber) return false;
        if (email && order.customerInfo.email !== email) return false;
        if (status && order.status !== status) return false;
        return true;
      });

      // Apply pagination
      orders = orders.slice(skip, skip + limit);
    }

    // Get total count for pagination
    let totalCount = 0;
    try {
      if (!useFallback) {
        await connectDB();
        const query: any = {};
        if (orderNumber) query.orderNumber = orderNumber;
        if (email) query['customerInfo.email'] = email;
        if (status) query.status = status;
        totalCount = await Order.countDocuments(query);
      } else {
        const allOrders = await fallbackStorage.getAllOrders();
        totalCount = allOrders.length;
      }
    } catch (error) {
      console.log('⚠️ Could not get total count');
    }

    return NextResponse.json({
      success: true,
      orders: orders.map(order => ({
        id: order._id || order.id,
        orderNumber: order.orderNumber,
        status: order.status,
        total: order.total,
        currency: order.currency,
        paymentMethod: order.paymentMethod,
        paymentStatus: order.paymentStatus,
        customerInfo: {
          fullName: order.customerInfo.fullName,
          email: order.customerInfo.email,
          country: order.customerInfo.country
        },
        items: order.items.length,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt
      })),
      pagination: {
        page,
        limit,
        total: totalCount,
        pages: Math.ceil(totalCount / limit)
      },
      storage: useFallback ? 'fallback' : 'mongodb'
    });

  } catch (error) {
    console.error('❌ Error retrieving orders:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve orders' },
      { status: 500 }
    );
  }
}

// Update order status
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, status, paymentStatus, notes } = body;

    if (!orderId || !status) {
      return NextResponse.json(
        { error: 'Order ID and status are required' },
        { status: 400 }
      );
    }

    const validStatuses = ['pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` },
        { status: 400 }
      );
    }

    let updatedOrder;
    let useFallback = false;

    try {
      await connectDB();
      
      const updateData: any = { status };
      if (paymentStatus) updateData.paymentStatus = paymentStatus;
      if (notes) updateData.notes = notes;

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
      
      const updateData: any = { status };
      if (paymentStatus) updateData.paymentStatus = paymentStatus;
      if (notes) updateData.notes = notes;

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
