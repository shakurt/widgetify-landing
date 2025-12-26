// import AnimateOnScroll from "@landing/components/animations/AnimateOnScroll";

import type { Metadata } from "next";

import ContributorsSection from "@landing/components/home/ContributorsSection";
import FeaturesSection from "@landing/components/home/FeaturesSection";
import HeroSection from "@landing/components/home/HeroSection";
import ImageSliderSection from "@landing/components/home/ImageSliderSection";
import MoreFeaturesComingSection from "@landing/components/home/MoreFeaturesComingSection";
import SupportersSection from "@landing/components/home/SupportersSection";

export const metadata: Metadata = {
  title:
    "ویجتیفای - افزونه رایگان مرورگر برای افزایش بهره‌وری و مدیریت کارها | Widgetify",
  description:
    "ویجتیفای یک افزونه متن‌باز و رایگان برای کروم و فایرفاکس است. با ویجت‌های هوشمند نیوتب، کارهای روزمره خود را مدیریت کنید. شامل مدیریت وظایف، یادداشت، تقویم، آب و هوا و ادغام با گوگل کلندر. دانلود رایگان و نصب آسان.",
  keywords: [
    "ویجتیفای",
    "دانلود ویجتیفای",
    "افزونه مرورگر فارسی",
    "کروم اکستنشن",
    "فایرفاکس ادان",
    "بهره‌وری",
    "مدیریت وظایف",
    "یادداشت آنلاین",
    "نیوتب",
    "ویجت مرورگر",
    "متن‌باز",
    "رایگان",
    "گوگل کلندر",
    "مدیریت زمان",
    "تودو لیست",
    "یادآوری",
    "Widgetify",
    "productivity extension",
    "task manager",
    "new tab extension",
    "free browser extension",
    "open source",
  ],
  openGraph: {
    title: "ویجتیفای - افزونه رایگان مرورگر برای افزایش بهره‌وری | Widgetify",
    description:
      "افزونه متن‌باز و رایگان برای مدیریت کارها، یادداشت‌برداری و افزایش بهره‌وری در مرورگر کروم و فایرفاکس. دانلود و نصب رایگان.",
    url: "https://widgetify.app",
    type: "website",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "ویجتیفای - افزونه بهره‌وری برای مرورگر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ویجتیفای - افزونه رایگان مرورگر برای افزایش بهره‌وری",
    description: "افزونه متن‌باز و رایگان برای مدیریت کارها و افزایش بهره‌وری",
    images: ["/twitter-home.png"],
  },
  alternates: {
    canonical: "https://widgetify.app",
  },
};

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
