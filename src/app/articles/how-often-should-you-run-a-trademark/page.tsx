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
  title: "How Often Should You Run a Trademark Watch? A Frequency Guide for Every Brand",
  description:
    "There is no single frequency that works for every brand. Learn how monthly, weekly, and continuous trademark watch schedules protect your portfolio.",
  keywords: [
    "Trademark Watch Frequency",
    "How Often to Monitor Trademarks",
    "Enterprise Trademark Monitoring",
    "Trademark Watch Service",
    "Brand Protection Strategy",
  ],
};

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_How Often Should You Run a Trademark Watch_.jpg"
          alt="How often should you run a trademark watch - a frequency guide for every brand"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            How Often Should You Run a Trademark Watch? A Frequency Guide for
            Every Brand
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 20/04/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            For a large brand, trademark monitoring is not something that can
            be treated as a once-a-year legal housekeeping task. New
            trademark applications are filed continuously. Competitors expand
            into new markets. Startups launch products with names that may
            overlap with established brands. Existing businesses may
            introduce new logos, product lines, or services that create
            potential conflicts.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            That raises an important question for brand and legal teams: how
            often should you run a{" "}
            <strong>trademark watch</strong>? The short answer is that there
            is no single frequency that works for every brand. The
            appropriate schedule depends on factors such as the size of your
            trademark portfolio, geographic reach, industry, competitive
            environment, launch activity and the potential business impact of
            a conflicting mark.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For large organizations, however, continuous or at least weekly
            monitoring is generally more appropriate than occasional manual
            searches. A professional trademark watch service can help turn
            that monitoring into a structured, repeatable process.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What Is a Trademark Watch?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark watch is an ongoing monitoring program designed to
            identify potentially conflicting trademark activity. Depending on
            the scope of the service, monitoring may cover:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>New trademark applications</li>
            <li>Newly published trademarks</li>
            <li>Similar word marks</li>
            <li>Similar logos and designs</li>
            <li>Potentially conflicting goods and services</li>
            <li>Domain-name activity</li>
            <li>Marketplace or online use</li>
            <li>Company and business-name activity</li>
            <li>Relevant trademark activity in international markets</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The purpose is not simply to collect names that resemble your
            trademarks. The objective is to identify developments that could
            potentially affect your brand and bring important results to the
            attention of the appropriate legal or brand-protection team.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For U.S. trademarks, the USPTO publishes the Trademark Official
            Gazette (TMOG) weekly, and publication begins an initial 30-day
            period during which eligible parties may oppose an application.
            That makes timely monitoring particularly important when your
            organization may need to evaluate whether action is appropriate.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            How Often Should a Trademark Watch Be Run?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For most large brands, the answer is as frequently as meaningful
            new activity can arise. A practical frequency framework looks
            like this:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px] sm:text-[14px] md:text-[16px]">
              <thead>
                <tr className="bg-[#202F5A] text-white">
                  <th className="border border-gray-300 p-2 text-left">
                    Brand Profile
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Recommended Monitoring Frequency
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Small or low-risk brand
                  </td>
                  <td className="border border-gray-300 p-2">Monthly</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Growing brand
                  </td>
                  <td className="border border-gray-300 p-2">Weekly</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Established national brand
                  </td>
                  <td className="border border-gray-300 p-2">
                    Weekly or continuous
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Global enterprise brand
                  </td>
                  <td className="border border-gray-300 p-2">
                    Continuous or daily monitoring
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Brand during a major launch
                  </td>
                  <td className="border border-gray-300 p-2">
                    Daily or continuous
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    High-risk or heavily counterfeited brand
                  </td>
                  <td className="border border-gray-300 p-2">
                    Continuous, with additional enforcement monitoring
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These are strategic guidelines rather than legal requirements.
            The appropriate schedule should be determined according to your
            brand&apos;s risk profile and the jurisdictions and rights being
            monitored.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Monthly Trademark Watching: When Is It Enough?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Monthly monitoring may be suitable for a small portfolio with
            relatively limited exposure. For example, a company with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>One or two core trademarks</li>
            <li>Limited geographic operations</li>
            <li>Few competitors</li>
            <li>Stable product offerings</li>
            <li>Low levels of unauthorized use</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            may not need the same monitoring intensity as a multinational
            consumer brand. Monthly monitoring can provide a reasonable
            baseline for identifying new activity while keeping monitoring
            costs manageable. However, monthly monitoring creates a larger
            gap between an event occurring and your team learning about it.
            For a major brand, that delay may be undesirable.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Weekly Trademark Watching: A Stronger Baseline for Established
            Brands
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Weekly monitoring is often a practical baseline for established
            brands with meaningful trademark portfolios. The USPTO&apos;s TMOG
            is published every Tuesday, making weekly review particularly
            relevant for U.S. trademark watching. A weekly watch can help a
            brand team identify potentially problematic applications soon
            after they enter the publication process. This gives legal teams
            an opportunity to:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Review the new mark.</li>
            <li>Compare it with the company&apos;s rights.</li>
            <li>Evaluate the goods or services involved.</li>
            <li>Assess potential marketplace confusion.</li>
            <li>Investigate the applicant.</li>
            <li>Determine whether further action is appropriate.</li>
          </ol>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For a large brand, the value of weekly monitoring is not
            necessarily that every result requires action. It is that
            potentially important developments are surfaced consistently
            instead of being discovered months later.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Continuous Trademark Monitoring for Global Brands
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Large multinational brands often need a more comprehensive
            approach. If a company operates across multiple countries,
            monitors a large trademark portfolio, or competes in a rapidly
            changing industry, waiting for a monthly review may create
            unnecessary exposure. Continuous monitoring can provide alerts
            when relevant activity is detected, allowing the
            brand-protection or legal team to review developments sooner.
            This can be especially valuable for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Global consumer brands</li>
            <li>Technology companies</li>
            <li>Pharmaceutical and healthcare companies</li>
            <li>Financial services companies</li>
            <li>Luxury brands</li>
            <li>Retail organizations</li>
            <li>Entertainment companies</li>
            <li>Fast-growing digital brands</li>
            <li>Companies with extensive licensing programs</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The larger the commercial footprint, the more difficult it
            becomes to rely on periodic manual searches.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Trademark Watching During a Product Launch
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Your normal monitoring schedule may not be appropriate during a
            major brand launch. Suppose a company is preparing to launch a
            new product under a new name. That name may attract attention
            from competitors, new market entrants, or businesses attempting
            to capitalize on consumer recognition. During a launch, consider
            increasing monitoring frequency for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>The new brand name</li>
            <li>Similar spellings</li>
            <li>Phonetic variations</li>
            <li>Translations and transliterations</li>
            <li>Similar logos</li>
            <li>Related product names</li>
            <li>Relevant domains</li>
            <li>Social media identifiers</li>
            <li>Marketplace listings</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A launch-specific watch can operate alongside the company&apos;s
            regular portfolio monitoring. Once the launch period stabilizes,
            the brand can return to its standard monitoring cadence.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Large Trademark Portfolios Need More Frequent Monitoring
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Large organizations may own hundreds or thousands of trademarks
            across jurisdictions and product categories. Manually reviewing
            that volume of information can quickly become impractical. More
            importantly, not every potentially conflicting mark will be an
            obvious duplicate. A meaningful trademark watch may need to
            identify variations involving:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Spelling</li>
            <li>Sound</li>
            <li>Meaning</li>
            <li>Translation</li>
            <li>Design elements</li>
            <li>Product categories</li>
            <li>Services</li>
            <li>Industry context</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is why enterprise trademark watching should be treated as a
            risk-management process, not simply as a database search.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            The Difference Between Watching and Enforcement
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark watch identifies potentially relevant activity. It
            does not automatically mean that the brand should oppose,
            challenge, or sue. This distinction is important. For example, a
            monitoring report might identify a new application containing a
            term similar to your company&apos;s trademark. Your legal team
            may determine that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>There is no meaningful conflict.</li>
            <li>The goods and services are unrelated.</li>
            <li>The applicant operates in a different market.</li>
            <li>The mark is sufficiently different.</li>
            <li>Further investigation is necessary.</li>
            <li>
              An opposition or other legal action should be considered.
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The watch provides the information. Your legal or
            brand-protection team determines the appropriate response. The
            USPTO notes that trademark infringement involves unauthorized use
            in connection with goods or services in a manner likely to cause
            confusion, deception, or mistake about source. Therefore,
            similarity alone does not automatically establish infringement.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Timing Matters
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            One of the biggest advantages of trademark watching is the
            opportunity to identify potentially conflicting applications
            while they are still progressing through the registration
            process. In the United States, publication in the TMOG begins an
            initial 30-day opposition period. That means a brand should not
            treat trademark watching as a historical reporting exercise. The
            value comes from identifying relevant activity early enough for
            the organization to evaluate its options. A monitoring program
            that produces a report weeks or months after a relevant event may
            provide information, but it may not provide the same practical
            value as timely notification.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What Should a Large Brand Monitor?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A sophisticated trademark watch program should be tailored to the
            organization&apos;s risk profile.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            1. Core House Marks
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These are typically the company&apos;s most valuable brand
            identifiers and should receive the highest level of attention.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            2. Product and Service Brands
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Companies with large product portfolios may need separate
            watches for individual product families and sub-brands.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            3. Logos and Design Marks
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Word-based searches alone may miss potentially relevant design
            similarities. Design-related monitoring can therefore be
            important for brands whose visual identity is commercially
            significant. The USPTO provides a Design Search Code system for
            searching design elements associated with trademarks.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            4. New Brand Names Before Launch
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Pre-launch monitoring can help organizations identify potential
            conflicts before significant marketing and development
            investment is committed.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            5. International Trademark Activity
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Global brands should consider monitoring relevant jurisdictions
            based on their operations, planned expansion, licensing
            arrangements and competitive exposure.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            A Practical Frequency Model for Enterprise Brand Teams
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Instead of applying one frequency to every trademark, large
            organizations can create different monitoring tiers.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Tier 1: Critical Brands
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <strong>Frequency:</strong> Continuous or daily. Use for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Corporate house marks</li>
            <li>Flagship consumer brands</li>
            <li>High-value product names</li>
            <li>Brands facing significant competitive activity</li>
            <li>Marks associated with substantial revenue</li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Tier 2: Important Commercial Brands
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <strong>Frequency:</strong> Weekly. Use for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Established product lines</li>
            <li>Regional brands</li>
            <li>Significant service marks</li>
            <li>Brands operating in moderately competitive categories</li>
          </ul>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Tier 3: Lower-Risk Portfolio Marks
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <strong>Frequency:</strong> Monthly. Use for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Older or less commercially important marks</li>
            <li>Limited-use marks</li>
            <li>Marks in stable markets</li>
            <li>Secondary brands</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This tiered approach allows legal teams to allocate monitoring
            resources according to actual business risk.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            How Trademark Watch Services Help Large Brand Teams
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For an enterprise legal department, the challenge is rarely
            understanding that trademark monitoring is important. The
            challenge is managing it at scale. A professional trademark watch
            service can help by providing:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Automated monitoring</li>
            <li>Regular screening of relevant trademark databases</li>
            <li>Customized watch criteria</li>
            <li>Similarity-based monitoring</li>
            <li>Jurisdiction-specific monitoring</li>
            <li>Consolidated reporting</li>
            <li>Alerts for potentially relevant filings</li>
            <li>Portfolio-level organization</li>
            <li>Escalation workflows</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Instead of having internal counsel repeatedly conduct manual
            searches, a dedicated service can handle the monitoring layer and
            deliver potentially relevant results for professional review.
            This can allow legal teams to spend more time on risk assessment
            and strategic decision-making rather than repetitive searching.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What Should Happen After a Watch Alert?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A good trademark watch program should have a defined response
            workflow. For example: Monitor &rarr; Detect &rarr; Review &rarr;
            Assess &rarr; Escalate &rarr; Act.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A potential conflict might first be detected automatically or
            through a professional search. The result can then be reviewed to
            determine whether it is genuinely relevant. If it appears
            significant, the matter can be escalated to the appropriate
            trademark counsel or brand-protection team. Depending on the
            circumstances, the organization may then consider options such as
            monitoring the applicant further, contacting the other party,
            filing an opposition where appropriate, or pursuing another
            available legal strategy. The appropriate response depends on the
            specific facts and applicable law.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Is Annual Trademark Watching Enough?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For a large brand, annual monitoring is generally too infrequent
            to serve as a meaningful proactive watch. An annual search may
            provide a snapshot of trademark activity, but it leaves long
            periods during which new applications and other developments can
            go unnoticed. It also does not align well with the U.S.
            trademark publication process, where relevant marks are
            published weekly and the initial opposition period begins after
            publication. Annual portfolio reviews can still be useful, but
            they should complement, rather than replace, ongoing monitoring.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            The Right Frequency Depends on Risk
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            There is no universal rule stating that every trademark must be
            monitored daily, weekly, or monthly. Instead, the right question
            is: how quickly would your business need to know about a
            potentially conflicting trademark? If the answer is &quot;as soon
            as possible,&quot; a higher-frequency watch is justified. For a
            global brand whose trademark represents substantial goodwill and
            revenue, continuous monitoring may make sense. For a smaller,
            low-risk portfolio, monthly monitoring may be sufficient. The
            important thing is to make the frequency intentional rather than
            accidental.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Build a Trademark Watch Strategy Around Your Brand
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark monitoring works best when it is integrated into the
            broader brand-protection strategy. Before selecting a frequency,
            consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>How valuable is the mark?</li>
            <li>How many jurisdictions matter?</li>
            <li>How large is the trademark portfolio?</li>
            <li>How competitive is the industry?</li>
            <li>How frequently are new products launched?</li>
            <li>How quickly can your legal team respond to alerts?</li>
            <li>What types of conflicts are most concerning?</li>
            <li>How much manual monitoring can your team realistically perform?</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For large brand teams, a tiered monitoring strategy can provide a
            practical balance between coverage, cost and response speed.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Protect Your Brand With the Right Trademark Watch Frequency
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark watching is not about searching more often simply for
            the sake of searching. It is about finding relevant activity
            early enough to make informed decisions. For smaller brands, that
            may mean monthly monitoring. For established businesses, weekly
            monitoring can provide a stronger baseline. For major global
            brands, high-value marks and active product launches, continuous
            monitoring may provide the level of visibility the business
            requires.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A professional <strong>trademark watch</strong> service can make
            that process more manageable by continuously monitoring relevant
            activity, filtering potentially important results and providing
            your legal or brand-protection team with actionable information.
            For large brand portfolios, the goal is not merely to know what
            happened. The goal is to know early enough to decide what to do
            next.
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
