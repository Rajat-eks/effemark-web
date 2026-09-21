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
  title: "Motion Trademarks Explained: How to Search for Animated Brand Marks",
  description:
    "Searching for potential conflicts with an animated or motion trademark is fundamentally different from a standard wordmark or logo clearance search.",
  keywords: [
    "Motion Trademark Search",
    "Animated Trademark",
    "USPTO Trademark Search",
    "Design Search Code",
    "Sound Mark Search",
    "Trademark Clearance Search",
  ],
};

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Motion Trademarks.jpg"
          alt="Motion trademarks explained: how to search for animated brand marks"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Motion Trademarks Explained: How to Search for Animated Brand Marks
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 10/03/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            Searching for potential conflicts with an animated or{" "}
            <strong>motion trademark</strong> is fundamentally different from a
            standard wordmark or logo clearance search. You cannot simply type a
            word into a search box. You need to think about how the USPTO
            actually codes movement, and use tools most searchers never touch.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            First, What Makes a Motion Mark Hard to Search
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A motion mark is a moving sequence, an animated logo, a gesture, or
            a lighting effect used to identify a brand&apos;s source. A motion
            mark consists of moving images that may be accompanied by sounds,
            with classic examples including the old Microsoft Windows logo (a
            flag waving in the wind) and the old Nokia welcome screen, which
            showed two hands reaching toward each other to a few notes of
            Francisco Tárrega&apos;s Gran Vals.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The problem is that a motion mark&apos;s official USPTO record does
            not contain the video. It contains a written description and up to
            five still freeze frames. So a keyword search that only looks at
            image data or a wordmark field will usually miss it. Effective{" "}
            <strong>motion trademark search</strong> strategy means combining
            text and description searching, design code searching, and, since
            early 2026, a dedicated motion and sound design code category.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step 1: Use the Current USPTO Search Tool, Not TESS
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            If you have searched trademarks before, you may remember TESS. It
            is gone. The USPTO replaced its decades-old TESS system entirely
            with a new tool as of November 30, 2023, now accessible as the
            USPTO Trademark Search system.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            <strong>Key access points:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Trademark Search</strong> (tmsearch.uspto.gov) &ndash; the
              primary clearance search tool.
            </li>
            <li>
              <strong>TSDR</strong>, Trademark Status &amp; Document Retrieval
              (tsdr.uspto.gov) &ndash; for pulling full prosecution history,
              filings and drawings once you have found a serial or
              registration number.
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The new system has two modes. Basic mode allows drop-down searching
            by wordmark, owner, goods and services, mark description, or serial
            and registration number. Expert mode includes all of that, plus
            field-tag searching, design code and design description search, and
            result tagging and export. For motion marks, expert mode is
            essentially required, since field tags and design codes are not
            available in basic drop-down search.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step 2: Search the Mark Description Field Directly
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Because every motion mark application must include a detailed
            written description of the sequence, that text is searchable. In
            the field-tag system, the relevant tag is <strong>DE:</strong>{" "}
            (description of the mark). For example, searching{" "}
            <em>DE:motion AND DE:logo</em> or <em>DE:&quot;freeze frame&quot;</em>{" "}
            will surface applications whose written descriptions explicitly
            reference movement, animation, or freeze frames.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            You can combine this with other tags: <strong>CM:</strong> for
            combined wordmark, pseudo-mark and translation fields (for any text
            appearing in the animation), <strong>GS:</strong> for goods and
            services, <strong>LD:</strong> for live or dead status, and{" "}
            <strong>MD:</strong> for mark drawing code. Wildcards help broaden a
            search: an asterisk matches any number of characters (so{" "}
            <em>anim*</em> catches &quot;animate,&quot; &quot;animation,&quot; and
            &quot;animated&quot;), and a question mark matches a single character.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step 3: Use Design Codes, and the New Motion and Sound Category
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is the step almost everyone misses. The USPTO assigns every
            design element in a mark, including, now, motion elements, a
            six-digit Design Search Code, based on a system adapted from the
            Vienna Agreement&apos;s international figurative-element
            classification. Each code breaks down into category, division and
            section.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            As of February 10, 2026, the USPTO added an entirely new category to
            the Design Search Code Manual specifically for this purpose.
            Category 30 adds seven new codes so practitioners can identify
            relevant sound and motion marks more precisely in clearance
            searches, previously searchable only by general keyword. The seven
            new sub-categories are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Motion (growing, fading, flickering, etc.)</li>
            <li>Musical sounds</li>
            <li>Human speech or singing</li>
            <li>
              Human non-speech sounds (whistling, clapping, breathing,
              coughing, crowd noise, yells)
            </li>
            <li>Animal sounds</li>
            <li>Natural sounds (weather, wind, water, fire, explosions)</li>
            <li>Machine, object, mechanical and electrical sounds</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Practically, this means you can now run a design code search
            restricted to Category 30&apos;s motion codes to pull up marks the
            USPTO has specifically flagged as containing a motion element, a
            much more precise filter than a blind keyword search of
            descriptions. Use the <strong>DC:</strong> field tag in expert
            mode, or the &quot;Design code&quot; and &quot;Design description&quot;
            drop-downs, to search this category directly.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step 4: Search Strategy for a Full Motion Mark Clearance
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Put together, a reasonably thorough clearance search for a proposed
            animated or motion mark should run several passes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Wordmark and combined-field search</strong> &ndash; any
              words, sounds-as-text, or brand terms that appear within the
              animation (CM: tag).
            </li>
            <li>
              <strong>Description search</strong> &ndash; descriptive terms
              like &quot;motion,&quot; &quot;animate,&quot; &quot;sequence,&quot;
              &quot;freeze frame,&quot; or the specific visual elements described
              in your own mark (DE: tag).
            </li>
            <li>
              <strong>Design code search (Category 30)</strong> &ndash; filter
              specifically to registered or pending motion-element marks in
              your relevant subcategory.
            </li>
            <li>
              <strong>Goods and services narrowing</strong> &ndash; restrict by
              International Class and Coordinated Class to your actual
              commercial context (GS:, IC:, CC: tags).
            </li>
            <li>
              <strong>Live or dead filter</strong> &ndash; decide whether to
              include dead marks for common-law risk assessment, or restrict to
              live filings only.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step 5: Verify Hits with TSDR
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Once tmsearch.uspto.gov surfaces candidate marks, pull each one up
            in TSDR using its serial or registration number. TSDR shows you the
            actual freeze-frame drawings submitted, the full written
            description of the motion, prosecution history including any
            office actions or refusals, and current live, dead, or maintenance
            status.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This step matters especially for motion marks because the
            searchable text (the description) and the actual visual impression
            (the freeze frames) can diverge. You need to eyeball the drawing to
            judge real similarity, not just rely on description-text overlap.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Practical Tips
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Search broadly on movement type, not just brand name. Two
              unrelated companies can have similarly choreographed motion marks,
              such as a similar &quot;wing lift&quot; or &quot;reveal&quot;
              animation, even with completely different wordmarks. This is
              exactly what Category 30 motion codes are meant to catch.
            </li>
            <li>
              Do not skip design codes for logo-plus-motion marks. If the
              animated mark also contains a static design element, such as a
              shape, icon, or symbol, search that element&apos;s ordinary design
              code too, in addition to the new Category 30 motion code.
            </li>
            <li>
              Check specimens, not just drawings, for real-world use context.
              TSDR will show submitted specimens, including video and image
              files, for marks that have reached use-based filings, which can
              reveal visual similarity that text search alone will not.
            </li>
            <li>
              Motion marks without a corresponding wordmark are especially easy
              to miss. If the mark is pure animation with no house brand name in
              it, your entire search may have to rely on description and
              design-code searching alone.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why This Matters for Your Brand
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Because the USPTO records these marks as a written description plus
            up to five freeze frames, not as playable video, a thorough
            clearance search has to work across several layers at once: the
            description text, any embedded wordmarks, and, since February 2026,
            the dedicated Category 30 design codes built specifically for sound
            and motion elements. Two marks can read as unrelated in the
            description field and still convey a nearly identical commercial
            impression once you see the movement itself, and the reverse is
            also true.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This layered approach is not something most in-house teams have
            time to run consistently on their own. EffeMark&apos;s{" "}
            <a
              href="https://www.effemark.com/trademark-search-services"
              className="text-blue-600 underline hover:no-underline"
            >
              trademark search services
            </a>{" "}
            are built to handle exactly this kind of multi-layer clearance work,
            including animated and non-traditional marks, so you can move
            forward on a new brand identity with confidence.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Final Thoughts
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Searching for motion and animated trademarks takes more than a name
            search. The practical takeaway is simple: use tmsearch.uspto.gov&apos;s
            expert mode rather than basic drop-down search, lean on field tags
            like DE: and DC: to get at the data a keyword search alone would
            miss, and always confirm your hits in TSDR by looking at the actual
            freeze frames and specimens rather than just the description text.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            As the USPTO continues refining its search tools and design code
            manual, the details here are worth rechecking periodically against
            the live system. The core strategy of description search, design
            code search, and specimen verification should hold as the right
            framework for clearing an animated mark with confidence.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Start your trademark clearance search today at{" "}
            <a
              href="https://www.effemark.com/"
              className="text-blue-600 underline hover:no-underline"
            >
              EffeMark.com
            </a>{" "}
            and give your brand the protection it truly deserves.
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
