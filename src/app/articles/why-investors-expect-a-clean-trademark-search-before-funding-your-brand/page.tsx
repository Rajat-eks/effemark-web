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
    title: "Why Investors Expect a Clean Trademark Search Before Funding Your Brand",
    description:
        "Brand risk, due diligence and what founders should prepare. Learn what a clean trademark search means, why investors ask for it, and how to get ready before fundraising.",
    keywords: ["Clean Trademark Search", "Trademark Due Diligence", "Investor Trademark Search", "Trademark Clearance", "Startup Trademark"],
};

const page: React.FC<PageProps> = (props) => {
    return (
        <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
            <section className="w-full md:w-[65%] space-y-5">
                <Image
                    src="/images/S2_Why Investors Expect a Clean Trademark.jpg"
                    alt="Why Investors Expect a Clean Trademark Search Before Funding Your Brand"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                />
                <div className="flex flex-col ">
                    <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
                        Why Investors Expect a Clean Trademark Search Before Funding Your Brand
                    </h1>

                    <span className="text-[12px] sm:text-[14px] text-blue-600">
                        Published on 10/11/2026
                    </span>
                </div>
                <div className="space-y-4 sm:space-y-5 text-justify">
                    <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
                        A founder&apos;s brand is often the first asset an investor can see and the one customers are most likely to remember. Yet it is also an asset that can be taken away by a single cease-and-desist letter. For that reason, experienced investors routinely ask whether the company has conducted a trademark search and what it found before they commit capital. This guide from <a className="text-blue-600 underline hover:no-underline" href="https://effemark.com" target="_blank" rel="noopener noreferrer">EffeMark</a> explains what a &quot;clean&quot; trademark search means, why investors care, what they look for during due diligence and how founders can prepare. It is written for founders, startup counsel and anyone responsible for brand strategy.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        What Is a Trademark Search?
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A trademark search checks whether a proposed name, logo or slogan is available for use and registration. The goal is to uncover earlier marks that might be considered confusingly similar to yours for related goods or services.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Types of Searches
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-[13px] sm:text-[14px] md:text-[15px]">
                            <thead>
                                <tr className="bg-[#202F5A] text-white">
                                    <th className="border border-gray-300 p-2">Search type</th>
                                    <th className="border border-gray-300 p-2">What it covers</th>
                                    <th className="border border-gray-300 p-2">Typical use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-2 font-bold">Knockout (preliminary) search</td>
                                    <td className="border border-gray-300 p-2">Exact and near-exact matches in official registers</td>
                                    <td className="border border-gray-300 p-2">Early name screening before investing in design</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 font-bold">Full search</td>
                                    <td className="border border-gray-300 p-2">Registered and pending marks, phonetic and visual variants, common-law uses, business names, domain names and social handles</td>
                                    <td className="border border-gray-300 p-2">Before launch, filing and fundraising</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 font-bold">Comprehensive/international search</td>
                                    <td className="border border-gray-300 p-2">As above across the key markets where the business will operate</td>
                                    <td className="border border-gray-300 p-2">Cross-border expansion and global funding rounds</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 font-bold">Attorney opinion</td>
                                    <td className="border border-gray-300 p-2">A legal analysis of the search results and risk level</td>
                                    <td className="border border-gray-300 p-2">High-value brands and diligence requests</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        What &quot;Clean&quot; Actually Means
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A clean search does not mean that nothing similar exists anywhere. It generally means that, after review by a qualified professional, no identical or confusingly similar mark owned by someone else was found in the relevant classes, territories and trade channels that would present a material risk of blocking registration or triggering an infringement claim. Reasonable people may disagree on borderline conflicts, so the written analysis matters as much as the raw results.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Why Investors Expect a Clean Trademark Search
                    </h2>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        The Brand Is Part of the Valuation
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        In consumer, software-as-a-service, health and financial products, the brand carries goodwill, customer acquisition spend and, often, the company&apos;s strongest identity. If the name might have to change, that spend and goodwill are at risk.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Rebranding Is Expensive and Disruptive
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Direct costs:</b> new design, packaging, signage, website, app store listings, legal fees and registration.</li>
                        <li><b>Indirect costs:</b> lost search ranking, customer confusion, re-training of sales teams and reprinting of materials.</li>
                        <li><b>Timing costs:</b> forced rebrands tend to arrive at the worst moments, such as a product launch or a growth push.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Legal Exposure
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Trademark infringement claims can lead to injunctions, damages or an account of profits, depending on the jurisdiction. Even an unsuccessful claim consumes time and money. In India, for example, the Trade Marks Act, 1999 provides for infringement and passing-off remedies and courts have granted injunctions in appropriate cases. Similar remedies exist in the US, the EU, the UK and elsewhere.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Representations and Warranties
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Investment documents commonly include a warranty from the company that its use of its intellectual property does not infringe the rights of third parties and that it owns or has the right to use its marks. If a founder cannot support that statement with evidence, the investor may insist on a specific indemnity, a price adjustment or a condition precedent.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Exit Considerations
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        At an acquisition or IPO, the buyer&apos;s diligence will examine trademark ownership and conflicts. A weak brand position found late can reduce price or delay closing. Investors therefore prefer to resolve the issue early.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Signal of Operational Discipline
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A founder who has commissioned a proper search and keeps a trademark portfolio record signals the same discipline the investor hopes to see in finance, compliance and product.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        What Investors Actually Look For in Diligence
                    </h2>
                    <ul className="list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Ownership:</b> are the marks registered or applied for in the company&apos;s name and not in a founder&apos;s personal name or a former agency&apos;s?</li>
                        <li><b>Search evidence:</b> is there a dated search report and a written risk assessment from counsel?</li>
                        <li><b>Scope of protection:</b> do the filings cover the right classes and the right countries for the business plan?</li>
                        <li><b>Distinctiveness:</b> is the mark inherently distinctive (coined or arbitrary), or descriptive and hard to protect?</li>
                        <li><b>Conflicts and disputes:</b> any oppositions, office actions, demand letters or pending litigation.</li>
                        <li><b>Domain names and social handles:</b> are the matching handles controlled by the company?</li>
                        <li><b>Licences and assignments:</b> chain of title, including assignments from founders and contractors.</li>
                        <li><b>Use evidence:</b> documented first use dates and continuous use, which matter for priority in common-law systems.</li>
                        <li><b>Brand architecture:</b> product names, sub-brands and logos that also need clearance.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Common Pitfalls Founders Fall Into
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Relying only on a domain name check.</b> An available domain says nothing about trademark rights.</li>
                        <li><b>Searching only the exact name.</b> Similar-sounding or similar-looking marks can still conflict.</li>
                        <li><b>Searching in only one country.</b> Trademark rights are territorial and a clean result in one country does not carry over to others.</li>
                        <li><b>Ignoring classes.</b> Conflicts depend on goods and services. A clash in a related class can be as serious as one in the same class.</li>
                        <li><b>Ignoring unregistered rights.</b> Prior users may hold enforceable rights without registration, for example under passing-off in India and common-law rights in the US.</li>
                        <li><b>Treating a search as a one-time event.</b> New filings appear all the time, so refresh the search close to launch and before key filings.</li>
                        <li><b>Using a name that is merely descriptive.</b> Even if no one else uses it, the registry may refuse it.</li>
                        <li><b>Adopting a name tied to a former employer or partner</b> without a written assignment.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        A Practical Clearance Process
                    </h2>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 1: Shortlist Candidates
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Create three to five name candidates. Prefer coined, arbitrary or suggestive names over descriptive ones, since they are generally easier to register and enforce.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 2: Run Knockout Searches
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Use the official databases (for India, the IP India public search; for the US, the USPTO trademark search system; for the EU, the EUIPO TMview and eSearch plus tools) and WIPO&apos;s Global Brand Database. Discard obvious conflicts.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 3: Commission a Full Search
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        For the chosen name, order a full search covering registers, common-law sources, company names and domains in all priority markets. A professional service like <a className="text-blue-600 underline hover:no-underline" href="https://www.effemark.com/trademark-search-services" target="_blank" rel="noopener noreferrer">EffeMark&apos;s trademark search services</a> goes well beyond what free tools can show.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 4: Obtain a Written Opinion
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Ask a trademark attorney to assess likelihood of confusion, descriptiveness and risk level and to identify mitigating options such as co-existence agreements or modified spelling.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 5: File Early
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        File applications in the main markets as soon as the name is cleared. In many jurisdictions, rights depend on filing priority. Consider the Madrid Protocol for multi-country filing and note that priority under the Paris Convention generally lasts six months from the first filing.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 6: Document and Monitor
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Store the search report, opinion and filings in the data room. Set up a watch service, such as <a className="text-blue-600 underline hover:no-underline" href="https://www.effemark.com/trademark-monitoring" target="_blank" rel="noopener noreferrer">trademark monitoring</a>, to catch later conflicting filings.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Reading the Results: Risk Levels
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-[13px] sm:text-[14px] md:text-[15px]">
                            <thead>
                                <tr className="bg-[#202F5A] text-white">
                                    <th className="border border-gray-300 p-2">Risk level</th>
                                    <th className="border border-gray-300 p-2">Typical finding</th>
                                    <th className="border border-gray-300 p-2">Common response</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-2 font-bold">Low</td>
                                    <td className="border border-gray-300 p-2">No similar marks in relevant classes; only remote similarities</td>
                                    <td className="border border-gray-300 p-2">Proceed and file</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 font-bold">Moderate</td>
                                    <td className="border border-gray-300 p-2">Similar marks in related classes or in a different market</td>
                                    <td className="border border-gray-300 p-2">Narrow the specification, add a distinguishing element or seek consent</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-2 font-bold">High</td>
                                    <td className="border border-gray-300 p-2">Identical or near-identical mark for the same or similar goods</td>
                                    <td className="border border-gray-300 p-2">Choose a different mark or negotiate a purchase or licence</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                            <b>Founder tip:</b> If the search reveals a conflict, tell your investors early with your mitigation plan. Investors are much more tolerant of a known, managed risk than of one they uncover themselves in diligence.
                        </p>
                    </div>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        What to Put in the Data Room
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Trademark portfolio schedule: mark, jurisdiction, class, filing number, status, owner and renewal dates</li>
                        <li>Search reports and the attorney&apos;s opinion letter</li>
                        <li>Assignments from founders, employees and agencies</li>
                        <li>Correspondence with registries, including office actions and responses</li>
                        <li>Any coexistence agreements, licences, demand letters or settlements</li>
                        <li>Domain name and social media account ownership records</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        What If You Are Already Using the Brand?
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Many startups have been trading for a while before fundraising. If the name has not been searched, do it now. If conflicts exist, evaluate whether your use predates the other party&apos;s rights, whether the markets and goods are meaningfully different and whether a phased transition or a coexistence agreement is realistic. A candid approach and a documented plan will serve you better than silence.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Final Thoughts
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Investors expect a clean trademark search because the cost of getting it wrong falls on the company they are funding. A documented, professionally reviewed search shows that the brand can be owned, defended and carried through to exit. Starting early, searching broadly, filing promptly and keeping records is inexpensive compared with the cost of a forced rebrand and it removes a common obstacle in diligence.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        At EffeMark, we help founders and brand owners prepare for funding with a <a className="text-blue-600 underline hover:no-underline" href="https://www.effemark.com/trademark-search-services">comprehensive trademark search</a> and ongoing monitoring, so your brand is ready when the investor asks.
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
