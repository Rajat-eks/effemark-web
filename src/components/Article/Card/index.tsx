import Image from "next/image";
import React from "react";
import BLOG from "@/components/assets/img/blog.svg";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface IndexProps {
  // define props here
}

const Card: React.FC<IndexProps> = (props) => {
  return (
    <div className="bg-[#F8F4F4] flex flex-col items-center justify-center w-full  rounded-xl">
      <section className="w-full relative group overflow-hidden">
        <Image src={BLOG} alt="blog" className="w-full transform transition-all duration-400 ease-out group-hover:scale-105 " />
        <div className="absolute top-4 left-4">
          <Link
            href={"/articles/1"}
            className="text-[12px]  text-white  flex items-center gap-0 h-[30px] justify-center"
          >
            <span className="bg-[#C31117] h-full px-2 flex items-center">
              {" "}
              Read More
            </span>
            <span className="bg-white text-[#C31117] h-full px-1 flex items-center">
              <MoveRight />
            </span>
          </Link>
        </div>
      </section>
      <section className="px-5 py-6 space-y-2">
        <div className="text-[15px]  flex items-center justify-between mb-3">
          <span className="bg-[#FBC6C7] text-[13px] py-[4px] px-[14px] rounded-full text-[#E90303]">
            Article
          </span>
          <span className="text-[#255AF0] text-[12px]">31/07/2025</span>
        </div>
        <h4 className='text-[15px] font-semibold'>
          Comprehensive Guide to Conducting Effective Trademark Search
          Strategies
        </h4>
        <p className="text-[13px] text-justify text-gray-700">
          Detailed methodology for examining existing trademarks to identify
          similar marks that may conflict with desired brand names or logos.
        </p>
      </section>
    </div>
  );
};

export default Card;
