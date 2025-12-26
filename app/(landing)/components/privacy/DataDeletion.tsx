import SectionWrapper from "@/components/layout/privacy/SectionWrapper";
import { MAILTO_PRIVACY } from "@/lib/constants";
import type { PrivacyLanguage } from "@/lib/types";
import { isLanguageFa } from "@/lib/utils";

type DataDeletionProps = {
  lang: PrivacyLanguage;
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
        <p className="leading-relaxed">
          کاربران می‌توانند در هر زمان درخواست حذف کامل داده‌های خود را با ارسال
          ایمیل به{" "}
          <a
            href={MAILTO_PRIVACY}
            className="text-blue-600 underline-offset-2 hover:underline"
            aria-label="Send email to privacy@widgetify.ir"
          >
            privacy@widgetify.ir
          </a>{" "}
          ثبت کنند.
        </p>
      ) : (
        <p className="leading-relaxed">
          Users can request complete deletion of their data at any time by
          sending an email to{" "}
          <a
            href={MAILTO_PRIVACY}
            className="text-blue-600 underline-offset-2 hover:underline"
            aria-label="Send email to privacy@widgetify.ir"
          >
            privacy@widgetify.ir
          </a>
          .
        </p>
      )}
    </SectionWrapper>
  );
};

export default DataDeletion;
