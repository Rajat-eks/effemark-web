import Image from "next/image";
import React from "react";
import Question from "@/components/assets/img/question.svg";
import { Mail, Phone } from "lucide-react";
import { articles } from "../page";
import Link from "next/link";

export const metadata = {
  title:
    "Trademark Monitoring in China: How to Detect Infringement in the World's Largest Market",
  description:
    "A guide to trademark monitoring in China covering the trademark register, Chinese-language brand names, e-commerce platforms, domains, physical markets, bad-faith filings, risk-based prioritization, and the 2027 Trademark Law changes.",
  keywords: [
    "Trademark Monitoring China",
    "China trademark infringement",
    "China trademark register monitoring",
    "counterfeit monitoring China",
    "bad-faith trademark China",
    "China e-commerce trademark enforcement",
    "China Trademark Law 2027",
  ],
};

const page: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Trademark Monitoring in China.jpg"
          alt="Trademark monitoring in China across the register, e-commerce platforms, and physical markets"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Trademark Monitoring in China: How to Detect Infringement in the
            World&apos;s Largest Market
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 24/08/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            China is one of the world&apos;s most important markets for
            international brands - and one of the most important
            jurisdictions in which to maintain an effective{" "}
            <strong>trademark-monitoring program</strong>. For businesses
            selling products or services in China, registering a trademark is
            only the first step. Continuous monitoring is essential for
            identifying confusingly similar marks, counterfeit goods,
            unauthorized commercial use and potentially abusive trademark
            applications before they develop into larger commercial problems.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The challenge is particularly significant because China&apos;s
            trademark system has historically emphasized registration, while
            infringement can occur across a wide range of physical and
            digital channels. China&apos;s trademark enforcement standards
            recognize commercial use on products, packaging, transaction
            documents, advertising, exhibitions, websites, social networks,
            applications and other online platforms.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The regulatory environment is also changing. China&apos;s revised
            Trademark Law was adopted on June 26, 2026 and is scheduled to
            take effect on January 1, 2027. Among other changes, the revised
            law strengthens measures against bad-faith registrations and
            trademark hoarding.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For brand owners, the message is straightforward: effective
            trademark protection in China requires active monitoring, rapid
            investigation and a coordinated enforcement strategy.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Trademark Monitoring Matters in China
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A trademark registration gives a brand owner important legal
            rights, but it does not automatically identify every unauthorized
            use in the marketplace.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Potential problems can arise when third parties:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Apply for identical or confusingly similar trademarks</li>
            <li>Register Chinese-language equivalents of foreign brands</li>
            <li>
              Register transliterations, translations, or phonetic
              variations
            </li>
            <li>Sell counterfeit products bearing the brand</li>
            <li>Use the brand name in online store names or product listings</li>
            <li>Purchase domains incorporating the trademark</li>
            <li>Use the trademark in advertising without authorization</li>
            <li>Copy distinctive branding or packaging</li>
            <li>Import or export infringing products</li>
            <li>
              Attempt to exploit the brand&apos;s reputation through
              bad-faith trademark filings
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            China&apos;s trademark enforcement standards expressly recognize
            use in internet media, websites, instant-messaging tools,
            social-network platforms, applications, QR codes, advertisements,
            exhibitions and physical retail environments.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This means that a monitoring program limited to the official
            trademark register can miss significant infringement occurring in
            the marketplace.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            1. Monitor the Chinese Trademark Register
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The first component of an effective monitoring program is
            systematic review of trademark applications and registrations.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Monitoring should cover:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>The brand&apos;s exact trademark</li>
            <li>Chinese translations of the brand</li>
            <li>Chinese transliterations</li>
            <li>Phonetically similar Chinese marks</li>
            <li>English-language variations</li>
            <li>Common misspellings</li>
            <li>Abbreviations</li>
            <li>Logos and device marks</li>
            <li>Key product names</li>
            <li>
              Marks that imitate the overall commercial impression of the
              brand
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Monitoring should also extend beyond the classes in which the
            company currently operates. A third party may attempt to register
            a brand in related classes, adjacent goods or services, or
            strategically important categories.
          </p>

          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold">
            Why Early Detection Matters
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            China follows a first-to-file system, supplemented in certain
            circumstances by prior use. CNIPA guidance confirms that where
            identical or similar marks are filed on the same day, evidence of
            earlier use can become relevant.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For an international brand, this makes early detection
            particularly important. Waiting until an unauthorized trademark
            has already registered can substantially complicate the
            enforcement strategy.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A monitoring service should therefore identify potentially
            problematic applications as early as possible, allowing the
            trademark owner to evaluate available opposition, invalidation,
            cancellation, or other remedies within applicable deadlines.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            2. Monitor Chinese-Language Versions of the Brand
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            One of the most important - and frequently overlooked - elements
            of Chinese trademark monitoring is the Chinese-language identity
            of a foreign brand.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A foreign trademark may acquire a Chinese name through:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Direct translation</li>
            <li>Phonetic transliteration</li>
            <li>A combination of translation and transliteration</li>
            <li>Consumer-created nicknames</li>
            <li>A name adopted by distributors or local partners</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Once consumers begin using a particular Chinese name to identify
            the brand, a third party may attempt to register that name.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For this reason, companies entering China should consider
            developing and protecting an appropriate Chinese-language brand
            strategy rather than waiting for the market to create one
            independently.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Monitoring should then include the relevant Chinese characters and
            plausible variations.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            3. Monitor E-Commerce Platforms
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark infringement in China increasingly requires online
            marketplace monitoring.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Potential infringement may appear through:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Product listings</li>
            <li>Store names</li>
            <li>Product titles</li>
            <li>Product descriptions</li>
            <li>Images</li>
            <li>Advertising</li>
            <li>Live-streaming sales</li>
            <li>Social-commerce channels</li>
            <li>Links directing consumers to unauthorized sellers</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A useful monitoring program should distinguish between different
            types of online activity.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example, a seller offering a genuine product through an
            unauthorized channel may present a different legal and commercial
            problem from a seller offering counterfeit products bearing the
            trademark.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Evidence should therefore be preserved before enforcement action
            is initiated.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Useful evidence can include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Screenshots</li>
            <li>Product photographs</li>
            <li>Seller information</li>
            <li>Store URLs</li>
            <li>Listing URLs</li>
            <li>Prices</li>
            <li>Transaction records</li>
            <li>Product descriptions</li>
            <li>Packaging photographs</li>
            <li>Communications with the seller</li>
            <li>Date and time of collection</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            4. Watch Domains and Digital Brand Assets
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Domain-name monitoring should form another part of the program.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A third party may register a domain incorporating the trademark
            and use it for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Counterfeit sales</li>
            <li>Phishing or fraudulent activity</li>
            <li>Unauthorized distribution</li>
            <li>Advertising</li>
            <li>Lead generation</li>
            <li>Redirecting consumers to competing products</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Chinese enforcement standards specifically address circumstances
            in which a domain name identical or similar to another&apos;s
            registered trademark is used for relevant e-commerce transactions
            in a manner likely to cause consumer confusion.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Monitoring should therefore include relevant Chinese domain-name
            registrations as well as important international domain
            extensions.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            5. Monitor Physical Markets and Trade Fairs
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Digital monitoring cannot replace physical marketplace
            surveillance.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Counterfeit products may appear in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Wholesale markets</li>
            <li>Retail stores</li>
            <li>Shopping centers</li>
            <li>Trade fairs</li>
            <li>Exhibitions</li>
            <li>Distribution warehouses</li>
            <li>Factories</li>
            <li>Import/export channels</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trade fairs deserve special attention because infringing products
            can be exposed to large numbers of potential customers and
            distributors in a short period.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            China&apos;s trademark enforcement framework recognizes trademark
            use at exhibitions and trade fairs, including trademarks
            displayed on exhibition stands and related materials.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For brands with substantial counterfeiting exposure, periodic
            physical investigations can therefore complement online and
            register monitoring.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            6. Identify Bad-Faith Trademark Applications
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Not every problematic trademark application will immediately
            involve conventional marketplace infringement.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A third party may instead attempt to appropriate the brand by
            filing a trademark application before the brand owner does.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            China has been strengthening its response to bad-faith
            applications. CNIPA&apos;s 2026 guidance identifies conduct
            including large-scale copying of reputed marks, repeated
            applications for another party&apos;s mark, large numbers of
            applications resembling others&apos; trade names or e-commerce
            names and large-scale trademark sales.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The revised Trademark Law, effective January 1, 2027, further
            strengthens regulation of applications filed without genuine
            intent to use or beyond normal business needs.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This makes trademark-register monitoring particularly important.
            A suspicious application can be easier to challenge when
            identified promptly than after the applicant has built a larger
            portfolio or attempted to commercialize the registration.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            7. Monitor More Than Identical Marks
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            An effective monitoring system should not rely solely on
            exact-name searches.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Potentially problematic marks can differ from the registered
            trademark in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Spelling</li>
            <li>Chinese characters</li>
            <li>Pronunciation</li>
            <li>Transliteration</li>
            <li>Visual appearance</li>
            <li>Logo design</li>
            <li>Word order</li>
            <li>Spacing</li>
            <li>Syllables</li>
            <li>Overall commercial impression</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            China&apos;s trademark infringement standards contemplate
            analysis of similarities by considering factors such as
            pronunciation, character shapes, meanings, arrangements and the
            overall presentation of the marks.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Accordingly, monitoring criteria should be developed around the
            ways consumers are likely to perceive the marks - not simply
            whether two strings of text are identical.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            8. Build an Evidence-First Monitoring System
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Detection is only useful if the resulting evidence can support
            enforcement.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Every significant alert should be evaluated and documented. A
            practical evidence file may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Trademark information:</strong> registration number,
              classes, goods and services, registration date, owner
              information.
            </li>
            <li>
              <strong>Suspected infringement:</strong> seller or applicant
              identity, product or service, mark used, URL or physical
              location, screenshots, photographs, date observed.
            </li>
            <li>
              <strong>Commercial evidence:</strong> purchase records,
              invoices, shipping information, product packaging,
              communications, advertising materials.
            </li>
            <li>
              <strong>Relationship evidence:</strong> whether the suspected
              infringer is a distributor, former employee, business partner,
              manufacturer, licensee, or completely unrelated third party.
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Preserving evidence at the detection stage can be critical
            because online listings and physical-market evidence may
            disappear quickly.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            9. Use Risk-Based Monitoring
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Not every trademark alert deserves the same response. A useful
            monitoring program can classify findings according to factors
            such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>High Risk:</strong> Counterfeit goods, identical
              trademark, same or closely related goods, large-scale
              commercial activity, evidence of manufacturing, bad-faith
              trademark application involving the core brand.
            </li>
            <li>
              <strong>Medium Risk:</strong> Similar trademark, related goods
              or services, significant online sales, potential consumer
              confusion, unauthorized distributor activity.
            </li>
            <li>
              <strong>Lower Risk:</strong> Incidental or descriptive use,
              remote goods or services, minimal commercial exposure, no
              evidence of consumer confusion.
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Risk-based prioritization allows enforcement budgets to focus on
            the threats most likely to damage the brand.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            10. Coordinate Monitoring With Enforcement
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Monitoring should not operate independently from enforcement.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Once a potentially serious infringement is detected, the brand
            owner should evaluate the appropriate response. Depending on the
            circumstances, possible measures may include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Platform complaints</li>
            <li>Cease-and-desist communications</li>
            <li>Administrative enforcement</li>
            <li>Trademark opposition</li>
            <li>Trademark invalidation</li>
            <li>Non-use cancellation</li>
            <li>Customs measures</li>
            <li>Civil litigation</li>
            <li>Criminal enforcement in appropriate counterfeiting cases</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The correct remedy depends on the nature of the infringement,
            available evidence, the identity and location of the infringer
            and the commercial objectives of the brand owner.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            China&apos;s enforcement framework also recognizes circumstances
            in which e-commerce platforms and other market operators may have
            responsibilities after receiving notice of infringement.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            11. Prepare for the 2027 Trademark Law Changes
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Brand owners operating in China should also account for the
            revised Trademark Law taking effect on January 1, 2027.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The new law places additional emphasis on preventing malicious
            registrations, strengthening trademark-use requirements and
            addressing trademark hoarding. CNIPA describes the changes as
            establishing a more comprehensive framework covering prevention,
            examination, accountability and enforcement.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This creates an important opportunity for companies to review
            their monitoring programs before the new provisions take effect.
            A review should include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Existing trademark portfolios</li>
            <li>Chinese-language marks</li>
            <li>Pending third-party applications</li>
            <li>Unused registrations</li>
            <li>Defensive registrations</li>
            <li>Known infringers</li>
            <li>Online marketplace monitoring</li>
            <li>Domain monitoring</li>
            <li>Internal procedures for responding to alerts</li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            How EffeMark Supports Trademark Monitoring in China
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            At EffeMark, we help businesses build monitoring and enforcement
            programs that go beyond simple register searches. Our{" "}
            <a
              href="https://www.effemark.com/trademark-monitoring"
              className="text-blue-600 underline hover:no-underline"
            >
              Trademark Monitoring
            </a>{" "}
            service tracks new applications and potentially infringing
            activity, giving you the information you need to act before
            issues escalate into larger disputes. For clients with a presence
            across multiple countries and platforms, our{" "}
            <a
              href="https://www.effemark.com/global-trademark-monitoring"
              className="text-blue-600 underline hover:no-underline"
            >
              Global Trademark Monitoring
            </a>{" "}
            service provides consolidated, worldwide coverage.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before you can monitor effectively, you need a clear picture of
            your existing trademark footprint. Our{" "}
            <a
              href="https://www.effemark.com/trademark-search-services"
              className="text-blue-600 underline hover:no-underline"
            >
              Trademark Search Services
            </a>{" "}
            and{" "}
            <a
              href="https://www.effemark.com/global-trademark-search"
              className="text-blue-600 underline hover:no-underline"
            >
              Global Trademark Search
            </a>{" "}
            help ensure your brand is properly protected in the markets that
            matter most. And once enforcement actions are underway, our{" "}
            <a
              href="https://www.effemark.com/trademark-docketing"
              className="text-blue-600 underline hover:no-underline"
            >
              Trademark Docketing
            </a>{" "}
            service helps keep deadlines, correspondence, and case records
            organized across your entire portfolio.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark protection in China should be viewed as an ongoing
            process rather than a one-time registration exercise.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The most effective programs combine trademark-register watching,
            Chinese-language monitoring, online marketplace surveillance,
            domain monitoring, physical-market investigations, evidence
            preservation and rapid enforcement.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For international brands, early detection can be especially
            valuable. Identifying a suspicious trademark application before
            registration, or discovering counterfeit activity before it
            reaches significant scale, can substantially improve the range of
            available responses.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            China&apos;s evolving trademark framework makes this even more
            important. With the revised Trademark Law scheduled to take
            effect on January 1, 2027, companies should treat trademark
            monitoring as a core component of their China IP strategy - not
            simply as an administrative task.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Ultimately, the goal is not to monitor everything. It is to
            identify the right threats early, preserve evidence, prioritize
            commercially significant infringements and take proportionate
            action before unauthorized use becomes entrenched.{" "}
            <Link href="/contact-us" className="text-blue-600 hover:underline">
              Reach out today
            </Link>{" "}
            to build a monitoring and enforcement program tailored to your
            brand.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <strong>Read also:</strong>{" "}
            <Link
              href="/articles/social-media-trademark-monitoring-platforms-tools-and-escalation-strategies"
              className="text-blue-600 hover:underline"
            >
              Social Media Trademark Monitoring: Platforms, Tools and
              Escalation Strategies
            </Link>
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
