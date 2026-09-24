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
    title: "Trademark Due Diligence in M&A: Why a Deep Search Is Non-Negotiable",
    description:
        "A complete guide to trademark due diligence in M&A: what's at stake, why surface-level searches fail, the core components of deep diligence, deal-structure implications, and timing considerations.",
    keywords: [
        "Trademark Due Diligence",
        "M&A Trademark Search",
        "Chain of Title Trademark",
        "Trademark Clearance Search",
        "IP Due Diligence",
        "Trademark Indemnification",
    ],
};

const page: React.FC<PageProps> = (props) => {
    return (
        <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
            <section className="w-full md:w-[65%] space-y-5">
                <Image
                    src="/images/S1_Trademark Due Diligence.jpg"
                    alt="Trademark Due Diligence in M&A: Why a Deep Search Is Non-Negotiable"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                />
                <div className="flex flex-col ">
                    <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
                        Trademark Due Diligence in M&A: Why a Deep Search Is Non-Negotiable
                    </h1>

                    <span className="text-[12px] sm:text-[14px] text-blue-600">
                        Published on 09/24/2026
                    </span>
                </div>
                <div className="space-y-4 sm:space-y-5 text-justify">
                    <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
                        This guide from{" "}
                        <a className="text-blue-600 underline hover:no-underline" href="https://effemark.com" target="_blank" rel="noopener noreferrer">
                            EffeMark
                        </a>{" "}
                        walks through why trademarks are frequently the most valuable and most underexamined assets in a deal, why a surface-level search leaves acquirers exposed, the eight core components of a deep trademark investigation, how findings should shape deal terms, and why diligence timing matters.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        What&apos;s at Stake
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        In many deals, the trademark portfolio is inseparable from the value being acquired. This is especially true in consumer-facing industries - retail, food and beverage, consumer tech, pharmaceuticals, fashion - where brand equity can constitute a substantial share of purchase price. If the trademark rights underlying that brand are weaker than assumed, the acquirer may be paying for something it cannot fully own or defend.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Key risks include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><span className="font-bold">Title defects</span> - the seller doesn&apos;t actually own clear title to marks it claims to hold.</li>
                        <li><span className="font-bold">Chain-of-title gaps</span> - missing assignment records, especially after prior corporate restructurings, spinoffs, or asset sales.</li>
                        <li><span className="font-bold">Third-party infringement exposure</span> - the seller&apos;s use of a mark already conflicts with a senior user&apos;s rights.</li>
                        <li><span className="font-bold">Registration vulnerabilities</span> - marks that are abandoned, subject to non-use cancellation, or improperly maintained.</li>
                        <li><span className="font-bold">Licensing entanglements</span> - outbound or inbound licenses with restrictive terms, exclusivity grants, or change-of-control provisions that could be triggered by the transaction.</li>
                        <li><span className="font-bold">Geographic gaps</span> - strong rights in some jurisdictions but weak or nonexistent protection in markets the buyer intends to expand into.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Why a Surface-Level Search Isn&apos;t Enough
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A basic trademark availability search - checking whether the exact mark is registered in the relevant jurisdiction - only scratches the surface. It typically misses the layers below.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-[13px] sm:text-[14px] md:text-[15px]">
                            <thead>
                                <tr className="bg-[#202F5A] text-white">
                                    <th className="p-2 sm:p-3 border border-gray-300">What Gets Missed</th>
                                    <th className="p-2 sm:p-3 border border-gray-300">Why It Matters</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Common law rights</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">In the U.S. and other common-law jurisdictions, rights can arise from use alone, without registration - invisible to a shallow database search.</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Confusingly similar marks</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Marks that are phonetically, visually, or conceptually similar are a major source of post-closing litigation and require a trained eye, not an exact-match query.</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Related goods and services</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">A mark cleared in one class can still infringe a senior mark in a related class if consumers would assume a common source.</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Domains, handles, and trade dress</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Brand value now extends well beyond the trademark register, into domain portfolios, social handles, and app store listings.</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Foreign filings and treaties</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Brand protection is jurisdictional; rights don&apos;t automatically follow the business across borders under Madrid Protocol or regional systems like the EUIPO.</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Litigation and opposition history</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Past or pending disputes and cease-and-desist correspondence can reveal latent exposure that hasn&apos;t yet crystallized into litigation.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Core Components of Deep Trademark Diligence
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><span className="font-bold">Ownership and chain-of-title verification.</span> Confirm the seller has clear, unencumbered title to every mark, tracing assignments back through any prior transactions, name changes, or corporate reorganizations.</li>
                        <li><span className="font-bold">Registration status and maintenance review.</span> Verify registrations are active, properly renewed, and that required use/maintenance filings have been timely made.</li>
                        <li><span className="font-bold">Comprehensive clearance search.</span> Go beyond exact-match registry searches to cover common law use, similar marks, related goods/services classes, and design/logo similarity for stylized marks.</li>
                        <li><span className="font-bold">Encumbrance and license review.</span> Identify security interests, liens, co-existence agreements, consent agreements, or license grants, with particular attention to exclusivity and change-of-control clauses.</li>
                        <li><span className="font-bold">Use verification.</span> Confirm the marks are actually in use as registered, in the form registered, and on the goods/services listed.</li>
                        <li><span className="font-bold">Contract and agreement audit.</span> Review licenses, coexistence agreements, and settlement agreements for assignability, most-favored-terms provisions, and restrictions that might survive the deal.</li>
                        <li><span className="font-bold">Online and marketplace presence audit.</span> Map domain names, social accounts, marketplace storefronts, and app listings tied to the brand, confirming ownership and transferability.</li>
                        <li><span className="font-bold">Litigation and dispute history.</span> Pull litigation records, TTAB (or equivalent foreign tribunal) proceedings, and documented cease-and-desist correspondence.</li>
                    </ol>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Deal-Structure Implications
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        What diligence uncovers should directly shape deal terms, not just sit in a due diligence binder:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Representations and warranties should be tailored to the specific risks identified rather than relying on boilerplate IP reps.</li>
                        <li>Indemnification provisions can be scoped to cover known or suspected weaknesses, with escrow holdbacks tied to specific unresolved issues.</li>
                        <li>Purchase price adjustments may be warranted where core brand assets carry more risk or narrower geographic protection than initially assumed.</li>
                        <li>Closing conditions can require remediation of specific defects, such as completing a missing assignment recordation or curing a lapsed renewal.</li>
                        <li>Post-closing covenants can obligate the seller to cooperate on completing assignments, responding to office actions, or resolving pending disputes that transfer with the marks.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Timing Considerations
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Trademark diligence should begin early enough in the deal timeline to influence structure and pricing, not just confirm assumptions after terms are largely set. Registry and litigation searches can take time to return complete results, particularly across multiple jurisdictions, and gaps discovered late in the process create pressure to either accept unresolved risk or delay closing - neither of which serves either party well.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Bottom Line
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Trademark due diligence is not a formality to be completed alongside patent and copyright checks - it requires its own dedicated, deep investigation because trademark rights are uniquely dependent on use, reputation, and jurisdiction-specific law in ways other IP rights are not. A deal that treats trademark diligence as a database lookup rather than a substantive investigation risks discovering, post-closing, that the brand it paid for isn&apos;t as solid, as clear, or as protectable as it appeared on paper. At EffeMark, we help acquirers run{" "}
                        <a className="text-blue-600 underline hover:no-underline" href="https://www.effemark.com/trademark-search-services">
                            comprehensive trademark clearance searches
                        </a>{" "}
                        and structure deal-ready{" "}
                        <a className="text-blue-600 underline hover:no-underline" href="https://www.effemark.com/trademark-monitoring">
                            trademark monitoring
                        </a>{" "}
                        for the brands they acquire.
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
