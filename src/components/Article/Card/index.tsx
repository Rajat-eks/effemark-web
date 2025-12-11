import Image from "next/image";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface IndexProps {
  // define props here
  article: any;
}

const Card: React.FC<IndexProps> = ({ article }) => {
  const {
    heading,
    content,
    slug,
    filepath,
    metaTitle,
    metaDescription,
    metakewword,
    articleDate,
    status,
    createdAt,
    updatedAt,
  } = article;
  return (
    <div className="bg-[#F8F4F4] flex flex-col items-center justify-center w-full  rounded-xl">
      <section className="w-full relative group overflow-hidden">
        <Image
          src={filepath}
          alt="blog"
          width={600}
          height={600}
          className="w-full transform transition-all duration-400 ease-out group-hover:scale-105 "
        />
        <div className="absolute top-4 left-4">
          <Link
            href={`/articles/${slug}`}
            className="text-[12px]  text-white  flex items-center gap-0 h-[30px] justify-center"
          >
            <span className="bg-[#C31117] h-full px-2 flex items-center">
              Read More
            </span>
            <span className="bg-white text-[#C31117] h-full px-1 flex items-center">
              <MoveRight />
            </span>
          </Link>
        </div>
      </section>
      <section className="px-5 py-6 space-y-2">
        <div className="text-[15px]  flex items-center justify-between mb-3">
          <span className="bg-[#FBC6C7] text-[13px] py-[4px] px-[14px] rounded-full text-[#E90303]">
            Article
          </span>
          <span className="text-[#255AF0] text-[12px]">{articleDate}</span>
        </div>
        <h4 className="text-[20px] font-semibold">
          <a href={`/articles/${slug}`}>{heading}</a>
        </h4>
        <p className="text-[13px] text-justify text-gray-700">{content}</p>
      </section>
    </div>
  );
};

export default Card;
