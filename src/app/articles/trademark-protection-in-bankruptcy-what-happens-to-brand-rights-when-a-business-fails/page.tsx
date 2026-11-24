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
    title: "Trademark Protection in Bankruptcy: What Happens to Brand Rights When a Business Fails?",
    description:
        "How trademarks are treated in bankruptcy: estate property, the automatic stay, trademark licenses after Mission Product Holdings v. Tempnology, brand sales, abandonment risk, secured lenders, and practical steps for each party.",
    keywords: [
        "Trademark Bankruptcy",
        "Trademark License Rejection",
        "Mission Product Holdings v. Tempnology",
        "Section 363 Brand Sale",
        "Trademark Abandonment",
        "Trademark Security Interest",
    ],
};

const page: React.FC<PageProps> = (props) => {
    return (
        <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
            <section className="w-full md:w-[65%] space-y-5">
                <Image
                    src="/images/S1_Trademark Protection in Bankruptcy.jpg"
                    alt="Trademark Protection in Bankruptcy: What Happens to Brand Rights When a Business Fails?"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                />
                <div className="flex flex-col ">
                    <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
                        Trademark Protection in Bankruptcy: What Happens to Brand Rights When a Business Fails?
                    </h1>

                    <span className="text-[12px] sm:text-[14px] text-blue-600">
                        Published on 24/11/2026
                    </span>
                </div>
                <div className="space-y-4 sm:space-y-5 text-justify">
                    <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
                        For many businesses the brand is the most valuable asset left when operations stop. Customers recognise the name, the logo and the goodwill attached to them long after the stores close or the product line is discontinued. When a company enters bankruptcy, its trademarks do not simply disappear, but they are not safe either. They can be sold, licensed, abandoned, lost for non-use or taken by creditors, and the rules that govern each outcome differ from those governing patents and copyrights.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        This article explains, mainly from a United States perspective, what happens to trademark rights in bankruptcy. It covers the status of trademarks as estate property, the unusual treatment of trademark licenses, the sale of brands, secured lenders, abandonment risk and practical steps for each party, with a short look at other jurisdictions at the end.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Trademarks as Property of the Bankruptcy Estate
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        When a bankruptcy case begins, the debtor&apos;s property becomes the bankruptcy estate under section 541 of the Bankruptcy Code. That includes registered and unregistered marks, pending applications, the goodwill they represent, related domain names and social media handles, and the debtor&apos;s rights as licensor or licensee.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Two features of trademark law shape everything that follows:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Rights come from use, not registration.</b> A mark that is no longer used in commerce can be treated as abandoned.</li>
                        <li><b>A mark is inseparable from its goodwill.</b> Under the Lanham Act (15 U.S.C. § 1060), a mark may be assigned only with the goodwill of the business connected with it. An &quot;assignment in gross&quot;, meaning a transfer of the bare name without the associated goodwill, risks invalidating the mark.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        The Automatic Stay
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Filing a bankruptcy petition triggers the automatic stay (11 U.S.C. § 362). The stay generally halts infringement suits against the debtor, opposition and cancellation proceedings against the debtor&apos;s marks, and collection actions. It does not necessarily stop the debtor from enforcing its own marks, and a debtor in possession or trustee can continue to sue infringers. Third parties may ask the court to lift the stay for cause.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Chapter 7, Chapter 11 and Chapter 13
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-[13px] sm:text-[14px] md:text-[15px]">
                            <thead>
                                <tr className="bg-[#202F5A] text-white">
                                    <th className="p-2 sm:p-3 border border-gray-300">Chapter</th>
                                    <th className="p-2 sm:p-3 border border-gray-300">Typical situation</th>
                                    <th className="p-2 sm:p-3 border border-gray-300">What usually happens to the brand</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Chapter 7 (liquidation)</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">The business ceases operating and a trustee sells assets</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">The trustee may sell the marks and goodwill to a buyer. If not sold, the marks risk abandonment through non-use</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Chapter 11 (reorganisation)</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">The business tries to continue operating and restructure debts</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">The debtor in possession usually keeps using the marks, and may license or sell them under a plan or in a section 363 sale</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Chapter 13 or individual cases</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">A sole proprietor or individual debtor</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Marks used in the debtor&apos;s business remain estate property, and the debtor generally keeps operating</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>Practical takeaway:</b> in every chapter, the central question is whether anyone continues to use the mark, and whether the goodwill moves with it.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Trademark Licenses in Bankruptcy
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Licensing is where trademark and bankruptcy law interact most sharply. A debtor may be the licensor (it granted rights to someone else) or the licensee (it uses someone else&apos;s mark). Under section 365 of the Bankruptcy Code, a trustee or debtor in possession may assume or reject executory contracts, and a license typically is one.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Why Trademarks Were Treated Differently
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Section 365(n) protects licensees of certain intellectual property when the licensor rejects the license, allowing them to keep using the licensed rights. But the Code&apos;s definition of &quot;intellectual property&quot; (11 U.S.C. § 101(35A)) lists trade secrets, patents, copyrights and similar rights, and omits trademarks. For years that omission led courts to divide over whether rejecting a trademark license terminated the licensee&apos;s right to use the mark. The Fourth Circuit in Lubrizol (a technology license case) held that rejection could strip a licensee of its rights, and the Seventh Circuit in Sunbeam took the opposite approach for trademark licenses.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Mission Product Holdings v. Tempnology (2019)
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The Supreme Court resolved the dispute in Mission Product Holdings, Inc. v. Tempnology, LLC (2019). It held that a debtor&apos;s rejection of an executory contract under section 365 operates as a breach, not as a rescission. The rejection does not terminate the contract or revoke rights the licensee already received. As a result, a licensee whose trademark license is rejected generally keeps the right to use the mark for the license term, and has a claim for damages for the breach.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The practical consequences are significant:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Licensees are in a stronger position than before,</b> although they may still have only an unsecured damages claim and may have to keep complying with the license terms.</li>
                        <li><b>Licensors cannot use rejection alone to escape a license.</b> A debtor that wants to free a brand from a license has to negotiate, or rely on a different contractual or statutory right.</li>
                        <li><b>Quality control remains essential.</b> Trademark law requires the licensor to supervise the quality of goods or services sold under the mark. A licensor in bankruptcy that stops policing quality risks a finding of &quot;naked licensing&quot; and loss of rights. The Court noted that the licensor&apos;s obligation to monitor continues as long as the license does, and that a licensee who fails to meet quality standards is in breach.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        When the Debtor Is the Licensee
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A debtor that licenses a brand from someone else may assume the license (curing defaults and providing adequate assurance of future performance) or reject it. Many trademark licenses, especially exclusive ones, are treated as non-assignable without the licensor&apos;s consent, so a debtor may be unable to assign the license in a sale of its business without that consent. Franchisees face similar issues, and franchise agreements typically have their own termination triggers.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Selling the Brand in Bankruptcy
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Brands are frequently the most marketable assets in a failing retail or consumer business. A trustee or debtor in possession may sell them outside the ordinary course under section 363(b) with court approval, often by auction with a &quot;stalking horse&quot; bidder. A sale can be made free and clear of liens and certain interests under section 363(f), if its conditions are met.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        What a Buyer Should Acquire
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A buyer that wants to continue using a brand should not buy the name and registrations alone. A defensible purchase generally includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>The registered and unregistered marks, pending applications, and all related goodwill.</li>
                        <li>Domain names, social media accounts, product specifications, recipes or formulas, supplier and customer information, and marketing materials.</li>
                        <li>The right to sue for past infringement, if wanted.</li>
                        <li>Licenses in and out that the buyer intends to keep, with any needed consents.</li>
                        <li>Evidence of continuity: the same or substantially similar goods or services, to avoid an assignment in gross challenge.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Intent-to-Use Applications
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A buyer should also take care with intent-to-use (ITU) applications. Under 15 U.S.C. § 1060(a)(1), an ITU application cannot be assigned before an allegation of use is filed, except to a successor to the applicant&apos;s business, or the portion of it to which the mark pertains, if that business is ongoing and existing. Where the sale transfers the business or the relevant portion of it, this exception can apply, but the transaction needs careful structuring.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Customer Lists and Personal Data
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Customer lists and personal data attached to a brand raise separate issues. Where the debtor promised in its privacy policy not to transfer personal information, section 363(b)(1) can require the appointment of a consumer privacy ombudsman.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Abandonment and Loss Through Non-Use
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A trademark is considered abandoned when use has been discontinued with intent not to resume. Under 15 U.S.C. § 1127, non-use for three consecutive years is prima facie evidence of abandonment, but abandonment can also be shown earlier if there is evidence of intent not to resume use. A bankruptcy trustee that closes a business and does nothing with the brand for years is therefore giving up the asset, even if the registration remains on the register.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Registrations also have maintenance deadlines. In the United States, a Section 8 declaration of use is due between the fifth and sixth years after registration, and again, together with renewal, in each ten-year period. Missing these deadlines cancels or expires the registration. A trustee or buyer should calendar these dates immediately.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] border-l-4 border-[#202F5A] pl-4">
                        <b>Key point:</b> registration deadlines and use requirements do not pause during bankruptcy just because the automatic stay is in force. A brand that is not sold, used or maintained can still be lost.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Secured Creditors and Trademarks
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Lenders often take a security interest in all the borrower&apos;s assets, including trademarks. In most United States cases, a security interest in trademarks is perfected by filing a UCC-1 financing statement, because the Lanham Act&apos;s recording provisions deal with assignments and do not displace Article 9 for security interests. Recording a security interest at the USPTO may add public notice, but does not by itself perfect it. If the secured creditor is perfected, it has priority over unsecured creditors in the value of the brand, and can bid on it in a sale, including by credit bidding in appropriate cases.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Lenders should remember that a mark cannot be enforced or foreclosed on as if it were a bare asset. A lender that wants to realise value must be prepared to transfer the goodwill and maintain quality, or the collateral can lose much of its worth.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Practical Guidance for Each Party
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-[13px] sm:text-[14px] md:text-[15px]">
                            <thead>
                                <tr className="bg-[#202F5A] text-white">
                                    <th className="p-2 sm:p-3 border border-gray-300">Party</th>
                                    <th className="p-2 sm:p-3 border border-gray-300">Recommended steps</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Debtor / trustee</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Inventory all marks, domains and licenses. Maintain registrations and monitor deadlines. Keep policing quality where licenses continue. Consider early marketing of the brand. Avoid transfers without goodwill.</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Licensee of a debtor&apos;s mark</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Review the license for termination, assignment and quality-control terms. Keep paying royalties and meeting quality standards. File a proof of claim for damages if the license is rejected. Consider seeking to buy the mark.</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Licensor that becomes a debtor</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Continue quality control. Understand that rejection is a breach, not a termination. Negotiate rather than rely on rejection alone.</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Prospective buyer</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Perform trademark due diligence: chain of title, liens, licenses, abandonment risk, and pending proceedings. Buy goodwill and related assets. Plan for use of the mark immediately after closing.</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Secured lender</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Perfect under the UCC and consider recording at the USPTO. Monitor maintenance deadlines. Plan the exit with continuity of goodwill in mind.</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Competitors and third parties</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Watch for lapsed marks, but avoid adopting a brand too early. Abandonment is fact-specific and a successor may emerge.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Other Jurisdictions
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The details vary by country, but the underlying principles are similar.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>India.</b> Trademarks are governed by the Trade Marks Act, 1999, which allows assignment with or without goodwill subject to conditions, and the Insolvency and Bankruptcy Code, 2016 treats a corporate debtor&apos;s trademarks as part of its assets that can be dealt with in a resolution plan or liquidation.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>United Kingdom and European Union.</b> Trademarks are property that an administrator or liquidator can sell, and non-use for five years can expose a registration to revocation.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>Cross-border businesses.</b> Check each jurisdiction, because the insolvency law, the trademark law and the effect of recognition of foreign proceedings can all differ.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Conclusion
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        When a business fails, its brand rights survive only if someone handles them deliberately. Trademarks are estate property, but they depend on use and goodwill, and their value can erode quickly. After Tempnology, licensees have more security, but licensors and trustees still have to supervise quality. Buyers must obtain goodwill along with the registrations, and lenders must perfect their interests and keep the brand alive. Early planning gives the greatest chance of preserving brand value, whether the outcome is a reorganisation or a sale.
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
