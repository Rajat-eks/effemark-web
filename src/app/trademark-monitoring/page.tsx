import HeroSection from "./_component/heroSection";
import React from "react";
import Threats from "./_component/Threats";
import { QuesAns } from "../faqs/_component/QuesAns";
import CaseStudy from "@/components/CaseStudy";
import CTA from "@/components/CTA";
import Testimonial from "@/components/Testimonial";
import Process from "@/components/Process";
import Features from "@/components/Features";
import GetInTouch from "@/components/GetInTouch";
import Banner from "@/components/assets/img/monitor-trademark-banner.svg";
import SilentThrets from "./_component/SilentThrets";
import CANADA from "@/components/assets/logo/Canada.svg";
import US from "@/components/assets/logo/us.svg";
import Image from "next/image";
import Global from "@/components/assets/icons/global.svg";
import Hybrid from "@/components/assets/icons/hybrid.svg";
import Timely from "@/components/assets/icons/timely.svg";
import Premium from "@/components/assets/icons/premium.svg";
import { monitorProduct } from "@/data/products";

import SilentLogo from "@/components/assets/icons/silent.svg";
import GlobalMarket from "@/components/assets/icons/global Market.svg";
import Diluation from "@/components/assets/icons/brand dilution.svg";
import Damage from "@/components/assets/icons/damage.svg";
import Financial from "@/components/assets/icons/financial.svg";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageProps {
  // define props here
}


export const metadata = {
  title: "Real-Time Trademark Monitoring Services | Starting at $55",
  description:
   "Defend your intellectual property with advanced trademark monitoring services that identify emerging risks and deliver instant notifications. Start protecting now!",
  keywords: ["Trademark Monitoring Services", "Trademark Monitoring Company","Trademark Watch Services","Trademark Watch Company"],
};

