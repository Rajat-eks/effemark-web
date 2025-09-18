import HeroSection from "./_components/heroSection";
import React from "react";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import CaseStudy from "@/components/CaseStudy";
import { QuesAns } from "../faqs/_component/QuesAns";
import GetInTouch from "@/components/GetInTouch";
import Banner from "@/components/assets/bg/trademark-docating.svg";
import Global from "@/components/assets/icons/global.svg";
import Hybrid from "@/components/assets/icons/hybrid.svg";
import Timely from "@/components/assets/icons/timely.svg";
import Premium from "@/components/assets/icons/premium.svg";
import { trademarkProducts } from "@/data/products";

interface PageProps {
  // define props here
}

export const metadata = {
  title: "Trademark Docketing Services | EffeMark",
  description:
   "Maintain compliance with expert trademark docketing services - providing worldwide coverage, prompt document management & integrated quality assurance. Start today!",
  keywords: ["Trademark Docketing Services"],
};
const FAQs = [
  {
    question:
      "What is trademark docketing and why is it critical for my business?",
    answer:
      "Trademark docketing is a systematic process of tracking and managing all critical deadlines, renewal dates, and compliance requirements for your trademark portfolio. It's critical because missing a single deadline can result in the loss of valuable trademark rights, potentially costing your business thousands of dollars and years of brand protection. Our docketing system ensures every important date is monitored and acted upon promptly.",
  },
  {
    question:
      "What types of deadlines and milestones do you monitor in trademark docketing?",
    answer:
      "We monitor all critical trademark deadlines including: USPTO office action response deadlines (typically 6 months), Notice of Allowance responses (6 months), Statement of Use filings, Section 8 declarations (between 5th-6th year), Section 9 renewal filings (between 9th-10th year), Madrid Protocol deadlines, opposition and cancellation proceedings deadlines, and foreign filing deadlines. Each deadline is tracked with multiple advance alerts to ensure timely action.",
  },
  {
    question: "How do you ensure 100% accuracy in trademark docketing?",
    answer:
      "We employ a multi-layered verification system including: dual-entry verification where two specialists independently enter data, automated cross-referencing with USPTO databases, weekly docket audits, client confirmation protocols for critical deadlines, and redundant alert systems with escalation procedures. Our quality control process has maintained a 99.9% accuracy rate in deadline management.",
  },
  {
    question:
      "What happens if I need to switch from my current docketing system to yours?",
    answer:
      "We provide seamless docketing system migration with zero risk of missed deadlines. Our process includes: comprehensive audit of your existing docket, data validation and cleanup, parallel tracking during transition period, complete data migration with verification, staff training on our system, and a 30-day overlap period to ensure continuity. We guarantee no deadlines will be missed during the transition.",
  },
  {
    question: "How often do you review and update trademark dockets?",
    answer:
      "We perform real-time updates as soon as any changes occur, daily automated scans of USPTO databases for status changes, weekly comprehensive docket reviews, monthly client reports with upcoming deadlines, and quarterly portfolio analysis. Our system provides 24/7 monitoring with immediate alerts for any critical changes or approaching deadlines.",
  },
  {
    question:
      "What are the key advantages of using professional trademark docketing software over manual tracking?",
    answer:
      "Professional docketing software provides: automated deadline calculations that eliminate human error, real-time USPTO database integration, customizable alert systems with multiple notification methods, comprehensive reporting and analytics, secure cloud-based access from anywhere, integration with legal practice management systems, and detailed audit trails for compliance. Manual systems simply cannot match this level of reliability and efficiency.",
  },
  {
    question:
      "How do clients receive trademark deadline notifications and what options are available?",
    answer:
      "We offer multiple notification channels including: email alerts with customizable timing (30, 60, 90 days in advance), SMS text alerts for urgent deadlines, secure client portal access with dashboard views, detailed deadline reports with action items, calendar integration for Outlook/Google Calendar, and dedicated account manager communications. Clients can customize their preferred notification methods and timing.",
  },
  {
    question:
      "What specific information and documentation do you track for each trademark?",
    answer:
      "We maintain comprehensive records including: application and registration numbers, filing and registration dates, mark details and classifications, attorney and client information, prosecution history and correspondence, renewal and maintenance dates, international filing details, assignment records, licensing agreements, enforcement actions, and related domain names. Every document is digitally stored and easily accessible.",
  },
  {
    question:
      "How do you handle Section 8 declarations and Section 9 renewals, and when are they due?",
    answer:
      "Section 8 declarations (proving continued use) must be filed between the 5th and 6th year after registration, and Section 9 renewals (extending the registration) are due between the 9th and 10th year, then every 10 years thereafter. We automatically calculate these deadlines, prepare the necessary documentation, coordinate with clients for use evidence, file the applications, and monitor for approval. Our system prevents the costly mistake of missing these critical deadlines.",
  },
  {
    question:
      "Can your trademark docketing support help with office actions and other USPTO responses?",
    answer:
      "Yes, we provide comprehensive support including: immediate alerts when office actions are issued, deadline calculation and tracking for responses (typically 6 months), coordination with your attorney for response preparation, document preparation and filing assistance, follow-up monitoring for USPTO responses, and escalation procedures for urgent matters. We ensure no office action response deadline is ever missed, protecting your trademark applications from abandonment.",
  },
];

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="w-full">
      <HeroSection
        banner={Banner}
        cunsultant={false}
        description="We deliver expert trademark docketing solutions and specialized paralegal services designed for global trademark portfolios. Our services encompass proactive deadline monitoring, professional document management, and comprehensive quality control, ensuring your intellectual property remains secure across international markets."
        title="Trademark Docketing Services"
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
      {/* <CaseStudy /> */}

      <Testimonial />

      <section className="bg-[#202F5A] w-full flex flex-col items-center justify-center py-10 px-6 md:px-20 space-y-5 ">
        <h4 className=" text-[20px]  text-center md:text-[25px] text-white">
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
