import Image from "next/image";
import React from "react";
import Banner from "@/components/assets/img/blog.svg";
import Question from "@/components/assets/img/question.svg";
import { Mail, Phone } from "lucide-react";
import { articles } from "../page";
import Link from "next/link";

interface PageProps {
  // define props here
}

export const metadata = {
  title: "Trademark Valuation: How Search and Monitoring Data Inform Brand Worth",
  description:
    "Learn how branded search data and trademark monitoring data feed ISO 10668 brand valuation, the relief-from-royalty method, and the legal and behavioural evidence valuers rely on.",
  keywords: ["trademark valuation", "brand valuation", "share of search", "trademark monitoring"],
};

const h2Class = "text-[20px] sm:text-[22px] md:text-[25px] font-bold";
const pClass = "text-[14px] sm:text-[15px] md:text-[16px]";
const ulClass = "list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const h4Class = "text-[16px] sm:text-[17px] md:text-[18px] font-bold";
const tableWrap = "overflow-x-auto";
const tableClass = "w-full border-collapse text-left text-[12px] sm:text-[14px]";
const thClass = "border border-gray-300 bg-[#202F5A] text-white p-2 align-top";
const tdClass = "border border-gray-300 p-2 align-top";

const approaches = [
  ["Relief from royalty", "Value equals the discounted royalties the owner avoids by owning the mark rather than licensing it", "Positioning the royalty rate within a market range, forecasting brand-attributable revenue, setting risk and life assumptions"],
  ["Income (premium profit / with-and-without)", "Value equals the incremental profit versus an unbranded equivalent", "Estimating the price premium and volume uplift attributable to the brand"],
  ["Multi-period excess earnings", "Brand earnings are what remain after charging returns to other assets", "Allocating earnings to the brand versus technology or customer relationships"],
  ["Market", "Value derived from comparable brand transactions", "Screening comparability by brand strength and legal position"],
  ["Cost", "Value based on the cost to recreate the brand", "Estimating the marketing spend needed to reach the same search prominence"],
];

const searchInputs = [
  ["Brand strength score", "Share of search and its trend can serve as a measurable indicator of salience within the behavioural analysis"],
  ["Royalty rate within the range", "A brand with rising, category-leading share of search supports the upper part of the range; a declining one supports the lower"],
  ["Revenue growth", "Trend in share of search shapes near-term growth and decay assumptions"],
  ["Discount rate", "High volatility or dependence on one product line or campaign supports a risk premium"],
  ["Remaining useful life", "Erosion signals (falling brand queries, rising generic terms) support a shorter life; stable or growing salience supports an indefinite life"],
];

const monitoringInputs = [
  ["Scope of the asset", "Confirms which marks, classes and territories are truly owned and valid"],
  ["Discount rate", "Pending conflicts in core classes, weak coverage, or heavy counterfeiting support a higher risk premium"],
  ["Royalty rate", "Strong enforceability and broad coverage support licence terms at the upper end of comparable ranges"],
  ["Useful life", "Proper renewal, use and enforcement support an indefinite life; non-use or genericide signals support a shorter one"],
  ["Deductions and adjustments", "Encumbrances, licence-outs, or co-existence agreements reduce owned value"],
  ["Cost projections", "Expected enforcement spend is a deduction from net benefits"],
];

