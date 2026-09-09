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
  title: "Trademark Infringement Remedies: What You Can Claim and How to Enforce Them",
  description:
    "A full walkthrough of Lanham Act remedies for trademark infringement - injunctions, monetary damages, and the practical enforcement path from cease-and-desist to litigation.",
  keywords: [
    "Trademark Infringement Remedies",
    "Lanham Act Damages",
    "Trademark Enforcement",
    "Cease and Desist Trademark",
    "Trademark Litigation",
  ],
};

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Trademark Infringement Remedies.jpg"
          alt="Trademark infringement remedies and how to enforce them"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Trademark Infringement Remedies: What You Can Claim and How to
            Enforce Them
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 09/09/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            Discovering that another business is using a confusingly similar
            name, logo, or product design is only the first step. What
            actually happens next - what you can legally demand and how you
            get a court or the marketplace to enforce it - is governed by a
            specific set of remedies under the federal{" "}
            <strong>Lanham Act (15 U.S.C. § 1051 et seq.)</strong>, with
            additional tools available at the state level and through
            administrative and platform-based channels. This guide walks
            through the full menu of{" "}
            <strong>trademark infringement remedies</strong>, what it takes to
            qualify for each one, and the practical enforcement path from
            first notice to final judgment.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            1. The Three Categories of Remedies
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Courts group trademark remedies into three broad buckets:
            injunctive relief, affirmative relief, and monetary relief. Most
            successful plaintiffs end up with some combination of the first
            and third; the second is used more selectively.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Injunctive Relief - Stopping the Use
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is the remedy courts grant most often, because the core harm
            in trademark law is ongoing consumer confusion and money alone
            rarely fixes that. Injunctions come in two stages:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Preliminary injunction</strong> - issued early in the
              case, before trial, to stop the infringing use while litigation
              is pending. Courts weigh the standard equitable factors:
              likelihood of success on the merits, irreparable harm, the
              balance of hardships, and the public interest. Under the
              Trademark Modernization Act of 2020, courts must apply a
              rebuttable presumption of irreparable harm once a plaintiff
              shows a likelihood of success on a Lanham Act claim - a
              significant procedural advantage for trademark owners seeking
              fast relief.
            </li>
            <li>
              <strong>Permanent injunction</strong> - issued after a final
              ruling on the merits, permanently barring the defendant from
              continued use of the infringing mark.
            </li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Affirmative Relief - Cleaning Up the Marketplace
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Beyond simply stopping future use, courts can order steps to undo
            the effects of infringement already in the marketplace:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Destruction or forfeiture of infringing labels, packaging, signage, and advertising materials</li>
            <li>Product recalls</li>
            <li>Corrective advertising to counteract consumer confusion already caused</li>
            <li>Disclaimers on existing inventory or marketing</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Destruction of infringing materials is the most commonly ordered
            form of affirmative relief, particularly in counterfeiting cases.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Monetary Relief - Compensating the Harm
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Monetary awards are not automatic - a court has broad discretion,
            and if an injunction alone adequately addresses the harm,
            monetary relief may be denied entirely. Where damages are
            awarded, the Lanham Act authorizes several distinct forms of
            recovery, discussed in detail below.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            2. What You Can Actually Claim: The Monetary Remedies
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Under 15 U.S.C. § 1117, a prevailing plaintiff may pursue:
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            A. Defendant&apos;s Profits
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            You can seek disgorgement of the profits the infringer earned
            from the unauthorized use - on the theory that the infringer
            shouldn&apos;t be allowed to keep gains made off your goodwill. In
            practice this works two ways:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Disgorgement of profits unjustly obtained, to prevent unjust enrichment; or</li>
            <li>
              Proxy theory, where the infringer&apos;s profits are used as a
              stand-in measure for the plaintiff&apos;s own losses when the
              plaintiff&apos;s actual damages are hard to prove directly.
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The plaintiff generally only has to show the infringer&apos;s
            gross revenue from the infringing sales; the burden then shifts
            to the defendant to prove any deductible costs or apportionment.
            Courts are split on whether recovering profits requires a showing
            of willfulness, so this varies by circuit.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            B. Plaintiff&apos;s Actual Damages
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This covers your own provable losses - lost sales, price erosion,
            or diminished value of your mark caused by the infringement.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            C. Treble Damages (Enhanced Damages)
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            In cases involving particularly egregious or willful conduct,
            courts have discretion to award up to three times actual damages
            or profits. This is meant to be compensatory (covering
            hard-to-quantify harm) rather than purely punitive, and courts
            apply it based on principles of equity rather than as a routine
            multiplier.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            D. Statutory Damages (Counterfeiting Cases Only)
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For cases involving counterfeit marks specifically (not ordinary
            infringement), the Lanham Act allows the plaintiff to elect
            statutory damages instead of proving actual damages - a
            substantial advantage when actual losses are difficult to
            quantify or the infringer&apos;s records are unreliable.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            E. Attorneys&apos; Fees
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Recoverable only in &quot;exceptional cases&quot; - a standard
            the statute doesn&apos;t define precisely, but which courts have
            generally interpreted to include malicious, fraudulent,
            deliberate, or willful infringement on the plaintiff&apos;s side,
            or a meritless or abusive lawsuit on the defendant&apos;s side
            (allowing prevailing defendants to recover fees too).
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            F. Costs of the Action and Pre-Judgment Interest
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Litigation costs (not including fees, which are addressed
            separately) and, in some cases, interest running from the time of
            the harm to the judgment date.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            One Important Limit: No Double Recovery
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A plaintiff can seek both actual damages and the defendant&apos;s
            profits, but courts generally won&apos;t award both in full where
            doing so would amount to double compensation for the same harm.
            Monetary relief under the Lanham Act is meant to be compensatory,
            not punitive - courts weigh whether an award serves to (1)
            compensate the plaintiff&apos;s loss, (2) prevent the
            defendant&apos;s unjust enrichment, and (3) deter willful
            conduct, rather than simply stacking every available remedy.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            3. How to Actually Enforce These Rights
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Knowing what&apos;s available on paper is different from getting
            it in practice. Enforcement generally follows an escalating path.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Step 1: Document the Infringement
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before sending any communication, gather evidence - screenshots,
            purchase records of infringing goods, dated marketing materials,
            and proof of your own prior rights (registration certificate,
            first-use dates, evidence of consumer recognition). This record
            matters both for settlement leverage and for any later court
            filing.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Step 2: Cease-and-Desist Letter
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Most enforcement starts here. A well-drafted letter identifies
            your rights, describes the infringing conduct, and demands
            specific action (stop use, destroy inventory, account for
            profits, etc.) within a deadline. Many disputes resolve at this
            stage without litigation, particularly against smaller or
            unintentional infringers.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Step 3: Administrative and Platform Channels
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Litigation isn&apos;t the only option and often isn&apos;t the
            fastest:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Online marketplace takedown programs (Amazon Brand Registry,
              eBay VeRO, Etsy&apos;s IP reporting, etc.) can remove infringing
              listings quickly without court involvement.
            </li>
            <li>
              Domain name disputes can be pursued under the Uniform
              Domain-Name Dispute-Resolution Policy (UDRP) or, for bad-faith
              U.S. domain registrations, under the Anticybersquatting
              Consumer Protection Act (ACPA), which also authorizes statutory
              damages in cybersquatting cases.
            </li>
            <li>
              U.S. Customs and Border Protection recordation of a registered
              mark allows Customs to seize counterfeit goods at the border -
              a powerful tool against import-based counterfeiting
              specifically.
            </li>
            <li>
              TTAB proceedings (opposition or cancellation) address conflicts
              at the registration level, though the Trademark Trial and
              Appeal Board cannot award damages or injunctions - only decide
              whether a mark should register or remain registered.
            </li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Step 4: Litigation
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            When informal and administrative routes don&apos;t resolve the
            dispute, or when the infringement is ongoing and damaging, filing
            suit in federal court preserves the full range of Lanham Act
            remedies described above. Key early decisions include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Whether to seek a preliminary injunction immediately (critical
              if ongoing harm is severe and time-sensitive)
            </li>
            <li>
              Which monetary theories to plead - actual damages, profits, or
              both - and whether willfulness can be shown to support
              enhanced damages or fee-shifting
            </li>
            <li>
              Whether to add state law claims (state trademark statutes,
              unfair competition, and common-law trademark claims) alongside
              the federal Lanham Act claims, which can broaden available
              remedies depending on the jurisdiction
            </li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Step 5: Settlement, Consent Judgment, or Trial
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Most trademark disputes settle, frequently via a consent judgment
            or settlement agreement that includes an injunction the parties
            agree to (giving it the same enforceability as a litigated
            injunction) plus negotiated monetary terms. Cases that proceed to
            trial or summary judgment result in a court-ordered remedy
            package drawn from the categories above.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            4. Practical Considerations When Deciding What to Pursue
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Injunctive relief is usually the priority</strong>,
              since stopping ongoing confusion protects the mark&apos;s value
              going forward - money after the fact doesn&apos;t repair
              goodwill already diluted in the marketplace.
            </li>
            <li>
              <strong>Monetary claims are strongest with clear evidence of
              willfulness.</strong> Courts weigh equity heavily; a plaintiff
              who can show the infringer knew about the mark and proceeded
              anyway is in a much stronger position for profits, enhanced
              damages, and fees.
            </li>
            <li>
              <strong>Counterfeiting claims open additional remedies</strong>{" "}
              (statutory damages, border seizure) not available in ordinary
              likelihood-of-confusion infringement cases - worth confirming
              which category your situation actually falls into.
            </li>
            <li>
              <strong>Move quickly.</strong> Delay in enforcing a mark can
              support a laches defense and undercuts the urgency needed for
              preliminary injunctive relief.
            </li>
            <li>
              <strong>Consider cost versus recovery realistically.</strong>{" "}
              Full federal litigation is expensive; for smaller-scale
              infringement, cease-and-desist letters and platform takedowns
              often deliver faster, cheaper resolution than a lawsuit.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Key Takeaway
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The Lanham Act gives trademark owners a genuinely broad toolkit -
            injunctions to stop the harm, affirmative orders to clean up its
            effects, and several theories of monetary recovery to compensate
            for it - but none of it is automatic. Courts weigh equity at
            every stage, and the strength of your remedy package tracks
            directly with how well-documented, how willful, and how promptly
            addressed the infringement is. Effective enforcement usually
            starts with the fastest, least expensive tool that will actually
            stop the harm and escalates toward litigation only when
            that&apos;s not enough.
          </p>

          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <b>Follow Us:</b>{" "}
            <a
              href="https://www.linkedin.com/company/effemark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:no-underline"
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
