import SectionWrapper from "@landing/components/layout/privacy/SectionWrapper";
import type { PrivacyLanguage } from "@/lib/types";
import { isLanguageFa } from "@/lib/utils";

type RetentionProps = {
  lang: PrivacyLanguage;
};

const Retention: React.FC<RetentionProps> = ({ lang }) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="8. Data Retention"
      titleFa="۸. نگه‌داری داده‌ها"
      ariaLabel="Data Retention Section"
    >
      <p className="leading-relaxed">
        {isLanguageFa(lang)
          ? "داده‌های مرتبط با تنظیمات کاربر و اطلاعات ورود (در صورت فعال‌سازی همگام‌سازی) تنها تا زمانی که کاربر از سرویس استفاده می‌کند نگهداری می‌شوند. در صورت غیرفعال شدن حساب یا عدم استفاده طولانی‌مدت، این داده‌ها ممکن است به صورت خودکار حذف شوند."
          : "User settings data and login information (if synchronization is enabled) are only retained as long as the user uses the service. In case of account deactivation or extended inactivity, this data may be automatically deleted."}
      </p>
    </SectionWrapper>
  );
};

export default Retention;
