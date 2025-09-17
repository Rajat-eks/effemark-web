import Image from "next/image";
import React from "react";
import Database from "@/components/assets/icons/database.svg";
import Searches from "@/components/assets/icons/searches.svg";
import Monitoring from "@/components/assets/icons/monitoring.svg";
import Clients from "@/components/assets/icons/clients.svg";
import Global from "@/components/assets/icons/global.svg";
import Customer from "@/components/assets/icons/customer.svg";
import Price from "@/components/assets/icons/best price.svg";
import AI from "@/components/assets/icons/AI.svg";

interface IndexProps {
  // define props here
}

const WhyChoose: React.FC<IndexProps> = (props) => {
  return (
    <div className="flex flex-col items-center  p-6 border-b-[1px] border-dotted">
      <h5 className="text-[25px] text-center">Why Customer Prefer Effemark?</h5>
      <section className=" py-10 flex flex-col md:flex-row gap-6 sm:gap-0 items-center justify-between w-full md:w-[70%]">
        <div className="flex flex-col items-center gap-1 sm:border-r-[1px] border-dotted md:pr-14">
          <Image src={Database} alt="Database Icon" />
          <b className="text-4xl text-red-500 leading-10">100+</b>
          <span className="text-[14px]">Databases</span>
        </div>

        <div className="flex flex-col items-center gap-1  sm:border-r-[1px] border-dotted md:pr-14">
          <Image src={Clients} alt="Database Icon" />
          <b className="font-bold text-2xl text-red-500 text-[33px] leading-10">
            1,450+
          </b>
          <span className="text-[14px]">Clients</span>
        </div>

        <div className="flex flex-col items-center gap-1  sm:border-r-[1px] border-dotted md:pr-14">
          <Image src={Monitoring} alt="Database Icon" />
          <b className="font-bold text-2xl text-red-500 text-[33px] leading-10">
         8,800+
          </b>
          <span className="text-[14px]">Projects Delivered</span>
        </div>
        <div className="flex flex-col items-center    ">
          <Image src={Searches} alt="Database Icon" />
          <b className="font-bold text-2xl text-red-500 text-[33px] leading-10">
            67,000+
          </b>
          <span className="text-[14px]">TM Searches</span>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-[80%]">
        <div className=" shadow-2xl bg-white w-[100%] p-4 rounded-xl gap-3 flex items-center justify-center hover:bg-[#B8CAFF]">
          <Image src={Global} alt="global" width={60} />
          <div className="flex flex-col items-start gap-2 pt-3">
            <h4>Extensive & Adaptable Coverage</h4>
            <p className="text-[15px]">
              Expand globally with trademark services designed for scalability
              and accuracy.
            </p>
          </div>
        </div>
        <div className=" shadow-2xl bg-white w-[100%] p-4 rounded-xl gap-3 flex items-center justify-center hover:bg-[#B8CAFF]">
          <Image src={Customer} alt="global" width={60} />
          <div className="flex flex-col items-start gap-2 pt-3">
            <h4>Customer Satisfaction Promise</h4>
            <p className="text-[15px]">
              Not satisfied? We’ll make it right — that’s our trademark
              commitment.
            </p>
          </div>
        </div>
        <div className=" shadow-2xl bg-white w-[100%] p-4 rounded-xl gap-3 flex items-center justify-center hover:bg-[#B8CAFF]">
          <Image src={Price} alt="global" width={60} />
          <div className="flex flex-col items-start gap-2 pt-3">
            <h4>Best Price Guarantee</h4>
            <p className="text-[15px]">
              Found a lower price? We’ll match it and still offer top-tier
              trademark services.
            </p>
          </div>
        </div>
        <div className=" shadow-2xl bg-white w-[100%] p-4 rounded-xl gap-3 flex items-center justify-center hover:bg-[#B8CAFF]">
          <Image src={AI} alt="global" width={60} />
          <div className="flex flex-col items-start gap-2 pt-3">
            <h4>AI-Driven & Expert Reviews</h4>
            <p className="text-[15px]">
              Intelligent trademark solutions combining AI tools with expert
              manual searches.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
