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
  title: "Global Trademark Docketing: Managing Deadlines Across 50+ Jurisdictions",
  description:
    "A trademark portfolio is only as strong as the deadlines that keep it alive. Learn how global trademark docketing works, how deadlines differ across key jurisdictions, and how to build a system that never misses a date.",
  keywords: ["Global Trademark Docketing"],
};

const P = "text-[14px] sm:text-[15px] md:text-[16px]";
const H2 = "text-[20px] sm:text-[22px] md:text-[25px] font-bold";
const H4 = "text-[16px] sm:text-[17px] md:text-[18px] font-bold";
const UL = "list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const OL = "list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const LINK = "text-blue-600 underline hover:no-underline";
const TH = "border border-gray-300 bg-[#202F5A] text-white text-left p-2 align-top";
const TD = "border border-gray-300 p-2 align-top";

const categories = [
  ["Priority", "Six months from first filing to claim Paris Convention priority in other countries.", "Loss of the earlier effective date. Cannot be restored in most systems."],
  ["Examination and office actions", "Replies to objections, requests for clarification and formal requirements.", "Application deemed abandoned or refused, sometimes with limited revival options."],
  ["Publication and opposition", "Windows for third parties to oppose and for your own opposition against conflicting marks.", "Loss of the ability to oppose a conflicting mark, forcing a costlier cancellation action later."],
  ["Registration and fees", "Payment of registration or grant fees after allowance.", "Application lapses even after approval."],
  ["Declarations or proof of use", "Periodic filings that confirm the mark is in use.", "Cancellation or loss of registration."],
  ["Renewal", "Periodic renewal, commonly every ten years, with grace periods in many countries.", "Expiry of the registration. Re-filing means a new priority date."],
  ["Non-use defence", "Dates after which a registration becomes vulnerable if not used.", "Exposure to revocation or cancellation by third parties."],
  ["Recordals", "Assignments, changes of name or address, licenses, security interests.", "Inability to enforce, or gaps in the chain of title."],
  ["Madrid-specific", "Dependency on the basic mark, refusal windows, subsequent designations and renewals through WIPO.", "Central attack can take down the international registration."],
];

const jurisdictions = [
  ["United States", "Declaration of use between years 5 and 6, then combined declaration and renewal at year 10 and every 10 years. Grace period of six months with a surcharge.", "Evidence of use required for registration (use-based) and at each maintenance filing. Non-use for three years creates a presumption of abandonment.", "Office action response windows are generally three months, with one paid extension available for most actions. Madrid-based registrations follow equivalent Section 71 filings."],
  ["European Union (EUIPO)", "Renewal every 10 years. Six-month grace period with a surcharge.", "No declaration of use. Revocation for non-use after five years of registration.", "Opposition window of three months after publication, with a possible cooling-off extension by agreement."],
  ["United Kingdom", "Renewal every 10 years, with a six-month late-renewal period.", "Non-use revocation after five years.", "Opposition period is generally two months, extendable to three by filing a notice."],
  ["China", "Renewal every 10 years, with a grace period.", "Cancellation on three consecutive years of non-use.", "Opposition period of three months from preliminary publication. First-to-file system makes early filing and monitoring essential."],
  ["Japan", "Renewal every 10 years (with a five-year installment option).", "Non-use cancellation after three years.", "Opposition period of two months after publication."],
  ["India", "Renewal every 10 years.", "Non-use cancellation after five years and three months, subject to conditions.", "Opposition period of four months after advertisement in the journal."],
  ["Canada", "Renewal every 10 years for marks registered after June 2019.", "Use required in Canada. Section 45 proceedings for non-use after three years.", "Different regimes for pre- and post-2019 registrations may apply within one portfolio."],
  ["Mexico, Philippines and others", "Renewal every 10 years in most cases.", "Some countries require declarations of use at specified anniversaries.", "Verify each country\u2019s anniversary-based declarations carefully."],
];

const cycle = [
  ["Quarterly", "Run reports on upcoming renewals, declarations and opposition windows for the next 12 months. Confirm owners. Review agent performance."],
  ["Monthly", "Review the 90-day look-ahead with supervising attorneys. Check for rule changes announced by key offices. Reconcile new instructions."],
  ["Weekly", "Review overdue and escalated items. Confirm that instructions have been acknowledged by agents."],
  ["On every new filing", "Enter triggering dates, generate rule-based deadlines, assign owners and confirm priority claims."],
  ["Annually", "Audit a sample of registrations against registry records. Review the rules library and holiday calendars. Run a use-and-value review of the portfolio."],
];

