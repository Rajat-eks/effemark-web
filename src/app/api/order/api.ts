import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import connectDB from '@/lib/mongodb';
import Order, { IOrder } from '@/models/Order';
import { FallbackOrder, createFallbackDocument } from '@/lib/fallback-storage';

// PayPal Configuration
const paypalClientId = process.env.PAYPAL_CLIENT_ID!;
const paypalClientSecret = process.env.PAYPAL_CLIENT_SECRET!;
const paypalEnvironment = process.env.NODE_ENV === 'production' ? 'live' : 'live';

// Email Configuration - Hostinger SMTP
const emailTransporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER || 'info@effemark.com',
    pass: process.env.EMAIL_PASS || 'Effmrk@3405$',
  },
});

// Test email configuration
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  emailTransporter.verify((error, success) => {
    if (error) {
      console.log('Email configuration error:', error);
    } else {
      console.log('✅ Hostinger SMTP server is ready to send messages');
    }
  });
} else {
  console.log('⚠️ Email credentials not configured, using fallback values');
}

// Order Status Enum
export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

// Order Interface
export interface Order {
  id: string;
  orderNumber: string;
  customerInfo: {
    fullName: string;
    email: string;
    contactNumber: string;
    country: string;
    markTypes: string;
    markDetails?: string;
    niceClasses?: string;
    goodsServices?: string;
    referenceNumber?: string;
    message?: string;
  };
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    banner: string;
    included: string;
    addOns?: Array<{ name: string; price: number }>;
    selectedAddOns?: Array<{ name: string; price: number }>;
  }>;
  total: number;
  status: OrderStatus;
  paymentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// MongoDB will be used for order storage

