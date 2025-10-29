"use client";

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
  markDetails: string;
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
  markDetails?: string;
}

const CheckoutForm: React.FC<IndexProps> = ({ data }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<
    Array<{ name: string; price: number }>
  >([]);
  const [totalPrice, setTotalPrice] = useState(data?.price || 0);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    contactNumber: "",
    country: "",
    markTypes: "",
    markDetails: "",
    niceClasses: "",
    goodsServices: "",
    referenceNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Check if product is AI or Manual based on product name
  const isAIProduct = data?.name?.includes("AI");
  const isManualProduct = data?.name?.includes("Manual");

  useEffect(() => {
    // Calculate total price including selected add-ons
    const addOnsTotal = selectedAddOns.reduce(
      (sum, addOn) => sum + addOn.price,
      0
    );
    
    // Base price
    let basePrice = data?.price || 0;
    
    // Double the price if "Both (Word Mark & Image Mark)" is selected for manual products
    if (isManualProduct && formData.markTypes === "Both (Word Mark & Image Mark)") {
      basePrice = basePrice * 2;
    }
    
    setTotalPrice(basePrice + addOnsTotal);
  }, [selectedAddOns, data?.price, formData.markTypes, isManualProduct]);

  useEffect(() => {
    // Set markTypes to "Word Mark" for AI products
    if (isAIProduct && formData.markTypes !== "Word Mark") {
      setFormData(prev => ({ ...prev, markTypes: "Word Mark" }));
    }
  }, [isAIProduct]);

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
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Contact Number validation
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required";
    } else if (!validatePhone(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number";
    }

    // Mark Types validation (only for Manual products)
    if (isManualProduct && !formData.markTypes.trim()) {
      newErrors.markTypes = "Mark Types for monitoring is required";
    }

    // Mark Details validation
    if (isAIProduct) {
      // For AI products, always require Word Mark details
      if (!formData.markDetails.trim()) {
        newErrors.markDetails = "Word Mark details are required";
      }
    } else if (isManualProduct) {
      // For Manual products, require details only when Word Mark or Image Mark is selected
      if ((formData.markTypes === "Word Mark" || formData.markTypes === "Image Mark") && !formData.markDetails.trim()) {
        newErrors.markDetails = `${formData.markTypes} details are required`;
      }
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddOnChange = (
    addOn: { name: string; price: number },
    isChecked: boolean
  ) => {
    if (isChecked) {
      setSelectedAddOns((prev) => [...prev, addOn]);
    } else {
      setSelectedAddOns((prev) =>
        prev.filter((item) => item.name !== addOn.name)
      );
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
          {data?.addOns?.map((item: any, index: number) => {
            return (
              <li key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleAddOnChange(item, e.target.checked)}
                />{" "}
                <label htmlFor="">
                  {item.name} + ${item.price}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pt-10">
        {!isFormValid && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Please complete all required fields</strong> marked with{" "}
              <span className="text-red-500">*</span> before adding to cart.
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
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className={`rounded-lg w-full p-2 text-[14px] border-[1px] ${
                errors.fullName
                  ? "border-red-500 bg-red-50"
                  : "border-gray-400 focus:border-blue-500"
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
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`rounded-lg w-full p-2 text-[14px] border-[1px] ${
                errors.email
                  ? "border-red-500 bg-red-50"
                  : "border-gray-400 focus:border-blue-500"
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
              onChange={(e) =>
                handleInputChange("contactNumber", e.target.value)
              }
              className={`rounded-lg w-full p-2 text-[14px] border-[1px] ${
                errors.contactNumber
                  ? "border-red-500 bg-red-50"
                  : "border-gray-400 focus:border-blue-500"
              }`}
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contactNumber}
              </p>
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
              onChange={(e) => handleInputChange("country", e.target.value)}
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px] focus:border-blue-500"
            />
          </div>
          {/* AI Product - Show only Word Mark input */}
          {isAIProduct && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Provide the Word Mark Details Below <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter word mark details"
                value={formData.markDetails}
                onChange={(e) => handleInputChange("markDetails", e.target.value)}
                className={`rounded-lg w-full p-2 text-[14px] border-[1px] ${
                  errors.markDetails
                    ? "border-red-500 bg-red-50"
                    : "border-gray-400 focus:border-blue-500"
                }`}
                rows={4}
              />
              {errors.markDetails && (
                <p className="text-red-500 text-xs mt-1">{errors.markDetails}</p>
              )}
            </div>
          )}

          {/* Manual Product - Show dropdown and conditional input */}
          {isManualProduct && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Choose Which Mark Type(s) to Search{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.markTypes}
                  onChange={(e) => handleInputChange("markTypes", e.target.value)}
                  className={`rounded-lg w-full p-2 text-[14px] border-[1px] ${
                    errors.markTypes
                      ? "border-red-500 bg-red-50"
                      : "border-gray-400 focus:border-blue-500"
                  }`}
                >
                  <option value="" disabled selected>
                    Select mark type
                  </option>
                  <option value="Word Mark">Word Mark</option>
                  <option value="Image Mark">Image Mark</option>
                  <option value="Both (Word Mark & Image Mark)">
                    Both (Word Mark & Image Mark)
                  </option>
                </select>
                {errors.markTypes && (
                  <p className="text-red-500 text-xs mt-1">{errors.markTypes}</p>
                )}
                {formData.markTypes === "Both (Word Mark & Image Mark)" && (
                  <p className="text-blue-600 text-xs mt-1 font-medium">
                    ⚠️ Selecting "Both" will double the base price
                  </p>
                )}
              </div>
              
              {/* Conditional Mark Details Input for Manual products */}
              {(formData.markTypes === "Word Mark" || formData.markTypes === "Image Mark") && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {formData.markTypes === "Word Mark" 
                      ? "Provide the Word Mark Details Below" 
                      : "Provide the Image Mark Details Below"
                    } <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder={`Enter ${formData.markTypes.toLowerCase()} details`}
                    value={formData.markDetails}
                    onChange={(e) => handleInputChange("markDetails", e.target.value)}
                    className={`rounded-lg w-full p-2 text-[14px] border-[1px] ${
                      errors.markDetails
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400 focus:border-blue-500"
                    }`}
                    rows={4}
                  />
                  {errors.markDetails && (
                    <p className="text-red-500 text-xs mt-1">{errors.markDetails}</p>
                  )}
                </div>
              )}
            </>
          )}
          
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
                onChange={(e) =>
                  handleInputChange("niceClasses", e.target.value)
                }
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
                onChange={(e) =>
                  handleInputChange("goodsServices", e.target.value)
                }
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
              onChange={(e) =>
                handleInputChange("referenceNumber", e.target.value)
              }
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
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px] focus:border-blue-500"
            ></textarea>
          </div>
          <div className="px-4">
            {isManualProduct && formData.markTypes === "Both (Word Mark & Image Mark)" ? (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[14px]">Base Price (Word Mark)</span>
                  <span className="text-[#C31117] font-bold">${(data?.price || 0).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px]">Base Price (Image Mark)</span>
                  <span className="text-[#C31117] font-bold">${(data?.price || 0).toFixed(2)}</span>
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-[14px]">Add-ons</span>
                    <span className="text-[#C31117] font-bold">
                      ${selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0).toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between border-t pt-1">
                  <span className="text-[14px] font-semibold">Total Price</span>
                  <span className="text-[#C31117] font-bold text-lg">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-[14px]">Total Price</span>
                <span className="text-[#C31117] font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            )}
          </div>
          <AddToCartButton
            product={{
              id: data.path || data.name,
              name: data.name,
              price: totalPrice,
              banner: data.banner,
              included: data.included,
              addOns: data.addOns,
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
