import DownloadButtons from "@/components/home/DownloadButtons";
import HeroAnimationType from "@/components/home/HeroTypeAnimation";
import TrustStats from "@/components/home/TrustStats";
const Hero = () => {
  return (
    <section
      className="animate-fade-in flex flex-col items-center justify-center gap-4"
      aria-label="بخش اصلی صفحه فرود"
    >
      <h2 className="animate-slide-down py-1 text-center text-4xl font-bold md:text-6xl lg:text-7xl">
        <span className="bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-blue-600 [-webkit-text-fill-color:transparent] supports-[background-clip:text]:text-transparent">
          نیوتب مرورگرت رو
        </span>
        <HeroAnimationType />
      </h2>

      <p className="animate-fade-in-up mx-auto max-w-3xl text-center text-sm leading-relaxed font-light text-gray-600 md:text-xl">
        هر بار که تب جدید بازمی‌کنی، یه داشبورد شخصی پر از ویجت‌های مفید داری!
        دیگه نیازی نیست سایت‌های مختلف رو چک کنی - همه چیز یکجا در دسترسه ✨
      </p>

      <TrustStats />

      <DownloadButtons />
    </section>
  );
};

export default Hero;
