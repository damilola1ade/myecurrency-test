import React from "react";
import Button from "../Button";
import Brands from "./Brands";

export default function Hero() {
  return (
    <>
      <div className="bg-[url('/herobg.png')] h-[568px] py-20 px-8 lg:py-32 lg:px-32 2xl:px-64 bg-cover bg-center flex w-full text-blue relative">
        <div className="max-w-[480px] flex flex-col gap-8 justify-center items-center text-center lg:text-start sm:items-start relative w-full">
          <h3 className="text-sm sm:text-lg">We're here to help you</h3>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Relax & Rest</h1>
          <p className="text-sm sm:text-lg">
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can get quality sleep.
          </p>

          <Button />
        </div>

        <div className="absolute -bottom-8 right-0">
          <Brands />
        </div>
      </div>
    </>
  );
}
