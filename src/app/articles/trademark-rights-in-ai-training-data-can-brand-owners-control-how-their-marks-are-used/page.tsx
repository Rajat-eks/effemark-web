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
    title: "Trademark Rights in AI Training Data: Can Brand Owners Control How Their Marks Are Used?",
    description:
        "What trademark law can and cannot do about AI models trained on brand-rich data: why training is a poor fit for trademark claims, where output-based claims gain traction, key cases such as Getty Images v. Stability AI, and practical steps for brand owners and AI developers.",
    keywords: [
        "Trademark AI Training Data",
        "AI Trademark Infringement",
        "Getty Images v. Stability AI",
        "Hallucinated Attribution",
        "Jack Daniel's v. VIP Products",
        "Brand Protection Generative AI",
    ],
};

const page: React.FC<PageProps> = (props) => {
    return (
        <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
            <section className="w-full md:w-[65%] space-y-5">
                <Image
                    src="/images/S1_Trademark Rights in AI Training Data.jpg"
                    alt="Trademark Rights in AI Training Data: Can Brand Owners Control How Their Marks Are Used?"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                />
                <div className="flex flex-col ">
                    <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
                        Trademark Rights in AI Training Data: Can Brand Owners Control How Their Marks Are Used?
                    </h1>

                    <span className="text-[12px] sm:text-[14px] text-blue-600">
                        Published on 26/11/2026
                    </span>
                </div>
                <div className="space-y-4 sm:space-y-5 text-justify">
                    <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
                        Brand owners generally cannot use trademark law alone to stop the mere ingestion of their marks into an AI training dataset. Trademark law protects the source-identifying function of a mark: it prevents consumer confusion, dilution and false association in commerce. Copying a logo into a dataset, in itself, is not &quot;use as a mark.&quot; Copyright, contract (website terms), database rights and data-protection rules are usually the stronger tools for controlling collection and training.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Trademark law becomes relevant at the output and deployment stage: when an AI system generates images containing a brand&apos;s logo or watermark, produces text that falsely attributes statements to a brand, or markets itself in a way that suggests affiliation. That is where the most important litigation so far has focused and where brand owners have the clearest legal footing.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Why Training Data Is a Poor Fit for Trademark Law
                    </h2>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Trademark Rights Are About Use in Commerce, Not Copying
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        In the United States, infringement under the Lanham Act (15 U.S.C. § 1114 and § 1125(a)) requires use of a mark in commerce in connection with goods or services in a way likely to cause confusion. In the UK and EU, infringement requires use of a sign &quot;in the course of trade&quot; in relation to goods or services. A training pipeline that downloads images, text and product pages containing marks is typically not using those marks to identify the developer&apos;s own goods or services. The marks are just part of the raw material.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Trademarks Are Not Property in the Symbol Itself
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Unlike copyright, a trademark does not give its owner a general right to control reproduction of the symbol. The owner can block uses that confuse consumers, dilute a famous mark, or falsely suggest sponsorship. Training a model on a page that shows a brand logo does not, by that fact alone, mislead anyone about who makes what.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Consumers Do Not See the Training Data
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Confusion is judged from the perspective of relevant consumers. Training data is internal to the developer. Consumers meet the model&apos;s outputs and the product&apos;s branding, so that is where confusion, dilution, or false association can arise.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Where Trademark Claims Do Gain Traction
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-[13px] sm:text-[14px] md:text-[15px]">
                            <thead>
                                <tr className="bg-[#202F5A] text-white">
                                    <th className="p-2 sm:p-3 border border-gray-300">Scenario</th>
                                    <th className="p-2 sm:p-3 border border-gray-300">Legal theory</th>
                                    <th className="p-2 sm:p-3 border border-gray-300">Strength / notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">A model generates images that include a brand&apos;s watermark or logo</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Trademark infringement; false designation of origin; dilution by blurring or tarnishment</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Strongest current scenario. Depends on how recognizable the mark is in the output and whether the output is likely to confuse</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">A chatbot attributes invented content to a named publication or brand (&quot;hallucinated&quot; quotes or articles)</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">False designation of origin / false endorsement; dilution by tarnishment; possibly defamation or trade libel</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Actively litigated in the US. Outcomes are unsettled and fact-specific</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">A model is prompted to produce counterfeit-like goods or fake product listings bearing a brand</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Counterfeiting; contributory or vicarious infringement</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Depends on the provider&apos;s knowledge, control and response to notices</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">An AI product name or branding resembles an existing brand</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Ordinary trademark infringement</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Not specific to AI; classic likelihood-of-confusion analysis</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Training dataset scraped from a brand&apos;s website in breach of its terms of use</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Breach of contract; computer-misuse theories; copyright</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Not a trademark claim, but often the more effective route</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Key Cases and Developments
                    </h2>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Getty Images v. Stability AI (England and Wales)
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Getty Images sued Stability AI in the UK High Court, alleging that Stable Diffusion was trained on millions of Getty images and that its outputs infringed Getty&apos;s copyright and trade marks. In its judgment of 4 November 2025, the court rejected Getty&apos;s secondary copyright claim and found trade mark infringement only in a narrow set of circumstances. Those findings concerned isolated, historic outputs in which Getty or iStock watermarks appeared in images generated by certain model versions. The judge described the findings as historic and extremely limited in scope and the court rejected the reputation-based (dilution-type) trade mark claims for lack of evidence of detriment or unfair advantage. The court also did not decide the central question whether training on copyrighted images is itself infringing, because the primary copyright claims had been abandoned at trial. Stability AI was later granted leave to appeal on the secondary infringement issue.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] border-l-4 border-[#202F5A] pl-4">
                        <b>Lesson for brand owners:</b> the trademark win came from watermarks showing up in outputs, not from the fact that marked images were used for training. The court also rejected the argument that the user, rather than the model provider, was responsible for the watermark appearing.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        US Litigation Over Hallucinated Attribution
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Several US lawsuits by news and media organizations against AI developers include Lanham Act theories alongside copyright claims. A typical allegation is that a chatbot produced fabricated text and attributed it to a named publication, harming the publication&apos;s reputation and misleading readers about its origin. These cases are at various stages and rulings so far do not provide a settled rule, so treat any claim of a clear precedent with caution.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Jack Daniel&apos;s v. VIP Products (US Supreme Court, 2023)
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The Supreme Court held that when an accused infringer uses a mark as a designation of source for its own goods, the Rogers test (a First Amendment-based screen for expressive works) does not apply and the noncommercial-use exclusion from dilution by tarnishment or blurring does not protect parody used as a source identifier. For AI, the case suggests that an AI company using a brand&apos;s name or logo as part of its own product identity or marketing will get little protection from expressive-use defenses, while incidental appearance of a mark within user-directed creative output may still be analyzed under traditional likelihood-of-confusion principles. It is an analogy, not a ruling about AI.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Other Relevant Themes
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Territoriality:</b> trademark rights are national or regional. Where a model is trained, hosted and accessed across jurisdictions, brand owners must show use or targeting within the relevant territory. US law limits extraterritorial reach of the Lanham Act (Abitron v. Hetronic, 2023).</li>
                        <li><b>Nominative and descriptive use:</b> referring to a brand by name to identify it (&quot;a photo in the style of Brand X packaging&quot;) may be permitted if no more of the mark is used than necessary and there is no suggestion of sponsorship.</li>
                        <li><b>Safe-harbor and intermediary rules:</b> platforms may rely on notice-and-takedown frameworks for user content, but a model provider that generates the content itself is in a different position than a host of third-party uploads.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        What Tools Brand Owners Actually Have
                    </h2>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Contract and Technical Access Controls
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Website terms of service, robots.txt directives, API terms and technical blocking can restrict automated scraping. Enforcement is uneven and robots.txt is a convention rather than a law, but breach of terms can support contract claims and persistent circumvention can create additional legal exposure in some jurisdictions.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Copyright and Related Rights
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Logos, product photography, packaging art and brand copy are often protected by copyright, which directly regulates reproduction. In the EU, text-and-data-mining exceptions allow rights holders to reserve their rights in machine-readable form and the AI Act requires general-purpose AI providers to have a policy to respect such reservations. These mechanisms are copyright-based, but they are the closest thing to an &quot;opt-out&quot; brand owners have.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Monitoring and Enforcement on Outputs
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Because outputs are where trademark claims arise, regular testing of major generative systems is valuable. Prompt the systems with your brand name, product names and typical queries and record outputs that show your marks, imitate your packaging, or attribute content to you. Preserve dated screenshots and prompts to build evidence.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Direct Engagement and Licensing
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Many AI developers prefer licensed or curated data and have takedown and feedback channels. Brand owners can send notices requesting filtering of their marks or watermarks from outputs, negotiate licensing and attribution terms for data, or request guardrails against generating counterfeit-style content.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Registration and Portfolio Hygiene
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Strong, registered marks in the relevant jurisdictions make enforcement easier. Consider registering word marks and logos in key classes, recording marks with customs authorities where applicable and documenting fame and reputation if dilution claims may be needed.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Practical Playbook for Brand Owners
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Audit your marks and data exposure.</b> Identify where your logos, product images and brand text are publicly available and who might scrape them.</li>
                        <li><b>Update your website terms and technical signals.</b> State clearly whether automated collection for AI training is permitted; add machine-readable reservations where supported.</li>
                        <li><b>Test outputs routinely.</b> Build a checklist of prompts and review outputs for logo reproduction, fake endorsements and hallucinated attributions.</li>
                        <li><b>Preserve evidence.</b> Keep prompts, outputs, timestamps and model versions.</li>
                        <li><b>Escalate in stages.</b> Start with provider notices; consider cease-and-desist letters, then litigation where the harm is material and the evidence is strong.</li>
                        <li><b>Combine legal theories.</b> Plead trademark claims for output-based confusion or dilution together with copyright, contract and unfair-competition claims as the facts support.</li>
                        <li><b>Watch regulation.</b> AI transparency and copyright obligations in the EU, and proposals in the US and elsewhere, may create new levers.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Guidance for AI Developers
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Filter or suppress watermarks and distinctive brand elements in outputs where feasible.</li>
                        <li>Avoid using third-party marks in product branding or marketing in a way that suggests affiliation.</li>
                        <li>Add grounding and citation controls to reduce false attributions to named publishers.</li>
                        <li>Maintain a rights-holder complaint process and respond promptly.</li>
                        <li>Document data provenance, including how marked content was collected and filtered.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Open Questions
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Whether large-scale output of blurred or distorted marks (as opposed to exact copies) is likely to confuse consumers.</li>
                        <li>How courts allocate responsibility between model providers and users who write the prompts.</li>
                        <li>Whether and when hallucinated attribution counts as use in commerce that is likely to cause confusion or dilution.</li>
                        <li>How trademark law interacts with synthetic data trained on brand-rich images and later redistributed.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Conclusion
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Trademark rights give brand owners meaningful but limited control. They are unlikely to stop a developer from including brand-rich data in a training corpus, but they can be effective against outputs that reproduce marks, mislead consumers about source or endorsement, or damage a brand&apos;s reputation. The most effective approach is layered: contract and technical controls to manage collection, copyright where available, active monitoring of outputs and trademark claims targeted at the specific ways AI systems display or misattribute a brand.
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
