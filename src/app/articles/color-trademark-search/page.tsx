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
  title: "Color Trademark Search: How to Check if a Color Is Already Claimed",
  description:
    "Color marks don't register the way word marks do. Learn why, where to search, and how to run a thorough clearance search for a color trademark.",
  keywords: [
    "Color Trademark Search",
    "Color Mark Clearance",
    "Trademark Color Claim",
    "USPTO Trademark Search",
    "Brand Color Protection",
  ],
};

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Color Trademark Search.jpg"
          alt="Color trademark search: how to check if a color is already claimed"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Color Trademark Search: How to Check if a Color Is Already Claimed
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 20/04/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            Color marks are among the most powerful - and most difficult to
            clear - assets in trademark law. Tiffany&apos;s robin&apos;s-egg
            blue, UPS&apos;s brown, T-Mobile&apos;s magenta and Owens
            Corning&apos;s pink insulation all function as source identifiers
            in their respective industries, meaning a competitor using a
            confusingly similar color on a confusingly similar product can
            face real legal exposure. But because color marks don&apos;t
            register the way word marks do, checking whether{" "}
            <strong>a color trademark</strong> is already claimed is a
            fundamentally different exercise than a standard name search. This
            guide walks through why that is, where to search, and how to run
            a thorough clearance search for a color mark.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Color Marks Work Differently
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Unlike a word or logo, a color has no inherent distinctiveness -
            consumers don&apos;t automatically read a color as a brand
            identifier the way they read a made-up word like &quot;Kodak.&quot;
            The U.S. Supreme Court settled the question of whether color alone
            could ever function as a trademark in{" "}
            <em>Qualitex Co. v. Jacobson Products Co.</em> (1995), holding
            that a single color can be registered, but only once it has
            acquired distinctiveness - commonly called secondary meaning -
            through use in commerce, so that consumers have come to associate
            that specific color, on that specific type of product or service,
            with a single source. This has three practical consequences for a{" "}
            <strong>color trademark search</strong>:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              A color mark is always tied to specific goods or services and
              often to a specific placement. &quot;Orange&quot; is not
              claimed in the abstract; a registration might claim orange
              specifically as applied to the handle of a hand tool, or
              magenta specifically for wireless telecommunications services.
              Two unrelated companies can each own a color mark in the same
              shade if their goods or services and channels of trade
              don&apos;t overlap.
            </li>
            <li>
              Functionality can defeat a claim regardless of consumer
              recognition. If a color serves a utilitarian purpose (for
              example, black is standard for outboard boat motors because it
              is compatible with more boat colors and hides oxidation
              stains, as addressed in the Federal Circuit&apos;s{" "}
              <em>In re Howard Leight</em> line of cases and echoed in{" "}
              <em>Qualitex</em> itself), it cannot be registered no matter how
              strongly the public associates it with one company.
            </li>
            <li>
              Registration is not the only source of rights. Because color
              marks depend on acquired distinctiveness through use, a company
              can build enforceable common-law rights in a color well before
              - or without ever - filing a federal application. A clean
              federal database search does not guarantee the color is
              actually free to use.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step 1: Search the USPTO&apos;s Federal Trademark Database
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The USPTO retired its long-standing TESS (Trademark Electronic
            Search System) database on November 30, 2023, replacing it with a
            new cloud-based Trademark Search system at tmsearch.uspto.gov. If
            you learned trademark searching on TESS, expect different search
            syntax and a different interface; the USPTO publishes a
            &quot;Transitioning from TESS&quot; reference guide mapping old
            search commands to the new ones.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <strong>How color claims appear in USPTO records.</strong> Every
            trademark application that includes color as part of the mark
            must include an explicit color claim - a statement naming the
            generic color(s) claimed as a feature of the mark (e.g.,
            &quot;The color(s) magenta is/are claimed as a feature of the
            mark&quot;). If no color is claimed, the record will instead
            state &quot;Color is not claimed as a feature of the mark.&quot;
            This claim field, along with the &quot;Description of Mark&quot;
            field explaining where and how each color appears, is searchable
            text and is the most direct way to find color-based marks on the
            register.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <strong>Search strategy for color marks:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Search the color claim and description fields directly, using
              the generic color name (e.g., &quot;magenta,&quot; &quot;safety
              orange,&quot; &quot;robin&apos;s egg blue&quot;) rather than
              relying on a word-mark search, since a pure color mark often has
              no literal wording at all.
            </li>
            <li>
              Narrow by International Class and by the relevant U.S.
              goods/services, since - as explained above - the same color can
              be validly claimed by different owners in unrelated fields. A
              color search with no class filter will produce a large amount
              of noise.
            </li>
            <li>
              Use the Design Search Code Manual for marks that combine color
              with a design element. Non-verbal design features (shapes,
              patterns, positioning) are indexed using six-digit design
              codes; if the color is applied to a particular shape or logo
              element, searching the corresponding design code alongside the
              color term narrows results considerably.
            </li>
            <li>
              Check the mark drawing type. Records are tagged by drawing type
              (e.g., a &quot;color drawing&quot; versus a standard
              black-and-white or standard-character drawing), which can help
              filter out marks that only reference color descriptively rather
              than claiming it as a mark feature.
            </li>
            <li>
              Pull the full prosecution history, not just the registration.
              Office actions on pending applications can reveal color marks
              that were refused, abandoned, or narrowed - useful context on
              how aggressively the USPTO or third parties have contested
              similar color claims in that field.
            </li>
            <li>
              Search both &quot;live&quot; and &quot;dead&quot; records. An
              abandoned or cancelled color mark doesn&apos;t necessarily mean
              the color is free - the underlying common-law use may have
              continued even after the federal registration lapsed, and a
              prior refusal can still signal how the USPTO views that
              color/goods combination.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step 2: Search Beyond the Federal Register
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A clean result in the USPTO database only tells you what&apos;s
            currently claimed federally. A genuine clearance search for a
            color mark should also cover:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>State trademark registrations.</strong> Companies that
              haven&apos;t sought or completed federal registration may still
              hold color marks at the state level.
            </li>
            <li>
              <strong>Common-law and unregistered use.</strong> Search
              industry publications, competitor packaging, trade show
              materials and general web/image search for the color in use on
              similar goods, since secondary meaning and enforceable rights
              can exist without any registration at all.
            </li>
            <li>
              <strong>International registers</strong>, if the product will
              be sold or the mark used outside the U.S. The WIPO Global Brand
              Database aggregates trademark data from many national and
              regional offices in one search interface, and offices such as
              the EUIPO (for the European Union) maintain their own
              searchable registers. Color marks are treated differently
              jurisdiction to jurisdiction - some countries are markedly more
              restrictive about registering single colors than the U.S. is.
            </li>
            <li>
              <strong>Industry-specific and litigated marks.</strong> Some of
              the most important color marks (John Deere green and yellow,
              Owens Corning pink, Tiffany blue, UPS brown, Louboutin
              red-soled shoes) were defined and defended through litigation
              as much as through registration. A search limited to the
              trademark register will miss the case law and consent decrees
              that actually define the boundaries of a famous color claim in
              a given industry.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step 3: Assess the Practical Overlap, Not Just an Exact Color
            Match
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Because likelihood-of-confusion analysis (not an exact color code
            match) governs conflicts, a useful search doesn&apos;t stop at
            finding the identical Pantone or RGB value. Consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Similar shades in the same channel of trade.</strong> A
              close but not identical shade of blue on a directly competing
              product in the same industry can still create a
              likelihood-of-confusion problem; conversely, an identical color
              used on an unrelated product in an unrelated market may not.
            </li>
            <li>
              <strong>Placement and context.</strong> Many color marks are
              registered as applied to a specific part of the product (a
              sole, a cap, a handle) rather than the whole item. A search
              should account for exactly where and how the applicant intends
              to use the color, not just the color itself.
            </li>
            <li>
              <strong>Strength and fame of any prior mark found.</strong> A
              famous color mark can receive broader protection under dilution
              law even outside its specific goods and services, so a
              conflict search involving well-known color marks should also
              consider dilution exposure, not just direct likelihood of
              confusion.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step 4: Document What You Find
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For each potentially conflicting color mark located, record:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Owner, registration/application number and status (registered,
              pending, abandoned, cancelled)
            </li>
            <li>The exact color claim language and mark description</li>
            <li>The goods/services and classes covered</li>
            <li>
              Filing date and any relevant office action or opposition
              history
            </li>
            <li>
              Whether the mark is federal, state, or common-law only, and its
              jurisdiction
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This record becomes the basis for a clearance opinion and is also
            the kind of documentation a trademark attorney will want if you
            move forward with an application or need to argue
            non-infringement later.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Common Pitfalls
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Treating a name search as a substitute for a color search.
              Searching only for word marks in your product category will
              miss pure color marks entirely, since many have no literal
              wording.
            </li>
            <li>
              Ignoring class and goods overlap. Finding &quot;the same
              color&quot; registered elsewhere is not disqualifying if the
              goods, services and channels of trade are unrelated - but it is
              worth flagging if there&apos;s any chance of overlap or future
              famous-mark dilution exposure.
            </li>
            <li>
              Assuming an abandoned registration means the color is free.
              Common-law rights can outlive a lapsed federal registration.
            </li>
            <li>
              Overlooking functionality. Even a color with zero conflicting
              registrations may still be unregistrable, or may be
              unenforceable if later challenged, because it serves a
              functional purpose for that category of goods.
            </li>
            <li>
              Searching only the U.S. register for a product that will sell
              internationally. Color mark standards and existing claims vary
              significantly by country.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            When to Bring in a Professional
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Because color marks sit at the intersection of a highly
            discretionary secondary-meaning analysis, functionality doctrine
            and class-by-class overlap questions, a DIY database search is a
            reasonable first screen but is rarely sufficient on its own for a
            color that will anchor a brand. Professional clearance searches
            (often run through commercial search vendors that aggregate
            federal, state, common-law and international sources into one
            report) combined with review by a trademark attorney are the
            standard way to get a defensible answer before committing
            significant branding investment to a specific color.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Checking whether a color is &quot;already claimed&quot; is less
            like a single database lookup and more like a layered
            investigation: start with the USPTO&apos;s current Trademark
            Search system and its color-claim and description fields, filter
            carefully by class and goods, then widen the search to state
            registers, common-law use and - if relevant - international
            registers, all while keeping in mind that exact-shade matches are
            not the only kind of conflict that matters. A thorough{" "}
            <strong>color trademark search</strong> protects against more
            than a refused application; it protects against building a brand
            around a color someone else can force you to abandon.
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
