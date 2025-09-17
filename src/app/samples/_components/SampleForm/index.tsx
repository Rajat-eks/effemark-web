import React from "react";

interface IndexProps {
  // define props here
}

const SampleForm: React.FC<IndexProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-4">
      <h4 className="md:text-[38px] text-[30px] font-semibold">
        Download samples
      </h4>
      <p className="md:text-[20px] text-[16px] text-center">
        Fill out the form below to access our complete sample portfolio
      </p>
      <div className="md:shadow-2xl shadow-2xs w-full  md:w-[60%] rounded-xl p-3 md:p-10 my-7">
        <form action="" className="grid grid-cols-2  gap-4 md:gap-10">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
          />
          <input
            type="text"
            placeholder="Email"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
          />
          <input
            type="text"
            placeholder="Company Name "
            className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
          />
          <div className="flex flex-col col-span-2 w-full space-y-2">
            <label htmlFor="">Please select the type of samples you need</label>
              <div className="w-full  col-span-2 flex ">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                placeholder="Company Name "
                className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
              />
              <label htmlFor="" className="text-[14px]">Trademark Search</label>
            </div>
               <div className="flex items-center gap-1">
              <input
                type="checkbox"
                placeholder="Company Name "
                className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
              />
              <label htmlFor="" className="text-[14px]">Trademark Monitoring</label>
            </div>
                <div className="flex items-center gap-1">
              <input
                type="checkbox"
                placeholder="Company Name "
                className="rounded-xl border-[1px] p-2 w-full border-gray-300 text-[14px]"
              />
              <label htmlFor="" className="text-[14px]">Trademark Docketing</label>
            </div>
          </div>
          </div>
        
          <div className="flex items-center justify-center w-full col-span-2">
            <button className="bg-[#1264FF] text-white h-[40px] text-[14px] font-semibold  rounded-xl w-[174px]">
              Submit & Get Access
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SampleForm;
