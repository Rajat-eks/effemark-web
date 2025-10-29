'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/lib/slices/cartSlice';

interface FormData {
  fullName: string;
  email: string;
  contactNumber: string;
  country: string;
  markTypes: string;
  markDetails: string;
  niceClasses: string;
  goodsServices: string;
  referenceNumber: string;
  message: string;
}

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    banner: string;
    included: string;
    addOns?: Array<{
      name: string;
      price: number;
    }>;
  };
  selectedAddOns?: Array<{
    name: string;
    price: number;
  }>;
  isFormValid?: boolean;
  formData?: FormData;
  className?: string;
  children?: React.ReactNode;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  selectedAddOns = [],
  isFormValid = true,
  formData,
  className = "w-full text-white rounded-xl text-center bg-[#C31117] py-2 cursor-pointer hover:bg-[#A00E13] transition-colors",
  children = "Add to Cart"
}) => {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  const handleAddToCart = () => {
    if (!isFormValid) {
      setShowValidationMessage(true);
      setTimeout(() => {
        setShowValidationMessage(false);
      }, 3000);
      return;
    }

    setIsAdding(true);
    
    // Create cart item with selected add-ons and form data
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      banner: product.banner,
      included: product.included,
      addOns: product.addOns,
      selectedAddOns: selectedAddOns,
      customerInfo: formData, // Include form data with the cart item
    };

    dispatch(addToCart(cartItem));
    
    // Reset button state after a short delay
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <div className="space-y-2">
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`${className} ${
          isAdding ? 'opacity-75 cursor-not-allowed' : ''
        } ${
          !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isAdding ? 'Adding...' : children}
      </button>
      {showValidationMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
          Please fill in all required fields before adding to cart.
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