const FAQs = [
  {
    question: "What exactly is a trademark monitoring service?",
    answer:
      "A trademark monitoring service is a comprehensive surveillance system that continuously watches for unauthorized use of your trademark across various platforms, marketplaces, and jurisdictions. It acts as your digital watchdog, scanning millions of trademark applications, domain registrations, social media platforms, and commercial databases to identify potential infringers who might be using similar marks that could confuse consumers or dilute your brand's value.",
  },
  {
    question: "How is trademark monitoring different from a trademark search?",
    answer:
      "While trademark searches identify potential conflicts before registration, monitoring tracks ongoing trademark usage and potential infringements after registration.",
  },
  {
    question: "How quickly will I be notified of potential trademark issues?",
    answer:
      "Our advanced systems provide real-time alerts, ensuring you're informed immediately of any potential trademark conflicts.",
  },
  {
    question: "Can you monitor trademarks in multiple languages?",
    answer:
      "Yes, our multilingual monitoring covers linguistic variations and cultural trademark nuances.",
  },
  {
    question: "Should I use ® or ™ when displaying my trademark?",
    answer:
      "The choice depends on your trademark's registration status. Use ® only for federally registered trademarks, as it's legally protected and signals official recognition. Use ™ for unregistered trademarks or marks pending registration to establish your claim to the mark. Misusing ® for unregistered marks can result in legal penalties, so it's crucial to switch from ™ to ® only after receiving your official registration certificate from the trademark office.",
  },
  {
    question: "What geographical areas do you cover?",
    answer:
      "We offer global trademark monitoring across 180+ countries, with customizable regional focus.",
  },
  {
    question: "How do you detect subtle trademark infringements?",
    answer:
      "Using AI, linguistic analysis, and expert review, we detect even minor variations that could compromise your trademark.",
  },
];
const thretsContent: { avatar?: any; title: string; description: string }[] = [
  {
    title: "Silent Infringers",
    description: "Competitors subtly encroaching on your brand's unique space",
    avatar: SilentLogo,
  },
  {
    title: "Global Market Risks",
    description: "Unexpected challenges in emerging and established markets",
    avatar: GlobalMarket,
  },
  {
    title: "Brand Dilution",
    description: "Gradual erosion of your trademark's distinctive character",
    avatar: Diluation,
  },
  {
    title: "Reputation Vulnerability",
    description: "Unauthorized use damaging your brand's integrity",
    avatar: Damage,
  },
  {
    title: "Financial Exposure",
    description: "Potential revenue loss from unchecked trademark misuse",
    avatar: Financial,
  },
];
const page: React.FC<PageProps> = (props) => {
  return (
    <div className="w-full">
      <HeroSection
        title="Comprehensive Trademark Monitoring Services"
        description="Proactive Trademark Monitoring: Your First Line of Defense Against Potential Infringements"
        cunsultant={true}
        banner={Banner}
      />
      <Threats
        title="The Invisible Threats to Your Brand Sovereignty"
        description="In today's hyper-competitive marketplace, your trademark is more than just a legal document - it's the essence of your brand's identity. Yet, countless businesses remain unaware of the constant threats lurking just beyond their visibility:"
        content={thretsContent}
      />
      <SilentThrets
        title="The Cost of Trademark Negligence"
        description="What happens when your brand goes unprotected?"
        content={[
          {
            title: "Brand Vulnerability",
            description:
              "Unchecked trademark use can destroy your market position",
          },
          {
            title: "Business Impact",
            description:
              "Trademark threats compromise your competitive advantage",
          },
          {
            title: "Long-term Consequences",
            description:
              "Neglected trademark monitoring risks permanent brand damage",
          },
        ]}
      />

      <section className="  border-gray-300  w-full text-center border-dotted flex flex-col items-center">
        <h4 className="text-[20px] md:text-[25px]">
          EffeMark Trademark Monitoring Services
        </h4>
        <p className="text-[16px]">
          Intelligent, Comprehensive Trademark Monitoring Beyond Traditional
          Boundaries
        </p>
        <div className="bg-[#D9D9D9] w-[90%] rounded-xl   md:p-10  m-5 md:my-10 grid md:grid-cols-2">
          {monitorProduct?.map((product: any, index: any) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 m-5 flex flex-col space-y-4 group"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={product.avatar}
                  alt="canada_logo"
                  width={100}
                  height={100}
                />
              </div>
              <h5 className="text-[25px]">{product.name}</h5>

              <div className="text-[12px] flex flex-col items-start">
                <span>
                  <b>Monitoring Period:</b> 12 Months
                </span>
                <span>
                  <b> Reporting Schedule:</b> Customizable based on your
                  preferences
                </span>
              </div>
              <div className="text-[12px] flex flex-col items-start">
                <span>
                  <b>Coverage:</b>
                  {product?.included}
                </span>
                <span>
                  <b>Turnaround:</b> 1-2 Business Days
                </span>
                <span>
                  <b>Add-Ons:</b> {product?.addOns?.length}+ Add-Ons Available
                </span>
                <div>
                  <h5 className="text-[25px] group-hover:text-[30px] group-hover:text-red-600">
                    Price: ${product?.price}
                  </h5>
                </div>
              </div>
              <p
                className="text-[11px] text-red-500 text-start
            "
              >
                *All US designated WIPO results are included
              </p>
              {/* <div className="flex items-center justify-center">
                <Link
                  href={`/checkout/${product.path}`}
                  className="border-[1px] py-2 px-4 rounded border-gray-400 flex items-center gap-1 hover:ease-in duration-300 group-hover:bg-[#202F5A] group-hover:text-white"
                >
                  Start Your Order <ChevronRight />
                </Link>
              </div> */}
            </div>
          ))}
        </div>
        <span className="border-b-[1px] pt-5 w-[90%] border-dotted flex items-center justify-center "></span>
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
      <Testimonial />
      <CTA />
      {/* <CaseStudy /> */}
      <section className="bg-[#202F5A] w-full flex flex-col items-center justify-center py-10 px-2 md:px-20 space-y-5">
        <h4 className="text-[18px] md:text-[25px] text-white text-center">
          Frequently Asked Questions (FAQs)
        </h4>
        {FAQs.map((item: any) => (
          <QuesAns
            className="border-[1px] border-white"
            ques={item.question}
            ans={item.answer}
          />
        ))}
      </section>
      <GetInTouch />
    </div>
  );
};

export default page;
