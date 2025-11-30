import SectionWrapper from "./layout/SectionWrapper";
import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";

type RetentionProps = {
  lang: Language;
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
