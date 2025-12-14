import AnimateOnScroll from "@/components/animations/AnimateOnScroll";
import Contributors from "@/components/home/Contributors";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import ImageSlider from "@/components/home/ImageSlider";
import MoreFeaturesComing from "@/components/home/MoreFeaturesComing";
import Supporters from "@/components/home/Supporters";

// import ContributorsSection from "../components/ContributorsSection";
// import DonationCards from "../components/DonationCards";
// import { useDocumentTitle } from "../hooks";

const Home = () => {
  // useDocumentTitle("افزونه نیو تب مرورگر");

  return (
    <header className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      <section
        className="relative px-4 py-20"
        aria-label="معرفی افزونه ویجتیفای"
      >
        <div className="container flex flex-col gap-6">
          <Hero />
          <ImageSlider />
          <Features />
          <MoreFeaturesComing />
          <AnimateOnScroll className="slide-up">
            <Supporters />
          </AnimateOnScroll>
          <Contributors />
        </div>
      </section>
    </header>
  );
};

export default Home;
