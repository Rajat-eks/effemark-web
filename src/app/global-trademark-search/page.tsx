import HeroSection from "./_components/heroSection";
import React from "react";

import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import CaseStudy from "@/components/CaseStudy";
import { QuesAns } from "../faqs/_component/QuesAns";
import GetInTouch from "@/components/GetInTouch";
import Banner from "@/components/assets/bg/global-trademark.svg";
import Global from "@/components/assets/icons/global.svg";
import Hybrid from "@/components/assets/icons/hybrid.svg";
import Timely from "@/components/assets/icons/timely.svg";
import Premium from "@/components/assets/icons/premium.svg";

interface PageProps {
  // define props here
}

export const metadata = {
  title: "International Trademark Search | Covering 190+ Countries",
  description:
   "Secure your brand through comprehensive worldwide trademark search spanning 190+ nations. International trademark research from $525. Reach Out Today!",
  keywords: ["Global Trademark Search", "International Trademark Search"],
};

export const trademarkSearchTestimonial = [
  {
    question: "What is a global trademark search?",
    answer:
      "A comprehensive investigation of trademark registrations and applications across multiple countries to identify potential conflicts before international expansion. It examines databases worldwide to prevent legal disputes and clearance issues.",
  },
  {
    question: "How do I conduct a global trademark search?",
    answer:
      "Use international databases like WIPO Global Brand Database, regional systems like EUIPO, and national databases. Search for identical, similar, phonetic, and visual matches. Professional services provide comprehensive analysis across jurisdictions.",
  },
  {
    question: "Are trademarks recognized worldwide?",
    answer:
      "No, trademarks are territorial and only protected where registered. International treaties like Madrid Protocol facilitate multi-country registration, but each country maintains separate protection requiring individual registrations or applications.",
  },
  {
    question: "How can I secure global trademark protection?",
    answer:
      "To safeguard your brand globally, you can either file individual applications in each country or utilize the Madrid System through WIPO. Before beginning this process, it's crucial to conduct a global trademark search to identify any existing similar marks. EffeMark's global trademark search services help discover risks across multiple jurisdictions so you can proceed with confidence.",
  },
  {
    question: "Can I file a trademark worldwide through a single application?",
    answer:
      "No single application grants worldwide trademark protection. However, the Madrid System enables you to apply in multiple countries through a single submission. EffeMark's international trademark search services support this process by identifying potential conflicts across jurisdictions, making us a trusted provider of global trademark search solutions.",
  },
  {
    question: "How does EffeMark's global trademark search function?",
    answer:
      "EffeMark searches 180+ countries' databases using automated and human analysis. Provides comprehensive reports categorizing conflicts by risk level with professional attorney review and strategic recommendations for registration decisions.",
  },
  {
    question:
      "What are the key differences between national and global trademark systems?",
    answer:
      "National systems operate under individual country laws with varying examination standards. Global systems like Madrid Protocol streamline multi-country filing while maintaining territorial protection under each nation's laws.",
  },
  {
    question:
      "Which countries should I prioritize for global trademark protection?",
    answer:
      "Prioritize current/planned markets, major economies (US,India, EU, China, Japan), competitor territories, manufacturing locations, and countries prone to counterfeiting. Consider regional systems for cost-effective multi-country coverage",
  },
];
const page: React.FC<PageProps> = (props) => {
  return (
    <main className="w-full">
      <HeroSection
        banner={Banner}
        cunsultant={true}
        description="Protect your intellectual property across international markets with our comprehensive global trademark search services. Our expert team conducts thorough searches across 180+ countries and territories, ensuring your brand is clear for registration worldwide."
        title="Global Trademark Search"
      />
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
      {/* <CaseStudy /> */}
      <Testimonial />

      <section className="bg-[#202F5A] w-full flex flex-col items-center justify-center p-6 md:py-10 md:px-20 space-y-5 ">
        <h4 className=" text-[16px] md:text-[25px] text-white">
          Frequently Asked Questions (FAQs)
        </h4>
        {trademarkSearchTestimonial?.map((item) => (
          <QuesAns
            className="border-[1px] border-white"
            ques={item.question}
            ans={item.answer}
          />
        ))}
      </section>
      <GetInTouch />
    </main>
  );
};

export default page;
