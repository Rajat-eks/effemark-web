import Image from "next/image";
import React from "react";
import Banner from "@/components/assets/img/blog.svg";
import Question from "@/components/assets/img/question.svg";
import { Mail, Phone } from "lucide-react";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col md:flex-row p-6 md:p-14 gap-5">
      <section className="md:w-[65%] space-y-5">
        <Image src={Banner} alt="Blog Banner" className="w-full h-auto" />
        <div className="flex flex-col ">
          <h5>
            Comprehensive Guide to Conducting Effective Trademark Search
            Strategies
          </h5>
          <span className="text-[14px] text-blue-600">
            Published on 31/07/2025
          </span>
        </div>
        <div>
          <p className="text-justify text-[16px]">
            Detailed methodology for examining existing trademarks to identify
            similar marks that may conflict with desired brand names or logos.
            Detailed methodology for examining existing trademarks to identify
            similar marks that may conflict with desired brand names or
            logos.Detailed methodology for examining existing trademarks to
            identify similar marks that may conflict with desired brand names or
            logos.Detailed methodology for examining existing trademarks to
            identify similar marks that may conflict with desired brand names or
            logos.Detailed methodology for examining existing trademarks to
            identify similar marks that may conflict with desired brand names or
            logos. <br /> Detailed methodology for examining existing trademarks
            to identify similar marks that may conflict with desired brand names
            or logos.Detailed methodology for examining existing trademarks to
            identify similar marks that may conflict with desired brand names or
            logos.Detailed methodology for examining existing trademarks to
            identify similar marks that may conflict with desired brand names or
            logos.Detailed methodology for examining existing trademarks to
            identify similar marks that may conflict with desired brand names or
            logos.Detailed methodology for examining existing trademarks to
            identify similar marks that may conflict with desired brand names or
            logos. <br /> Detailed methodology for examining existing trademarks
            to identify similar marks that may conflict with desired brand names
            or logos.Detailed methodology for examining existing trademarks to
            identify similar marks that may conflict with desired brand names or
            logos.Detailed methodology for examining existing trademarks to
            identify similar marks that may conflict with desired brand names or
            logos.
          </p>
        </div>
      </section>
      <section className="md:w-[35%]  space-y-10">
        <section className="bg-[#202F5A] py-5 rounded-2xl">
          <h4 className="text-white text-center text-xl">Recent Posts</h4>
          <ul className="p-5 space-y-5">
            <li className="cursor-pointer">
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={Banner}
                    alt="Blog Banner"
                    className="w-28 h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-white text-[13px]">
                    Why Online Trademark Monitoring is Essential for Brand
                    Protection
                  </h3>
                  <span className="text-gray-400 text-[12px]">
                    Published on 31/07/2025
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={Banner}
                    alt="Blog Banner"
                    className="w-28 h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-white text-[13px]">
                    Why Online Trademark Monitoring is Essential for Brand
                    Protection
                  </h3>
                  <span className="text-gray-400 text-[12px]">
                    Published on 31/07/2025
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={Banner}
                    alt="Blog Banner"
                    className="w-28 h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-white text-[13px]">
                    Why Online Trademark Monitoring is Essential for Brand
                    Protection
                  </h3>
                  <span className="text-gray-400 text-[12px]">
                    Published on 31/07/2025
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={Banner}
                    alt="Blog Banner"
                    className="w-28 h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-white text-[13px]">
                    Why Online Trademark Monitoring is Essential for Brand
                    Protection
                  </h3>
                  <span className="text-gray-400 text-[12px]">
                    Published on 31/07/2025
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={Banner}
                    alt="Blog Banner"
                    className="w-28 h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-white text-[13px]">
                    Why Online Trademark Monitoring is Essential for Brand
                    Protection
                  </h3>
                  <span className="text-gray-400 text-[12px]">
                    Published on 31/07/2025
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="flex items-center justify-center  relative">
          <Image src={Question} alt="Question Icon" />
          <div className="flex flex-col items-center absolute top-[60%] left-0 right-0 bottom-0 inset-0 space-y-2">
            <a href="" className="flex items-center gap-2 text-[18px] text-white">
              <Mail /> info@effemark.in
            </a>
            <a href="" className="flex items-center gap-2 text-[18px] text-white">
              <Phone /> +1-972-256-8133
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default page;
