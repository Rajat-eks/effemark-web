import React from "react";

interface IndexProps {
  // define props here
}

const Subscribe: React.FC<IndexProps> = (props) => {
  return (
    <div className="bg-[#C31117] flex flex-col md:flex-row items-center justify-around w-full gap-2 md:gap-0  p-2">
      <h6 className="text-[15px] md:text-[17px]  text-white">
        Stay on top of the latest updates from us.
      </h6>
      <div className="bg-white rounded-2xl flex justify-between gap-2 px-2 py-[4px] sm:w-[35%] w-full ">
        <input
          type="text"
          placeholder="Email Address"
          className="w-full outline:none focus:outline-none"
        />
        <button className="bg-[#202F5A] text-[15px] text-white py-[10px] px-8 rounded-2xl ">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
