import { MAILTO_PRIVACY } from "@/constants";

import SectionWrapper from "./layout/SectionWrapper";
import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";
type DataDeletionProps = {
  lang: Language;
};

const DataDeletion: React.FC<DataDeletionProps> = ({ lang }) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="9. Data Deletion"
      titleFa="۹. حذف داده‌ها"
      ariaLabel="Data Deletion Section"
    >
      {isLanguageFa(lang) ? (
        <p>
          کاربران می‌توانند در هر زمان درخواست حذف کامل داده‌های خود را با ارسال
          ایمیل به{" "}
          <a href={MAILTO_PRIVACY} className="text-blue-600 hover:underline">
            privacy@widgetify.ir
          </a>{" "}
          ثبت کنند.
        </p>
      ) : (
        <>
          <p>
            Users can request complete deletion of their data at any time by
            sending an email to{" "}
            <a href={MAILTO_PRIVACY} className="text-blue-600 hover:underline">
              privacy@widgetify.ir
            </a>
            .
          </p>
        </>
      )}
    </SectionWrapper>
  );
};

export default DataDeletion;
