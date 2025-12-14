import SectionWrapper from "./layout/SectionWrapper";
import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";
type SecurityProps = {
  lang: Language;
};

const Security: React.FC<SecurityProps> = ({ lang }) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="7. Security"
      titleFa="۷. امنیت"
      ariaLabel="Security Section"
    >
      <p className="leading-relaxed">
        {isLanguageFa(lang)
          ? "ویجتیفای یک پروژه متن‌باز است و کد آن برای بررسی عمومی در دسترس است. این شفافیت به کاربران امکان می‌دهد از امنیت افزونه اطمینان حاصل کنند."
          : "Widgetify is an open-source project, and its code is available for public review. This transparency allows users to verify the extension's security."}
      </p>
    </SectionWrapper>
  );
};

export default Security;
