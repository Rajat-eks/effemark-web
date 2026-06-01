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
  title: "Free vs. Professional Services: Trademark Availability Check",
  description:
    "Choosing between free trademark search tools and professional clearance services? Compare coverage, costs, risks, and when each approach is right for your brand.",
  keywords: [
    "trademark availability check",
    "trademark clearance search",
    "free trademark search",
    "professional trademark search",
    "USPTO TESS",
    "common law trademark search",
    "trademark clearance",
  ],
};

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Free vs Professional Services Trademark Availability Check.jpg"
          alt="Free vs Professional Trademark Availability Check"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Free vs. Professional Services: Trademark Availability Check
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 01/06/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Introduction
          </h2>
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            Choosing a business name, brand or logo is an exciting milestone —
            but before you print business cards, launch a website, or file a
            trademark application, you need to answer one critical question: Is
            this trademark actually available?
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark availability check (also called a trademark clearance
            search) determines whether your proposed mark conflicts with
            existing registered or unregistered trademarks. Get it wrong and you
            risk receiving a cease-and-desist letter, losing your domain,
            rebranding mid-launch, or facing a costly infringement lawsuit.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Today, business owners face a fundamental choice: conduct the search
            themselves using free online tools, or hire a professional trademark
            attorney or specialized search firm. Each approach has genuine merit
            — and significant limitations. This article breaks down exactly what
            you get and what you risk, with each path.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What Is a Trademark Availability Check?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark availability check is the process of searching existing
            marks to determine whether your proposed trademark is likely to:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>Clear registration</b> — be accepted by a trademark office
              without conflict.
            </li>
            <li>
              <b>Avoid infringement</b> — not infringe upon the rights of an
              existing trademark owner.
            </li>
          </ol>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These are two distinct but related goals. A mark can sometimes be
            registrable yet still infringe, or vice versa. A thorough clearance
            search addresses both.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The search must evaluate not just identical marks, but also
            confusingly similar marks — those that sound alike (phonetic
            similarity), look alike (visual similarity), or carry the same
            commercial meaning (conceptual similarity) within the same or
            related industries.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Free Trademark Search Tools
          </h2>
          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            What&apos;s Available
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Several free resources exist for conducting a preliminary trademark
            search:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>USPTO TESS (Trademark Electronic Search System):</b> The United
              States Patent and Trademark Office offers TESS, a publicly
              accessible database of all federally registered and pending
              trademarks. Users can search by word, design code, owner name, or
              serial number.
            </li>
            <li>
              <b>EUIPO eSearch Plus:</b> The European Union Intellectual
              Property Office provides a free online tool covering EU trademark
              registrations and applications across all 27 member states.
            </li>
            <li>
              <b>WIPO Global Brand Database:</b> The World Intellectual Property
              Organization maintains a consolidated database covering trademarks
              from over 60 countries and international registrations under the
              Madrid System — useful for businesses with international
              ambitions.
            </li>
            <li>
              <b>National Trademark Databases:</b> Most national IP offices (IP
              India&apos;s IPINDIA portal, UKIPO&apos;s Trade Mark Search, CIPO
              in Canada, IP Australia, etc.) offer free public search tools for
              their respective registers.
            </li>
            <li>
              <b>Google and Domain Searches:</b> A quick Google search and
              domain availability check can surface common law users — businesses
              using a mark in commerce without registering it — who still hold
              enforceable rights in many jurisdictions.
            </li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            What Free Searches Can Reveal
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Exact word matches in federal/national trademark databases</li>
            <li>
              Pending applications for identical marks in the same goods/services
              class
            </li>
            <li>
              Registered design marks with similar visual elements (via design
              code searches)
            </li>
            <li>Basic owner information and registration status</li>
            <li>
              Obvious conflicts that a reasonably careful search would uncover
            </li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Limitations of Free Tools
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Free searches, however well-intentioned, carry significant structural
            limitations:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>No Phonetic or Similarity Analysis:</b> TESS and most free
              databases return results for exact terms or basic wildcard
              patterns. They do not automatically flag marks that sound like
              yours (e.g., &quot;Kwik&quot; vs. &quot;Quick&quot;), look like
              yours in stylized form, or carry the same meaning in another
              language. Trademark examiners and courts evaluate these dimensions
              routinely — and so should you.
            </li>
            <li>
              <b>No Common Law Coverage:</b> A trademark does not need to be
              registered to be legally protected. In the United States and many
              common law jurisdictions, unregistered marks that have been used
              in commerce may have priority rights over later-filed applications.
              Free database searches reveal nothing about these unregistered
              marks. Finding them requires searches of business directories, DBA
              (Doing Business As) filings, domain registrations, industry
              databases and the internet at large.
            </li>
            <li>
              <b>No Cross-Class Analysis:</b> Trademark classes divide goods and
              services into 45 categories under the Nice Classification system.
              A free search that returns no conflicts in Class 25 (clothing)
              might miss a famous mark in Class 35 (retail services) that an
              examiner would still consider confusingly similar under the
              doctrine of related goods. Famous marks receive even broader
              protection that crosses class boundaries entirely.
            </li>
            <li>
              <b>No International Scope:</b> If you plan to sell internationally,
              a USPTO search alone is dangerously incomplete. Conflicts existing
              in the EU, UK, Australia, or Canada could block your expansion or
              expose you to foreign infringement claims.
            </li>
            <li>
              <b>User Error and Misinterpretation:</b> Trademark law is nuanced.
              A search result showing &quot;no identical marks&quot; is easily —
              and commonly — misread as &quot;the mark is clear.&quot; In
              reality, it simply means no identical marks were found in that
              database. Determining whether any of the results actually conflict
              requires legal judgment.
            </li>
            <li>
              <b>No State Trademark Coverage:</b> In the U.S., states maintain
              their own trademark registers. A federally registered mark is
              superior, but state registrations can complicate use in specific
              geographic markets, particularly for local or regional businesses.
            </li>
          </ol>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Professional Trademark Availability Check Services
          </h2>
          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            What Professionals Offer
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Professional trademark clearance is provided by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Trademark attorneys (most comprehensive — combines search with
              legal analysis)
            </li>
            <li>
              Trademark search firms (companies such as CompuMark, Thomson
              Reuters IP Solutions and Corsearch, which provide detailed research
              reports)
            </li>
            <li>
              IP service platforms (online platforms like Trademarkia, LegalZoom
              and Trademark Engine offer assisted or attorney-reviewed searches
              at varying price points)
            </li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Components of a Professional Search
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A comprehensive professional trademark clearance search typically
            includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>Full Knockout Search:</b> A preliminary automated search to
              identify obvious conflicts before investing in a full search. This
              is often the first filter.
            </li>
            <li>
              <b>Comprehensive Federal/National Register Search:</b> A thorough
              search of the primary trademark register, using phonetic
              algorithms, spelling variations, design codes and translation
              equivalents — not just exact word matches.
            </li>
            <li>
              <b>Common Law Search:</b> Searches of business name registrations,
              DBA filings, internet sources, social media handles, domain name
              registrations, industry directories, trade publications and other
              non-registered sources.
            </li>
            <li>
              <b>State Register Search (U.S.):</b> Review of all 50 state
              trademark registers for potential conflicts.
            </li>
            <li>
              <b>International Register Search (for cross-border filings):</b>{" "}
              Coverage of relevant foreign registers and the Madrid International
              Register, tailored to the markets where you intend to operate.
            </li>
            <li>
              <b>Legal Opinion Letter:</b> The most critical deliverable — a
              written opinion from a trademark attorney assessing the risk level
              of adopting the mark, citing the specific conflicts found (if any)
              and recommending whether to proceed, modify or abandon the mark.
            </li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            What a Professional Search Catches That Free Tools Miss
          </h3>
          <div className="overflow-x-auto">
            <table className="border-[1px] w-full text-[12px] sm:text-[14px] md:text-[16px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left border-[1px]">Search Element</th>
                  <th className="p-2 text-left border-[1px]">Free Tools</th>
                  <th className="p-2 text-left border-[1px]">
                    Professional Search
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Exact word matches</td>
                  <td className="p-2 border-[1px]">Yes</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Phonetically similar marks</td>
                  <td className="p-2 border-[1px]">No</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">
                    Visually similar design marks
                  </td>
                  <td className="p-2 border-[1px]">Limited</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">
                    Common law / unregistered marks
                  </td>
                  <td className="p-2 border-[1px]">No</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">State trademark registers</td>
                  <td className="p-2 border-[1px]">No</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">
                    Translation / foreign equivalents
                  </td>
                  <td className="p-2 border-[1px]">No</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">International registers</td>
                  <td className="p-2 border-[1px]">Partial</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">
                    Cross-class related goods analysis
                  </td>
                  <td className="p-2 border-[1px]">No</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Legal risk opinion</td>
                  <td className="p-2 border-[1px]">No</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">
                    Famous mark / dilution analysis
                  </td>
                  <td className="p-2 border-[1px]">No</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            The Real Cost of Getting It Wrong
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Many business owners opt for free searches to save money — but the
            calculus changes dramatically when a conflict is discovered after the
            brand has launched.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>Rebranding Costs:</b> A forced rebrand after go-live involves
              new logo design, website redesign, updated marketing materials,
              revised packaging, domain migration and social media handle
              changes. For even a small business, this can easily reach
              $10,000–$50,000 or more.
            </li>
            <li>
              <b>Legal Defense Costs:</b> If a trademark owner sends a
              cease-and-desist — or worse, files an infringement lawsuit — legal
              defense fees in the U.S. can reach $50,000–$500,000 depending on
              the complexity and whether the case goes to trial.
            </li>
            <li>
              <b>Lost Application Fees:</b> USPTO filing fees range from
              $250–$350 per class per application. If an application is refused
              due to a conflict a professional search would have identified,
              those fees are non-refundable.
            </li>
            <li>
              <b>Reputational Damage:</b> A public cease-and-desist or lawsuit
              damages brand credibility and customer trust, particularly for
              newer companies.
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            By contrast, a professional clearance search and attorney opinion
            typically costs $500–$2,000 for a U.S.-only search — a fraction of
            what a conflict discovered post-launch can cost.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            When Free Tools Are Appropriate
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Despite their limitations, free trademark searches have a legitimate
            place in the process:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Very early brainstorming — quickly ruling out names that are
              obviously taken before investing further thought.
            </li>
            <li>
              Budget-constrained preliminary screening — a knockout check before
              committing to a name.
            </li>
            <li>
              Monitoring your own marks — checking whether new applications have
              been filed that might conflict with your existing registrations.
            </li>
            <li>
              Supplementing professional searches — verifying specific results or
              exploring related marks that a professional report identified.
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The key insight: free tools are a starting point, not an endpoint.
            They can tell you a name is obviously unavailable. They cannot
            reliably tell you it is available.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            When Professional Services Are Essential
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A professional trademark clearance search is strongly recommended —
            and often essential — in the following situations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Before filing a trademark application — to avoid wasted filing fees
              and prosecution delays.
            </li>
            <li>
              Before significant brand investment — website builds, product
              packaging, advertising campaigns.
            </li>
            <li>
              Expanding into new product categories — where related goods and
              cross-class conflicts become relevant.
            </li>
            <li>
              Entering international markets — where local conflicts may not
              appear in any free database.
            </li>
            <li>
              High-value or competitive industries — technology, fashion, food and
              beverage, pharmaceuticals and entertainment are especially
              trademark-dense.
            </li>
            <li>
              Acquiring a business or brand — due diligence must include
              clearance of all marks being acquired.
            </li>
            <li>
              When a similar mark already exists — professional analysis
              determines whether the similarity rises to the level of legal
              conflict.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Comparing the Two Approaches: A Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="border-[1px] w-full text-[12px] sm:text-[14px] md:text-[16px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left border-[1px]">Factor</th>
                  <th className="p-2 text-left border-[1px]">Free DIY Search</th>
                  <th className="p-2 text-left border-[1px]">
                    Professional Search
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Cost</td>
                  <td className="p-2 border-[1px]">Free</td>
                  <td className="p-2 border-[1px]">$500–$2,000+</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Speed</td>
                  <td className="p-2 border-[1px]">Immediate</td>
                  <td className="p-2 border-[1px]">3–7 business days</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Depth of coverage</td>
                  <td className="p-2 border-[1px]">Narrow</td>
                  <td className="p-2 border-[1px]">Comprehensive</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Common law coverage</td>
                  <td className="p-2 border-[1px]">None</td>
                  <td className="p-2 border-[1px]">Included</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">International coverage</td>
                  <td className="p-2 border-[1px]">Limited</td>
                  <td className="p-2 border-[1px]">Tailored to needs</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Legal analysis</td>
                  <td className="p-2 border-[1px]">None</td>
                  <td className="p-2 border-[1px]">Attorney opinion</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Risk identification</td>
                  <td className="p-2 border-[1px]">Basic</td>
                  <td className="p-2 border-[1px]">Thorough</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">
                    Suitable for final go/no-go decision
                  </td>
                  <td className="p-2 border-[1px]">No</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Recommended before filing</td>
                  <td className="p-2 border-[1px]">No</td>
                  <td className="p-2 border-[1px]">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Practical Recommendations
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>For founders and startups:</b> Use free tools to eliminate
              obvious conflicts during name ideation. Once you have narrowed down
              to one or two serious candidates — before you build a brand around
              them — invest in a professional search. The cost is small relative
              to the investment you are about to make in brand development.
            </li>
            <li>
              <b>For established businesses launching new product lines or
              brands:</b> Always commission a professional search and legal
              opinion. Brand extensions and sub-brands carry the same legal risk
              as original marks and the stakes are higher given existing business
              continuity.
            </li>
            <li>
              <b>For e-commerce and digital businesses:</b> Don&apos;t neglect
              common law searches. Online commerce has produced thousands of
              unregistered brand names with substantial consumer recognition and
              legal protection. A USPTO search won&apos;t find them.
            </li>
            <li>
              <b>For international expansion:</b> Engage a trademark attorney
              with international IP experience or a firm capable of coordinating
              searches in all target markets simultaneously. Markets differ
              significantly in how they evaluate similarity, what constitutes use
              and how aggressively they protect unregistered marks.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Way Forward
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Free trademark search tools are genuinely valuable for a first pass —
            they are fast, cost nothing and can immediately identify the most
            obvious conflicts. But they are structurally incapable of providing
            the comprehensive clearance analysis that protects your brand
            investment.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Professional trademark availability checks go far beyond what any free
            database offers: phonetic analysis, common law searches, cross-class
            evaluation, international coverage and — most importantly — a legal
            opinion that tells you whether the risk of adoption is low, moderate,
            or high.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The decision of whether to use free or professional services
            ultimately comes down to what is at stake. If you are testing a
            throwaway concept, a free search is adequate. If you are building a
            brand, filing a trademark application, or making any significant
            business investment tied to a name or mark, professional clearance
            is not an optional expense — it is the cost of doing business
            responsibly.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <Link
              href="/product/us-trademark-search-advanced-ai-full-search"
              className="text-blue-600 underline hover:no-underline"
            >
              US Trademark Search - Advanced AI Full Search
            </Link>
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <b>Follow Us: </b>
            <a
              href="https://www.linkedin.com/company/effemark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
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
