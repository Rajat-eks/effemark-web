'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/lib/slices/cartSlice';

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
  className?: string;
  children?: React.ReactNode;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  selectedAddOns = [],
  className = "w-full text-white rounded-xl text-center bg-[#C31117] py-2 cursor-pointer hover:bg-[#A00E13] transition-colors",
  children = "Add to Cart"
}) => {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Create cart item with selected add-ons
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      banner: product.banner,
      included: product.included,
      addOns: product.addOns,
      selectedAddOns: selectedAddOns,
    };

    dispatch(addToCart(cartItem));
    
    // Reset button state after a short delay
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`${className} ${isAdding ? 'opacity-75 cursor-not-allowed' : ''}`}
    >
      {isAdding ? 'Adding...' : children}
    </button>
  );
};

export default AddToCartButton;
