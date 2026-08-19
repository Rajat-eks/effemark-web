import React, { useState } from "react";

const THEME = {
  ink: "#1C2B39",
  inkSoft: "#4A5A66",
  paper: "#EDEAE1",
  paperDeep: "#E2DDCC",
  card: "#F7F5EE",
  line: "#C9C2AC",
  brass: "#8C6A2E",
  brassLight: "#AD8A47",
  high: "#8B3A32",
  med: "#9C7A2A",
  low: "#4B6B4F",
  white: "#FBFAF5",
};

const fontDisplay = "'Fraunces', 'Iowan Old Style', serif";
const fontBody = "'Source Serif 4', 'Charter', Georgia, serif";
const fontMono = "'IBM Plex Mono', 'Menlo', monospace";

function Docket({ n }) {
  return (
    <div
      className="flex items-center justify-center rounded-full border shrink-0"
      style={{
        width: 34,
        height: 34,
        borderColor: THEME.brass,
        color: THEME.brass,
        fontFamily: fontMono,
        fontSize: 12,
        letterSpacing: 0.5,
      }}
    >
      {String(n).padStart(2, "0")}
    </div>
  );
}

function SectionHead({ n, title }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Docket n={n} />
      <h2
        style={{
          fontFamily: fontDisplay,
          color: THEME.ink,
          fontWeight: 600,
        }}
        className="text-2xl md:text-[26px] tracking-tight"
      >
        {title}
      </h2>
    </div>
  );
}

function Rule() {
  return (
    <div
      className="w-full my-10"
      style={{ borderTop: `1px solid ${THEME.line}` }}
    />
  );
}

function Chip({ children }) {
  return (
    <span
      className="inline-block px-3 py-1 mr-2 mb-2 rounded-full text-sm"
      style={{
        border: `1px solid ${THEME.line}`,
        color: THEME.inkSoft,
        fontFamily: fontBody,
        background: THEME.card,
      }}
    >
      {children}
    </span>
  );
}

