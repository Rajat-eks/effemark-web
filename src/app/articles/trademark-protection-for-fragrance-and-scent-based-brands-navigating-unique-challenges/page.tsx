import Image from "next/image";
import React from "react";
import Question from "@/components/assets/img/question.svg";
import { Mail, Phone } from "lucide-react";
import { articles } from "../page";
import Link from "next/link";

export const metadata = {
  title:
    "Trademark Protection for Fragrance and Scent-Based Brands: Legal Challenges and Opportunities",
  description:
    "A guide to trademark protection for scent marks and fragrance brands, covering the representation, distinctiveness and functionality hurdles, US and EU approaches, other jurisdictions, practical strategies, portfolio planning for fragrance houses and enforcement risks.",
  keywords: [
    "scent trademark",
    "olfactory trademark registration",
    "fragrance trademark protection",
    "smell marks Sieckmann",
    "scent mark acquired distinctiveness",
    "functionality doctrine scent",
    "perfume brand protection",
    "In re Clarke plumeria scent",
    "trade dress fragrance bottle",
    "trade secret perfume formula",
  ],
};

const P = "text-[14px] sm:text-[15px] md:text-[16px]";
const UL = "list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const OL = "list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const H2 = "text-[20px] sm:text-[22px] md:text-[25px] font-bold";
const H3 = "text-[18px] sm:text-[20px] md:text-[22px] font-bold";
const LINK = "text-blue-600 underline hover:no-underline";
const TH = "border border-gray-300 bg-[#202F5A] text-white text-left p-2 align-top";
const TD = "border border-gray-300 p-2 align-top";
const TABLE = "w-full border-collapse text-[12px] sm:text-[13px] md:text-[14px]";

const conceptRows: [string, string][] = [
  [
    "Scent as a mark for non-scent goods",
    "The smell is added to goods or a service environment that would not ordinarily smell that way, for example, a floral scent added to embroidery thread, or a signature aroma used in a retail store. This is the strongest legal case because the scent is not the reason consumers buy the goods.",
  ],
  [
    "Fragrance as the product",
    "A perfume, cologne, candle, or air freshener whose smell is the very thing being sold. Trademark protection for the scent itself is generally refused as functional.",
  ],
  [
    "Brand name, logo and packaging of a fragrance",
    "Conventional, highly protectable trademarks and trade dress: the name, the bottle shape, the carton, the typography.",
  ],
  [
    "Formula and know-how",
    "Protected, if at all, as trade secrets, patents on novel molecules or processes, or contract rights.",
  ],
];

const portfolioRows: [string, string][] = [
  [
    "Brand name and logo",
    "Register as word and figurative marks in all key markets across Class 3 (perfumery and cosmetics) and related classes, including Madrid designations.",
  ],
  [
    "Bottle, cap and carton",
    "Register 3D marks or protect as design rights and trade dress where the shape is distinctive and not purely functional. File design registrations before public launch, since many systems have limited novelty grace periods.",
  ],
  [
    "Advertising campaigns and imagery",
    "Copyright in photographs and films; trademark in taglines; contracts with talent and agencies that assign rights.",
  ],
  [
    "Novel molecules or processes",
    "Patents, subject to novelty, inventive step and disclosure. A new captive aroma chemical can be patented, but the patent expires after 20 years and publication discloses the invention.",
  ],
  [
    "Formula (the accord)",
    "Trade secret protection with disciplined internal controls: compartmentalized formulas, NDAs and clear ownership terms in contracts with independent perfumers and fragrance suppliers.",
  ],
  [
    "Counterfeits and look-alikes",
    "Customs recordals, platform takedowns and claims based on trademark infringement, passing off and unfair advantage, as in L&apos;Oréal v. Bellure.",
  ],
  [
    "Scent as a mark for ancillary goods or services",
    "Consider a scent mark for a retail environment, packaging, or promotional items where the scent is not the product.",
  ],
];