// Create Order (Legacy - use /api/orders/create for new implementation)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerInfo, items, total } = body;

    // Debug: Log the received data
    console.log('🔍 Order creation data:', {
      customerInfo: customerInfo ? 'Present' : 'Missing',
      items: items ? `${items.length} items` : 'Missing',
      total: total,
      totalType: typeof total
    });

    // Validate required fields
    if (!customerInfo || !items || !total) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Ensure total is a number
    const numericTotal = typeof total === 'string' ? parseFloat(total) : total;
    if (isNaN(numericTotal)) {
      return NextResponse.json(
        { error: 'Invalid total amount' },
        { status: 400 }
      );
    }

    // Generate unique order number
    let orderNumber: string = '';
    let isUnique = false;
    
    while (!isUnique) {
      orderNumber = `EFFE-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      // Check uniqueness in both MongoDB and fallback storage
      const existingOrder = await Order.findOne({ orderNumber }).catch(() => null);
      const existingFallbackOrder = await FallbackOrder.findOne({ orderNumber });
      if (!existingOrder && !existingFallbackOrder) {
        isUnique = true;
      }
    }

    let savedOrder;
    let useFallback = false;

    try {
      // Try to connect to MongoDB
      await connectDB();
      
    // Create order in MongoDB
    const order = new Order({
      orderNumber,
      customerInfo,
      items,
      total: numericTotal,
      status: OrderStatus.PENDING,
      paymentMethod: 'paypal',
      paymentMode: process.env.PAYPAL_MODE || 'live',
    });

      savedOrder = await order.save();
      console.log('✅ Order saved to MongoDB:', savedOrder.orderNumber, 'Total:', savedOrder.total);
    } catch (mongoError) {
      console.log('⚠️ MongoDB unavailable, using fallback storage');
      useFallback = true;
      
      // Use fallback storage
      savedOrder = await FallbackOrder.create({
        orderNumber,
        customerInfo,
        items,
        total: numericTotal,
        status: OrderStatus.PENDING,
        paymentMethod: 'paypal',
        paymentMode: process.env.PAYPAL_MODE || 'live',
      });
    }

    // Send order confirmation email
    await sendOrderConfirmationEmail(savedOrder);

    return NextResponse.json({
      success: true,
      order: {
        id: savedOrder._id,
        orderNumber: savedOrder.orderNumber,
        status: savedOrder.status,
        total: savedOrder.total,
      },
      storage: useFallback ? 'fallback' : 'mongodb',
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

// Get Order by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('id');
    const orderNumber = searchParams.get('orderNumber');
    const email = searchParams.get('email');

    if (!orderId && !orderNumber && !email) {
      return NextResponse.json(
        { error: 'Order ID, Order Number, or Email is required' },
        { status: 400 }
      );
    }

    let order: any = null;
    let useFallback = false;

    try {
      // Try to connect to MongoDB
      await connectDB();

      if (orderId) {
        order = await Order.findById(orderId);
      } else if (orderNumber) {
        order = await Order.findOne({ orderNumber });
      } else if (email) {
        // Return all orders for a customer
        const orders = await Order.find({ 'customerInfo.email': email }).sort({ createdAt: -1 });
        return NextResponse.json({ 
          success: true, 
          orders,
          count: orders.length,
          storage: 'mongodb'
        });
      }
    } catch (mongoError) {
      console.log('⚠️ MongoDB unavailable, using fallback storage');
      useFallback = true;

      if (orderId) {
        order = await FallbackOrder.findById(orderId);
      } else if (orderNumber) {
        order = await FallbackOrder.findByOrderNumber(orderNumber);
      } else if (email) {
        // Return all orders for a customer
        const orders = await FallbackOrder.findByEmail(email);
        return NextResponse.json({ 
          success: true, 
          orders,
          count: orders.length,
          storage: 'fallback'
        });
      }
    }

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      order,
      storage: useFallback ? 'fallback' : 'mongodb'
    });
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json(
      { error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}

// Update Order Status
export async function PATCH(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB();

    const body = await request.json();
    const { orderId, status, paymentId, notes, trackingNumber } = body;

    if (!orderId || !status) {
      return NextResponse.json(
        { error: 'Order ID and status are required' },
        { status: 400 }
      );
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    // Update order
    order.status = status as OrderStatus;
    if (paymentId) {
      order.paymentId = paymentId;
    }
    if (notes) {
      order.notes = notes;
    }
    if (trackingNumber) {
      order.trackingNumber = trackingNumber;
    }

    const updatedOrder = await order.save();

    // Send status update email
    await sendOrderStatusUpdateEmail(updatedOrder);

    return NextResponse.json({
      success: true,
      order: {
        id: updatedOrder._id,
        orderNumber: updatedOrder.orderNumber,
        status: updatedOrder.status,
        updatedAt: updatedOrder.updatedAt,
      },
    });
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
}

// Create PayPal Payment
export async function createPayPalPayment(order: Order) {
  try {
    // Get base URL from environment or use localhost as fallback
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    // For now, return a mock response
    // In production, integrate with actual PayPal API
    const mockPayment = {
      id: `PAY-${Date.now()}`,
      links: [
        {
          rel: 'approve',
          href: `${baseUrl}/payment/process?orderId=${order.id}&paypalOrderId=PAY-${Date.now()}&token=TOKEN-${Date.now()}`,
        },
      ],
    };

    return mockPayment;
  } catch (error) {
    console.error('Error creating PayPal payment:', error);
    throw error;
  }
}

// Capture PayPal Payment
export async function capturePayPalPayment(orderId: string, paypalOrderId: string) {
  try {
    // Mock capture response
    const mockCapture = {
      id: `CAPTURE-${Date.now()}`,
      status: 'COMPLETED',
    };

    // Update order status in MongoDB
    await connectDB();
    const order = await Order.findById(orderId);
    if (order) {
      order.status = 'completed';
      order.paymentId = paypalOrderId;
      order.paymentStatus = 'completed';
      await order.save();
      
      // Send completion email
      await sendOrderCompletionEmail(order);
    }

    return mockCapture;
  } catch (error) {
    console.error('Error capturing PayPal payment:', error);
    
    // Update order status to failed in MongoDB
    await connectDB();
    const order = await Order.findById(orderId);
    if (order) {
      order.status = 'failed';
      order.paymentStatus = 'failed';
      await order.save();
      
      // Send failure email
      await sendOrderFailureEmail(order);
    }
    
    throw error;
  }
}

// Email Functions
async function sendOrderConfirmationEmail(order: Order) {
  try {
    // Skip email if credentials are not configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email credentials not configured, skipping confirmation email');
      return;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@effemark.com',
      to: order.customerInfo.email,
      subject: `Order Confirmation - ${order.orderNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C31117;">Order Confirmation</h2>
          <p>Dear ${order.customerInfo.fullName},</p>
          <p>Thank you for your order! Your order has been received and is being processed.</p>
          
          <h3>Order Details</h3>
          <p><strong>Order Number:</strong> ${order.orderNumber}</p>
          <p><strong>Status:</strong> ${order.status}</p>
          <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
          
          <h3>Customer Information</h3>
          <p><strong>Name:</strong> ${order.customerInfo.fullName}</p>
          <p><strong>Email:</strong> ${order.customerInfo.email}</p>
          <p><strong>Contact:</strong> ${order.customerInfo.contactNumber}</p>
          <p><strong>Country:</strong> ${order.customerInfo.country || 'Not specified'}</p>
          <p><strong>Mark Type:</strong> ${order.customerInfo.markTypes}</p>
          ${order.customerInfo.markDetails ? `<p><strong>Mark Details:</strong> ${order.customerInfo.markDetails}</p>` : ''}
          ${order.customerInfo.niceClasses ? `<p><strong>Nice Classes:</strong> ${order.customerInfo.niceClasses}</p>` : ''}
          ${order.customerInfo.goodsServices ? `<p><strong>Goods & Services:</strong> ${order.customerInfo.goodsServices}</p>` : ''}
          ${order.customerInfo.referenceNumber ? `<p><strong>Reference Number:</strong> ${order.customerInfo.referenceNumber}</p>` : ''}
          ${order.customerInfo.message ? `<p><strong>Additional Message:</strong> ${order.customerInfo.message}</p>` : ''}
          
          <h3>Items Ordered</h3>
          ${order.items.map(item => `
            <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0;">
              <h4>${item.name}</h4>
              <p>Price: $${item.price}</p>
              <p>Quantity: ${item.quantity}</p>
              ${item.selectedAddOns && item.selectedAddOns.length > 0 ? `
                <p>Add-ons: ${item.selectedAddOns.map(addon => `${addon.name} (+$${addon.price})`).join(', ')}</p>
              ` : ''}
            </div>
          `).join('')}
          
          <p>We will contact you soon to proceed with your trademark services.</p>
          <p>Best regards,<br>EffeMark Team</p>
        </div>
      `,
    };

    await emailTransporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${order.customerInfo.email}`);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}

