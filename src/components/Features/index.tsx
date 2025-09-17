import React from "react";
import Image, { StaticImageData } from "next/image";

interface IndexProps {
  // define props here
  features: { title: string; description: string; logo: StaticImageData }[];
}

const Features: React.FC<IndexProps> = ({ features }) => {
  return (
    <div className="p-4  py-7 flex flex-col  items-center">
      <h5 className="text-[30px]">Effemark Features</h5>
      <section className="grid grid-cols-1 md:grid-cols-4  gap-10 py-14 px-4 md:p-14">
        {features?.map(
          ({
            title,
            description,
            logo,
          }: {
            title: string;
            description: string;
            logo: StaticImageData;
          }) => (
            <div className="bg-[#F8F4F4] flex flex-col items-center p-5 rounded-lg gap-2 relative hover:bg-[#e1dbdb] group ">
              <div className="flex  justify-center absolute -top-10 inset-0  ">
                <Image src={logo} alt="Global Icon" className="absolute" />
              </div>
              <h5 className="pt-8 ">{title}</h5>
              <p className="text-[13px] text-center">{description}</p>
            </div>
          )
        )}
      </section>
      <span className="border-b-[1px] border-dotted w-[90%]"></span>
    </div>
  );
};

export default Features;
