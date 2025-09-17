import Image from "next/image";
import React from "react";
import Banner from "@/components/assets/img/faq.svg";
import { QuesAns } from "./_component/QuesAns";

interface PageProps {
  // define props here
}
const trademarkDocket = [
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

const trademarkMonitor = [
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
const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <section className="relative ">
        <Image src={Banner} alt="FAQ Banner" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-black/70 h-full w-full flex items-center justify-center">
          <h4 className=" sm:text-3xl text-xl md:text-[53px] text-white font-bold ">
            Frequently Asked Questions
          </h4>
        </div>
      </section>
      <section className="w-full">
        <section className="flex flex-col items-center justify-center p-5">
          <h4 className="md:text-[26px]  text-xl font-bold">
            Trademark Monitoring{" "}
          </h4>
          <ul className="md:p-4 py-4 md:w-[85%] space-y-2">
            {trademarkMonitor.map((item) => (
              <li>
                <QuesAns ques={item.question} ans={item.answer} />
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col items-center justify-center p-5">
          <h4 className="md:text-[26px] font-bold text-xl ">Trademark Docketing</h4>
          <ul className="p-4 md:w-[85%] space-y-2">
            {trademarkDocket.map((item) => (
              <li>
                <QuesAns ques={item.question} ans={item.answer} />
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
};

export default page;