const page: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Trademark Protection for Fragrance and Scent.jpg"
          alt="Trademark protection for fragrance and scent-based brands: legal challenges and opportunities"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Trademark Protection for Fragrance and Scent-Based Brands: Legal
            Challenges and Opportunities
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 20/11/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className={P}>
            Few sensory experiences are as closely tied to memory and emotion
            as smell. Hotels pipe signature scents through lobbies, toy makers
            build a smell into modeling dough and fragrance houses spend years
            perfecting a single accord. It is natural for brand owners to ask:{" "}
            <strong>can a scent function as a trademark?</strong>
          </p>
          <p className={P}>
            The answer is a qualified yes. Trademark law protects any sign
            that identifies the source of goods or services and is capable of
            distinguishing them from those of others. Smell can in principle
            do that. In practice, three obstacles stand in the way: the
            representation problem, the distinctiveness problem and the
            functionality problem.
          </p>
          <p className={P}>
            This article examines each obstacle, compares the United States,
            European Union and other approaches and sets out practical
            strategies for scent-based brands, including fragrance houses
            whose product is itself a smell.
          </p>
          <p className={P}>
            <em>
              Scope note: This is a general informational article, not legal
              advice. Trademark laws differ considerably between countries and
              office practice changes, so details should be checked against
              the current law and guidelines of the jurisdiction that matters
              to you.
            </em>
          </p>

          <div className="border-l-4 border-[#202F5A] bg-gray-100 p-3 sm:p-4 space-y-2">
            <p className={P}>
              <strong>Key takeaways</strong>
            </p>
            <ul className={UL}>
              <li>
                Scent marks are legally possible but commercially difficult:
                they must be non-functional, must be distinctive (usually
                through acquired distinctiveness) and in many countries must
                be representable in a form the registry accepts.
              </li>
              <li>
                In the United States, a scent can be registered on proof of
                acquired distinctiveness, but a fragrance that is the product
                itself (perfume, air freshener) is generally treated as
                functional and refused.
              </li>
              <li>
                In the European Union, the old graphic-representation test in{" "}
                <em>Sieckmann</em> effectively blocked scent marks; the 2016
                reform removed the graphic requirement, but the representation
                problem has not been solved in practice.
              </li>
              <li>
                A fragrance brand should build a portfolio: bottle and
                packaging trade dress, names and logos, patents and trade
                secrets for formulas, contracts with perfumers and (where
                available) scent marks for non-fragrance goods or services.
              </li>
            </ul>
          </div>

          <h2 className={H2}>1. What Counts as a Scent Mark?</h2>
          <p className={P}>
            A scent or olfactory mark is a smell used to indicate the
            commercial origin of goods or services. It should be separated
            from several related things that are often confused with it:
          </p>
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Concept</th>
                  <th className={TH}>Description</th>
                </tr>
              </thead>
              <tbody>
                {conceptRows.map(([concept, description]) => (
                  <tr key={concept}>
                    <td className={`${TD} font-bold`}>{concept}</td>
                    <td className={TD}>{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] sm:text-[13px] text-gray-600 text-center">
            Table 1. Scent marks and related concepts.
          </p>

          <h2 className={H2}>2. The Core Legal Hurdles</h2>

          <h3 className={H3}>Capacity to Function as a Mark</h3>
          <p className={P}>
            A trademark system must be able to accommodate the sign. Under the
            U.S. Lanham Act, a mark may consist of &quot;any word, name,
            symbol, or device, or any combination thereof,&quot; and the
            Supreme Court&apos;s decision in{" "}
            <em>Qualitex Co. v. Jacobson Products Co.</em> (1995), which
            accepted color alone, established that a sign need not be
            traditional if it identifies and distinguishes. Scent follows that
            logic. The question is then whether the sign can be defined and
            whether consumers perceive it as a brand.
          </p>

          <h3 className={H3}>Distinctiveness</h3>
          <p className={P}>
            Words and logos can be inherently distinctive, meaning they are
            capable of identifying source from the first moment of use.
            Scents generally are not. Consumers assume that a smell is a
            characteristic of the product, an air-freshening feature, or a
            pleasant touch, not a brand identifier. U.S. practice therefore
            requires acquired distinctiveness (secondary meaning) for scent
            marks.
          </p>
          <p className={P}>
            In the leading case, <em>In re Clarke</em> (TTAB 1990), the Board
            accepted a high-impact, fresh, floral fragrance reminiscent of
            plumeria blossoms for sewing thread and embroidery yarn because
            the applicant showed, with evidence, that consumers recognized the
            scent as identifying the applicant. That evidence typically
            includes years of use with promotion that directs attention to the
            scent as a brand, declarations and consumer surveys.
          </p>

          <h3 className={H3}>Functionality</h3>
          <p className={P}>
            A feature is functional if it is essential to the use or purpose
            of the product or if it affects its cost or quality. Functional
            features cannot be registered as trademarks, however distinctive,
            because trademark law is not meant to give perpetual exclusivity
            over useful product characteristics, which is the role of patent
            law. For scent:
          </p>
          <ul className={UL}>
            <li>
              <strong>Scent as the product:</strong> A scent that is the
              product (perfume, scented candle, air freshener, scented
              cleaning product) is functional because the smell is the main
              reason consumers buy it. The USPTO&apos;s examination guidance
              states that the scent of a perfume or an air freshener cannot
              function as a mark for that product.
            </li>
            <li>
              <strong>Utilitarian benefit:</strong> A scent that gives a
              utilitarian benefit (for example, a masking odor in a medicine,
              or a fragrance that makes a cleaner more appealing) is also at
              risk. Related flavor-mark decisions, such as the TTAB&apos;s
              treatment of an orange flavor for antidepressant tablets in{" "}
              <em>In re N.V. Organon</em> (2006), show how functionality and a
              lack of acquired distinctiveness can combine to defeat an
              application.
            </li>
            <li>
              <strong>Ornamental or arbitrary scent:</strong> A scent that is
              ornamental or arbitrary for the goods or services (the plumeria
              smell on thread, an unrelated scent in a store) is much more
              likely to be considered non-functional, though the applicant
              still bears the burden of showing distinctiveness.
            </li>
          </ul>

          <h3 className={H3}>Representation and Definition</h3>
          <p className={P}>
            A trademark register has to tell third parties precisely what is
            protected. That is straightforward for a word or a drawing and
            difficult for a smell. How does one describe a smell so that a
            competitor can tell whether their product infringes? This problem
            is at the center of the European case law and remains the
            principal practical barrier worldwide.
          </p>

          <h2 className={H2}>3. The United States</h2>
          <p className={P}>
            The USPTO accepts scent marks under the general rule that any sign
            capable of distinguishing may be registered, subject to Trademark
            Manual of Examining Procedure (TMEP) section 1202.13 on scent,
            fragrance and flavor marks. The main features of U.S. practice
            are:
          </p>
          <ul className={UL}>
            <li>
              <strong>Application format:</strong> There is no drawing in the
              usual sense. The applicant provides a clear, complete textual
              description of the scent and the application states that the
              mark consists of a scent. The description should be specific
              enough to identify the scent but needn&apos;t give a chemical
              formula.
            </li>
            <li>
              <strong>Specimen:</strong> The applicant must show actual use of
              the scent in commerce in connection with the goods or services.
              In practice, that means a specimen showing the scented goods or
              a description of the scented environment together with a
              declaration or other evidence explaining how the scent is used.
            </li>
            <li>
              <strong>Acquired distinctiveness:</strong> Since a scent is not
              inherently distinctive, the applicant must prove secondary
              meaning under Section 2(f), typically through long and
              substantially exclusive use, advertising that draws attention to
              the scent as a brand and survey evidence.
            </li>
            <li>
              <strong>Non-functionality:</strong> The applicant must show that
              the scent is not functional. A scent that is used to sell the
              product on its merits will fail.
            </li>
          </ul>
          <p className={P}>
            Registered scent marks in the United States are rare, but they
            exist. In addition to Clarke&apos;s plumeria-scented thread, the
            USPTO registered a retail-store scent for a wireless-services
            provider (a &quot;flowery musk&quot; fragrance) in 2015 and a toy
            company&apos;s registration for the scent of its modeling compound
            followed in 2018 on the basis of long use. These illustrate the
            sweet spot: the scent is used on goods or in services where smell
            is not the point, has been used consistently for years and has
            been actively promoted as a brand attribute.
          </p>
          <p className={P}>
            Outside registration, a scent used as a brand identifier may also
            be protectable at common law or under Section 43(a) of the Lanham
            Act as unregistered trade dress or unfair competition, but the
            plaintiff must still prove distinctiveness and, in a trade dress
            case, bears the burden of proving non-functionality.
          </p>

          <h2 className={H2}>4. The European Union and the United Kingdom</h2>

          <h3 className={H3}>The Sieckmann Decision</h3>
          <p className={P}>
            The leading decision is the Court of Justice&apos;s judgment in{" "}
            <em>Ralf Sieckmann v. Deutsches Patent- und Markenamt</em>{" "}
            (C-273/00, 2002). The applicant sought to register a smell,
            described as &quot;balsamically fruity with a slight hint of
            cinnamon,&quot; and offered a chemical formula (methyl cinnamate),
            a written description and a physical sample. The Court held that
            a sign must be represented graphically in a manner that is clear,
            precise, self-contained, easily accessible, intelligible, durable
            and objective. A chemical formula represents a substance rather
            than the smell, a description is not sufficiently clear and
            objective and a sample is not durable. As a result, the smell
            could not be registered.
          </p>
          <p className={P}>
            The follow-on case law was consistent. The General Court rejected
            an application for the smell of ripe strawberries in{" "}
            <em>Eden SARL v. OHIM</em> (T-305/04, 2005). An earlier OHIM Board
            of Appeal decision accepting the smell of fresh-cut grass for
            tennis balls pre-dated <em>Sieckmann</em> and has not been
            repeated.
          </p>

          <h3 className={H3}>The 2015-2016 Reform</h3>
          <p className={P}>
            The reformed EU Trade Mark Directive (2015/2436) and Regulation
            (2017/1001) removed the requirement that a sign be capable of
            being represented graphically. A sign now needs to be represented
            in any appropriate form using generally available technology,
            provided the representation is clear, precise, self-contained,
            easily accessible, intelligible, durable and objective. In
            principle, this opened the door for new kinds of marks.
          </p>
          <p className={P}>
            In practice, the <em>Sieckmann</em> criteria remain in place and
            no widely accepted way of representing a smell has been developed.
            EUIPO guidance continues to indicate that smell cannot currently
            be represented in a way that meets those criteria, so olfactory
            marks remain effectively unregistrable in the EU until technology
            (for example, a standardized digital olfactory fingerprint) is
            accepted by the office and the courts. Applicants and
            practitioners should check the current EUIPO guidelines before
            filing.
          </p>

          <h3 className={H3}>Copyright and Related Rights</h3>
          <p className={P}>
            In <em>Levola Hengelo v. Smilde Foods</em> (C-310/17, 2018), the
            Court of Justice held that the taste of a food product cannot be a
            copyright &quot;work&quot; because it cannot be identified with
            sufficient precision and objectivity. The reasoning carries over
            to smells and has been cited as weighing against copyright in
            perfume in the EU.
          </p>
          <p className={P}>
            National courts have diverged: the Dutch Supreme Court has
            previously accepted copyright in a fragrance (
            <em>Lancôme v. Kecofa</em>, 2006), while the French Cour de
            cassation has taken the view that a fragrance is the mere
            application of know-how and not a work of authorship. Fragrance
            houses should assume that copyright protection of the scent itself
            is uncertain and varies by country.
          </p>

          <h3 className={H3}>Unfair Advantage and Imitation</h3>
          <p className={P}>
            The perfume industry also faces &quot;smell-alike&quot; products.
            In <em>L&apos;Oréal v. Bellure</em> (C-487/07, 2009), the Court of
            Justice held that a competitor who sold imitation perfumes, using
            comparison lists and similar packaging, could take unfair
            advantage of the reputation of well-known marks even without
            consumer confusion. The case does not protect the smell itself,
            but it shows that marks, packaging and advertising are the
            practical legal levers against imitation, which supports the
            portfolio approach.
          </p>

          <h2 className={H2}>5. Other Jurisdictions</h2>
          <p className={P}>
            Approaches differ widely and applicants should confirm the current
            position before relying on any assumption.
          </p>
          <ul className={UL}>
            <li>
              <strong>India:</strong> The Trade Marks Act, 1999 defines a
              trade mark as a mark capable of being represented graphically.
              That requirement has made scent registration very difficult and,
              to the author&apos;s knowledge, no scent mark has been broadly
              recognized on the register. India has accepted sound marks,
              which shows a willingness to extend beyond the traditional
              visual, but the scent hurdle remains the representation
              requirement. Passing off remains available to protect an
              unregistered reputation, including in trade dress.
            </li>
            <li>
              <strong>China, Japan and South Korea:</strong> These systems
              have generally expanded to sound marks but have not recognized
              smell as a registrable sign.
            </li>
            <li>
              <strong>Australia and some Commonwealth systems:</strong> The
              statutory definition of a sign is broad enough in principle to
              include a scent, but practical acceptance depends on a
              description that is sufficiently precise.
            </li>
            <li>
              <strong>International registration:</strong> The Madrid System
              depends on the basic mark and the designated offices&apos; own
              rules. A scent mark that is registered in one country does not
              automatically become registrable elsewhere and offices that do
              not accept scent marks will refuse protection.
            </li>
          </ul>

          <h2 className={H2}>6. Opportunities: Where Scent Branding Can Work</h2>
          <p className={P}>
            Despite the obstacles, there are credible routes to protection and
            several opportunities for brands.
          </p>
          <ol className={OL}>
            <li>
              <strong>Choose a scent that is not the product:</strong> A scent
              associated with a store, a service, or a non-scented good is
              more likely to be non-functional. Hotels, wireless retailers,
              toy and craft brands and even scented stationery are better
              candidates than fragrances themselves.
            </li>
            <li>
              <strong>Build secondary meaning deliberately:</strong> Use the
              scent consistently, exclusively and for a long time and
              advertise it as a brand. Keep dated records of sales, marketing,
              media coverage, unsolicited attention and customer surveys.
              Prepare a survey that tests whether consumers connect the scent
              with a single source.
            </li>
            <li>
              <strong>Draft a precise description:</strong> In the U.S.,
              describe the scent in a way that conveys its character without
              being so vague that it covers every pleasant smell. Support the
              description with a detailed internal record: a reference sample,
              gas chromatography-mass spectrometry (GC-MS) analysis, a
              formulation history and storage and quality-control protocols.
              These documents are not a substitute for the description but
              help prove consistency and defend the mark.
            </li>
            <li>
              <strong>File where scent is accepted, use other rights elsewhere:</strong>{" "}
              Where a scent mark cannot be registered, protect the brand
              through names, logos and trade dress.
            </li>
            <li>
              <strong>Combine with other sensory and brand assets:</strong> A
              scent that is used with a distinctive color, sound, or store
              design builds an overall brand experience and can support a
              trade dress claim in the aggregate.
            </li>
          </ol>

          <h2 className={H2}>7. Strategy for Fragrance Houses</h2>
          <p className={P}>
            For a company whose product is the fragrance, the following
            portfolio approach is more realistic than relying on a scent mark.
          </p>
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Asset</th>
                  <th className={TH}>Protection strategy</th>
                </tr>
              </thead>
              <tbody>
                {portfolioRows.map(([asset, strategy]) => (
                  <tr key={asset}>
                    <td className={`${TD} font-bold`}>{asset}</td>
                    <td className={TD}>{strategy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] sm:text-[13px] text-gray-600 text-center">
            Table 2. Portfolio approach for fragrance houses.
          </p>
          <p className={P}>
            Contracts deserve particular attention. In many fragrance
            relationships, the perfumer or fragrance house creates the
            formula. Agreements should state who owns the formula, who may
            reuse or adapt it, how exclusivity works and what happens on
            termination. Without clear terms, a brand may find that it owns
            the name and bottle but not the juice.
          </p>

          <h2 className={H2}>8. Enforcement and Practical Risks</h2>
          <ul className={UL}>
            <li>
              <strong>Proof of infringement:</strong> Likelihood of confusion
              between two scents is hard to prove. Consumers cannot readily
              compare smells and expert and survey evidence is costly and
              contested.
            </li>
            <li>
              <strong>Naked licensing and consistency:</strong> A scent mark
              can be lost if the owner fails to control quality or if the
              scent changes materially. Maintain strict specifications.
            </li>
            <li>
              <strong>Fade and perception:</strong> Scents vary by
              concentration, medium and environment. A description that claims
              too broad a range invites invalidity and a description that is
              too narrow may be easily avoided.
            </li>
            <li>
              <strong>Genericness and aesthetic functionality:</strong> If
              competitors need the scent to compete (for example, the
              &quot;new car smell&quot;), the scent can be refused or
              cancelled as functional or generic.
            </li>
            <li>
              <strong>Cost versus benefit:</strong> Because the registration
              process is expensive and the likelihood of success is limited, a
              scent filing should be justified by the brand&apos;s strategic
              role for the scent.
            </li>
          </ul>

          <h2 className={H2}>9. Looking Ahead</h2>
          <p className={P}>
            Two developments could change the landscape. The first is
            technological: if offices and courts agree on a standardized
            digital representation of smell, such as a machine-readable
            chemical and sensory fingerprint with accepted tolerances, the
            representation barrier could fall, particularly in systems that
            have already dropped the graphic requirement. The second is
            commercial: as experiential retail, hospitality and immersive
            media grow, more brands will invest in signature scents,
            increasing the volume of test cases and clarifying standards for
            secondary meaning and functionality.
          </p>
          <p className={P}>
            Until then, brand owners should treat a scent mark as a valuable
            but opportunistic addition to a broad portfolio, not as the
            foundation of their protection.
          </p>

          <h2 className={H2}>How EffeMark Supports Your Brand Protection Strategy</h2>
          <p className={P}>
            At EffeMark, we help businesses secure their brands from the very
            start. Our{" "}
            <a
              href="https://www.effemark.com/trademark-search-services"
              className={LINK}
            >
              Trademark Search Services
            </a>{" "}
            and{" "}
            <a
              href="https://www.effemark.com/global-trademark-search"
              className={LINK}
            >
              Global Trademark Search
            </a>{" "}
            help you confirm that a fragrance name, logo or bottle design is
            available before you launch and file in the right markets.
          </p>
          <p className={P}>
            Once your marks are registered, our{" "}
            <a
              href="https://www.effemark.com/trademark-monitoring"
              className={LINK}
            >
              Trademark Monitoring
            </a>{" "}
            and{" "}
            <a
              href="https://www.effemark.com/global-trademark-monitoring"
              className={LINK}
            >
              Global Trademark Monitoring
            </a>{" "}
            services watch for look-alike names and packaging that imitate
            your brand, and our{" "}
            <a
              href="https://www.effemark.com/trademark-docketing"
              className={LINK}
            >
              Trademark Docketing
            </a>{" "}
            service keeps renewals, deadlines and case records organized
            across your entire portfolio.
          </p>

          <h2 className={H2}>Conclusion</h2>
          <p className={P}>
            Trademark protection for scent is real but narrow. It is most
            plausible when a distinctive smell is used on goods or in a
            service setting where smell is not the point of the purchase, when
            the owner has built consumer recognition through consistent and
            promoted use and when the jurisdiction allows a workable
            description. It is least plausible for the fragrance that is the
            product itself.
          </p>
          <p className={P}>
            For fragrance houses and scent-driven brands, the best strategy is
            layered: strong conventional marks and trade dress, patents and
            trade secrets for the technical content, careful contracts, active
            enforcement against imitators and, where it makes sense, a
            targeted scent filing.{" "}
            <Link href="/contact-us" className="text-blue-600 hover:underline">
              Reach out today
            </Link>{" "}
            to build a brand protection strategy tailored to your business.
          </p>

          <h2 className={H2}>Sources and Further Reading</h2>
          <ul className={UL}>
            <li>
              Qualitex Co. v. Jacobson Products Co., 514 U.S. 159 (1995).
            </li>
            <li>In re Clarke, 17 U.S.P.Q.2d 1238 (TTAB 1990).</li>
            <li>In re N.V. Organon (TTAB 2006).</li>
            <li>
              Trademark Manual of Examining Procedure (TMEP) section 1202.13;
              Lanham Act, 15 U.S.C. 1052(f) and 1125(a).
            </li>
            <li>
              Ralf Sieckmann v. Deutsches Patent- und Markenamt, Case C-273/00
              (2002).
            </li>
            <li>Eden SARL v. OHIM, Case T-305/04 (2005).</li>
            <li>
              Directive (EU) 2015/2436 and Regulation (EU) 2017/1001 on the
              European Union trade mark.
            </li>
            <li>
              Levola Hengelo v. Smilde Foods, Case C-310/17 (2018).
            </li>
            <li>L&apos;Oréal v. Bellure, Case C-487/07 (2009).</li>
            <li>Trade Marks Act, 1999 (India).</li>
          </ul>

          <p className={P}>
            <b>Follow Us:</b>{" "}
            <a
              href="https://www.linkedin.com/company/effemark"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
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
                <Link
                  href={`/articles/${article.slug}`}
                  key={article.slug}
                  className="p-3 sm:p-5 space-y-3 sm:space-y-5"
                >
                  <li className="cursor-pointer border-b border-white p-1 rounded">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="shrink-0">
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
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="break-all">info@effemark.com</span>
            </a>
            <a
              href="tel:+13124285732"
              className="flex items-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] text-white"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>+1 (312) 428-5732</span>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default page;