import Image from "next/image";
import React from "react";
import Banner from "@/components/assets/img/article-banner.svg";
import Card from "@/components/Article/Card";

interface PageProps {
  // define props here
}
const articles = [
  {
   metaTitle:'Why DIY Trademark Searches Always Fail?',
   metaDescription:'Discover why DIY trademark searches often fail and lead to costly mistakes. Learn about the hidden pitfalls, legal complexities, and professional alternatives that can protect your brand from infringement issues.',
   metakewword:['trademark search', 'trademark protection', 'brand protection'],
   status: true,
   createdAt: new Date('2025-01-01'),
   slug: 'diy-trademark-searches-always-fail',
   filepath: '/images/article.jpg',
   heading: 'Why DIY Trademark Searches Always Fail?',
   content: 'When launching a new business or product, many entrepreneurs attempt DIY trademark searches to save money. However, these self-conducted searches frequently fail to uncover critical conflicts, leading to expensive legal battles, rebranding costs, and business disruptions. Understanding why DIY trademark searches fall short can save you from devastating financial and legal consequences down the road.',
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
          <Card key={article.slug}  article={article}/>
        ))}
      </section>
    </main>
  );
};

export default page;
