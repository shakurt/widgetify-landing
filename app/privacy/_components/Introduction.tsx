import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";
type IntroductionProps = {
  lang: Language;
};

const Introduction: React.FC<IntroductionProps> = ({ lang }) => {
  return (
    <section
      className="my-4 space-y-3 text-sm text-gray-700 sm:my-5 sm:space-y-4 sm:text-base"
      aria-label="Privacy Policy Introduction"
    >
      {isLanguageFa(lang) ? (
        <>
          <p className="leading-relaxed">
            ویجتیفای یک افزونه مرورگر با هدف مشخص نمایش ویجت‌های کاربردی در
            نیـو‌تب است. این سیاست حریم خصوصی توضیح می‌دهد که چگونه ما با
            داده‌های شما در این افزونه برخورد می‌کنیم.
          </p>
          <p className="leading-relaxed">
            با استفاده از افزونه ویجتیفای، شما با این سیاست‌های حریم خصوصی
            موافقت می‌کنید.
          </p>
        </>
      ) : (
        <>
          <p className="leading-relaxed">
            Widgetify is a browser extension with the specific purpose of
            displaying useful widgets in the new tab. This privacy policy
            explains how we handle your data in this extension.
          </p>
          <p className="leading-relaxed">
            By using the Widgetify extension, you agree to these privacy
            policies.
          </p>
        </>
      )}
    </section>
  );
};

export default Introduction;
