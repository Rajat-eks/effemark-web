import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";
import { FallbackOrder } from "@/lib/fallback-storage";
import { paypalService } from "@/lib/paypal";

// Order Status Enum
export enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  COMPLETED = "completed",
  FAILED = "failed",
  CANCELLED = "cancelled",
  REFUNDED = "refunded",
}

// Create Order with PayPal Integration
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      customerInfo,
      items,
      total,
      currency = "USD",
      paymentMethod = "paypal",
      notes,
    } = body;

    // Validate required fields
    if (!customerInfo || !items || !total) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: customerInfo, items, and total are required",
        },
        { status: 400 }
      );
    }

    // Validate customer info
    const requiredCustomerFields = [
      "fullName",
      "email",
      "contactNumber",
      "country",
      "markTypes",
    ];
    const missingFields = requiredCustomerFields.filter(
      (field) => !customerInfo[field]
    );
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing customer fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Validate items
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Items must be a non-empty array" },
        { status: 400 }
      );
    }

    // Validate total
    const numericTotal = typeof total === "string" ? parseFloat(total) : total;
    if (isNaN(numericTotal) || numericTotal <= 0) {
      return NextResponse.json(
        { error: "Total must be a positive number" },
        { status: 400 }
      );
    }

    // Debug: Log the received data
    console.log("🔍 Order creation request:", {
      customerInfo: customerInfo ? "Present" : "Missing",
      items: items ? `${items.length} items` : "Missing",
      total: numericTotal,
      currency,
      paymentMethod,
    });

    // Generate unique order number
    let orderNumber: string = "";
    let isUnique = false;

    while (!isUnique) {
      orderNumber = `EFFE-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)
        .toUpperCase()}`;
      // Check uniqueness in both MongoDB and fallback storage
      const existingOrder = await Order.findOne({ orderNumber }).catch(
        () => null
      );
      const existingFallbackOrder = await FallbackOrder.findOne({
        orderNumber,
      });
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
        currency,
        status: OrderStatus.PENDING,
        paymentMethod,
        paymentMode: process.env.PAYPAL_MODE || "live",
        notes,
      });

      savedOrder = await order.save();
      console.log(
        "✅ Order saved to MongoDB:",
        savedOrder.orderNumber,
        "Total:",
        savedOrder.total
      );
    } catch (mongoError) {
      console.log("⚠️ MongoDB unavailable, using fallback storage");
      useFallback = true;

      // Use fallback storage
      savedOrder = await FallbackOrder.create({
        orderNumber,
        customerInfo,
        items,
        total: numericTotal,
        currency,
        status: OrderStatus.PENDING,
        paymentMethod,
        paymentMode: process.env.PAYPAL_MODE || "live",
        notes,
      });
    }

    // Create PayPal order if payment method is PayPal
    let paypalOrder = null;
    if (paymentMethod === "paypal") {
      try {
        if (paypalService.isConfigured()) {
          paypalOrder = await paypalService.createOrder({
            orderId: savedOrder._id || savedOrder.id,
            orderNumber: savedOrder.orderNumber,
            total: savedOrder.total,
            currency: savedOrder.currency,
            description: `Order ${savedOrder.orderNumber} - Trademark Services`,
            customerInfo: savedOrder.customerInfo,
            items: savedOrder.items,
          });

          // Update order with PayPal order ID
          if (paypalOrder && paypalOrder.id) {
            try {
              await connectDB();
              await Order.findByIdAndUpdate(savedOrder._id || savedOrder.id, {
                paymentId: paypalOrder.id,
                paymentStatus: "pending",
              });
            } catch (mongoError) {
              await FallbackOrder.updateOrder(savedOrder._id || savedOrder.id, {
                paymentId: paypalOrder.id,
                paymentStatus: "pending",
              });
            }
          }
        } else {
          console.log(
            "⚠️ PayPal not configured, creating order without payment"
          );
        }
      } catch (paypalError) {
        console.error("❌ PayPal order creation failed:", paypalError);
        // Continue with order creation even if PayPal fails
      }
    }

    // Send order confirmation email (if configured)
    try {
      await sendOrderConfirmationEmail(savedOrder);
    } catch (emailError) {
      console.log("⚠️ Email sending failed:", emailError instanceof Error ? emailError.message : String(emailError));
    }

    return NextResponse.json({
      success: true,
      order: {
        id: savedOrder._id || savedOrder.id,
        orderNumber: savedOrder.orderNumber,
        status: savedOrder.status,
        total: savedOrder.total,
        currency: savedOrder.currency,
        paymentMethod: savedOrder.paymentMethod,
        paymentId: paypalOrder?.id || null,
        approvalUrl:
          paypalOrder?.links?.find((link: any) => link.rel === "approve")
            ?.href || null,
        createdAt: savedOrder.createdAt,
      },
      paypal: paypalOrder
        ? {
            id: paypalOrder.id,
            status: paypalOrder.status,
            approvalUrl: paypalOrder.links?.find(
              (link: any) => link.rel === "approve"
            )?.href,
            links: paypalOrder.links,
          }
        : null,
      storage: useFallback ? "fallback" : "mongodb",
    });
  } catch (error) {
    console.error("❌ Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}

// Send order confirmation email
async function sendOrderConfirmationEmail(order: any) {
  // This function would send email notifications
  // Implementation depends on your email service
  console.log(
    "📧 Order confirmation email would be sent for:",
    order.orderNumber
  );
}
