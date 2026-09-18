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
  title:
    "Sound Trademark Search: Finding Conflicting Audio Marks Before You File",
  description:
    "Sound marks can't be typed into a search box. Learn how sound trademarks work, why they're harder to search than word or design marks, and how to run a thorough clearance search before you file.",
  keywords: [
    "Sound Trademark Search",
    "Sound Mark Clearance",
    "USPTO Category 30 Design Codes",
    "Audio Trademark",
    "Trademark Search USPTO",
  ],
};

const page: React.FC<PageProps> = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/S2_Sound Trademark Search.jpg"
          alt="Sound trademark search: finding conflicting audio marks before you file"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Sound Trademark Search: Finding Conflicting Audio Marks Before
            You File
          </h1>

          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 18/09/2026
          </span>
        </div>
        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-justify text-[14px] sm:text-[15px] md:text-[16px]">
            A <strong>sound mark</strong> protects an audio cue as a source
            identifier - the NBC chime, a jingle, a distinctive product
            noise. Because there&apos;s no image to compare, clearing a
            sound mark before filing works differently than clearing a word
            or logo mark. You can&apos;t just type your sound into a search
            box; you have to think about how audio marks get described,
            coded and indexed in the USPTO&apos;s database and search
            accordingly. This guide walks through the process.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Start with the Basics: What Counts as a Sound Mark
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A sound mark protects an audio element that identifies and
            distinguishes the source of goods or services - not the
            underlying musical composition or sound recording itself
            (that&apos;s a copyright question, handled separately). Sound
            marks include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Musical sequences or jingles (a few notes, a short tune)</li>
            <li>Human speech, singing, or vocalizations</li>
            <li>Non-speech human sounds (whistling, clapping)</li>
            <li>Animal sounds</li>
            <li>Natural sounds (thunder, wind, water)</li>
            <li>
              Mechanical, electrical, or object sounds (an engine, a device
              chime)
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Unlike a design mark, a sound mark has no visual drawing in the
            traditional sense - the &quot;drawing&quot; requirement is
            satisfied instead by a detailed written description of the sound
            and, in most cases, an audio file submitted with the
            application.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why Sound Marks Are Harder to Search Than Word or Design Marks
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Text marks are searchable by spelling and phonetics. Design
            marks are searchable by design codes tied to visual elements
            (stars, animals, geometric shapes, etc.). Sound has historically
            fallen into a gap: it can&apos;t be typed and until recently it
            had no dedicated coding system, so the only way to find existing
            sound marks was to search the written descriptions by keyword
            and hope the description used similar language to what
            you&apos;d guess.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            That changed in early 2026. The USPTO added a new category -{" "}
            <strong>Category 30</strong> - to its Trademark Design Search
            Code Manual specifically for sound and motion marks, giving
            searchers structured codes to use instead of relying purely on
            keyword guessing. The seven sub-categories are organized by the
            nature or source of the sound:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Motion (visual, included in the same category but not audio -
              e.g., growing, fading, flickering)
            </li>
            <li>Musical sounds</li>
            <li>Human speech or singing</li>
            <li>
              Human non-speech sounds (whistling, clapping, breathing,
              coughing, chewing, crowd noise, yells and shouts)
            </li>
            <li>Animal sounds</li>
            <li>Natural sounds (weather, wind, water, fire, explosions)</li>
            <li>
              Machine, object, mechanical and electrical sounds
            </li>
          </ol>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This means a clearance search for a sound mark today should
            combine keyword searching and design-code searching under
            Category 30, rather than relying on keywords alone.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Where to Search
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The USPTO retired its old search tool, TESS (the Trademark
            Electronic Search System), in November 2023. All searching is
            now done through <strong>Trademark Search</strong>, the current
            cloud-based system at tmsearch.uspto.gov. If you find an older
            guide walking through TESS&apos;s &quot;Structured&quot; or
            &quot;Free Form&quot; search screens, it&apos;s describing a
            system that no longer exists - the workflow below applies to the
            current tool.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark Search offers a simple keyword search box for quick
            lookups and an expert/advanced mode for building multi-field
            queries (combining a design code with a goods/services class,
            for example) - this advanced mode is where sound-mark searching
            becomes practical.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Step-by-Step: Searching for Conflicting Sound Marks
          </h2>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            1. Search the &quot;Mark Drawing Type&quot; field for sound
            marks
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Every application is tagged with a mark drawing type. Sound
            marks (along with a few other non-visual mark types, like scent
            marks) fall under the drawing code reserved for marks that
            can&apos;t be represented as a standard image - records for
            these appear in the database as &quot;No drawing&quot; or
            similarly labeled placeholders, sometimes with a written
            transcription of notes or lyrics in place of an image. Filtering
            your search to this drawing type narrows results to
            non-traditional marks, sound marks included.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            2. Layer in a Category 30 design search code
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Once new Category 30 was published, sound marks that examiners
            have coded should be retrievable by the specific sub-category
            matching your sound. If your mark is a short musical phrase,
            search using the musical-sounds code; if it&apos;s a mechanical
            or product sound, use the machine/object code; and so on.
            Combine this with the &quot;No drawing&quot;/sound-mark filter
            and, where relevant, the international class covering your
            goods or services, to keep the result set manageable.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Keep in mind that coding under the new category is still
            catching up on older filings - sound marks registered before the
            system existed may not yet carry a Category 30 code, so
            design-code search should supplement, not replace, keyword
            search.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            3. Search the written mark description by keyword
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Every sound mark application includes a detailed description of
            the sound - this is the closest thing to a &quot;drawing&quot; a
            sound mark has and it&apos;s fully text-searchable. Search the
            description field using varied language for the same sound: a
            chime might be described as &quot;tones,&quot;
            &quot;notes,&quot; &quot;musical phrase,&quot; or
            &quot;sequence&quot;; an animal sound might be described by
            species and by the sound itself (&quot;dog,&quot;
            &quot;bark,&quot; &quot;woof&quot;). Run several keyword
            variations rather than a single search, since examiners and
            applicants don&apos;t use standardized vocabulary when
            describing audio.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            4. Search by musical notation and structure, where available
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Some sound mark records include the musical notation, key,
            tempo, or instrumentation described in the application. If your
            mark has a specific melodic structure (a rising three-note
            phrase, for instance), search for that structural description as
            well as the plain-English description - conflicts are often
            found through the technical description rather than the
            layperson&apos;s summary.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            5. Check goods/services classes carefully
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Likelihood of confusion for a sound mark, like any mark, depends
            heavily on whether the goods or services overlap or are related.
            A chime used for a financial app and a similar chime used for a
            home appliance may coexist without conflict; two similar chimes
            in overlapping software categories are a much bigger risk.
            Narrow and broaden your class searches to understand the
            competitive landscape, not just to find an identical sound.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            6. Listen to the actual audio files, not just the description
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Where the USPTO&apos;s system provides access to the submitted
            audio or video files associated with a registration or
            application, listen to them directly. Written descriptions can
            undersell (or oversell) how similar two sounds actually are - a
            description like &quot;a series of ascending tones&quot; could
            describe dozens of meaningfully different-sounding marks. The
            written description is a legal proxy for the sound; it is not
            the sound itself, so don&apos;t rely on it exclusively when
            judging similarity.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            7. Go beyond the federal database
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The USPTO&apos;s search system only covers federal trademark
            applications and registrations. A full clearance check for a
            sound mark should also consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Common-law use</strong> - sounds used in commerce (in
              ads, on hold-music systems, in apps) without a federal
              registration can still create conflict rights.
            </li>
            <li>
              <strong>State trademark registers</strong> - federal search
              does not include the 50 state registration systems.
            </li>
            <li>
              <strong>Broadcast and advertising databases</strong> - sound
              marks are often used heavily in commercials before (or
              instead of) being registered; industry trade press and ad
              libraries can surface unregistered but well-known sounds.
            </li>
            <li>
              <strong>International registers</strong> - if your product or
              service will be marketed abroad, the U.S. database won&apos;t
              reveal a conflicting sound mark registered only in another
              country.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Evaluating What You Find: The &quot;Similar Commercial
            Impression&quot; Standard
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Sound mark conflicts are assessed under the same core legal
            standard as any other mark: likelihood of confusion, based on
            whether the overall commercial impression is similar enough that
            consumers might mistake one source for another. For sound, this
            generally weighs:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              <strong>Similar sequence or melodic structure</strong> - even
              if the instrumentation or exact notes differ
            </li>
            <li>
              <strong>Similar tempo, rhythm, or number of &quot;beats&quot;</strong>{" "}
              - a chime with the same rhythmic pattern in a different key can
              still feel confusingly similar
            </li>
            <li>
              <strong>Similar context of use</strong> - where and how the
              sound is deployed (app startup, hold music, product
              activation) matters
            </li>
            <li>
              <strong>Related goods or services</strong> - the closer your
              offerings are to the conflicting mark&apos;s, the lower the bar
              for confusion
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A sound doesn&apos;t need to be a note-for-note match to pose a
            conflict risk - the legal test asks whether the overall
            impression, in the marketplace context, could confuse consumers
            about the source of the goods or services.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Common Mistakes to Avoid
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Searching only by keyword and stopping there. Now that
              Category 30 design codes exist, skipping them means missing
              marks that don&apos;t happen to share your exact wording.
            </li>
            <li>
              Assuming &quot;no drawing&quot; filings are noise. These
              records disproportionately include sound, scent and other
              non-traditional marks - they&apos;re exactly where your
              conflicts are likely to be hiding.
            </li>
            <li>
              Relying purely on the written description without listening to
              available audio. Descriptions can flatten real differences (or
              real similarities) between sounds.
            </li>
            <li>
              Ignoring unregistered, well-known sounds. A widely used jingle
              that was never federally registered can still block your use
              and registration through common-law rights.
            </li>
            <li>
              Searching only your exact goods/services class. Related,
              non-identical categories can still create confusion risk,
              especially for very short or simple sounds.
            </li>
            <li>
              Treating a clear federal database search as a full clearance.
              It only covers one layer of possible conflicts.
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Quick Pre-Filing Checklist
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>
              Searched Trademark Search&apos;s keyword field with multiple
              phrasings of your sound&apos;s written description
            </li>
            <li>Filtered to non-traditional/&quot;no drawing&quot; mark types</li>
            <li>
              Applied relevant Category 30 design search codes matching your
              sound&apos;s nature (musical, speech, animal, mechanical, etc.)
            </li>
            <li>
              Reviewed results across related, not just identical,
              goods/services classes
            </li>
            <li>
              Listened to available audio files for marks with similar
              descriptions, rather than relying on the text alone
            </li>
            <li>
              Checked for well-known but potentially unregistered
              common-law sound marks in your industry
            </li>
            <li>
              Considered state and international exposure if you&apos;ll use
              the sound outside U.S. federal commerce
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            A Note on Accuracy
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Sound mark search tools and coding systems are still evolving -
            the Category 30 design codes are a recent addition and older
            sound mark filings may not yet be retroactively coded. Because
            likelihood-of-confusion analysis for non-traditional marks is
            fact-intensive and the search tools are new enough that best
            practices are still developing, it&apos;s worth having a
            trademark attorney review your search strategy and results
            before filing, particularly for anything beyond a
            straightforward, distinctive sound.
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
