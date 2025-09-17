import React from "react";

interface IndexProps {
  // define props here
}

const CheckoutForm: React.FC<IndexProps> = (props) => {
  return (
    <div className="shadow-2xl rounded-2xl p-8 bg-white">
      <div>
        <h6 className="text-[16px] font-semibold">
          Choose Add-ons (Optional){" "}
        </h6>
        <ul className="text-[13px] pt-5 space-y-2">
          <li className="flex items-center gap-2">
            <input type="checkbox" />{" "}
            <label htmlFor="">US (52) States + $105</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" />{" "}
            <label htmlFor="">Common Law- US + $55</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" />{" "}
            <label htmlFor="">Canada/CIPO + $65</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" />{" "}
            <label htmlFor="">Canada (7) Business Registeries + $55</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" /> <label htmlFor="">Mexico  + $65</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" /> <label htmlFor="">EUIPO + $65</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" />{" "}
            <label htmlFor="">United Kingdom + $65</label>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" /> <label htmlFor="">WIPO + $65</label>
          </li>
        </ul>
      </div>
      <div className="pt-10">
        <form action="" className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name (Required)"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email (Required)"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Contact Number (Required)"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Country"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Select Mark Types for monitoring (Required)"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <h6 className="text-[16px] font-semibold px-2">
            Additional Instruction (Optional)
          </h6>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nice Classes"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
            <input
              type="text"
              placeholder="Goods & Services"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Reference Number"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            />
          </div>
          <div>
            <textarea
              cols={30}
              rows={5}
              placeholder="Message (Optional)"
              className="rounded-lg w-full border-gray-400 p-2 text-[14px] border-[1px]"
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-4">
            <span className="text-[14px]">Total Price</span>
            <span className="text-[#C31117] font-bold">$100.00</span>
          </div>
          <button className="w-full text-white rounded-xl text-center bg-[#C31117] py-2 cursor-pointer">Add to Cart</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
