import SectionWrapper from "@landing/components/layout/privacy/SectionWrapper";
import type { PrivacyLanguage } from "@/lib/types";
import { isLanguageFa } from "@/lib/utils";

type DataSharingProps = {
  lang: PrivacyLanguage;
};

const DataSharing: React.FC<DataSharingProps> = ({ lang }) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="6. Data Sharing"
      titleFa="۶. اشتراک‌گذاری داده‌ها"
      ariaLabel="Sharing Data Section"
    >
      <p className="leading-relaxed">
        {isLanguageFa(lang)
          ? "ویجتیفای هیچ داده کاربری را با اشخاص ثالث به اشتراک نمی‌گذارد."
          : "Widgetify does not share any user data with third parties."}
      </p>
    </SectionWrapper>
  );
};

export default DataSharing;
