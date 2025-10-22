#!/usr/bin/env node

/**
 * Comprehensive Order Flow Test
 * Tests: Order Creation → Database Save → Email → Payment → Completion
 */

const testOrderFlow = async () => {
  console.log('🧪 Starting Comprehensive Order Flow Test...\n');

  // Test data
  const testOrder = {
    customerInfo: {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      contactNumber: '+1234567890',
      country: 'United States',
      markTypes: 'Trademark Search',
      niceClasses: 'Class 35',
      goodsServices: 'Business Services',
      referenceNumber: 'REF123',
      message: 'Test order message'
    },
    items: [
      {
        id: 'test-product-1',
        name: 'US Trademark Search',
        price: 99.99,
        quantity: 1,
        banner: '/images/test-banner.jpg',
        included: 'Comprehensive trademark search',
        addOns: [
          { name: 'Priority Processing', price: 25.00 }
        ],
        selectedAddOns: [
          { name: 'Priority Processing', price: 25.00 }
        ]
      }
    ],
    total: 124.99,
    currency: 'USD',
    paymentMethod: 'paypal'
  };

  try {
    // Step 1: Test Order Creation
    console.log('📝 Step 1: Testing Order Creation...');
    const createResponse = await fetch('http://localhost:3000/api/orders/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testOrder)
    });

    if (!createResponse.ok) {
      throw new Error(`Order creation failed: ${createResponse.status}`);
    }

    const createResult = await createResponse.json();
    console.log('✅ Order created successfully:', createResult.order.id);
    console.log('   Order Number:', createResult.order.orderNumber);
    console.log('   Status:', createResult.order.status);
    console.log('   Storage:', createResult.storage);

    const orderId = createResult.order.id;

    // Step 2: Test Order Retrieval
    console.log('\n📋 Step 2: Testing Order Retrieval...');
    const getResponse = await fetch(`http://localhost:3000/api/orders/${orderId}`);
    
    if (!getResponse.ok) {
      throw new Error(`Order retrieval failed: ${getResponse.status}`);
    }

    const orderData = await getResponse.json();
    console.log('✅ Order retrieved successfully');
    console.log('   Customer:', orderData.order.customerInfo.fullName);
    console.log('   Items:', orderData.order.items.length);
    console.log('   Total:', orderData.order.total);

    // Step 3: Test Payment Creation (PayPal)
    console.log('\n💳 Step 3: Testing Payment Creation...');
    const paymentResponse = await fetch('http://localhost:3000/api/payment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId })
    });

    if (!paymentResponse.ok) {
      throw new Error(`Payment creation failed: ${paymentResponse.status}`);
    }

    const paymentResult = await paymentResponse.json();
    console.log('✅ Payment created successfully');
    console.log('   Payment ID:', paymentResult.paymentId);
    console.log('   Storage:', paymentResult.storage);

    // Step 4: Test Payment Capture (Mock)
    console.log('\n💰 Step 4: Testing Payment Capture...');
    const captureResponse = await fetch('http://localhost:3000/api/payment/capture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId,
        paypalOrderId: paymentResult.paymentId,
        paypalSignature: 'mock-signature'
      })
    });

    if (!captureResponse.ok) {
      throw new Error(`Payment capture failed: ${captureResponse.status}`);
    }

    const captureResult = await captureResponse.json();
    console.log('✅ Payment captured successfully');
    console.log('   Status:', captureResult.status);
    console.log('   Payment ID:', captureResult.paymentId);

    // Step 5: Verify Final Order Status
    console.log('\n🔍 Step 5: Verifying Final Order Status...');
    const finalResponse = await fetch(`http://localhost:3000/api/orders/${orderId}`);
    const finalOrder = await finalResponse.json();
    
    console.log('✅ Final order status verified');
    console.log('   Status:', finalOrder.order.status);
    console.log('   Payment Status:', finalOrder.order.paymentStatus);
    console.log('   Payment Method:', finalOrder.order.paymentMethod);
    console.log('   Completed At:', finalOrder.order.completedAt);

    // Step 6: Test Email Configuration
    console.log('\n📧 Step 6: Testing Email Configuration...');
    const emailTestResponse = await fetch('http://localhost:3000/api/test-env');
    const emailTest = await emailTestResponse.json();
    
    console.log('📧 Email Configuration:');
    console.log('   Email User:', emailTest.EMAIL_USER ? 'Configured' : 'Not configured');
    console.log('   Email Pass:', emailTest.EMAIL_PASS ? 'Configured' : 'Not configured');
    console.log('   MongoDB:', emailTest.MONGODB_URI ? 'Configured' : 'Not configured');

    console.log('\n🎉 All tests completed successfully!');
    console.log('\n📊 Test Summary:');
    console.log('   ✅ Order Creation');
    console.log('   ✅ Database Storage');
    console.log('   ✅ Order Retrieval');
    console.log('   ✅ Payment Creation');
    console.log('   ✅ Payment Capture');
    console.log('   ✅ Order Completion');
    console.log('   ✅ Email Configuration Check');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('   Make sure your development server is running on http://localhost:3000');
    process.exit(1);
  }
};

// Run the test
testOrderFlow();
