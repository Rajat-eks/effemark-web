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
    "French Trademark Search: INPI France Guide for International Registrants",
  description:
    "Learn how to conduct a comprehensive French trademark search using the INPI database — exact and similarity searches, Nice Classification, EUIPO and WIPO clearance, and step-by-step guidance for international registrants.",
  keywords: [
    "French Trademark Search",
    "INPI France",
    "INPI Database",
    "France Trademark Search",
    "Trademark Search France",
  ],
};

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_French Trademark Search.jpg"
          alt="French Trademark Search: INPI France Guide for International Registrants"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            French Trademark Search: INPI France Guide for International
            Registrants
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 29/06/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            1. Understanding INPI and Its Trademark System
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The INPI (Institut National de la Propriété Industrielle) manages
            and publishes trademark registrations in France, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>French national trademarks (FR)</li>
            <li>European Union trademarks (EU) via EUIPO</li>
            <li>
              International trademarks designating France (WIPO/Madrid System)
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The INPI database allows free public access to trademark data,
            including legal status, ownership, filing details and goods/services
            classification.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            What you can check in INPI:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Whether a trademark exists</li>
            <li>Whether it is active or expired</li>
            <li>Who owns it</li>
            <li>What goods/services it covers</li>
            <li>Filing and registration history</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            2. Official INPI Trademark Search Tools
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The primary search system is available through DATA INPI, the
            official open data platform.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Main search portal:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>DATA INPI trademark database</li>
            <li>Advanced search for structured queries</li>
            <li>Filters for status, classes and jurisdiction</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            INPI centralizes industrial property data such as trademarks,
            patents and designs in a single digital system.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            3. Types of Trademark Searches You Should Perform
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A proper clearance search in France is not just a name check. INPI
            examiners also consider similarity and market confusion.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            3.1 Basic Search (Identical Marks)
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Used to detect exact matches.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Check:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Same spelling</li>
            <li>Same word order</li>
            <li>Identical brand names</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            3.2 Similarity Search (Critical Step)
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            INPI also evaluates:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Phonetic similarity (sound-alike marks)</li>
            <li>Orthographic similarity (spelling variations)</li>
            <li>Conceptual similarity (meaning/translation)</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            3.3 Classification-Based Search (Nice Classification)
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademarks are registered under product/service categories (Classes
            1–45).
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Example:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Class 25 → Clothing</li>
            <li>Class 9 → Software</li>
            <li>Class 10 → Medical instruments</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A mark may coexist if it is in a completely unrelated class—but
            conflicts can still occur if the brand is well-known.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            4. Step-by-Step INPI Trademark Search Process
          </h2>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 1: Access the Database
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Go to DATA INPI trademark search interface.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 2: Enter Search Keywords
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            You can search using:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Brand name</li>
            <li>Applicant/owner name</li>
            <li>Trademark number</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            INPI supports partial and advanced keyword searching.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 3: Apply Filters
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Refine results using:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark status (registered / expired / pending)</li>
            <li>Filing date range</li>
            <li>Trademark type (word, figurative, combined)</li>
            <li>Geographic scope (FR / EU / WO)</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 4: Review Each Result Carefully
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For each mark, analyze:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Similar spelling or pronunciation</li>
            <li>Product/service overlap</li>
            <li>Ownership (competitor or unrelated party)</li>
            <li>Registration validity</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            5. INPI vs EUIPO vs WIPO Search Strategy
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            International applicants should never rely only on INPI.
          </p>
          <div className="overflow-x-auto">
            <table className="border-[1px] w-full text-[12px] sm:text-[14px] md:text-[16px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left border-[1px]">Authority</th>
                  <th className="p-2 text-left border-[1px]">Coverage</th>
                  <th className="p-2 text-left border-[1px]">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">INPI (France)</td>
                  <td className="p-2 border-[1px]">France only</td>
                  <td className="p-2 border-[1px]">
                    National protection check
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">EUIPO</td>
                  <td className="p-2 border-[1px]">European Union</td>
                  <td className="p-2 border-[1px]">
                    EU-wide trademark clearance
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">WIPO (Madrid System)</td>
                  <td className="p-2 border-[1px]">Multiple countries</td>
                  <td className="p-2 border-[1px]">
                    International filings
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A complete clearance search should combine all three systems.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            6. Common Mistakes International Applicants Make
          </h2>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            6.1 Searching Only Exact Matches
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Many conflicts arise from similar—not identical—marks.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            6.2 Ignoring International Registrations
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A mark registered via WIPO may still be enforceable in France.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            6.3 Ignoring &quot;Well-Known&quot; Marks
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even unregistered but famous marks may have protection.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            6.4 Misunderstanding Territoriality
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademarks are territorial rights, meaning:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              A mark in one country is not automatically valid in another
            </li>
            <li>
              Protection depends on where it is registered or used
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            7. Legal Risk Factors in France
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            INPI examiners and courts consider likelihood of confusion based on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Visual similarity</li>
            <li>Sound similarity</li>
            <li>Conceptual meaning</li>
            <li>Market sector overlap</li>
            <li>Consumer perception</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even partial similarity can trigger refusal or opposition.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            8. Advanced Search Strategy (Professional-Level)
          </h2>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            8.1 Use Multiple Variations
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Search:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Singular/plural forms</li>
            <li>Spelling variants</li>
            <li>Phonetic equivalents</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            8.2 Check Dead and Active Marks
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Expired trademarks may still present legal risk depending on recent
            use history.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            8.3 Review Oppositions and Legal History
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            INPI records may show:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Oppositions</li>
            <li>Litigation</li>
            <li>Invalidations</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            9. Madrid System Considerations for International Registrants
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            If you are filing internationally via the Madrid System, your
            trademark may designate France.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Key points:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Filing is centralized through WIPO</li>
            <li>
              France can accept or refuse protection independently
            </li>
            <li>Each country still examines based on local law</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            10. Practical Pre-Filing Checklist
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before filing a trademark in France, ensure:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>No identical mark exists in INPI</li>
            <li>No similar phonetic or visual conflicts</li>
            <li>Correct Nice classes identified</li>
            <li>EUIPO and WIPO databases checked</li>
            <li>Brand name passes global clearance screening</li>
            <li>Legal risk assessed for expansion markets</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            11. When You Should Use a Trademark Attorney
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Professional assistance is recommended when:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>You plan EU-wide or global expansion</li>
            <li>Your brand is high-value or investor-backed</li>
            <li>Similar marks already exist</li>
            <li>You are filing through the Madrid System</li>
            <li>You need legal opinion on similarity risk</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The INPI trademark search system is the foundation of trademark
            clearance in France, but it is only one part of a broader
            international strategy. For international registrants, effective
            trademark protection requires combining INPI searches with EUIPO and
            WIPO databases, analyzing similarity beyond exact matches and
            understanding the legal principles of territorial protection.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A careful and structured search before filing significantly reduces
            the risk of rejection, opposition and costly rebranding.
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
