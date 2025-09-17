import Image from "next/image";
import React from "react";
import CASE_STUDY from "@/components/assets/img/case_study.svg";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

interface IndexProps {
  // define props here
}

const CaseStudy: React.FC<IndexProps> = (props) => {
  return (
    <div className="m-10 py-4 md:p-10 border-b-[1px] border-dotted">
      <h5 className="text-center text-[20px] md:text-[25px]">
        Real-World Case Studies
      </h5>
      <div className="pt-5">
        <Image src={CASE_STUDY} alt="Case Study" />
        {/* <div className="flex justify-center gap-5 pt-5">
          <button className="cursor-pointer">
            <CircleArrowLeft />
          </button>
          <button className="cursor-pointer">
            <CircleArrowRight />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default CaseStudy;
