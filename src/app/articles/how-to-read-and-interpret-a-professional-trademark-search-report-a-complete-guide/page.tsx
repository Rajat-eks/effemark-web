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
    "How to Read and Interpret a Professional Trademark Search Report: A Complete Guide",
  description:
    "Learn how to read and interpret a professional trademark search report—including similarity analysis, classification, status, risk ratings, and limitations—before filing or launching a brand.",
  keywords: [
    "Trademark Search Report",
    "How to Read Trademark Search Report",
    "Professional Trademark Search",
    "Trademark Risk Assessment",
  ],
};

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S1_How to Read and Interpret a Professional Trademark Search Report.jpg"
          alt="How to Read and Interpret a Professional Trademark Search Report: A Complete Guide"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            How to Read and Interpret a Professional Trademark Search Report: A
            Complete Guide
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 24/07/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Introduction
          </h2>
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            A professional trademark search report is one of the most important
            documents created before filing a trademark application, launching a
            new brand, expanding into new markets, or investing in a business
            identity. A trademark search report provides a detailed analysis of
            existing trademark records, potential conflicts, legal risks, and
            opportunities for registration. However, for many business owners,
            entrepreneurs, and even first-time trademark applicants,
            understanding the information contained in a professional search
            report can be challenging.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark search report is not simply a list of similar trademarks.
            It is a strategic legal document that evaluates whether a proposed
            trademark is available for use and registration. It examines
            existing trademarks, pending applications, abandoned marks, expired
            registrations, common-law uses, domain names, company names, and
            other sources that may affect the strength and protectability of a
            brand.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Learning how to properly read and interpret a trademark search
            report allows businesses to make informed decisions before
            committing significant resources to branding, marketing, packaging,
            product development, and international expansion.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What Is a Professional Trademark Search Report?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A professional trademark search report is a comprehensive document
            prepared after conducting a detailed trademark investigation. It is
            usually created by trademark attorneys, intellectual property
            professionals, or specialized trademark search firms using
            professional databases and legal research methods.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The purpose of the report is to identify trademarks that may create
            obstacles for registration or commercial use. It helps determine
            whether a proposed trademark is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Available for registration.</li>
            <li>Likely to face objections from a trademark office.</li>
            <li>
              Vulnerable to opposition from existing trademark owners.
            </li>
            <li>Similar to existing brands in the same industry.</li>
            <li>
              Suitable for expansion into additional countries or markets.
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A professional trademark search goes beyond an exact-name search. It
            examines similarities in spelling, pronunciation, meaning,
            appearance, and commercial impression because trademark conflicts
            can arise even when two marks are not identical.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Understanding a Trademark Search Report Is Important
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark represents valuable intellectual property. Before
            investing in a brand name, companies need confidence that the mark
            can be legally protected and commercially used.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A properly interpreted trademark search report helps businesses
            avoid:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Filing applications that are likely to be refused.</li>
            <li>Rebranding after market launch.</li>
            <li>Legal disputes with existing trademark owners.</li>
            <li>
              Financial losses from changing packaging and marketing materials.
            </li>
            <li>Expansion problems in international markets.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For startups and established companies alike, a trademark search
            report provides valuable risk assessment before making important
            branding decisions.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Understanding the Structure of a Trademark Search Report
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Although the format may vary depending on the service provider and
            jurisdiction, most professional trademark search reports contain
            several key sections. Understanding each section helps readers
            evaluate the findings accurately.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A typical trademark search report may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark search summary.</li>
            <li>Applicant&apos;s proposed trademark details.</li>
            <li>Similar trademark findings.</li>
            <li>Classification analysis.</li>
            <li>Status information.</li>
            <li>Similarity evaluation.</li>
            <li>Risk assessment.</li>
            <li>Legal recommendations.</li>
            <li>Registration strategy.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Each section provides different information that contributes to the
            overall trademark availability analysis.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            1. Trademark Search Summary
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The search summary provides an overview of the investigation
            conducted. It usually identifies the trademark searched, the
            countries or databases covered, the search date, and the scope of
            the research.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This section helps the reader understand what information was
            reviewed and what limitations may exist. A trademark search
            conducted only in one country may not reveal conflicts in other
            jurisdictions, especially for businesses planning international
            expansion.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A comprehensive international trademark search may examine:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>National trademark offices.</li>
            <li>Regional trademark databases.</li>
            <li>International trademark registrations.</li>
            <li>Business directories.</li>
            <li>Domain name databases.</li>
            <li>Online marketplaces.</li>
            <li>Social media platforms.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The broader the search scope, the more reliable the risk assessment
            becomes.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            2. Understanding the Proposed Trademark Details
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before reviewing conflicting marks, it is important to understand
            how the proposed trademark itself has been analyzed.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark search report usually identifies:
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Trademark Name
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is the exact word, phrase, or combination of words being
            searched. The search may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Exact matches.</li>
            <li>Phonetically similar marks.</li>
            <li>Alternative spellings.</li>
            <li>Translations.</li>
            <li>Abbreviations.</li>
            <li>Similar meanings.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example, two trademarks may create a conflict even if they are
            spelled differently but sound similar when spoken.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Trademark Type
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The report may specify whether the trademark is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Word mark.</li>
            <li>Logo mark.</li>
            <li>Device mark.</li>
            <li>Combined word and logo mark.</li>
            <li>Slogan.</li>
            <li>Shape mark.</li>
            <li>Non-traditional trademark.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Different types of trademarks may require different search
            approaches.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Goods and Services Classification
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark rights are generally linked to specific goods and
            services. Professional search reports analyze trademark classes
            based on the Nice Classification system.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Class 9 may cover software and electronic products.</li>
            <li>Class 25 may cover clothing and footwear.</li>
            <li>Class 35 may cover business and retail services.</li>
            <li>Class 41 may cover education and entertainment services.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A similar trademark in an unrelated industry may create little or no
            risk, while a similar trademark in the same market may create
            significant concerns.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            3. Reviewing Similar Trademark Results
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The most important section of a trademark search report is usually
            the list of potentially conflicting trademarks.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            However, not every similar trademark creates the same level of risk.
            Professional reports generally evaluate several factors.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Exact Similarity
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            An exact match occurs when an existing trademark is identical or
            nearly identical to the proposed mark.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Exact matches usually represent the highest level of concern,
            particularly when they cover identical or related goods and
            services.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Visual Similarity
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Visual similarity considers how trademarks appear when written or
            displayed.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Factors include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Similar spelling.</li>
            <li>Similar arrangement of letters.</li>
            <li>Similar logo design.</li>
            <li>Similar overall appearance.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Two marks may create confusion even if they contain minor
            differences.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Phonetic Similarity
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark offices often consider how marks sound when spoken.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example, trademarks with different spellings may still create
            conflict if consumers are likely to pronounce them similarly.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Conceptual Similarity
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Conceptual similarity examines whether two trademarks create the
            same idea, meaning, or commercial impression.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Different words may conflict if they communicate the same concept to
            consumers.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Overall Commercial Impression
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The most important consideration is often the overall impression
            created by the trademarks. Authorities generally evaluate whether
            consumers may mistakenly believe that two brands come from the same
            company or have a business relationship.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            4. Understanding Trademark Status Information
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark search report usually includes the legal status of each
            identified mark.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Understanding status information is essential because not every
            trademark found during a search creates the same level of risk.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Common trademark statuses include:
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Registered Trademark
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A registered trademark has been officially granted protection by a
            trademark office. These marks generally represent stronger potential
            conflicts.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Pending Trademark Application
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A pending application has not yet received final approval but may
            still create risks. If registered, it could become a significant
            obstacle.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Abandoned Application
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            An abandoned application may have limited risk depending on the
            circumstances. However, previous applicants may still have
            common-law rights in certain jurisdictions.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Expired Trademark
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            An expired trademark may no longer have active registration
            protection, but further investigation may be required to determine
            whether rights continue through use.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Cancelled or Removed Trademark
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Cancelled marks generally no longer provide active registration
            rights, but historical use may still be relevant.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            5. Understanding Trademark Classification Analysis
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark conflicts are not determined by name similarity alone. The
            relationship between goods and services is equally important.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A professional trademark search report evaluates whether the
            existing trademark and proposed trademark operate in related
            commercial areas.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example, the same word may potentially be registered by
            different businesses if they operate in completely unrelated
            industries. However, businesses selling similar products or services
            may face a higher likelihood of confusion.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark professionals analyze:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Identical goods or services.</li>
            <li>Related industries.</li>
            <li>Consumer overlap.</li>
            <li>Distribution channels.</li>
            <li>Market competition.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This classification analysis is one of the most important parts of
            interpreting trademark risk.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            6. Reading the Risk Assessment Section
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Most professional trademark reports include a risk rating or legal
            opinion. This section summarizes the overall likelihood of
            successful registration and possible conflicts.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Common risk categories include:
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Low Risk
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A low-risk assessment generally indicates that few significant
            conflicts were identified. Registration may have a reasonable chance
            of success, although no trademark approval can ever be guaranteed.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Medium Risk
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A medium-risk assessment suggests that some potentially conflicting
            trademarks exist. Additional analysis may be necessary before
            proceeding.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            High Risk
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A high-risk assessment indicates that significant obstacles may
            exist, including similar registered trademarks, active competitors,
            or likely objections from trademark authorities.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Risk ratings are professional opinions based on available
            information and should be interpreted together with the detailed
            findings.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            7. Understanding Search Limitations
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even the most comprehensive trademark search cannot guarantee
            absolute protection. Trademark rights can arise from various
            sources, including unregistered use, regional rights, and market
            reputation.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A professional report may include limitations such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Database limitations.</li>
            <li>Search date limitations.</li>
            <li>Lack of access to certain local records.</li>
            <li>Unknown common-law uses.</li>
            <li>Future trademark filings.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Understanding these limitations prevents unrealistic expectations.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            8. Common Mistakes When Reading a Trademark Search Report
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Many applicants misunderstand trademark search results because they
            focus only on whether an identical name exists.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Common mistakes include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Assuming a similar trademark automatically means rejection.
            </li>
            <li>Ignoring trademark classes.</li>
            <li>Focusing only on registered marks.</li>
            <li>Ignoring pending applications.</li>
            <li>Not considering international markets.</li>
            <li>Treating a low-risk opinion as a guarantee.</li>
            <li>Failing to review business expansion plans.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark analysis requires evaluating the complete commercial and
            legal situation.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            9. How Businesses Should Use a Trademark Search Report
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark search report should be viewed as a strategic business
            tool rather than merely a legal document.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Based on the findings, businesses may decide to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Proceed with trademark filing.</li>
            <li>Modify the trademark.</li>
            <li>Narrow the goods and services description.</li>
            <li>Negotiate with existing owners.</li>
            <li>Choose an alternative brand name.</li>
            <li>Develop a stronger international filing strategy.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The report helps businesses make decisions before spending
            significant resources on branding.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            10. Interpreting International Trademark Search Reports
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For companies operating internationally, trademark availability must
            be evaluated country by country because trademark rights are
            territorial.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark available in one country may be unavailable elsewhere.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            International searches should consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Target countries.</li>
            <li>Local trademark databases.</li>
            <li>Translation issues.</li>
            <li>Cultural meanings.</li>
            <li>Local competitors.</li>
            <li>Regional trademark systems.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A successful international branding strategy requires understanding
            how trademark rights differ across jurisdictions.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A professional trademark search report is a powerful tool that
            provides valuable insight into the availability, strength, and
            potential risks associated with a trademark. However, the true value
            of the report comes from correctly interpreting the information
            rather than simply reviewing the list of similar marks. By
            understanding trademark similarity factors, classification analysis,
            legal status information, risk evaluations, and search limitations,
            businesses can make smarter decisions about brand protection and
            expansion. A carefully analyzed trademark search report allows
            companies to protect their investments, reduce legal risks, and
            build stronger brands in domestic and international markets. Whether
            launching a new business, introducing a product, or expanding
            globally, learning how to read and interpret a trademark search
            report is an essential step toward creating a secure and valuable
            trademark portfolio. At{" "}
            <a
              className="text-blue-600 underline hover:no-underline"
              href="https://effemark.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              EffeMark
            </a>
            , we help businesses make confident branding decisions with clear, actionable{" "}
            <a
              className="text-blue-600 underline hover:no-underline"
              href="https://www.effemark.com/trademark-search-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              trademark search
            </a>{" "}
            reports that highlight conflicts, classification risks, and
            registration strategy.
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
