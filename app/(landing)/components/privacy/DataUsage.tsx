import SectionWrapper from "@/components/layout/privacy/SectionWrapper";
import type { PrivacyLanguage } from "@/lib/types";
import { isLanguageFa } from "@/lib/utils";

type DataUsageProps = {
  lang: PrivacyLanguage;
};

const DataUsage: React.FC<DataUsageProps> = ({ lang }) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="4. Data Usage"
      titleFa="۴. استفاده از داده‌ها"
      ariaLabel="Data Usage Section"
    >
      <p className="leading-relaxed">
        {isLanguageFa(lang)
          ? "در صورتی که شما به صورت اختیاری نام و ایمیل خود را ارائه کنید، ما از این اطلاعات تنها برای همگام‌سازی تنظیمات شما بین دستگاه‌های مختلف استفاده می‌کنیم."
          : "If you optionally provide your name and email, we will only use this information to synchronize your settings across different devices."}
      </p>
    </SectionWrapper>
  );
};

export default DataUsage;
