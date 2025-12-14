import SectionWrapper from "./layout/SectionWrapper";
import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";

type DataSharingProps = {
  lang: Language;
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
