import { FaChrome } from "react-icons/fa6";

import { CHROME_EXTENSION_URL } from "@/lib/constants";

const HeroDownloadButtonPrimary = () => {
  return (
    <a
      href={CHROME_EXTENSION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group from-primary relative flex transform items-center rounded-2xl bg-linear-to-r to-[#304ffe] px-6 py-3 text-lg font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:from-[#304ffe] hover:to-[#1a237e] hover:shadow-2xl focus:ring-4 focus:ring-[#8b9eff] focus:outline-none md:px-8 md:py-4 md:text-xl lg:px-12 lg:py-5"
      aria-label="دانلود افزونه ویجتیفای برای گوگل کروم - بهترین افزونه نیو تب"
      title="دانلود افزونه ویجتیفای برای گوگل کروم"
    >
      <FaChrome
        className="ml-2 size-6 transition-transform group-hover:scale-110 md:ml-3 md:size-8 lg:ml-4 lg:size-10"
        aria-hidden="true"
      />
      <span className="text-lg md:text-xl lg:text-2xl">
        دانلود برای گوگل کروم
      </span>

      <span className="text-primary absolute -top-3 -right-1 animate-pulse rounded-full bg-yellow-300 px-1.5 py-0.5 text-xs font-bold md:-top-2">
        محبوب‌ترین
      </span>
    </a>
  );
};

export default HeroDownloadButtonPrimary;
