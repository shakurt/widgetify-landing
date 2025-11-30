import SectionWrapper from "./layout/SectionWrapper";
import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";

type GoogleIntegrationProps = {
  lang: Language;
};

const GoogleIntegration: React.FC<GoogleIntegrationProps> = ({ lang }) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="3. Optional Google Account Integration"
      titleFa="۳. اتصال اختیاری حساب گوگل"
      ariaLabel="Optional Google Account Integration Section"
    >
      {isLanguageFa(lang) ? (
        <>
          <p className="leading-relaxed">
            ویجتی‌فای امکان اتصال اختیاری به حساب گوگل شما را فراهم می‌کند تا
            بتوانید از ویجت‌های مرتبط استفاده کنید. این اتصال کاملاً اختیاری است
            و شامل دو گزینه زیر می‌باشد:
          </p>
          <ul
            className="mr-5 list-disc space-y-1.5 sm:mr-6 sm:space-y-2"
            role="list"
          >
            <li className="leading-relaxed">
              <strong>دسترسی خواندنی گوگل کلندر:</strong> برای نمایش رویدادهای
              آینده در ویجت تقویم
            </li>
          </ul>
          <div
            className="mt-3 border-r-4 border-blue-500 bg-blue-50 p-2.5 sm:mt-4 sm:p-3"
            role="note"
            aria-label="Important security information"
          >
            <p className="text-xs leading-relaxed text-blue-800 sm:text-sm">
              <span className="font-bold">مهم:</span> هیچ‌یک از این داده‌ها توسط
              ما ذخیره نمی‌شوند. ما صرفاً به عنوان واسط عمل کرده و داده‌ها را
              مستقیماً از گوگل دریافت کرده و به افزونه ارسال می‌کنیم. تمام
              ارتباطات از طریق پروتکل‌های امن HTTPS/TLS انجام شده و توکن‌های
              دسترسی دارای مدت زمان محدود هستند.
            </p>
          </div>
        </>
      ) : (
        <>
          <p className="leading-relaxed">
            Widgetify provides optional Google account integration to enable you
            to use related widgets. This connection is completely optional and
            includes the following two options:
          </p>
          <ul
            className="ml-5 list-disc space-y-1.5 sm:ml-6 sm:space-y-2"
            role="list"
          >
            <li className="leading-relaxed">
              <strong>Google Calendar read access:</strong> To display upcoming
              events in the calendar widget
            </li>
          </ul>
          <div
            className="mt-3 border-l-4 border-blue-500 bg-blue-50 p-2.5 sm:mt-4 sm:p-3"
            role="note"
            aria-label="Important security information"
          >
            <p className="text-xs leading-relaxed text-blue-800 sm:text-sm">
              <span className="font-bold">Important:</span> None of this data is
              stored by us. We merely act as an intermediary, receiving data
              directly from Google and sending it to the extension. All
              communications are conducted over secure HTTPS/TLS protocols, and
              access tokens have limited lifetimes.
            </p>
          </div>
        </>
      )}
    </SectionWrapper>
  );
};

export default GoogleIntegration;
