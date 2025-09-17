import Image from "next/image";
import React from "react";
import Banner from "@/components/assets/img/article-banner.svg";
import Card from "@/components/Article/Card";

interface PageProps {
  // define props here
}

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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
      </section>
    </main>
  );
};

export default page;
