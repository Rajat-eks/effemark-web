'use client';

import React from 'react';
import Link from 'next/link';

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-yellow-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-yellow-600 mb-4">
            Payment Cancelled
          </h1>
          <p className="text-gray-600 mb-6">
            Your payment was cancelled. No charges have been made to your account.
          </p>

          <div className="space-y-4">
            <p className="text-gray-600">
              If you would like to complete your order, you can return to your cart and try again.
            </p>
            <p className="text-gray-600">
              If you need assistance, please contact our support team.
            </p>
          </div>

          <div className="mt-8 space-x-4">
            <Link
              href="/cart"
              className="bg-[#C31117] text-white px-6 py-3 rounded-lg hover:bg-[#A00E13] transition-colors"
            >
              Return to Cart
            </Link>
            <Link
              href="/"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
