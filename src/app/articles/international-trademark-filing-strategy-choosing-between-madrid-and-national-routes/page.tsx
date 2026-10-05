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
  title: "Madrid System vs National Trademark Filings: Which Route Is Right?",
  description:
    "Madrid or national filings? Compare cost, central attack risk, tailoring and administration, and learn how to build a hybrid international trademark filing strategy.",
  keywords: [
    "Madrid System",
    "international trademark filing",
    "national trademark filing",
    "central attack",
    "Paris Convention priority",
    "WIPO trademark",
    "international trademark strategy",
  ],
};

const H2_CLASS = "text-[20px] sm:text-[22px] md:text-[25px] font-bold";
const H3_CLASS = "text-[17px] sm:text-[19px] md:text-[21px] font-bold";
const P_CLASS = "text-[14px] sm:text-[15px] md:text-[16px]";
const UL_CLASS =
  "list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const OL_CLASS =
  "list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";

const comparisonRows: [string, string, string][] = [
  ["Upfront cost with many countries", "Generally lower", "Generally higher"],
  ["Administration", "Centralized", "Fragmented"],
  ["Requires a basic mark", "Yes", "No"],
  ["Central attack risk (first 5 years)", "Yes", "No"],
  ["Tailoring per country", "Limited", "Full"],
  ["Local counsel", "Needed mainly after a refusal", "Needed from the start"],
  ["Coverage", "Members only", "Any country"],
  ["Post-filing changes", "One central record", "Filed country by country"],
  ["Speed to broad coverage", "Fast", "Slower"],
];

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_International Trademark Filing Strategy.jpg"
          alt="Madrid System vs National Trademark Filings"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            International Trademark Filing Strategy: Choosing Between Madrid and
            National Routes
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 05/10/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className={H2_CLASS}>Introduction</h2>
          <p className={`text-justify ${P_CLASS}`}>
            Trademark rights are territorial. A registration in one country gives
            you no rights in another, so any brand that sells, manufactures, or
            advertises across borders needs a plan for where and how to file.
            There are two main routes: the Madrid System, which lets you seek
            protection in many countries through one international application,
            and direct national (or regional) filings, where you file separately
            with each country&apos;s trademark office.
          </p>
          <p className={P_CLASS}>
            Neither route is better in every case. Madrid is usually cheaper and
            easier to administer, while national filings offer independence and
            flexibility. The right choice depends on your markets, your budget,
            how much risk you can tolerate, and how strong your home-country
            position is.
          </p>

          <h2 className={H2_CLASS}>How the Two Routes Work</h2>
          <h3 className={H3_CLASS}>The Madrid System</h3>
          <p className={P_CLASS}>
            The Madrid System is administered by the World Intellectual Property
            Organization (WIPO) under the Madrid Agreement and the Madrid
            Protocol. Most current filings are made under the Protocol. The
            process runs as follows:
          </p>
          <ol className={OL_CLASS}>
            <li>
              <b>You need a basic mark.</b> You must first have an application or
              registration in your &quot;office of origin,&quot; which is
              normally the office of your home country or region.
            </li>
            <li>
              <b>You file one international application</b> in one language
              (English, French, or Spanish), through your office of origin,
              designating the countries where you want protection.
            </li>
            <li>
              <b>The office of origin certifies the application,</b> and WIPO
              examines it for formalities and records it in the International
              Register.
            </li>
            <li>
              <b>Each designated office examines the mark</b> under its own
              national law. Each can grant protection or issue a provisional
              refusal within a set time limit (generally 12 months, or 18 months
              for offices that have made the relevant declaration).
            </li>
            <li>
              <b>Protection is decided country by country.</b> A refusal in one
              country does not affect the others.
            </li>
            <li>
              <b>You manage one registration.</b> Renewals (every ten years),
              ownership changes, and address updates can be handled centrally
              through WIPO. You can also add countries later through subsequent
              designations.
            </li>
          </ol>
          <p className={P_CLASS}>
            The Madrid System is a filing and management mechanism, not a single
            global trademark. Each designated country still applies its own
            substantive law, and the result is a bundle of national rights.
          </p>

          <h3 className={H3_CLASS}>National (Direct) Filings</h3>
          <p className={P_CLASS}>
            With direct filing, you apply separately to each country&apos;s
            office, or to a regional office such as the EUIPO for an EU
            trademark. Each application follows local rules on language,
            classification practice, specimens, fees, and procedure, and each
            registration stands on its own. In most countries a foreign applicant
            needs a local attorney or agent.
          </p>

          <h2 className={H2_CLASS}>Key Advantages of Madrid</h2>
          <ul className={UL_CLASS}>
            <li>
              <b>Cost efficiency across many countries:</b> one application, one
              set of forms, one currency for WIPO fees, and no separate local
              agent needed at the filing stage. The savings are usually largest
              when you designate many jurisdictions.
            </li>
            <li>
              <b>Simplified administration:</b> a single renewal date, a single
              record for assignments and licenses, and centralized changes of name
              and address reduce the risk of missed deadlines.
            </li>
            <li>
              <b>Flexible expansion:</b> you can add designations to an existing
              international registration as your business grows, without refiling
              from scratch.
            </li>
            <li>
              <b>Speed to filing:</b> you can cover many territories quickly,
              which helps when you need to lock in coverage before launch.
            </li>
            <li>
              <b>Priority is preserved:</b> under the Paris Convention you have
              six months from your first filing to file abroad and claim the
              earlier date. This applies to both routes, and Madrid lets you claim
              priority in a single application.
            </li>
          </ul>

          <h2 className={H2_CLASS}>Key Limitations and Risks of Madrid</h2>
          <h3 className={H3_CLASS}>
            1. Dependency on the Basic Mark (Central Attack)
          </h3>
          <p className={P_CLASS}>
            For the first five years, the international registration depends on
            the basic application or registration. If the basic mark is refused,
            cancelled, or limited within that period, the international
            registration falls to the same extent in every designated country.
            This is often called &quot;central attack.&quot; A successful
            challenge at home can take down your entire international portfolio.
          </p>
          <p className={P_CLASS}>
            If the dependency ends, you can generally convert the international
            registration into national applications through
            &quot;transformation,&quot; keeping the original date, but this
            requires new filings, new fees, and deadlines.
          </p>

          <h3 className={H3_CLASS}>2. Scope Is Capped by the Basic Mark</h3>
          <p className={P_CLASS}>
            Your international application cannot cover broader goods and
            services than the basic mark. If your home filing is narrow, your
            international coverage is narrow too. This matters in offices such as
            the USPTO, which can be strict on identifications.
          </p>

          <h3 className={H3_CLASS}>3. Local Practice Can Complicate Things</h3>
          <p className={P_CLASS}>
            A Madrid designation still meets local examination, so you may face
            refusals, requirements for local representatives, and country-specific
            rules. Some examples:
          </p>
          <ul className={UL_CLASS}>
            <li>
              <b>Use requirements:</b> the US requires proof of use at specified
              points, such as a declaration of use between the fifth and sixth
              year, and some countries have their own use-related rules.
            </li>
            <li>
              <b>Classification and identification:</b> offices can object to
              wording that is acceptable elsewhere.
            </li>
            <li>
              <b>Local representation:</b> once a refusal is issued, you will
              typically need a local agent to respond.
            </li>
          </ul>

          <h3 className={H3_CLASS}>4. Not Every Country Is a Member</h3>
          <p className={P_CLASS}>
            Membership is broad and has been growing, but it is not universal.
            Some economies are outside the system, so a global strategy usually
            needs national filings for at least some markets. Check the current
            WIPO member list before planning.
          </p>

          <h3 className={H3_CLASS}>5. Less Tailoring</h3>
          <p className={P_CLASS}>
            A single international application is harder to adapt to each
            market&apos;s requirements, such as a localized version of the mark or
            different goods and services per country. You can vary the list of
            goods and services by designation, but there is less room for local
            customization.
          </p>

          <h3 className={H3_CLASS}>6. Fees Are Not Uniform</h3>
          <p className={P_CLASS}>
            Madrid fees combine a basic fee, possible supplementary or
            complementary fees, and, for many countries, individual fees set by
            each designated office. Some individual fees are close to what you
            would pay filing directly, so savings depend on which countries you
            pick. Always check WIPO&apos;s fee calculator for your exact
            combination.
          </p>

          <h2 className={H2_CLASS}>Advantages of National Filings</h2>
          <ul className={UL_CLASS}>
            <li>
              <b>Independence:</b> each registration stands alone. A problem with
              your home application or a challenge in one country doesn&apos;t
              cascade to others.
            </li>
            <li>
              <b>Full tailoring:</b> you can craft the mark, the goods and
              services, and the strategy for each market. This is especially
              useful for translated, transliterated, or localized marks, for
              different product lines in different countries, and for
              country-specific specimens and use evidence.
            </li>
            <li>
              <b>Direct relationship with local counsel:</b> from the start, a
              local attorney handles the file and understands local examiners and
              practice, which can help with tough examinations.
            </li>
            <li>
              <b>No dependence on a home application:</b> you don&apos;t need a
              basic mark, so you can file abroad even if your home application is
              delayed or vulnerable.
            </li>
            <li>
              <b>Access to non-Madrid markets:</b> where a country isn&apos;t a
              member, national filing is the only option.
            </li>
          </ul>

          <h2 className={H2_CLASS}>Disadvantages of National Filings</h2>
          <ul className={UL_CLASS}>
            <li>
              <b>Higher cost when many countries are involved:</b> filing fees,
              attorney fees, and translation costs multiply.
            </li>
            <li>
              <b>More administrative burden:</b> separate deadlines, renewals, and
              records for each country increase the risk of a missed date.
            </li>
            <li>
              <b>Slower to assemble:</b> coordinating many local firms takes time.
            </li>
            <li>
              <b>Ongoing maintenance costs:</b> each registration needs its own
              renewal, recordals, and docketing.
            </li>
          </ul>

          <h2 className={H2_CLASS}>Comparison at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-[13px] sm:text-[14px] md:text-[15px]">
              <thead>
                <tr className="bg-[#202F5A] text-white">
                  <th className="border border-gray-300 p-2">Factor</th>
                  <th className="border border-gray-300 p-2">Madrid System</th>
                  <th className="border border-gray-300 p-2">
                    National filings
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([factor, madrid, national]) => (
                  <tr key={factor}>
                    <td className="border border-gray-300 p-2 font-semibold">
                      {factor}
                    </td>
                    <td className="border border-gray-300 p-2">{madrid}</td>
                    <td className="border border-gray-300 p-2">{national}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className={H2_CLASS}>A Decision Framework</h2>
          <p className={P_CLASS}>Work through these questions in order.</p>
          <ol className={OL_CLASS}>
            <li>
              <b>How strong is your home mark?</b> If you have a strong, clearly
              registrable basic mark, Madrid&apos;s dependency risk is lower. If it
              is vulnerable, for example because of a likely opposition or a
              descriptive element, dependency raises the stakes, and national
              filings in your key markets may be safer.
            </li>
            <li>
              <b>How many countries do you need?</b> Madrid&apos;s cost advantage
              grows with the number of designations. For two or three countries,
              the difference may be small or even reversed once individual fees
              and local counsel are counted. For ten or more, Madrid often wins
              clearly.
            </li>
            <li>
              <b>Which countries matter most?</b> Rank your markets by commercial
              importance and by risk. Your highest-value, highest-risk markets may
              deserve direct filings for independence and control, while
              lower-priority markets can go through Madrid.
            </li>
            <li>
              <b>Do you need a localized mark or custom goods and services?</b> If
              your brand needs a local-language version, or your offering differs
              by country, national filings give you the flexibility you need.
            </li>
            <li>
              <b>Are the target countries Madrid members?</b> Check membership
              first. This can settle the question for some jurisdictions.
            </li>
            <li>
              <b>What is your risk tolerance and budget?</b> Madrid is more
              economical but ties the fate of your designations together for five
              years. National filings cost more but insulate you.
            </li>
            <li>
              <b>What is your timeline?</b> If you need to move fast across many
              markets, Madrid is efficient. If you&apos;re waiting on your home
              application, remember that the Madrid application requires a filed
              basic mark, so you can file at home first and follow with Madrid, or
              file nationally abroad in parallel.
            </li>
          </ol>

          <h2 className={H2_CLASS}>The Hybrid Strategy</h2>
          <p className={P_CLASS}>
            Many businesses do not choose one route exclusively. A common
            approach:
          </p>
          <ul className={UL_CLASS}>
            <li>
              File nationally or regionally in critical markets, such as your
              largest sales markets and your manufacturing base, especially where
              counterfeiting or squatting is a concern.
            </li>
            <li>
              Use Madrid for the long tail of secondary markets where the cost of
              individual filings is hard to justify.
            </li>
            <li>
              Layer in regional systems such as the EU trademark, which gives
              unitary protection across the EU through one filing.
            </li>
            <li>
              Add subsequent designations through Madrid as you enter new
              markets.
            </li>
          </ul>
          <p className={P_CLASS}>
            This balances cost against control and reduces the downside of central
            attack.
          </p>

          <h2 className={H2_CLASS}>Special Considerations</h2>
          <ul className={UL_CLASS}>
            <li>
              <b>First-to-file jurisdictions:</b> in some countries, rights go to
              whoever files first rather than whoever used the mark first. China
              is the classic example, and trademark squatting is a well-known
              risk. If you plan to enter such a market, file early, and consider
              filing Chinese-language versions of the mark as well.
            </li>
            <li>
              <b>Bad-faith filings:</b> squatters may register your mark in
              countries where you haven&apos;t filed. Early filing, or at least a
              watch on those registers, is the best defense.
            </li>
            <li>
              <b>Use requirements:</b> some countries cancel marks that
              aren&apos;t used within a set period after registration, and some
              require proof of use or a declaration of use to maintain the
              registration. Plan for evidence collection in each territory.
            </li>
            <li>
              <b>Deadlines and priority:</b> the six-month Paris priority window
              is short. Decide your strategy before or soon after your first
              filing so you can claim it.
            </li>
            <li>
              <b>Brexit and regional changes:</b> after Brexit, EU trademarks no
              longer cover the UK, so the UK is a separate designation or filing.
              Regional coverage rules can change, so confirm current arrangements.
            </li>
            <li>
              <b>Ownership and licensing:</b> Madrid records assignments and
              licenses centrally, while national filings require separate
              recordals. If you expect to transfer or license the brand, this can
              affect your choice.
            </li>
            <li>
              <b>Trademark clearance:</b> whichever route you choose, run
              clearance searches in your target markets first. A registration
              doesn&apos;t help if it conflicts with prior rights that an examiner
              or a third party later raises.
            </li>
          </ul>

          <h2 className={H2_CLASS}>Typical Scenarios</h2>
          <ul className={UL_CLASS}>
            <li>
              <b>Startup with a strong home mark and a plan to sell in ten
              countries:</b> Madrid is likely the most economical, perhaps with a
              national filing in the single most important or riskiest market.
            </li>
            <li>
              <b>Established brand entering China and the EU, with limited other
              expansion:</b> direct filings in these key markets, possibly with a
              Madrid designation for a few secondary ones.
            </li>
            <li>
              <b>Company with a narrow or challenged home registration:</b>{" "}
              consider national filings abroad in important markets to avoid
              central attack exposure, or wait until the home registration is
              secure before relying on Madrid.
            </li>
            <li>
              <b>Brand needing localized names in several languages:</b> national
              filings, tailored per market.
            </li>
            <li>
              <b>Portfolio that will grow over time:</b> start with Madrid for
              flexibility and add subsequent designations as new markets open.
            </li>
          </ul>

          <h2 className={H2_CLASS}>Practical Checklist</h2>
          <ol className={OL_CLASS}>
            <li>Confirm your home filing status and its strength.</li>
            <li>List target markets, ranked by value and risk.</li>
            <li>
              Check Madrid membership and any special requirements for each.
            </li>
            <li>
              Compare total costs using WIPO&apos;s fee calculator and local
              attorney quotes.
            </li>
            <li>Decide which markets need independent national filings.</li>
            <li>
              File the basic application, and claim Paris priority within six
              months.
            </li>
            <li>
              Prepare goods and services lists that will hold up under different
              offices&apos; practices.
            </li>
            <li>
              Set up docketing for refusal deadlines, the five-year dependency
              period, use requirements, and ten-year renewals.
            </li>
            <li>Monitor the registers in key markets for conflicting filings.</li>
            <li>Review the strategy periodically as your markets change.</li>
          </ol>

          <h2 className={H2_CLASS}>Conclusion</h2>
          <p className={P_CLASS}>
            Madrid and national filings are complementary tools. Madrid offers
            cost efficiency and easy administration for broad coverage, at the
            price of dependency on the basic mark and less tailoring. National
            filings offer independence and precision, at higher cost and
            administrative load. For most brands, the best answer is a deliberate
            mix: national or regional filings where the stakes are highest, and
            Madrid where breadth matters more than control. Deciding this early,
            before your first filing and within the priority window, keeps your
            options open and your costs predictable.
          </p>
          <p className={P_CLASS}>
            <Link
              href="/product/us-trademark-search-advanced-ai-full-search"
              className="text-blue-600 underline hover:no-underline"
            >
              US Trademark Search - Advanced AI Full Search
            </Link>
          </p>
          <p className={P_CLASS}>
            <b>Follow Us: </b>
            <a
              href="https://www.linkedin.com/company/effemark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
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
