import Subscribe from "@/components/Subscribe";
import Image from "next/image";
import React from "react";
import Background from "@/components/assets/bg/contact-bg.svg";
import { Contact, Mail, MapPin, Phone } from "lucide-react";
import Form from "./_component/index";
import Facebook from "@/components/assets/Facebook.svg";
import Twitter from "@/components/assets/Twitter.svg";
import Linkedin from "@/components/assets/Linkedin.svg";

interface PageProps {
  // define props here
}

const page: React.FC<PageProps> = (props) => {
  return (
    <main>
      <div className="hero-section relative min-h-screen sm:h-[70vh] w-full">
        {/* Background Image */}
        <Image
          src={Background}
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col md:flex-row justify-between  pt-10 bg-black/80 p-4 md:px-10 text-white">
          <section className="bg-[#202F5A] flex flex-col items-center  md:h-[88%]  md:w-[40%]  text-center gap-3  rounded-2xl">
            <div className="border-b-[1px] py-6 border-gray-500 w-[80%]">
              <h4 className="text-[22px] font-semibold text-white">
                Send a Message
              </h4>
              <p className="text-[16px] text-center px-[37px] ">
                Get in touch with us for any questions about our industries or
                projects.
              </p>
            </div>
            <div className="border-b-[1px] py-2 border-gray-500 w-[85%]">
              <span className=" flex flex-col  items-center justify-center gap-4 text-[15px]">
                <MapPin size={34} />
                SDF A-05, NSEZ, Noida–Dadri Road, Noida Phase II 201305
              </span>{" "}
            </div>
            <div className="border-b-[1px] py-4 border-gray-500 w-[80%]">
              <span className=" flex flex-col items-center justify-start gap-4 text-[15px]">
                <a
                  href="mailto:info@effemark.com"
                  className="flex flex-col gap-2 items-center  text-white "
                >
                  <Mail size={30} />
                  info@effemark.com
                </a>
              </span>
            </div>
            <div className="border-b-[1px]  py-4 border-gray-500 w-[80%]">
              <span className=" flex flex-col items-center justify-start gap-4 text-[15px]">
                <a
                  href="tel:+19722568133"
                  className="flex flex-col gap-2 items-center text-white "
                >
                  <Phone size={30} />
                  +1-972-256-8133
                </a>
              </span>
            </div>
            <div className=" flex items-center justify-between w-[30%] py-4  border-gray-500 ">
              <span className=" flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/company/effemark/ "
                  target="_blank"
                >
                  <Image src={Linkedin} alt="twitter" width={26} />
                </a>
              </span>
              <span className=" flex items-center justify-center">
                <a
                  href="https://www.facebook.com/EffectualServices"
                  target="_blank"
                >
                  <Image src={Facebook} alt="twitter" width={26} />
                </a>
              </span>

              <span className=" flex items-center justify-center">
                <a
                  href="https://twitter.com/effectualip?lang=en"
                  target="_blank"
                >
                  <Image src={Twitter} alt="twitter" width={26} />
                </a>
              </span>
            </div>
          </section>
          <section className="bg-white text-black w-[55%] h-[81vh] rounded-2xl">
            <Form />
          </section>
        </div>
      </div>
      <Subscribe />
    </main>
  );
};

export default page;
