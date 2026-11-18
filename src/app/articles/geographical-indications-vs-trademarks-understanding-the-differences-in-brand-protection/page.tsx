import Image from "next/image";
import React from "react";
import Question from "@/components/assets/img/question.svg";
import { Mail, Phone } from "lucide-react";
import { articles } from "../page";
import Link from "next/link";

export const metadata = {
  title:
    "Geographical Indications vs. Trademarks: Understanding the Differences in Brand Protection",
  description:
    "A guide to geographical indications (GIs) and trademarks covering definitions, the international framework, a side-by-side comparison, GI protection in the EU, India and the US, trademark-GI conflicts, and how to use both systems together.",
  keywords: [
    "Geographical Indications vs Trademarks",
    "GI vs trademark",
    "geographical indication protection",
    "TRIPS Agreement geographical indications",
    "GI and trademark conflicts",
    "India GI Act 1999",
    "certification mark collective mark",
    "brand protection strategy",
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

const comparisonRows: [string, string, string][] = [
  [
    "What it signals",
    "Commercial source: that goods come from, or are controlled by, a particular business.",
    "Geographical origin and the product qualities, reputation or characteristics attributable to that origin.",
  ],
  [
    "Link to place",
    "None required. A trademark can be entirely arbitrary or fanciful and usually can be used anywhere.",
    "Essential. The product must originate in the defined area and its characteristics must be linked to it.",
  ],
  [
    "Who owns it",
    "An individual, company or other legal entity.",
    "Typically a collective of producers, an association, a public authority or the community; no single producer owns the name.",
  ],
  [
    "Who may use it",
    "The owner and its licensees or authorised users.",
    "Any producer in the defined area who meets the product specification (in many systems after registration as an authorised user or after control checks).",
  ],
  [
    "Transferability",
    "Freely assignable and licensable (subject to local rules).",
    "Generally not assignable or licensable as a commercial asset because it belongs to a defined place and community. In India, for example, Section 24 of the GI Act, 1999 bars assignment, transmission, licensing, pledge or mortgage.",
  ],
  [
    "Product standard",
    "No inherent link to quality, although consumers may associate the mark with quality. Owner sets standards privately.",
    "A written product specification (raw materials, method, area, characteristics) is normally required and may be checked by an inspection body.",
  ],
  [
    "Registration bar: descriptiveness",
    "Marks that merely describe geographical origin are generally refused unless they acquire distinctiveness; there is room for exceptions.",
    "The geographical name is the very point of the right, so a name that is geographical is not an obstacle.",
  ],
  [
    "Genericness",
    "A mark that becomes the common name of the goods can be cancelled; owner may lose rights.",
    "A GI that becomes generic loses protection, but many systems are designed to resist genericide for registered names (for example, protected EU names).",
  ],
  [
    "Duration",
    "Typically 10 years, renewable indefinitely (subject to local use rules).",
    "Varies. In the EU there is no fixed term; in India a registration lasts 10 years and is renewable.",
  ],
  [
    "Enforcement",
    "By the owner, who initiates infringement or passing-off actions.",
    "By the producer collective, authorised users, authorities or, in several systems, ex officio by public bodies.",
  ],
  [
    "Territoriality",
    "Territorial: rights exist country by country, though registration systems such as Madrid ease filing.",
    "Territorial, and protection abroad depends on national law, treaties such as the Lisbon system or bilateral agreements.",
  ],
  [
    "Typical examples",
    "Apple (computers), Amul (dairy), Nike (footwear).",
    "Darjeeling (tea), Champagne (sparkling wine), Basmati (rice), Kanchipuram (silk sarees).",
  ],
];

const layerRows: [string, string, string][] = [
  [
    "Regional name (e.g., a place name on the product)",
    "Yes, the GI, for all authorised producers.",
    "Usually not available as an individual mark if purely geographical, except as a collective or certification mark.",
  ],
  [
    "Individual brand or company name",
    "No.",
    "Yes. Each producer registers its own mark.",
  ],
  [
    "Collective logo or quality seal",
    "Often accompanies the GI as an official sign or logo.",
    "Yes, collective or certification mark owned by the producer association, which can control logo use.",
  ],
  [
    "Packaging, trade dress, label design",
    "No.",
    "Yes, via trademarks, designs and copyright.",
  ],
  [
    "Product recipe or process",
    "Specification documents define the standard; GI does not itself grant exclusivity over the method.",
    "Not by trademark; trade secret or patent protection may apply.",
  ],
];

const page: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Geographical Indications vs. Trademarks.jpg"
          alt="Geographical indications versus trademarks in brand protection"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Geographical Indications vs. Trademarks: Understanding the
            Differences in Brand Protection
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 18/11/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className={P}>
            Darjeeling tea, Champagne, Scotch whisky, Parmigiano Reggiano,
            Kanchipuram silk and Tequila all have something in common: their
            names carry meaning because of where the products come from.
            Meanwhile, Apple, Nike and Tata are valuable because they tell
            consumers which company stands behind a product. Both kinds of
            names are protected by <strong>intellectual property law</strong>,
            but they are protected in different ways and for different
            reasons.
          </p>
          <p className={P}>
            Businesses, farmers&apos; collectives, artisans and exporters
            frequently ask the same practical questions. Is a geographical
            indication (GI) just a special kind of trademark? Can the two be
            combined? Who owns a GI and what can they do with it? What happens
            when a trademark and a GI collide?
          </p>
          <p className={P}>
            This article explains the legal foundations, compares the two
            systems side by side, reviews how they interact and offers a
            practical framework for choosing and combining them.
          </p>
          <p className={P}>
            <em>
              Scope note: This is a general informational article, not legal
              advice. GI and trademark laws differ considerably between
              countries, so section references and details should be checked
              against the current law of the jurisdiction that matters to
              you.
            </em>
          </p>

          <h2 className={H2}>1. Defining the Two Concepts</h2>
          <h3 className={H3}>Trademarks</h3>
          <p className={P}>
            A trademark is a sign, such as a word, logo, shape, colour
            combination or sound, capable of distinguishing the goods or
            services of one undertaking from those of others. It works as a
            badge of origin in the sense of commercial source: it tells the
            consumer that goods bearing the mark come from, or are controlled
            by, a particular business.
          </p>
          <p className={P}>
            The proprietor can be a single company or person. A trademark is a
            private property right that the owner may assign, license,
            mortgage or abandon and that (in most countries) can last
            indefinitely so long as it is renewed and used.
          </p>

          <h3 className={H3}>Geographical Indications</h3>
          <p className={P}>
            Article 22.1 of the WTO TRIPS Agreement defines geographical
            indications as indications that identify a good as originating in
            the territory of a Member, or a region or locality in that
            territory, where a given quality, reputation or other
            characteristic of the good is essentially attributable to its
            geographical origin. Three features follow from the definition:
          </p>
          <ul className={UL}>
            <li>There must be a link to a place</li>
            <li>
              There must be a link between that place and the characteristics
              of the product
            </li>
            <li>
              The sign is shared by those who produce in the place and follow
              the product&apos;s standards
            </li>
          </ul>
          <p className={P}>
            A GI therefore signals place-based origin and the qualities,
            reputation or traditional methods that go with it, rather than a
            single company. Different legal systems protect GIs under
            different labels, such as appellations of origin, protected
            designations of origin (PDO), protected geographical indications
            (PGI), or simply GIs. Some, notably the United States, protect
            them largely through certification and collective marks, while
            others, such as the European Union, India and many others, use
            dedicated sui generis systems.
          </p>

          <h2 className={H2}>2. The International Framework</h2>
          <ul className={UL}>
            <li>
              <strong>Paris Convention (1883):</strong> Contains early rules
              on false indications of source and unfair competition (Articles
              10 and 10bis), which underpin later protection against
              misleading uses of geographical names.
            </li>
            <li>
              <strong>Madrid Agreement (1891):</strong> Addressed false or
              deceptive indications of source on goods, with limited
              membership.
            </li>
            <li>
              <strong>Lisbon Agreement (1958) and the Geneva Act (2015):</strong>{" "}
              Provide an international registration system, administered by
              WIPO, for appellations of origin and, since the Geneva Act (in
              force since 26 February 2020), for geographical indications as
              well. Membership is much smaller than that of the TRIPS
              Agreement.
            </li>
            <li>
              <strong>TRIPS Agreement (1995), Articles 22 to 24:</strong> Sets
              the baseline for all WTO Members. Article 22 requires protection
              against uses that mislead the public or constitute unfair
              competition. Article 23 provides additional protection for
              wines and spirits, even where the public is not misled. Article
              24 contains exceptions, including a grandfathering rule for
              prior good-faith trademarks and for generic terms, while
              Articles 22.3 and 23.2 oblige Members to refuse or invalidate
              trademarks that conflict with protected GIs as specified.
            </li>
            <li>
              <strong>Bilateral and regional agreements:</strong> Many free
              trade agreements contain GI lists and rules. The EU in
              particular negotiates mutual protection of GI names with its
              trading partners.
            </li>
          </ul>
          <p className={P}>
            Because TRIPS does not prescribe the legal form of protection,
            countries can protect GIs through trademarks, special registration
            laws, unfair competition and consumer-protection law, or a
            mixture. That flexibility is the source of many international
            disputes about whether, for example, a term is a protected GI or a
            generic name.
          </p>

          <h2 className={H2}>3. Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Feature</th>
                  <th className={TH}>Trademark</th>
                  <th className={TH}>Geographical indication</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, tm, gi]) => (
                  <tr key={feature}>
                    <td className={`${TD} font-bold`}>{feature}</td>
                    <td className={TD}>{tm}</td>
                    <td className={TD}>{gi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] sm:text-[13px] text-gray-600 text-center">
            Table 1. Key differences between trademarks and geographical
            indications.
          </p>

          <h2 className={H2}>4. The Logic Behind the Differences</h2>
          <p className={P}>
            The differences above all flow from one idea. A trademark protects
            goodwill built by an enterprise. The owner may sell the business,
            license the mark, change the product or move production, because
            consumers rely on the mark as a guarantee of consistent source. A
            GI protects collective reputation tied to a place. It is held on
            behalf of the community whose land, climate, skills and traditions
            give the product its character, so it makes no sense for one
            producer to sell it or move it elsewhere.
          </p>
          <p className={P}>
            Put differently, a trademark answers the question &quot;who made
            this?&quot;, while a GI answers &quot;where does this come from
            and what makes it special?&quot;. Consumers use both pieces of
            information. A bottle can carry a GI (Champagne) and a brand (a
            particular house) at the same time and each does distinct work.
          </p>

          <h2 className={H2}>5. How Geographical Indications Are Protected in Practice</h2>
          <h3 className={H3}>The European Union</h3>
          <p className={P}>
            The EU runs the best-known sui generis system. Agricultural
            products and foodstuffs, wines, spirits and aromatised wines are
            protected as PDO or PGI (and traditional specialities as TSG),
            under a framework that was consolidated by Regulation (EU)
            2024/1143, which entered into force in 2024. Separate EU
            legislation (Regulation (EU) 2023/2411) extends GI protection to
            craft and industrial products, with application of its main
            provisions starting in late 2025.
          </p>
          <p className={P}>
            Registered names are protected against direct and indirect
            commercial use, misuse, imitation or evocation, misleading
            indications and any practice liable to mislead consumers, even if
            the true origin is indicated or the name is translated or
            accompanied by words such as &quot;style&quot; or &quot;type&quot;.
            The system relies on product specifications, control bodies and
            registration at EU level.
          </p>

          <h3 className={H3}>India</h3>
          <p className={P}>
            India protects GIs under the Geographical Indications of Goods
            (Registration and Protection) Act, 1999, which came into force in
            2003, administered by the GI Registry in Chennai. Applications are
            filed by an association of persons, producers, organisation or
            authority representing the interests of producers (Section 11) and
            individual producers of the registered GI are then registered as
            authorised users. Registration is for ten years and renewable.
          </p>
          <p className={P}>
            The Act provides for infringement remedies and, as noted above,
            forbids the assignment or licensing of a registered GI as a
            property right. Darjeeling tea, the first Indian product to
            receive GI registration, along with Basmati, Kanchipuram silk,
            Mysore silk, Pochampally Ikat, Alphonso mango and many other
            products, illustrates the range of goods covered, from
            agricultural products to handicrafts.
          </p>

          <h3 className={H3}>The United States</h3>
          <p className={P}>
            The United States has no dedicated GI statute. Instead,
            geographical names that identify the origin and quality of goods
            are typically protected as certification marks (for example, a
            mark used by a body that certifies that goods come from a region
            and meet standards) or collective marks, under the Lanham Act.
            Roquefort cheese is a classic example of a certification mark.
          </p>
          <p className={P}>
            The Lanham Act also bars registration of geographically deceptive
            marks and, for wines and spirits, marks that falsely indicate
            geographic origin, and regulatory bodies set labelling rules for
            wines and spirits. The US system differs from the EU in treating
            geographical names primarily as source identifiers within the
            trademark framework and has long been a point of discussion in
            international trade negotiations.
          </p>

          <h2 className={H2}>6. When Trademarks and GIs Collide</h2>
          <p className={P}>
            Conflicts arise when a trademark contains or resembles a GI, or a
            later GI is registered for a term already used in a trademark. The
            main legal principles are:
          </p>
          <ul className={UL}>
            <li>
              <strong>Refusal or invalidation of misleading trademarks:</strong>{" "}
              Under TRIPS Articles 22.3 and 23.2, a trademark that contains or
              consists of a GI for goods not originating in the indicated
              territory should be refused or invalidated, if use of the mark
              would mislead the public (and, for wines and spirits, even
              without a likelihood of misleading).
            </li>
            <li>
              <strong>Prior good-faith rights:</strong> TRIPS Article 24.5
              protects trademarks that were applied for, registered or
              acquired through use in good faith before the GI was protected
              in its country of origin or before the relevant TRIPS date. The
              EU rules contain a coexistence mechanism for earlier
              trademarks, with limits where reputation and renown would
              mislead consumers.
            </li>
            <li>
              <strong>Generic terms:</strong> Article 24.6 means a country
              need not protect a term that is customary in common language as
              the common name of the goods. The question whether a name such
              as &quot;Feta&quot; or &quot;Parmesan&quot; is generic or
              geographically protected has produced years of litigation and
              negotiation.
            </li>
            <li>
              <strong>Homonymous GIs:</strong> Where two places share a name,
              systems generally allow coexistence on terms that avoid
              misleading consumers.
            </li>
          </ul>

          <h3 className={H3}>Illustrative Disputes</h3>
          <ul className={UL}>
            <li>
              <strong>
                Budweiser (Anheuser-Busch v. Budějovický Budvar):
              </strong>{" "}
              A long-running, multi-country dispute about the trademark
              Budweiser and the Czech appellation of origin associated with
              České Budějovice. The CJEU case C-216/01 addressed the
              interaction of earlier trademark use and protected appellations.
            </li>
            <li>
              <strong>
                Feta (Germany and Denmark v. Commission, C-465/02 and
                C-466/02):
              </strong>{" "}
              The Court of Justice upheld Greece&apos;s registration of
              &quot;Feta&quot; as a PDO after examining whether the term had
              become generic in other member states.
            </li>
            <li>
              <strong>
                Parma ham (Consorzio del Prosciutto di Parma v. Asda,
                C-108/01):
              </strong>{" "}
              The Court held that the slicing and packaging of Parma ham
              within the production region could be required by the
              specification to protect quality.
            </li>
            <li>
              <strong>Basmati:</strong> The long-running dispute over the use
              of &quot;Basmati&quot; by a US company (RiceTec) in the 1990s,
              followed by India&apos;s efforts to protect Basmati as a GI and
              Indo-Pakistani discussions on shared GI status, show how GIs can
              matter for exports and international branding.
            </li>
          </ul>
          <p className={P}>
            The common thread is that the outcome depends on timing (who came
            first and in what territory), good faith, consumer perception and
            the exact scope of the GI specification.
          </p>

          <h2 className={H2}>7. Using Both Systems Together</h2>
          <p className={P}>
            Brand protection is rarely either/or. In practice, regional
            producers often hold both a GI and trademarks, each covering a
            different layer of their business.
          </p>
          <div className="overflow-x-auto">
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Layer</th>
                  <th className={TH}>Protected by a GI</th>
                  <th className={TH}>Protected by trademarks</th>
                </tr>
              </thead>
              <tbody>
                {layerRows.map(([layer, gi, tm]) => (
                  <tr key={layer}>
                    <td className={`${TD} font-bold`}>{layer}</td>
                    <td className={TD}>{gi}</td>
                    <td className={TD}>{tm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] sm:text-[13px] text-gray-600 text-center">
            Table 2. How GIs and trademarks complement each other in a
            regional product.
          </p>

          <h2 className={H2}>8. Practical Guidance</h2>
          <h3 className={H3}>For Producer Groups and Associations</h3>
          <ol className={OL}>
            <li>
              <strong>Test eligibility:</strong> Document the link between
              place and quality or reputation, including history, climate,
              soil, know-how and evidence of market reputation.
            </li>
            <li>
              <strong>Define the specification carefully:</strong> A tight,
              verifiable specification strengthens enforcement; an over-broad
              one makes inspection and defence difficult.
            </li>
            <li>
              <strong>Set up governance:</strong> Decide who may use the GI,
              how members are admitted, who checks compliance and how disputes
              are handled.
            </li>
            <li>
              <strong>Add trademarks around the GI:</strong> Register a
              collective or certification mark for the logo and encourage
              members to register their own brand marks.
            </li>
            <li>
              <strong>Plan the export strategy:</strong> Check whether the
              target countries protect the GI directly, via bilateral
              agreements, through the Lisbon/Geneva system, or only as a
              certification or collective mark and file accordingly.
            </li>
            <li>
              <strong>Monitor:</strong> Watch trademark registers and online
              marketplaces for applications that contain the GI name,
              translations or evocations.
            </li>
          </ol>

          <h3 className={H3}>For Businesses With a Conventional Brand</h3>
          <ol className={OL}>
            <li>
              <strong>Clear geographical names early:</strong> If a brand name
              includes a place name, check the GI registers of key markets
              before launching or filing.
            </li>
            <li>
              <strong>Consider whether a geographic name can serve as a
              mark:</strong> Purely descriptive geographic terms are weak as
              trademarks; combine them with distinctive elements.
            </li>
            <li>
              <strong>Avoid &quot;style&quot;, &quot;type&quot; or
              &quot;imitation&quot; claims next to protected names:</strong>{" "}
              In many jurisdictions those are infringing uses.
            </li>
            <li>
              <strong>Check prior rights:</strong> If a GI is registered after
              you adopted the mark in good faith, you may qualify for
              coexistence, but only if you can prove first use and good faith.
            </li>
          </ol>

          <h3 className={H3}>Common Mistakes</h3>
          <ul className={UL}>
            <li>
              Assuming that registering a GI gives one company exclusive
              ownership of the name
            </li>
            <li>
              Treating a GI and a trademark as interchangeable when applying
              for foreign protection
            </li>
            <li>
              Failing to renew registrations or keep authorised user records
              up to date
            </li>
            <li>
              Neglecting enforcement, which allows a name to drift towards
              genericness
            </li>
            <li>
              Overlooking domain names, social handles and marketplace
              listings where GI names can be misused
            </li>
          </ul>

          <h2 className={H2}>How EffeMark Supports Your Brand Protection Strategy</h2>
          <p className={P}>
            At EffeMark, we help businesses build trademark strategies that
            work alongside other rights, including collective and
            certification marks around regional products. Our{" "}
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
            help you check whether a geographical name or a brand containing
            one is available in the markets that matter most.
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
            services watch for applications that contain or evoke your name,
            and our{" "}
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
            Geographical indications and trademarks are complementary tools
            that serve different goals. Trademarks protect the commercial
            goodwill of an enterprise and can be freely traded and licensed.
            GIs protect a collective, place-based reputation and quality, are
            owned and used by a community of producers and are generally not
            tradable.
          </p>
          <p className={P}>
            The smartest brand strategies recognise both: a GI that anchors
            the product&apos;s origin and reputation, supported by collective
            and individual trademarks that build brand identity and control
            how the name is presented. Because rules differ across countries
            and because disputes often turn on timing and consumer perception,
            early planning and market-by-market checking are essential.{" "}
            <Link href="/contact-us" className="text-blue-600 hover:underline">
              Reach out today
            </Link>{" "}
            to build a brand protection strategy tailored to your products.
          </p>

          <h2 className={H2}>Sources and Further Reading</h2>
          <ul className={UL}>
            <li>
              WTO Agreement on Trade-Related Aspects of Intellectual Property
              Rights (TRIPS), Articles 15 to 21 (trademarks) and 22 to 24
              (geographical indications).
            </li>
            <li>
              WIPO, Lisbon Agreement and Geneva Act of the Lisbon Agreement on
              Appellations of Origin and Geographical Indications.
            </li>
            <li>
              Regulation (EU) 2024/1143 on geographical indications for wine,
              spirit drinks and agricultural products; Regulation (EU)
              2023/2411 on GI protection for craft and industrial products.
            </li>
            <li>
              Geographical Indications of Goods (Registration and Protection)
              Act, 1999 (India) and the Trade Marks Act, 1999 (India).
            </li>
            <li>
              United States Lanham Act, 15 U.S.C. 1051 et seq. (certification
              and collective marks).
            </li>
            <li>
              Court of Justice of the European Union: Case C-216/01
              (Budweiser), Case C-108/01 (Parma ham), Joined Cases C-465/02
              and C-466/02 (Feta).
            </li>
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