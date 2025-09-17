import Image from "next/image";
import React from "react";
import CART from "@/components/assets/img/cart.svg";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main className="flex flex-col items-center justify-center  py-2 h-[85vh]">
      <Image src={CART} alt="Cart" />
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-[26px] font-bold">Your Cart is Empty</h3>
        <p className="text-[20px] text-gray-600">
          Looks like you have not added anything to our cart.
        </p>
      </div>
    </main>
  );
};

export default page;
