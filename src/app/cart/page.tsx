'use client';

import Image from "next/image";
import React from "react";
import CART from "@/components/assets/img/cart.svg";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { removeFromCart, updateQuantity, clearCart } from "@/lib/slices/cartSlice";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  const { items, total, itemCount } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center py-2 h-[85vh]">
        <Image src={CART} alt="Cart" />
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-[26px] font-bold">Your Cart is Empty</h3>
          <p className="text-[20px] text-gray-600">
            Looks like you have not added anything to our cart.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <div className="flex items-center gap-4">
          <span className="text-lg">
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </span>
          <button
            onClick={handleClearCart}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="border rounded-lg p-6 bg-white shadow-sm">
                <div className="flex gap-4">
                  <div className="w-24 h-24 relative">
                    <Image
                      src={item.banner}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">Included: {item.included}</p>
                    
                    {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                      <div className="mb-2">
                        <p className="text-sm font-medium text-gray-700">Add-ons:</p>
                        <ul className="text-sm text-gray-600">
                          {item.selectedAddOns.map((addOn, index) => (
                            <li key={index}>• {addOn.name} (+${addOn.price})</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-semibold">
                          ${(item.price * item.quantity + 
                            (item.selectedAddOns?.reduce((sum, addOn) => sum + addOn.price, 0) || 0) * item.quantity
                          ).toFixed(2)}
                        </p>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal ({itemCount} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            
            <hr className="my-4" />
            
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
