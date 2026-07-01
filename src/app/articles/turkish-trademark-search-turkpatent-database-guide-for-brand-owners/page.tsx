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
    "Turkish Trademark Search: TURKPATENT Database Guide for Brand Owners",
  description:
    "Learn how to conduct effective trademark clearance searches using the TURKPATENT database — trademark name, applicant, Nice Classification, and status filters, plus step-by-step guidance for brand owners in Türkiye.",
  keywords: [
    "Turkish Trademark Search",
    "TURKPATENT",
    "Türkiye Trademark Search",
    "Turkey Trademark Search",
    "TURKPATENT Database",
  ],
};

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Turkish Trademark Search.png"
          alt="Turkish Trademark Search: TURKPATENT Database Guide for Brand Owners"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Turkish Trademark Search: TURKPATENT Database Guide for Brand Owners
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 01/07/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Introduction
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before investing time, money, and marketing resources into a new
            brand, every business owner should conduct a thorough trademark
            search. In Türkiye, trademark searches are primarily performed
            through the Turkish Patent and Trademark Office (TURKPATENT), the
            official authority responsible for trademark registration and
            intellectual property protection.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark search helps businesses determine whether a proposed
            brand name, logo, slogan, or other distinctive sign is already
            registered or pending registration. Conducting this search before
            filing can significantly reduce the risk of rejection, opposition
            proceedings, infringement disputes, and costly rebranding efforts.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This guide explains how to use the TURKPATENT trademark database,
            what information can be found in the system, and how brand owners
            can perform effective trademark clearance searches before filing an
            application. TURKPATENT provides an official online trademark
            research system that allows users to search existing trademark
            applications and registrations in Türkiye.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What Is TURKPATENT?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            TURKPATENT (Turkish Patent and Trademark Office) is the national
            government agency responsible for administering trademarks, patents,
            industrial designs, geographical indications, and other intellectual
            property rights in Türkiye. The office manages trademark registration
            procedures, publishes trademark bulletins, examines applications, and
            maintains the country&apos;s official trademark database.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For businesses operating in Türkiye or planning to enter the Turkish
            market, TURKPATENT serves as the primary source for trademark
            information and registration services.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Trademark Searches Matter Before Filing
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Many trademark applications are delayed, opposed, or refused because
            applicants fail to conduct adequate searches beforehand.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark search helps identify:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Existing identical trademarks</li>
            <li>Similar trademarks that may create confusion</li>
            <li>Pending trademark applications</li>
            <li>Registered owners of similar marks</li>
            <li>Trademark classes already occupied</li>
            <li>Potential legal risks before filing</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Türkiye follows a first-to-file trademark system, meaning trademark
            rights are generally acquired by the first applicant rather than the
            first user. Consequently, conducting a trademark search before
            filing is a critical step in protecting a brand.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Accessing the TURKPATENT Trademark Database
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Brand owners can access the official trademark search platform
            through the TURKPATENT website.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <strong>Official Trademark Search Portal:</strong> TURKPATENT
            Trademark Research Database
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The database is available in both Turkish and English, making it
            accessible to domestic and international applicants.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Features of the TURKPATENT Trademark Search System
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The trademark research system allows users to search records using
            various criteria.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Trademark Name Search
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The most common search method involves entering a proposed trademark
            name to identify identical or similar registrations.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Examples:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Exact word matches</li>
            <li>Partial word matches</li>
            <li>Combined words</li>
            <li>Alternative spellings</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Searching multiple variations often reveals potential conflicts that
            may not appear in an exact-match search.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Applicant Name Search
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Users can search trademarks owned by specific individuals or
            companies.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This feature is useful for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Due diligence investigations</li>
            <li>Competitor analysis</li>
            <li>Portfolio reviews</li>
            <li>Ownership verification</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The system displays trademarks associated with the selected
            applicant.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Nice Classification Search
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark searches can be filtered according to Nice Classification
            classes.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Examples include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Class 9: Software and electronics</li>
            <li>Class 25: Clothing</li>
            <li>Class 35: Advertising and retail services</li>
            <li>Class 43: Restaurant services</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Searching within relevant classes helps identify marks that may
            create registration conflicts.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Trademark Type Search
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The database also permits filtering by trademark type, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Word marks</li>
            <li>Figurative marks</li>
            <li>Sound marks</li>
            <li>Motion marks</li>
            <li>Well-known marks</li>
            <li>International registrations</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This functionality enables more precise trademark investigations.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step-by-Step Guide to Conducting a TURKPATENT Trademark Search
          </h2>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 1: Access the Trademark Research Page
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Visit the official trademark research portal and select the trademark
            search function. The interface provides multiple search fields that
            can be used individually or in combination.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 2: Enter the Proposed Trademark
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Type the proposed brand name into the trademark name field.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For more comprehensive results, search:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Singular and plural forms</li>
            <li>Combined and separated words</li>
            <li>Abbreviations</li>
            <li>Common misspellings</li>
            <li>Phonetically similar versions</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark conflicts frequently arise from similarity rather than
            exact duplication.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 3: Select Relevant Classes
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Choose the Nice Classification classes that correspond to your
            products or services.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Searching only one class may overlook potential conflicts in related
            industries. Comprehensive searches often include neighboring classes
            that could create a likelihood of confusion.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 4: Review Search Results
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The database typically displays:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark name</li>
            <li>Application number</li>
            <li>Registration number</li>
            <li>Applicant information</li>
            <li>Filing date</li>
            <li>Current status</li>
            <li>Relevant classes</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This information helps assess whether a trademark may present an
            obstacle to registration.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 5: Analyze Similar Marks
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Many applicants focus only on exact matches. However, trademark
            examiners also consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Visual similarity</li>
            <li>Phonetic similarity</li>
            <li>Conceptual similarity</li>
            <li>Similar goods and services</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark that sounds similar to an existing registration may still
            be refused.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Understanding Trademark Status Information
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The TURKPATENT database provides status information that can
            influence filing decisions.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Common statuses include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Registered:</strong> The trademark has completed the
              registration process and enjoys legal protection.
            </li>
            <li>
              <strong>Pending Application:</strong> The trademark application is
              under examination or awaiting publication.
            </li>
            <li>
              <strong>Published:</strong> The application has been published for
              opposition.
            </li>
            <li>
              <strong>Refused:</strong> The application was rejected by the
              trademark office.
            </li>
            <li>
              <strong>Withdrawn or Expired:</strong> The trademark is no longer
              active or enforceable.
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Understanding these statuses helps businesses evaluate potential
            conflicts and registration risks.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Common Trademark Search Mistakes
          </h2>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Searching Only Exact Matches
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            One of the most common mistakes is focusing exclusively on identical
            names.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark offices frequently reject applications because of
            similar-sounding or visually similar marks, even when spellings
            differ. Experts recommend conducting broader similarity searches that
            include phonetic and conceptual variations.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Ignoring Related Classes
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Many applicants search only within their primary business class.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            However, trademark conflicts may arise in related classes where
            consumers could assume a commercial connection.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Overlooking Logo Similarities
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Word searches alone may not reveal conflicting figurative trademarks.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Businesses should review both textual and visual elements when
            evaluating availability.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Beyond TURKPATENT: Additional Search Resources
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            While TURKPATENT remains the primary database for Turkish trademarks,
            businesses pursuing international expansion should also consider
            broader searches.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Useful resources include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              World Intellectual Property Organization (WIPO) Global Brand
              Database
            </li>
            <li>TMview European trademark database</li>
            <li>Madrid System trademark records</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark professionals often combine multiple databases to conduct
            comprehensive clearance searches. Community discussions among
            trademark practitioners frequently recommend supplementing national
            searches with international databases to identify cross-border
            conflicts.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            When to Seek Professional Trademark Assistance
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Although the TURKPATENT database is highly useful for preliminary
            research, a professional trademark clearance search often provides
            deeper analysis.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark attorneys and agents can evaluate:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Likelihood of confusion</li>
            <li>Similarity risks</li>
            <li>Class overlap issues</li>
            <li>Opposition exposure</li>
            <li>International filing considerations</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Professional review is especially valuable for businesses making
            significant investments in branding and market expansion.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Best Practices for Brand Owners
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before filing a Turkish trademark application:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Conduct an initial search in the TURKPATENT database.</li>
            <li>Search for phonetic, visual, and conceptual similarities.</li>
            <li>Review multiple Nice Classification classes.</li>
            <li>Analyze both word marks and logos.</li>
            <li>Check pending applications as well as registrations.</li>
            <li>
              Consider international trademark databases when expansion is
              planned.
            </li>
            <li>Obtain professional legal advice for high-value brands.</li>
          </ol>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Following these steps can significantly improve the chances of
            successful trademark registration.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A thorough trademark search is one of the most important steps in
            building and protecting a brand in Türkiye. The TURKPATENT trademark
            database offers brand owners a powerful tool for researching
            existing registrations, evaluating potential conflicts, and assessing
            registration risks before filing an application. However, successful
            trademark clearance requires more than checking for identical names.
            Brand owners must evaluate similar trademarks, relevant classes,
            pending applications, and international considerations to make
            informed decisions. By combining the TURKPATENT search system with
            comprehensive trademark analysis and professional guidance when
            necessary, businesses can minimize legal risks and establish stronger,
            more defensible brands in the Turkish marketplace.
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