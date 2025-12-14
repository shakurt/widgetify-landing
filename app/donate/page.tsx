import Link from "next/link";

import { LuSparkles, LuExternalLink } from "react-icons/lu";

import AnimateOnScroll from "@/components/animations/AnimateOnScroll";
import SupportersDonation from "@/components/home/SupportersDonation";
import { DONATE_LINK } from "@/constants";

export const metadata = {
  title: "حمایت از ویجتی‌فای | Support Widgetify",
  description:
    "با حمایت مالی از ویجتی‌فای، به ما کمک کنید تا خدمات بهتری ارائه دهیم. Support Widgetify to help us provide better services.",
};

const DonationPage = () => {
  return (
    <article className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50">
      <header
        className="animate-fade-in relative mx-auto flex max-w-6xl flex-col items-center px-4 py-12 text-center sm:py-16 md:py-20 lg:py-32"
        role="banner"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="animate-blob absolute top-10 right-0 h-64 w-64 rounded-full bg-blue-400 opacity-20 mix-blend-multiply blur-3xl sm:h-80 sm:w-80 md:top-20 md:right-10"
            aria-hidden="true"
          />

          <div
            className="animate-blob absolute bottom-10 left-0 h-64 w-64 rounded-full bg-pink-400 opacity-20 mix-blend-multiply blur-3xl [animation-delay:2s] sm:h-80 sm:w-80 md:bottom-20 md:left-10"
            aria-hidden="true"
          />
        </div>
        <h1 className="animate-slide-down mb-4 block bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-blue-600 [-webkit-text-fill-color:transparent] supports-[background-clip:text]:text-transparent sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
          حمایت از ویجتی‌فای
        </h1>

        <p className="animate-slide-up mx-auto mb-6 max-w-3xl px-4 text-base leading-relaxed font-light text-gray-700 sm:mb-8 sm:text-lg md:text-xl lg:text-2xl">
          با حمایت مالی از ویجتی‌فای، به ما کمک کنید تا خدمات بهتری ارائه دهیم.
          تمامی مبالغ دریافتی صرف توسعه و نگهداری پروژه خواهد شد.
        </p>

        <Link
          href={DONATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-scale-in inline-flex items-center gap-1.5 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none sm:gap-2 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-lg"
          aria-label="حمایت مالی از ویجتی‌فای - Support Widgetify financially"
        >
          <span>🎁 حمایت کنید</span>
          <LuExternalLink
            size={18}
            className="mr-1 sm:mr-2 sm:h-5 sm:w-5"
            aria-hidden="true"
          />
        </Link>
      </header>

      <AnimateOnScroll className="slide-up">
        <section
          className="container mt-8 sm:mt-12 md:mt-16"
          aria-labelledby="recent-donations-heading"
        >
          <div className="animate-fade-in mb-6 text-center sm:mb-8">
            <h2
              id="recent-donations-heading"
              className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
            >
              آخرین حمایت‌ها
            </h2>
            <p className="mx-auto max-w-2xl px-4 text-sm leading-relaxed font-light text-gray-700 sm:text-base">
              حمایت‌های شما به ما انگیزه می‌دهد تا ویجتی‌فای را روز به روز بهتر
              کنیم. با تشکر از اعتماد شما.
            </p>
          </div>
          <SupportersDonation />
        </section>
      </AnimateOnScroll>

      <section
        className="animate-fade-in-up relative container py-12 sm:py-16 md:py-20"
        aria-labelledby="final-cta-heading"
      >
        <div className="overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 p-8 text-center text-white shadow-2xl sm:rounded-3xl sm:p-12">
          <div className="relative">
            <div className="animate-bounce-slow mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm sm:mb-8 sm:h-20 sm:w-20">
              <LuSparkles
                size={32}
                className="sm:h-10 sm:w-10"
                aria-hidden="true"
              />
            </div>
            <h2
              id="final-cta-heading"
              className="mb-4 text-2xl leading-tight font-bold sm:mb-6 sm:text-3xl md:text-4xl"
            >
              همین الان از ویجتی‌فای حمایت کنید
            </h2>
            <p className="mx-auto mb-6 max-w-2xl px-4 text-base leading-relaxed text-blue-100 sm:mb-8 sm:text-lg md:text-xl">
              با حمایت شما، ویجتی‌فای قدرتمندتر می‌شود و خدمات بهتری ارائه
              می‌دهد
            </p>
            <Link
              href={DONATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 focus:outline-none sm:gap-2 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-lg"
              aria-label="حمایت مالی از ویجتی‌فای - دومین دکمه"
            >
              <span>💙 حمایت مالی</span>
              <LuExternalLink
                size={18}
                className="sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default DonationPage;
