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
  title: "Trademark Search for Cybersecurity Companies: Brand Protection Guide",
  description:
    "A cybersecurity company sells trust. Learn how to run a proper trademark search for cybersecurity companies, choose the right classes, avoid common mistakes, and protect your brand from impersonation.",
  keywords: ["Trademark Search for Cybersecurity Companies"],
};

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S1_Trademark Search for Cybersecurity Companies.jpg"
          alt="Trademark search for cybersecurity companies"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Trademark Search for Cybersecurity Companies: Brand Protection in a
            High-Risk Industry
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 26/10/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            A cybersecurity company sells trust. Customers hand over network
            visibility, credentials, and sometimes administrative control of
            their systems on the strength of a brand. That makes the name, logo,
            and product marks of a security vendor unusually valuable, and
            unusually exposed. Attackers impersonate well-known security brands
            to spread malware, fake &quot;security updates,&quot; and phishing
            emails. Competitors crowd around the same small vocabulary of
            shield, guard, sentinel, vault, and cyber. And a trademark dispute
            can force a rebrand at exactly the moment a start-up is closing its
            first enterprise contracts. This guide explains how to run a proper
            trademark search for cybersecurity companies, from clearance to
            ongoing brand protection, in plain language.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <i>
              Note: This article is general information and not legal advice.
              Trademark clearance involves judgement about the likelihood of
              confusion and should be reviewed by a trademark attorney in each
              country where you plan to operate.
            </i>
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Is Trademark Search for Cybersecurity Companies a Special Case?
          </h2>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            1. A Crowded and Descriptive Naming Landscape
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Thousands of vendors sell endpoint protection, identity management,
            threat intelligence, penetration testing, managed detection and
            response, and cloud security. Many choose names that evoke
            protection or digital concepts. Words such as &quot;secure,&quot;
            &quot;cyber,&quot; &quot;defend,&quot; &quot;guard,&quot;
            &quot;shield,&quot; &quot;fort,&quot; &quot;sentinel,&quot;
            &quot;zero,&quot; &quot;trust,&quot; and &quot;cloud&quot; appear in a
            very large number of registrations and applications. Marks built
            around these words are usually treated as conceptually weak, which
            means the protection for the shared vocabulary is narrow. Even so,
            small differences can still trigger objections from examiners and
            oppositions from competitors.
          </p>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            2. Careful Buyers, But a High Cost of Confusion
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Enterprise buyers of security products are usually careful, which
            can reduce the likelihood of confusion. However, the sector also
            sells to consumers and small businesses through app stores and
            online marketplaces, where buying decisions are quick. Confusion in
            security also carries heightened consequences, because a user who
            installs the wrong product may be putting their own device at risk.
          </p>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            3. Brand Abuse by Threat Actors
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Security brands are attractive targets for impersonation. Common
            abuses include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Typosquatted domains</li>
            <li>Fake download pages for security tools</li>
            <li>Counterfeit mobile applications</li>
            <li>Fraudulent social media profiles</li>
            <li>
              Phishing emails that appear to come from a vendor&apos;s support
              team
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A good trademark search should therefore look at more than
            registered marks. It should also consider how easily your proposed
            name can be mimicked and monitored.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Which Trademark Classes Matter for Cybersecurity Businesses?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademarks are registered for specific goods and services under the
            Nice Classification. Cybersecurity companies usually need protection
            across several classes, and your search should cover each of them:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Class 9: downloadable software and hardware, such as endpoint
              agents, mobile security apps, firewall appliances, hardware
              security keys, and encryption software
            </li>
            <li>
              Class 42: software as a service and technology services, such as
              SaaS security platforms, penetration testing, vulnerability
              assessment, and security consulting
            </li>
            <li>
              Class 35: business services, such as compliance consulting, risk
              management consulting, and online marketplaces for security tools
            </li>
            <li>
              Class 38: telecommunications, such as secure messaging and
              encrypted communications services
            </li>
            <li>
              Class 41: education and training, such as security awareness
              training, certification courses, conferences, and capture-the-flag
              events
            </li>
            <li>
              Class 45: legal and security services, such as licensing of
              intellectual property and some security-related monitoring
              services
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Classification rules differ in detail between trademark offices, so
            always check where your offering belongs against the current Nice
            edition. Also remember that related goods in different classes can
            still be treated as similar when deciding whether two marks conflict.
            A search that only covers the exact class you care about is
            incomplete.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            The Complete Trademark Search Process for Cybersecurity Brands
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A professional clearance search usually has several layers:
            registered and pending marks, unregistered or common law use, and
            domain and handle availability, plus an assessment specific to the
            cybersecurity sector.
          </p>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            1. Run a Knock-Out Search
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before investing in design work or buying domains, run a quick check
            for identical marks in your core classes. This quickly eliminates
            names that clearly conflict.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>United States: USPTO trademark search system</li>
            <li>European Union: EUIPO and TMview</li>
            <li>International: WIPO Global Brand Database</li>
          </ul>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            2. Search for Variants, Not Just Exact Matches
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A thorough search looks beyond the exact name. It should include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Phonetic equivalents (for example, &quot;Kryptos&quot; and
              &quot;Cryptos,&quot; or &quot;Sekure&quot; and &quot;Secure&quot;)
            </li>
            <li>
              Spelling variants and typos, including letter substitutions,
              doubled letters, and omitted vowels
            </li>
            <li>
              Translations and transliterations in the markets where you plan to
              sell, since a name may be descriptive or offensive in another
              language
            </li>
            <li>
              Compound and partial matches, because the first syllable or
              leading word often drives recall
            </li>
            <li>
              Design and logo elements, such as shield icons, padlocks,
              keyholes, and eye symbols
            </li>
            <li>
              Related goods and services, such as IT consulting, data storage,
              and telecommunications
            </li>
          </ul>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            3. Check for Common Law Trademarks
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Unregistered rights can be enforced in many countries, including the
            United States, where an earlier user may block your registration or
            sue for infringement based on actual use. Cybersecurity is
            especially fertile ground for unregistered marks, because many
            open-source tools, research projects, and early-stage products are
            branded long before anyone files an application. Sources to check
            include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Software repositories such as GitHub and GitLab, package
              registries like npm and PyPI, and container registries
            </li>
            <li>App stores and browser extension marketplaces</li>
            <li>
              Security conference programmes, vulnerability disclosures, and
              named vulnerabilities or threat groups
            </li>
            <li>Analyst reports, vendor directories, and start-up databases</li>
            <li>
              Company registries, domain registrations, social media handles,
              and business directories
            </li>
            <li>General web search, including searches in major target languages</li>
          </ul>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            4. Assess Registrability and Strength
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A name can be free of conflicts and still be hard to register. Marks
            that simply describe the product or its function, such as
            &quot;Secure Network Scanner,&quot; are usually refused in the
            United States as merely descriptive, and under similar rules in the
            EU and elsewhere. Suggestive marks, arbitrary marks, and coined
            terms are far more defensible. A coined term like &quot;Zorvex&quot;
            is easier to protect than &quot;NetShield,&quot; although it may
            need more marketing investment to build meaning. The trade-off is
            between instant descriptiveness and long-term protectability, and the
            stronger option is nearly always the distinctive one.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            How Is Likelihood of Confusion Judged in Cybersecurity?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            In the United States, the test for refusing a registration or
            finding infringement is likelihood of confusion, and examiners
            commonly rely on the factors from the du Pont case. Other
            jurisdictions use similar tests that weigh visual, phonetic, and
            conceptual similarity, along with how closely related the goods or
            services are. For a cybersecurity applicant, these factors deserve
            particular attention:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Similarity of the marks: shared descriptive words such as
              &quot;cyber&quot; or &quot;secure&quot; carry little weight, and
              the distinctive element decides the comparison
            </li>
            <li>
              Relatedness of goods and services: software, SaaS, and consulting
              in the same security domain are often treated as related
            </li>
            <li>
              Trade channels: overlap in app stores, cloud marketplaces, and
              reseller networks increases risk
            </li>
            <li>
              Buyer sophistication: enterprise buyers are careful, while consumer
              and small business products are bought quickly
            </li>
            <li>
              Strength of the earlier mark: a crowded field of shield or guard
              marks narrows protection, while well-known brands get wider
              protection
            </li>
            <li>
              Actual confusion: support tickets, misdirected emails, and
              misattributed vulnerability reports count as evidence
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A crowded field can actually work in your favour. If many third
            parties use or register similar marks for related services,
            consumers learn to tell them apart by other features, and the earlier
            mark&apos;s scope becomes narrower. Evidence of third-party
            registrations and use should therefore be gathered as part of your
            clearance opinion.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What Is the Right Filing Strategy for a Security Brand?
          </h2>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            1. Choose Your Filing Basis
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            In the United States, you can file based on actual use in commerce or
            on a genuine intent to use the mark. Start-ups still building a
            product should consider intent-to-use filings to secure an early
            priority date, while keeping in mind that registration will not issue
            until use is shown. Many other countries follow a first-to-file
            system, so delay carries a higher risk of losing the name to a third
            party or a trademark squatter.
          </p>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            2. Decide Where to Protect Your Mark
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Cybersecurity vendors usually sell globally from day one through the
            cloud. The Madrid Protocol allows a single international application
            that designates multiple member countries. It is cost-efficient, but
            for the first five years it depends on your home-country base mark,
            so a successful attack on that base registration can bring down the
            international one. Prioritize countries by revenue, development
            centres, manufacturing, and known piracy or impersonation hotspots.
          </p>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            3. Know What to Register
          </h4>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Your house mark (company name) and each major product or platform name</li>
            <li>
              Your logo, ideally separately from the word mark, so a redesign
              does not leave the name unprotected
            </li>
            <li>Distinctive taglines and recurring campaign phrases</li>
            <li>
              Names of research teams, threat intelligence services, and annual
              events, if they are used as brands
            </li>
            <li>
              Defensive variations where budgets allow, particularly common
              misspellings
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            How Do You Protect Your Brand After Registration?
          </h2>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            1. Use Watch Services
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Subscribe to a trademark watch service that alerts you to new
            applications similar to your marks in key classes and countries. The
            window to oppose a published application is short, often 30 days in
            the United States (extendable) and three months in the EU, so early
            notice is essential. If you fail to oppose, you may have to pursue
            costlier cancellation actions later.
          </p>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            2. Monitor Domains and Impersonation
          </h4>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Domain monitoring: track new registrations that include your brand
              name, common misspellings, or lookalike characters, and watch for
              fresh certificates issued for lookalike domains
            </li>
            <li>
              UDRP and URS: the Uniform Domain-Name Dispute-Resolution Policy
              lets a trademark owner seek transfer of a domain registered and
              used in bad faith, while Uniform Rapid Suspension offers a faster,
              lower-cost route for clear cases
            </li>
            <li>
              Platform takedowns: app stores, social networks, and code hosting
              platforms have impersonation reporting channels, and registered
              marks speed up acceptance of reports
            </li>
            <li>
              Email authentication: deploy SPF, DKIM, and DMARC to reduce
              spoofing of your domain
            </li>
            <li>
              Customs recordation: for hardware such as security keys and
              appliances, record your registered marks with customs authorities
              to help intercept counterfeits
            </li>
          </ul>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            3. Use Your Mark Properly
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Use your mark consistently and as an adjective, such as &quot;the
            ExampleSecure platform,&quot; rather than as a noun or verb. Use the
            ® symbol only for registered marks and ™ for unregistered ones. If you
            license your name to resellers, managed security providers, or
            integration partners, put a written licence with quality control
            terms in place to avoid losing rights through naked licensing.
            Open-source projects need special care too: a permissive software
            licence does not grant trademark rights, so publish a trademark
            policy that states how your project name and logo may be used.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Special Trademark Issues for Security Vendors
          </h2>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            1. Naming Vulnerabilities, Exploits, and Research Projects
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Researchers often give catchy names and logos to vulnerabilities. If
            such a name is used commercially, for example in training or tools,
            it can function as a trademark. A company may also unknowingly pick a
            name that another firm has already attached to a notable
            vulnerability or threat actor, causing confusion in the security
            community. Search disclosure databases and threat intelligence
            reports during clearance.
          </p>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            2. Mergers, Acquisitions, and Rebranding
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Consolidation is frequent in this sector. Acquirers should run a
            trademark audit during due diligence: confirm ownership and chain of
            assignment, check renewal status, review coexistence agreements, and
            map pending oppositions. When products are rebranded after an
            acquisition, keep the old marks alive for a transition period to
            preserve customer recognition and stop squatters from registering
            them.
          </p>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            3. Coexistence Agreements
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Where a conflict is real but both sides want to avoid litigation, a
            coexistence agreement can set fields of use, trade dress, geography,
            and duties to avoid confusion. Because security markets are narrow,
            careful drafting is needed so the agreement does not limit your
            future expansion into new product lines such as cloud or identity.
          </p>

          <h4 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold">
            4. Trust and Public Relations
          </h4>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A security vendor caught in a public trademark fight can suffer
            reputational damage, especially if the other side is a smaller
            company or an open-source project. Weigh enforcement against the
            commercial and communications impact, and keep a clear policy on when
            to enforce, when to negotiate, and when to tolerate use so decisions
            stay consistent and defensible.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Trademark Search and Clearance Workflow
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Define your product roadmap and target countries for the next
              three to five years
            </li>
            <li>
              Shortlist several candidate names, preferably coined or suggestive
              rather than descriptive
            </li>
            <li>Run a knock-out search for identical marks, domains, and social handles</li>
            <li>
              Commission a full search covering variants, design marks, and
              common law use in each target market
            </li>
            <li>
              Obtain a written clearance opinion, and decide whether to proceed,
              modify, or abandon the name
            </li>
            <li>
              File applications promptly in priority countries, using
              intent-to-use or first-to-file routes as appropriate
            </li>
            <li>Register matching domains and handles, and deploy email authentication</li>
            <li>Set up watch services and an enforcement playbook before launch</li>
            <li>
              Review your portfolio every year and after each major product,
              financing, or M&amp;A event
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Common Mistakes to Avoid
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Choosing a descriptive name because it explains the product. This
              leads to refusals and weak enforcement, so choose a distinctive or
              suggestive mark instead.
            </li>
            <li>
              Searching only exact matches in one class. You will miss conflicts,
              so widen your search to variants and related classes.
            </li>
            <li>
              Relying on a domain name as protection. Domains are not
              trademarks, so file your marks as well.
            </li>
            <li>
              Launching before filing. You risk losing priority, especially in
              first-to-file countries.
            </li>
            <li>
              Ignoring open-source and GitHub projects during clearance.
              Unregistered earlier users can object to your use.
            </li>
            <li>
              Neglecting renewal and use deadlines. Marks can be cancelled for
              non-use or lapse, so docket every deadline.
            </li>
            <li>
              Not preparing for impersonation. Takedowns become slow and
              customers get harmed, so prepare templates and contacts in
              advance.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why You Should Use a Professional Trademark Search Service?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            In cybersecurity, a quick Google search or a basic database lookup is
            not enough. The crowded vocabulary, the mix of registered and
            unregistered rights, and the risk of impersonation all call for a
            systematic search analyzed by experts who understand trademark law
            and similarity standards.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            At EffeMark, we provide dedicated{" "}
            <a
              className="text-blue-600 underline hover:no-underline"
              href="https://www.effemark.com/trademark-search-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              trademark search services
            </a>{" "}
            that go far beyond surface-level checks. Our team searches across
            multiple databases, analyzes phonetic and visual similarity,
            evaluates your mark&apos;s strength, and delivers a clear, actionable
            report so you know exactly where you stand before you commit to a
            name.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Once your mark is registered, ongoing protection matters just as
            much. Copycat brands, lookalike filings, and squatters can appear at
            any time. Our{" "}
            <a
              className="text-blue-600 underline hover:no-underline"
              href="https://www.effemark.com/trademark-monitoring"
              target="_blank"
              rel="noopener noreferrer"
            >
              trademark monitoring services
            </a>{" "}
            keep a continuous watch on new filings and marketplace activity,
            alerting you the moment a potential conflict arises so you can act
            quickly.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Final Thoughts: Protect the Brand Customers Trust
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For cybersecurity companies, trademark clearance is a core part of
            risk management, not a branding formality. The sector&apos;s reliance
            on trust, its crowded vocabulary, and its exposure to impersonation
            mean that careless naming creates both legal and security
            consequences. A disciplined approach protects the brand customers
            rely on when they decide whom to trust with their systems: start with
            a broad search, choose a distinctive mark, file early in the right
            classes and countries, and monitor continuously for abuse. The
            investment is modest compared with the cost of a forced rebrand or a
            successful impersonation campaign against your customers.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            If you want to name and launch your next security product with real
            confidence, start with a proper trademark search. Visit{" "}
            <a
              className="text-blue-600 underline hover:no-underline"
              href="https://www.effemark.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              EffeMark
            </a>{" "}
            to learn how we can protect your brand from day one and keep it
            protected long after launch.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <b>Follow Us:</b>{" "}
            <a
              className="text-blue-600"
              href="https://www.linkedin.com/company/effemark/"
              target="_blank"
              rel="noopener noreferrer"
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
