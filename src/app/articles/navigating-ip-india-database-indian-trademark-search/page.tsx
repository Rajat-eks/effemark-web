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
    title: "Navigating IP India Database Indian Trademark Search",
    description:
        "Protecting your brand in India begins with one essential step: conducting a thorough Indian trademark search.",
    keywords: ["Indian Trademark Search", "IP India", "IP India Database", "Trademark Search India"],
};

const page: React.FC<PageProps> = (props) => {
    return (
        <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
            <section className="w-full md:w-[65%] space-y-5">
                <Image
                    src="/images/Indian Trademark Search.jpg"
                    alt="Navigating IP India Database Indian Trademark Search"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                />
                <div className="flex flex-col ">
                    <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
                        Navigating IP India Database Indian Trademark Search
                    </h1>

                    <span className="text-[12px] sm:text-[14px] text-blue-600">
                        Published on 10/03/2026
                    </span>
                </div>
                <div className="space-y-4 sm:space-y-5 text-justify">
                    <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
                        Protecting your brand in India begins with one essential step: conducting a thorough Indian trademark search. Before you file a trademark application, you need to verify that your brand name, logo, or slogan is not already registered or applied for by someone else. The official gateway for this is the <a className="text-blue-600 underline hover:no-underline" href="https://ipindiaonline.gov.in" target="_blank" rel="noopener noreferrer">IP India database</a>, maintained by the Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM). If you skip this step, you risk rejection, legal disputes, or even losing your brand identity altogether. At <a className="text-blue-600 underline hover:no-underline" href="https://effemark.com" target="_blank" rel="noopener noreferrer">EffeMark</a>, we help businesses navigate this process with precision and confidence, offering <a className="text-blue-600 underline hover:no-underline" href="https://www.effemark.com/trademark-search-services" target="_blank" rel="noopener noreferrer">professional trademark search services</a> and <a href="https://www.effemark.com/trademark-monitoring" className="text-blue-600 underline hover:no-underline" target="_blank" rel="noopener noreferrer">trademark monitoring</a> to safeguard your intellectual property from day one.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        What Is the IP India Trademark Database?
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The IP India database is a publicly accessible online portal where you can search all trademark applications and registrations filed in India. It is hosted at ipindiaonline.gov.in and serves as the official record of all trademarks in India across all 45 classes of goods and services.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>Read Also:</b>{" "}
                        <Link
                            href="/articles/understanding-classes-explained-trademark-classification-system"
                            className="text-blue-600 underline hover:no-underline"
                        >
                            Understanding All 45 Classes Explained Trademark Classification System
                        </Link>
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The database is updated regularly and includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Trademarks that are registered, pending, abandoned, or refused</li>
                        <li>Device marks (logo-based marks) and word marks</li>
                        <li>The name and address of applicants and trademark owners</li>
                        <li>Application dates, registration numbers, and current status</li>
                        <li>Associated trademark classes and descriptions of goods/services</li>
                    </ul>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Understanding this database is the foundation of any successful indian trademark search. Whether you are a startup, an established business, or an individual entrepreneur, checking this database before filing saves time, money, and legal headaches.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        How to Perform an Indian Trademark Search on IP India?
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The IP India portal offers multiple search options, and knowing how to use each one correctly makes a significant difference in the quality of your results.
                    </p>
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step-by-Step Search Process
                    </h3>
                    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
                        Step 1: Visit the Official Portal
                    </h4>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Go to <a className="text-blue-600 underline hover:no-underline" href="https://ipindiaonline.gov.in" target="_blank" rel="noopener noreferrer">https://ipindiaonline.gov.in</a> and navigate to the &quot;Trade Mark&quot; section. Click on &quot;Trade Mark Search&quot; to access the public search tool.
                    </p>
                    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
                        Step 2: Choose Your Search Type
                    </h4>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The portal provides several search methods:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Wordmark Search</b> – Search by the exact word or name you want to register</li>
                        <li><b>Phonetic Search</b> – Finds trademarks that sound similar to your keyword (very useful for detecting phonetic conflicts)</li>
                        <li><b>Vienna Code Search</b> – Used for logo/device mark searches based on visual elements</li>
                        <li><b>Goods/Services Search</b> – Narrow your search by specific product or service descriptions</li>
                        <li><b>Class Search</b> – Filter by the relevant trademark class (1 to 45)</li>
                    </ul>
                    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
                        Step 3: Select the Correct Trademark Class
                    </h4>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        India follows the NICE Classification system, which divides all goods and services into 45 classes. For example, Class 25 covers clothing, Class 35 covers advertising and business services, and Class 42 covers scientific and technological services. Choosing the right class is critical in any indian trademark search because a conflict is evaluated within the same or similar class.
                    </p>
                    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
                        Step 4: Analyze the Results
                    </h4>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Review the results carefully. Look not just for identical matches but also for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Similar spellings or pronunciations</li>
                        <li>Same or related goods/services</li>
                        <li>Marks that have been abandoned but may still create confusion</li>
                        <li>Marks in &quot;objected&quot; or &quot;opposed&quot; status</li>
                    </ul>
                    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
                        Step 5: Note Application Numbers and Statuses
                    </h4>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Every trademark in the database has a unique application number. Note these details for reference, especially if you find a potentially conflicting mark and want to investigate further.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Understanding Trademark Statuses in the IP India Database
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        One of the most confusing parts of doing an Indian Trademark Search is interpreting the status of existing trademarks. Here is a breakdown of what the common statuses mean:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Registered</b> – The mark is fully protected and active under the Trade Marks Act, 1999</li>
                        <li><b>Accepted and Advertised</b> – The mark has cleared examination and is published in the Trademark Journal for opposition</li>
                        <li><b>Objected</b> – The examiner has raised concerns; the applicant must respond with arguments</li>
                        <li><b>Opposed</b> – A third party has challenged the application</li>
                        <li><b>Abandoned</b> – The applicant did not respond or follow up; the mark is no longer active</li>
                        <li><b>Refused</b> – The application was formally rejected by the trademark office</li>
                        <li><b>Withdrawn</b> – The applicant voluntarily gave up the application</li>
                    </ul>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Even abandoned or refused marks are visible in your search results, and while they are not protected, their existence can be used as prior art or cited in disputes. This is why a surface-level indian trademark search is never enough. You need professional eyes to interpret these findings correctly.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Why a Manual Search Is Not Always Enough?
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Many business owners do a quick search, see no exact match, and assume they are safe to file. This approach is risky. The IP India portal has limitations that can cause you to miss critical conflicts.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The database does not always flag phonetically similar marks automatically. It also does not check across related classes unless you do so manually. Additionally, domain names, company names registered under the Ministry of Corporate Affairs (MCA), and common law trademark rights are not reflected in the IP India portal.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        This is where professional trademark search services become invaluable. EffeMark&apos;s trademark search services go beyond the basic IP India portal search. Our team conducts a comprehensive analysis that includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Identical and phonetically similar mark screening</li>
                        <li>Cross-class and related-class conflict checks</li>
                        <li>Common law usage research</li>
                        <li>Domain and business name conflict review</li>
                        <li>Detailed written search report with risk assessment</li>
                    </ul>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A professional Indian trademark search gives you a clear, actionable picture before you invest in filing fees and branding costs.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        The Role of Trademark Monitoring After Registration
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Filing a trademark is not a one-time task. Once your mark is registered, the real challenge is keeping it protected. In a growing market like India, new applications are filed every day. A competitor, even unknowingly, could file a mark that conflicts with yours.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        This is where trademark monitoring becomes essential. EffeMark&apos;s monitoring service continuously watches the IP India database and alerts you whenever a new application resembles your registered mark. This gives you the opportunity to file an opposition before the conflicting mark gets registered.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Without monitoring, you could discover a conflict months or years later, at which point the legal battle is far more expensive and uncertain. Proactive monitoring is the smart, cost-effective way to maintain the strength and exclusivity of your brand.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Common Mistakes to Avoid During Indian Trademark Search
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Even experienced filers make errors that weaken their applications. Here are the most frequent mistakes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Searching only for exact matches instead of phonetic or visual similarities</li>
                        <li>Ignoring related classes that cover overlapping goods or services</li>
                        <li>Not checking device marks when registering a logo alongside a word mark</li>
                        <li>Filing without professional review, which leads to objections and delays</li>
                        <li>Neglecting to monitor after registration, leaving the mark vulnerable to infringement</li>
                    </ul>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Avoiding these mistakes starts with understanding the full scope of the Indian trademark search process, which goes well beyond a five-minute portal check.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Final Thoughts
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The IP India database is a powerful tool, but using it effectively requires knowledge, attention to detail, and professional interpretation. Whether you are filing your first trademark or managing an entire brand portfolio, conducting a thorough Indian trademark search is the single most important step you can take to protect your intellectual property.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        At EffeMark, we combine deep expertise with a client-first approach to make trademark protection simple, reliable, and affordable. From your initial search to long-term monitoring, we are your partner at every stage of the trademark journey. Reach out today and take the first step toward building a brand that is truly protected.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>Follow Us:</b>{" "}
                        <a
                            href="https://www.linkedin.com/company/effemark"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:no-underline"
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
