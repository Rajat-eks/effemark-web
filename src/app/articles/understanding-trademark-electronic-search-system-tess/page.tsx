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
  title: "Understanding the Trademark Electronic Search System (TESS)",
  description:
    "Trademark Electronic Search System is a free online database provided by the United States Patent and Trademark Office (USPTO) that allows anyone to search through millions of registered and pending trademarks.",
  keywords: ["Trademark Electronic Search System"],
};

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/Trademark Electronic Search System.jpg"
          alt="Blog Banner"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Understanding the Trademark Electronic Search System (TESS)
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 05/01/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            When starting a new business or launching a product, choosing the
            right name is crucial. But before you fall in love with that perfect
            brand name, you need to ensure it's not already taken. This is where
            the Trademark Electronic Search System comes into play. The
            Trademark Electronic Search System, commonly known as TESS, is a
            free online database provided by the United States Patent and
            Trademark Office (USPTO) that allows anyone to search through
            millions of registered and pending trademarks.
          </p>
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What is the Trademark Electronic Search System?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The Trademark Electronic Search System is a powerful tool that gives
            you access to the USPTO's comprehensive trademark database. Think of
            it as a massive digital library containing information about every
            trademark application filed with the USPTO since 1870. Whether
            you're an entrepreneur, attorney, or business owner, TESS helps you
            determine if your desired trademark is available for use or if it
            might conflict with existing marks.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The system contains detailed records of registered trademarks,
            pending applications, dead or abandoned marks, and cancelled
            registrations. This extensive database makes the Trademark
            Electronic Search System an essential first step in the trademark
            registration process.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Should You Use TESS?
          </h2>

          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before investing time and money into branding and trademark
            applications, searching the Trademark Electronic Search System can
            save you from costly legal disputes down the road. Here's why it
            matters:
          </p>

          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Avoid Infringement: By searching existing trademarks, you reduce
              the risk of accidentally infringing on someone else's intellectual
              property rights. Using a mark that's already registered can lead
              to legal action, forcing you to rebrand entirely.
            </li>
            <li>
              Save Money: Filing a trademark application costs money. If your
              mark is rejected due to conflicts with existing trademarks, those
              fees are non-refundable. Using TESS beforehand helps you make
              informed decisions.
            </li>
            <li>
              Protect Your Brand: Understanding what trademarks already exist in
              your industry helps you create a stronger, more distinctive brand
              that stands out in the marketplace.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Types of Searches Available in TESS
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The Trademark Electronic Search System offers multiple search
            options to accommodate different user needs and experience levels:
          </p>

          <h4>Basic Word Mark Search</h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This straightforward option allows you to search for trademarks
            using simple keywords. It's perfect for beginners who want to
            quickly check if a specific word or phrase is trademarked.
          </p>

          <h4>Structured Form Search</h4>
          <p>
            This intermediate-level search lets you combine multiple search
            criteria:
          </p>

          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>Owner name:</b> Find all trademarks owned by a specific company
            </li>
            <li>
              <b>Serial or registration number:</b> Look up specific trademark
              applications
            </li>
            <li>
              <b>Design codes:</b> Search for trademarks containing specific
              visual elements
            </li>
            <li>
              <b>Filing date ranges:</b> Narrow results by when marks were filed
            </li>
            <li>
              <b>International class:</b> Filter by goods or services categories
            </li>
          </ul>

          <h4>Free Form Search</h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For advanced users familiar with Boolean operators, the Trademark
            Electronic Search System offers a free form search. This method uses
            commands like AND, OR, and NOT to create complex search queries,
            giving you precise control over your results.
          </p>
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            How to Effectively Use the Trademark Electronic Search System
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Searching the Trademark Electronic Search System requires more than
            just typing in your exact trademark. Here are practical strategies:
          </p>

          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Search Variations: Don't just search for your exact phrase. Try
              different spellings, phonetic equivalents, and related terms. If
              you're considering "QuickFix," also search "Quick Fix," "Quik
              Fix," and "Qwik Fix."
            </li>
            <li>
              Check Phonetic Similarities: Trademarks that sound alike can cause
              confusion, even if spelled differently. The Trademark Electronic
              Search System allows phonetic searching to catch these potential
              conflicts.
            </li>
            <li>
              Review Different Classes: Trademarks are categorized into 45
              different classes based on goods and services. The same name might
              be trademarked in multiple classes by different owners. Make sure
              you search the class relevant to your business.
            </li>
            <li>
              Examine Dead Marks: Just because a trademark appears in the
              Trademark Electronic Search System as "dead" doesn't mean it's
              free to use. The owner might still have common law rights, or the
              mark could be renewed. Always investigate further.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Understanding Your Search Results
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            When you use the Trademark Electronic Search System, you'll
            encounter various status indicators:
          </p>

          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>Live/Registered:</b> The trademark is active and protected
            </li>
            <li>
              <b>Pending:</b> The application is under review
            </li>
            <li>
              <b>Dead/Abandoned:</b> The trademark is no longer active, but
              research the reasons
            </li>
            <li>
              <b>Cancelled:</b> The registration was cancelled but may still
              have some protection
            </li>
          </ul>

          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Each result provides detailed information including the owner's
            name, filing date, registration date, description of goods or
            services, and the current status.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Limitations and Next Steps
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            While the Trademark Electronic Search System is incredibly valuable,
            it's not perfect. TESS only includes federal trademarks registered
            with the USPTO. It doesn't show state trademark registrations,
            common law trademarks (marks used in commerce without registration),
            or business name registrations.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            After conducting your search using the Trademark Electronic Search
            System, consider consulting with a trademark attorney for a
            comprehensive clearance search. They can search state databases,
            common law uses, and provide legal analysis about potential
            conflicts.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion
          </h2>

          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The Trademark Electronic Search System is an indispensable resource
            for anyone looking to protect their brand identity. By understanding
            how to navigate TESS effectively, you can make informed decisions
            about your trademark choices and avoid costly mistakes. While the
            system may seem complex at first, taking time to learn its features
            will empower you to conduct thorough trademark searches and build a
            brand that's truly yours. Start your trademark journey today by
            visiting the USPTO website and exploring what the Trademark
            Electronic Search System has to offer.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            About EffeMark
          </h2>

          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            EffeMark serves as a trusted partner in global trademark protection,
            offering{" "}
            <a href="https://effemark.com/trademark-search-services">
              {" "}
              comprehensive search
            </a>{" "}
            and{" "}
            <a href="https://effemark.com/trademark-monitoring">
              monitoring solutions
            </a>{" "}
            across 180+ countries with over two decades of IP expertise.
            Leveraging hybrid AI-powered algorithms and manual expert
            verification, they deliver customizable reports on trademark
            availability, similar marks, phonetic equivalents, and risk
            assessments within <b>3-5 business</b> days to prevent costly
            disputes.
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
