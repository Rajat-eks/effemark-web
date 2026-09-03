import Image from "next/image";
import React from "react";
import Question from "@/components/assets/img/question.svg";
import { Mail, Phone } from "lucide-react";
import { articles } from "../page";
import Link from "next/link";

export const metadata = {
  title:
    "Trademark Distinctiveness Spectrum: From Generic to Fanciful Explained",
  description:
    "Trademark law evaluates marks along a spectrum of distinctiveness - generic, descriptive, suggestive, arbitrary and fanciful. Learn how each category affects trademark strength and protection.",
  keywords: [
    "trademark distinctiveness",
    "generic trademark",
    "descriptive trademark",
    "suggestive trademark",
    "arbitrary trademark",
    "fanciful trademark",
    "trademark spectrum",
    "trademark strength",
  ],
};

const page: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row p-4 sm:p-6 md:p-14 gap-5">
      <section className="w-full md:w-[65%] space-y-5">
        <Image
          src="/images/trademark-distinctiveness-spectrum.jpg"
          alt="Diagram of the trademark distinctiveness spectrum from generic to fanciful trademarks"
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <div className="flex flex-col">
          <h1 className="text-[20px] sm:text-[25px] md:text-[30px] font-bold">
            Trademark Distinctiveness Spectrum: From Generic to Fanciful
            Explained
          </h1>
          <span className="text-[12px] sm:text-[14px] text-blue-600">
            Published on 02/09/2026
          </span>
        </div>

        <div className="space-y-4 sm:space-y-5 text-justify">
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Choosing a strong trademark is one of the most important steps in
            building a recognizable brand. A trademark can distinguish a
            company&apos;s products or services from competitors, create
            consumer recognition and become a valuable intellectual property
            asset.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            However, not all trademarks receive the same level of legal
            protection.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark law generally evaluates marks along a spectrum of
            distinctiveness, ranging from terms that can receive little or no
            trademark protection to highly distinctive marks that may receive
            strong protection.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The four traditional categories are:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Generic trademarks</li>
            <li>Descriptive trademarks</li>
            <li>Suggestive trademarks</li>
            <li>Arbitrary and fanciful trademarks</li>
          </ol>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Understanding where a proposed brand name falls on this spectrum
            can help businesses choose names that are easier to protect and
            enforce.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            What Is Trademark Distinctiveness?
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark distinctiveness refers to the ability of a word,
            phrase, symbol, design, or other identifier to distinguish one
            company&apos;s goods or services from those of others.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example, a term that simply identifies the product itself
            provides little indication of a particular source. In contrast,
            an invented word with no ordinary meaning can be highly
            distinctive because consumers are more likely to associate it
            with a particular brand.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The stronger the distinctiveness of a mark, generally, the easier
            it is to establish trademark rights.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The spectrum can be visualized as:
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-center">
            Generic → Descriptive → Suggestive → Arbitrary → Fanciful
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            As you move from generic toward fanciful, trademark
            distinctiveness generally increases.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            1. Generic Trademarks
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A generic term is the common name for a class or category of
            goods or services.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Examples include terms such as:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>&quot;Bicycle&quot; for bicycles</li>
            <li>&quot;Coffee&quot; for coffee</li>
            <li>&quot;Restaurant&quot; for restaurant services</li>
            <li>&quot;Software&quot; for software products</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A generic term does not identify a particular commercial source.
            It identifies the product or service itself.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For this reason, generic terms generally cannot function as
            exclusive trademarks for the goods or services they describe.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Imagine if one company could prevent all competitors from using
            the word &quot;coffee&quot; to describe coffee. Competitors would
            have no practical way to tell consumers what they were selling.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            Why Generic Terms Are Weak
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Trademark law generally seeks to prevent businesses from
            monopolizing common product or service names.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A company may use a generic term as part of a larger trademark,
            but that does not necessarily give the company exclusive rights
            to the generic portion.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For businesses developing a new brand, choosing a generic name is
            therefore usually a poor trademark strategy.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            2. Descriptive Trademarks
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Descriptive marks directly describe a characteristic, quality,
            ingredient, function, purpose, or feature of the goods or
            services.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Examples might include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>&quot;Cold and Creamy&quot; for ice cream</li>
            <li>&quot;Quick Print&quot; for printing services</li>
            <li>&quot;Sweet Apples&quot; for apple products</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Unlike generic terms, descriptive marks can potentially acquire
            trademark protection under certain circumstances.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A key concept is secondary meaning, also known as acquired
            distinctiveness. This occurs when consumers come to associate a
            descriptive term with a particular commercial source because of
            extensive use, advertising and consumer recognition.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example, a descriptive term may initially tell consumers
            something about a product, but after years of substantial use,
            consumers may begin to recognize it as identifying one company.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            The Challenge With Descriptive Marks
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Descriptive trademarks can be attractive from a marketing
            perspective because customers may immediately understand what
            the business offers.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            However, that same characteristic can make them difficult to
            protect.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A descriptive mark may require substantial evidence of acquired
            distinctiveness, depending on the jurisdiction and circumstances.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Businesses should therefore carefully consider whether the
            immediate marketing benefit of a descriptive name outweighs the
            potential difficulty of obtaining strong trademark protection.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            3. Suggestive Trademarks
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Suggestive marks occupy an important middle ground.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A suggestive trademark hints at a characteristic or benefit of
            the goods or services without directly describing them.
            Consumers generally need to make some mental connection or use
            their imagination to understand the relationship.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Examples often used to illustrate suggestive branding include
            names that evoke an idea associated with the product without
            explicitly describing it.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The distinction between a descriptive and suggestive mark can
            sometimes be difficult and may depend on the goods, services and
            context in which the mark is used.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            Why Suggestive Marks Can Be Attractive
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Suggestive trademarks can offer a useful balance between
            marketing relevance and legal distinctiveness.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            They can communicate an idea about a product while still leaving
            room for brand identity.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For example, a technology company might choose a name that
            evokes speed, connection, or intelligence without directly
            describing the underlying technology.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Because the mark does not simply state what the product is, it
            may have greater potential for trademark protection than a
            directly descriptive term.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            4. Arbitrary Trademarks
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            An arbitrary trademark uses an existing word that has a meaning
            unrelated to the goods or services with which it is used.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The classic example is &quot;Apple&quot; for computers and
            consumer electronics. The word &quot;apple&quot; has a common
            meaning, but it does not describe a computer.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Other examples can be understood conceptually as ordinary
            dictionary words used in unexpected commercial contexts.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Arbitrary marks can be highly distinctive because the connection
            between the word and the product is not inherent.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            Why Arbitrary Marks Can Be Powerful
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            An arbitrary mark can provide a business with a recognizable
            brand while avoiding the limitations associated with descriptive
            terminology.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            However, an arbitrary mark still needs to be evaluated in its
            specific commercial context. A word that is arbitrary for one
            category of goods could be descriptive or generic for another.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The strength of a trademark is therefore not determined by the
            word alone. The relationship between the mark and the associated
            goods or services matters.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            5. Fanciful Trademarks
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Fanciful trademarks are generally considered among the strongest
            types of trademarks.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A fanciful mark is a newly created word or expression that has no
            established meaning before it is adopted as a brand.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Examples commonly associated with coined or invented branding
            include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Kodak</li>
            <li>Xerox</li>
            <li>Exxon</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            These terms were created or developed for branding rather than
            being ordinary words describing the underlying products.
          </p>

          <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
            Why Fanciful Marks Are Strong
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Because a fanciful mark has no inherent meaning related to the
            goods or services, consumers encountering it in commerce can more
            readily associate the term with a particular source.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This can make fanciful marks highly distinctive.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The trade-off is that invented names may require greater
            marketing investment. Consumers may not immediately understand
            what the company sells.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For businesses focused on building a long-term brand, however,
            that investment can produce significant benefits.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            The Distinctiveness Spectrum at a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[13px] sm:text-[14px] md:text-[15px]">
              <thead>
                <tr className="bg-[#202F5A] text-white">
                  <th className="p-2 sm:p-3 border border-gray-300">
                    Category
                  </th>
                  <th className="p-2 sm:p-3 border border-gray-300">
                    Basic Characteristic
                  </th>
                  <th className="p-2 sm:p-3 border border-gray-300">
                    Typical Distinctiveness
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 sm:p-3 border border-gray-300 font-semibold">
                    Generic
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-300">
                    Names the product or service itself
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-300">
                    None or very weak
                  </td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 border border-gray-300 font-semibold">
                    Descriptive
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-300">
                    Directly describes a feature or characteristic
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-300">
                    Weak; may acquire distinctiveness
                  </td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 border border-gray-300 font-semibold">
                    Suggestive
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-300">
                    Hints at the product or service
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-300">
                    Moderate to strong
                  </td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 border border-gray-300 font-semibold">
                    Arbitrary
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-300">
                    Existing word unrelated to the goods/services
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-300">
                    Strong
                  </td>
                </tr>
                <tr>
                  <td className="p-2 sm:p-3 border border-gray-300 font-semibold">
                    Fanciful
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-300">
                    Newly invented term
                  </td>
                  <td className="p-2 sm:p-3 border border-gray-300">
                    Very strong
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The precise legal treatment can vary by jurisdiction and by the
            facts surrounding a particular mark.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Why the Spectrum Matters When Choosing a Brand
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Businesses sometimes select names based entirely on marketing
            considerations.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A name may sound attractive, communicate the product clearly, or
            perform well in advertising. But a brand also needs to be
            evaluated from an intellectual property perspective.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A name that is easy to understand may be difficult to protect. A
            more unusual name may require additional marketing but provide
            stronger long-term trademark potential.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Before committing substantial resources to branding, businesses
            should consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Whether the proposed name is distinctive</li>
            <li>Whether similar trademarks already exist</li>
            <li>
              Whether the mark is descriptive or generic for the relevant
              goods or services
            </li>
            <li>
              Whether the name is likely to create confusion with an
              existing mark
            </li>
            <li>
              Whether the corresponding domain and social-media identities
              are available
            </li>
            <li>Whether the mark can be used consistently in the relevant markets</li>
            <li>
              Whether registration is available in the jurisdictions where
              the business plans to operate
            </li>
          </ul>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Trademark Searches and the Distinctiveness Spectrum
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Distinctiveness is only one part of trademark clearance.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A highly distinctive name can still create legal problems if a
            similar trademark is already being used or registered for
            related goods or services.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For this reason, businesses should conduct trademark searches
            before investing heavily in a new brand.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A professional clearance process may examine trademark
            databases, company names, common-law use, domain names, industry
            competitors and other relevant sources.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The goal is not simply to determine whether an identical
            trademark exists. It is to identify potentially conflicting
            marks and assess the overall risk of adopting the proposed
            brand.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Stronger Marks Can Offer Strategic Advantages
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            A distinctive trademark can become an important business asset.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Strong trademarks may help companies:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[14px] sm:text-[15px] md:text-[16px]">
            <li>Build consumer recognition</li>
            <li>Differentiate products from competitors</li>
            <li>Expand into new markets</li>
            <li>Support licensing opportunities</li>
            <li>Strengthen brand valuation</li>
            <li>Improve the ability to enforce trademark rights</li>
            <li>Develop a consistent long-term brand strategy</li>
          </ul>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            This is particularly important for startups and growing
            companies. Rebranding after years of investment can be expensive
            and disruptive.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Selecting a protectable name at the beginning can help reduce
            that risk.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            A Practical Approach to Choosing a Trademark
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Businesses developing a new brand can use the distinctiveness
            spectrum as an initial screening tool.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            If a proposed name is generic, it is unlikely to provide
            meaningful exclusive trademark rights for the relevant goods or
            services.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            If it is descriptive, the business should consider whether a
            more distinctive alternative would provide greater protection.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Suggestive marks can offer a balance between meaning and
            distinctiveness.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Arbitrary and fanciful marks generally provide stronger inherent
            distinctiveness, although they may require more effort to
            establish consumer recognition.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The ideal choice ultimately depends on the company&apos;s
            industry, audience, growth plans, competitive environment and
            intellectual property strategy.
          </p>

          <h2 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
            Conclusion
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            The trademark distinctiveness spectrum provides a useful
            framework for understanding the relative strength of different
            types of brand names.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Generic marks identify the product itself and generally cannot
            function as exclusive trademarks. Descriptive marks directly
            describe characteristics and may require acquired
            distinctiveness. Suggestive marks require consumers to make an
            association between the brand and the product. Arbitrary marks
            use familiar words in unrelated contexts, while fanciful marks
            use newly created terms.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            For businesses, the key lesson is simple: a brand name should be
            evaluated not only for how well it sounds, but also for how
            effectively it can function as intellectual property.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px]">
            Conducting trademark clearance and assessing distinctiveness
            before launching a brand can help businesses avoid costly
            conflicts and build a stronger foundation for long-term brand
            protection.
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
