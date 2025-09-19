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
import { Linkedin } from "lucide-react";
import AMIT_GOEL from "@/components/assets/img/amit-goel.svg";
import AMIT_AGGARWAL from "@/components/assets/img/amit-agg.svg";
import MEETIKA from "@/components/assets/img/meetika.svg";
import RAM from "@/components/assets/img/ram-tenneti.svg";
import MANOJ from "@/components/assets/img/manoj.svg";
import RAKESH from "@/components/assets/img/rakesh.svg";
import GERHARD from "@/components/assets/img/gerherd.svg";

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
      <section className="flex flex-col justify-center items-center py-6  bg-[#202F5A] text-white ">
        <h2 className="font-semibold text-center text-[37px] w-[90%]">
          Leadership Team
        </h2>
        <p className="text-[17px]  text-center w-[85%]">
          Our team is empowered by highly experienced individuals from the
          Technology, Management and Legal fraternities. They bring with them
          years of rich and diverse experience and have also worked on several
          emerging technology fields. This diverse and versatile experience of
          our team helps us in understanding the client requirements better.
        </p>
        <div className="grid grid-cols-3 gap-12 p-10 w-[90%] border-b-[1px] border-dotted">
          <div className="bg-[#D8D8D8]  rounded-2xl flex flex-col items-center justify-center space-y-4 py-4 px-5">
            <Image src={AMIT_GOEL} alt="amit_goel" className="w-full" />
            <div className="flex flex-col items-center space-y-1">
              <h4 className="text-[28px] font-bold">Dr. Amit Goel</h4>
              <h6 className="text-[15px]">(Director & Co-Founder)</h6>
              <a href="https://in.linkedin.com/in/dramitgoel">
                <Linkedin color="black" />
              </a>
            </div>
          </div>
          <div className="bg-[#D8D8D8]  rounded-2xl flex flex-col items-center justify-center space-y-4 py-4 px-5">
            <Image src={AMIT_AGGARWAL} alt="amit_goel" className="w-full" />
            <div className="flex flex-col items-center space-y-1">
              <h4 className="text-[28px] font-bold">Amit Aggarwal</h4>
              <h6 className="text-[15px]">(Co-Founder)</h6>
              <a href="https://www.linkedin.com/in/amit-aggarwal-386aa129/?originalSubdomain=in">
                <Linkedin color="black" />
              </a>
            </div>
          </div>
          <div className="bg-[#D8D8D8]  rounded-2xl flex flex-col items-center justify-center space-y-4 py-4 px-5">
            <Image src={MEETIKA} alt="amit_goel"  className="w-full" />
            <div className="flex flex-col items-center space-y-1">
              <h4 className="text-[28px] font-bold text-center">Meetika Aggarwal</h4>
              <h6 className="text-[15px]">(Director)</h6>
              <a href="https://www.linkedin.com/in/meetika-aggarwal-8273148/">
                <Linkedin color="black" />
              </a>
            </div>
          </div>
        </div>
        <section className="w-full flex flex-col items-center justify-center py-4">
          <h2 className="font-semibold text-center text-[37px] w-[90%]">
            Executive Leadership
          </h2>
          <div className="grid grid-cols-4 gap-4 p-5 w-[100%]">
            <div className="bg-[#D8D8D8]  rounded-2xl flex flex-col items-center justify-center space-y-4 py-4 px-1">
              <Image src={RAM} alt="amit_goel" className="w-full"  />
              <div className="flex flex-col items-center space-y-1">
                <h4 className="text-[28px] font-bold">Ram Tenneti</h4>
                <h6 className="text-[15px]">(Senior Vice President)</h6>
                <a href="https://in.linkedin.com/in/ram-tenneti-6a91976">
                  <Linkedin color="black" />
                </a>
              </div>
            </div>
            <div className="bg-[#D8D8D8]  rounded-2xl flex flex-col items-center justify-center space-y-4 py-2 px-1">
              <Image src={MANOJ} alt="amit_goel" className="w-full"  />
              <div className="flex flex-col items-center space-y-1">
                <h4 className="text-[28px] font-bold">Manoj Poonia</h4>
                <h6 className="text-[15px]">(Senior Vice President)</h6>
                <a href="https://in.linkedin.com/in/pooniamanoj">
                  <Linkedin color="black" />
                </a>
              </div>
            </div>
            <div className="bg-[#D8D8D8]  rounded-2xl flex flex-col items-center justify-center space-y-4 py-4 px-1">
              <Image src={RAKESH} alt="amit_goel"  className="w-full" />
              <div className="flex flex-col items-center space-y-1">
                <h4 className="text-[28px] font-bold">Rakesh Pandey</h4>
                <h6 className="text-[15px]">(Senior Vice President)</h6>
                <a href="https://in.linkedin.com/in/rakeshpandeyeffectual">
                  <Linkedin color="black" />
                </a>
              </div>
            </div>
            <div className="bg-[#D8D8D8]  rounded-2xl flex flex-col items-center justify-center space-y-4 py-4 px-1">
              <Image src={GERHARD} alt="amit_goel"className="w-full" />
              <div className="flex flex-col items-center space-y-1">
                <h4 className="text-[28px] font-bold text-center">Dr. Gerhard Hörsch</h4>
                <h6 className="text-[15px]">(Senior Vice President)</h6>
                <a href="https://de.linkedin.com/in/dr-gerhard-hoersch-4157b41">
                  <Linkedin color="black" />
                </a>
              </div>
            </div>
          </div>
        </section>
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
      <Process />
      <CTA />
      <Testimonial />
    </main>
  );
};

export default page;
