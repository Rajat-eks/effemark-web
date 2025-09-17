import React from "react";
import Image, { StaticImageData } from "next/image";
import DownArrow from "@/components/assets/Down-arrow.svg";
import { CircleCheckBig, Globe, UsersRound } from "lucide-react";
import Link from "next/link";

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
    <div className="hero-section relative h-[80vh] md:h-[520px] w-full">
      {/* Background Image */}
      <Image
        src={banner}
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col space-y-10 justify-center  bg-black/70 p-4 md:p-10  text-white">
        <h1 className="sm:text-3xl text-3xl md:text-[55px] font-bold z-10 md:w-[900px] leading-14 sm:leading-18">
          {title}
        </h1>
        <p className="text-[18px] sm:text-xl md:w-[700px]">{description}</p>
        {cunsultant ? (
          <div className="flex gap-4 ">
            <Link
              href={"/contact-us"}
              className=" rounded py-2 px-5 bg-red-600 text-white"
            >
              Get Free Cunsultation
            </Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row  gap-4 mt-2w-[25%] md:w-full">
            <Link
              href={"/trademark-search-services"}
              className="bg-white text-black p-2 rounded hover:bg-[#1264FF] hover:text-white"
            >
              Search Your Trademark @ $65
            </Link>
            <Link
              href={"/trademark-monitoring"}
              className=" border-[1px] p-2 rounded hover:bg-[#1264FF] hover:text-white"
            >
              Monitor Your Trademark @ $55
            </Link>
          </div>
        )}
      </div>
      <span className="absolute -bottom-6 flex items-center justify-center w-full ">
        <Image src={DownArrow} alt="Down Arrow" width={40} />
      </span>
      {cunsultant && (
        <section className="absolute -bottom-2 text-black right-20 bg-white rounded-2xl w-[360px] space-y-3 px-4 py-6">
          <div className="flex items-center gap-2 text-[14px]">
            <CircleCheckBig />
            <b className="text-red-600">67,000+</b> Successful Trademark
            Searches
          </div>
          <div className="flex items-center gap-2 text-[14px]">
            <UsersRound />
            <b className="text-red-600"> 98%</b> Client Satisfaction Rate
          </div>
          <div className="flex items-center gap-2 text-[14px]">
            <Globe />
            <b className="text-red-600"> 180+</b> Countries Covering Worldwide
          </div>
        </section>
      )}
    </div>
  );
};

export default HeroSection;
