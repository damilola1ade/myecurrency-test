import ProductReviews from "../../components/ProductReviews";
import AboutProduct from "./_components/AboutProduct";
import Hero from "./_components/Hero";

export default function Shop() {
  return (
    <div className="flex w-full flex-col gap-10">
      <Hero />
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="max-w-[1440px] flex flex-col justify-center items-center w-full gap-20 py-16 px-8 lg:py-24 lg:px-32">
          <AboutProduct />
          <ProductReviews />
        </div>
      </div>
    </div>
  );
}
