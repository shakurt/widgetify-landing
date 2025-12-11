// import { TypeAnimation } from "react-type-animation";

import AnimateOnScroll from "@/components/animations/AnimateOnScroll";
import Contributors from "@/components/home/Contributors";
import DownloadButtons from "@/components/home/DownloadButtons";
import Features from "@/components/home/Features";
import ImageSlider from "@/components/home/ImageSlider";
import MoreFeaturesComing from "@/components/home/MoreFeaturesComing";
import Supporters from "@/components/home/Supporters";
import TrustStats from "@/components/home/TrustStats";

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
          <section className="animate-fade-in flex flex-col items-center justify-center gap-4">
            <h1 className="animate-slide-down py-1 text-center text-4xl font-bold md:text-6xl lg:text-7xl">
              <span className="bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-blue-600 [-webkit-text-fill-color:transparent] supports-[background-clip:text]:text-transparent">
                نیوتب مرورگرت رو
              </span>

              {/* <span className="mt-2 block text-gray-800">
                <TypeAnimation
                  sequence={[
                    "کارآمد کن!",
                    2000,
                    "جذاب کن!",
                    2000,
                    "حرفه‌ای کن!",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                  cursor={true}
                />
              </span> */}
            </h1>

            <p className="animate-fade-in-up mx-auto max-w-3xl text-center text-sm font-light text-gray-600 md:text-xl">
              هر بار که تب جدید بازمی‌کنی، یه داشبورد شخصی پر از ویجت‌های مفید
              داری! دیگه نیازی نیست سایت‌های مختلف رو چک کنی - همه چیز یکجا در
              دسترسه ✨
            </p>

            <TrustStats />

            <DownloadButtons />
          </section>
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
