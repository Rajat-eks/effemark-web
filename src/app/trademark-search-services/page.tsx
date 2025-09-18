import HeroSection from "./_components/heroSection/page";
import React from "react";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import CaseStudy from "@/components/CaseStudy";
import { QuesAns } from "../faqs/_component/QuesAns";
import GetInTouch from "@/components/GetInTouch";
import Banner from "@/components/assets/bg/trademark-search-service.svg";

import SilentLogo from "@/components/assets/icons/registration rejection.svg";
import GlobalMarket from "@/components/assets/icons/Legal.svg";
import Diluation from "@/components/assets/icons/geographics limitation.svg";
import Damage from "@/components/assets/icons/MArket confusion.svg";
import Financial from "@/components/assets/icons/barrier.svg";
import Solutions from "@/components/Solutions";

import Global from "@/components/assets/icons/global.svg";
import Hybrid from "@/components/assets/icons/hybrid.svg";
import Timely from "@/components/assets/icons/timely.svg";
import Premium from "@/components/assets/icons/premium.svg";
import Threats from "../trademark-monitoring/_component/Threats";
import SilentThrets from "../trademark-monitoring/_component/SilentThrets";
import { trademarkProducts } from "@/data/products";

interface PageProps {
  // define props here
}

export const metadata = {
  title: "Comprehensive Trademark Search Services | Starting at $65",
  description:
    "Strengthen your brand protection with trademark search services that detect potential disputes and preserve your brand identity. Reach out today!",
  keywords: ["Trademark Search Services", "Trademark Search Company"],
};

const FAQs = [
  {
    question: "What exactly is a trademark search?",
    answer:
      "A trademark search is a comprehensive review of existing registered and unregistered trademarks to determine if your proposed mark might conflict with others already in use. At EffeMark, we search across federal and state registrations, common law usage, domain names, and business registries to identify potential conflicts that could prevent registration or lead to legal disputes.",
  },
  {
    question: "How long does the trademark search process take?",
    answer:
      "Our turnaround times vary based on the type of search you select. Basic screening searches are typically completed within 1-2 business days, while comprehensive searches may take 3-5 business days. International searches depend on the number of jurisdictions involved. Rush services are available for urgent needs at an additional fee.",
  },
  {
    question: "What happens if potential conflicts are found?",
    answer:
      "If our search identifies potential conflicts, we provide a risk assessment for each conflict and strategic recommendations for proceeding. Options may include modifying your mark, limiting the scope of goods/services, considering a coexistence agreement, or selecting an alternative mark. Our experts can guide you through the decision-making process based on your business priorities.",
  },
  {
    question: "Why shouldn't I just do a free search myself?",
    answer:
      "While free USPTO or Google searches might seem sufficient, they only scratch the surface. Professional trademark searches utilize specialized databases, complex algorithms, and expert analysis to identify similar marks that could present legal risks. Our experts consider phonetic similarities, translation equivalents, and industry context that automated tools miss, potentially saving you from costly disputes and rebranding.",
  },
  {
    question: "Do you handle international trademark searches?",
    answer:
      "Yes, we conduct international trademark searches across 180+ countries worldwide. Our team includes specialists with regional expertise and multilingual capabilities to ensure thorough coverage of your target markets. International search packages can be customized to include only the countries relevant to your business expansion plans.",
  },
  {
    question: "What databases do you check during a comprehensive search?",
    answer:
      "Our comprehensive searches include the USPTO federal database, state trademark registries, business name databases, domain registrations, social media platforms, industry publications, and common law sources. For international searches, we access the official databases of each country's trademark office, WIPO's international registry, and regional databases like the EUIPO.",
  },
  {
    question:
      "How do you handle similar-sounding names or alternate spellings?",
    answer:
      "Our search methodology includes phonetic variations, alternative spellings, plurals, common misspellings, and translation equivalents of your proposed mark. We utilize specialized algorithms and linguistic expertise to identify marks that sound similar even if spelled differently, as these can still present infringement risks.",
  },
];

const thretsContent: { avatar?: any; title: string; description: string }[] = [
  {
    title: "Registration Rejection",
    description:
      "Months of work & investment wasted when trademark applications are denied",
    avatar: SilentLogo,
  },
  {
    title: "Legal Challenges",
    description:
      "Unexpected opposition from existing trademark holders claiming infringement",
    avatar: GlobalMarket,
  },
  {
    title: "Geographic Limitations",
    description:
      "Discovering unexpected restrictions on your brand's market reach",
    avatar: Diluation,
  },
  {
    title: "Market Confusion",
    description:
      "Potential legal battles that blur your brand's unique identity",
    avatar: Damage,
  },
  {
    title: "Expansion Barriers",
    description:
      "Unintended conflicts blocking your business growth and potential",
    avatar: Financial,
  },
];

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="w-full">
      <HeroSection
        banner={Banner}
        cunsultant={true}
        description="Stop Potential Legal Nightmares Before They Begin: Expert Trademark Protection for Businesses"
        title="Comprehensive Trademark Search Services"
      />
      <Threats
        title="Trademark Risks Hidden in Plain Sight"
        description="Building a strong brand requires significant investment of time, money, and creativity. Yet many businesses overlook the critical step of comprehensive trademark availability searches, leaving their brand identity vulnerable to:"
        content={thretsContent}
      />
      <SilentThrets
        title="The Silent Threats to Your Brand"
        description="What happens when trademark searches are incomplete?"
        heading="The consequences of inadequate trademark searches extend far beyond simple inconvenience:"
        content={[
          {
            title: "Brand Vulnerability",
            description:
              "Trademark conflicts can financially devastate your entire business strategy.",
          },
          {
            title: "Business Impact",
            description:
              "Unexpected legal battles crush your company's market momentum.",
          },
          {
            title: "Long-term Consequences",
            description:
              "Unresolved trademark issues permanently derail your brand's future.",
          },
        ]}
      />
      <Solutions products={trademarkProducts} />
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
      <section className="bg-[#202F5A] w-full flex flex-col items-center justify-center p-5 md:py-10 md:px-20 space-y-5 ">
        <h4 className="text-[18px] md:text-[25px] text-white text-center">
          Frequently Asked Questions (FAQs)
        </h4>
        {FAQs.map((item) => (
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
