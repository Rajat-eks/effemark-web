import React from "react";
import Background from "@/components/assets/bg/trademark-bg.svg";
import Image, { StaticImageData } from "next/image";
import DownArrow from "@/components/assets/Down-arrow.svg";
import { CircleCheckBig, Globe, UsersRound } from "lucide-react";
import Hour from '@/components/assets/icons/24_7.svg'
import Protection from '@/components/assets/icons/protection.svg'
import Alert from '@/components/assets/icons/alert.svg'

interface IndexProps {
  // define props here
  title?: string;
  description?: string;
  cunsultant?: boolean;
  banner: StaticImageData;
}

const HeroSection: React.FC<IndexProps> = ({
  title,
  description,
  cunsultant,
  banner,
}) => {
  return (
    <div className="hero-section relative min-h-[350px] md:h-[400px] w-full">
      {/* Background Image */}
      <Image
        src={banner}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-between  bg-black/70 p-4 md:p-10 text-white">
        <h1 className="sm:text-3xl text-3xl md:text-[55px] font-bold z-10 md:w-[900px] leading-14 sm:leading-18">
          {title}
        </h1>
        <p className="text-[18px] sm:text-xl md:w-[700px]">{description}</p>
        {cunsultant ? (
          <div className="flex gap-4 ">
            <button className=" rounded py-2 px-5 bg-red-600 text-white hover:bg-white hover:text-red-600">
            Get Free Consultation

            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row  gap-4 mt-2w-[25%] md:w-full">
            <button className="bg-white text-black p-2 rounded">
              Search Your Trademark @ $65
            </button>
            <button className=" border-2 p-2 rounded">
              Monitor Your Trademark @ $55
            </button>
          </div>
        )}
      </div>
      <span className="absolute -bottom-6 flex items-center justify-center w-full ">
        <Image src={DownArrow} alt="Down Arrow" width={40} />
      </span>
      {
        cunsultant &&  <section className="hidden md:flex flex-col absolute -bottom-2 text-black right-20 bg-white rounded-2xl w-[350px] space-y-3 px-4 py-6">
        <div className="flex items-center gap-2 text-[14px]">
         <Image src={Hour} alt="24/" width={30}/>
          24/7 Global Trademark Surveillance
        </div>
        <div className="flex items-center gap-2 text-[14px]">
         <Image src={Alert} alt="24/" width={30}/>
          Real-Time Infringement Alerts
        </div>
        <div className="flex items-center gap-2 text-[14px]">
         <Image src={Protection} alt="24/" width={30}/>
          Comprehensive Protection Strategies
        </div>
      </section>
      }
     
    </div>
  );
};

export default HeroSection;
