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
    title: "3D Shape Trademark Search: Protecting Packaging and Product Design",
    description:
        "A complete guide to 3D shape trademarks: how packaging differs from product design, the functionality and distinctiveness hurdles, how to run a proper 3D trademark search, and how to build a filing and enforcement strategy.",
    keywords: [
        "3D Trademark Search",
        "Shape Trademark",
        "Trade Dress",
        "Product Design Trademark",
        "Packaging Trademark",
        "Trademark Functionality",
    ],
};

const page: React.FC<PageProps> = (props) => {
    return (
        <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
            <section className="w-full md:w-[65%] space-y-5">
                <Image
                    src="/images/S1_3D Shape Trademark Search.jpg"
                    alt="3D Shape Trademark Search: Protecting Packaging and Product Design"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                />
                <div className="flex flex-col ">
                    <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
                        3D Shape Trademark Search: Protecting Packaging and Product Design
                    </h1>

                    <span className="text-[12px] sm:text-[14px] text-blue-600">
                        Published on 12/03/2026
                    </span>
                </div>
                <div className="space-y-4 sm:space-y-5 text-justify">
                    <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
                        Some of the most valuable brand assets are not words or logos at all. The curve of a soda bottle, the silhouette of a chocolate, and the profile of a lighter are recognized by consumers even with the name stripped away. The law allows these three-dimensional (3D) shapes to be protected as trademarks, but they are among the hardest marks to secure and to keep. This guide from{" "}
                        <a className="text-blue-600 underline hover:no-underline" href="https://effemark.com" target="_blank" rel="noopener noreferrer">
                            EffeMark
                        </a>{" "}
                        walks through what 3D trademarks are, how packaging differs from product design, how the functionality and distinctiveness hurdles work, how to run a proper 3D trademark search, and how to build a filing and enforcement strategy, with a comparative look at the EU, UK, India, and China.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Two problems make 3D marks difficult. First, shapes are often functional, and the law will not let a trademark become a backdoor monopoly on useful features. Second, consumers rarely treat a product&apos;s shape as a brand the way they treat a name, so distinctiveness is harder to prove.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        What Is a 3D (Shape) Trademark?
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A 3D mark is a sign that consists of, or includes, the three-dimensional shape of a product or its packaging. In U.S. law these fall under trade dress, a term covering the total image and overall appearance of a product or its packaging. Trade dress can include shape, size, color, texture, and graphics.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        There are several forms:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Product packaging:</b> bottles, jars, boxes, tubes, and containers.</li>
                        <li><b>Product design (configuration):</b> the shape of the goods themselves, such as a chair, a toy, or a fragrance flacon.</li>
                        <li><b>Position and placement marks:</b> a feature at a specific location on a product, such as a contrasting sole color on shoes (see Christian Louboutin S.A. v. Yves Saint Laurent America Holding, Inc., 696 F.3d 206 (2d Cir. 2012)).</li>
                        <li><b>Overall look-and-feel:</b> a combination of features, such as store or restaurant décor.</li>
                    </ul>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The shape is not protected as such. It is protected as a trademark, meaning as an indicator of source. If consumers see the shape as merely the way the product looks, or as something that makes it work better, the law will not give it trademark status.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Packaging vs. Product Design: The Distinction That Decides Everything
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The U.S. Supreme Court drew a bright line between these categories, and it drives the entire analysis.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Packaging Can Be Inherently Distinctive
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        In Two Pesos, Inc. v. Taco Cabana, Inc., 505 U.S. 763 (1992), the Court held that trade dress can be inherently distinctive and protectable without proof of secondary meaning. Packaging is generally treated like a word mark or logo: if it is sufficiently unique or unusual, consumers will take it as a brand identifier from the outset. Courts and the TTAB often apply the factors from Seabrook Foods, Inc. v. Bar-Well Foods Ltd., 568 F.2d 1342 (C.C.P.A. 1977), asking whether the design is:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>a common basic shape or design,</li>
                        <li>unique or unusual in the particular field,</li>
                        <li>a mere refinement of a commonly adopted and well-known form of ornamentation for the goods, or</li>
                        <li>capable of creating a commercial impression distinct from the accompanying words.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Product Design Can Never Be Inherently Distinctive
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        In Wal-Mart Stores, Inc. v. Samara Brothers, Inc., 529 U.S. 205 (2000), the Court held that product design trade dress is not inherently distinctive and requires proof of acquired distinctiveness (secondary meaning). The reasoning is that consumers are aware that product design is usually meant to make the product more useful or more appealing, not to identify its source.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        The Gray Zone
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Wal-Mart also said that in close cases courts should classify the trade dress as product design, which imposes the higher burden. A bottle with a distinctive shape, for example, is packaging when it merely holds the product, but courts sometimes treat the shape as part of the product itself, as with a novelty candle or a decorative fragrance vessel that is the product&apos;s appeal.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-[13px] sm:text-[14px] md:text-[15px]">
                            <thead>
                                <tr className="bg-[#202F5A] text-white">
                                    <th className="p-2 sm:p-3 border border-gray-300"></th>
                                    <th className="p-2 sm:p-3 border border-gray-300">Packaging</th>
                                    <th className="p-2 sm:p-3 border border-gray-300">Product Design</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Examples</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Bottle, box, jar, tube, wrapper</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Shape of a chair, lamp, toy, tool, watch</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Inherent distinctiveness possible?</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Yes, if unique or unusual in the field</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">No</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Acquired distinctiveness (§ 2(f)) needed?</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Only if not inherently distinctive</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Always</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Functionality bar applies?</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Yes</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>Practical takeaway:</b> classify the design correctly before filing. The wrong framing can either overstate your position or make you accept a burden you did not need to carry.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        The Functionality Barrier
                    </h2>
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        The Statutory Rule
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Section 2(e)(5) of the Lanham Act (15 U.S.C. § 1052(e)(5)) bars registration of any mark that comprises matter that, as a whole, is functional. Three points about this rule are critical:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Acquired distinctiveness cannot cure functionality. Even decades of exclusive use and massive sales will not rescue a functional shape.</li>
                        <li>Functionality is a ground for cancellation at any time, even for registrations more than five years old (15 U.S.C. § 1064(3)), and it is a defense even against an incontestable registration (15 U.S.C. § 1115(b)(8)).</li>
                        <li>In litigation over unregistered trade dress, the plaintiff bears the burden of proving non-functionality (15 U.S.C. § 1125(a)(3)).</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        What Counts as Functional
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The Supreme Court&apos;s traditional definition asks whether a feature is essential to the use or purpose of the article or whether it affects the cost or quality of the article (Inwood Laboratories, Inc. v. Ives Laboratories, Inc., 456 U.S. 844, 850 n.10 (1982)). Under Qualitex Co. v. Jacobson Products Co., 514 U.S. 159 (1995), a feature is also functional if exclusive use would put competitors at a significant non-reputation-related disadvantage. This is often called aesthetic functionality.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        In TrafFix Devices, Inc. v. Marketing Displays, Inc., 532 U.S. 23 (2001), the Court held that a utility patent is strong evidence of functionality, and that where a feature is functional under the traditional test, courts need not go on to ask whether competitors have alternative designs.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        The Morton-Norwich Factors
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The TTAB and the Federal Circuit commonly apply the factors from In re Morton-Norwich Products, Inc., 671 F.2d 1332 (C.C.P.A. 1982):
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Whether a utility patent discloses the utilitarian advantages of the design.</li>
                        <li>Whether the applicant&apos;s advertising touts the design&apos;s utilitarian advantages.</li>
                        <li>Whether alternative designs are available.</li>
                        <li>Whether the design results from a comparatively simple or inexpensive method of manufacture.</li>
                    </ul>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        In In re Becton, Dickinson &amp; Co., 675 F.3d 1368 (Fed. Cir. 2012), the Federal Circuit affirmed that a blood-collection tube closure design was functional despite arguments about available alternatives, a reminder that a design tied to how the product works is very hard to register.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        The Patent Trap
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Many disputes turn on the applicant&apos;s own history. If you patented the product, the patent&apos;s claims and specification may describe your shape as providing utility. Statements in prior patents and in advertising can be used against you. Before filing a shape application, review your utility patents (including expired ones) and your marketing copy for language about how the shape improves performance.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Proving Distinctiveness
                    </h2>
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        For Product Design and Non-Unique Packaging: § 2(f)
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        To register a shape that is not inherently distinctive on the Principal Register, the applicant must prove acquired distinctiveness under Section 2(f) (15 U.S.C. § 1052(f)). Five years of substantially exclusive and continuous use may be accepted as prima facie evidence, but for product design this is often not enough by itself. The USPTO typically expects additional evidence showing that consumers recognize the shape as a source indicator. Useful evidence includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>&quot;Look-for&quot; advertising that directs consumers to the shape as an indicator of the brand, not just an image of the product.</li>
                        <li>Consumer surveys showing that a significant portion of the relevant public associates the shape with a single source.</li>
                        <li>Sales and advertising figures, which are more persuasive when tied to the shape.</li>
                        <li>Unsolicited media coverage treating the shape as iconic or identifying it with the brand.</li>
                        <li>Evidence of intentional copying, which can suggest the copier believed the shape had source-identifying value.</li>
                        <li>Length, exclusivity, and continuity of use.</li>
                    </ul>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        In Converse, Inc. v. International Trade Commission, 909 F.3d 1110 (Fed. Cir. 2018), the Federal Circuit addressed the type of evidence and the relevant time frame for showing secondary meaning in a footwear midsole design, illustrating how much depends on the record built around the specific feature claimed.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        The Supplemental Register
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        If a non-functional shape lacks acquired distinctiveness, the Supplemental Register may be an option. It offers limited benefits and no presumption of validity, but it allows use of the ® symbol and can prevent later conflicting registrations. Functional shapes cannot go on the Supplemental Register either.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Genericness Risk
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A shape can become so common in its field that it is generic, meaning consumers see it as the type of product. The classic example in the case law is the pillow-shaped shredded wheat biscuit in Kellogg Co. v. National Biscuit Co., 305 U.S. 111 (1938), where the shape was held free for others to use once the patent expired. Shapes that define a category of goods are especially at risk.

                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Preparing the Application: Drawing, Description, and Specimens
                    </h2>
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        The Drawing
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        For 3D marks, 37 C.F.R. § 2.52(b) requires that the drawing depict a single mark, with the application identifying the mark as three-dimensional. The TMEP permits a drawing to show multiple views of the same mark (up to six), which helps convey the shape clearly. Check TMEP § 807.10 for current requirements.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Solid vs. broken lines are essential in trade dress applications. Solid lines show the claimed mark, and dotted or broken lines show unclaimed matter, such as the rest of a product or the placement context. Drawing this correctly is your primary tool for keeping the claim narrow and defensible.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        The Description of the Mark
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A description is required for special form marks (37 C.F.R. § 2.37). A typical 3D description reads:
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] italic border-l-4 border-[#202F5A] pl-4">
                        The mark consists of a three-dimensional configuration of a bottle with [describe distinctive features, e.g., a tapered neck, a ribbed midsection, and a flared base]. The matter shown in broken lines is not part of the mark and serves only to show the position of the mark.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Be precise but avoid over-describing. Every feature you list is a feature you may later have to prove is non-functional and distinctive.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Identification of Goods
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The identification of goods defines the products on which the shape is claimed. A shape mark is assessed in relation to specific goods, so the same shape might be registrable for perfume but not for candles.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Specimens
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The specimen must show the mark used as a trademark on the goods or packaging. For 3D marks, photographs showing all relevant views are typically needed, and the specimen must match the drawing. Consumers must be able to perceive the shape as it appears in the marketplace.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Information Requests
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The examining attorney may issue a request for information under 37 C.F.R. § 2.61(b), asking about patents, advertising, alternative designs, and manufacturing methods. Failing to respond adequately can itself lead to refusal, so prepare these answers early.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        3D Trademark Search: How to Do It Properly
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Searching for 3D marks is harder than searching for words. Text-based searches miss visually similar shapes, and the record descriptions are written inconsistently. A thorough clearance combines several layers.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 1: Define What You Are Protecting
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Before searching, write down:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>The exact features of the shape you want to claim.</li>
                        <li>Whether it is packaging or product design.</li>
                        <li>The goods and classes involved.</li>
                        <li>The features that are functional and those that are purely distinctive or ornamental.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 2: Search the USPTO Register
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        The USPTO&apos;s Trademark Search system (which replaced the legacy TESS in late 2023) allows several approaches:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Description-of-mark text searches, using terms such as &quot;three-dimensional,&quot; &quot;configuration,&quot; &quot;bottle,&quot; &quot;container,&quot; &quot;shape of,&quot; and product-specific words. Vary the wording, because examining attorneys and applicants describe shapes differently.</li>
                        <li>Design search codes, which classify visual elements of a mark and are useful for finding shape and design similarities across differently worded descriptions.</li>
                        <li>Goods and services and class filters, to focus on your field and adjacent goods.</li>
                        <li>Status filters. Search live and dead records. Abandoned or refused applications often reveal how the USPTO viewed similar shapes.</li>
                    </ul>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Then open the TSDR file histories for the closest hits. Office actions can show the functionality and distinctiveness evidence the USPTO relied on, the arguments that worked, and the limits applicants accepted. This information is often more valuable than the registration itself.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 3: Search Design Patents and Utility Patents
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Shape marks overlap with patent law, so patent searches are not optional:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Design patents show who has claimed similar ornamental designs, and their images help identify visual conflicts.</li>
                        <li>Utility patents reveal whether the shape&apos;s features are functional. A patent on the feature you want to register is a red flag under TrafFix.</li>
                        <li>Consider international design databases, such as the WIPO Global Design Database and EUIPO&apos;s DesignView, for visually similar registered designs.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 4: Search the Marketplace for Unregistered Trade Dress
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Unregistered shapes can be enforced under Section 43(a). Check:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Retail shelves and e-commerce marketplaces in your category.</li>
                        <li>Reverse image searches on product photos.</li>
                        <li>Competitor catalogs and industry trade shows.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 5: Search Internationally
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>WIPO Global Brand Database, which includes image-based search tools.</li>
                        <li>TMview for participating national and regional offices, including image search.</li>
                        <li>EUIPO eSearch plus for EU marks.</li>
                        <li>The Indian Trade Marks Registry&apos;s public search for Indian records.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 6: Analyze Crowded Fields
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        If many similar bottles, boxes, or product shapes already exist, consumers are less likely to see any one of them as a brand, which weakens both registrability and enforcement. Similarly, if a shape is common in the field, a competitor&apos;s similar shape may be a permissible variation rather than infringement.
                    </p>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Step 7: Evaluate Risk
                    </h3>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Summarize your findings into: (1) conflicts that might block registration, (2) functionality risks, (3) distinctiveness gaps, and (4) freedom-to-operate issues if you plan to use a similar shape yourself.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Strategy: Layering Multiple Forms of Protection
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        No single IP right does everything for shapes, and each has different strengths.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-[13px] sm:text-[14px] md:text-[15px]">
                            <thead>
                                <tr className="bg-[#202F5A] text-white">
                                    <th className="p-2 sm:p-3 border border-gray-300">Right</th>
                                    <th className="p-2 sm:p-3 border border-gray-300">Protects</th>
                                    <th className="p-2 sm:p-3 border border-gray-300">Term</th>
                                    <th className="p-2 sm:p-3 border border-gray-300">Key Limit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Trademark / trade dress</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Shape as a source identifier</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Potentially perpetual with use and renewal</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Must be non-functional and distinctive</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Design patent</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Ornamental appearance</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">15 years from grant (applications filed on or after May 13, 2015)</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Must be novel and non-obvious; time-limited</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Utility patent</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Functional features</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">20 years from filing</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Must meet patentability requirements</td>
                                </tr>
                                <tr>
                                    <td className="p-2 sm:p-3 border border-gray-300 font-bold">Copyright</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Original artistic aspects of design</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Long term</td>
                                    <td className="p-2 sm:p-3 border border-gray-300">Protects only separable artistic features (Star Athletica, L.L.C. v. Varsity Brands, Inc., 580 U.S. 405 (2017))</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A common approach is to use a design patent early while the shape is new, then build distinctiveness in the marketplace through &quot;look-for&quot; advertising so that a trademark claim can take over as the patent term ends. Be careful, though. Statements in the design patent are less likely to hurt than statements in a utility patent, but marketing that emphasizes function can still harm a later trademark claim.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Other strategy points:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>File early</b> when the shape is inherently distinctive packaging. Do not wait to build a record if you do not need one.</li>
                        <li><b>Claim only what you need.</b> A narrow claim to the truly distinctive elements is easier to defend than a claim to an entire product&apos;s look.</li>
                        <li><b>Use the shape as a brand.</b> Include it in advertising as a brand identifier, not just as a picture of the product.</li>
                        <li><b>Keep the words too.</b> Word marks and logos remain easier to protect and enforce than shapes, so file for them separately.</li>
                        <li><b>Document everything.</b> Keep dated records of first use, sales, advertising spend, copying incidents, and consumer recognition.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Enforcement and Maintenance
                    </h2>
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Enforcing 3D Marks
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>Identify the trade dress precisely.</b> Courts routinely reject claims that describe a vague &quot;look and feel.&quot; You must articulate the specific elements that make up the claimed dress.</li>
                        <li><b>Expect a functionality challenge.</b> Defendants routinely counterclaim for cancellation on functionality grounds, which is available at any time.</li>
                        <li><b>Compare overall impression.</b> Infringement turns on likelihood of confusion between the shapes as a whole, weighing factors such as similarity, strength of the mark, intent, and evidence of actual confusion.</li>
                        <li><b>Watch for knock-offs and look-alikes.</b> Marketplace monitoring is important because shapes are easily imitated in ways that stop short of exact copying.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Maintaining Registrations
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>File the required Section 8 declarations and Section 9 renewals on time.</li>
                        <li>Keep using the shape as a mark, consistent with the registered drawing.</li>
                        <li>Watch for genericness drift and address it with consistent brand-focused use and enforcement.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        International Perspective
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Approaches to shape marks vary significantly.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>European Union.</b> Article 7(1)(e) of Regulation (EU) 2017/1001 excludes signs consisting exclusively of a shape that results from the nature of the goods, is necessary to obtain a technical result, or gives substantial value to the goods. Unlike in the U.S., acquired distinctiveness cannot overcome these exclusions (Article 7(3)). Key cases include Philips v. Remington (C-299/99), Lego Juris v. OHIM (C-48/09 P), and Simba Toys v. EUIPO (C-30/15 P), the Rubik&apos;s Cube case, all of which show the CJEU taking a strict view of technical-function shapes. In Hauck v. Stokke (C-205/13), the Court addressed the &quot;substantial value&quot; exclusion for a children&apos;s chair. For distinctiveness, the Court has said a shape must depart significantly from the norms of the sector (Mag Instrument v. OHIM, C-136/02 P), and in Nestlé v. Mondelez (C-84/17 P), the Kit Kat shape failed because acquired distinctiveness was not shown across all EU Member States. EU rules permit representation in any appropriate form, and EUIPO practice allows up to six views for a shape mark.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>United Kingdom.</b> Section 3(2) of the Trade Marks Act 1994 contains similar exclusions to the EU rules.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>India.</b> Under Section 2(1)(zb) of the Trade Marks Act, 1999, the definition of &quot;trade mark&quot; expressly includes the shape of goods and their packaging. Section 9(3) bars registration of shapes that result from the nature of the goods, are necessary to obtain a technical result, or give substantial value to the goods. Indian courts also protect unregistered trade dress through passing off, as in Colgate Palmolive Co. v. Anchor Health and Beauty Care Pvt. Ltd. (Del. HC, 2003) and Cadbury India Ltd. v. Neeraj Food Products (Del. HC, 2007). Applicants often use the Designs Act, 2000 alongside trademarks, but design protection is time-limited (an initial 10 years, extendable by 5).
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>China.</b> Article 12 of the PRC Trademark Law excludes three-dimensional signs that consist solely of a shape arising from the nature of the goods, a shape necessary to obtain a technical result, or a shape that gives the goods substantial value.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        <b>Madrid System.</b> An international registration based on a home application can designate multiple countries, but each office applies its own standards to shape marks. A U.S. registration does not guarantee acceptance elsewhere, so tailor the representation and evidence to each target jurisdiction.
                    </p>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Common Misconceptions
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li><b>&quot;Long use makes any shape registrable.&quot;</b> Not if it is functional. Acquired distinctiveness cannot cure functionality.</li>
                        <li><b>&quot;If competitors have alternative designs, my shape is non-functional.&quot;</b> Alternative designs are relevant under Morton-Norwich, but they do not save a shape that is functional under the traditional test, as TrafFix shows.</li>
                        <li><b>&quot;A design patent is enough.&quot;</b> A design patent protects appearance for a limited term. It does not create trademark rights, and it does not solve later distinctiveness or functionality problems.</li>
                        <li><b>&quot;My packaging is automatically distinctive.&quot;</b> Only if it is unique or unusual in the field. Common bottle shapes and box formats need secondary meaning.</li>
                        <li><b>&quot;A text search of the register is enough to clear a shape.&quot;</b> Shapes are visual, so text searches miss conflicts. Combine text, design codes, images, and patent searches.</li>
                        <li><b>&quot;Once registered, the shape is safe.&quot;</b> Functionality and genericness challenges remain available throughout the life of the registration.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Practical Checklist
                    </h2>
                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        Before Filing
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Classify the shape as packaging or product design.</li>
                        <li>Identify functional features and remove them from the claim where possible.</li>
                        <li>Review utility patents and marketing materials for functionality admissions.</li>
                        <li>Run a multi-layer search: register, patents, marketplace, and international.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        When Filing
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Prepare a clear drawing with solid and broken lines.</li>
                        <li>Draft a precise description that does not over-claim.</li>
                        <li>Collect specimens showing the shape in trademark use.</li>
                        <li>If the shape is not inherently distinctive, assemble Section 2(f) evidence.</li>
                    </ul>

                    <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
                        After Registration
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
                        <li>Use the shape as a brand in advertising and on the product.</li>
                        <li>Monitor for copies and confusingly similar shapes.</li>
                        <li>Keep records of sales, advertising, and recognition.</li>
                        <li>Maintain filings and consider parallel protection in key markets.</li>
                    </ul>

                    <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
                        Final Thoughts
                    </h2>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        Protecting a shape as a trademark is possible, and the results can be powerful, since a registered shape can become a long-lasting, recognizable brand asset. But the path is narrower than for words or logos. The design must avoid functionality, must be distinctive either inherently (for packaging) or through proven consumer recognition (for product design), and must be presented clearly in the drawing and description.
                    </p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                        A strong 3D trademark search is central to all of this. It helps you assess whether the shape is available, how crowded the field is, and where the functionality and distinctiveness risks lie before you invest in an application or a product launch. At EffeMark, we help businesses combine careful searching, layered IP rights, and brand-focused use of the shape, so a distinctive design can become an enforceable trademark. Whether you need a{" "}
                        <a className="text-blue-600 underline hover:no-underline" href="https://www.effemark.com/trademark-search-services">
                            comprehensive trademark search
                        </a>{" "}
                        before filing or ongoing{" "}
                        <a className="text-blue-600 underline hover:no-underline" href="https://www.effemark.com/trademark-monitoring">
                            trademark monitoring
                        </a>{" "}
                        to protect what you have built, our team is ready to support your brand at every stage.
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
