import Button from "../Button";

export default function VisitOurShop() {
  return (
    <div className="mt-0 sm:mt-32 flex flex-col gap-8 items-center text-center">
      <h1 className="text-3xl font-extrabold text-blue">Visit Our Shop</h1>
      <p className="max-w-[798px] text-gray">
        Our Personal Diffuser is an aromatherapy device that contains a blend of
        melatonin, lavender, and chamomile. A few breaths of our plant-based
        essential oil mist will mellow you out, quiet the mind, and lull you to
        bed.
      </p>

      <Button />
    </div>
  );
}
