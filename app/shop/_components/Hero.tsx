export default function Hero() {
  return (
    <>
      <div className="bg-[url('/man.png')] h-[568px] py-20 px-8 lg:py-32 lg:px-32 bg-cover  bg-top flex w-full text-blue relative">
        <div className="max-w-[480px] flex flex-col gap-8 justify-center items-center sm:items-start text-center lg:text-start relative w-full">
          <h3 className="text-sm sm:text-lg">We're here to help you</h3>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Relax & Rest</h1>
          <p className="text-sm sm:text-lg">
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can get quality sleep.
          </p>
        </div>
      </div>
    </>
  );
}
