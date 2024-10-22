import Image from "next/image";
import MoreAboutUs from "../MoreAboutUs";

export default function OurMission() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
        <div className="max-w-[480px] flex flex-col gap-8">
          <h1 className="text-3xl font-extrabold text-blue">Our Mission</h1>
          <p className="text-gray">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That's why we created products that aim to -
          </p>

          <div className="flex flex-col gap-1 text-gray">
            <p>✓ Promote Calm </p>
            <p>✓ Support Sleep</p>
            <p>✓ Reduce Stress</p>
            <p>✓ Aid Relaxation</p>
          </div>
        </div>

        <Image
          src="/woman.png"
          width={560}
          height={560}
          alt="woman"
          className="relative lg:absolute right-0"
        />
      </div>
    </>
  );
}
