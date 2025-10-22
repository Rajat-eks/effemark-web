#!/usr/bin/env node

/**
 * Debug Payment Capture Test
 */

const debugCapture = async () => {
  console.log('🔍 Debugging Payment Capture...\n');

  try {
    // Test the capture endpoint directly
    const captureResponse = await fetch('http://localhost:3000/api/payment/capture', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderId: '68f1c443262663b3cbba5760',
        paypalOrderId: 'MOCK-PAY-1760674887379',
        paypalSignature: 'mock-signature'
      })
    });

    console.log('Response Status:', captureResponse.status);
    console.log('Response Headers:', Object.fromEntries(captureResponse.headers.entries()));

    const responseText = await captureResponse.text();
    console.log('Response Body:', responseText);

    if (!captureResponse.ok) {
      console.error('❌ Capture failed with status:', captureResponse.status);
      console.error('Error details:', responseText);
    } else {
      console.log('✅ Capture successful');
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
};

debugCapture();