async function sendOrderStatusUpdateEmail(order: Order) {
  try {
    const statusMessages: Record<OrderStatus, string> = {
      [OrderStatus.PENDING]: 'Your order is pending.',
      [OrderStatus.PROCESSING]: 'Your order is now being processed.',
      [OrderStatus.COMPLETED]: 'Your order has been completed successfully!',
      [OrderStatus.FAILED]: 'There was an issue processing your order.',
      [OrderStatus.CANCELLED]: 'Your order has been cancelled.',
    };

    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@effemark.com',
      to: order.customerInfo.email,
      subject: `Order Update - ${order.orderNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C31117;">Order Status Update</h2>
          <p>Dear ${order.customerInfo.fullName},</p>
          <p>Your order status has been updated.</p>
          
          <h3>Order Details</h3>
          <p><strong>Order Number:</strong> ${order.orderNumber}</p>
          <p><strong>New Status:</strong> ${order.status}</p>
          <p><strong>Updated:</strong> ${order.updatedAt.toLocaleString()}</p>
          
          <p>${statusMessages[order.status] || 'Your order status has been updated.'}</p>
          
          <p>Best regards,<br>EffeMark Team</p>
        </div>
      `,
    };

    await emailTransporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending status update email:', error);
  }
}

async function sendOrderCompletionEmail(order: Order) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@effemark.com',
      to: order.customerInfo.email,
      subject: `Order Completed - ${order.orderNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #28a745;">Order Completed Successfully!</h2>
          <p>Dear ${order.customerInfo.fullName},</p>
          <p>Great news! Your order has been completed successfully and payment has been processed.</p>
          
          <h3>Order Details</h3>
          <p><strong>Order Number:</strong> ${order.orderNumber}</p>
          <p><strong>Status:</strong> ${order.status}</p>
          <p><strong>Total Paid:</strong> $${order.total.toFixed(2)}</p>
          <p><strong>Payment ID:</strong> ${order.paymentId}</p>
          
          <p>Our team will now begin working on your trademark services. You will receive updates as we progress.</p>
          <p>Thank you for choosing EffeMark!</p>
          <p>Best regards,<br>EffeMark Team</p>
        </div>
      `,
    };

    await emailTransporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending completion email:', error);
  }
}

async function sendOrderFailureEmail(order: Order) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@effemark.com',
      to: order.customerInfo.email,
      subject: `Order Issue - ${order.orderNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc3545;">Order Processing Issue</h2>
          <p>Dear ${order.customerInfo.fullName},</p>
          <p>We encountered an issue processing your order. Please contact our support team for assistance.</p>
          
          <h3>Order Details</h3>
          <p><strong>Order Number:</strong> ${order.orderNumber}</p>
          <p><strong>Status:</strong> ${order.status}</p>
          <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
          
          <p>Please contact us at <a href="mailto:support@effemark.com">support@effemark.com</a> or call us at +1-972-256-8133 for assistance.</p>
          <p>We apologize for any inconvenience.</p>
          <p>Best regards,<br>EffeMark Team</p>
        </div>
      `,
    };

    await emailTransporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending failure email:', error);
  }
}

// MongoDB is now used for order storage