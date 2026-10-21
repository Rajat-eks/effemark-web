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
  title: "Trademark Watch for Cannabis Brands: Navigating a Rapidly Growing and Competitive Space",
  description:
    "How cannabis brands can monitor, enforce and build defensible trademark rights when federal registration is uncertain, including state, common-law and ancillary-goods strategies.",
  keywords: [
    "Cannabis Trademark",
    "Trademark Watch Service",
    "Cannabis Brand Protection",
    "Hemp CBD Trademark",
    "Trademark Monitoring",
  ],
};

const H2 = "text-[20px] sm:text-[22px] md:text-[25px] font-bold";
const H4 = "text-[16px] sm:text-[17px] md:text-[18px] font-bold";
const P = "text-[14px] sm:text-[15px] md:text-[16px]";
const UL = "list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const OL = "list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const TABLE_WRAP = "overflow-x-auto";
const TABLE = "w-full border-collapse text-left text-[13px] sm:text-[14px] md:text-[15px]";
const TH = "border border-gray-300 bg-[#202F5A] text-white p-2 sm:p-3 font-semibold align-top";
const TD = "border border-gray-300 p-2 sm:p-3 align-top";

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/Trademark Watch for Cannabis Brands.jpg"
          alt="Blog Banner"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Trademark Watch for Cannabis Brands: Navigating a Rapidly Growing and Competitive Space
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 10/21/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className={H2}>Introduction</h2>
          <p className={P}>
            <i>How to monitor, enforce and build defensible brand rights when federal registration is uncertain.</i>
          </p>
          <p className={P}>
            Few industries combine fast growth, crowded branding and legal uncertainty the way cannabis does. Thousands of operators, from multi-state cultivators to single-store dispensaries and hemp-derived CBD startups, are choosing names, logos, strain names and packaging at the same time, often in the same markets. Many of those names are suggestive, playful, or built from the same small pool of cultural references. The result is a high rate of conflicts between brands and a high rate of copycat products that trade on the goodwill of established names.
          </p>
          <p className={P}>
            Trademark watching, meaning the systematic monitoring of new filings, new market entrants and potentially infringing uses, is therefore more than a routine maintenance task in this sector. For many cannabis brands it is the primary means of defending the brand, because federal registration has historically been unavailable for marijuana goods and because common-law and state rights depend heavily on who was using a mark first and where.
          </p>
          <p className={P}>
            This article explains the legal backdrop, what a cannabis-specific watch program should monitor, how to respond to what it finds and how recent federal developments may change the picture. It is general information, not legal advice. Rules vary by jurisdiction and change over time, so confirm details with a trademark attorney.
          </p>

          <h2 className={H2}>1. The Legal Backdrop: Why Cannabis Trademarks Are Different</h2>

          <h4 className={H4}>1.1 The "Lawful Use in Commerce" Requirement</h4>
          <p className={P}>
            Federal trademark rights under the Lanham Act depend on use in commerce that Congress can regulate. The USPTO has long taken the position that the use must be lawful, so an application for a mark used on goods or services that violate federal law is refused (see TMEP § 907 and § 1301.01(a)(ii)). Because marijuana has been a Schedule I substance under the Controlled Substances Act, the USPTO has refused applications covering marijuana flower, vapes, edibles and related products and has also refused applications for related services such as dispensary services. The Trademark Trial and Appeal Board has upheld this approach, including in precedential decisions such as <i>In re JJ206, LLC</i> (Juju Joints) and <i>In re Morgan Brown</i> (Herbal Access).
          </p>

          <h4 className={H4}>1.2 Hemp and CBD</h4>
          <p className={P}>
            The 2018 Farm Bill removed hemp, defined as cannabis with a delta-9 THC concentration of not more than 0.3 percent on a dry-weight basis, from the Controlled Substances Act. The USPTO responded with examination guidance that allows registration of marks for hemp-derived goods when the application was filed after the effective date of the Farm Bill and the applicant shows that the goods comply with the 0.3 percent limit. Even so, many CBD applications for foods, beverages and dietary supplements have been refused because the Food, Drug and Cosmetic Act restricts adding CBD to those products.
          </p>
          <p className={P}>
            Hemp itself is also entering a more restrictive period: legislation enacted in late 2025 narrowed the federal definition of hemp to exclude many intoxicating hemp-derived products, with a compliance date reported for November 2026. Brands in the hemp space should confirm the current status of those provisions and their effect on the goods listed in any application or relied on for common-law rights.
          </p>

          <h4 className={H4}>1.3 The 2026 Rescheduling Developments</h4>
          <p className={P}>
            In December 2025, an executive order directed the Attorney General to move marijuana to Schedule III. On April 22 to 23, 2026, the Department of Justice and DEA issued a final order placing two categories into Schedule III: FDA-approved drug products containing marijuana and marijuana subject to a qualifying state medical marijuana license. Other marijuana, including adult-use product, bulk unlicensed product and extracts outside those categories, remained in Schedule I.
          </p>
          <p className={P}>
            A separate broader proceeding to move the remaining marijuana to Schedule III went to an administrative hearing before a DEA administrative law judge beginning June 29, 2026 and commentators reported in late September 2026 that the hearing had concluded without resolving the question. The April order has also been challenged in the courts.
          </p>
          <p className={P}>
            For trademark purposes, practitioners have argued that the "lawful use" barrier may fall away for state-licensed medical operators who also satisfy any DEA registration requirements and applicants began filing shortly after the order, in part to test how the USPTO will respond. Other commentators caution that non-FDA-approved, state-licensed products are still not clearly lawful under federal law and that the USPTO may distinguish between medical and adult-use goods. As of this writing, the author is not aware of definitive USPTO examination guidance resolving these questions, so brands should treat federal registration for cannabis goods as an evolving opportunity rather than a settled right and should check current USPTO practice and TTAB decisions before filing.
          </p>
          <p className={P}>
            <b>Practical takeaway:</b> Federal registration may become available for some cannabis goods, but a brand should not assume it. A watch program that works under either outcome, with state, common-law and ancillary-goods rights all monitored, is the safest design.
          </p>

          <h2 className={H2}>2. Why Watching Matters More in Cannabis</h2>
          <ul className={UL}>
            <li><b>Crowded naming space:</b> Strain names, wordplay on "green," "kush," "leaf," "high," and California or Colorado geography produce frequent near-duplicates. Strain names themselves are often generic descriptors and hard to protect.</li>
            <li><b>Territorial rights:</b> Without a federal registration, rights tend to be defined by actual use in specific states or regions. A competitor opening in a neighboring state with a similar name can lock you out of expansion unless you detect it early.</li>
            <li><b>Priority is everything:</b> In a first-to-use system, evidence of who used a mark first and where is often decisive. A watch program produces dated evidence of when a competitor appeared.</li>
            <li><b>Copycat and lookalike products:</b> Edibles that imitate well-known candy, snack and cereal packaging have been the subject of enforcement by large consumer brands, including litigation by The Hershey Company in 2014 against a cannabis edibles maker. Cannabis brands face parallel risks from knockoffs of their own packaging.</li>
            <li><b>Fast turnover:</b> Licenses are issued, transferred and revoked frequently and brands are acquired and rebranded. A conflict can appear and disappear within months.</li>
            <li><b>Limited enforcement forums:</b> Some courts have been reluctant to enforce rights built on federally unlawful use, which makes pre-emptive, low-cost resolution (cease and desist letters, negotiated coexistence) more important than litigation.</li>
          </ul>

          <h2 className={H2}>3. Where Priority Comes From When Federal Registration Is Unavailable</h2>

          <h4 className={H4}>3.1 State Registrations</h4>
          <p className={P}>
            Many states with legal cannabis markets allow state trademark registration for cannabis goods. State registration is inexpensive and quick and it provides notice and evidentiary value within the state. It does not provide nationwide priority and it can be narrow in scope. A watch program should include the state registries where you operate or plan to operate, because new state filings by others can reveal conflicts early.
          </p>

          <h4 className={H4}>3.2 Common-Law Rights</h4>
          <p className={P}>
            Common-law rights arise from use, are limited to the geographic area where the mark is known and can be difficult to prove. Courts differ on whether use in a federally unlawful business can create enforceable priority. For example, in <i>CreAgri, Inc. v. USANA Health Sciences</i> (9th Cir. 2007), the Ninth Circuit held that use of a mark on goods that violated federal law could not establish priority and similar reasoning was applied in cannabis disputes such as <i>Kiva Health Brands v. Kiva Brands</i> (N.D. Cal. 2019), where the court nonetheless found for the party that had a federally registered mark for lawful ancillary goods. These cases illustrate why brands should ground their priority in as many lawful uses as possible.
          </p>

          <h4 className={H4}>3.3 Federal Registrations for Ancillary Goods and Services</h4>
          <p className={P}>
            Since the core goods are often unregisterable, many cannabis brands file federal applications for lawful ancillary goods and services: apparel, bags, stickers, lighters (subject to paraphernalia rules), publications, event and educational services, software and apps and consulting. Those registrations give the owner a federal presence, a basis for opposing and cancelling confusingly similar marks and priority against later filers. Be careful with goods that look like drug paraphernalia, which the USPTO has refused under 21 U.S.C. § 863 and with identifications that mention cannabis directly.
          </p>

          <h4 className={H4}>3.4 Intent-to-Use Filings</h4>
          <p className={P}>
            An intent-to-use application for lawful goods establishes a constructive-use priority date upon registration. Applicants should consider filing in good faith for goods that are lawful and should not rely on an application for unlawful goods that is likely to be refused. If your brand plans to use the mark for both hemp-derived and marijuana-derived products, consider whether to file separately for each, so that a refusal for one does not delay the other.
          </p>

          <h2 className={H2}>4. Designing a Cannabis-Specific Watch Program</h2>
          <p className={P}>
            A good watch program monitors a broad range of sources, scores what it finds and triggers action. Treat it as a continuous process with clear owners, not a one-time search.
          </p>

          <h4 className={H4}>4.1 Sources to Monitor</h4>
          <div className={TABLE_WRAP}>
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Source</th>
                  <th className={TH}>What to look for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}><b>USPTO Trademark Search and TSDR</b></td>
                  <td className={TD}>New applications and published marks that resemble your brand in classes 5, 25, 29-35, 41, 42 and others relevant to your products. Include phonetic variants, translations and common misspellings. Watch for letters of protest and examiner citations that indicate how similar marks are being treated.</td>
                </tr>
                <tr>
                  <td className={TD}><b>USPTO Official Gazette</b></td>
                  <td className={TD}>Marks approved for publication, which begins the 30-day opposition period (extendable up to 180 days from publication in total).</td>
                </tr>
                <tr>
                  <td className={TD}><b>State trademark registries</b></td>
                  <td className={TD}>New registrations or applications in every state where you operate, plan to operate, or sell online. Dispensary-heavy states such as California, Colorado, Oregon, Washington, Nevada, Michigan and Massachusetts deserve priority.</td>
                </tr>
                <tr>
                  <td className={TD}><b>State licensing databases</b></td>
                  <td className={TD}>Newly issued retail, cultivation and manufacturing licenses, including doing-business-as names. Licensee names often precede public launch, giving the earliest warning.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Business-entity filings</b></td>
                  <td className={TD}>New LLCs, DBAs and assumed-name registrations that include your mark or a close variant.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Domain names and social handles</b></td>
                  <td className={TD}>Newly registered domains, typosquats and social media accounts using your name, including handles on Instagram, TikTok, X and Facebook.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Menus and marketplaces</b></td>
                  <td className={TD}>Online menu and listing platforms, delivery apps and marketplaces where a copycat could appear with your brand name or a lookalike.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Retail and trade shows</b></td>
                  <td className={TD}>Product launches, trade-show exhibitors and awards lists. Visual monitoring of packaging and trade dress at points of sale.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Foreign registries</b></td>
                  <td className={TD}>Madrid System filings, Canadian CIPO, EUIPO and other markets where you plan to expand. Note that foreign treatment of cannabis goods varies widely.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Customer reports</b></td>
                  <td className={TD}>Staff and customers who see lookalike products can be your most efficient early-warning system. Provide a simple reporting channel.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className={H4}>4.2 Search Logic</h4>
          <ul className={UL}>
            <li>Search for exact matches, phonetic equivalents (K vs. C, PH vs. F), common cannabis shorthand (420, 710, "kush," "dank"), plural and singular forms, compound marks that include your term and marks that combine your term with generic words such as "farms," "labs," "collective," or "genetics."</li>
            <li>Include design-mark searches using the USPTO design code for your logo elements and use image-recognition tools for logos and packaging where available.</li>
            <li>Search by owner, not just by mark. If a particular entity has filed several marks that look like yours, a pattern of bad-faith filing becomes visible.</li>
            <li>Run a baseline "knock-out" and full search before launching any new brand, then convert that search into the starting point for ongoing watching.</li>
          </ul>
          <p className={P}>
            Need a baseline before you launch or expand? Explore our{" "}
            <a href="https://effemark.com/global-trademark-search" className="text-blue-600 hover:underline">
              comprehensive global trademark search services
            </a>.
          </p>

          <h4 className={H4}>4.3 Scoring and Triage</h4>
          <p className={P}>
            Not every hit warrants action. Define a simple triage scale and apply it consistently so that the team spends effort on the conflicts that matter.
          </p>
          <div className={TABLE_WRAP}>
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Level</th>
                  <th className={TH}>Typical characteristics</th>
                  <th className={TH}>Default response</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}><b>High</b></td>
                  <td className={TD}>Identical or nearly identical mark, same or related goods, same market area, evidence of use or launch.</td>
                  <td className={TD}>Immediate review by counsel; evidence capture; cease and desist or opposition planning.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Medium</b></td>
                  <td className={TD}>Similar mark with some differences, related goods, unclear use or still at application stage.</td>
                  <td className={TD}>Monitor closely; consider a letter of protest or an extension of time to oppose; gather facts.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Low</b></td>
                  <td className={TD}>Weak similarity, different goods or market, or a descriptive term shared by many marks.</td>
                  <td className={TD}>Log and re-check periodically; no action unless circumstances change.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className={H2}>5. Responding to What the Watch Finds</h2>

          <h4 className={H4}>5.1 Capture Evidence First</h4>
          <p className={P}>
            Before sending any communication, document the other party's use: screenshots with dates and URLs, photographs of packaging and storefronts, purchase records with receipts and lot numbers and archived web pages. In cannabis disputes, evidence of when and where a mark was used often decides priority and online content can disappear within days. Make a purchase of the product where lawful to document the actual presentation of the mark.
          </p>

          <h4 className={H4}>5.2 Letters of Protest</h4>
          <p className={P}>
            If a conflicting application is pending at the USPTO, an interested party can submit a letter of protest with evidence under 37 C.F.R. § 2.149, asking the examining attorney to consider a likelihood-of-confusion refusal. These are most useful when you hold a registration or earlier-filed application and they are inexpensive compared with an opposition.
          </p>

          <h4 className={H4}>5.3 Oppositions and Cancellations</h4>
          <p className={P}>
            After publication, a party that believes it will be damaged by registration may file an opposition (or a request for extension of time to oppose) within 30 days, extendable up to 180 days from publication. Grounds include likelihood of confusion with a previously used or registered mark, dilution and, where appropriate, lack of bona fide use or fraud. After registration, a petition to cancel can be filed at the TTAB; for registrations less than five years old, grounds are broad. Note that a cannabis brand's standing and priority may depend on lawful ancillary use, so plan the evidentiary record carefully.
          </p>

          <h4 className={H4}>5.4 Cease-and-Desist and Coexistence Agreements</h4>
          <p className={P}>
            A well-calibrated demand letter should identify your rights (registrations, state registrations, documented use and dates), describe the conflict and propose a specific resolution: rebranding, a phase-out period, or a coexistence agreement with geographic or product-line limits. Because enforcement forums can be uncertain for cannabis, many disputes are resolved through negotiated coexistence that allocates territory, trade dress and product categories. Before sending a letter, consider declaratory judgment risk and the possibility that the recipient may challenge your priority.
          </p>

          <h4 className={H4}>5.5 Marketplace and Platform Takedowns</h4>
          <p className={P}>
            Domain disputes can proceed under the UDRP where a domain was registered and used in bad faith, but a UDRP complainant must show trademark rights, which cannabis owners with only state or common-law rights may find harder to prove. Social-media and marketplace platforms have their own policies, many of which restrict cannabis content altogether, so takedown approaches should be tested case by case.
          </p>

          <h4 className={H4}>5.6 Trade Dress and Copycat Packaging</h4>
          <p className={P}>
            If a competitor copies packaging, color schemes, or product shape, trade-dress protection may be available under state law and the Lanham Act § 43(a), which protects unregistered trade dress, although unlawful-use arguments can arise. Document distinctiveness (secondary meaning for product design) and consider design patents or copyright in artwork as additional layers. Consumer-protection considerations are also relevant, as lookalike candy-style packaging has been criticized by regulators for the risk of accidental ingestion by children.
          </p>

          <h2 className={H2}>6. Strategy Under Different Federal Scenarios</h2>
          <div className={TABLE_WRAP}>
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Scenario</th>
                  <th className={TH}>Watch and brand-protection implications</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}><b>Status quo:</b> core cannabis goods still refused</td>
                  <td className={TD}>Continue to rely on state registrations, ancillary federal registrations and documented common-law use. Watch the USPTO for others' ancillary filings that could block your expansion.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Partial opening:</b> medical/state-licensed goods allowed to register</td>
                  <td className={TD}>Evaluate filing for medical goods if you hold the required state license and any necessary DEA registration. Expect a surge of filings, so file early and monitor the USPTO daily for conflicts. Maintain records showing lawful interstate use, since use-in-commerce evidence may be scrutinized.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Full Schedule III</b> or broader federal regime</td>
                  <td className={TD}>Expect heavy competition at the USPTO and aggressive filings by operators with earlier state use but no federal record. Priority disputes between federal filers and earlier common-law users will increase; evidence of earliest use will matter more than ever.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Reversal or litigation delay</b></td>
                  <td className={TD}>Court challenges to the rescheduling orders could change eligibility. Avoid betting an entire strategy on one outcome; maintain parallel state and ancillary protections.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={P}>
            In any scenario, an early application is valuable. Even if refused initially, a pending application can preserve a date and an applicant whose goods become registrable later may benefit from an earlier filing position, subject to the examination rules. Discuss with counsel whether to file now, which goods to include and how to describe them accurately.
          </p>

          <h2 className={H2}>7. Brand Selection and Clearance</h2>
          <p className={P}>
            Prevention reduces the cost of watching. Before adopting a name, run a comprehensive clearance search across federal, state, common-law and domain sources. Favor distinctive coined or arbitrary marks over descriptive terms, avoid strain-name-style words that competitors can freely use and avoid imitating well-known consumer brands, which invites aggressive enforcement. If the brand will expand to apparel, accessories, events, or media, clear those categories at the same time. Consider foreign clearance if you plan licensing deals or international distribution.
          </p>

          <h2 className={H2}>8. Governance: Making the Program Work</h2>
          <ul className={UL}>
            <li><b>Assign ownership:</b> One person or firm should own the watch, review alerts weekly and escalate matters.</li>
            <li><b>Keep a brand portfolio register:</b> List every mark, jurisdiction, class, filing and registration status and key dates, so that new alerts can be compared immediately.</li>
            <li><b>Maintain use evidence:</b> Keep dated samples, invoices, packaging, advertising and photographs of storefronts and signage by state and year. This evidence supports priority and defeats abandonment arguments.</li>
            <li><b>Control licensing and franchising:</b> In an industry where brands are frequently licensed across state lines, written licenses with quality-control provisions protect against naked licensing.</li>
            <li><b>Manage entity changes:</b> Mergers, acquisitions and license transfers require proper assignments and an intent-to-use application cannot be freely assigned before a statement of use is filed except to a successor to the business.</li>
            <li><b>Review annually:</b> Revisit the watch scope as new states open, rescheduling develops, or the product line changes.</li>
          </ul>

          <h2 className={H2}>9. Budgeting and Tools</h2>
          <p className={P}>
            Commercial watch services can monitor the USPTO and many state databases automatically, but cannabis brands should supplement them with manual checks of state licensing records, local business filings and online marketplaces, which are less commonly covered. A typical program combines an automated federal and international watch, a periodic state-registry review, social and domain monitoring and counsel review of high-priority hits. Cost scales with the number of marks, jurisdictions and classes, so prioritize the marks that carry the most value and the states where you do or will do business.
          </p>

          <h2 className={H2}>10. Key Takeaways</h2>
          <ol className={OL}>
            <li>Federal registration of marijuana goods has been unavailable because of the lawful-use requirement; 2026 rescheduling may open limited pathways, but the scope is unsettled, so verify current USPTO practice.</li>
            <li>Because rights often rest on state registrations and common-law use, early detection of competing uses is the core of cannabis brand protection.</li>
            <li>Monitor federal, state, licensing, business-entity, domain, social and marketplace sources and include phonetic and cannabis-slang variants.</li>
            <li>Triage hits, capture evidence immediately and use a graduated response: letters of protest, oppositions, negotiated coexistence and cease-and-desist letters.</li>
            <li>File for lawful ancillary goods and services now, consider intent-to-use filings and maintain thorough use records.</li>
            <li>Review your strategy regularly as federal and state rules change and involve trademark counsel with cannabis experience.</li>
          </ol>

          <h2 className={H2}>About EffeMark</h2>
          <p className={P}>
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
