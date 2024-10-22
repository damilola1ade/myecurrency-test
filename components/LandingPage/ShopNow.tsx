import Image from "next/image";
import Button from "../Button";

export default function ShopNow() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full gap-24 sm:gap-0 justify-between items-center text-blue">
        <div className="relative">
          <Image src="/shopnow.png" width={600} height={600} alt="shop" />

          <div className="bg-white w-[300px] shadow-2xl p-4 rounded-lg absolute top-48 space-y-1 lg:top-72 right-5 text-[11px] 2xl:text-sm text-light">
            <div>😊 Promotes calm and relaxation.</div>
            <div>💤 Inhalation allows for a rapid effect.</div>
            <div>✅ 100% drug-free, plant-based ingredients.</div>
            <div>3rd-party lab tested.</div>
          </div>
        </div>

        <div className="max-w-[360px] flex flex-col gap-8">
          <h1 className="text-3xl font-extrabold">Shop Now</h1>
          <p className="text-md text-gray">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>

          <Button />
        </div>
      </div>
    </>
  );
}