function Flow({ steps }) {
  return (
    <div className="flex flex-wrap items-center gap-2 gap-y-3">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <span
            className="px-3 py-1.5 rounded text-sm"
            style={{
              background: THEME.ink,
              color: THEME.white,
              fontFamily: fontMono,
              letterSpacing: 0.2,
            }}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <span style={{ color: THEME.brass }} className="text-lg leading-none">
              &rarr;
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function RiskCard({ level, color, examples, action }) {
  return (
    <div
      className="flex-1 min-w-[220px] rounded-md p-5"
      style={{ background: THEME.card, borderLeft: `4px solid ${color}` }}
    >
      <div
        className="text-xs uppercase mb-3"
        style={{ fontFamily: fontMono, letterSpacing: 1.5, color }}
      >
        {level}
      </div>
      <ul
        className="space-y-1.5 mb-4 text-[15px]"
        style={{ color: THEME.inkSoft, fontFamily: fontBody }}
      >
        {examples.map((e) => (
          <li key={e} className="flex gap-2">
            <span style={{ color }}>&bull;</span>
            <span>{e}</span>
          </li>
        ))}
      </ul>
      <div
        className="text-sm pt-3"
        style={{
          borderTop: `1px solid ${THEME.line}`,
          fontFamily: fontBody,
          color: THEME.ink,
          fontStyle: "italic",
        }}
      >
        Action: {action}
      </div>
    </div>
  );
}

function TimelinePhase({ label, items, last }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className="rounded-full shrink-0"
          style={{ width: 12, height: 12, background: THEME.brass }}
        />
        {!last && (
          <div className="w-px flex-1" style={{ background: THEME.line }} />
        )}
      </div>
      <div className="pb-9">
        <div
          className="text-sm uppercase mb-2"
          style={{ fontFamily: fontMono, letterSpacing: 1, color: THEME.brass }}
        >
          {label}
        </div>
        <ul
          className="space-y-1 text-[15px]"
          style={{ color: THEME.inkSoft, fontFamily: fontBody }}
        >
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const logFields = [
  ["Date identified", "Establishes when the issue was discovered"],
  ["Mark", "Identifies the potentially conflicting designation"],
  ["Owner / applicant", "Identifies the third party"],
  ["Source", "Trademark office, marketplace, social media, etc."],
  ["Goods / services", "Assesses commercial relationship"],
  ["Similarity", "Records preliminary assessment"],
  ["Geographic scope", "Identifies relevant markets"],
  ["Risk level", "Prioritizes the matter"],
  ["Counsel review", "Records legal assessment"],
  ["Action", "Documents the response"],
  ["Next review date", "Prevents issues from disappearing"],
];

const mistakes = [
  ["Monitoring only exact matches", "Potential conflicts frequently involve variations rather than identical marks."],
  ["Monitoring only the trademark office", "Unregistered marketplace use can also create significant commercial problems."],
  ["Ignoring related goods", "A third party does not necessarily need to sell the exact same product to create a meaningful concern."],
  ["Waiting for actual confusion", "A business may be able to address a problem before confusion becomes widespread."],
  ["Failing to document findings", "Without a record, companies may struggle to understand how a previous issue was evaluated."],
  ["Treating every similar mark as infringement", "Over-enforcement can waste resources and create unnecessary commercial disputes."],
];

export default function TrademarkMonitoringArticle() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ background: THEME.paper, fontFamily: fontBody }} className="min-h-full w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      {/* HERO */}
      <header
        className="relative overflow-hidden px-6 md:px-14 pt-16 pb-14"
        style={{ background: THEME.ink }}
      >
        <div
          className="absolute -right-16 -top-16 rounded-full flex items-center justify-center"
          style={{
            width: 260,
            height: 260,
            border: `1px solid ${THEME.brassLight}`,
            opacity: 0.5,
          }}
        >
          <div
            className="rounded-full flex items-center justify-center text-center"
            style={{
              width: 190,
              height: 190,
              border: `1px dashed ${THEME.brassLight}`,
            }}
          >
            <span
              style={{
                fontFamily: fontMono,
                color: THEME.brassLight,
                fontSize: 11,
                letterSpacing: 3,
                lineHeight: 1.8,
              }}
            >
              WATCH &middot; RECORD &middot;<br />ASSESS &middot; ACT &middot;
            </span>
          </div>
        </div>

        <div
          style={{ fontFamily: fontMono, color: THEME.brassLight, letterSpacing: 2 }}
          className="text-xs mb-6"
        >
          BRAND PROTECTION FILE &nbsp;/&nbsp; NEW PRODUCT LINE
        </div>
        <h1
          style={{ fontFamily: fontDisplay, color: THEME.white, fontWeight: 600 }}
          className="text-4xl md:text-6xl leading-[1.05] max-w-3xl"
        >
          Setting Up Trademark Monitoring When Launching a New Product Line
        </h1>
        <p
          style={{ color: THEME.paperDeep, fontFamily: fontBody }}
          className="mt-6 max-w-2xl text-lg leading-relaxed"
        >
          A new product name, logo, or tagline can become a real brand asset &mdash;
          but only if conflicts are caught early and the marketplace keeps getting
          watched after launch. This is a working guide to building that watch.
        </p>
      </header>

      <main className="px-6 md:px-14 py-14 max-w-4xl mx-auto">
        {/* 1 */}
        <SectionHead n={1} title="Why Monitoring Matters at Launch" />
        <p className="leading-relaxed mb-4" style={{ color: THEME.ink }}>
          Trademark <em>clearance</em> and trademark <em>monitoring</em> serve
          different purposes. Clearance asks whether a proposed brand can be
          adopted without an unacceptable risk of conflict. Monitoring begins
          after &mdash; or alongside &mdash; adoption, and looks for new activity
          that could affect the brand. A mark that looks clear on launch day can
          face new applications, new domain registrations, or new marketplace
          listings months later.
        </p>
        <p className="leading-relaxed mb-5" style={{ color: THEME.inkSoft }}>
          Monitoring carries extra weight when a launch involves any of the
          following:
        </p>
        <div>
          {[
            "New product or sub-brand name",
            "New logo or visual identity",
            "New geographic market",
            "Additional goods or services",
            "Significant advertising or distribution",
            "A crowded trademark category",
            "Heavy reliance on online sales",
            "Substantial international growth",
          ].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <Rule />

        {/* 2 */}
        <SectionHead n={2} title="Identify What Needs to Be Monitored" />
        <p className="leading-relaxed mb-5" style={{ color: THEME.ink }}>
          Before configuring any alerts, build a full inventory of the brand
          assets tied to the launch. Not every variation needs the same level
          of attention &mdash; give priority to marks that are commercially
          important and most likely to be confused with a third-party use.
        </p>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
          {[
            "Primary product names", "Product-line names", "Company trademarks",
            "Logos and stylized marks", "Slogans and taglines", "Abbreviations & short forms",
            "Common misspellings", "Phonetic variations", "Transliterations / translations",
            "Key product descriptors", "Domain names", "Social-media handles",
            "Marketplace identifiers",
          ].map((t) => (
            <div key={t} className="flex gap-2 py-1" style={{ borderBottom: `1px solid ${THEME.line}` }}>
              <span style={{ color: THEME.brass }}>&bull;</span>
              <span style={{ color: THEME.inkSoft }}>{t}</span>
            </div>
          ))}
        </div>

        <Rule />

        {/* 3 */}
        <SectionHead n={3} title="Start With the Trademark Register" />
        <p className="leading-relaxed mb-4" style={{ color: THEME.ink }}>
          One of the most important pieces of any monitoring program is
          watching new trademark applications and registrations. In the
          United States, that means the USPTO's trademark search systems.
          Monitoring should never stop at exact matches &mdash; a problematic
          filing may differ by a single letter, use a similar-sounding term,
          or fold the disputed term into a longer name.
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {[
            "Exact matches", "Similar spellings", "Phonetic equivalents",
            "Plural / singular forms", "Common prefixes & suffixes",
            "Transposed words", "Abbreviations", "Similar marks on related goods",
          ].map((t) => <Chip key={t}>{t}</Chip>)}
        </div>
        <a
          href="https://www.uspto.gov/trademarks/search"
          className="text-sm underline"
          style={{ color: THEME.brass, fontFamily: fontMono }}
        >
          USPTO Trademark Search &rarr;
        </a>

        <Rule />

        {/* 4 */}
        <SectionHead n={4} title="Monitor the Relevant Goods and Services" />
        <p className="leading-relaxed" style={{ color: THEME.ink }}>
          A conflict isn't decided by similarity of the mark alone &mdash; the
          relationship between goods and services matters just as much. A
          third party using a similar name for an unrelated agricultural
          product presents a different risk than the same name attached to
          enterprise software. Build the program around the company's actual
          portfolio and anticipated expansion, not a search for identical
          words alone. Weigh two questions side by side: how similar is the
          mark, and how commercially related are the goods or services?
        </p>

        <Rule />

        {/* 5 */}
        <SectionHead n={5} title="Monitor New Applications Early" />
        <p className="leading-relaxed mb-6" style={{ color: THEME.ink }}>
          Timing is everything. USPTO applications are examined and certain
          filings are published for opposition &mdash; catching a problematic
          mark before it matures into a registration keeps more options on
          the table.
        </p>
        <Flow steps={["New filing detected", "Automated screening", "Legal review", "Risk classification", "Watch / escalate", "Response deadline"]} />

        <Rule />

        {/* 6-8 */}
        <SectionHead n={6} title="Marketplace, Domains & Social Media" />
        <p className="leading-relaxed mb-6" style={{ color: THEME.ink }}>
          A third party can start using a similar mark long before filing any
          application. Watching the registry alone misses this activity
          entirely, especially for consumer products moving fast online.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-md p-5" style={{ background: THEME.card }}>
            <div className="text-sm uppercase mb-3" style={{ fontFamily: fontMono, color: THEME.brass, letterSpacing: 1 }}>Marketplace</div>
            <ul className="space-y-1 text-[15px]" style={{ color: THEME.inkSoft }}>
              <li>Search engines & ads</li>
              <li>E-commerce marketplaces</li>
              <li>Retailer sites</li>
              <li>App stores</li>
              <li>Industry directories</li>
              <li>Crowdfunding platforms</li>
            </ul>
          </div>
          <div className="rounded-md p-5" style={{ background: THEME.card }}>
            <div className="text-sm uppercase mb-3" style={{ fontFamily: fontMono, color: THEME.brass, letterSpacing: 1 }}>Domains</div>
            <ul className="space-y-1 text-[15px]" style={{ color: THEME.inkSoft }}>
              <li>Domains using the product name</li>
              <li>Typo variations</li>
              <li>Paired with "official," "shop," "store"</li>
              <li>Suggested affiliation</li>
              <li>Phishing / fraudulent sales</li>
              <li>Redirects to competitors</li>
            </ul>
          </div>
          <div className="rounded-md p-5" style={{ background: THEME.card }}>
            <div className="text-sm uppercase mb-3" style={{ fontFamily: fontMono, color: THEME.brass, letterSpacing: 1 }}>Social</div>
            <ul className="space-y-1 text-[15px]" style={{ color: THEME.inkSoft }}>
              <li>Similar-name accounts</li>
              <li>Unauthorized brand pages</li>
              <li>Impersonation accounts</li>
              <li>Sellers using the product name</li>
              <li>Fake customer-service accounts</li>
              <li>Influencer campaigns at risk</li>
            </ul>
          </div>
        </div>
        <p className="leading-relaxed mt-4 text-sm italic" style={{ color: THEME.inkSoft }}>
          Not every similar username is legally significant &mdash; the goal is
          flagging activity worth investigating, not treating every hit as
          infringement.
        </p>

        <Rule />

        {/* 9 */}
        <SectionHead n={9} title="Establish a Risk-Scoring System" />
        <p className="leading-relaxed mb-6" style={{ color: THEME.ink }}>
          Findings become far more useful once they're ranked consistently.
          A practical starting point is a three-tier system, customized to
          the company's own risk tolerance and industry.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <RiskCard
            level="High risk"
            color={THEME.high}
            examples={["Highly similar mark", "Same or closely related goods", "Significant commercial activity", "Evidence of actual confusion", "Use by a direct competitor", "Nearing a procedural deadline"]}
            action="Escalate promptly to trademark counsel"
          />
          <RiskCard
            level="Medium risk"
            color={THEME.med}
            examples={["Moderately similar mark", "Related but not identical goods", "Limited commercial activity", "Geographic overlap that may grow"]}
            action="Investigate and place on closer watch"
          />
          <RiskCard
            level="Low risk"
            color={THEME.low}
            examples={["Weak similarity", "Clearly unrelated goods", "Minimal commercial activity", "No apparent market overlap"]}
            action="Document and monitor periodically"
          />
        </div>

        <Rule />

        {/* 10 */}
        <SectionHead n={10} title="Create an Internal Escalation Process" />
        <p className="leading-relaxed mb-4" style={{ color: THEME.ink }}>
          Monitoring only works if someone owns the outcome. Ownership
          typically spans brand management, marketing, legal, IP counsel,
          outside counsel, compliance, and e-commerce teams where relevant.
        </p>
        <div className="mb-5">
          <Flow steps={["Monitor", "Identify", "Document", "Assess", "Escalate", "Decide", "Act", "Track"]} />
        </div>
        <p
          className="text-sm leading-relaxed p-4 rounded"
          style={{ background: THEME.card, color: THEME.inkSoft, fontStyle: "italic" }}
        >
          "Reviewed by trademark counsel; related goods but insufficient
          similarity; no action at present; continue monitoring." &mdash; every
          significant finding should get a documented disposition like this,
          so the same issue isn't reassessed from scratch each time.
        </p>

        <Rule />

        {/* 11 */}
        <SectionHead n={11} title="Preserve Evidence" />
        <p className="leading-relaxed mb-4" style={{ color: THEME.ink }}>
          When a potentially problematic use turns up, capture it right away
          &mdash; online content disappears or changes quickly, so evidence
          preservation should happen before any outreach.
        </p>
        <div>
          {["Screenshots", "URLs", "Search results", "Application information", "Marketplace listings", "Product photographs", "Advertisements", "Social-media posts", "Dates observed", "Seller / business info", "Geographic info", "Archived webpage versions"].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <Rule />

        {/* 12 */}
        <SectionHead n={12} title="Consider International Monitoring" />
        <p className="leading-relaxed mb-4" style={{ color: THEME.ink }}>
          A launch can go international fast, particularly for online
          sellers. Coverage should track actual and anticipated markets, and
          matters even before entering a market, since trademark ownership
          and enforcement rules vary by jurisdiction.
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {["United States", "Canada", "European Union", "United Kingdom", "Australia", "India", "China", "Japan", "Other strategic markets"].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <a
          href="https://www.wipo.int/madrid/en/"
          className="text-sm underline"
          style={{ color: THEME.brass, fontFamily: fontMono }}
        >
          WIPO Madrid System &rarr;
        </a>

        <Rule />

        {/* 13 */}
        <SectionHead n={13} title="Coordinate With Filing Strategy" />
        <p className="leading-relaxed mb-4" style={{ color: THEME.ink }}>
          Monitoring shouldn't run independently of the trademark portfolio
          strategy. Before launch, legal should settle:
        </p>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
          {["Which marks should be registered?", "In which jurisdictions?", "For which goods and services?", "Which variations deserve protection?", "Which marks get top monitoring priority?", "What evidence of use should be kept?", "What renewal / maintenance obligations apply?"].map((t) => (
            <div key={t} className="flex gap-2 py-1" style={{ borderBottom: `1px solid ${THEME.line}` }}>
              <span style={{ color: THEME.brass }}>&bull;</span>
              <span style={{ color: THEME.inkSoft }}>{t}</span>
            </div>
          ))}
        </div>

        <Rule />

        {/* 14 */}
        <SectionHead n={14} title="Avoid Over-Monitoring" />
        <p className="leading-relaxed mb-6" style={{ color: THEME.ink }}>
          More alerts is not the same as better protection. Cast too wide a
          net and teams start ignoring alerts &mdash; which is exactly how a
          genuinely important conflict gets lost. A layered scope keeps
          attention where it belongs, and can be adjusted as real findings
          come in.
        </p>
        <div className="space-y-3">
          {[
            ["Core marks", "Frequent, broad monitoring", THEME.high],
            ["Important product marks", "Regular monitoring", THEME.med],
            ["Low-priority marks", "Periodic monitoring", THEME.low],
          ].map(([label, desc, color]) => (
            <div key={label} className="flex items-center gap-4">
              <div style={{ width: 10, height: 10, background: color, borderRadius: 2 }} />
              <div style={{ fontFamily: fontMono, color: THEME.ink, minWidth: 190 }} className="text-sm">{label}</div>
              <div style={{ color: THEME.inkSoft }} className="text-sm">{desc}</div>
            </div>
          ))}
        </div>

        <Rule />

        {/* 15 */}
        <SectionHead n={15} title="Develop a Response Playbook" />
        <p className="leading-relaxed mb-4" style={{ color: THEME.ink }}>
          Finding a conflicting mark is only the start. Decide in advance how
          each type of finding gets evaluated &mdash; the right response depends
          on similarity of the marks, relatedness of goods, strength of the
          company's rights, geographic scope, evidence of confusion, and
          business objectives.
        </p>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
          {["No action", "Continued monitoring", "Contact the third party", "Negotiate coexistence", "Oppose an application", "Seek cancellation", "Cease-and-desist letter", "Marketplace enforcement", "Litigation", "License or commercial arrangement"].map((t) => (
            <div key={t} className="flex gap-2 py-1" style={{ borderBottom: `1px solid ${THEME.line}` }}>
              <span style={{ color: THEME.brass }}>&bull;</span>
              <span style={{ color: THEME.inkSoft }}>{t}</span>
            </div>
          ))}
        </div>

        <Rule />

        {/* 16 */}
        <SectionHead n={16} title="Keep a Trademark Monitoring Log" />
        <p className="leading-relaxed mb-5" style={{ color: THEME.ink }}>
          A centralized log becomes a real IP-management tool over time &mdash;
          kept in an IP-management platform, matter-management system, or a
          controlled internal database.
        </p>
        <div className="rounded-md overflow-hidden" style={{ border: `1px solid ${THEME.line}` }}>
          {logFields.map(([field, purpose], i) => (
            <div
              key={field}
              className="flex flex-col md:flex-row md:items-center px-4 py-2.5"
              style={{
                background: i % 2 === 0 ? THEME.card : "transparent",
                borderTop: i === 0 ? "none" : `1px solid ${THEME.line}`,
              }}
            >
              <div
                className="md:w-52 shrink-0 text-sm"
                style={{ fontFamily: fontMono, color: THEME.brass }}
              >
                {field}
              </div>
              <div className="text-sm" style={{ color: THEME.inkSoft }}>{purpose}</div>
            </div>
          ))}
        </div>

        <Rule />

        {/* 17 */}
        <SectionHead n={17} title="Common Mistakes" />
        <div className="space-y-4">
          {mistakes.map(([title, desc]) => (
            <div key={title} className="flex gap-4">
              <span style={{ color: THEME.high, fontFamily: fontMono }} className="text-lg leading-none">&times;</span>
              <div>
                <div style={{ color: THEME.ink, fontWeight: 600 }} className="mb-0.5">{title}</div>
                <div style={{ color: THEME.inkSoft }} className="text-[15px]">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <Rule />

        {/* 18 */}
        <SectionHead n={18} title="A Practical Launch Timeline" />
        <div className="mt-4">
          <TimelinePhase
            label="60–90 days before launch"
            items={["Finalize candidate marks", "Conduct comprehensive clearance", "Identify priority jurisdictions", "File appropriate applications", "Establish monitoring scope", "Identify spelling & phonetic variations"]}
          />
          <TimelinePhase
            label="30 days before launch"
            items={["Configure database monitoring", "Establish marketplace & search-engine monitoring", "Identify responsible personnel", "Build the escalation workflow", "Prepare evidence-preservation procedures"]}
          />
          <TimelinePhase
            label="Launch period"
            items={["Monitor online marketplace activity", "Monitor social platforms & search results", "Watch relevant trademark filings", "Track suspicious third-party uses", "Record significant findings"]}
          />
          <TimelinePhase
            label="First 90 days after launch"
            items={["Review results more frequently", "Adjust search terms to real-world activity", "Evaluate emerging competitors", "Escalate significant conflicts", "Refine the risk-scoring system"]}
          />
          <TimelinePhase
            label="Ongoing"
            items={["Continue trademark-office monitoring", "Marketplace & internet monitoring at intervals", "Review international markets as the business grows", "Update monitoring for new products or marks"]}
            last
          />
        </div>

        <Rule />

        {/* Conclusion */}
        <div
          className="rounded-md p-7 md:p-9"
          style={{ background: THEME.ink }}
        >
          <div style={{ fontFamily: fontMono, color: THEME.brassLight, letterSpacing: 2 }} className="text-xs mb-4">
            CLOSING NOTE
          </div>
          <p style={{ color: THEME.white, fontFamily: fontDisplay, fontWeight: 400 }} className="text-xl md:text-2xl leading-snug mb-4">
            Trademark monitoring is an ongoing part of product-line
            management, not a one-time legal exercise.
          </p>
          <p style={{ color: THEME.paperDeep }} className="leading-relaxed">
            A strong program combines trademark-database monitoring,
            marketplace surveillance, online monitoring, risk assessment,
            evidence preservation, and a defined legal-response process. The
            goal isn't eliminating every instance of similarity &mdash; it's
            catching commercially meaningful conflicts early enough to make
            informed decisions. Build the watch into the launch process from
            day one: know the marks that matter, know where to watch them,
            know who reviews a hit, preserve the evidence, and keep the
            escalation path clear.
          </p>
        </div>
      </main>

      <footer className="px-6 md:px-14 py-8 text-center">
        <span style={{ fontFamily: fontMono, color: THEME.inkSoft, letterSpacing: 1 }} className="text-xs">
          FILE STATUS: MONITORING ACTIVE
        </span>
      </footer>
    </div>
  );
}
