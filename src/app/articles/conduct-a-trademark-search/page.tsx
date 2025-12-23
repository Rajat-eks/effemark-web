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
  title: "How to Conduct a Trademark Search?",
  description:
    "Choosing a name for your business or product is an exciting milestone, but before you print those business cards or launch your website, you must conduct a trademark search.",
  keywords: ["Conduct a Trademark Search"],
};

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/Conduct a Trademark Search.jpg"
          alt="Blog Banner"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[22px] sm:text-[25px] md:text-[30px] font-bold">
            How to Conduct a Trademark Search?
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 19/12/2025
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px] ">
            Choosing a name for your business or product is an exciting
            milestone, but before you print those business cards or launch your
            website, you must conduct a trademark search. This essential step
            ensures that your proposed brand name, logo, or slogan isn't already
            legally owned by someone else. Skipping this process can lead to
            expensive lawsuits, forced rebranding, and the rejection of your
            trademark application. By taking the time to conduct a trademark
            search early, you save yourself from future headaches and secure
            your intellectual property from day one.
          </p>
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Should You Conduct a Trademark Search?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Many entrepreneurs believe that if a domain name is available or if
            no one is using the name on social media, they are safe. However,
            trademark law is much deeper. The primary goal is to avoid a
            "likelihood of confusion." If your name is phonetically similar or
            visually related to an existing mark in a similar industry, you
            could be infringing.
          </p>
          <h4 className="font-bold text-[16px] sm:text-[18px] md:text-[20px]">
            Conducting a trademark search helps you:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>Identify Direct Conflicts:</b> Find exact matches already
              registered.
            </li>
            <li>
              <b>Common law trademarks </b> used in commerce without
              registration
            </li>
            <li>
              <b>Spot Phonetic Similarities:</b> Uncover names that sound like
              yours (e.g., "Katz" vs. "Cats").
            </li>
            <li>
              <b>Save Money:</b> Avoid filing fees for applications that are
              destined to be rejected.
            </li>
            <li>
              <b>Assess Brand Strength:</b> Determine if your name is too
              "descriptive" or "generic" to be protected.
            </li>
          </ul>
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            5 Essential Steps to Conduct a Trademark Search
          </h2>
          <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 1: Define Your Search Parameters
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before you jump into databases, you need to know exactly what you
            are looking for. Trademarks are categorized by "classes" of goods
            and services. For instance, a "Delta" airline is different from
            "Delta" faucets because they operate in entirely different
            industries.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>Identify Your Class:</b> Use the Nice Classification system to
              find which of the 45 classes your business falls under.
            </li>
            <li>
              <b>List Variations:</b> Don't just search for "Skyline." Search
              for "Sky-Line," "Skylin," and "Skayline."
            </li>
            <li>
              <b>Check Components:</b> If you have a logo, identify the "design
              codes" (like a specific shape or animal) to search for visual
              similarities.
            </li>
          </ul>
          <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 2: Use the USPTO and International Databases
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The most critical place to conduct a trademark search in the United
            States is the USPTO (United States Patent and Trademark Office)
            database.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>TESS (Trademark Electronic Search System)</b>: This is the gold
              standard for federal searches. You can perform a "Basic Word Mark
              Search" to find direct matches or an "Advanced Search" using
              Boolean operators to find partial matches.
            </li>
            <li>
              <b>WIPO Global Brand Database:</b> If you plan to expand globally,
              use the World Intellectual Property Organization’s database. It
              covers millions of records from multiple international
              jurisdictions.
            </li>
            <li>
              <b>State Registries:</b> Some businesses only register at the
              state level. Check the Secretary of State website for the states
              where you plan to operate.
            </li>
          </ul>
          <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 3: Perform a Common Law Search
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is where many people stop, but it is actually the most
            overlooked part of the process. In many regions, "first use" in
            commerce grants rights even without a formal registration. To truly
            conduct a trademark search, you must look beyond government
            databases.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <b>Pro Tip:</b> A "knock-out" search only checks registered marks. A
            "comprehensive" search includes common law rights found in the
            "wild."
          </p>
          <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Check these sources for unregistered marks:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>Search Engines:</b> Use Google or Bing to find businesses using
              similar names in your industry.
            </li>
            <li>
              <b>Social Media:</b> Search Instagram, LinkedIn, and TikTok for
              brand handles.
            </li>
            <li>
              <b>Business Directories:</b> Check Yelp, Yellow Pages, and
              industry-specific registries.
            </li>
            <li>
              <b>Domain Registries:</b> See if similar domains are parked or
              active.
            </li>
          </ul>
          <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 4: Analyze the Results
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Once you have gathered your data, you need to play detective. Just
            because a name exists doesn't mean you can't use yours. You are
            looking for a Likelihood of Confusion.
          </p>
          <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Factors to Consider:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <b>Similarity of the Marks:</b> Are they similar in sound,
              appearance, or meaning?
            </li>
            <li>
              <b>Relatedness of Goods/Services:</b> Would a consumer think both
              products come from the same company?
            </li>
            <li>
              <b>Marketing Channels:</b> Do both brands advertise in the same
              magazines or on the same platforms?
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            If you find a mark that is "confusingly similar," it is often better
            to pivot your brand name now rather than fight a legal battle later.
          </p>
          <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Step 5: Document and Consult a Professional
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            As you conduct a trademark search, keep a detailed log of every term
            you searched and every database you visited. This documentation can
            be helpful if you ever need to prove that you acted in "good faith."
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            While a DIY search is a great starting point, a trademark attorney
            has access to specialized software that can find "hidden" conflicts
            that standard search engines might miss. They can provide a "Legal
            Opinion Letter," which gives you a professional risk assessment of
            your brand’s availability.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Summary Checklist for a Thorough Search
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            To ensure you haven't missed anything, follow this quick checklist:
          </p>

          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Search exact word matches in the USPTO database.</li>
            <li>Search phonetic variations and misspellings.</li>
            <li>Identify your specific International Class (1-45).</li>
            <li>Check WIPO for international conflicts.</li>
            <li>Perform a broad internet search for "Common Law" users.</li>
            <li>Review social media handles and domain names.</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Conducting a trademark search is the foundation of a healthy brand.
            It might feel like a tedious step, but it is the only way to ensure
            that your hard work and marketing dollars are being spent on a name
            you actually own.
          </p>
        </div>
      </section>
      <section className="w-full md:w-[35%] space-y-6 md:space-y-10">
        <section className="bg-[#202F5A] py-4 md:py-5 rounded-2xl">
          <h4 className="text-white text-center text-lg sm:text-xl">Recent Posts</h4>
        <ul className="p-3 sm:p-5 space-y-3 sm:space-y-5">
                    {articles
                      .slice(-5)
                      .reverse()
                      .map((article) => (
                        <Link href={`/articles/${article.slug}`} key={article.slug} className="p-3 sm:p-5 space-y-3 sm:space-y-5">
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
