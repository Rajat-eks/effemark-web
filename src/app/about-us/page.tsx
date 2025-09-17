import Image from "next/image";
import React from "react";
import Banner from "@/components/assets/bg/about-us.svg";
import Features from "@/components/Features";

import Global from "@/components/assets/icons/global.svg";
import Hybrid from "@/components/assets/icons/hybrid.svg";
import Timely from "@/components/assets/icons/timely.svg";
import Premium from "@/components/assets/icons/premium.svg";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Testimonial from "@/components/Testimonial";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="relative  ">
        <Image src={Banner} alt="FAQ Banner" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-black/70 h-full w-full flex items-center justify-center">
          <h4 className="text-[53px] text-white font-bold ">About Us</h4>
        </div>
      </section>
      <section className="w-[90%] py-10 space-y-3 border-b-[1px] border-dotted ">
        <h4 className="text-center text-[35px]">
          Your Trusted Partner in Global Trademark Protection
        </h4>
        <p className="text-justify text-[17px]">
          With over two decades of combined experience in intellectual property
          services, EffeMark delivers comprehensive trademark search and
          monitoring solutions that protect your brand's future across 180+
          countries worldwide.
        </p>
        <p className="text-justify text-[17px]">
          Worldwide Trademark search & monitoring requires combination of
          skilled analysts and access to wide-ranging Trademark databases. We at
          Effemark offer comprehensive Trademark search and monitoring solutions
          across the globe which helps you protect and build your critical
          brands. Our customizable reports are delivered by team of professional
          analysts. Our analysts perform various strategies including checking
          availability of Trademark across multiple countries in different
          languages, different spellings, similar marks, and phonetic
          equivalents. We deliver in a matter of days. we can then deliver a
          straightforward and highly useful report, allowing clients to make
          decisions that could potentially save them thousands
        </p>
      </section>
      <Features
        features={[
          {
            title: "Global Coverage",
            description:
              "Comprehensive search across 180+ countries and specialized industry databases",
            logo: Global,
          },
          {
            title: "Hybrid Technology",
            description:
              "Proprietary AI-powered search algorithms enhanced by expert manual verification",
            logo: Hybrid,
          },
          {
            title: "Premium Quality",
            description:
              "Detailed analysis reports with clear risk assessments and actionable recommendations",
            logo: Premium,
          },
          {
            title: "Timely Insights",
            description:
              "Early detection of potential conflicts to prevent costly legal disputes",
            logo: Timely,
          },
        ]}
      />
      <Process/>
      <CTA/>
      <Testimonial/>
    </main>
  );
};

export default page;
