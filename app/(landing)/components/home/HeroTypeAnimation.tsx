"use client";

import { TypeAnimation } from "react-type-animation";

const HeroAnimationType = () => {
  return (
    <span className="mt-2 block text-gray-800" aria-live="polite">
      <TypeAnimation
        sequence={["کارآمد کن!", 2000, "جذاب کن!", 2000, "حرفه‌ای کن!", 2000]}
        wrapper="span"
        speed={50}
        style={{ display: "inline-block" }}
        repeat={Infinity}
        cursor={true}
      />
      {/* Hidden text for SEO */}
      <span className="sr-only">کارآمد کن! جذاب کن! حرفه‌ای کن!</span>
    </span>
  );
};

export default HeroAnimationType;
