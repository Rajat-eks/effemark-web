import Image from "next/image";
import React from "react";
import AI from "@/components/assets/logo/AI.svg";
import Manual from "@/components/assets/logo/manual.svg";
import { AlignRight, ChevronRight, MoveRight } from "lucide-react";
import Link from "next/link";

interface IndexProps {
  searchProducts?: any;
  monitorProducts?: any;
}

const SolutionShowcase: React.FC<IndexProps> = ({
  searchProducts,
  monitorProducts,
}) => {
  return (
    <div className="flex items-center flex-col gap-4 py-5">
      <h5 className="text-[30px] font-semibold">Our Solutions</h5>
      <p className="text-[15px] text-center p-2">
        Our technology-powered trademark solutions and dedicated expertise
        ensure your brand remains protected in a competitive marketplace.
      </p>
      <div className="bg-[#202F5A] w-full">
        <div className="bg-[#202F5A] space-y-4 py-6">
          <h3 className="text-[18px] font-semibold text-white text-center">
            Trademark Search Services
          </h3>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full px-4 md:px-16 py-5">
            {searchProducts
              ?.filter((_: any, id: any) => id < 2)
              ?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="bg-white rounded-xl flex flex-col  p-6 gap-3 shadow-2xl group"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.name.includes("AI") ? AI : Manual}
                      alt="AI"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h5 className="font-bold text-[19px] text-center">
                    {item.name}
                  </h5>
                  <p className="text-[16px]">
                    {item.name.includes("AI")
                      ? "Similar + Phonetic Alternatives [Searched + Curated by Advanced AI]"
                      : "Similar + Phonetic Alternatives + Language Variants [AI-Enhanced + Expert Verified]"}
                  </p>
                  <span className="text-[19px]">
                    <b>Coverage: </b>
                    {item.included}
                  </span>
                  <span className="text-[19px]">
                    <b>Turnaround: </b>
                    {item.name.includes("AI")
                      ? " 1-2 Business Days"
                      : "3-4 Business Days"}
                  </span>
                  <span className="text-[19px]">
                    <b>Add-Ons: </b> {item.addOns.length}+ Add-Ons Available
                  </span>
                  <div>
                    <h5 className="text-[25px] group-hover:text-[30px] group-hover:text-red-600">
                      Price: ${item.price}
                    </h5>
                  </div>
                  <span className="text-red-500 text-[13px]">
                    *All results designated by the US at WIPO are always
                    included.
                  </span>
                  {/* <div className="flex items-center justify-center">
                    <Link
                      href={`/checkout/${item.path}`}
                      className="border-[1px] py-2 px-4 rounded border-gray-400 flex items-center gap-1 hover:ease-in duration-300 group-hover:bg-[#202F5A] group-hover:text-white"
                    >
                      Start Your Order <ChevronRight />
                    </Link>
                  </div> */}
                </div>
              ))}
          </section>
          <div className="flex items-center justify-center">
            <Link href={'/trademark-search-services'} className="text-[18px] py-2 px-3 rounded text-white bg-[#1264FF] hover:bg-white hover:text-black">
              View all Trademark Search Services
            </Link>
          </div>
        </div>
        <div className="bg-[#202F5A] space-y-4 py-6">
          <h3 className="text-[18px] font-semibold text-white text-center">
            Trademark Monitoring Services
          </h3>
          <section className="grid grid-cpls-1 sm:grid-cols-2 gap-10 w-full px-4 md:px-16 py-5">
            {monitorProducts
              ?.filter((_: any, id: any) => id < 2)
              ?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="bg-white rounded-xl flex flex-col  p-6 gap-3 shadow-2xl group "
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={item?.avatar}
                      alt="AI"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h5>{item.name}</h5>
                  <p className="text-[14px]">
                    {item.name.includes("AI")
                      ? "Similar + Phonetic Alternatives [Searched + Curated by Advanced AI]"
                      : "Similar + Phonetic Alternatives + Language Variants [AI-Enhanced + Expert Verified]"}
                  </p>

                  <span>
                    <b>Coverage: </b>
                    {item.included}
                  </span>
                  <span>
                    <b>Turnaround: </b>
                    {item.name.includes("AI")
                      ? " 1-2 Business Days"
                      : "3-4 Business Days"}
                  </span>
                  <span>
                    <b>Add-Ons: </b> {item.addOns.length}+ Add-Ons Available
                  </span>
                  <div>
                    <h5 className="text-[25px] group-hover:text-[30px] group-hover:text-red-600">
                      Price: ${item.price}
                    </h5>
                  </div>
                  <span className="text-red-500 text-[13px]">
                    {" "}
                    *All results designated by the US at WIPO are always
                    included.
                  </span>
                  {/* <div className="flex items-center justify-center">
                    <Link
                      href={`/checkout/${item.path}`}
                      className="border-[1px] py-2 px-4 rounded border-gray-400 flex items-center gap-1 hover:ease-in duration-300 group-hover:bg-[#202F5A] group-hover:text-white"
                    >
                      Start Your Order <ChevronRight />
                    </Link>
                  </div> */}
                </div>
              ))}
          </section>
          <div className="flex items-center justify-center">
            <Link href={'/trademark-search-services'} className="text-[18px] py-2 px-3 rounded text-white bg-[#1264FF] hover:bg-white hover:text-black">
              View all Trademark Monitoring Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionShowcase;
