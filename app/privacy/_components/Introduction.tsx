import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";
type IntroductionProps = {
  lang: Language;
};

const Introduction: React.FC<IntroductionProps> = ({ lang }) => {
  return (
    <div className="my-5 space-y-4 text-gray-700">
      {isLanguageFa(lang) ? (
        <>
          <p>
            ویجتی‌فای یک افزونه مرورگر با هدف مشخص نمایش ویجت‌های کاربردی در
            نیـو‌تب است. این سیاست حریم خصوصی توضیح می‌دهد که چگونه ما با
            داده‌های شما در این افزونه برخورد می‌کنیم.
          </p>
          <p>
            با استفاده از افزونه ویجتی‌فای، شما با این سیاست‌های حریم خصوصی
            موافقت می‌کنید.
          </p>
        </>
      ) : (
        <>
          <p>
            Widgetify is a browser extension with the specific purpose of
            displaying useful widgets in the new tab. This privacy policy
            explains how we handle your data in this extension.
          </p>
          <p>
            By using the Widgetify extension, you agree to these privacy
            policies.
          </p>
        </>
      )}
    </div>
  );
};

export default Introduction;
