"use client";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../_components/CheckoutForm";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import Global from "@/components/assets/icons/global.svg";
import Hybrid from "@/components/assets/icons/hybrid.svg";
import Timely from "@/components/assets/icons/timely.svg";
import Premium from "@/components/assets/icons/premium.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import { monitorProduct, trademarkProducts } from "@/data/products";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  const params = useParams();
  const slug = params.slug;
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const ck = [...trademarkProducts, ...monitorProduct].find(
      (item: any) => item.path === `/${slug}`
    );
    setData(ck);
  }, [slug]);

  console.log("ck", data);

  return (
    <>
      <main className="flex items-start p-16 gap-10">
        <section className="w-1/2 space-y-10">
          {/* <div className="shadow rounded-2xl bg-green-200 mt-14 p-5 space-y-3">
            <div className="flex items-center justify-between bg-[#202F5A] text-white p-4 rounded-xl">
              <h3 className="text-xl font-semibold">{data.name}</h3>
              <span className="text-2xl font-bold">${data?.price}</span>
            </div>
            <div className="w-[40%]">
              <span className="flex items-center gap-2">
                <b>Coverage:</b>
                {data.included}
              </span>
            </div>
            <div>
              <span className="flex items-center gap-2">
                <b>Turnaround:</b>
                1-2 Business Days
              </span>
            </div>
            <div className="flex gap-2">
              <span>
                <b>Add-Ons:</b>
                {data?.addOns?.map((item: any) => (
                  <span>{item.name}, </span>
                ))}
              </span>
            </div>
          </div> */}
          <div>
            <Image src={data?.banner} alt="image" width={600} height={100} />
          </div>
        </section>
        <section className="w-1/2">
          <h5 className="text-center pb-5">{data?.name}</h5>
          <CheckoutForm data={data} />
        </section>
      </main>
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
      <Testimonial />
    </>
  );
};

export default page;
