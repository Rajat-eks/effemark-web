// Test PayPal Service Integration
require('dotenv').config();

console.log('🔍 PayPal Service Integration Test');
console.log('==================================');

// Test environment variables
console.log('\n📋 Environment Variables:');
console.log('PAYPAL_CLIENT_ID:', process.env.PAYPAL_CLIENT_ID ? 'Set' : 'Not set');
console.log('PAYPAL_CLIENT_SECRET:', process.env.PAYPAL_CLIENT_SECRET ? 'Set' : 'Not set');
console.log('PAYPAL_MODE:', process.env.PAYPAL_MODE || 'not set');
console.log('NEXT_PUBLIC_PAYPAL_CLIENT_ID:', process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ? 'Set' : 'Not set');

// Test PayPal configuration
async function testPayPalService() {
  try {
    // Import the PayPal service
    const { PayPalService } = require('./src/lib/paypal.ts');
    
    console.log('\n🔧 Testing PayPal Service...');
    
    // Create service instance
    const paypalService = new PayPalService();
    
    // Check configuration
    console.log('Is Configured:', paypalService.isConfigured());
    
    if (!paypalService.isConfigured()) {
      console.log('❌ PayPal service is not configured');
      console.log('💡 Please check your environment variables');
      return;
    }
    
    // Test creating an order
    console.log('\n🔄 Testing PayPal order creation...');
    
    const testOrderData = {
      orderId: 'test-order-123',
      orderNumber: 'TEST-001',
      total: 100.00,
      description: 'Test Order - PayPal Integration',
      customerInfo: {
        name: 'Test Customer',
        email: 'test@example.com'
      },
      currency: 'USD'
    };
    
    try {
      const order = await paypalService.createOrder(testOrderData);
      console.log('✅ PayPal order created successfully!');
      console.log('Order ID:', order.id);
      console.log('Status:', order.status);
      console.log('Approval URL:', order.links?.find(link => link.rel === 'approve')?.href);
    } catch (error) {
      console.log('❌ PayPal order creation failed:');
      console.log('Error:', error.message);
      
      if (error.message.includes('invalid_client')) {
        console.log('\n💡 Possible solutions:');
        console.log('1. Check your Client ID and Secret are correct');
        console.log('2. Verify you are using the right mode (sandbox vs live)');
        console.log('3. Make sure your PayPal app is approved (for live mode)');
      }
    }
    
  } catch (error) {
    console.log('❌ Error testing PayPal service:');
    console.log('Error:', error.message);
  }
}

// Test PayPal configuration helper
async function testPayPalConfig() {
  try {
    console.log('\n🔧 Testing PayPal Configuration Helper...');
    
    const { getPayPalConfig, isPayPalConfigured, getPayPalApiUrl } = require('./src/lib/paypal-config.ts');
    
    const config = getPayPalConfig();
    console.log('Configuration:', {
      clientId: config.clientId ? 'Set' : 'Not set',
      clientSecret: config.clientSecret ? 'Set' : 'Not set',
      mode: config.mode,
      baseUrl: config.baseUrl
    });
    
    console.log('Is Configured:', isPayPalConfigured());
    console.log('API URL:', getPayPalApiUrl(config.mode));
    
  } catch (error) {
    console.log('❌ Error testing PayPal config:');
    console.log('Error:', error.message);
  }
}

// Run tests
async function runTests() {
  await testPayPalConfig();
  await testPayPalService();
  
  console.log('\n📋 Summary:');
  console.log('1. Check your .env file has correct PayPal credentials');
  console.log('2. Verify your PayPal app is set up correctly');
  console.log('3. Test with sandbox mode first');
  console.log('4. Check PayPal Developer Dashboard for app status');
}

runTests();
