import { Divide } from "lucide-react";
import React from "react";
import Form from "./Form";

interface IndexProps {
  // define props here
}

const GetInTouch: React.FC<IndexProps> = (props) => {
  return (
    <div className="md:m-10 p-6 md:p-10 border-b-[1px] border-dotted flex flex-col md:flex-row items-start gap-8 md:gap-20 relative">
      <section className="md:w-[60%] w-full space-y-6">
        <div>
          <h5 className="text-[44px] font-semibold">SPEAK!</h5>
          <h6 className="text-[25px] font-semibold">To Our Trademark Experts</h6>
        </div>
        <p className="text-[16px]">
          Looking for comprehensive trademark solutions? Our experts are ready
          to help you protect and manage your trademark with efficiency and
          precision.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px]">
          <li>
            Personalized trademark consultation tailored to your business needs
          </li>
          <li>
            Expert guidance on international trademark registration & protection
          </li>
          <li>Solutions for trademark monitoring and enforcement</li>
          <li>
            Efficient portfolio management tools for your intellectual property
          </li>
          <li>Competitive pricing with flexible service packages</li>
        </ul>
      </section>
      <section className="md:w-[40%]  w-full ">
      <div className="z-20 relative">
          <Form />
      </div>
        <div className="h-40 w-40 bg-black absolute bottom-4 right-4 z-10"></div>
      </section>
    </div>
  );
};

export default GetInTouch;
