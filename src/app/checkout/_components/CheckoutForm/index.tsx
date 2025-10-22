'use client';

import React, { useState, useEffect } from "react";
import AddToCartButton from "@/components/AddToCartButton";

interface IndexProps {
  // define props here
  data: any;
}

interface FormData {
  fullName: string;
  email: string;
  contactNumber: string;
  country: string;
  markTypes: string;
  niceClasses: string;
  goodsServices: string;
  referenceNumber: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  contactNumber?: string;
  markTypes?: string;
}

const CheckoutForm: React.FC<IndexProps> = ({data}) => {
  const [selectedAddOns, setSelectedAddOns] = useState<Array<{name: string; price: number}>>([]);
  const [totalPrice, setTotalPrice] = useState(data?.price || 0);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    contactNumber: '',
    country: '',
    markTypes: '',
    niceClasses: '',
    goodsServices: '',
    referenceNumber: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Calculate total price including selected add-ons
    const addOnsTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);
    setTotalPrice((data?.price || 0) + addOnsTotal);
  }, [selectedAddOns, data?.price]);

  useEffect(() => {
    // Validate form whenever form data changes
    validateForm();
  }, [formData]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Contact Number validation
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact Number is required';
    } else if (!validatePhone(formData.contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid phone number';
    }

    // Mark Types validation
    if (!formData.markTypes.trim()) {
      newErrors.markTypes = 'Mark Types for monitoring is required';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
        {!isFormValid && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Please complete all required fields</strong> marked with <span className="text-red-500">*</span> before adding to cart.
            </p>
          </div>
        )}
        <form action="" className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`rounded-lg w-full p-2 text-[14px] border-[1px] ${
                errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-400 focus:border-blue-500'
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`rounded-lg w-full p-2 text-[14px] border-[1px] ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-400 focus:border-blue-500'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your contact number"
              value={formData.contactNumber}
              onChange={(e) => handleInputChange('contactNumber', e.target.value)}
              className={`rounded-lg w-full p-2 text-[14px] border-[1px] ${
                errors.contactNumber ? 'border-red-500 bg-red-50' : 'border-gray-400 focus:border-blue-500'
              }`}
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              placeholder="Enter your country"
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px] focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mark Types for Monitoring <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter mark types for monitoring"
              value={formData.markTypes}
              onChange={(e) => handleInputChange('markTypes', e.target.value)}
              className={`rounded-lg w-full p-2 text-[14px] border-[1px] ${
                errors.markTypes ? 'border-red-500 bg-red-50' : 'border-gray-400 focus:border-blue-500'
              }`}
            />
            {errors.markTypes && (
              <p className="text-red-500 text-xs mt-1">{errors.markTypes}</p>
            )}
          </div>
          <h6 className="text-[16px] font-semibold px-2">
            Additional Instruction (Optional)
          </h6>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nice Classes
              </label>
              <input
                type="text"
                placeholder="Enter Nice classes"
                value={formData.niceClasses}
                onChange={(e) => handleInputChange('niceClasses', e.target.value)}
                className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px] focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Goods & Services
              </label>
              <input
                type="text"
                placeholder="Enter goods & services"
                value={formData.goodsServices}
                onChange={(e) => handleInputChange('goodsServices', e.target.value)}
                className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px] focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reference Number
            </label>
            <input
              type="text"
              placeholder="Enter reference number"
              value={formData.referenceNumber}
              onChange={(e) => handleInputChange('referenceNumber', e.target.value)}
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px] focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              cols={30}
              rows={5}
              placeholder="Enter any additional message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px] focus:border-blue-500"
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
            isFormValid={isFormValid}
            formData={formData}
          />
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
