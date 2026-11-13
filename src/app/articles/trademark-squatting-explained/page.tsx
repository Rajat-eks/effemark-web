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
  title: "Trademark Squatting Explained: How Bad-Faith Filings Threaten Global Brands",
  description:
    "Learn how trademark squatting works, why some legal systems are more exposed, how courts respond to bad-faith filings, and what brand owners can do before and after a squatter strikes.",
  keywords: [
    "Trademark Squatting",
    "Bad-Faith Trademark Filings",
    "Trademark Piracy",
    "Global Brand Protection",
    "Trademark Squatting Prevention",
  ],
};

const pClass = "text-[14px] sm:text-[15px] md:text-[16px]";
const h2Class = "text-[20px] sm:text-[22px] md:text-[25px] font-bold";
const h3Class = "text-[18px] sm:text-[20px] md:text-[22px] font-bold";
const ulClass = "list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const olClass = "list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";

const DataTable: React.FC<{ headers: string[]; rows: string[][] }> = ({
  headers,
  rows,
}) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-left text-[12px] sm:text-[14px] md:text-[15px]">
      <thead>
        <tr className="bg-[#202F5A] text-white">
          {headers.map((h) => (
            <th key={h} className="border border-gray-300 p-2 sm:p-3 font-semibold">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            {row.map((cell, j) => (
              <td
                key={j}
                className={`border border-gray-300 p-2 sm:p-3 align-top text-left ${
                  j === 0 ? "font-semibold" : ""
                }`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Trademark Squatting Explained.jpg"
          alt="Trademark squatting explained: how bad-faith filings threaten global brands"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Trademark Squatting Explained: How Bad-Faith Filings Threaten Global
            Brands
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 13/11/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className={`${pClass} text-justify`}>
            A brand can be registered in someone else’s name before its true
            owner ever arrives in a market. That is the essence of{" "}
            <strong>trademark squatting</strong>: the opportunistic or malicious
            filing of a mark that belongs, in commercial or moral terms, to
            another business. The squatter may hold the registration hostage for
            a payment, block the brand owner’s imports and exports, sell
            counterfeit or grey-market goods, or simply free-ride on a
            reputation built elsewhere. For global brands expanding into new
            territories, squatting is one of the most common and most expensive
            trademark risks, and it is often discovered only when a launch is
            already in progress.
          </p>
          <p className={pClass}>
            This article explains how squatting works, why some legal systems
            are more exposed than others, how courts and offices have responded
            to bad-faith filings, and what brand owners can do before and after
            a squatter strikes. It is general information and not legal advice;
            trademark law is national and the details vary significantly by
            country.
          </p>

          <h2 className={h2Class}>What Is Trademark Squatting?</h2>
          <p className={pClass}>
            Trademark squatting (also called trademark piracy, trademark
            hijacking or, when done at scale, trademark trolling) refers to
            registering or applying to register a trademark with no genuine
            intention of using it in the ordinary course of trade, or with the
            purpose of exploiting, blocking or extracting value from the
            legitimate owner of that mark. The common thread is bad faith: the
            filer knows, or has strong reason to know, that the mark belongs to
            someone else or that the filing serves no legitimate commercial
            purpose.
          </p>

          <h3 className={h3Class}>Common Patterns of Trademark Squatting</h3>
          <DataTable
            headers={["Pattern", "How it works", "Typical target"]}
            rows={[
              [
                "Pre-emptive filing of a foreign brand",
                "The squatter monitors global launches or press and files in a territory the brand has not yet entered",
                "Consumer, technology and fashion brands entering a new market",
              ],
              [
                "Translation or transliteration squatting",
                "Registration of a phonetic or meaning-based local-language version of a brand",
                "Brands entering markets with non-Latin scripts, for example Chinese, Arabic, Japanese, Korean, Hindi",
              ],
              [
                "Distributor, agent or manufacturer hijacking",
                "A business partner registers the brand in its own name, then uses it as leverage",
                "Brands that sell through local distributors or use contract manufacturers",
              ],
              [
                "Celebrity and personal name filings",
                "Names of athletes, entertainers or executives are registered without consent",
                "Public figures, especially when entering a market for the first time",
              ],
              [
                "Portfolio or mass filing",
                "Hundreds or thousands of marks are filed speculatively, often for offers to sell",
                "Any attractive brand, including new startups",
              ],
              [
                "Non-use and blocking filings",
                "A filing is made to block a competitor’s application, with no intention of use",
                "Competitors planning product launches",
              ],
              [
                "Domain name and social handle squatting",
                "The same strategy applied to domains, app-store names and social media accounts, often followed by a trademark application",
                "Newly launched brands and campaigns",
              ],
            ]}
          />

          <h3 className={h3Class}>Squatting Versus Legitimate Conduct</h3>
          <p className={pClass}>
            Not every conflict is squatting. Two independent businesses may
            adopt similar marks in good faith, and a local trader who actually
            uses a mark in its own market has legitimate rights. Defensive
            filings by brand owners are lawful. Filing for a mark that one
            genuinely intends to use is lawful. What distinguishes squatting is
            the lack of a bona fide commercial purpose combined with knowledge
            of, or intent to exploit, another party’s rights or reputation.
            Evidence such as copying of logos, a list of unrelated famous marks
            in the same applicant’s portfolio, demands for payment and an
            absence of any use of the registered marks is commonly used to
            establish bad faith.
          </p>

          <h2 className={h2Class}>
            Why Squatting Works: Registration Systems and Their Gaps
          </h2>

          <h3 className={h3Class}>First-to-File Versus First-to-Use</h3>
          <p className={pClass}>
            Trademark systems fall broadly into two types. In first-to-use
            systems (the United States, the United Kingdom for passing off,
            India for common law rights and others), rights arise from actual
            use of a mark in commerce, although registration provides important
            additional benefits. In first-to-file systems (China, many European
            Union member states for national registration, Japan, Korea and many
            others), rights primarily arise from registration and the first to
            file generally prevails, subject to certain exceptions. A squatter
            naturally targets first-to-file systems, because a registration
            there is valuable even if the squatter has never used the mark.
          </p>
          <p className={pClass}>
            Most systems have some tools against bad-faith filings, but the
            strength of those tools varies and brand owners often need to build
            evidence, such as proof of earlier use or reputation in the
            territory, before they can use them. Hence the central practical
            lesson: a brand owner that waits to file until it enters a market is
            relying on legal exceptions rather than on the strength of its own
            registration.
          </p>

          <h3 className={h3Class}>International Instruments</h3>
          <ul className={ulClass}>
            <li>
              <strong>Paris Convention:</strong> Article 6bis protects
              well-known marks against registration or use of conflicting marks
              for identical or similar goods, though protection is limited by
              the national courts’ and offices’ willingness to recognise a mark
              as well known. Article 6septies lets the owner of a mark object to
              registration by an agent or representative without authorisation.
              Article 4 provides a six-month priority period during which a
              later filing in another member country can claim the date of the
              first filing.
            </li>
            <li>
              <strong>TRIPS Agreement:</strong> Article 16 reinforces protection
              of well-known marks, including the requirement to take account of
              knowledge of the mark in the relevant sector of the public, and
              extends protection in certain circumstances to dissimilar goods.
            </li>
            <li>
              <strong>Madrid System:</strong> Enables applicants to seek
              protection in many territories through one international
              application based on a home registration or application. It does
              not eliminate squatting (a squatter can use it too), but it makes
              it faster and cheaper to cover many jurisdictions early.
            </li>
            <li>
              <strong>UDRP and national domain dispute policies:</strong> For
              domain names, the Uniform Domain Name Dispute Resolution Policy
              offers an administrative route to transfer or cancel bad-faith
              domain registrations. It does not address trademark registrations
              directly but is useful where squatting extends to online assets.
            </li>
          </ul>

          <h2 className={h2Class}>
            How Bad-Faith Filings Threaten Global Brands
          </h2>

          <h3 className={h3Class}>Market Entry Is Blocked or Delayed</h3>
          <p className={pClass}>
            A squatter’s registration can lead customs authorities to seize
            genuine goods bearing the brand, give the squatter the right to
            demand takedowns from marketplaces, and force the brand owner to
            rebrand locally or pay for a licence or assignment. Even if the
            owner ultimately prevails, litigation or invalidation proceedings
            can take months or years, during which the launch is stalled.
          </p>

          <h3 className={h3Class}>Hold-Up Value and Extortion</h3>
          <p className={pClass}>
            The squatter’s business model is often an offer to sell the
            registration back at a price below the cost of fighting but well
            above the cost of filing. A well-known example is the dispute over
            the iPad name in China, in which a company associated with the
            earlier “IPAD” registration there contested Apple’s rights and the
            matter was reported to have been resolved in 2012 by a payment of
            about USD 60 million. The details are contested and case-specific,
            but the example illustrates how a pre-existing registration can
            create serious leverage for its holder.
          </p>

          <h3 className={h3Class}>Consumer Confusion and Brand Dilution</h3>
          <p className={pClass}>
            If the squatter or its licensees use the mark on inferior or
            unrelated products, consumers may be confused and the brand’s
            reputation can be damaged. Squatters may also license the mark to
            others, multiplying the damage.
          </p>

          <h3 className={h3Class}>Legal and Cost Burdens</h3>
          <p className={pClass}>
            Defending against squatting involves oppositions, invalidation or
            cancellation actions, non-use revocation actions, litigation and
            appeals, each with its own deadlines. In some systems a successful
            claimant still bears much of its own cost. Reputation-building spend
            in the market may be at risk if the owner cannot lawfully use the
            brand.
          </p>

          <h3 className={h3Class}>
            Chilling Effect on Small and Mid-Sized Brands
          </h3>
          <p className={pClass}>
            Global brands have the resources to fight, but start-ups and
            mid-sized companies often do not. Squatting can lead them to abandon
            a market altogether, or to enter it under a different name, losing
            the advantage of global brand recognition.
          </p>

          <h2 className={h2Class}>How Different Jurisdictions Respond</h2>

          <h3 className={h3Class}>China</h3>
          <p className={pClass}>
            China has historically been the most discussed jurisdiction for
            squatting because of its first-to-file system, its very high volume
            of filings and the commercial importance of its market. The
            Trademark Law, as amended with effect from 1 November 2019,
            strengthened tools against bad-faith filings: filings made in bad
            faith and not for the purpose of use are to be refused (Article 4),
            good faith is a general principle (Article 7), and registrations
            obtained by improper means or by hijacking a mark of another with
            some influence can be challenged (Article 32 and Article 44).
            Article 15 provides that an agent or representative who registers
            the principal’s mark without authorisation can be refused or
            invalidated. CNIPA also issued rules aimed at bad-faith filings and
            has increased the use of sanctions against abusive applicants.
          </p>
          <p className={pClass}>
            Courts have also been receptive to well-founded claims. In the
            long-running dispute over the Chinese-character form of Michael
            Jordan’s name, the Supreme People’s Court ruled in late 2020 that
            the registration of the name in Chinese characters by a Chinese
            sportswear company was improper and infringed his name rights. Such
            cases show that a strong, evidence-based claim can succeed, though
            they often involve years of litigation.
          </p>

          <h3 className={h3Class}>European Union and United Kingdom</h3>
          <p className={pClass}>
            Under the EU Trade Mark Regulation, an EU trade mark can be declared
            invalid where the applicant was acting in bad faith at the time of
            filing (Article 59(1)(b)). In Sky v SkyKick (Case C-371/18, 2020),
            the Court of Justice of the European Union confirmed that a trade
            mark application filed without any intention to use it in relation
            to the goods or services covered can amount to bad faith, if the
            applicant intended to undermine the interests of third parties or to
            obtain an exclusive right for purposes other than those falling
            within the functions of a trade mark. The UK Supreme Court
            subsequently upheld the principle in the same litigation in 2024, in
            the context of overly broad specifications filed without intention
            to use. Brand owners filing in these systems should therefore keep
            specifications proportionate to genuine plans.
          </p>

          <h3 className={h3Class}>United States</h3>
          <p className={pClass}>
            The United States is a use-based system with an intent-to-use filing
            route (Section 1(b) of the Lanham Act), so a pure squatter has less
            leverage than in a first-to-file system. A registration can be
            challenged where the applicant had no bona fide intent to use, where
            a use-based application was void for non-use at the filing date, or
            where there was fraud on the USPTO. The Federal Circuit’s decision
            in In re Bose Corp. (2009) set the standard that fraud requires a
            knowingly false, material representation made with intent to
            deceive. The Trademark Modernization Act of 2020 added expungement
            and reexamination proceedings to remove registrations for goods and
            services never used, and the USPTO has taken action against filings
            that are fraudulent or submitted by abusive filers. Foreign brand
            owners also encounter squatting at the state level and in online
            marketplaces.
          </p>

          <h3 className={h3Class}>India</h3>
          <p className={pClass}>
            India recognises both registered and common law rights. An
            unregistered mark with a reputation in India is protected by an
            action for passing off, and the Trade Marks Act, 1999 allows refusal
            or cancellation of marks that conflict with earlier marks,
            well-known marks and marks adopted in bad faith. Section 11 contains
            provisions on well-known trademarks and on marks applied for in bad
            faith, and Section 34 preserves the rights of a prior user against a
            later registrant. The Delhi High Court has also developed
            substantial case law on well-known marks and on transborder
            reputation, and the Supreme Court of India has recognised the
            significance of reputation spilling over borders in Toyota Jidosha
            Kabushiki Kaisha v. Prius Auto Industries. Even so, brand owners
            should not rely on these doctrines alone: establishing reputation in
            India requires evidence, and a timely Indian application is far
            cheaper.
          </p>

          <h3 className={h3Class}>Jurisdiction Summary</h3>
          <DataTable
            headers={[
              "Jurisdiction",
              "Basis of rights",
              "Main anti-squatting tools",
              "Practical note",
            ]}
            rows={[
              [
                "China",
                "Registration (first-to-file)",
                "Bad-faith refusal and invalidation; agent/representative provisions; prior influence claims",
                "File in Latin and Chinese forms early; collect evidence of earlier reputation",
              ],
              [
                "EU / EUIPO",
                "Registration",
                "Bad-faith invalidity (Art. 59(1)(b)); oppositions based on earlier rights",
                "Keep specifications proportionate; monitor filings",
              ],
              [
                "United Kingdom",
                "Registration plus passing off",
                "Bad-faith invalidity; passing off; oppositions",
                "SkyKick shows bad faith can attach to speculative breadth",
              ],
              [
                "United States",
                "Use, with registration benefits",
                "Opposition, cancellation, expungement, reexamination, fraud and void ab initio claims",
                "Intent-to-use filing allows early priority",
              ],
              [
                "India",
                "Use and registration",
                "Passing off; well-known marks; bad-faith provisions; prior user defence",
                "Evidence of Indian reputation is key; file early anyway",
              ],
              [
                "Japan / Korea",
                "Registration",
                "Bad-faith provisions and well-known mark provisions",
                "Check local rules on well-known foreign marks",
              ],
            ]}
          />

          <h2 className={h2Class}>
            Preventing Squatting: A Proactive Strategy
          </h2>
          <ol className={olClass}>
            <li>
              <strong>File before you announce.</strong> Decide target markets
              early and file national applications or a Madrid designation
              before launch announcements, trade shows, financing news or
              regulatory filings that might draw attention. Where you have a
              home application, use the six-month Paris Convention priority
              period to file abroad with the earlier date.
            </li>
            <li>
              <strong>Prioritise by risk.</strong> Rank territories by market
              value, manufacturing locations, counterfeiting exposure and
              squatting history. Manufacturing countries should be covered even
              if the brand will not be sold there, because the goods may be
              exported.
            </li>
            <li>
              <strong>Cover all forms of the brand.</strong> Register word
              marks, logos, slogans, product names and locally adapted or
              transliterated versions. In China, register Chinese-character
              versions and consider variants that consumers may adopt
              informally.
            </li>
            <li>
              <strong>Cover relevant classes with intent to use.</strong> Do not
              over-claim, because broad specifications can invite bad-faith or
              non-use challenges, but include the core goods and services and
              the logical expansions.
            </li>
            <li>
              <strong>Lock down contracts.</strong> Distribution, agency,
              licensing and manufacturing agreements should prohibit local
              registration of the brand, require assignment of any such
              registration and give you the right to file in your own name.
              Verify filings made by partners.
            </li>
            <li>
              <strong>Secure domains and social handles.</strong> Register key
              domains in country-code and generic top-level domains and reserve
              usernames on social platforms and app stores.
            </li>
            <li>
              <strong>Use watch services.</strong> Monitor trademark registers
              in key jurisdictions for identical or similar marks and for your
              name in other scripts. Early detection often makes opposition
              possible, which is much cheaper than invalidation.
            </li>
            <li>
              <strong>Record rights with customs.</strong> Where available,
              record registrations with customs authorities so that infringing
              or counterfeit goods can be detained.
            </li>
            <li>
              <strong>Keep evidence of use and reputation.</strong> Store dated
              records of sales, advertising, press coverage, awards, exhibitions
              and cross-border reputation. This evidence is the foundation for
              any well-known mark or prior-use claim.
            </li>
            <li>
              <strong>Educate commercial teams.</strong> Teach business
              development, marketing and procurement teams to involve legal
              counsel early and not to disclose new brand names before filing.
            </li>
          </ol>

          <h2 className={h2Class}>Responding When Squatting Occurs</h2>

          <h3 className={h3Class}>1. Investigate</h3>
          <p className={pClass}>
            Before reacting, establish the facts: filing and priority dates, the
            owner’s identity and portfolio, the goods and services covered, any
            use, any links to your distributors or former employees, and the
            available remedies and deadlines. Check whether the owner has filed
            many marks, whether any are famous marks of other companies and
            whether there is any sign of use. Use investigators if needed.
          </p>

          <h3 className={h3Class}>2. Choose the Right Legal Route</h3>
          <DataTable
            headers={["Route", "When it fits", "Considerations"]}
            rows={[
              [
                "Opposition",
                "The application is published but not yet registered",
                "Short deadline, typically a few months from publication; usually cheaper and faster than later actions",
              ],
              [
                "Invalidation or cancellation",
                "The mark is registered",
                "Often needs proof of bad faith, prior rights or reputation; time limits vary and may be shorter for some grounds",
              ],
              [
                "Non-use revocation",
                "The registration has not been used for the statutory period",
                "Available after a period (for example three to five years, depending on the jurisdiction); effective against pure squatters",
              ],
              [
                "Infringement or passing-off action",
                "The squatter or licensees are using the mark",
                "Can lead to injunctions and damages; evidence of reputation needed",
              ],
              [
                "Customs and platform complaints",
                "Counterfeit or grey goods are circulating",
                "Fast, but a squatter’s registration may complicate enforcement",
              ],
              [
                "Domain/UDRP proceedings",
                "Domain names have been registered in bad faith",
                "Requires a trademark right, evidence of bad faith and no legitimate interest",
              ],
              [
                "Negotiated purchase or licence",
                "Legal route is slow or uncertain and the market matters",
                "May be cost-effective but can encourage further squatting; use an assignment with a clean release",
              ],
            ]}
          />

          <h3 className={h3Class}>3. Build the Bad-Faith Case</h3>
          <p className={pClass}>
            Strong evidence of bad faith typically includes: proof that the
            applicant knew of your brand (for example, former business dealings,
            distributor relationships, or prior communications); copying of your
            logo, packaging or style; a pattern of filings of other companies’
            marks; offers to sell the mark; lack of any genuine business; and
            timing of the filing shortly after a launch announcement or trade
            show. Collect this evidence systematically and preserve it,
            including archived web pages and notarised documents where the local
            system expects them.
          </p>

          <h3 className={h3Class}>4. Settlement and Its Pitfalls</h3>
          <p className={pClass}>
            Many squatting disputes end in a negotiated assignment. If you pay,
            insist on a full assignment of all related marks, domain names and
            goodwill, a release of claims and a covenant not to file again, and
            structure payment so that it follows recordal of the assignment. Be
            aware that a payment may mark your company as a willing buyer to
            other squatters.
          </p>

          <h2 className={h2Class}>Policy Developments and Trends</h2>
          <p className={pClass}>
            Offices and legislators increasingly recognise that bad-faith
            filings burden the system. Measures include refusal of applications
            without a real intention to use, fee and filing-volume controls,
            enhanced examination, expungement and re-examination procedures,
            sanctions for abusive filers and greater information-sharing between
            offices. At the same time, enforcement depends on the evidence
            submitted by brand owners, and squatters adapt by changing
            structures, using straw applicants or filing in less-scrutinised
            classes. Global brands should therefore treat squatting as an
            ongoing risk management issue, not a one-time event.
          </p>

          <h2 className={h2Class}>Brand Owner Checklist</h2>
          <ul className={ulClass}>
            <li>
              Have we filed (or have a plan to file) in every key market,
              including manufacturing jurisdictions, before public announcement?
            </li>
            <li>
              Do our filings cover word marks, logos, slogans and local-language
              versions?
            </li>
            <li>
              Are contracts with distributors, agents and manufacturers clear
              that the brand is ours and that registration by them is
              prohibited?
            </li>
            <li>
              Are watch services running on all key registers, with a named
              person responsible for responding within opposition deadlines?
            </li>
            <li>
              Do we hold organised evidence of use, reputation and the first use
              date in each territory?
            </li>
            <li>
              Do we hold domain names and social handles that match our brand
              and its likely variants?
            </li>
            <li>
              Do we have a response playbook (investigation steps, route
              selection, budget authority and settlement parameters)?
            </li>
            <li>
              Do our board and commercial teams understand that early filing is
              part of the market-entry budget?
            </li>
          </ul>

          <h2 className={h2Class}>Conclusion</h2>
          <p className={pClass}>
            Trademark squatting exploits a gap between how brands are built,
            which is globally and quickly, and how trademark rights are granted,
            which is nationally and often to the first to file. The legal tools
            to fight squatters have improved, and courts and offices in many
            jurisdictions now take bad faith seriously, but those tools are
            slower, more uncertain and more expensive than prevention. Brands
            that file early, contract carefully, monitor registers and preserve
            evidence are far less likely to be held to ransom. Brands that
            discover a squatter should act promptly, choose the cheapest
            effective route and keep the possibility of settlement open while
            building a record that makes litigation credible.
          </p>
          <p className={pClass}>
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
