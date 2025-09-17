import Image from "next/image";
import React from "react";
import Banner from "@/components/assets/img/article-banner.svg";
import Card from "@/components/Article/Card";
import CTA from "@/components/CTA";
import SampleForm from "./_components/SampleForm";
import Testimonial from "@/components/Testimonial";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="w-full">
      <section className="relative ">
        <Image src={Banner} alt="FAQ Banner" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-black/60 h-full w-full flex items-center justify-center">
          <h4 className="md:text-[54px] font-bold sm:text-3xl text-2xl text-white font-bold ">Our Work Samples</h4>
        </div>
      </section>
      <SampleForm/>
     <CTA/>
     <Testimonial/>
    </main>
  );
};

export default page;
