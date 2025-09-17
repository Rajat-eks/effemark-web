import Image from "next/image";
import React from "react";
import Select from "@/components/assets/icons/select.svg";
import Arrow from "@/components/assets/icons/arrow.svg";
import Inforation from "@/components/assets/icons/INFORMATION.svg";
import Payment from "@/components/assets/icons/PAYMENT.svg";
import Report from "@/components/assets/icons/REPORT.svg";

interface IndexProps {
  // define props here
}

const Process: React.FC<IndexProps> = (props) => {
  return (
    <div className="flex flex-col items-center px-4 md:px-10 text-center w-full">
      <h5 className="text-[30px] font-semibold mb-6">Our Process</h5>

      <section className="flex items-center justify-center gap-6 flex-wrap md:flex-nowrap w-full max-w-7xl">
        {/* STEP 1 */}
        <div className="w-[200px] h-[200px] bg-[#F8F4F4] flex flex-col items-center justify-center py-4 px-4 rounded-lg gap-3 border group relative shadow shadow-[#C31117] border-[#C31117]">
          <Image src={Select} alt="Select Icon" />
          <h4 className="text-[15px] text-center font-medium">
            Select Trademark Services/Packages
          </h4>
          <div className="hidden group-hover:flex z-20 absolute -top-1 -left-2 -right-2 rounded-2xl h-[220px]">
            <p className="text-[14px] bg-white  text-white h-full w-full p-4 bg-gradient-to-br from-[#C31117] via-[#89373a] to-[#202F5A] rounded">
              Check our trademark service options and select the package that
              suitable with your requirements. Choose from various search types,
              monitoring services, and additional features.
            </p>
          </div>
        </div>

        {/* ARROW */}
        <Image
          src={Arrow}
          alt="Arrow Icon"
          className="w-6 h-6 md:w-10 md:h-10"
        />

        {/* STEP 2 */}
        <div className="w-[200px] h-[200px] bg-[#F8F4F4] flex flex-col items-center justify-center py-4 px-4 rounded-lg gap-3 border group relative shadow shadow-[#C31117] border-[#C31117]">
          <Image src={Inforation} alt="Information Icon" />
          <h4 className="text-[15px] text-center font-medium">
            Provide Your Trademark Information
          </h4>
          <div className="hidden group-hover:flex z-20 absolute -top-1 -left-2 -right-2 rounded-2xl h-[220px]">
            <p className="text-[14px] bg-white  text-white h-full w-full p-2 bg-gradient-to-br from-[#C31117] via-[#89373a] to-[#202F5A] rounded">
              Provide Your Trademark Information Share detailed information
              about your trademark, including the mark itself, relevant NICE
              classification categories, and any special requirements or
              instructions for our team.
            </p>
          </div>
        </div>

        {/* ARROW */}
        <Image
          src={Arrow}
          alt="Arrow Icon"
          className="w-6 h-6 md:w-10 md:h-10"
        />

        {/* STEP 3 */}
        <div className="w-[200px] h-[200px] bg-[#F8F4F4] flex flex-col items-center justify-center py-4 px-4 rounded-lg gap-3 border group relative shadow shadow-[#C31117] border-[#C31117]">
          <Image src={Payment} alt="Payment Icon" />
          <h4 className="text-[15px] text-center font-medium">
            Complete Secure Payment
          </h4>
          <div className="hidden group-hover:flex z-20 absolute -top-1 -left-2 -right-2 rounded-2xl h-[220px]">
            <p className="text-[14px] bg-white  text-white h-full w-full p-4 bg-gradient-to-br from-[#C31117] via-[#89373a] to-[#202F5A] rounded">
              Finalize your order through our encrypted payment system. We
              accept all major credit and debit cards processed through our
              secure PayPal gateway for your peace of mind.
            </p>
          </div>
        </div>

        {/* ARROW */}
        <Image
          src={Arrow}
          alt="Arrow Icon"
          className="w-6 h-6 md:w-10 md:h-10"
        />

        {/* STEP 4 */}
        <div className="w-[200px] h-[200px] bg-[#F8F4F4] flex flex-col items-center justify-center py-4 px-4 rounded-lg gap-3 border group relative shadow shadow-[#C31117] border-[#C31117]">
          <Image src={Report} alt="Report Icon" />
          <h4 className="text-[15px] text-center font-medium">
            Receive Your Trademark Report
          </h4>
          <div className="hidden group-hover:flex z-20 absolute -top-1 -left-2 -right-2 rounded-2xl h-[220px]">
            <p className="text-[14px] bg-white  text-white h-full w-full p-4 bg-gradient-to-br from-[#C31117] via-[#89373a] to-[#202F5A] rounded">
              Get your comprehensive trademark report delivered within 3-5
              business days through email, prepared by our experienced trademark
              professionals.
            </p>
          </div>
        </div>
      </section>

      <span className="border-b border-dotted w-[90%] mt-6"></span>
    </div>
  );
};

export default Process;
