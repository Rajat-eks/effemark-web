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
    "Australian Trademark Search: A Complete Guide to IP Australia's Database",
  description:
    "Learn how to conduct an effective trademark search in Australia using IP Australia's official database — classification, similarity analysis, common-law rights, and step-by-step search guidance.",
  keywords: [
    "Australian Trademark Search",
    "IP Australia",
    "IP Australia Database",
    "Trademark Search Australia",
  ],
};

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Australian Trademark Search.jpg"
          alt="Australian Trademark Search: A Complete Guide to IP Australia's Database"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Australian Trademark Search: A Complete Guide to IP Australia&apos;s
            Database
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 17/06/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Introduction
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Conducting a trademark search in Australia is one of the most
            important early steps in building a brand. Whether you are launching
            a startup, expanding an international business, or rebranding an
            existing product line, understanding how to navigate Australia&apos;s
            official trademark database can help you avoid costly legal disputes,
            rejection of applications and forced rebranding. In Australia,
            trademarks are administered by IP Australia, which maintains the
            official database of registered and pending trademarks. This system is
            accessible to the public and forms the foundation for assessing
            trademark availability in the country.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            However, effective trademark searching is not as simple as entering a
            brand name into a search bar. It requires understanding
            classification systems, similarity analysis, ownership structures and
            legal interpretation standards used during examination. This guide
            provides a complete, structured overview of how to conduct an
            Australian trademark search using IP Australia&apos;s database and how
            to interpret the results effectively.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What Is the IP Australia Trademark Database?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The trademark database maintained by IP Australia contains records of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Registered trademarks</li>
            <li>Pending trademark applications</li>
            <li>Expired or removed marks</li>
            <li>Ownership details</li>
            <li>Filing dates and priority information</li>
            <li>Goods and services classifications</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The database is publicly accessible through IP Australia&apos;s
            official trademark search tools, making it an essential resource for
            businesses and legal professionals. It forms part of Australia&apos;s
            broader intellectual property system, which also includes patents,
            designs and plant breeder&apos;s rights.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Conduct a Trademark Search Before Filing?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark search helps identify whether a proposed brand is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Already registered</li>
            <li>Similar to existing marks</li>
            <li>Legally risky to use</li>
            <li>Likely to face opposition</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Skipping this step can result in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Application refusal by IP Australia</li>
            <li>Legal disputes with existing trademark owners</li>
            <li>Forced rebranding after market launch</li>
            <li>
              Financial losses from marketing and branding investments
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A proper search significantly reduces these risks.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Understanding Australia&apos;s Trademark Classification System
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Australia uses the Nice Classification system, an international
            system that categorizes goods and services into 45 classes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Classes 1–34: Goods (products)</li>
            <li>Classes 35–45: Services</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Class 9: Software and electronics</li>
            <li>Class 25: Clothing</li>
            <li>Class 35: Business services</li>
            <li>Class 41: Education and entertainment</li>
            <li>Class 42: Technology and software services</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            When searching, it is critical to identify the correct class because
            trademarks can coexist if they operate in unrelated categories.
            However, confusion can still arise if goods or services are
            considered similar in practice.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step-by-Step Guide to Searching the IP Australia Database
          </h2>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 1: Access the Official Search Tool
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The primary search interface is provided by IP Australia through its
            Australian Trade Mark Search system. Users can search by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Trademark name</li>
            <li>Owner name</li>
            <li>Application number</li>
            <li>Class of goods/services</li>
            <li>Status (registered, pending, removed)</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 2: Perform a Basic Name Search
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Start by entering your proposed brand name. When reviewing results,
            consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Exact matches</li>
            <li>Similar spellings</li>
            <li>Phonetic equivalents</li>
            <li>Variations in spacing or punctuation</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example, &quot;GREENTECH&quot; may conflict with
            &quot;GREEN-TECH&quot; or &quot;GREENTECH&quot;.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 3: Analyze Similarity Beyond Exact Matches
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark law in Australia focuses heavily on likelihood of confusion,
            not just identical names. Examiners consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Visual similarity</li>
            <li>Phonetic similarity</li>
            <li>Conceptual similarity</li>
            <li>Overall commercial impression</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even non-identical marks may be considered conflicting if consumers
            could reasonably be confused.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 4: Filter by Relevant Classes
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Narrow your search by selecting relevant Nice Classes. For example:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>A software company should prioritize Class 9 and Class 42</li>
            <li>A fashion brand should focus on Class 25</li>
            <li>A food product should check Classes 29, 30 and 32</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            However, it is also important to review adjacent classes, especially
            where overlap is common.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 5: Review Ownership and Business Context
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Each trademark entry includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Owner name</li>
            <li>Filing date</li>
            <li>Renewal status</li>
            <li>Goods/services description</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This helps determine whether the mark is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Actively used in commerce</li>
            <li>Held defensively</li>
            <li>Potentially vulnerable to non-use cancellation</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 6: Check Application Status
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademarks in Australia may appear in several stages:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Filed (pending examination)</li>
            <li>Accepted</li>
            <li>Registered</li>
            <li>Opposed</li>
            <li>Removed or expired</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Pending applications are especially important because they may still
            become registered and block your filing.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Understanding Common-Law and Unregistered Rights
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even if a trademark does not appear in the database of IP Australia,
            risks may still exist. Australia recognizes common-law rights,
            meaning businesses may acquire rights through use in commerce. These
            rights may not be visible in the official database, so additional
            research is often necessary, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Business directories</li>
            <li>Market presence checks</li>
            <li>Domain name searches</li>
            <li>Social media usage</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Common Mistakes in Australian Trademark Searches
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Relying Only on Exact Name Matches:</strong> Many
              conflicts arise from similar — not identical — marks.
            </li>
            <li>
              <strong>Ignoring Related Classes:</strong> Overlooking adjacent
              classes can lead to unexpected opposition.
            </li>
            <li>
              <strong>Not Considering Phonetic Similarity:</strong> Marks that
              sound alike may still conflict even if spelled differently.
            </li>
            <li>
              <strong>Overlooking Pending Applications:</strong> A pending mark
              can become a full registration and block your application.
            </li>
            <li>
              <strong>Assuming Database Completeness:</strong> The IP Australia
              database does not capture all commercial usage in the market.
            </li>
          </ol>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            How IP Australia Examines Trademark Applications
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            When you file an application with IP Australia, examiners assess:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Distinctiveness of the mark</li>
            <li>Conflicts with prior registered marks</li>
            <li>Descriptive or generic nature of the term</li>
            <li>Proper classification of goods/services</li>
            <li>Likelihood of consumer confusion</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even if a search appears clear, examination standards may still
            result in objections.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            When to Seek Professional Assistance
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            While basic searches can be done independently, professional
            trademark attorneys are often needed when:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>The brand is commercially significant</li>
            <li>Similar marks exist in related classes</li>
            <li>International expansion is planned</li>
            <li>There is uncertainty about similarity risks</li>
            <li>The mark involves complex branding elements</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Professional searches often include deeper analysis of legal risk
            beyond database results.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Strategic Importance of a Proper Trademark Search
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A well-executed trademark search in Australia helps businesses:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Avoid legal disputes</li>
            <li>Protect brand investment</li>
            <li>Improve registration success rates</li>
            <li>Support long-term brand expansion</li>
            <li>Reduce rebranding risks</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            In many cases, the cost of a search is minimal compared to the
            potential cost of brand failure or litigation.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Searching trademarks through IP Australia is a critical step in
            protecting brand identity in Australia. However, effective searching
            requires more than a simple database query. It involves analyzing
            similarity, understanding classification systems, reviewing legal
            status and considering unregistered rights. A thorough search not only
            improves the likelihood of successful registration but also provides
            strategic clarity for building and protecting a strong, defensible
            brand in the Australian marketplace. In an increasingly competitive
            business environment, a careful trademark search is not just a legal
            formality — it is a foundational step in sustainable brand
            development.
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
