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
    "Russian Trademark Search: How to Use Rospatent for Brand Clearance",
  description:
    "Learn how to conduct a comprehensive Russian trademark search using Rospatent — exact and similarity searches, Cyrillic transliterations, Nice Classification, image-based logo clearance, and step-by-step brand clearance guidance.",
  keywords: [
    "Russian Trademark Search",
    "Rospatent",
    "Russia Trademark Search",
    "Trademark Search Russia",
    "Rospatent Database",
  ],
};

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Russian Trademark Search.jpg"
          alt="Russian Trademark Search: How to Use Rospatent for Brand Clearance"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Russian Trademark Search: How to Use Rospatent for Brand Clearance
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 30/06/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Conducting a trademark search in Russia is a critical step before
            launching a brand, exporting goods, or entering the Russian market.
            The goal is to ensure your proposed name, logo, or slogan does not
            conflict with existing rights.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The primary authority for trademark registration and search in Russia
            is the Federal Service for Intellectual Property (Rospatent).
            Through its databases and online search tools, applicants can check
            existing trademarks, pending applications, and international marks
            protected in Russia.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This guide explains how to use Rospatent for brand clearance, what
            to search, and how to interpret results like a professional
            trademark examiner.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            1. What &quot;Trademark Clearance&quot; Means in Russia
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark clearance is the process of determining whether a proposed
            brand is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Already registered in Russia</li>
            <li>Confusingly similar to an existing mark</li>
            <li>Pending registration (applications also matter)</li>
            <li>
              Protected internationally under Russian jurisdiction (e.g., Madrid
              System marks)
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            In Russia, similarity is assessed across three dimensions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Visual similarity (spelling, structure, logo design)</li>
            <li>Phonetic similarity (how it sounds in Russian/English)</li>
            <li>Conceptual similarity (meaning or association)</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even partial similarity in the same industry class can block
            registration.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            2. Where to Search: Official Rospatent Systems
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Rospatent provides multiple access points through its digital
            infrastructure. The most important are:
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            2.1 Search Platform (Primary Tool)
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The main public search interface is the Rospatent Search Platform for
            trademarks, which provides access to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Registered trademarks</li>
            <li>Pending applications</li>
            <li>Well-known marks</li>
            <li>International trademarks valid in Russia</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            It is available online and operates continuously for public use.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Key advantage:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              AI-powered similarity search (text + image + phonetic + semantic)
            </li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            2.2 Open Registers (Legal Status Database)
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The open registers allow you to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Verify legal status (active, expired, rejected, pending)
            </li>
            <li>Track ownership details</li>
            <li>Check filing and registration history</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is essential for confirming whether a mark is legally
            enforceable or dead.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            2.3 Classification Databases
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Rospatent also integrates classification systems:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Nice Classification (goods/services categories)</li>
            <li>Figurative element classification (for logos)</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These help narrow your search to relevant commercial fields.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            2.4 International Databases (Important for Foreign Brands)
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            To ensure full clearance, you should also consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>WIPO Madrid System trademarks (international registrations)</li>
            <li>TMview (global trademark search aggregation)</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Many conflicts in Russia come from international marks protected via
            treaty systems.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            3. Step-by-Step: How to Conduct a Trademark Search in Rospatent
          </h2>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 1: Define Your Brand Elements
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Break your brand into components:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Word mark (name)</li>
            <li>Logo (design elements)</li>
            <li>Slogan (if applicable)</li>
            <li>Transliteration variants (English ↔ Cyrillic)</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Example:</p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            If your brand is &quot;NordTek&quot;, also search:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>НордТек</li>
            <li>Nord Tech</li>
            <li>NordTekk</li>
            <li>Similar phonetic variants</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 2: Search by Text (Exact + Variations)
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Start with:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Exact name</li>
            <li>Spelling variations</li>
            <li>Phonetic equivalents</li>
            <li>Abbreviations</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            In Russia, phonetic similarity is heavily weighted, especially when
            transliterated into Cyrillic.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 3: Use Nice Class Filtering
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is one of the most important steps.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            You must identify the correct classes for your goods/services. For
            example:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Class 25: Clothing</li>
            <li>Class 9: Electronics</li>
            <li>Class 35: Business services</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Two identical names may coexist if they are in unrelated classes—but
            only if there is no confusion risk.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 4: Search Image Trademarks (Logo Clearance)
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Rospatent supports image-based search, including AI-driven
            similarity matching.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">You should:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Upload your logo</li>
            <li>Check visually similar designs</li>
            <li>Review geometric similarities (not just exact copies)</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is crucial for brands relying heavily on logos.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 5: Analyze &quot;Dead&quot; and &quot;Pending&quot; Marks
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Do NOT ignore:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Pending applications (high risk of future conflict)</li>
            <li>Abandoned marks (may still influence examiner decisions)</li>
            <li>Recently expired marks (may still be relevant in disputes)</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            4. How to Interpret Rospatent Search Results
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            When reviewing results, focus on:
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            4.1 Similarity Risk Level
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Ask:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Does it look similar?</li>
            <li>Does it sound similar in Russian pronunciation?</li>
            <li>Does it convey the same meaning?</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            If yes → high conflict risk.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            4.2 Goods and Services Overlap
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even weak similarity becomes strong risk if:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Same product category</li>
            <li>Same customer segment</li>
            <li>Overlapping distribution channels</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Example:</p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            &quot;Alpha&quot; for cosmetics vs &quot;Alpha&quot; for skincare
            → high conflict risk
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            4.3 Legal Status
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Check whether the mark is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Active (fully enforceable)</li>
            <li>Pending (uncertain but risky)</li>
            <li>Expired (sometimes still relevant historically)</li>
            <li>Cancelled (low risk, but still review context)</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            5. Common Mistakes in Russian Trademark Searches
          </h2>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            5.1 Ignoring Cyrillic Transliterations
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Many foreign brands fail because they only search Latin script.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">Always check:</p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>English spelling</li>
            <li>Cyrillic spelling</li>
            <li>Phonetic equivalents</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            5.2 Narrow Class Selection
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Limiting search to one class can miss conflicts in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Adjacent markets</li>
            <li>Related services</li>
            <li>Distribution channels</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            5.3 Ignoring International Marks
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Marks protected under international agreements can block registration
            even if not locally filed.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            5.4 Not Reviewing Pending Applications
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is one of the biggest risks—pending marks can become blocking
            registrations later.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            6. Professional Best Practices for Strong Brand Clearance
          </h2>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            6.1 Run Multi-Layer Searches
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A complete clearance strategy includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Rospatent database search</li>
            <li>International trademark search (WIPO/TMview)</li>
            <li>
              Market search (business directories, domain names, social media)
            </li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            6.2 Evaluate &quot;Likelihood of Confusion&quot; Not Just Identity
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Russian examiners focus on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Consumer perception</li>
            <li>Commercial impression</li>
            <li>Industry context</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even non-identical marks can be rejected.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            6.3 Document Everything
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Keep records of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Search queries used</li>
            <li>Screenshots of results</li>
            <li>Analysis notes</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This helps in future legal defense.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            6.4 Consider Professional Clearance for High-Value Brands
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            If your brand is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>High investment</li>
            <li>International-facing</li>
            <li>E-commerce dependent</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A professional clearance search is strongly recommended before
            filing.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            7. Conclusion
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Using the Federal Service for Intellectual Property (Rospatent)
            system effectively is essential for avoiding costly trademark
            conflicts in Russia. The platform provides powerful tools—including
            AI-based similarity search, classification filters, and open legal
            status registers—that allow applicants to conduct meaningful brand
            clearance.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            However, true clearance goes beyond database search. It requires
            analyzing phonetics, translation variations, industry overlap, and
            legal status in combination.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A well-executed Russian trademark search is not just a formality—it
            is a strategic risk-management step that determines whether your
            brand can safely operate and scale in one of the world&apos;s most
            complex trademark environments.
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
