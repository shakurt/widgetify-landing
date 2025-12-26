// import AnimateOnScroll from "@landing/components/animations/AnimateOnScroll";

import ContributorsSection from "@landing/components/home/ContributorsSection";
import FeaturesSection from "@landing/components/home/FeaturesSection";
import HeroSection from "@landing/components/home/HeroSection";
import ImageSliderSection from "@landing/components/home/ImageSliderSection";
import MoreFeaturesComingSection from "@landing/components/home/MoreFeaturesComingSection";
import SupportersSection from "@landing/components/home/SupportersSection";

const Home = () => {
  return (
    <section
      className="py-6 md:py-10 lg:py-20"
      aria-label="معرفی افزونه ویجتیفای"
    >
      <div className="container mx-auto flex flex-col gap-6">
        <HeroSection />
        <ImageSliderSection />
        <FeaturesSection />
        <MoreFeaturesComingSection />
        <SupportersSection />
        <ContributorsSection />
        {/* <AnimateOnScroll className="slide-up">
          </AnimateOnScroll> */}
      </div>
    </section>
  );
};

export default Home;
