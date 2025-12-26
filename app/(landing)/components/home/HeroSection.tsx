import HeroDownloadButtonsSection from "@landing/components/home/HeroDownloadButtonsSection";
import HeroTrustStatsSection from "@landing/components/home/HeroTrustStatsSection";
import HeroAnimationType from "@landing/components/home/HeroTypeAnimation";
const HeroSection = () => {
  return (
    <section
      className="animate-fade-in flex flex-col items-center justify-center gap-4"
      aria-label="بخش اصلی صفحه فرود"
    >
      <h1 className="animate-slide-down py-1 text-center text-4xl font-bold md:text-6xl lg:text-7xl">
        <span className="from-primary text-primary bg-linear-to-r to-[#304ffe] bg-clip-text leading-relaxed [-webkit-text-fill-color:transparent] supports-[background-clip:text]:text-transparent">
          نیوتب مرورگرت رو با ویجتیفای
        </span>

        <HeroAnimationType />
      </h1>

      <p
        className="animate-fade-in-up mx-auto max-w-3xl text-center text-sm leading-relaxed font-light text-gray-600 md:text-xl md:leading-relaxed"
        itemProp="description"
      >
        هر بار که تب جدید بازمی‌کنی، یه داشبورد شخصی پر از ویجت‌های مفید داری!
        دیگه نیازی نیست سایت‌های مختلف رو چک کنی - همه چیز یکجا در دسترسه ✨
      </p>

      <HeroTrustStatsSection />

      <HeroDownloadButtonsSection />
    </section>
  );
};

export default HeroSection;
