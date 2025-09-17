import Image from "next/image";
import React from "react";
import AI from "@/components/assets/logo/AI.svg";
import Manual from "@/components/assets/logo/manual.svg";
import { AlignRight, ChevronRight, MoveRight } from "lucide-react";
import Link from "next/link";

interface IndexProps {
  products?: {
    name: string;
    included: string;
    price: number;
    path: string;
    addOns: any;
  }[];
}

const Solutions: React.FC<IndexProps> = ({ products }) => {
  return (
    <div className="flex items-center flex-col gap-4 md:py-5">
      <h5 className=" text-[30px] md:text-[30px] font-semibold">
        Our Solutions
      </h5>
      <p className="text-[15px] text-center">
        Our technology-powered trademark solutions and dedicated expertise
        ensure your brand remains protected in a competitive marketplace.
      </p>
      <section className="bg-[#202F5A] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 w-full p-5 md:p-16">
        {products?.map(
          ({ addOns, included,name,path,price }) => (
            <div className="bg-white rounded-xl flex flex-col  p-6 gap-3 shadow-2xl group">
              <div className="flex items-center justify-center">
                <Image src={name.includes("AI") ? AI : Manual} alt="AI" />
              </div>
              <h5>{name}</h5>
              <p className="text-[14px]">{
                name.includes("AI") ? 'Similar + Phonetic Alternatives [Searched + Curated by Advanced AI]' : 'Similar + Phonetic Alternatives + Language Variants [AI-Enhanced + Expert Verified]'
                }</p>
              <span>
                <b>Coverage: </b>
                {included}
              </span>
              <span>
                <b>Turnaround: </b>
               1-2 Business Days
              </span>
              <span>
                <b>Add-Ons: </b> {addOns.length}+ Add-Ons Available
              </span>
             <div>
                    <h5 className="text-[25px] group-hover:text-[30px] group-hover:text-red-600">Price: ${price}</h5>
                  </div>
              <span className="text-red-500 text-[13px]">*All results designated by the US at WIPO are always included.</span>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <Link
                      href={`/checkout/${path}`}
                      className="border-[1px] py-2 px-4 rounded border-gray-400 flex items-center gap-1 hover:ease-in duration-300 group-hover:bg-[#202F5A] group-hover:text-white"
                    >
                      Start Your Order <ChevronRight />
                    </Link>
                  </div>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default Solutions;
