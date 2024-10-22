"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    path: "/shop",
  },
  {
    id: 3,
    title: "FAQs",
    path: "/faqs",
  },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const path = usePathname();

  return (
    <div className="py-2 px-8 lg:px-32 2xl:px-64 w-full flex gap-64 justify-center items-center absolute z-40">
      <div className="max-w-[1440px] flex gap-32 items-center w-full">
        <Image src="/navlogo.webp" width={80} height={80} alt="logo" />
        <div className="hidden sm:flex">
          <div className="flex flex-row gap-16">
            {navLinks.map((item) => (
              <div key={item.id}>
                <Link
                  href={item.path}
                  className={`${
                    path === item.path && "font-extrabold text-blue"
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden">
        {navOpen ? (
          <AiOutlineClose
            size={24}
            className="cursor-pointer"
            onClick={() => setNavOpen(false)}
          />
        ) : (
          <AiOutlineMenu
            size={24}
            className="cursor-pointer"
            onClick={() => setNavOpen(true)}
          />
        )}
      </div>

      {/* Mobile Navbar */}
      {navOpen && (
        <div className="absolute top-full left-0 w-full bg-white py-6 px-8 sm:hidden z-50 shadow-md">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={`${
                  path === item.path && "font-extrabold text-blue"
                } py-2`}
                onClick={() => setNavOpen(false)} // close menu after click
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
