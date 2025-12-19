import Image from "next/image";
import React from "react";
import Banner from "@/components/assets/img/article-banner.svg";
import Card from "@/components/Article/Card";

interface PageProps {
  // define props here
}
const articles = [
  {
    metaTitle: "Why DIY Trademark Searches Always Fail?",
    metaDescription:
      "Discover why DIY trademark searches often fail and lead to costly mistakes. Learn about the hidden pitfalls, legal complexities, and professional alternatives that can protect your brand from infringement issues.",
    metakewword: [
      "trademark search",
      "trademark protection",
      "brand protection",
    ],
    status: true,
    createdAt: new Date("2025-01-01"),
    slug: "diy-trademark-searches-always-fail",
    filepath: "/images/article.jpg",
    heading: "Why DIY Trademark Searches Always Fail?",
    content:
      "When launching a new business or product, many entrepreneurs attempt DIY trademark searches to save money. However, these self-conducted searches frequently fail to uncover critical conflicts, leading to expensive legal battles, rebranding costs, and business disruptions.  ",
  },
  {
    metaTitle: "International Trademark Search Strategy Guide",
    metaDescription:
      "An international trademark search is a critical process that helps businesses identify potential conflicts before expanding their brand into global markets.",
    metakewword: ["International Trademark Search"],
    status: true,
    createdAt: new Date("2025-01-04"),
    slug: "international-trademark-search-strategy-guide",
    filepath: "/images/International Trademark Search.jpg",
    heading: "International Trademark Search Strategy Guide",
    content:
      "An international trademark search is a critical process that helps businesses identify potential conflicts before expanding their brand into global markets. This comprehensive guide will walk you through the essential strategies for conducting an effective international trademark search, ensuring your brand remains protected across borders while avoiding expensive legal disputes. ",
  },
  {
    metaTitle: "Trademark Search vs Monitoring: Key Differences",
    metaDescription:
      "When protecting your brand identity, understanding the difference between trademark search and trademark monitoring can save you from costly legal battles and brand confusion.",
    metakewword: ["Trademark Search vs Monitoring"],
    status: true,
    createdAt: new Date("2025-01-04"),
    slug: "trademark-search-vs-monitoring-key-differences",
    filepath: "/images/Trademark_search.jpg",
    heading: "Trademark Search vs Monitoring: Key Differences",
    content:
      "When protecting your brand identity, understanding the difference between trademark search and trademark monitoring can save you from costly legal battles and brand confusion. While both are crucial components of trademark management.",
  },
  {
    metaTitle: "Madrid Protocol Global Trademark Search Guide",
    metaDescription:
      "Understanding how to perform a Madrid Protocol Global Trademark Search can save your business significant time, money, and legal complications when expanding internationally.",
    metakewword: ["Madrid Protocol Global Trademark Search"],
    status: true,
    createdAt: new Date("2025-01-04"),
    slug: "madrid-protocol-global-trademark-search-guide",
    filepath: "/images/Madrid_protocol_trademark.jpg",
    heading: "Madrid Protocol Global Trademark Search Guide",
    content:
      "The Madrid Protocol Global Trademark Search is an essential process for businesses seeking international trademark protection. This system allows trademark owners to search, register, and manage their marks across multiple countries through a single application.",
  },
  {
    metaTitle: "International Brand Protection Through Global Monitoring",
    metaDescription:
      "In today's interconnected marketplace, International Brand Protection has become a critical priority for businesses expanding beyond their home countries.",
    metakewword: ["International Brand Protection"],
    status: true,
    createdAt: new Date("2025-01-04"),
    slug: "international-brand-protection-through-global-monitoring",
    filepath: "/images/International Brand Protection.jpg",
    heading: "International Brand Protection Through Global Monitoring",
    content:
      "In today's interconnected marketplace, International Brand Protection has become a critical priority for businesses expanding beyond their home countries. Companies investing millions in building their brand reputation face unprecedented challenges from counterfeiters",
  },
  {
    metaTitle: "Trade Name Vs Trademarks: Key Difference",
    metaDescription:
      "When starting a business, one of the most confusing aspects entrepreneurs face is understanding Trade Name Vs Trademarks.",
    metakewword: ["Trade Name Vs Trademarks"],
    status: true,
    createdAt: new Date("2025-01-04"),
    slug: "trade-name-vs-trademarks-key-difference",
    filepath: "/images/Trade Name Vs Trademarks.jpg",
    heading: "Trade Name Vs Trademarks: Key Difference",
    content:
      "When starting a business, one of the most confusing aspects entrepreneurs face is understanding Trade Name Vs Trademarks. While these terms are often used interchangeably, they serve distinct purposes in protecting your business.",
  },
  {
    metaTitle: "What is a Certification Trademark? Complete Guide",
    metaDescription:
      "A certification trademark is a unique type of intellectual property that guarantees a product or service meets certain standards, characteristics, or quality requirements.",
    metakewword: ["Trade Name Vs Trademarks"],
    status: true,
    createdAt: new Date("2025-01-04"),
    slug: "certification-trademark-complete-guide",
    filepath: "/images/Certification Trademark.jpg",
    heading: "What is a Certification Trademark? Complete Guide",
    content:
      "A certification trademark is a unique type of intellectual property that guarantees a product or service meets certain standards, characteristics, or quality requirements. Unlike regular trademarks that identify the source of goods.",
  },
  {
    metaTitle: "How to Conduct a Trademark Search?",
    metaDescription:
      "Choosing a name for your business or product is an exciting milestone, but before you print those business cards or launch your website, you must conduct a trademark search.",
    metakewword: ["Conduct a Trademark Search"],
    status: true,
    createdAt: new Date("2025-01-04"),
    slug: "conduct-a-trademark-search",
    filepath: "/images/Conduct a Trademark Search.jpg",
    heading: "How to Conduct a Trademark Search?",
    content:
      "Choosing a name for your business or product is an exciting milestone, but before you print those business cards or launch your website, you must conduct a trademark search. This essential step ensures that your proposed brand name, logo, or slogan isn't already legally owned by someone else.",
  },
];

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <section className="relative ">
        <Image src={Banner} alt="FAQ Banner" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center bg-black/60 h-full w-full flex items-center justify-center">
          <h4 className="md:text-[53px] sm:text-3xl text-xl text-white font-bold ">
            Check out the latest articles
          </h4>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-16">
        {articles.map((article) => (
          <Card key={article.slug} article={article} />
        ))}
      </section>
    </main>
  );
};

export default page;
