import Image from "next/image";
import React from "react";
import Question from "@/components/assets/img/question.svg";
import { Mail, Phone } from "lucide-react";
import { articles } from "../page";
import Link from "next/link";

interface PageProps {
  // define props here
}

export const metadata = {
  title: "Top Features to Demand in Modern Trademark Docketing Software",
  description:
    "Discover the essential features every modern trademark docketing system should offer—automation, multi-jurisdiction support, dashboards, security, AI, and more—for corporate IP teams.",
  keywords: [
    "Trademark Docketing Software",
    "IP Docketing Features",
    "Trademark Portfolio Management",
    "Trademark Deadline Tracking",
  ],
};

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S1_Top Features to Demand in Modern Trademark Docketing Software.jpg"
          alt="Top Features to Demand in Modern Trademark Docketing Software"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Top Features to Demand in Modern Trademark Docketing Software
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 27/07/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            In today&apos;s fast-paced business environment, intellectual
            property (IP) is one of the most valuable assets a company owns. As
            trademark portfolios grow across multiple jurisdictions, managing
            deadlines, renewals, office actions, and compliance manually becomes
            increasingly complex. Missing a critical trademark deadline can
            result in costly legal consequences, loss of valuable rights, and
            reputational damage.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is where modern trademark docketing software becomes
            indispensable. More than just a digital calendar, today&apos;s
            docketing solutions serve as centralized IP management platforms
            that streamline workflows, automate routine tasks, enhance
            collaboration, and provide real-time visibility into trademark
            portfolios.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For corporate IP teams responsible for protecting hundreds—or even
            thousands—of trademarks worldwide, choosing the right docketing
            software is a strategic investment. This article explores the
            essential features every modern trademark docketing system should
            offer and how these capabilities help organizations improve
            efficiency, reduce risk, and strengthen trademark portfolio
            management.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Trademark Docketing Software Matters
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark lifecycle management involves numerous time-sensitive
            activities, including application filings, office action responses,
            publication monitoring, opposition periods, renewals, assignments,
            licensing, and jurisdiction-specific compliance requirements.
            Managing these processes through spreadsheets or disconnected
            systems significantly increases the risk of missed deadlines and
            administrative inefficiencies.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Modern trademark docketing software centralizes all trademark data,
            automates reminders, tracks legal events, and enables IP
            professionals to make informed decisions based on accurate,
            real-time information.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            1. Automated Deadline and Renewal Management
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            One of the most critical capabilities of any docketing system is
            automated deadline tracking.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A reliable solution should automatically calculate and monitor:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark filing deadlines</li>
            <li>Office action response dates</li>
            <li>Renewal deadlines</li>
            <li>Declaration of use requirements</li>
            <li>Opposition periods</li>
            <li>Appeal deadlines</li>
            <li>Maintenance filings</li>
            <li>International registration timelines</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Automated reminders should be configurable to notify multiple
            stakeholders well before important due dates, minimizing the risk of
            missed filings.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            2. Centralized Trademark Portfolio Management
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Corporate IP teams often manage trademarks across numerous
            countries, business units, and product lines. A modern docketing
            platform should provide a centralized repository for all trademark
            records.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The system should store:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark registration details</li>
            <li>Filing information</li>
            <li>Ownership records</li>
            <li>Goods and services classifications</li>
            <li>Attorney information</li>
            <li>Renewal history</li>
            <li>Licensing agreements</li>
            <li>Assignments</li>
            <li>Related documents</li>
            <li>Correspondence</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Having all trademark information in one secure location improves
            visibility and simplifies portfolio management.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            3. Multi-Jurisdiction Support
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Global organizations require software capable of managing trademarks
            across multiple jurisdictions with varying legal requirements.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The ideal system should support:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>National trademark offices</li>
            <li>Regional trademark systems</li>
            <li>Madrid Protocol registrations</li>
            <li>Country-specific renewal rules</li>
            <li>Local filing requirements</li>
            <li>Multiple languages</li>
            <li>Time zone considerations</li>
            <li>Currency management</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Built-in jurisdiction-specific rules help reduce compliance risks
            while simplifying international portfolio management.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            4. Intelligent Workflow Automation
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Routine administrative tasks consume valuable time for corporate IP
            teams.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Modern software should automate workflows such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Task assignments</li>
            <li>Filing reminders</li>
            <li>Approval processes</li>
            <li>Document routing</li>
            <li>Status updates</li>
            <li>Escalation notifications</li>
            <li>Renewal processing</li>
            <li>Reporting schedules</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Workflow automation increases operational efficiency while ensuring
            consistency across the organization.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            5. Comprehensive Document Management
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark records often include thousands of supporting documents
            accumulated over many years.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            An effective docketing system should provide secure storage for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Applications</li>
            <li>Registration certificates</li>
            <li>Office actions</li>
            <li>Responses</li>
            <li>Search reports</li>
            <li>Licensing agreements</li>
            <li>Assignment documents</li>
            <li>Evidence of use</li>
            <li>Renewal confirmations</li>
            <li>Correspondence</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Version control and document history further enhance record accuracy
            and audit readiness.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            6. Advanced Search and Filtering
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            As portfolios expand, quickly locating trademark information becomes
            increasingly important.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Powerful search capabilities should allow users to filter records
            by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark name</li>
            <li>Registration number</li>
            <li>Filing number</li>
            <li>Jurisdiction</li>
            <li>Owner</li>
            <li>Attorney</li>
            <li>Status</li>
            <li>Nice Classification</li>
            <li>Filing date</li>
            <li>Renewal date</li>
            <li>Business unit</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Advanced filtering significantly improves productivity when managing
            large trademark portfolios.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            7. Real-Time Portfolio Dashboards
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Executives and IP managers need immediate visibility into portfolio
            performance.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Modern dashboards should display:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Upcoming deadlines</li>
            <li>Pending renewals</li>
            <li>Office actions</li>
            <li>New filings</li>
            <li>Portfolio growth</li>
            <li>Geographic distribution</li>
            <li>Budget summaries</li>
            <li>Risk indicators</li>
            <li>Status by jurisdiction</li>
            <li>Workload distribution</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Interactive dashboards support better decision-making through
            actionable insights.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            8. Robust Reporting and Analytics
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Data-driven reporting enables corporate IP teams to optimize
            portfolio strategy and resource allocation.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Essential reporting features include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Renewal forecasts</li>
            <li>Filing trends</li>
            <li>Jurisdiction analysis</li>
            <li>Portfolio valuation support</li>
            <li>Budget reports</li>
            <li>Deadline reports</li>
            <li>Trademark status summaries</li>
            <li>Attorney performance metrics</li>
            <li>Cost analysis</li>
            <li>Compliance reports</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Customizable reports help stakeholders make informed business
            decisions.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            9. Calendar Integration
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark deadlines should integrate seamlessly with existing
            business tools.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Look for software that supports synchronization with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Microsoft Outlook</li>
            <li>Google Calendar</li>
            <li>Microsoft Teams</li>
            <li>Enterprise scheduling platforms</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Calendar integration ensures important deadlines remain visible
            across the organization.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            10. Secure User Access and Permissions
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark information is highly confidential.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Enterprise-grade docketing software should provide:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Role-based permissions</li>
            <li>Multi-factor authentication</li>
            <li>Single Sign-On (SSO)</li>
            <li>Audit logs</li>
            <li>Activity tracking</li>
            <li>User-level access controls</li>
            <li>Data encryption</li>
            <li>Secure backups</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These features help protect sensitive IP assets while supporting
            governance and compliance.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            11. Integration with Existing Business Systems
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Corporate IP teams rarely operate in isolation.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The best trademark docketing platforms integrate with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Enterprise Resource Planning (ERP) systems</li>
            <li>Customer Relationship Management (CRM) software</li>
            <li>Document management systems</li>
            <li>Accounting software</li>
            <li>Billing platforms</li>
            <li>Email systems</li>
            <li>Legal management solutions</li>
            <li>E-signature platforms</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Seamless integrations reduce duplicate data entry and improve
            operational efficiency.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            12. Cloud-Based Accessibility
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Modern organizations increasingly rely on cloud-based solutions that
            enable secure access from anywhere.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Cloud deployment offers advantages such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Remote accessibility</li>
            <li>Automatic updates</li>
            <li>Enhanced security</li>
            <li>Disaster recovery</li>
            <li>Reduced IT maintenance</li>
            <li>Scalable infrastructure</li>
            <li>Faster deployment</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This flexibility is especially valuable for distributed legal and IP
            teams.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            13. Collaboration Tools
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark management often involves multiple stakeholders, including
            legal departments, outside counsel, marketing teams, and business
            executives.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Collaboration features should include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Shared workspaces</li>
            <li>Internal comments</li>
            <li>Task assignments</li>
            <li>Approval workflows</li>
            <li>Notifications</li>
            <li>Activity history</li>
            <li>Team dashboards</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Improved collaboration reduces communication gaps and accelerates
            decision-making.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            14. Renewal Cost Forecasting
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark renewals represent a significant ongoing investment.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Advanced docketing software should provide:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Upcoming renewal schedules</li>
            <li>Estimated renewal costs</li>
            <li>Country-wise expense forecasts</li>
            <li>Budget planning tools</li>
            <li>Cost tracking</li>
            <li>Vendor management</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Financial visibility enables better long-term budgeting for
            trademark portfolios.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            15. AI-Powered Productivity Features
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Artificial intelligence is transforming intellectual property
            management.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Modern trademark docketing software increasingly incorporates AI
            capabilities such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Automated data extraction</li>
            <li>Smart document classification</li>
            <li>Duplicate trademark detection</li>
            <li>Predictive deadline monitoring</li>
            <li>Intelligent search</li>
            <li>Automated reporting</li>
            <li>Risk identification</li>
            <li>Workflow recommendations</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These features reduce administrative effort while improving accuracy
            and productivity.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            16. Compliance and Audit Readiness
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Organizations operating in regulated industries must maintain
            comprehensive records for audits and legal reviews.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Essential compliance features include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Complete audit trails</li>
            <li>Historical record preservation</li>
            <li>Timestamped activities</li>
            <li>User action logs</li>
            <li>Document version history</li>
            <li>Compliance reporting</li>
            <li>Secure archival</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These capabilities support internal governance and regulatory
            compliance.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            17. Scalability for Growing Trademark Portfolios
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            As companies expand globally, trademark portfolios continue to grow.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A future-ready docketing solution should easily scale to support:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Thousands of trademarks</li>
            <li>Multiple legal entities</li>
            <li>International offices</li>
            <li>Additional users</li>
            <li>New jurisdictions</li>
            <li>Increased document storage</li>
            <li>Expanding workflows</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Scalability protects long-term technology investments.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Common Mistakes When Choosing Trademark Docketing Software
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Organizations often focus solely on cost while overlooking critical
            functionality.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Common selection mistakes include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Choosing software without automation capabilities</li>
            <li>Ignoring integration requirements</li>
            <li>Underestimating security needs</li>
            <li>Selecting systems with limited reporting</li>
            <li>Overlooking international support</li>
            <li>Failing to evaluate user experience</li>
            <li>Not considering future scalability</li>
            <li>Neglecting vendor support and training</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A comprehensive evaluation ensures the software continues to meet
            business needs as the trademark portfolio grows.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Final Thoughts
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Modern trademark docketing software has evolved far beyond simple
            deadline tracking. For corporate IP teams managing complex,
            multinational trademark portfolios, the right platform serves as a
            strategic asset that enhances visibility, improves compliance,
            automates routine processes, and supports informed decision-making.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            When evaluating solutions, organizations should prioritize
            automation, centralized portfolio management, advanced reporting,
            robust security, seamless integrations, AI-driven productivity, and
            scalability. Investing in a feature-rich docketing system not only
            reduces administrative burden but also strengthens the protection
            and long-term value of the company&apos;s intellectual property
            assets.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            As trademark portfolios become increasingly global and complex,
            adopting modern docketing technology is no longer optional—it&apos;s
            essential for efficient, compliant, and future-ready IP management.
            At{" "}
            <a
              className="text-blue-600 underline hover:no-underline"
              href="https://effemark.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              EffeMark
            </a>
            , we help IP teams stay ahead of critical deadlines with
            professional{" "}
            <a
              className="text-blue-600 underline hover:no-underline"
              href="https://www.effemark.com/trademark-docketing"
              target="_blank"
              rel="noopener noreferrer"
            >
              trademark docketing
            </a>{" "}
            support that strengthens portfolio visibility and compliance.
          </p>
        </div>
      </section>
      <section className="w-full md:w-[35%] space-y-6 md:space-y-10">
        <section className="bg-[#202F5A] py-4 md:py-5 rounded-2xl">
          <h4 className="text-white text-center text-lg sm:text-xl">
            Recent Posts
          </h4>
          <ul className="p-3 sm:p-5 space-y-3 sm:space-y-5">
            {articles
              .slice(-5)
              .reverse()
              .map((article) => (
                <Link
                  href={`/articles/${article.slug}`}
                  key={article.slug}
                  className="p-3 sm:p-5 space-y-3 sm:space-y-5"
                >
                  <li className="cursor-pointer border-b-[1px] border-white p-1 rounded">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex-shrink-0">
                        <Image
                          src={article.filepath}
                          alt="Blog Banner"
                          width={100}
                          height={100}
                          className="w-20 sm:w-24 md:w-28 h-auto"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-white text-[11px] sm:text-[12px] md:text-[13px] line-clamp-2">
                          {article.heading}
                        </h3>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
          </ul>
        </section>
        <section className="flex items-center justify-center relative">
          <Image
            src={Question}
            alt="Question Icon"
            className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-none"
          />
          <div className="flex flex-col items-center absolute top-[60%] left-0 right-0 bottom-0 inset-0 space-y-2">
            <a
              href="mailto:info@effemark.com"
              className="flex items-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] text-white break-all px-2 text-center"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="break-all">info@effemark.com</span>
            </a>
            <a
              href="tel:+13124285732"
              className="flex items-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] text-white"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>+1 (312) 428-5732</span>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default page;
