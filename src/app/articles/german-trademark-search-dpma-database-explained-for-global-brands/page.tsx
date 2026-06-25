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
  title:
    "German Trademark Search: DPMA Database Explained for Global Brands",
  description:
    "Learn how to conduct a comprehensive German trademark search using DPMAregister — exact and similarity searches, Nice Classification, EU and Madrid System clearance, and step-by-step search guidance for global brands.",
  keywords: [
    "German Trademark Search",
    "DPMA Database",
    "DPMAregister",
    "Germany Trademark Search",
    "Trademark Search Germany",
  ],
};

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S1_German Trademark Search.jpg"
          alt="German Trademark Search: DPMA Database Explained for Global Brands"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            German Trademark Search: DPMA Database Explained for Global Brands
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 25/06/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Introduction
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Germany is not only the largest economy in Europe but also one of the
            world&apos;s most influential commercial markets. For global brands
            planning to enter the German market, launch new products, establish
            subsidiaries, or expand across the European Union, trademark
            protection is a critical business priority. Before investing in
            branding, marketing campaigns, packaging, websites, or product
            launches, businesses must ensure that their proposed trademarks are
            available for use and registration. A trademark conflict discovered
            after launch can lead to costly legal disputes, rebranding expenses,
            product recalls, and reputational damage. This is where the German
            Patent and Trade Mark Office (DPMA) and its trademark database become
            essential tools. The DPMA maintains Germany&apos;s official trademark
            records and provides access to trademark information through its
            online search platform, DPMAregister. Understanding how to search,
            interpret, and analyze data within this database is crucial for
            companies seeking to protect their intellectual property rights in
            Germany. This comprehensive guide explains the DPMA database, how
            trademark searches work, key search strategies, common mistakes to
            avoid, and why German trademark clearance is an indispensable step
            for international businesses.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Understanding the DPMA: Germany&apos;s Trademark Authority
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The Deutsches Patent- und Markenamt (DPMA), or German Patent and
            Trade Mark Office, is the central authority responsible for
            administering intellectual property rights in Germany.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Headquartered in Munich, with additional offices in Berlin and Jena,
            the DPMA oversees:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark registrations</li>
            <li>Patent protection</li>
            <li>Utility models</li>
            <li>Industrial designs</li>
            <li>Geographical indications</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            As one of Europe&apos;s busiest intellectual property offices, the
            DPMA processes tens of thousands of trademark applications annually
            from both domestic and international applicants.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Germany&apos;s robust trademark system is recognized globally for its
            reliability, transparency, and strong enforcement mechanisms. As a
            result, trademark registrations in Germany often form a core component
            of international IP portfolios.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why German Trademark Searches Matter for Global Brands
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Many businesses mistakenly assume that trademark registration is
            merely an administrative step completed after selecting a brand name.
            In reality, trademark clearance should occur before any significant
            investment is made in branding.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A German trademark search serves several strategic purposes:
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Preventing Trademark Infringement
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The primary objective is identifying earlier rights that may block
            registration or expose a company to infringement claims.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even unintentional infringement can result in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Cease-and-desist demands</li>
            <li>Litigation</li>
            <li>Injunctions</li>
            <li>Financial damages</li>
            <li>Forced rebranding</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Reducing Application Refusals
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Although the DPMA examines trademarks for absolute grounds of refusal,
            owners of earlier trademarks may oppose conflicting applications
            after publication. A thorough search significantly reduces the risk
            of future opposition proceedings.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Protecting Marketing Investments
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Businesses often invest substantial resources in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Logo design</li>
            <li>Packaging</li>
            <li>Advertising campaigns</li>
            <li>Website development</li>
            <li>Product launches</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Discovering trademark conflicts after launch can make these
            investments worthless.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Supporting International Expansion
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Germany often serves as a gateway to the broader European market.
            Identifying trademark issues early enables companies to develop
            scalable branding strategies across multiple jurisdictions.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Germany&apos;s First-to-File Trademark System
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            One of the most important concepts for international businesses to
            understand is that Germany follows a first-to-file trademark system.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Under this principle:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Trademark rights are generally awarded to the first applicant who
              files a valid trademark application.
            </li>
            <li>Earlier registrations enjoy stronger legal protection.</li>
            <li>
              Businesses may lose rights even if they used a trademark elsewhere
              before entering Germany.
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For global brands, this creates significant risk if trademark searches
            are neglected. A company may discover that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>A local German business already owns a similar mark.</li>
            <li>A distributor registered the brand name independently.</li>
            <li>A competitor filed an application before market entry.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Comprehensive searching helps identify these issues before they become
            expensive legal challenges.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What Is DPMAregister?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            DPMAregister is the official online trademark database operated by the
            German Patent and Trade Mark Office.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            It provides public access to information regarding:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>German national trademarks</li>
            <li>Pending trademark applications</li>
            <li>Registered trademarks</li>
            <li>Trademark ownership records</li>
            <li>Legal status updates</li>
            <li>
              International trademark registrations extending protection to
              Germany
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The database is widely used by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark attorneys</li>
            <li>Corporate legal departments</li>
            <li>Brand protection specialists</li>
            <li>Investors</li>
            <li>Due diligence teams</li>
            <li>Startups and entrepreneurs</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Because the database is maintained directly by the DPMA, it serves as
            the most authoritative source of German trademark information.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Information Available in the DPMA Database
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark record in DPMAregister typically contains extensive
            information that can assist businesses in evaluating potential risks.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Trademark Details
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Users can review:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark name</li>
            <li>Registration number</li>
            <li>Filing date</li>
            <li>Registration date</li>
            <li>Publication date</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These details establish the priority rights associated with a
            trademark.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Owner Information
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The database identifies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark proprietors</li>
            <li>Corporate owners</li>
            <li>Individual applicants</li>
            <li>Ownership changes</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This information is particularly valuable for competitor analysis and
            corporate due diligence.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Goods and Services Coverage
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Every trademark is linked to specific products and services under the
            Nice Classification system. Users can identify:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Protected goods</li>
            <li>Service categories</li>
            <li>Scope of protection</li>
            <li>Potential market overlaps</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Current Legal Status
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The database indicates whether a trademark is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Pending</li>
            <li>Registered</li>
            <li>Opposed</li>
            <li>Cancelled</li>
            <li>Expired</li>
            <li>Surrendered</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Legal status information is essential when assessing potential
            conflicts.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            How to Conduct a German Trademark Search
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A successful trademark search requires more than typing a proposed
            brand name into a search box. Experienced trademark professionals
            typically follow a multi-layered search methodology.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 1: Exact Match Search
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Begin with an exact search of the proposed trademark.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">For example:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>TECHNOVA</li>
            <li>GreenPulse</li>
            <li>UrbanNest</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This search identifies identical registrations and pending
            applications. However, stopping here is a common mistake. Trademark
            conflicts often arise from similar rather than identical marks.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 2: Similarity Searches
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            German trademark law focuses heavily on the likelihood of consumer
            confusion. Therefore, businesses should also search:
          </p>

          <h4 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold">
            Orthographic Variations
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Examples include:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>ColorTech vs. ColourTech</li>
            <li>MediCore vs. MediKor</li>
          </ul>

          <h4 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold">
            Phonetic Variations
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Examples include:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Xpress vs. Express</li>
            <li>KwikPay vs. QuickPay</li>
          </ul>

          <h4 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold">
            Abbreviations and Acronyms
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Examples include:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Global Technologies Ltd.</li>
            <li>GTL</li>
          </ul>

          <h4 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold">
            Plural and Singular Forms
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Examples include:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Vision</li>
            <li>Visions</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Similarity searching is often the most critical aspect of trademark
            clearance.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 3: Search Relevant Nice Classes
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The Nice Classification system divides trademarks into 45
            international classes.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Examples include:
          </p>
          <div className="overflow-x-auto">
            <table className="border-[1px] w-full text-[12px] sm:text-[14px] md:text-[16px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left border-[1px]">Class</th>
                  <th className="p-2 text-left border-[1px]">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">9</td>
                  <td className="p-2 border-[1px]">
                    Software, mobile applications, electronics
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">25</td>
                  <td className="p-2 border-[1px]">
                    Clothing, footwear, headwear
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">35</td>
                  <td className="p-2 border-[1px]">
                    Advertising, retail services, business consulting
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">42</td>
                  <td className="p-2 border-[1px]">
                    Software development, IT services, technology consulting
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Conflicts are most likely to arise within related classes.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 4: Analyze Trademark Risk
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Finding a similar trademark does not automatically mean registration
            is impossible. A proper assessment considers:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Visual Similarity:</strong> How similar do the marks appear?
            </li>
            <li>
              <strong>Phonetic Similarity:</strong> How similar do they sound when
              spoken?
            </li>
            <li>
              <strong>Conceptual Similarity:</strong> Do they convey similar
              meanings?
            </li>
            <li>
              <strong>Market Overlap:</strong> Do the businesses operate in
              related industries?
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            German trademark authorities and courts often evaluate all these
            factors together.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            International Trademarks and Germany
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Global brands frequently overlook a critical aspect of trademark
            searching: international registrations. Through the Madrid System
            administered by WIPO, trademark owners can extend protection into
            Germany without filing a national German application.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            As a result, businesses must consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>German national trademarks</li>
            <li>EU trademarks</li>
            <li>International registrations designating Germany</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Failure to review all three categories may result in incomplete
            clearance results.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Common Mistakes Businesses Make
          </h2>
          <ul className="list-disc list-inside space-y-4 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Searching Only Exact Matches:</strong> Many trademark
              conflicts involve similar names rather than identical ones.
            </li>
            <li>
              <strong>Ignoring EU Trademark Rights:</strong> A European Union
              Trademark (EUTM) automatically covers Germany. Therefore, searching
              only the DPMA database may be insufficient.
            </li>
            <li>
              <strong>Overlooking Industry-Specific Risks:</strong> A trademark
              may coexist in one sector but create conflicts in another.
            </li>
            <li>
              <strong>Failing to Search Before Launch:</strong> Many businesses
              conduct trademark searches after investing heavily in branding,
              significantly increasing financial exposure.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            DPMA Search vs. Comprehensive Trademark Clearance
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The DPMA database is an excellent starting point, but professional
            trademark clearance typically goes much further.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Advanced clearance searches may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Similarity algorithms</li>
            <li>Phonetic analysis</li>
            <li>EU trademark databases</li>
            <li>WIPO international registrations</li>
            <li>Common law trademark reviews</li>
            <li>Domain name investigations</li>
            <li>Company name searches</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark attorneys then provide legal opinions regarding
            registrability and infringement risk. For valuable brands,
            professional clearance is often a prudent investment.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Germany Is a Strategic Trademark Jurisdiction
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Germany occupies a unique position in global intellectual property
            strategy.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Benefits include:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Access to Europe&apos;s Largest Economy:</strong> Germany
              has one of the world&apos;s largest consumer markets and industrial
              sectors.
            </li>
            <li>
              <strong>Strong Legal Enforcement:</strong> German courts are known
              for efficient trademark enforcement and effective remedies.
            </li>
            <li>
              <strong>Gateway to EU Expansion:</strong> Germany often serves as
              the first European market for international companies.
            </li>
            <li>
              <strong>High Commercial Value:</strong> A registered German
              trademark can become a significant corporate asset, increasing
              business valuation and investor confidence.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Best Practices for Global Brands
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before entering the German market, businesses should:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Conduct trademark searches at the earliest planning stage.</li>
            <li>Search both exact and similar trademarks.</li>
            <li>Review relevant Nice Classification categories.</li>
            <li>
              Analyze German, EU, and international trademark databases.
            </li>
            <li>Monitor new trademark filings regularly.</li>
            <li>Secure trademark registrations before product launch.</li>
            <li>
              Consult experienced trademark professionals for legal assessment.
            </li>
          </ol>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These practices significantly reduce legal risk while strengthening
            long-term brand protection.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A German trademark search is far more than a routine administrative
            exercise—it is a strategic risk-management tool that can determine
            the success or failure of a brand&apos;s market entry strategy. The
            DPMAregister database provides businesses with direct access to
            Germany&apos;s official trademark records, enabling them to identify
            potential conflicts, evaluate trademark availability, and make
            informed intellectual property decisions. However, effective
            trademark clearance requires more than locating identical marks; it
            demands a comprehensive assessment of similar trademarks, related
            industries, international registrations, and potential legal risks.
            For startups, multinational corporations, e-commerce sellers,
            technology companies, and consumer brands alike, investing time in a
            thorough German trademark search before filing can prevent costly
            disputes, safeguard brand equity, and establish a strong foundation
            for long-term growth in Germany and across Europe.
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
