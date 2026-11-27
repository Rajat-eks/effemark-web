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
  title: "Trademark Protection for Celebrity Endorsements: Managing Brand Rights and Commercial Identity",
  description:
    "Trademark protection for celebrity endorsements depends on how trademark, false-endorsement, publicity and contract law fit together. Learn how brands and talent can structure, register and enforce their rights.",
  keywords: [
    "Trademark Protection for Celebrity Endorsements",
    "Celebrity Endorsement Trademark",
    "False Endorsement Lanham Act",
    "Right of Publicity",
    "Celebrity Brand Protection",
    "Endorsement Contract Clauses",
  ],
};

const pClass = "text-[14px] sm:text-[15px] md:text-[16px]";
const h2Class = "text-[20px] sm:text-[22px] md:text-[25px] font-bold";
const h3Class = "text-[18px] sm:text-[20px] md:text-[22px] font-bold";
const ulClass =
  "list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const olClass =
  "list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const linkClass = "text-blue-600 underline hover:no-underline";
const thClass = "border border-gray-300 bg-gray-100 px-3 py-2 text-left font-bold";
const tdClass = "border border-gray-300 px-3 py-2 align-top";

const cases = [
  {
    name: "Allen v. National Video",
    court: "S.D.N.Y., 1985",
    takeaway:
      "A look-alike in an advertisement can support a Lanham Act false-endorsement claim even without using the celebrity's name.",
  },
  {
    name: "Midler v. Ford Motor Co.",
    court: "9th Cir., 1988",
    takeaway:
      "Deliberately imitating a distinctive, widely known voice for advertising can be actionable misappropriation under California law.",
  },
  {
    name: "White v. Samsung Electronics",
    court: "9th Cir., 1992",
    takeaway:
      "Evoking a celebrity's identity (a robot dressed and posed to recall her) can infringe publicity rights without using her name or likeness.",
  },
  {
    name: "Waits v. Frito-Lay",
    court: "9th Cir., 1992",
    takeaway:
      "Voice imitation supported both a misappropriation claim and a false-endorsement claim; punitive damages were upheld.",
  },
  {
    name: "ETW Corp. v. Jireh Publishing",
    court: "6th Cir., 2003",
    takeaway:
      "An artistic painting of a famous athlete was protected expression; a likeness alone is not automatically a trademark.",
  },
  {
    name: "Jack Daniel's v. VIP Products",
    court: "U.S. Supreme Court, 2023",
    takeaway:
      "Where a mark is used as a source identifier, the Rogers shield does not apply and ordinary likelihood-of-confusion analysis governs.",
  },
  {
    name: "Vidal v. Elster",
    court: "U.S. Supreme Court, 2024",
    takeaway:
      "The Lanham Act names clause restricting registration of a living person's name without consent is consistent with the First Amendment.",
  },
];

