import Button from "@/components/Button";
import NumberInput from "@/components/NumberInput";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function AboutProduct() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full gap-12 sm:gap-0 justify-between items-center text-blue">
        <div className="relative">
          <Image src="/shopnow.png" width={600} height={600} alt="shop" />
        </div>

        <div className="max-w-[360px] flex flex-col gap-8 ">
          <h1 className="text-3xl font-extrabold">About Product</h1>
          <p className="text-md text-gray">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>

          <div className="flex flex-col gap-2 text-gray">
            <div>😊 Promotes calm and relaxation.</div>
            <div>💤 Inhalation allows for a rapid effect.</div>
            <div>✅ 100% drug-free, plant-based ingredients.</div>
            <div>3rd-party lab tested.</div>
          </div>

          <div className="flex flex-row gap-12 text-blue">
            <div className="flex flex-col gap-2">
              <p>Price</p>
              <p className="font-extrabold">$50</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>Unit</p>
              <Input
                type="number"
                id="quantity"
                defaultValue="0"
                min="0"
                className="w-[65px] h-[28px] rounded-sm font-extrabold border-primary"
              />
            </div>
          </div>

          <Button text="Buy" />
        </div>
      </div>
    </>
  );
}
