import SectionWrapper from "./layout/SectionWrapper";
import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";

type ChangePrivacyProps = {
  lang: Language;
};

const ChangePrivacy: React.FC<ChangePrivacyProps> = ({ lang }) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="10. Changes to Privacy Policy"
      titleFa="۱۰. تغییرات در سیاست حریم خصوصی"
      ariaLabel="Changes to Privacy Policy Section"
    >
      <p className="leading-relaxed">
        {isLanguageFa(lang)
          ? "ممکن است این سیاست را به‌روزرسانی کنیم. در صورت ایجاد تغییرات اساسی، به کاربران اطلاع‌رسانی خواهیم کرد."
          : "We may update this policy. In case of significant changes, we will notify users."}
      </p>
    </SectionWrapper>
  );
};

export default ChangePrivacy;
