import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

// Track order by order number or email
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const orderNumber = searchParams.get('orderNumber');
    const email = searchParams.get('email');

    if (!orderNumber && !email) {
      return NextResponse.json(
        { error: 'Order number or email is required' },
        { status: 400 }
      );
    }

    let orders;

    if (orderNumber) {
      // Find order by order number
      const order = await Order.findOne({ orderNumber });
      if (!order) {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }
      orders = [order];
    } else {
      // Find orders by email
      orders = await Order.find({ 'customerInfo.email': email })
        .sort({ createdAt: -1 });
    }

    // Return order details without sensitive information
    const orderDetails = orders.map(order => ({
      id: order._id,
      orderNumber: order.orderNumber,
      status: order.status,
      total: order.total,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      trackingNumber: order.trackingNumber,
      estimatedDelivery: order.estimatedDelivery,
      items: order.items.map((item: any) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      customerInfo: {
        fullName: order.customerInfo.fullName,
        email: order.customerInfo.email,
        contactNumber: order.customerInfo.contactNumber,
        country: order.customerInfo.country
      }
    }));

    return NextResponse.json({
      success: true,
      orders: orderDetails,
      count: orderDetails.length
    });
  } catch (error) {
    console.error('Error tracking order:', error);
    return NextResponse.json(
      { error: 'Failed to track order' },
      { status: 500 }
    );
  }
}
