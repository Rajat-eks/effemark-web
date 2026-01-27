import Image from "next/image";
import React from "react";
import Banner from "@/components/assets/img/blog.svg";
import Question from "@/components/assets/img/question.svg";
import { Mail, Phone } from "lucide-react";
import { articles } from "../page";
import Link from "next/link";

interface PageProps {
  // define props here
}

export const metadata = {
  title: "Complete Guide to EUIPO Database EU Trademark Search",
  description:
    "Protecting your brand in the European market starts with a thorough EU trademark search. The European Union Intellectual Property Office (EUIPO) maintains a comprehensive database.",
  keywords: ["EU Trademark Search"],
};

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/EU Trademark Search.jpg"
          alt="Blog Banner"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[22px] sm:text-[25px] md:text-[30px] font-bold">
            Complete Guide to EUIPO Database EU Trademark Search
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 27/01/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Introduction to EU Trademark Search
          </h2>
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px] ">
            Protecting your brand in the European market starts with a thorough
            EU trademark search. The European Union Intellectual Property Office
            (EUIPO) maintains a comprehensive database that allows businesses
            and individuals to search existing trademarks across all EU member
            states. Understanding how to navigate this database is crucial for
            anyone looking to register a trademark or verify the availability of
            a brand name in Europe. This guide will walk you through everything
            you need to know about conducting an effective trademark search in
            the EU.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What is the EUIPO Database?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The EUIPO database is the official repository for all European Union
            trademarks (EUTMs). This powerful tool provides free access to
            millions of trademark records, enabling users to check if their
            desired brand name, logo, or slogan is already registered. The
            database covers all 27 EU member states, making it an essential
            resource for comprehensive brand protection.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            When you perform an EU trademark search through EUIPO, you gain
            access to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Active trademark registrations</li>
            <li>Pending applications</li>
            <li>Expired and withdrawn trademarks</li>
            <li>International registrations with EU designation</li>
            <li>Design rights and patent information</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Conduct an EU Trademark Search?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before investing in brand development or filing a trademark
            application, conducting an EU trademark search is essential for
            several reasons:
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[23px] font-bold">
            Risk Mitigation Benefits
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Avoid infringement lawsuits and legal disputes</li>
            <li>Prevent costly rebranding after launch</li>
            <li>Identify potential conflicts early in the process</li>
            <li>Save application fees for unavailable marks</li>
            <li>Protect your business reputation</li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[23px] font-bold">
            Strategic Business Advantages
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Understand competitor landscape</li>
            <li>Identify trademark trends in your industry</li>
            <li>Make informed branding decisions</li>
            <li>Assess market saturation</li>
            <li>Plan expansion strategies effectively</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            How to Access the EUIPO Database?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Accessing the EUIPO database for your EU trademark search is
            straightforward and completely free. Visit the official EUIPO
            website and locate the &quot;eSearch plus&quot; tool, which is the
            primary search interface for trademark queries.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The platform offers a user-friendly interface that doesn't require
            registration for basic searches. However, creating a free account
            provides additional features like saving searches and setting up
            monitoring alerts for specific trademarks.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step-by-Step Guide to Conducting an EU Trademark Search
          </h2>

          <h3 className="text-[18px] sm:text-[20px] md:text-[23px] font-bold">
            Basic Search Process
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Start your EU trademark search by entering your desired trademark in
            the search bar. The system allows searches by trademark name, owner,
            application number, or registration number. For brand name searches,
            begin with a simple word search to get an overview of similar marks.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Search tips for better results:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Use wildcard symbols (*) for variations</li>
            <li>Search both singular and plural forms</li>
            <li>Include common misspellings</li>
            <li>Try phonetically similar terms</li>
            <li>Search in multiple languages</li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[23px] font-bold">
            Advanced Search Techniques
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For a more comprehensive EU trademark search, utilize the advanced
            search features. This allows you to filter results by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Nice Classification classes (goods and services categories)</li>
            <li>Trademark status (pending, registered, expired)</li>
            <li>Filing date ranges</li>
            <li>Applicant or owner name</li>
            <li>Trademark type (word, figurative, combined)</li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[23px] font-bold">
            Image and Logo Search
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            If you're searching for visual trademarks, the EUIPO database
            includes an image search function. This feature uses Vienna
            Classification codes to categorize design elements, making it easier
            to find similar logos or graphics during your EU trademark search.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Understanding Search Results
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Interpreting your EU trademark search results correctly is crucial.
            Each trademark listing displays essential information including the
            trademark image or text, registration number, filing date, current
            status, owner details, and the classes of goods or services covered.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Pay special attention to trademarks in the same or similar classes
            as your intended use. Even if a trademark looks different, it might
            still pose a conflict if it operates in the same market sector.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Common Mistakes to Avoid
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Searching only exact matches while ignoring similar marks
            </li>
            <li>Overlooking trademarks in related product classes</li>
            <li>Failing to search in multiple languages</li>
            <li>
              Not checking international registrations with EU coverage
            </li>
            <li>Ignoring pending applications that might be approved</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Beyond the EUIPO Database
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            While the EUIPO database is comprehensive for EU-wide protection,
            consider expanding your EU trademark search to include national
            trademark offices of individual EU countries. Some businesses
            maintain national registrations that might not appear in EUIPO
            searches. Additionally, search common law rights and unregistered
            trademarks through business registries and online presence.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Professional Assistance
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Although the EUIPO database is accessible to everyone, complex EU
            trademark search scenarios often benefit from professional
            expertise. Trademark attorneys can conduct comprehensive clearance
            searches, provide legal opinions on potential conflicts, and
            navigate nuanced similarity assessments that automated systems might
            miss.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Mastering the EU trademark search process through the EUIPO database
            is an invaluable skill for brand protection in European markets. By
            following this guide and conducting thorough searches before filing
            applications, you can significantly reduce risks and make informed
            decisions about your intellectual property strategy. Remember that
            trademark searching is just the first step; proper registration and
            ongoing monitoring are equally important for comprehensive brand
            protection across the European Union.
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

                        {/* <span className="text-gray-400 text-[10px] sm:text-[11px] md:text-[12px]">
                            P
                          </span> */}
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
