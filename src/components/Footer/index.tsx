import Image from "next/image";
import React from "react";
import LOGO from "@/components/assets/logo/logo-footer.svg";
import { Mail, MapPinXInside, Phone } from "lucide-react";
import Link from "next/link";
import Facebook from "@/components/assets/Facebook.svg";
import Twitter from "@/components/assets/Twitter.svg";
import Linkedin from "@/components/assets/Linkedin.svg";

interface IndexProps {
  // define props here
}

const Footer: React.FC<IndexProps> = (props) => {
  return (
    <footer className="bg-[#202F5A] text-white text-[13px] ">
      <section className="flex flex-col sm:flex-row gap-10 p-10 w-full">
        <div className=" w-full md:w-[40%] space-y-10">
          <Image src={LOGO} alt="logo" className="w-[200px]" />
          <div className="space-y-4">
            <span>Powered by:</span>
            <h4 className="text-white">
              <a href="https://effectualservices.com" target="_blank">
                Effectual Knowledge Services pvt. ltd.
              </a>
            </h4>
            <p>
              Effectual Services is an award-winning Intellectual Property (IP)
              management advisory & consulting firm.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[20%]">
          <h3 className="text-[19px] font-bold text-white">Quick Links</h3>
          <ul className="flex  flex-col space-y-4 pt-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link href={"/faqs"}>FAQ</Link>
            </li>
            <li>
              <Link href={"/articles"}>Articles</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className=" w-full md:w-[20%]">
          <h5 className="text-[19px] font-bold text-white">
            Trademark Solution
          </h5>
          <ul className="flex  flex-col space-y-4 pt-4">
            <li>
              <Link href={"/trademark-search-services"}>
                Trademark Search Services
              </Link>
            </li>
            <li>
              <Link href={"/trademark-monitoring"}>
                Trademark Monitoring Services
              </Link>
            </li>
            <li>
              <Link href={"/global-trademark-search"}>
                Global Trademark Search
              </Link>
            </li>
            <li>
              <Link href={"/trademark-docketing"}>Trademark Dockating</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[20%] flex flex-col items-start space-y-2">
          <div className="flex items-center justify-start gap-1">
            <MapPinXInside size={34} absoluteStrokeWidth /> 425 Broadhollow
            Road, Suite 427, Melville | NY 11747
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail size={16} /> info@effemark.com
          </div>
          <div className="flex items-center justify-center gap-2">
            {" "}
            <Phone size={16} />
            +1-972-256-8133
          </div>
          <div className="flex flex-col">
            <h4 className="text-white">Follow Us:</h4>
            <div className="flex items-center gap-4 pt-2">
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
          </div>
        </div>
      </section>
      <section className="text-[14px] text-white flex flex-col md:flex-row items-start justify-between p-3 border-t-[1px] border-dotted">
        <span className="order-2 md:order-1">@2025 EffeMark. All rights reserved.</span>
        <ul className="flex flex-col md:flex-row items-start justify-between gap-5 order-1 md:order-2">
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href={"/faq"}>FAQ</Link>
          </li>
          <li>
            <Link href={"/terms-condition"}>Terms & Condition</Link>
          </li>
          <li>
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"/refund-policy"}>Refund Policy</Link>
          </li>
          <li>
            <Link href={"/blog"}>Articles</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
