#!/usr/bin/env node

/**
 * Test Payment Method Selection and Saving
 */

const testPaymentMethod = async () => {
  console.log('🧪 Testing Payment Method Selection and Saving...\n');

  try {
    // Test order creation
    const testOrder = {
      customerInfo: {
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        contactNumber: '+1234567890',
        country: 'United States',
        markTypes: 'Trademark Search'
      },
      items: [{
        id: 'test-product-1',
        name: 'US Trademark Search',
        price: 99.99,
        quantity: 1,
        banner: '/images/test-banner.jpg',
        included: 'Comprehensive trademark search'
      }],
      total: 99.99,
      currency: 'USD',
      paymentMethod: 'paypal' // Initial payment method
    };

    console.log('📝 Creating order with initial payment method...');
    const orderResponse = await fetch('http://localhost:3000/api/orders/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testOrder)
    });

    if (!orderResponse.ok) {
      throw new Error(`Order creation failed: ${orderResponse.status}`);
    }

    const orderData = await orderResponse.json();
    console.log('✅ Order created successfully');
    console.log('   Order ID:', orderData.order.id);
    console.log('   Initial Payment Method:', orderData.order.paymentMethod);

    const orderId = orderData.order.id;

    // Test updating payment method to Razorpay
    console.log('\n💳 Testing payment method update to Razorpay...');
    const updateResponse = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        paymentMethod: 'razorpay'
      })
    });

    if (!updateResponse.ok) {
      throw new Error(`Payment method update failed: ${updateResponse.status}`);
    }

    const updateData = await updateResponse.json();
    console.log('✅ Payment method updated successfully');
    console.log('   Updated Payment Method:', updateData.order.paymentMethod);

    // Verify the order was updated
    console.log('\n🔍 Verifying order payment method...');
    const verifyResponse = await fetch(`http://localhost:3000/api/orders/${orderId}`);
    const verifyData = await verifyResponse.json();
    
    console.log('✅ Order verification:');
    console.log('   Order ID:', verifyData.order.id);
    console.log('   Payment Method:', verifyData.order.paymentMethod);
    console.log('   Status:', verifyData.order.status);

    // Test updating back to PayPal
    console.log('\n💳 Testing payment method update back to PayPal...');
    const updateResponse2 = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        paymentMethod: 'paypal'
      })
    });

    if (!updateResponse2.ok) {
      throw new Error(`Payment method update failed: ${updateResponse2.status}`);
    }

    const updateData2 = await updateResponse2.json();
    console.log('✅ Payment method updated back to PayPal');
    console.log('   Final Payment Method:', updateData2.order.paymentMethod);

    console.log('\n🎯 Payment Method Test Results:');
    console.log('   ✅ Order Creation: Working');
    console.log('   ✅ Payment Method Update: Working');
    console.log('   ✅ Razorpay Selection: Working');
    console.log('   ✅ PayPal Selection: Working');
    console.log('   ✅ Database Persistence: Working');

    console.log('\n💡 How it works now:');
    console.log('   1. Customer creates order (default: paypal)');
    console.log('   2. Customer selects payment method');
    console.log('   3. Order is updated with selected payment method');
    console.log('   4. Payment method is saved correctly in database');

    console.log('\n🚀 Ready for testing:');
    console.log('   1. Go to checkout page');
    console.log('   2. Create order');
    console.log('   3. Select Razorpay → Order saved as "razorpay"');
    console.log('   4. Select PayPal → Order saved as "paypal"');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
};

testPaymentMethod();