const Table = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-left text-[13px] sm:text-[14px]">
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h} className={TH}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]}>
            {row.map((cell, i) => (
              <td key={i} className={`${TD} ${i === 0 ? "font-semibold" : ""}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Global Trademark Docketing.jpg"
          alt="Global trademark docketing across multiple jurisdictions"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Global Trademark Docketing: Managing Deadlines Across 50+
            Jurisdictions
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 28/10/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className={`text-justify ${P}`}>
            A trademark portfolio is only as strong as the deadlines that keep it
            alive. A missed renewal, a late declaration of use, or an unanswered
            office action can end rights that took years and substantial budget
            to build. At the scale of a multinational brand, with registrations
            in fifty or more jurisdictions, the number of deadlines multiplies
            quickly: filing, priority, examination responses, opposition
            windows, registration, declarations of use, renewals, assignments,
            recordals, and non-use defences. Each country has its own rules, its
            own calendar, and its own consequences for missing a date.
          </p>
          <p className={P}>
            Docketing is the discipline of capturing every such date,
            calculating it correctly, assigning responsibility, and making sure
            the right person acts in time. This guide describes the main
            deadline categories, how they vary between key jurisdictions, how to
            build a docketing system that works across borders, and the controls
            that keep it reliable.
          </p>
          <p className={P}>
            <i>
              Note: This article is general information and not legal advice.
              Deadlines and periods change, so every date must be verified
              against current law and local counsel advice before it is entered
              into a docket.
            </i>
          </p>

          <h2 className={H2}>Why Is Multi-Jurisdiction Docketing So Hard?</h2>
          <ul className={UL}>
            <li>
              <b>Different rules for the same event.</b> Renewal is every ten
              years in most countries, but the starting point, grace period, and
              formalities differ.
            </li>
            <li>
              <b>Use-based obligations.</b> Some countries require proof or
              declarations of use at defined points, others rely on non-use
              cancellation actions, and others do both.
            </li>
            <li>
              <b>Variable response periods.</b> An office action may allow two,
              three, or six months, with or without extension, and in some
              systems the deadline is set individually in the notice.
            </li>
            <li>
              <b>Local-agent intermediaries.</b> Most foreign deadlines pass
              through local counsel, so the real deadline is earlier than the
              statutory one.
            </li>
            <li>
              <b>Calendar differences.</b> Public holidays, office closures,
              time zones, and rules on what happens when a deadline falls on a
              weekend differ from place to place.
            </li>
            <li>
              <b>Madrid and regional systems.</b> International registrations
              and regional rights such as the EU trademark add a second layer of
              rules on top of national ones.
            </li>
            <li>
              <b>Evolving law.</b> Periods change. In recent years several
              offices have shortened or restructured response and renewal
              periods.
            </li>
          </ul>

          <h2 className={H2}>What Are the Core Trademark Deadline Categories?</h2>
          <Table
            head={["Category", "What it covers", "Typical risk if missed"]}
            rows={categories}
          />

          <h2 className={H2}>
            How Do Trademark Deadlines Differ Between Key Jurisdictions?
          </h2>
          <p className={P}>
            The examples below show why one generic rule is insufficient. They
            reflect commonly cited timing as understood at the time of writing,
            and every date must be verified against current law and local counsel
            advice before it is entered into a docket.
          </p>
          <Table
            head={[
              "Jurisdiction",
              "Renewal / maintenance",
              "Use requirements",
              "Other notable timing",
            ]}
            rows={jurisdictions}
          />
          <p className={P}>
            <i>
              Caution: Rules change. Treat the table as a reminder of how much
              variation exists, and rely on current statutes, office notices,
              and local counsel for actual calculations.
            </i>
          </p>

          <h2 className={H2}>
            What Should You Know About Madrid System Deadlines?
          </h2>
          <p className={P}>
            The Madrid Protocol allows one application to designate many
            countries, but it does not remove deadline complexity. It relocates
            it. Docketing teams should capture:
          </p>
          <ul className={UL}>
            <li>
              <b>Dependency period.</b> For five years from the international
              registration date, the registration depends on the basic
              application or registration. If the basic mark fails in that
              period, the international registration can fail with it, subject
              to transformation into national applications.
            </li>
            <li>
              <b>Provisional refusal windows.</b> Designated offices must notify
              refusals within 12 months (or 18 months in some cases), and the
              holder then responds under local procedure, usually through a
              local representative.
            </li>
            <li>
              <b>Subsequent designations and renewals.</b> Renewal of an
              international registration is made through WIPO every ten years,
              but national use-related obligations still apply to individual
              designated countries.
            </li>
            <li>
              <b>Local declarations of use.</b> Designations such as the United
              States require separate maintenance filings tied to the US
              registration date.
            </li>
            <li>
              <b>Recordals at WIPO.</b> Changes of ownership or address should
              be recorded centrally so they apply across designations.
            </li>
          </ul>

          <h2 className={H2}>
            How Do You Design a Docketing System That Scales?
          </h2>

          <h4 className={H4}>1. Use a Single Source of Truth</h4>
          <p className={P}>
            All matters, parties, filings, and deadlines should live in a single
            system. Spreadsheets maintained by individuals are a common cause of
            lost dates, because they lack audit trails, access controls, and
            automatic recalculation when a triggering event changes.
          </p>

          <h4 className={H4}>2. Build on a Rules Engine</h4>
          <p className={P}>
            Rather than enter dates manually, the best systems derive them from
            a rules library. Entering a filing date or registration date
            triggers the calculation of renewal, declaration-of-use, and other
            deadlines, based on the rules for that jurisdiction. When the law
            changes, the rule is updated once and all affected dates are
            recalculated. Ask any vendor how the rules are sourced, who
            maintains them, how often they are reviewed, and how updates are
            communicated.
          </p>

          <h4 className={H4}>3. Create a Layered Reminder Structure</h4>
          <p className={P}>
            A single deadline should generate several dates. A common structure
            is:
          </p>
          <ul className={UL}>
            <li>Statutory deadline: the legal final date</li>
            <li>
              Internal deadline: typically set earlier to allow for review and
              sign-off
            </li>
            <li>
              Foreign-agent deadline: the date by which instructions must reach
              local counsel, which should reflect their processing time and
              time-zone differences
            </li>
            <li>
              Reminders at defined intervals, such as 180, 90, 60, 30, and 7
              days before
            </li>
            <li>
              Escalation to a supervisor or partner if the item is not actioned
              by a set point
            </li>
          </ul>

          <h4 className={H4}>4. Assign Clear Ownership</h4>
          <p className={P}>
            Each deadline should have a named responsible person, a backup, and
            a supervising attorney. Unowned dates are missed dates. Ownership
            should be visible in dashboards and weekly reports and resilient to
            staff changes and holidays.
          </p>

          <h4 className={H4}>5. Handle Holidays and Calendars Correctly</h4>
          <p className={P}>
            The system should recognize local public holidays and each
            jurisdiction&apos;s rule for deadlines falling on non-business days,
            and should allow manual override with documentation. Because rules
            differ, never assume that a weekend deadline automatically rolls to
            Monday.
          </p>

          <h4 className={H4}>6. Integrate Documents and Email</h4>
          <p className={P}>
            Deadlines should be tied to the underlying documents: official
            notices, filing receipts, and instruction emails. Capturing the
            originating notice avoids disputes later about when a period began
            and makes audits faster.
          </p>

          <h2 className={H2}>How Should You Work With Local Counsel?</h2>
          <p className={P}>
            Across fifty or more jurisdictions, local agents are indispensable,
            and their performance is a direct input into portfolio risk. Good
            practice includes:
          </p>
          <ul className={UL}>
            <li>
              Using written instruction protocols, including how and when
              reminders will be sent and what confirmation is required
            </li>
            <li>
              Requiring prompt written acknowledgements of every instruction and
              filing report
            </li>
            <li>
              Reconciling agent-reported deadlines with your own calculations
              and investigating any discrepancy before acting
            </li>
            <li>
              Agreeing service-level expectations for response time, reporting,
              and reasonable fees for routine matters
            </li>
            <li>
              Maintaining a vetted agent panel, reviewed periodically for
              responsiveness and accuracy
            </li>
            <li>
              Keeping a backup agent for key jurisdictions in case of conflict
              or lost contact
            </li>
          </ul>

          <h2 className={H2}>
            Which Controls, Audits, and Metrics Keep a Docket Reliable?
          </h2>
          <p className={P}>
            A docket is a risk-control system, and it should be tested as one.
            Useful practices include:
          </p>
          <ul className={UL}>
            <li>
              Periodic portfolio audits, comparing the docket against official
              registry data to catch errors such as wrong dates, missing marks,
              or unrecorded changes
            </li>
            <li>Dual-entry or peer review of newly entered critical dates</li>
            <li>
              Exception reports listing overdue items, items without an owner,
              and items with changed triggers
            </li>
            <li>
              Near-miss reviews, analyzing why a date was almost missed, to fix
              process weaknesses before a real loss
            </li>
            <li>
              Key metrics: percentage of deadlines completed before the internal
              date, number of late renewals, grace-period usage, average
              response time from agents, and number of discrepancies found in
              audits
            </li>
            <li>
              Business-continuity planning, with backups, access controls, and
              tested recovery procedures
            </li>
          </ul>

          <h2 className={H2}>
            How Can Docketing Support Strategic Renewal Decisions?
          </h2>
          <p className={P}>
            Docketing is not only about avoiding missed dates. It is also an
            opportunity to make deliberate decisions. Ahead of each renewal or
            maintenance deadline, the docket should prompt a review: Is the mark
            still in use in that country? Is it core to the business? Are there
            overlapping registrations? Would narrowing the specification reduce
            the exposure to non-use challenges?
          </p>
          <p className={P}>
            Letting low-value registrations lapse on purpose saves money, while
            letting them lapse by accident does not. Documenting the decision
            matters, so that a lapse is a recorded choice and not an oversight.
          </p>

          <h2 className={H2}>What Does a Sample Annual Docketing Cycle Look Like?</h2>
          <Table head={["Period", "Activities"]} rows={cycle} />

          <h2 className={H2}>Implementation Roadmap</h2>
          <ol className={OL}>
            <li>
              Inventory all marks, jurisdictions, statuses, and agents into one
              dataset, resolving duplicates.
            </li>
            <li>
              Verify status and key dates against official registers, correcting
              errors before migrating.
            </li>
            <li>
              Select a docketing platform or service based on rules coverage,
              audit trails, integrations, and security.
            </li>
            <li>
              Configure rules, reminder cadences, escalation paths, and holiday
              calendars.
            </li>
            <li>
              Train staff and agents on instructions, acknowledgements, and
              responsibilities.
            </li>
            <li>
              Run the new system in parallel with the old for a defined period.
            </li>
            <li>Audit after go-live and at regular intervals, and refine.</li>
          </ol>

          <h2 className={H2}>Why Use a Professional Trademark Docketing Service?</h2>
          <p className={P}>
            Managing fifty or more jurisdictions in-house means maintaining a
            rules library, a vetted agent panel, and an audit process, all while
            the law keeps changing. For many brand owners, working with a
            specialist is the more reliable and cost-effective route.
          </p>
          <p className={P}>
            At EffeMark, we help brand owners keep every registration alive,
            from first filing to renewal. Our{" "}
            <a
              className={LINK}
              href="https://www.effemark.com/trademark-monitoring"
              target="_blank"
              rel="noopener noreferrer"
            >
              trademark monitoring services
            </a>{" "}
            keep a continuous watch on new filings that could conflict with your
            marks, so opposition windows are never missed.
          </p>

          <h2 className={H2}>
            Final Thoughts: Deadlines Are a Process Challenge, Not Just a Legal
            One
          </h2>
          <p className={P}>
            Managing deadlines across fifty or more jurisdictions is a process
            challenge more than a legal one. The rules are knowable, but the
            volume and variation require reliable data, a maintained rules
            engine, layered reminders, clear ownership, disciplined agent
            management, and regular audits. Firms and in-house teams that invest
            in these foundations lose fewer rights, spend less on emergency
            fixes, and gain the ability to make strategic choices about their
            portfolios rather than react to alerts at the last moment.
          </p>
          <p className={P}>
            If you want a global portfolio that stays protected without
            last-minute surprises, visit{" "}
            <a
              className={LINK}
              href="https://www.effemark.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              EffeMark
            </a>{" "}
            and talk to our team.
          </p>
          <p className={P}>
            <b>Follow Us:</b>{" "}
            <a
              className="text-blue-600"
              href="https://www.linkedin.com/company/effemark/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
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
