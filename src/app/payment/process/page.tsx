'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function PaymentProcessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processPayment = async () => {
      const orderId = searchParams.get('orderId');
      const paypalOrderId = searchParams.get('paypalOrderId');
      const token = searchParams.get('token');

      if (!orderId || !paypalOrderId || !token) {
        setError('Missing payment parameters');
        setStatus('error');
        return;
      }

      try {
        // Capture the payment
        const response = await fetch('/api/payment/capture', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId,
            paypalOrderId,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setStatus('success');
          // Redirect to success page after a short delay
          setTimeout(() => {
            router.push(`/payment/success?orderId=${orderId}`);
          }, 2000);
        } else {
          setError(data.error || 'Payment capture failed');
          setStatus('error');
        }
      } catch (err) {
        console.error('Payment processing error:', err);
        setError('Payment processing failed');
        setStatus('error');
      }
    };

    processPayment();
  }, [searchParams, router]);

  if (status === 'processing') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#C31117] mx-auto"></div>
          <h1 className="text-2xl font-bold mt-4">Processing Payment...</h1>
          <p className="text-gray-600 mt-2">Please wait while we confirm your payment.</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-red-600 mb-4">Payment Failed</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => router.push('/cart')}
            className="bg-[#C31117] text-white px-6 py-3 rounded-lg hover:bg-[#A00E13] transition-colors"
          >
            Return to Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-green-500 text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-gray-600">Redirecting to confirmation page...</p>
      </div>
    </div>
  );
}
