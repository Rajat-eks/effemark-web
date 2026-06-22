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
  title: "Korean Trademark Search: How to Use KIPRIS for Brand Clearance",
  description:
    "Learn how to conduct professional Korean trademark clearance using KIPRIS — Hangul transliteration, phonetic similarity, Nice Classification overlap, lifecycle status interpretation, and examiner-style risk analysis.",
  keywords: [
    "Korean Trademark Search",
    "KIPRIS",
    "KIPO",
    "Korea Trademark Clearance",
    "South Korea Trademark Search",
  ],
};

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/Korean Trademark Search.png"
          alt="Korean Trademark Search: How to Use KIPRIS for Brand Clearance"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Korean Trademark Search: How to Use KIPRIS for Brand Clearance
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 22/06/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Prelude
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Entering the South Korean market without rigorous trademark clearance
            is not merely a procedural oversight — it is a structural vulnerability
            that can undermine an entire brand before it even reaches consumers.
            Korea&apos;s trademark system is known for its precision, examiner
            discretion and strong emphasis on consumer confusion rather than
            literal duplication. At the center of this ecosystem sits KIPRIS
            (Korea Intellectual Property Rights Information Service), operated by
            the Korean Intellectual Property Office (KIPO). While often introduced
            as a &quot;search database,&quot; KIPRIS is better understood as a
            live legal intelligence layer of Korea&apos;s entire intellectual
            property system, reflecting not only registered rights but also
            evolving conflicts, pending claims and market-driven interpretation of
            identity. In practice, effective trademark clearance in Korea is not a
            search task — it is a structured legal analysis built on interpreting
            language, classification behavior and examiner reasoning patterns.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            KIPRIS as a Legal and Strategic System
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            KIPRIS functions as a continuously updated map of trademark ownership
            and legal tension. Every entry represents a claim over commercial
            identity and each claim exists within a legal lifecycle that directly
            affects risk exposure.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Trademark lifecycle interpretation in KIPRIS
          </h3>
          <div className="overflow-x-auto">
            <table className="border-[1px] w-full text-[12px] sm:text-[14px] md:text-[16px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left border-[1px]">Status</th>
                  <th className="p-2 text-left border-[1px]">Legal Meaning</th>
                  <th className="p-2 text-left border-[1px]">
                    Risk Level for New Brand
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Registered</td>
                  <td className="p-2 border-[1px]">
                    Fully granted exclusive rights
                  </td>
                  <td className="p-2 border-[1px]">Very High (blocking)</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Published for Opposition</td>
                  <td className="p-2 border-[1px]">
                    Examination passed but still contestable
                  </td>
                  <td className="p-2 border-[1px]">High</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Pending Examination</td>
                  <td className="p-2 border-[1px]">
                    Under review, may become enforceable
                  </td>
                  <td className="p-2 border-[1px]">Medium–High</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Refused / Withdrawn</td>
                  <td className="p-2 border-[1px]">
                    Previously rejected or abandoned
                  </td>
                  <td className="p-2 border-[1px]">Medium (context-dependent)</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Expired</td>
                  <td className="p-2 border-[1px]">
                    Rights lapsed, but may still influence examiner perception
                  </td>
                  <td className="p-2 border-[1px]">Low–Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This structure reveals a critical insight: availability is not binary
            in Korea. A mark is not simply free or taken — it exists in a spectrum
            of legal influence that extends beyond registration.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Starting the Search: Why Exact Matching Fails in Korea
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A fundamental mistake in trademark clearance is assuming that identity
            equals safety. In Korea, trademark examination is governed by the
            doctrine of &quot;likelihood of confusion,&quot; which extends far
            beyond identical spelling.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A single brand concept may appear in multiple linguistic forms due to
            transliteration into Hangul, phonetic approximation and stylistic
            variation.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example, a name like &quot;AURORA&quot; may surface as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>AURORA (English filing)</li>
            <li>오로라 (phonetic Korean rendering)</li>
            <li>A-U-R-O-R-A (stylized segmented form)</li>
            <li>Partial derivatives like &quot;AURA&quot; in related filings</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This linguistic transformation means that exact-match searching is
            structurally insufficient.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Expanded search dimensions in KIPRIS
          </h3>
          <div className="overflow-x-auto">
            <table className="border-[1px] w-full text-[12px] sm:text-[14px] md:text-[16px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left border-[1px]">Search Dimension</th>
                  <th className="p-2 text-left border-[1px]">What It Captures</th>
                  <th className="p-2 text-left border-[1px]">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Exact spelling</td>
                  <td className="p-2 border-[1px]">Identical trademark strings</td>
                  <td className="p-2 border-[1px]">Only baseline filtering</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Phonetic similarity</td>
                  <td className="p-2 border-[1px]">
                    Similar pronunciation in Korean
                  </td>
                  <td className="p-2 border-[1px]">Primary rejection driver</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Transliteration variants</td>
                  <td className="p-2 border-[1px]">
                    English ↔ Hangul conversions
                  </td>
                  <td className="p-2 border-[1px]">Hidden conflicts</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Partial similarity</td>
                  <td className="p-2 border-[1px]">
                    Shared word roots or fragments
                  </td>
                  <td className="p-2 border-[1px]">Cluster-based rejection risk</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">
                    Spacing / formatting variations
                  </td>
                  <td className="p-2 border-[1px]">Combined vs separated words</td>
                  <td className="p-2 border-[1px]">
                    Common examiner sensitivity
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Abbreviation patterns</td>
                  <td className="p-2 border-[1px]">Shortened brand forms</td>
                  <td className="p-2 border-[1px]">
                    Informal market usage conflicts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The objective is not to find duplicates — it is to uncover identity
            proximity across linguistic systems.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Classification Analysis: Where Legal Risk Actually Emerges
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            KIPRIS is structured around the Nice Classification system, but in
            Korea, classification is not purely administrative — it is
            interpretive. Examiners frequently assess whether goods or services are
            commercially adjacent, even if technically separated.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Example of classification overlap risk
          </h3>
          <div className="overflow-x-auto">
            <table className="border-[1px] w-full text-[12px] sm:text-[14px] md:text-[16px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left border-[1px]">Industry A</th>
                  <th className="p-2 text-left border-[1px]">Industry B</th>
                  <th className="p-2 text-left border-[1px]">
                    Examiner Perception
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Cosmetics</td>
                  <td className="p-2 border-[1px]">Skincare devices</td>
                  <td className="p-2 border-[1px]">
                    High overlap (same consumer intent)
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Mobile apps</td>
                  <td className="p-2 border-[1px]">Software platforms</td>
                  <td className="p-2 border-[1px]">
                    Functionally identical ecosystem
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Fashion clothing</td>
                  <td className="p-2 border-[1px]">Fashion accessories</td>
                  <td className="p-2 border-[1px]">
                    Shared branding universe
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Food products</td>
                  <td className="p-2 border-[1px]">Food delivery services</td>
                  <td className="p-2 border-[1px]">Commercially connected</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This reveals a critical principle: trademark risk is driven by
            consumer perception, not only classification codes.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Similarity Assessment: The Core of Trademark Clearance
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The most decisive stage of KIPRIS analysis is similarity evaluation.
            Korean trademark law applies a multi-factor similarity test, meaning
            that even non-identical marks can be rejected if they create a similar
            commercial impression.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Dimensions of similarity in Korean trademark review
          </h3>
          <div className="overflow-x-auto">
            <table className="border-[1px] w-full text-[12px] sm:text-[14px] md:text-[16px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left border-[1px]">Dimension</th>
                  <th className="p-2 text-left border-[1px]">
                    What Examiners Evaluate
                  </th>
                  <th className="p-2 text-left border-[1px]">
                    Example of Conflict
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Phonetic similarity</td>
                  <td className="p-2 border-[1px]">
                    Sound of the mark in Korean pronunciation
                  </td>
                  <td className="p-2 border-[1px]">&quot;Luna&quot; vs &quot;Runa&quot;</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Visual similarity</td>
                  <td className="p-2 border-[1px]">
                    Layout, structure, typography
                  </td>
                  <td className="p-2 border-[1px]">Similar logo composition</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Conceptual similarity</td>
                  <td className="p-2 border-[1px]">Shared meaning or idea</td>
                  <td className="p-2 border-[1px]">
                    &quot;Bright Skin&quot; vs &quot;Glow Skin&quot;
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Commercial impression</td>
                  <td className="p-2 border-[1px]">
                    Overall brand identity perception
                  </td>
                  <td className="p-2 border-[1px]">
                    Luxury vs premium positioning overlap
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This layered model means two marks can pass a keyword search yet still
            fail examination due to perceptual convergence in the marketplace.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Structured Risk Interpretation Framework
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Professional clearance work transforms raw KIPRIS data into structured
            legal risk categories. This is essential because search results alone
            do not indicate usability.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Risk classification model
          </h3>
          <div className="overflow-x-auto">
            <table className="border-[1px] w-full text-[12px] sm:text-[14px] md:text-[16px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left border-[1px]">Risk Level</th>
                  <th className="p-2 text-left border-[1px]">Description</th>
                  <th className="p-2 text-left border-[1px]">
                    Recommended Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">High Risk</td>
                  <td className="p-2 border-[1px]">
                    Identical or near-identical marks in same class
                  </td>
                  <td className="p-2 border-[1px]">Avoid or redesign brand</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Medium Risk</td>
                  <td className="p-2 border-[1px]">
                    Similar marks in related industries
                  </td>
                  <td className="p-2 border-[1px]">Legal review required</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Low Risk</td>
                  <td className="p-2 border-[1px]">
                    Similar marks in unrelated sectors
                  </td>
                  <td className="p-2 border-[1px]">Generally acceptable</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Monitoring Risk</td>
                  <td className="p-2 border-[1px]">
                    Pending applications that may mature
                  </td>
                  <td className="p-2 border-[1px]">Track before filing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This structure converts ambiguity into actionable decision-making.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Common Mistakes in KIPRIS-Based Clearance
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Even experienced founders and international brands frequently
            misinterpret KIPRIS data due to structural blind spots in trademark
            law.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Typical errors include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Relying only on exact keyword searches while ignoring phonetic
              similarity patterns
            </li>
            <li>
              Failing to search Korean transliterations of foreign brand names
            </li>
            <li>
              Ignoring adjacent or functionally related Nice Classification classes
            </li>
            <li>
              Overlooking pending applications that may become enforceable rights
              later
            </li>
            <li>
              Assuming expired marks are fully reusable without evaluating residual
              examiner sensitivity
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These errors often lead to post-launch opposition, forced rebranding, or
            delayed market entry, all of which are significantly more costly than
            pre-clearance analysis.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Advanced Strategy: Thinking Like a Korean Trademark Examiner
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            At an advanced level, KIPRIS is not a tool — it is a reflection of
            examiner logic.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Examiners evaluate marks not in isolation but as part of a dense
            linguistic ecosystem of existing brands. This means that even
            technically available names may still be rejected if they:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Fit into an overused naming pattern (linguistic saturation)</li>
            <li>Echo existing brand clusters in the same semantic field</li>
            <li>Create indirect association with established brands</li>
            <li>Compete in psychologically similar consumer categories</li>
          </ul>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
            Strategic interpretation shift
          </h3>
          <div className="overflow-x-auto">
            <table className="border-[1px] w-full text-[12px] sm:text-[14px] md:text-[16px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left border-[1px]">
                    Beginner Perspective
                  </th>
                  <th className="p-2 text-left border-[1px]">
                    Examiner Perspective
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">
                    &quot;Is this name taken?&quot;
                  </td>
                  <td className="p-2 border-[1px]">
                    &quot;Does this feel similar to existing brands?&quot;
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Exact match checking</td>
                  <td className="p-2 border-[1px]">Market confusion analysis</td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Database search</td>
                  <td className="p-2 border-[1px]">
                    Identity ecosystem evaluation
                  </td>
                </tr>
                <tr className="border-[1px]">
                  <td className="p-2 border-[1px]">Legal availability</td>
                  <td className="p-2 border-[1px]">Perceptual distinctiveness</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This shift is what separates basic clearance from strategic brand
            defensibility.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion: KIPRIS as a Brand Intelligence System
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            KIPRIS is not simply a repository of trademark records — it is a
            structured representation of how identity, language and commerce
            intersect in Korea&apos;s legal system.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Proper brand clearance requires integrating multiple analytical layers
            simultaneously:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Linguistic variation (phonetics, transliteration, spelling drift)
            </li>
            <li>Classification proximity (formal + functional overlap)</li>
            <li>Legal lifecycle interpretation (status-based risk)</li>
            <li>Consumer perception modeling (commercial impression analysis)</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            When used correctly, KIPRIS becomes more than a compliance tool. It
            becomes a predictive framework for brand viability, revealing not just
            whether a name exists, but whether it can survive the scrutiny of
            Korea&apos;s trademark system.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            In this sense, trademark clearance is not a final checkbox before
            launch — it is the foundational architecture of brand survival in the
            Korean market.
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