const scenarios = [
  ["Base", "Brand strength 72/100; stable share of search; clean portfolio", "3.6%", "4% / 2%", "10.0%", "About $36.0M"],
  ["Strong", "Rising share of search; strong enforcement record", "4.0%", "6% / 2.5%", "9.5%", "About $48.1M"],
  ["Weak search", "Share of search falling for several quarters", "3.2%", "1% / 1%", "10.0%", "About $26.7M"],
  ["Weak search plus legal risk", "Falling search plus conflicting filings in a core class and gaps in territorial coverage", "3.2%", "1% / 1%", "11.0%", "About $24.0M"],
];

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Trademark Valuation.jpg"
          alt="Blog Banner"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Trademark Valuation: How Search and Monitoring Data Inform Brand Worth
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 28/09/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className={h2Class}>Why Trademark Valuation Matters Now</h2>
          <p className={pClass}>
            A trademark is legal protection wrapped around a commercial promise. Its worth is not the registration certificate. It is the future economic benefit that flows from customers recognizing the mark and choosing the branded product over alternatives, less the risk that the benefit is eroded or lost.
          </p>
          <p className={pClass}>
            Trademark valuations are needed for M&A and purchase price allocation, licensing and royalty negotiation, transfer pricing and tax, infringement damages, collateral for financing and internal portfolio decisions. In each case the valuer needs evidence about two things: how strongly the market responds to the brand and how secure the brand's legal position is. Search data and monitoring data are increasingly the most timely and objective evidence for each.
          </p>
          <ul className={ulClass}>
            <li><b>Search data</b> measures demand-side behavior: how often people actively look for the brand.</li>
            <li><b>Monitoring data</b> measures legal and commercial threat: who is filing, copying, infringing, or diluting around the brand and how the owner responds.</li>
          </ul>

          <h2 className={h2Class}>The Valuation Frameworks the Data Feeds</h2>

          <h4 className={h4Class}>ISO 10668 and ISO 20671</h4>
          <p className={pClass}>
            ISO 10668 sets requirements for monetary brand valuation. It requires the valuer to complete three types of analysis before forming an opinion: legal, behavioural and financial analysis. This structure maps directly onto the two data families in this article. Monitoring data primarily supports the legal analysis. Search data primarily supports the behavioural analysis. Both then flow into the financial model.
          </p>
          <p className={pClass}>
            ISO 20671, released in March 2019, provides direction on the elements, dimensions and indicators of brand strength that underpin the behavioural analysis. In the Brand Finance framework, brand strength is assessed through marketing investment, stakeholder equity and the impact of these on business performance.
          </p>

          <h4 className={h4Class}>The Main Valuation Approaches</h4>
          <div className={tableWrap}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Approach</th>
                  <th className={thClass}>Core idea</th>
                  <th className={thClass}>Where search and monitoring data help</th>
                </tr>
              </thead>
              <tbody>
                {approaches.map((row) => (
                  <tr key={row[0]}>
                    <td className={`${tdClass} font-semibold`}>{row[0]}</td>
                    <td className={tdClass}>{row[1]}</td>
                    <td className={tdClass}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={pClass}>
            The relief-from-royalty method is the workhorse. Brand Finance describes it as favoured by tax authorities and the courts because it calculates brand values by reference to documented third-party transactions. Its process is: score brand strength from 0 to 100, determine a sector royalty range from comparable licensing agreements, apply the score to the range, estimate brand-specific revenues, apply the resulting royalty rate to forecast revenues and discount the post-tax royalties to a net present value. For example, a sector range of 0-5% and a brand strength score of 80 out of 100 gives a royalty rate of 4%.
          </p>
          <p className={pClass}>
            Every step has a place where behavioral and legal evidence can move the answer: the strength score, the position within the royalty range, the growth forecast, the discount rate and the useful life.
          </p>

          <h4 className={h4Class}>Accounting Context</h4>
          <p className={pClass}>
            Accounting rules also shape when a valuation appears on a balance sheet. Under IAS 38, internally generated brands are not recognised as intangible assets, because the cost of generating them is hard to distinguish from the cost of running the business. In a business combination, however, the acquirer recognises acquired identifiable intangibles such as brand names even if the acquiree developed them internally and never capitalized them. A brand can therefore be invisible on the owner's balance sheet for decades and then be valued rigorously, at fair value, on the day it is acquired. That is when evidence quality matters most.
          </p>

          <h2 className={h2Class}>Search Data: The Behavioral Evidence</h2>

          <h4 className={h4Class}>What to Measure</h4>
          <ul className={ulClass}>
            <li><b>Branded search volume:</b> The count of queries containing the brand name is the simplest proxy for active interest. Because it reflects deliberate action, not passive exposure, it is a strong signal of salience: how readily the brand comes to mind at the moment of purchase.</li>
            <li><b>Share of search:</b> This normalizes branded volume against competitors. It is the percentage of branded searches a brand captures relative to all competing brands in the same category, proposed by Les Binet based on IPA research. The formula is your brand searches divided by total category searches, times 100. A brand with 800 of 10,000 category brand searches has an 8% share of search.</li>
            <li><b>Search-to-market-share gap:</b> Comparing share of search to actual market share shows whether the brand is punching above or below its weight, which is a useful input to the brand-strength score.</li>
            <li><b>Query composition:</b> The words around the brand name carry information. "Reviews," "pricing," and "login" suggest active consideration or customer use; "alternatives," "vs," "problems," or "scam" suggest weakening equity or reputational risk. A rising proportion of negative modifiers is an early warning of value erosion.</li>
            <li><b>Geographic and channel distribution:</b> Where searches originate supports territorial analysis, such as whether the brand's strength matches its registration coverage, and helps set region-specific royalty rates in licensing.</li>
            <li><b>Search results ownership:</b> If competitors or resellers bid on the brand term or rank above the owner, that indicates both pressure on the brand and potential conflicts to investigate.</li>
            <li><b>Trend shape:</b> Seasonality, event-driven spikes and long-run slope need to be separated. A brand with a viral spike and no sustained baseline is a very different asset from one with a steady, compounding base.</li>
          </ul>

          <h4 className={h4Class}>What the Research Says and Its Limits</h4>
          <p className={pClass}>
            Binet's analysis, presented at IPA's EffWorks Global 2020, covered three categories with different purchase cycles: automotive, energy and mobile handsets. He found that share of search was a leading indicator of market share in each category. The lead times varied: about six months for mobile phone handsets, zero to three months for energy and nine to twelve months for automotive.
          </p>
          <p className={pClass}>
            For a valuer, this matters because a forward-looking model needs forward-looking evidence. Reported revenue is historical. Share of search offers a sign of where the revenue forecast should tilt, months before the accounts show it. The caveats are important and a valuation report should state them:
          </p>
          <ul className={ulClass}>
            <li><b>Correlation, not causation:</b> The relationship was shown in specific categories. It should be tested on the brand's own history before it is relied on.</li>
            <li><b>Category dependence:</b> Lead times differ by purchase cycle and search may be less informative for products bought offline, in B2B settings, or through intermediaries.</li>
            <li><b>Tool limitations:</b> Public trend tools generally report normalized indices, not absolute counts, and sampling or query-matching can distort results. Common brand names create noise, such as a brand that is also an ordinary word.</li>
            <li><b>Channel shift:</b> As people ask AI assistants and use social platforms to find products, traditional search volume captures a shrinking share of discovery. Some practitioners now track brand presence in AI-generated answers alongside search, though that discipline is young and its measures are not yet standardized.</li>
          </ul>

          <h4 className={h4Class}>How Search Data Enters the Model</h4>
          <div className={tableWrap}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Model input</th>
                  <th className={thClass}>How search data informs it</th>
                </tr>
              </thead>
              <tbody>
                {searchInputs.map((row) => (
                  <tr key={row[0]}>
                    <td className={`${tdClass} font-semibold`}>{row[0]}</td>
                    <td className={tdClass}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className={h2Class}>Monitoring Data: The Legal and Commercial Evidence</h2>
          <p className={pClass}>
            Search data shows how much the market wants the brand. Monitoring data shows how well the owner controls it. It underpins the legal analysis ISO 10668 requires: what exactly is owned, where, with what encumbrances and how defensible it is. Regular <a className="text-blue-600 hover:underline" href="https://www.effemark.com/trademark-search-services">trademark search and monitoring</a> is the practical source of most of this evidence.
          </p>

          <h4 className={h4Class}>Sources and What They Reveal</h4>
          <ul className={ulClass}>
            <li><b>Trademark register watching:</b> Tracking new filings at national and regional offices reveals third parties adopting confusingly similar marks. Metrics include the number of conflicting applications per period, the classes and territories targeted and how quickly the owner responded.</li>
            <li><b>Opposition, cancellation and dispute outcomes:</b> A record of successful oppositions and settlements suggests a strong, well-policed mark. Repeated losses, or successful challenges to validity, point the other way.</li>
            <li><b>Portfolio coverage and status:</b> A monitored portfolio shows which marks are registered, in which classes and countries and when renewals are due. Gaps between where the brand sells and where it is registered are direct value discounts. Use requirements also matter: in the US, extended non-use can be treated as evidence of abandonment and European systems have their own non-use revocation periods. Monitoring should track use evidence for each mark and jurisdiction.</li>
            <li><b>Domain names and social handles:</b> Cybersquatting, lookalike domains and impersonating accounts show attempts to trade on the brand. Outcomes of domain disputes and takedowns show enforcement effectiveness.</li>
            <li><b>Marketplace and counterfeit monitoring:</b> Listings of counterfeit or gray-market goods, and the time taken to remove them, indicate both brand attractiveness and leakage. Heavy counterfeiting can reflect strong equity, but unchecked it erodes revenue and reputation.</li>
            <li><b>Genericide and dilution signals:</b> If the mark starts to be used as a common noun or verb in media, dictionaries, or by competitors, distinctiveness is at risk. Monitoring language usage gives early warning.</li>
            <li><b>Licensing and quality compliance:</b> For licensed brands, audit results, royalty reporting accuracy and quality-control incidents affect both cash flows and the legal risk of uncontrolled licensing.</li>
            <li><b>Litigation and enforcement history:</b> Frequency, cost and outcomes of enforcement actions inform the risk premium and the expected cost of defending the brand.</li>
          </ul>

          <h4 className={h4Class}>How Monitoring Data Enters the Model</h4>
          <div className={tableWrap}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Model input</th>
                  <th className={thClass}>How monitoring data informs it</th>
                </tr>
              </thead>
              <tbody>
                {monitoringInputs.map((row) => (
                  <tr key={row[0]}>
                    <td className={`${tdClass} font-semibold`}>{row[0]}</td>
                    <td className={tdClass}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className={h2Class}>Bringing the Two Together</h2>
          <p className={pClass}>
            Neither dataset is sufficient alone. A brand with soaring search and a weak, fragmented registration portfolio has value it may not be able to keep. A brand with an immaculate portfolio and falling search has protection around an asset that is losing worth. A combined view can be organized as a simple matrix:
          </p>
          <div className={tableWrap}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}></th>
                  <th className={thClass}>Strong monitoring / legal position</th>
                  <th className={thClass}>Weak monitoring / legal position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`${tdClass} font-semibold`}>Strong and rising search</td>
                  <td className={tdClass}>Highest value; support the upper part of the royalty range and the lower discount rate</td>
                  <td className={tdClass}>Valuable but exposed; fix coverage gaps, then reassess. Consider a higher risk premium</td>
                </tr>
                <tr>
                  <td className={`${tdClass} font-semibold`}>Weak or falling search</td>
                  <td className={tdClass}>Protected but fading; value depends on turnaround plans, so use shorter lives and lower growth</td>
                  <td className={tdClass}>Lowest value; possible impairment concerns</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className={h2Class}>A Worked Illustration (Hypothetical)</h2>
          <p className={pClass}>
            Consider a hypothetical consumer brand with $100 million of brand-attributable revenue in year one. The sector royalty range is 0-5%. Assume a 25% tax rate, a five-year explicit forecast and a terminal value at the end of year five.
          </p>
          <div className={tableWrap}>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Scenario</th>
                  <th className={thClass}>Evidence</th>
                  <th className={thClass}>Royalty rate</th>
                  <th className={thClass}>Growth (years 1-5 / terminal)</th>
                  <th className={thClass}>Discount rate</th>
                  <th className={thClass}>Indicative value</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row) => (
                  <tr key={row[0]}>
                    <td className={`${tdClass} font-semibold`}>{row[0]}</td>
                    <td className={tdClass}>{row[1]}</td>
                    <td className={tdClass}>{row[2]}</td>
                    <td className={tdClass}>{row[3]}</td>
                    <td className={tdClass}>{row[4]}</td>
                    <td className={tdClass}>{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={pClass}>
            The illustration is deliberately simple, but it shows the mechanism. In the weak-search scenario, the value is roughly a quarter lower than the base case. Adding monitoring-driven risk lowers it by roughly a third. None of the inputs is invented from nothing: each can be supported by documented trends and records, which is exactly what tax authorities, courts and acquirers look for.
          </p>

          <h2 className={h2Class}>Practical Guidance for Building the Evidence Base</h2>
          <ul className={ulClass}>
            <li><b>Define the mark set and competitor set first:</b> Decide exactly which names, spellings and variants count as branded queries and which competitors define the category. Inconsistent definitions are the most common source of error.</li>
            <li><b>Use long time series:</b> Multi-year data, ideally covering a full seasonal and campaign cycle, lets the valuer distinguish structural change from noise. Keep the raw exports.</li>
            <li><b>Normalize and document:</b> Record tools, dates, geographies, languages and query rules so the analysis can be reproduced. Reproducibility is what makes evidence defensible.</li>
            <li><b>Separate brand from generic demand:</b> Exclude generic and product-category terms from branded counts and adjust for terms where the brand shares its name with ordinary words or other businesses.</li>
            <li><b>Test the search-sales relationship on the brand's own data:</b> Do not assume category-level findings apply. Check lead times and correlation against the brand's own sales history.</li>
            <li><b>Keep a watch log:</b> Record each conflict, its status, the response and the outcome. A clean log is direct evidence for the legal analysis.</li>
            <li><b>Triangulate:</b> Combine search data with survey-based brand tracking, pricing and margin premium analysis and comparable licence data. Valuations should never rest on a single metric.</li>
            <li><b>Reconcile registers and sales:</b> Map registered marks, classes and territories against where and how the brand actually trades and flag gaps.</li>
            <li><b>Update regularly:</b> Both datasets move continuously. Periodic refreshes turn a one-off valuation into a brand-health monitor, which is also how brand-strength frameworks are meant to be used.</li>
          </ul>
          <p className={pClass}>
            Protect your intellectual property across international markets with our{" "}
            <a href="https://effemark.com/global-trademark-search" className="text-blue-600 hover:underline">
              comprehensive global trademark search services
            </a>.
          </p>

          <h2 className={h2Class}>Limitations and Risks</h2>
          <ul className={ulClass}>
            <li><b>Search is a proxy, not sales:</b> It captures interest, not purchase. It is weaker where buying happens through intermediaries, offline channels, or contracts.</li>
            <li><b>Manipulation and noise:</b> Campaigns, news events, bots and spam can distort search data, and one viral event can inflate a trend.</li>
            <li><b>Data access:</b> Comprehensive counterfeit and marketplace data can be hard to obtain, and coverage varies by platform and country.</li>
            <li><b>Legal nuance:</b> Monitoring flags a potential conflict; it does not decide whether the conflict is legally valid. Legal analysis is still needed to interpret it.</li>
            <li><b>Subjectivity remains:</b> Even with strong data, translating evidence into a royalty rate or discount rate requires judgment. Sensitivity analysis is essential.</li>
            <li><b>Standards and jurisdictions differ:</b> Rules for use, revocation and valuation acceptance vary by country, so local advice is needed.</li>
          </ul>

          <h2 className={h2Class}>Conclusion</h2>
          <p className={pClass}>
            Trademark valuation has traditionally leaned on historical financials and the judgment of experienced valuers. Search and monitoring data add two things those inputs lack: timeliness and observable behavior. Search data shows whether the market is moving toward or away from the brand, often before revenue shows it. Monitoring data shows whether the owner can keep what the market is paying for. Used together, within the legal, behavioural and financial structure that ISO 10668 requires, they turn brand worth from an opinion into a documented, updatable estimate that can be defended to a buyer, an auditor, a tax authority, or a court.
          </p>

          <h2 className={h2Class}>About EffeMark</h2>
          <p className={pClass}>
            EffeMark serves as a trusted partner in global trademark protection, offering comprehensive search and monitoring solutions across 180+ countries with over two decades of IP expertise. Leveraging hybrid AI-powered algorithms and manual expert verification, they deliver customizable reports on trademark availability, similar marks, phonetic equivalents, and risk assessments within <b>3-5 business days</b> to prevent costly disputes.
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
