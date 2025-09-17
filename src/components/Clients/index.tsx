import React from "react";
import DummyLogo from "@/components/assets/logo/dummy-Logo.svg";
import Image from "next/image";

interface IndexProps {
  // define props here
}

const Clients: React.FC<IndexProps> = (props) => {
  return (
    <div className="border-b-[1px] border-dotted  flex flex-col items-center justify-center text-[18px] p-8">
      <h6 className=" text-center">
        Join <b>1000+</b> Clients Who Trust Our Trademark Services
      </h6>
      <div className="flex items-center justify-center p-3">
        <Image src={DummyLogo} alt="Client Logo w-500"  />
      </div>
    </div>
  );
};

export default Clients;
