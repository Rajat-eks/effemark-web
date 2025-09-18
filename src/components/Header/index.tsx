"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  FacebookIcon,
  LinkedinIcon,
  Mail,
  Menu,
  Phone,
  TwitterIcon,
  X,
} from "lucide-react";

// import Call from "@/components/assets/Call.svg";
// import Email from "@/components/assets/Email.svg";
import Cart from "@/components/assets/Cart.svg";
import Facebook from "@/components/assets/Facebook.svg";
import Twitter from "@/components/assets/Twitter.svg";
import Linkedin from "@/components/assets/Linkedin.svg";
import Logo from "@/components/assets/logo/logo.svg";

interface IndexProps {}

const navBarItems = [
  { name: "Home", link: "/" },
  {
    name: "Services",
    link: "/trademark-search-services",
    child: [
      {
        name: "Trademark Search Services",
        link: "/trademark-search-services",
      },
      { name: "Trademark Monitoring Services", link: "/trademark-monitoring" },

      { name: "Global Trademark Search", link: "/global-trademark-search" },
      { name: "Trademark Docketing", link: "/trademark-docketing" },
    ],
  },
  { name: "Samples", link: "/samples" },
  { name: "About Us", link: "/about-us" },
  { name: "FAQs", link: "/faqs" },
  // {
  //   name: "Resources",
  //   link: "/articles",
  //   child: [{ name: "Articles", link: "/articles" }],
  // },
  { name: "Contact", link: "/contact-us" },
];

const Header: React.FC<IndexProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="text-gray-800 flex flex-col bg-white shadow">
      {/* Top bar */}
      <section className="bg-[#134493] text-white flex justify-between items-center gap-10 py-2 px-4 text-sm">
        <div className="flex gap-4 flex-wrap">
          <a
            href="mailto:info@effemark.com"
            className="flex gap-2 items-center text-sm text-white "
          >
            <Mail size={20} />
            info@effemark.com
          </a>

          <a
            href="tel:+19722568133"
            className="flex gap-2 items-center text-sm text-white "
          >
            <Phone size={20} />
            +1-972-256-8133
          </a>
        </div>
        <div className="hidden sm:flex gap-4 items-center">
          {/* <Link
            href={"/"}
            className="text-white px-4 text-[16px] bg-gradient-to-r from-[#E90303] to-[#202F5A] via-[#731D36] rounded flex items-center justify-center gap-2"
          >
            <Image src={Cart} alt="Cart" /> Cart
          </Link> */}
          <a href="https://www.linkedin.com/company/effemark/ " target="_blank">
            <Image src={Linkedin} alt="twitter" width={26} />
          </a>
          <a href="https://www.facebook.com/EffectualServices" target="_blank">
            <Image src={Facebook} alt="twitter" width={26} />
          </a>
          <a href="https://twitter.com/effectualip?lang=en" target="_blank">
            <Image src={Twitter} alt="twitter" width={26} />
          </a>
        </div>
      </section>

      {/* Main nav */}
      <section className="flex justify-between items-center px-5 py-4 relative">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
          <Image src={Logo} alt="Logo" width={160} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navBarItems.map((item) => (
            <li
              key={item.name}
              className="relative group text-[14px] font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Link href={item.link}>{item.name}</Link>
              {item?.child && <ChevronDown size={20} />}

              {/* Dropdown */}
              {item?.child && (
                <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-48 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                  {item.child.map((childItem) => (
                    <li
                      key={childItem.name}
                      className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                    >
                      <Link href={childItem.link}>{childItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-4 space-y-2">
          <ul className="flex flex-col gap-3">
            {navBarItems.map((item) => (
              <li key={item.name}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }
                >
                  <Link href={item.link} className="font-medium text-gray-800">
                    {item.name}
                  </Link>
                  {item.child && <ChevronDown size={18} />}
                </div>
                {item.child && openDropdown === item.name && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {item.child.map((childItem) => (
                      <li key={childItem.name}>
                        <Link
                          href={childItem.link}
                          className="text-sm text-gray-600 hover:text-black"
                        >
                          {childItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
