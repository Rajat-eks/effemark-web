// Test PayPal credentials and configuration
require('dotenv').config();

console.log('🔍 PayPal Configuration Test');
console.log('============================');

// Check environment variables
const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
const mode = process.env.PAYPAL_MODE;

console.log('Client ID:', clientId ? `${clientId.substring(0, 8)}...` : 'NOT SET');
console.log('Client Secret:', clientSecret ? `${clientSecret.substring(0, 8)}...` : 'NOT SET');
console.log('Mode:', mode || 'NOT SET');

// Determine API URL
const apiUrl = mode === 'live' 
  ? 'https://api.paypal.com' 
  : 'https://api.sandbox.paypal.com';

console.log('API URL:', apiUrl);

// Test authentication
async function testPayPalAuth() {
  if (!clientId || !clientSecret) {
    console.log('❌ Missing PayPal credentials');
    return;
  }

  try {
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    
    console.log('🔄 Testing PayPal authentication...');
    
    const response = await fetch(`${apiUrl}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Accept-Language': 'en_US',
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    console.log('Response Status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ PayPal authentication successful!');
      console.log('Token Type:', data.token_type);
      console.log('Expires In:', data.expires_in, 'seconds');
    } else {
      const errorText = await response.text();
      console.log('❌ PayPal authentication failed:');
      console.log('Error:', errorText);
      
      // Parse error for better understanding
      try {
        const errorData = JSON.parse(errorText);
        console.log('Error Details:', errorData);
        
        if (errorData.error === 'invalid_client') {
          console.log('\n💡 Possible solutions:');
          console.log('1. Check if your Client ID and Secret are correct');
          console.log('2. Verify you are using the right environment (sandbox vs live)');
          console.log('3. Make sure your PayPal app is approved (for live mode)');
          console.log('4. Check if your credentials have the right permissions');
        }
      } catch (e) {
        console.log('Could not parse error response');
      }
    }
  } catch (error) {
    console.log('❌ Network error:', error.message);
  }
}

testPayPalAuth();
