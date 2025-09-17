import Image from "next/image";
import React from "react";
import Background from "@/components/assets/bg/CTA-bg.png";
import Link from "next/link";

interface IndexProps {
  // define props here
}

const CTA: React.FC<IndexProps> = (props) => {
  return (
    <div className="hero-section relative h-[278px] w-full">
      {/* Background Image */}
      <Image
        src={Background}
        alt="Background"
        fill
        className="object-cover h-full"
        priority
      />
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 md:py-30 bg-gradient-to-l  md:p-10 text-white">
        <p className="sm:text-[30px] text-[22px] md:text-[36px] font-normal text-center">
          Trusted by 1000+ Clients Who Trust Our Trademark Services
        </p>
        <h1 className="sm:text-[30px] text-[22px] md:text-[36px] font-bold z-10 ">
          START YOUR ORDER NOW
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <Link href={'/trademark-search-services'} className="bg-white text-black p-2 text-[17px] rounded hover:bg-[#202F5A] hover:text-white transform transition-all duration-400 ease-out hover:scale-105">
            Search Your Trademark @ $65
          </Link>
  <Link href={'/trademark-monitoring'} className="bg-white text-black p-2 text-[17px] rounded hover:bg-[#202F5A] hover:text-white transform transition-all duration-400 ease-out hover:scale-105">
            Monitor Your Trademark @ $55
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