const clauses = [
  {
    clause: "Licensed property",
    points:
      "Define exactly which name, nicknames, likeness, signature, voice and marks are licensed and which are excluded. Specify media (print, digital, social, broadcast, in-store, packaging).",
  },
  {
    clause: "Territory and term",
    points:
      "List countries or regions. Online campaigns reach everywhere, so address geo-targeting and the treatment of content that remains accessible after the term.",
  },
  {
    clause: "Exclusivity",
    points:
      "Define the product category and competitor list precisely; address existing deals and ambush situations.",
  },
  {
    clause: "Approval rights",
    points:
      "Set timelines for approving creative, copy, photographs and retouching; define deemed approval or disapproval after a deadline. Include approval of AI-assisted or synthetic material.",
  },
  {
    clause: "Ownership of marks and goodwill",
    points:
      "The celebrity should retain ownership of personal marks and goodwill. The brand should retain ownership of brand marks. For jointly created marks or co-branded product names, specify ownership, registration responsibility and what happens on termination.",
  },
  {
    clause: "Quality control",
    points:
      "If the celebrity licenses marks (for example, for a collaboration line), require quality control to avoid a naked license that weakens the mark.",
  },
  {
    clause: "Morals and reputation",
    points:
      "Draft objective triggers (criminal conduct, public statements, brand-damaging behavior) and mutual provisions covering brand conduct that damages the talent.",
  },
  {
    clause: "Disclosures and compliance",
    points:
      "Require compliance with advertising law, including clear and conspicuous disclosure of material connections on social media. Allocate responsibility for compliance.",
  },
  {
    clause: "Post-term rights",
    points:
      "Provide a sell-off period for inventory, a takedown schedule for digital content and limits on continued use of the likeness.",
  },
  {
    clause: "AI and digital replicas",
    points:
      "Prohibit training, cloning or generating synthetic voice or likeness without separate written consent and compensation; define permitted editing.",
  },
  {
    clause: "Enforcement",
    points:
      "Specify who may sue infringers, who controls litigation and how recoveries are split.",
  },
];

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S1_Trademark Protection for Celebrity.jpg"
          alt="Trademark protection for celebrity endorsements"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Trademark Protection for Celebrity Endorsements: Managing Brand
            Rights and Commercial Identity
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 27/11/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            A celebrity endorsement joins two valuable identities: the brand and
            the person. Trademark law protects the brand and, increasingly, the
            celebrity&apos;s name and signature marks. False-endorsement and
            right-of-publicity law protect the celebrity&apos;s persona against
            unauthorized commercial use, and the endorsement contract allocates
            who owns and controls what. Understanding{" "}
            <strong>trademark protection for celebrity endorsements</strong>{" "}
            means understanding how these layers interact, what the leading
            cases teach, and how brands and talent can structure, register and
            enforce their rights.
          </p>

          <h2 className={h2Class}>
            The Problem: Two Identities, One Campaign
          </h2>
          <p className={pClass}>
            A celebrity endorsement is valuable because consumers transfer trust
            and aspiration from a person to a product. That same transfer
            creates legal risk in every direction. A brand may use a
            celebrity&apos;s name or image beyond what was licensed. A third
            party may imply a celebrity endorsement that does not exist. A
            celebrity may launch a product line that collides with the
            sponsor&apos;s marks. A co-branded logo may leave ownership unclear
            when the relationship ends.
          </p>
          <p className={pClass}>
            Because no single doctrine covers all of this, practitioners work
            with four overlapping bodies of law:
          </p>
          <ul className={ulClass}>
            <li>
              <strong>Trademark law</strong> (registration and infringement)
              protects words, names, logos, slogans and other source identifiers
              used in commerce.
            </li>
            <li>
              <strong>False endorsement and false association</strong> under
              Section 43(a) of the Lanham Act (15 U.S.C. 1125(a)) protect
              against uses likely to confuse consumers about a person&apos;s
              sponsorship or approval.
            </li>
            <li>
              <strong>Right of publicity</strong> and related misappropriation
              law, mostly state law in the United States, protects a
              person&apos;s name, image, likeness, voice and other identity
              attributes against unauthorized commercial exploitation.
            </li>
            <li>
              <strong>Contract law</strong> defines the scope, term,
              exclusivity, approval rights, morality provisions and ownership
              terms of the endorsement.
            </li>
          </ul>

          <h2 className={h2Class}>
            Legal Foundations for Celebrity Endorsement Rights
          </h2>

          <h3 className={h3Class}>Lanham Act: False Endorsement</h3>
          <p className={pClass}>
            Section 43(a)(1)(A) prohibits false designations of origin or false
            or misleading representations likely to cause confusion as to the
            affiliation, connection, or association of a person with another
            person, or as to the sponsorship or approval of goods by another
            person. Courts have applied it to unauthorized uses of a
            celebrity&apos;s name, likeness and persona.
          </p>
          <p className={pClass}>
            A celebrity need not have a registered trademark in their name to
            sue, but must usually show that the persona has recognition and that
            the use is likely to confuse consumers about endorsement. Courts
            often use a multi-factor likelihood-of-confusion test adapted to
            endorsement cases, looking at the level of recognition of the
            plaintiff, the relatedness of the fame to the product, the
            similarity of the likeness, evidence of actual confusion, marketing
            channels and the defendant&apos;s intent.
          </p>

          <h3 className={h3Class}>Trademark Registration of Names and Likenesses</h3>
          <p className={pClass}>
            Section 2(c) of the Lanham Act (15 U.S.C. 1052(c)) bars registration
            of a mark that consists of or comprises a name, portrait or
            signature identifying a particular living individual without that
            individual&apos;s written consent. Section 2(a) bars marks that
            falsely suggest a connection with persons, living or dead.
          </p>
          <p className={pClass}>
            In <em>Vidal v. Elster</em> (U.S. 2024), the Supreme Court upheld
            the names clause against a First Amendment challenge, confirming
            that third parties cannot freely register a famous person&apos;s
            name as a trademark. For talent, this is a powerful gatekeeping
            tool, provided the celebrity actually uses and registers the name as
            a mark for relevant goods and services.
          </p>

          <h3 className={h3Class}>Right of Publicity</h3>
          <p className={pClass}>
            Publicity rights vary significantly by state and country.
            California, for example, has a statute (Civil Code 3344) and a
            common-law claim. New York protects name, portrait, picture and
            voice for advertising or trade purposes through Civil Rights Law 50
            and 51 and has added a limited post-mortem right. Tennessee&apos;s
            2024 ELVIS Act expressly extends protection to voice, including
            AI-generated imitations. Some states recognize post-mortem publicity
            rights for decades, others not at all.
          </p>
          <p className={pClass}>
            Because of this patchwork, brands running national or global
            campaigns should license rights in writing for every territory
            involved.
          </p>

          <h3 className={h3Class}>First Amendment and Expressive Use</h3>
          <p className={pClass}>
            Expressive works, parody and news uses receive significant
            protection. Courts have historically used the <em>Rogers v.
            Grimaldi</em> test to shield expressive uses of marks from Lanham
            Act claims, but in <em>Jack Daniel&apos;s Properties, Inc. v. VIP
            Products LLC</em> (U.S. 2023) the Supreme Court held that{" "}
            <em>Rogers</em> does not apply when an accused infringer uses a mark
            as a designation of source for its own goods.
          </p>
          <p className={pClass}>
            For endorsement disputes, this means that a defendant who uses a
            celebrity&apos;s name or likeness to brand or promote its own
            products gets little shelter from the First Amendment argument,
            while genuinely expressive uses (a biography, a news article, a
            documentary) remain well protected.
          </p>

          <h2 className={h2Class}>
            Lessons from the Leading Celebrity Endorsement Cases
          </h2>
          <p className={pClass}>
            Courts have shaped the law of endorsements through a handful of
            decisions that still guide how disputes are argued today:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-[13px] sm:text-[14px] md:text-[15px]">
              <thead>
                <tr>
                  <th className={thClass}>Case</th>
                  <th className={thClass}>Court and year</th>
                  <th className={thClass}>Takeaway</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((c) => (
                  <tr key={c.name}>
                    <td className={`${tdClass} font-semibold`}>{c.name}</td>
                    <td className={tdClass}>{c.court}</td>
                    <td className={tdClass}>{c.takeaway}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={pClass}>
            The <em>ETW</em> decision is a reminder that celebrities should not
            assume a face or name functions as a trademark everywhere. Trademark
            rights arise from use as a source identifier for goods or services;
            a famous image used descriptively or artistically may not qualify.
            That is why talent teams build a portfolio of actual brand assets
            (name marks, signature, logo, slogans, catchphrases) rather than
            relying only on fame.
          </p>

          <h2 className={h2Class}>What Counts as &quot;Commercial Identity&quot;?</h2>
          <p className={pClass}>
            A celebrity&apos;s commercial identity includes more than a name.
            Typical elements include:
          </p>
          <ul className={ulClass}>
            <li>Legal name, stage name, nicknames, initials and monograms.</li>
            <li>Signature and autograph, used as a logo.</li>
            <li>Catchphrases and slogans associated with the person.</li>
            <li>
              Visual likeness: photographs, caricatures, stylized logos,
              distinctive poses or costumes.
            </li>
            <li>
              Voice and distinctive vocal style, now a major concern with
              synthetic voice tools.
            </li>
            <li>
              Fan community names (for example, collective nicknames used for
              fans) and tour or album names.
            </li>
            <li>
              Domain names and social handles, which function as practical brand
              assets.
            </li>
          </ul>
          <p className={pClass}>
            Each element may be protected differently. A name or catchphrase can
            be registered as a trademark; a likeness is mainly protected by
            publicity and false-endorsement law; a voice is protected by a mix
            of statutory and common-law publicity claims; and a social handle is
            governed by platform terms plus trademark and unfair-competition
            law.
          </p>

          <h2 className={h2Class}>
            Building the Celebrity&apos;s Own Trademark Portfolio
          </h2>
          <p className={pClass}>
            Talent teams often come to trademarks late, after a brand has
            launched something similar. A proactive plan for{" "}
            <strong>trademark protection for celebrity endorsements</strong>{" "}
            includes the following steps:
          </p>
          <ol className={olClass}>
            <li>
              <strong>Identify the marks:</strong> Audit names, stage names,
              signature, logos, slogans and fan terms and prioritize those used
              or planned for commercial goods and services.
            </li>
            <li>
              <strong>Clear before filing:</strong> Run searches for conflicts.
              A famous name may still conflict with existing marks for unrelated
              goods and services.
            </li>
            <li>
              <strong>Choose goods and services deliberately:</strong> Cover
              entertainment services, apparel, fragrance, cosmetics, beverages,
              endorsement and licensing services and any lines in development.
              In the United States, an application must be based on actual use
              or a bona fide intent to use.
            </li>
            <li>
              <strong>Use the name as a mark:</strong> Specimens showing a name
              merely as the author of a work or as ornamentation on a shirt can
              be refused. Hangtags, labels, packaging and product pages that
              show the name as a brand are stronger.
            </li>
            <li>
              <strong>File internationally early:</strong> Trademark rights are
              territorial. Use priority periods and the Madrid Protocol where
              appropriate.
            </li>
            <li>
              <strong>Hold the registrations in the right entity:</strong> A
              loan-out company or holding entity usually owns the marks and
              licenses them to brands, which simplifies enforcement and
              succession planning.
            </li>
            <li>
              <strong>Maintain and police:</strong> Calendar renewals, monitor
              new filings and send timely objections.
            </li>
          </ol>
          <p className={pClass}>
            Late filing can be costly. Notable disputes in China over
            transliterated or translated celebrity names, including the
            long-running dispute over a sportswear company&apos;s use of the
            Chinese name of basketball player Michael Jordan, show how much
            time and money can be lost. The Supreme People&apos;s Court ruled in
            the athlete&apos;s favor in 2020 on the name-related marks, but only
            after years of litigation.
          </p>
          <p className={pClass}>
            Running a proper search before filing is the cheapest way to avoid
            conflicts. EffeMark&apos;s{" "}
            <a
              href="https://www.effemark.com/trademark-search-services"
              className={linkClass}
            >
              trademark search services
            </a>{" "}
            help talent teams and brands clear names, slogans and logos before
            an application is filed or a campaign is launched. To understand how
            clearance differs from ongoing surveillance, read{" "}
            <Link
              href="/articles/trademark-search-vs-monitoring-key-differences"
              className={linkClass}
            >
              trademark search vs monitoring: key differences
            </Link>
            .
          </p>

          <h2 className={h2Class}>
            The Endorsement Contract: Allocating Control
          </h2>
          <p className={pClass}>
            The endorsement agreement is where trademark theory becomes
            practical. The following clauses most often determine whether the
            relationship is manageable when disputes arise:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-[13px] sm:text-[14px] md:text-[15px]">
              <thead>
                <tr>
                  <th className={thClass}>Clause</th>
                  <th className={thClass}>Key points to negotiate</th>
                </tr>
              </thead>
              <tbody>
                {clauses.map((c) => (
                  <tr key={c.clause}>
                    <td className={`${tdClass} font-semibold`}>{c.clause}</td>
                    <td className={tdClass}>{c.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className={h2Class}>Advertising Law: Disclosure and Truthfulness</h2>
          <p className={pClass}>
            In the United States, the Federal Trade Commission&apos;s Guides
            Concerning the Use of Endorsements and Testimonials in Advertising
            (16 CFR Part 255, revised in 2023) require that endorsements reflect
            the honest opinions of the endorser, that endorsers have actually
            used the product when they claim to have done so, and that material
            connections, such as payment or free products, be clearly disclosed.
          </p>
          <p className={pClass}>
            Both the brand and the celebrity can face exposure. Contracts should
            require disclosure language, and campaign briefs should include
            examples of acceptable hashtags or labels for each platform. Other
            countries have comparable rules, often enforced by advertising
            standards bodies.
          </p>

          <h2 className={h2Class}>Digital and AI-Era Risks</h2>
          <p className={pClass}>
            Synthetic voices and deepfake video allow third parties to create
            convincing but unauthorized endorsements at scale. Existing tools
            include Lanham Act false-endorsement claims, state publicity
            statutes, platform takedown policies and, in some jurisdictions,
            newer statutes addressing digital replicas. Federal proposals aimed
            at a national digital-replica right have been introduced, but brands
            and talent should plan on a state-by-state and platform-by-platform
            basis. Practical measures include:
          </p>
          <ul className={ulClass}>
            <li>
              Registering name and slogan marks, which gives clear standing and
              access to platform brand-protection programs.
            </li>
            <li>
              Adding AI-specific covenants to every endorsement and licensing
              contract.
            </li>
            <li>
              Monitoring marketplaces and social platforms for unauthorized
              endorsement claims, fake giveaways and impersonation accounts.
            </li>
            <li>
              Preparing a response template for takedown requests citing
              trademark, publicity and false-endorsement grounds together.
            </li>
          </ul>
          <p className={pClass}>
            Continuous surveillance makes the difference here. Platforms such as
            EffeMark offer{" "}
            <a
              href="https://www.effemark.com/trademark-monitoring"
              className={linkClass}
            >
              dedicated trademark monitoring services
            </a>{" "}
            that track new filings similar to a celebrity&apos;s name, slogan
            or logo, so objections can be filed within the opposition window.
            For a deeper overview, see our guide on{" "}
            <Link
              href="/articles/what-is-trademark-watch-guide-effective-implementation"
              className={linkClass}
            >
              what trademark watch is and how to implement it
            </Link>
            .
          </p>

          <h2 className={h2Class}>International Perspective</h2>
          <p className={pClass}>
            Approaches to personality rights differ widely. In the United
            Kingdom there is no standalone publicity right, so celebrities rely
            on passing off, trademark and, sometimes, data-protection and
            defamation law. The <em>Irvine v. Talksport</em> decision (2002)
            recognized a false-endorsement route through passing off.
          </p>
          <p className={pClass}>
            In India, the Delhi High Court has granted broad personality-rights
            injunctions to well-known figures, for example in cases involving
            Amitabh Bachchan (2022) and Anil Kapoor (2023), including against
            unauthorized use of name, image, voice and catchphrases and misuse
            through AI. Continental European systems generally protect
            personality through civil-law personal rights and image rights.
          </p>
          <p className={pClass}>
            Global campaigns should therefore be reviewed locally and
            trademarks filed in all key markets.
          </p>

          <h2 className={h2Class}>Enforcement Playbook</h2>
          <ol className={olClass}>
            <li>
              <strong>Gather evidence:</strong> Capture the offending use
              (screenshots with dates, URLs, product samples) and record the
              channels and audience reached.
            </li>
            <li>
              <strong>Identify the strongest claims:</strong> Registered marks
              give the simplest route; false endorsement and publicity claims
              add leverage where no mark is used.
            </li>
            <li>
              <strong>Send a targeted notice:</strong> Use a cease-and-desist
              letter or platform takedown form, tailored to the claims and the
              recipient.
            </li>
            <li>
              <strong>Use platform and registry tools:</strong> Marketplace
              brand registries, social platform IP forms and domain-name dispute
              procedures such as the UDRP.
            </li>
            <li>
              <strong>Escalate where justified:</strong> Seek injunctive relief
              and monetary remedies, remembering that early delay can undermine
              claims of irreparable harm.
            </li>
            <li>
              <strong>Document consent:</strong> Keep written licenses and
              approvals organized so that authorized uses can be proven quickly.
            </li>
          </ol>

          <h2 className={h2Class}>Practical Checklist</h2>
          <h3 className={h3Class}>For the Celebrity or Representatives</h3>
          <ul className={ulClass}>
            <li>
              Register name, signature, logos, slogans and fan terms in core
              classes and markets.
            </li>
            <li>Hold marks in a dedicated entity and document licenses.</li>
            <li>
              Insist on written approval rights, AI covenants and clear
              post-term obligations.
            </li>
            <li>Monitor for unauthorized endorsements and act promptly.</li>
          </ul>

          <h3 className={h3Class}>For the Brand</h3>
          <ul className={ulClass}>
            <li>
              Obtain a written license that matches every channel, territory
              and format actually used.
            </li>
            <li>
              Do not extend a campaign beyond the licensed term or territory
              without a new agreement.
            </li>
            <li>
              Keep the brand&apos;s own marks distinct from the talent&apos;s
              marks and agree in advance how any joint marks will be owned.
            </li>
            <li>
              Train marketing and agency teams on disclosure rules and approval
              workflows.
            </li>
            <li>
              Conduct a clearance review before launching co-branded products.
            </li>
          </ul>

          <h2 className={h2Class}>Final Thoughts</h2>
          <p className={pClass}>
            Effective <strong>trademark protection for celebrity endorsements</strong>{" "}
            comes from layering. Trademark registrations give clear,
            transferable and enforceable rights in names, logos and slogans;
            false-endorsement and publicity law protect persona beyond
            registered marks; and a well-drafted contract allocates control and
            ownership during and after the relationship.
          </p>
          <p className={pClass}>
            As AI makes imitation easier, the combination of registered marks,
            clear contractual language and active monitoring is the most
            reliable way to protect both the brand&apos;s investment and the
            celebrity&apos;s commercial identity. Start protecting your marks
            today at{" "}
            <a href="https://www.effemark.com/" className={linkClass}>
              EffeMark.com
            </a>
            .
          </p>
          <p className={pClass}>
            This article is general information, not legal advice. Consult a
            qualified trademark attorney about your specific situation.
          </p>
          <p className={pClass}>
            <b>Follow Us:</b>{" "}
            <a
              href="https://www.linkedin.com/company/effemark"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
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