import Image from "next/image";
import React from "react";

interface IndexProps {
  item: { avatar?: any; title: string; description: string };
}

const Card: React.FC<IndexProps> = ({ item }) => {
  return (
    <div className="bg-[#F8F4F4] hover:shadow-2xl hover:scale-105 transition  ease-in hover:bg-[#dedede] border-[#CECECE] border-[1px] rounded-xl flex items-center justify-center flex-col space-y-2 p-4 w-[300px]">
      <Image src={item?.avatar} alt="logo" width={60} height={100} />
      <h4 className="text-[18px]">{item?.title}</h4>
      <p className="text-center text-[12px]">{item?.description}</p>
    </div>
  );
};

export default Card;
