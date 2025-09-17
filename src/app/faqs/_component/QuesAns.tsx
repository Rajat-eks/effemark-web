"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const QuesAns = ({
  className,
  ques,
  ans,
}: {
  className?: string;
  ques?: string;
  ans?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`flex justify-between items-center bg-[#202F5A] py-[9px] px-4 w-full rounded-2xl ${className}`}
    >
      <div>
        <div className=" text-white text-[17px] md:text-[21px] font-[300]  ">{ques}</div>
        {isOpen && (
          <div className="text-white text-[14px] md:text-[17px] pt-4 text-justify px-3">
            {ans}
          </div>
        )}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-[1px] rounded-full h-5 w-5 flex items-center text-gray-300 cursor-pointer"
      >
        {isOpen ? (
          <ChevronUp className="text-[#AFAFAF]" />
        ) : (
          <ChevronDown className="text-[#AFAFAF]" />
        )}
      </button>
    </div>
  );
};
