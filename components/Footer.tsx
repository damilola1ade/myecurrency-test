"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const companyLinks = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "Blog",
    link: "/",
  },
  {
    title: "Contract",
    link: "/",
  },
  {
    title: "Jobs",
    link: "/",
  },
];

export default function Footer() {
  return (
    <div className="bg-blue flex flex-col justify-center items-center w-full p-4 gap-1 text-white relative text-xs sm:text-sm">
      <div className="flex w-full justify-center items-center p-4">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="footer logo"
          className="bg-blend-lighten"
        />
      </div>

      {/* Grid layout for the footer content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-8 w-full p-6 max-w-[1080px]">
        {/* Company Section */}
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold">COMPANY</h1>
          <div className="mt-4 flex flex-col gap-2 tracking-tight">
            {companyLinks.map((item) => (
              <Link className="text-gray" href={item.link} key={item.title}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold">CONTACT</h1>
          <div className="mt-4 flex flex-col gap-2 tracking-tight">
            <p className="text-gray">Phone</p>
            <p className="text-white">+234 708 507 3128</p>
            <p className="text-gray">Address</p>
            <p className="text-white">16, Ogindipe Close, Upston Close</p>
          </div>
        </div>

        {/* Get in Touch and Consumer Advisory */}
        <div className="flex flex-col gap-8">
          {/* Consumer Advisory */}
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold">CONSUMER ADVISORY</h1>
            <span className="w-auto md:w-[300px] lg:w-[350px] text-white text-xs">
              These statements have not been evaluated by the Food and Drug
              Administration. This product is not intended to diagnose, treat,
              cure, or prevent any disease. This product should be used only as
              directed on the label. All trademarks and copyrights are property
              of their respective owners and not affiliated with nor do they
              endorse this product. Results may vary.
            </span>
            <p className="w-auto md:w-[300px] lg:w-[350px] text-xs">
              By using our website or product, you agree to follow our{" "}
              <span className="text-blue-300">terms of service.</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 relative left-0 xl:left-48 ">
          <h1 className="font-semibold">GET IN TOUCH</h1>
          <span className="text-white">
            Feel free to get in touch with us via email
          </span>
          <h1 className="font-extrabold text-sm sm:text-2xl">
            hello@sleepstiq.com
          </h1>
          <Image
            src="/icons.webp"
            width={150}
            height={150}
            alt="social icons"
          />
          <span className="mt-8 w-full text-[11px] text-gray">
            © 2020@sleepstiq. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
