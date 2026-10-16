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
    title: "EUIPO Trademark Monitoring: Catching European Infringements Before They Escalate",
    description:
        "A practical guide to watching the EU trade mark register, meeting EUIPO deadlines and building an escalation strategy that stops infringement early and cost-effectively.",
    keywords: [
        "EUIPO Trademark Monitoring",
        "EU Trade Mark Watch",
        "EUIPO Opposition Deadline",
        "EUTM Infringement",
        "Madrid System EU Designations",
        "Trademark Watch Service",
    ],
};

const h2 = "text-[20px] sm:text-[22px] md:text-[25px] font-bold";
const h3 = "text-[18px] sm:text-[20px] md:text-[22px] font-bold";
const p = "text-[14px] sm:text-[15px] md:text-[16px]";
const ul = "list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const ol = "list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const table = "w-full text-left border-collapse text-[13px] sm:text-[14px] md:text-[15px]";
const thead = "bg-[#202F5A] text-white";
const th = "p-2 sm:p-3 border border-gray-300";
const td = "p-2 sm:p-3 border border-gray-300";
const tdb = "p-2 sm:p-3 border border-gray-300 font-bold";

const page: React.FC<PageProps> = (props) => {
    return (
        <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
            <section className="w-full md:w-[65%] space-y-5">
                <Image
                    src="/images/S2_EUIPO Trademark Monitoring.jpg"
                    alt="EUIPO Trademark Monitoring: Catching European Infringements Before They Escalate"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                />
                <div className="flex flex-col ">
                    <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
                        EUIPO Trademark Monitoring: Catching European Infringements Before They Escalate
                    </h1>

                    <span className="text-[12px] sm:text-[14px] text-blue-600">
                        Published on 10/16/2026
                    </span>
                </div>
                <div className="space-y-4 sm:space-y-5 text-justify">
                    <p className={`text-justify ${p}`}>
                        A European Union trade mark (EUTM) gives its owner a single, unitary right across all EU Member States. This practical guide from{" "}
                        <a className="text-blue-600 underline hover:no-underline" href="https://effemark.com" target="_blank" rel="noopener noreferrer">
                            EffeMark
                        </a>{" "}
                        explains how to watch the register, meet the deadlines and escalate with purpose.
                    </p>
                    <p className={p}>
                        That reach is also the source of the risk: a conflicting application filed anywhere in the world and designating the EU can threaten the owner&apos;s position across a market of roughly 450 million consumers, and the windows for acting against it are short.
                    </p>
                    <p className={p}>
                        Monitoring is the discipline of watching the register so that those windows are never missed. This article explains why monitoring is indispensable in the EU system, what to watch, the procedural clocks that govern the response, how to assess and triage hits and how to build an escalation strategy that stops infringement early and cost-effectively.
                    </p>

                    <h2 className={h2}>Why Monitoring Matters in the EU System</h2>
                    <p className={p}>
                        Three features of the EU system make passive reliance on registration a mistake.
                    </p>
                    <ul className={ul}>
                        <li><b>No examination on relative grounds:</b> the European Union Intellectual Property Office (EUIPO) examines new applications for absolute grounds (for example, lack of distinctiveness or descriptiveness) but does not refuse an application because it conflicts with an earlier right. Earlier rights are protected only if their owners act. If no one opposes, the conflicting mark proceeds to registration.</li>
                        <li><b>Short, fixed opposition window:</b> opposition is the cheapest and fastest route to stop a conflicting mark, but it must be filed within a defined three-month period after publication. Miss it and the owner is left with the slower, costlier route of an invalidity action.</li>
                        <li><b>Unitary effect cuts both ways:</b> a successful opposition or cancellation removes the conflicting mark for the whole EU (subject to partial outcomes), but a rival&apos;s registration, once established, can block expansion into any Member State.</li>
                    </ul>
                    <p className={p}>
                        <b>Brexit note.</b> Since January 1, 2021, EUTMs no longer cover the United Kingdom. UK rights are handled separately before the UK Intellectual Property Office, and a complete watch strategy for Europe should cover both registers.
                    </p>

                    <h2 className={h2}>What to Monitor</h2>

                    <h3 className={h3}>Registers and Filing Routes</h3>
                    <ul className={ul}>
                        <li>New EUTM applications filed directly with the EUIPO.</li>
                        <li><b>International registrations under the Madrid System</b> that designate the European Union. These appear in EUIPO publications as well as in the WIPO Gazette and are easy to overlook if monitoring covers only direct filings.</li>
                        <li><b>National applications and registrations in Member States,</b> which can be searched through the TMview database and which may be relevant where you hold national rights or where national marks could later be converted or used as the basis for claims.</li>
                        <li><b>Designs and domain names</b> in the same space, since infringers often file multiple types of right around a single brand.</li>
                    </ul>

                    <h3 className={h3}>Beyond the Register</h3>
                    <p className={p}>
                        Register monitoring reveals applications, not use. A complete program also covers online marketplaces, social media, app stores, domain registrations and customs notifications. Under the Digital Services Act, online platforms operating in the EU must provide notice-and-action mechanisms for illegal content, which includes counterfeit listings, so register-based discovery should be paired with marketplace takedown procedures.
                    </p>

                    <h3 className={h3}>What Types of Similarity to Cover</h3>
                    <p className={p}>
                        A good watch is not limited to identical word marks. It should capture:
                    </p>
                    <ul className={ul}>
                        <li><b>Visual similarity:</b> including added or dropped letters, hyphenation and prefix or suffix variations.</li>
                        <li><b>Phonetic similarity:</b> across the main EU languages, since confusion is assessed from the perspective of the relevant public in the territory concerned.</li>
                        <li><b>Conceptual similarity and translations:</b> where a foreign-language equivalent carries the same meaning.</li>
                        <li><b>Figurative and composite marks:</b> those that incorporate or imitate a word or logo element.</li>
                        <li><b>Related goods and services:</b> marks in identical, similar and complementary goods and services across relevant Nice classes, not just the classes in which you are registered.</li>
                    </ul>

                    <h2 className={h2}>The Procedural Clock</h2>
                    <p className={p}>
                        The timetable below summarizes the principal EUIPO deadlines that a monitoring program must be built around. Confirm current fees and time limits with the EUIPO before relying on them, since both are periodically revised.
                    </p>
                    <div className="overflow-x-auto">
                        <table className={table}>
                            <thead>
                                <tr className={thead}>
                                    <th className={th}>Event</th>
                                    <th className={th}>Timing</th>
                                    <th className={th}>Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={tdb}>Publication of the application</td>
                                    <td className={td}>Starts the clock</td>
                                    <td className={td}>Published in the EUTM Bulletin once absolute-grounds examination is passed</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>Opposition period</td>
                                    <td className={td}>Begins one month after publication and runs for three months</td>
                                    <td className={td}>The opposition and fee (currently EUR 320) must reach the EUIPO within this period</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>Cooling-off period</td>
                                    <td className={td}>Two months from notification of admissibility, extendable by agreement up to 24 months in total</td>
                                    <td className={td}>Time for negotiation without further procedural steps or additional fees</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>Request for proof of use</td>
                                    <td className={td}>During the opposition, where the earlier mark has been registered for at least five years</td>
                                    <td className={td}>The opponent must prove genuine use in the relevant territory for the relevant goods and services</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>Appeal of an EUIPO decision</td>
                                    <td className={td}>Notice within two months of notification; statement of grounds within four months</td>
                                    <td className={td}>Appeals go to the Boards of Appeal and then to the EU General Court</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>Invalidity (cancellation) action</td>
                                    <td className={td}>Available after registration</td>
                                    <td className={td}>Grounds include relative grounds (earlier rights) and bad faith; fees and time limits apply</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>Revocation for non-use</td>
                                    <td className={td}>Available once a mark has been registered for five years without genuine use</td>
                                    <td className={td}>Strategic exposure for your own marks as well as a tool against others</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className={p}>
                        Madrid designations follow a closely parallel opposition timetable, counted from the relevant EUIPO publication of the international registration. For these, as for any deadline, the cautious practice is to calendar internal dates well ahead of the formal limit, not on it.
                    </p>

                    <h2 className={h2}>Setting Up an Effective Watch</h2>
                    <ol className={ol}>
                        <li><b>Define the portfolio to protect.</b> List the marks, variants, logos, house marks and sub-brands that carry value, with their classes and registrations, and flag marks in active expansion.</li>
                        <li><b>Choose the search scope.</b> Decide on territories (EUTM, selected national registers, Madrid designations), classes (core and adjacent) and similarity types (identical, phonetic, visual, conceptual, combined).</li>
                        <li><b>Select tools.</b> The EUIPO&apos;s eSearch plus and TMview provide free search; commercial watching services deliver automated alerts and reports. Many owners combine an automated watch with periodic attorney review.</li>
                        <li><b>Set triage tiers.</b> Tier 1 hits (identical or near-identical marks for related goods) get immediate attention. Tier 2 hits (partially similar) are reviewed against a risk matrix. Tier 3 hits are logged for trend analysis.</li>
                        <li><b>Assign ownership and docketing.</b> Each hit needs a named reviewer, a decision deadline well before the opposition window closes and a record of the decision and rationale.</li>
                        <li><b>Review and tune.</b> Reassess terms, classes and thresholds at least annually and after launches or acquisitions, to reduce noise and close gaps.</li>
                    </ol>

                    <h2 className={h2}>Assessing a Conflict</h2>
                    <p className={p}>
                        When a watch returns a hit, the question is whether opposition or another action is warranted and likely to succeed. The principal legal grounds in the EU Trade Mark Regulation (Regulation (EU) 2017/1001) include:
                    </p>
                    <ul className={ul}>
                        <li><b>Article 8(1)(a), double identity:</b> the marks and the goods or services are identical.</li>
                        <li><b>Article 8(1)(b), likelihood of confusion:</b> identity or similarity of the marks together with identity or similarity of goods or services produces a likelihood of confusion for the relevant public, including a likelihood of association. The assessment is global, taking account of the distinctiveness and reputation of the earlier mark, the degree of attention of the relevant consumers and the interdependence of the factors.</li>
                        <li><b>Article 8(5), marks with a reputation:</b> protection can extend beyond similar goods where use of the later mark would take unfair advantage of, or be detrimental to, the distinctive character or repute of the earlier mark.</li>
                        <li><b>Article 8(3), agent or representative filings:</b> an agent or distributor who files the principal&apos;s mark in its own name without consent can be opposed.</li>
                        <li><b>Article 8(4), non-registered marks and signs:</b> unregistered rights of more than mere local significance may support an opposition.</li>
                        <li><b>Article 59, invalidity for bad faith:</b> applications filed in bad faith, such as those filed to block market entry or to exploit another&apos;s reputation, can be declared invalid.</li>
                    </ul>
                    <p className={p}>
                        A short internal memorandum for each serious hit should record the mark comparison, the goods and services comparison, the strength of the earlier mark, any evidence of actual confusion and a candid assessment of strengths and weaknesses. It should also address your own proof-of-use position: if your earlier mark is more than five years old, expect the applicant to request proof and make sure the evidence (dated invoices, advertising, sales data across the relevant territory) is ready before you file.
                    </p>

                    <h2 className={h2}>Escalation Strategies</h2>
                    <p className={p}>
                        Most conflicts are resolved without a decision on the merits. A staged approach keeps costs proportionate.
                    </p>
                    <div className="overflow-x-auto">
                        <table className={table}>
                            <thead>
                                <tr className={thead}>
                                    <th className={th}>Stage</th>
                                    <th className={th}>Typical Action</th>
                                    <th className={th}>Advantages</th>
                                    <th className={th}>Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={tdb}>1. Log and observe</td>
                                    <td className={td}>Record the hit; wait to see if the application proceeds</td>
                                    <td className={td}>Lowest cost</td>
                                    <td className={td}>Never let a deadline lapse while observing</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>2. Letter or call</td>
                                    <td className={td}>Contact the applicant, seek limitation or withdrawal</td>
                                    <td className={td}>Fast; preserves relationships</td>
                                    <td className={td}>May alert the applicant; calendar opposition date regardless</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>3. Opposition</td>
                                    <td className={td}>File within the opposition window, often with a cooling-off request</td>
                                    <td className={td}>Economical; EU-wide effect</td>
                                    <td className={td}>Opposition fee; proof-of-use exposure for your earlier mark</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>4. Coexistence or consent agreement</td>
                                    <td className={td}>Limit goods, territories or presentation</td>
                                    <td className={td}>Certainty and control</td>
                                    <td className={td}>Draft carefully for scope and future expansion</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>5. Invalidity or revocation</td>
                                    <td className={td}>File against a registered EUTM</td>
                                    <td className={td}>Remedy after registration</td>
                                    <td className={td}>More costly; burden of proof can be higher</td>
                                </tr>
                                <tr>
                                    <td className={tdb}>6. Court action and customs</td>
                                    <td className={td}>Infringement action before an EU trade mark court; customs applications for action</td>
                                    <td className={td}>Injunction and damages; border measures against counterfeits</td>
                                    <td className={td}>Venue strategy; evidence and cost</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className={h3}>Using the Cooling-Off Period Well</h3>
                    <p className={p}>
                        A request to open the cooling-off period suspends the opposition without cost and can be extended to 24 months by joint request. It is a useful tool for settlement, but it is also a way to defer rather than decide. Calendar the end date prominently and ensure that settlement talks do not outlast the available extension.
                    </p>

                    <h3 className={h3}>Customs and Online Enforcement</h3>
                    <p className={p}>
                        For goods in transit, an application for action under the EU customs enforcement regulation (Regulation (EU) No 608/2013) lets rights holders ask customs authorities to detain suspected infringing goods. The EUIPO&apos;s IP Enforcement Portal supports the filing and management of these applications and the sharing of information with enforcement authorities. Pair these measures with marketplace notices, which can disable listings quickly.
                    </p>

                    <h2 className={h2}>Common Mistakes</h2>
                    <ul className={ul}>
                        <li><b>Watching only identical marks.</b> Most infringements are variants, not copies.</li>
                        <li><b>Monitoring only the EUTM register.</b> Madrid designations and national filings can be the origin of the conflict.</li>
                        <li><b>Missing the opposition window because the hit was reviewed late.</b> Build internal deadlines weeks ahead of the formal date.</li>
                        <li><b>Neglecting proof-of-use readiness.</b> An opposition that stalls because the earlier mark was unused is both costly and may expose the mark to revocation.</li>
                        <li><b>Uncoordinated global strategy.</b> A settlement in one jurisdiction should consider the positions you hold in others.</li>
                        <li><b>No feedback loop.</b> Outcomes of oppositions should refine watch terms and filing strategy.</li>
                    </ul>

                    <h2 className={h2}>Governance and Reporting</h2>
                    <p className={p}>
                        Effective monitoring is a process, not a subscription. Appoint an accountable owner, define service levels with outside counsel and watch vendors, and report simple metrics to management: number of hits by tier, oppositions filed, success rate, time from hit to decision and cost per resolved conflict. These data justify the budget, show the return on early action and highlight which markets or classes attract the most conflict.
                    </p>

                    <h2 className={h2}>Final Thoughts</h2>
                    <p className={p}>
                        Because the EUIPO leaves the policing of earlier rights to their owners, the strength of an EU trade mark portfolio depends on how well its owners watch the register. A well-scoped watch, tight triage, ready proof of use and a staged escalation plan turn short procedural windows from a hazard into an advantage, allowing infringements to be stopped when they are cheapest to address, before a conflicting mark is registered, launched or imitated across the single market.
                    </p>
                    <p className={p}>
                        At EffeMark, we help organizations combine careful searching, disciplined monitoring, and well-documented enforcement. Whether you need a{" "}
                        <a className="text-blue-600 underline hover:no-underline" href="https://www.effemark.com/trademark-search-services">
                            comprehensive trademark search
                        </a>{" "}
                        before adopting a name or ongoing{" "}
                        <a className="text-blue-600 underline hover:no-underline" href="https://www.effemark.com/trademark-monitoring">
                            trademark monitoring
                        </a>{" "}
                        to protect what you have built, our team is ready to support your brand at every stage.
                    </p>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] italic">
                        This article is provided for general informational purposes only and does not constitute legal advice. Rules, fees and deadlines change; confirm current requirements with the relevant patent or trademark office and qualified counsel before acting.
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
