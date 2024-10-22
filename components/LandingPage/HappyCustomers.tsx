import Image from "next/image";
import MoreAboutUs from "../MoreAboutUs";

export default function HappyCustomers() {
  return (
    <>
      <div className="mt-12 flex flex-col sm:flex-row gap-8 w-full justify-between text-gray">
        <div className="max-w-[480px] flex flex-col gap-8">
          <h3 className="text-blue">Our Amazing Story</h3>
          <div className="relative w-80">
            <h1 className="text-2xl font-extrabold text-blue">
              10k+Happy Customers
            </h1>
            <Image
              src="/cream.png"
              width={180}
              height={180}
              className="absolute right-4 top-0 opacity-100"
              alt="cream bg"
            />
          </div>

          <p className="text-md">
            There’s no secret sauce, no wizard behind the curtain. What makes
            Aerolab tick is an interdisciplinary team with a framework that
            fosters candid collaboration.
          </p>

          <MoreAboutUs />
        </div>

        <div className="bg-cream p-8 grid gap-2 max-w-[360px] shadow-2xl">
          <p className="italic text-sm sm:text-lg">
            I’m a very anxious person but use this and feel so relaxed and sleep
            way better now with the aid of sleepstiq.
          </p>

          <div className="grid grid-cols-[auto_1fr] gap-3 mt-16 items-center">
            <div>
              <Image src="/james.png" width={50} height={50} alt="ceo" />
            </div>

            <div className="grid gap-2">
              <p className="font-extrabold">James Miller</p>
              <p className="text-sm">CEO, Techbias</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
