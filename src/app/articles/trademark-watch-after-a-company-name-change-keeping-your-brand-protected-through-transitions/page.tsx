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
  title: "Trademark Watch After a Company Name Change: Keeping Your Brand Protected Through Transitions",
  description:
    "A company name change is one of the most vulnerable moments for trademark protection. Learn how to keep your chain of title clean, treat a rebrand as a new asset, and build an effective trademark watch program.",
  keywords: ["Trademark Watch", "Company Name Change", "Trademark Chain of Title", "Rebranding Trademark"],
};

const H2 = "text-[20px] sm:text-[22px] md:text-[25px] font-bold";
const H4 = "text-[16px] sm:text-[17px] md:text-[18px] font-bold";
const P = "text-[14px] sm:text-[15px] md:text-[16px]";
const UL = "list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const OL = "list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]";
const TABLE_WRAP = "overflow-x-auto";
const TABLE = "w-full border-collapse text-left text-[13px] sm:text-[14px] md:text-[15px]";
const TH = "border border-gray-300 bg-[#202F5A] text-white p-2 sm:p-3 font-bold align-top";
const TD = "border border-gray-300 p-2 sm:p-3 align-top";

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/Trademark Watch After a Company Name Change.jpg"
          alt="Blog Banner"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Trademark Watch After a Company Name Change: Keeping Your Brand Protected Through Transitions
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 11/02/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <h2 className={H2}>Introduction</h2>
          <p className={P}>
            A company name change is common after a merger, acquisition, rebrand, restructuring or reincorporation. It is also one of the moments when trademark protection is most likely to develop gaps. Registrations may still list the old owner name. Renewal notices may go to an outdated address. Employees who understood the portfolio may be gone. Meanwhile, competitors, squatters and opportunistic filers watch for brands in transition.
          </p>
          <p className={P}>
            A trademark watch is a monitoring service or process that alerts you to new filings, publications and marketplace uses that may conflict with your marks. After a name change, a watch program does two jobs at once: it protects the new brand identity as it rolls out and it preserves the legacy brand equity built under the old name. This article explains what changes (and what does not), how to keep your records clean, how to design an effective watch strategy and how to respond when a conflicting mark appears.
          </p>
          <p className={P}>
            This article is general information, not legal advice. Trademark rules, deadlines and fees vary by jurisdiction and change over time. Confirm current requirements with the relevant trademark office or a qualified trademark attorney before acting.
          </p>

          <h2 className={H2}>First, Clarify What Kind of Change Occurred</h2>
          <p className={P}>
            The words "name change" cover several different situations and the legal consequences differ for each. Before setting up any watch, identify which one applies.
          </p>
          <div className={TABLE_WRAP}>
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Scenario</th>
                  <th className={TH}>What changed</th>
                  <th className={TH}>Key legal consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}><b>Legal-entity name change</b></td>
                  <td className={TD}>The same legal entity adopts a new corporate name (for example "Acme Widgets, Inc." becomes "Acme Holdings, Inc."). No transfer of ownership.</td>
                  <td className={TD}>Existing registrations remain valid, but the owner name of record must be updated. This is typically a recorded change of name, not an assignment.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Change of entity type or state of organization</b></td>
                  <td className={TD}>Conversion from LLC to corporation or reincorporation in a new state.</td>
                  <td className={TD}>May be a mere conversion or, depending on law, a transfer. Treat carefully. Recording documents and an assignment may be needed.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Merger or acquisition</b></td>
                  <td className={TD}>Another entity becomes the owner, or two entities combine.</td>
                  <td className={TD}>Ownership passes by operation of law or assignment. Record the transfer and confirm goodwill passed with the marks.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Brand name change (the mark itself changes)</b></td>
                  <td className={TD}>The product or house brand is replaced by a new word, logo or style.</td>
                  <td className={TD}>The new brand is a new mark that needs its own clearance and filing. A registration cannot be amended to a materially different mark.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Both</b></td>
                  <td className={TD}>The company and the brand are both renamed.</td>
                  <td className={TD}>Handle both workstreams: update records for old marks and file for new ones.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={P}>
            Many problems arise because teams treat a brand change as if it were a records update, or the reverse. A registration for the old brand cannot be edited to cover the new brand and a mere change of corporate name does not require new trademark applications.
          </p>

          <h2 className={H2}>Keep the Chain of Title Clean</h2>
          <p className={P}>
            A trademark watch is only useful if you can act on what it finds. To enforce a mark, oppose a conflicting application or defend a challenge, you must be able to show you own the mark. That is why records come first.
          </p>

          <h4 className={H4}>Record the Change at the Trademark Office</h4>
          <ul className={UL}>
            <li><b>USPTO:</b> Recordation of a change of name is made through the USPTO Assignment Recordation Branch by submitting the relevant document (such as a certificate of amendment or a state filing evidencing the name change) with a cover sheet identifying the conveyance as a change of name. This updates the owner of record on each listed application and registration. A fee applies per property and bulk recording is available for portfolios.</li>
            <li><b>Other jurisdictions:</b> Most national offices (EUIPO, UKIPO, CIPO, IP India and others) have their own change-of-name or change-of-owner forms. Supporting documents may need to be notarized, legalized or translated.</li>
            <li><b>Madrid System (WIPO):</b> For international registrations, a change in the name or address of the holder is recorded with WIPO through the appropriate request form, then notified to designated Contracting Parties. A change of ownership, which is a different matter, uses a separate procedure.</li>
          </ul>

          <h4 className={H4}>Update Correspondence and Domicile Details</h4>
          <p className={P}>
            Update the correspondence address, email, attorney of record and, at the USPTO, the owner domicile address. Missed office actions, missed renewal reminders and misdirected opposition notices are among the most common causes of lost rights. If your old address still receives mail but nobody is watching it, a critical notice can go unnoticed.
          </p>

          <h4 className={H4}>Make Sure the Owner on Future Filings Matches the Owner of Record</h4>
          <p className={P}>
            Maintenance filings, such as a declaration of use under Section 8 (and renewal under Section 9 in the United States), must be filed by the true owner. If the owner of record is out of date, the Office may question who is entitled to file. A void filing or an application filed in the wrong name can be fatal. Fix the record first, then file.
          </p>

          <h4 className={H4}>Confirm and Document the Chain from the Original Applicant</h4>
          <p className={P}>
            If the company has been through several name changes or acquisitions, assemble the full chain: original owner, each name change, each assignment and each recorded document. Gaps in the chain can hamper enforcement and complicate due diligence in a future transaction. Where goodwill passed but no written assignment exists, consider confirmatory assignments.
          </p>

          <h4 className={H4}>Beware Misleading Solicitations</h4>
          <p className={P}>
            After you record a change or file maintenance documents, public records are scraped by firms that send official-looking invoices and notices offering to "register," "renew" or "monitor" your mark for unusually high fees. Legitimate USPTO communications come from official government domains. Route every notice through whoever manages the portfolio before paying anything.
          </p>

          <h2 className={H2}>Rebranding: Treat the New Name as a New Asset</h2>
          <p className={P}>
            If your company is adopting a new brand, a watch program should begin well before the public announcement.
          </p>
          <ol className={OL}>
            <li><b>Clearance search.</b> Search registers, common-law uses, business names, domain names and social handles for the proposed new name and close variants. A full search should cover phonetic equivalents, spelling variants, translations and similar commercial impressions in your classes of goods and services.</li>
            <li><b>File early.</b> In the United States and other first-to-file jurisdictions, filing a new application promptly secures priority. A U.S. intent-to-use application can secure a constructive-use priority date as of filing, subject to later registration. Consider filing in key export or manufacturing countries too.</li>
            <li><b>Secure the ecosystem.</b> Register domains, key social-media handles and app-store names. Consider common typos and variant top-level domains.</li>
            <li><b>Coordinate public disclosure.</b> Announce the new name only after filings are made, so competitors cannot file first once they learn about the plan.</li>
            <li><b>Start the watch on the new mark immediately.</b> A new application will not appear in a watch of your old registrations. Add the new mark and its variants as a distinct watch profile.</li>
          </ol>
          <p className={P}>
            Do not abandon the old marks prematurely. Even if the company plans to stop using the old brand, those registrations may protect goodwill, support infringement claims against knock-offs and block others from registering similar marks. Under U.S. law, nonuse for three consecutive years is prima facie evidence of abandonment, so a transition plan should define whether the legacy brand will remain in use (for example in a "formerly known as" capacity) or be retired deliberately.
          </p>

          <h2 className={H2}>Designing the Watch: What to Monitor</h2>

          <h4 className={H4}>Official Registers</h4>
          <ul className={UL}>
            <li><b>New applications:</b> Monitor newly filed applications that are identical or similar to your marks in sound, appearance, meaning and commercial impression, in your classes and related classes.</li>
            <li><b>Publications and oppositions:</b> In the United States, applications are published for opposition in the Official Gazette and a notice of opposition must generally be filed within 30 days of publication. Extensions of time can be requested up to a maximum of 180 days from the publication date, subject to the Trademark Trial and Appeal Board rules. Other regions have different windows (for example three months in the EU and two months in the UK, subject to extension in some cases). Missing these windows is the single most important risk a watch is designed to catch.</li>
            <li><b>Status changes of conflicting marks:</b> Registrations that lapse can open opportunities; pending applications may be amended, assigned or abandoned.</li>
            <li><b>Assignments and name changes of third parties:</b> A competitor changing its name may be a signal that its portfolio is shifting.</li>
          </ul>

          <h4 className={H4}>Variants to Include</h4>
          <p className={P}>
            The examples below use a sample mark, "NORTHBRIDGE."
          </p>
          <div className={TABLE_WRAP}>
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Variant type</th>
                  <th className={TH}>Example</th>
                  <th className={TH}>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}><b>Phonetic</b></td>
                  <td className={TD}>NORTH BRYDGE, NORTHBRIGE</td>
                  <td className={TD}>Confusion is assessed by sound as well as appearance.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Visual</b></td>
                  <td className={TD}>N0RTHBRIDGE (zero for O)</td>
                  <td className={TD}>Look-alike strings can mislead consumers.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Translation or equivalent meaning</b></td>
                  <td className={TD}>Foreign-language equivalents in your target markets</td>
                  <td className={TD}>Doctrine of foreign equivalents may apply.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Compound and split forms</b></td>
                  <td className={TD}>NORTH BRIDGE, BRIDGE NORTH</td>
                  <td className={TD}>Spacing and word order changes do not eliminate confusion.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Prefix and suffix variations</b></td>
                  <td className={TD}>NORTHBRIDGE PRO, NORTHBRIDGE LABS</td>
                  <td className={TD}>Added terms are often descriptive and do not avoid conflict.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Logo and design elements</b></td>
                  <td className={TD}>Similar visual composition, symbols or color schemes</td>
                  <td className={TD}>Design-mark watches require image-search tools or design codes.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Former company or brand names</b></td>
                  <td className={TD}>The pre-change name and any trade names</td>
                  <td className={TD}>Third parties may try to claim the old name once the market perceives it as abandoned.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className={H4}>Beyond the Trademark Registers</h4>
          <p className={P}>
            Registers capture only part of the risk. A comprehensive program should also include:
          </p>
          <ul className={UL}>
            <li><b>Domain-name watch:</b> New registrations or lookalike domains for your old and new names, including internationalized domain names and homoglyph variants.</li>
            <li><b>Social media and marketplace monitoring:</b> Impersonation accounts, counterfeit listings and sellers using your name as a keyword.</li>
            <li><b>App-store and software-repository monitoring:</b> Names of apps and packages that could confuse customers.</li>
            <li><b>Business-name and state-level filings:</b> Entity name registrations and fictitious-name filings, which might not appear in trademark searches but can still create conflicts.</li>
            <li><b>Common-law use:</b> Unregistered users can have priority in particular regions. Periodic investigations or web-search sweeps are a useful supplement.</li>
            <li><b>Customs and border recordation:</b> In the United States, registered marks can be recorded with U.S. Customs and Border Protection. After a name change, update the recordation so enforcement authorities have correct owner information.</li>
          </ul>

          <h4 className={H4}>Geographic and Class Scope</h4>
          <p className={P}>
            Watch the jurisdictions where you sell, manufacture or plan to expand. China, the EU, the UK, Japan, Canada and India are common choices, along with any country that is a key source of counterfeits. For classes, begin with the classes of your registrations, then add related classes where consumers could assume a connection, such as software and services or apparel and accessories. A narrow watch is cheaper but can miss a conflicting filing in an adjacent class.
          </p>
          <p className={P}>
            Protect your brand across borders with our{" "}
            <a href="https://effemark.com/global-trademark-search" className="text-blue-600 hover:underline">
              comprehensive global trademark search services
            </a>.
          </p>

          <h2 className={H2}>Tools and Services</h2>
          <div className={TABLE_WRAP}>
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Option</th>
                  <th className={TH}>Strengths</th>
                  <th className={TH}>Limitations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}><b>Free official tools (national office search systems and gazettes)</b></td>
                  <td className={TD}>No cost; authoritative.</td>
                  <td className={TD}>Manual, slow and easy to forget. No fuzzy-matching alerts in some systems.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Commercial watch services</b></td>
                  <td className={TD}>Automated alerts, fuzzy and phonetic matching, multi-country coverage, design-mark search.</td>
                  <td className={TD}>Cost scales with scope. Alerts must still be triaged by someone who understands trademark law.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Attorney-managed watch</b></td>
                  <td className={TD}>Includes legal analysis and recommended action for each hit; integrates with docketing.</td>
                  <td className={TD}>Higher cost; best for core brands.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Hybrid approach</b></td>
                  <td className={TD}>Automated service for broad coverage, attorney review for high-priority alerts.</td>
                  <td className={TD}>Requires clear triage rules and responsibilities.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={P}>
            Whichever route you choose, ensure the service is configured with the current owner name, the new brand elements and the old brand elements. After a name change, many programs fail simply because the watch was set up under the old owner and nobody updated it.
          </p>

          <h2 className={H2}>Triage: What to Do When a Hit Appears</h2>
          <p className={P}>
            A watch generates alerts; it does not decide which are worth fighting. A disciplined triage process will keep costs sensible while protecting the brands that matter.
          </p>
          <ol className={OL}>
            <li><b>Confirm the details.</b> Verify the applicant, goods and services, filing date, filing basis, status and any priority claims. Check whether the application is in a class that overlaps with yours.</li>
            <li><b>Assess similarity.</b> Compare marks by sight, sound, meaning and commercial impression. In U.S. practice, likelihood of confusion is assessed under the DuPont factors, which also consider the relatedness of goods, channels of trade, purchaser sophistication and strength of the senior mark.</li>
            <li><b>Rank the risk.</b> Group into critical (near-identical mark for identical goods), significant (similar mark for related goods) and low (weak similarity or unrelated goods).</li>
            <li><b>Investigate the applicant.</b> Is it a competitor, a distributor, a squatter or an unrelated business? A bad-faith filer may warrant a stronger response. A friendly distributor may be handled by a coexistence agreement.</li>
            <li><b>Choose a response.</b> Options include a cease-and-desist or demand letter, a letter of protest, an extension of time to oppose, a notice of opposition, a coexistence or consent agreement, or monitoring only.</li>
            <li><b>Calendar the deadline.</b> If the opposition period is running, docket the date immediately and consider a protective extension of time while you evaluate.</li>
            <li><b>Document the decision.</b> Record why you did or did not act. Inconsistent enforcement can undermine later claims and a record of diligence shows that you policed your marks.</li>
          </ol>

          <h4 className={H4}>Tools for Contesting a Conflicting Mark</h4>
          <ul className={UL}>
            <li><b>Letter of protest (U.S.):</b> Allows a third party to submit evidence to the examining attorney before publication. It is not an opposition but can help block a conflicting application early.</li>
            <li><b>Opposition:</b> Filed after publication, before the TTAB in the U.S. or the equivalent body elsewhere.</li>
            <li><b>Cancellation:</b> Available against registered marks. In the United States, a petition to cancel can be filed on any valid ground within five years of registration and on limited grounds afterward (for example abandonment, fraud or genericness).</li>
            <li><b>Litigation:</b> Infringement or unfair-competition claims where the conflicting mark is in use.</li>
            <li><b>Negotiated resolution:</b> Consent or coexistence agreements, which should record the specific uses, territories and limitations that each party accepts.</li>
          </ul>

          <h2 className={H2}>Common Pitfalls After a Name Change</h2>
          <ul className={UL}>
            <li><b>Leaving the watch under the old name:</b> Alerts may stop, or may go to a departed employee.</li>
            <li><b>Filing maintenance documents in the wrong owner name:</b> This can invalidate filings or trigger refusals.</li>
            <li><b>Assuming a registration protects the new brand:</b> It does not. A materially different mark needs a new application.</li>
            <li><b>Altering the mark in use so much that it no longer matches the registration:</b> A specimen of use that shows a materially different mark can fail to support a declaration of use and in the U.S. a registration cannot be amended to materially alter the mark.</li>
            <li><b>Letting the legacy brand lapse without a plan:</b> Loss of the old marks can expose goodwill and invite squatters.</li>
            <li><b>Neglecting licensees:</b> Update license agreements, quality-control provisions and the licensee's authorized-use notices with the new owner name.</li>
            <li><b>Forgetting subsidiaries and affiliates:</b> Marks held in different group entities may need separate updates.</li>
            <li><b>Failing to update the domain, social and marketplace records:</b> Platform brand-registry programs (for example Amazon Brand Registry) may need the new owner details to continue to function.</li>
            <li><b>Poor documentation of use:</b> Keep dated specimens of the old and new brand in use to support later maintenance filings and to document continuity.</li>
          </ul>

          <h2 className={H2}>A Timeline for Transition</h2>
          <div className={TABLE_WRAP}>
            <table className={TABLE}>
              <thead>
                <tr>
                  <th className={TH}>Phase</th>
                  <th className={TH}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={TD}><b>90–60 days before announcement</b></td>
                  <td className={TD}>Inventory all marks, registrations, applications, domains and handles. Identify record owner for each. Clear and file the new brand. Plan watch setup.</td>
                </tr>
                <tr>
                  <td className={TD}><b>60–30 days before</b></td>
                  <td className={TD}>Prepare change-of-name documents and certified copies. Gather evidence of the name change. Brief the watch vendor. Prepare updated licenses and recordation filings.</td>
                </tr>
                <tr>
                  <td className={TD}><b>At effective date</b></td>
                  <td className={TD}>File change-of-name recordations in each jurisdiction. Update owner details in customs, marketplace and brand-registry accounts. Activate watch profiles for new and old names.</td>
                </tr>
                <tr>
                  <td className={TD}><b>30–90 days after</b></td>
                  <td className={TD}>Confirm records show the new name. Test the watch with sample alerts. Review the first reports. Clean up the correspondence address in all registries.</td>
                </tr>
                <tr>
                  <td className={TD}><b>Ongoing</b></td>
                  <td className={TD}>Review watch results monthly or quarterly. Audit the portfolio annually. Calendar renewal and maintenance deadlines under the new owner name.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className={H2}>A Checklist for Brand Continuity</h2>
          <ul className={UL}>
            <li>Every registration and application lists the correct current owner name and address</li>
            <li>Change-of-name documents are recorded in each relevant jurisdiction</li>
            <li>The attorney of record and correspondence email are current</li>
            <li>Docketing system is updated with the new owner name and all deadlines</li>
            <li>Watch profiles are configured for the new owner, the new brand and legacy brands, including variants</li>
            <li>Classes and countries in the watch align with your business plans</li>
            <li>Domain names, social handles and marketplace brand registries are updated</li>
            <li>Customs recordation is updated where applicable</li>
            <li>License agreements and quality-control terms reflect the new name</li>
            <li>A triage protocol identifies who reviews alerts, how quickly and who authorizes action</li>
            <li>Evidence of use for old and new brands is being preserved</li>
            <li>A plan exists for the legacy brand: keep, phase out or retire</li>
          </ul>

          <h2 className={H2}>Conclusion</h2>
          <p className={P}>
            A name change need not weaken trademark protection, but it does require deliberate maintenance. Start by identifying what changed, then fix the record so you can prove ownership. Treat a new brand as a new asset, with its own clearance, filing and watch. Build a layered monitoring program that covers registers, domains, marketplaces and common-law use and equip it with a clear triage and response process.
          </p>
          <p className={P}>
            Above all, keep the watch itself aligned with the new reality: a monitoring service set up under the wrong name or addressed to the wrong inbox protects nothing. Done well, the transition period becomes an opportunity to tidy the portfolio and strengthen the brand.
          </p>

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
