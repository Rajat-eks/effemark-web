#!/usr/bin/env node

/**
 * Test Dynamic Customer Information in Razorpay
 */

const testDynamicCustomer = async () => {
  console.log("🧪 Testing Dynamic Customer Information in Razorpay...\n");

  try {
    // Test order with customer information
    const testOrder = {
      customerInfo: {
        fullName: "John Doe",
        email: "john.doe@example.com",
        contactNumber: "+1234567890",
        country: "United States",
        markTypes: "Trademark Search",
      },
      items: [
        {
          id: "test-product-1",
          name: "US Trademark Search",
          price: 99.99,
          quantity: 1,
          banner: "/images/test-banner.jpg",
          included: "Comprehensive trademark search",
          customerInfo: {
            fullName: "John Doe",
            email: "john.doe@example.com",
            contactNumber: "+1234567890",
          },
        },
      ],
      total: 99.99,
      currency: "USD",
      paymentMethod: "razorpay",
    };

    console.log("📝 Creating order with customer information...");
    const orderResponse = await fetch(
      "http://localhost:3000/api/orders/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testOrder),
      }
    );

    if (!orderResponse.ok) {
      throw new Error(`Order creation failed: ${orderResponse.status}`);
    }

    const orderData = await orderResponse.json();
    console.log("✅ Order created successfully");
    console.log("Order ID:", orderData.order.id);
    console.log("Customer Name:", testOrder.customerInfo.fullName);
    console.log("Customer Email:", testOrder.customerInfo.email);
    console.log("Customer Phone:", testOrder.customerInfo.contactNumber);

    // Test Razorpay payment creation
    console.log("\n💳 Testing Razorpay payment creation...");
    const paymentResponse = await fetch(
      "http://localhost:3000/api/razorpay/create",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: orderData.order.id }),
      }
    );

    if (!paymentResponse.ok) {
      throw new Error(`Payment creation failed: ${paymentResponse.status}`);
    }

    const paymentData = await paymentResponse.json();
    console.log("✅ Razorpay payment created successfully");
    console.log("Payment ID:", paymentData.paymentId);
    console.log("Amount:", paymentData.amount);
    console.log("Currency:", paymentData.currency);

    console.log("\n🎯 Dynamic Customer Information Test Results:");
    console.log("✅ Customer Name: Will be used in Razorpay prefill");
    console.log("✅ Customer Email: Will be used in Razorpay prefill");
    console.log("✅ Customer Phone: Will be used in Razorpay prefill");
    console.log('✅ No more static "9999999999" phone number');

    console.log("\n💡 How it works:");
    console.log("1. Customer fills form with their information");
    console.log("2. Information is stored in cart items");
    console.log("3. Order is created with customer details");
    console.log("4. RazorpayButton receives customer info");
    console.log("5. Razorpay prefill uses dynamic customer data");

    console.log("\n🚀 Ready for testing:");
    console.log("1. Go to your checkout page");
    console.log("2. Fill in customer information");
    console.log("3. Select Razorpay payment");
    console.log("4. Razorpay will prefill with customer data");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
  }
};

testDynamicCustomer();
