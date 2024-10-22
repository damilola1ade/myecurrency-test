import Layout from "@/components/Layout";
import HappyCustomers from "../components/LandingPage/HappyCustomers";
import Hero from "../components/LandingPage/Hero";
import OurMission from "../components/LandingPage/OurMission";
import ProductReviews from "../components/LandingPage/ProductReviews";
import ShopNow from "../components/LandingPage/ShopNow";
import VisitOurShop from "../components/LandingPage/VisitOurShop";
import ReviewCarousel from "../components/ReviewCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <Layout>
        <HappyCustomers />
        <ReviewCarousel />
        <ShopNow />
        <OurMission />
        <VisitOurShop />
        <ProductReviews />
      </Layout>
    </>
  );
}
