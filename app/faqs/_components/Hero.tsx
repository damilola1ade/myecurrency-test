import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <>
      <div className="bg-cream h-[250px] py-64 px-8 lg:py-64 lg:px-32 2xl:px-64 bg-cover  bg-top flex w-full text-blue relative">
        <div className="max-w-[960px] flex flex-col gap-8 justify-center items-center sm:items-start relative w-full">
          <h3 className="text-sm sm:text-lg">We're here to help you</h3>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            How can we assist?
          </h1>
          <Input
            className="w-full p-8 bg-white"
            placeholder="Search FAQs here 🔎"
          />
        </div>
      </div>
    </>
  );
}
