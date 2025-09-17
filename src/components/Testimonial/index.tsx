"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Quote from "@/components/assets/icons/quote.svg";
import UserIcon from "@/components/assets/icons/user.svg";
import { testimonial } from "@/data/testimonials";
import { CircleArrowLeft, CircleArrowRight, Star } from "lucide-react";

interface IndexProps {}

const Testimonial: React.FC<IndexProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.offsetWidth; // Scroll by full container width
      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Scrollable container */}
      <h2 className="text-center text-[30px] font-semibold">
        What clients says
      </h2>
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar w-full"
      >
        {testimonial.map((review, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center px-4 md:px-20 py-10"
          >
            <div className="border border-gray-800 p-3 md:p-10 rounded-md bg-white shadow-xl h-full flex flex-col md:flex-row items-center gap-2 md:gap-10 justify-between">
              <div className="w-[80%]">
                <Image src={Quote} alt="Quote Icon" className="w-6 mb-4" />
                <p className="md:text-lg text-[16px]  font-[400] text-gray-700 text-justify">
                  {review.review}
                </p>
                <div className="pt-4 px-2 flex items-center gap-2">
                  <Star size={20} color="#FDBC01" absoluteStrokeWidth />
                  <Star size={20} color="#FDBC01" absoluteStrokeWidth />
                  <Star size={20} color="#FDBC01" absoluteStrokeWidth />
                  <Star size={20} color="#FDBC01" absoluteStrokeWidth />
                  <Star size={20} color="#FDBC01" absoluteStrokeWidth />
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 w-[20%]">
                <div className="relative">
                  <div className="bg-[#202F5A] h-12 w-12 rounded-full absolute top-3 right-1" />
                  <div className="bg-[#00BF63] h-12 w-12 rounded-full flex items-center justify-center relative z-10">
                    <Image src={UserIcon} alt="User Icon" className="w-6 h-6" />
                  </div>
                </div>
                <span className="text-gray-600 text-center text-sm w-[200px]">
                  {review.reviewer}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-5">
        <button
          className="hover:bg-gray-100 transition p-2 rounded-full"
          onClick={() => scroll("left")}
        >
          <CircleArrowLeft size={24} />
        </button>
        <button
          className="hover:bg-gray-100 transition p-2 rounded-full"
          onClick={() => scroll("right")}
        >
          <CircleArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
