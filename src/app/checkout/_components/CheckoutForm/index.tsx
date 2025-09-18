'use client';

import React, { useState, useEffect } from "react";
import AddToCartButton from "@/components/AddToCartButton";

interface IndexProps {
  // define props here
  data: any;
}

const CheckoutForm: React.FC<IndexProps> = ({data}) => {
  const [selectedAddOns, setSelectedAddOns] = useState<Array<{name: string; price: number}>>([]);
  const [totalPrice, setTotalPrice] = useState(data?.price || 0);

  useEffect(() => {
    // Calculate total price including selected add-ons
    const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
    setTotalPrice((data?.price || 0) + addOnsTotal);
  }, [selectedAddOns, data?.price]);

  const handleAddOnChange = (addOn: {name: string; price: number}, isChecked: boolean) => {
    if (isChecked) {
      setSelectedAddOns(prev => [...prev, addOn]);
    } else {
      setSelectedAddOns(prev => prev.filter(item => item.name !== addOn.name));
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shadow-2xl rounded-2xl p-8 bg-white">
      <div>
        <h6 className="text-[16px] font-semibold">
          Choose Add-ons (Optional){" "}
        </h6>
        <ul className="text-[13px] pt-5 space-y-2">
          {data?.addOns?.map((item:any, index: number) => {
            return (
              <li key={index} className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  onChange={(e) => handleAddOnChange(item, e.target.checked)}
                />{" "}
                <label htmlFor="">{item.name} + ${item.price}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pt-10">
        <form action="" className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name (Required)"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email (Required)"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Contact Number (Required)"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Country"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Select Mark Types for monitoring (Required)"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <h6 className="text-[16px] font-semibold px-2">
            Additional Instruction (Optional)
          </h6>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nice Classes"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
            <input
              type="text"
              placeholder="Goods & Services"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Reference Number"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <textarea
              cols={30}
              rows={5}
              placeholder="Message (Optional)"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-4">
            <span className="text-[14px]">Total Price</span>
            <span className="text-[#C31117] font-bold">${totalPrice.toFixed(2)}</span>
          </div>
          <AddToCartButton 
            product={{
              id: data.path || data.name,
              name: data.name,
              price: data.price,
              banner: data.banner,
              included: data.included,
              addOns: data.addOns
            }}
            selectedAddOns={selectedAddOns}
          />
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
