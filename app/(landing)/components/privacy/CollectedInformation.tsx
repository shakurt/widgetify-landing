import SectionWrapper from "@landing/components/layout/privacy/SectionWrapper";

import type { PrivacyLanguage } from "@/lib/types";
import { isLanguageFa } from "@/lib/utils";

type CollectedInformationProps = {
  lang: PrivacyLanguage;
};
const CollectedInformation: React.FC<CollectedInformationProps> = ({
  lang,
}) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="1. Collected Information"
      titleFa="۱. اطلاعات جمع‌آوری شده"
      ariaLabel="Collected Information Section"
    >
      {isLanguageFa(lang) ? (
        <>
          <p className="leading-relaxed">
            <strong>
              ویجتیفای هیچ داده شخصی را به طور پیش‌فرض جمع‌آوری نمی‌کند.
            </strong>{" "}
            تمام اطلاعات نمایش داده شده (مانند آب و هوا، قیمت ارزها و غیره)
            مستقیماً از منابع عمومی دریافت شده و در دستگاه شما پردازش می‌شوند.
          </p>
          <p className="leading-relaxed">
            افزونه ویجتیفای تنها از ذخیره‌سازی محلی (Local Storage) برای حفظ
            تنظیمات شما استفاده می‌کند. این داده‌ها فقط در دستگاه خودتان ذخیره
            می‌شوند و ما به آن‌ها دسترسی نداریم.
          </p>
          <p className="leading-relaxed">
            <strong>اطلاعات اختیاری:</strong> در صورت تمایل به همگام‌سازی
            تنظیمات بین دستگاه‌های مختلف، ما ممکن است نام و آدرس ایمیل شما را
            ذخیره کنیم. ارائه این اطلاعات کاملاً اختیاری است و تأثیری در عملکرد
            اصلی افزونه ندارد.
          </p>
        </>
      ) : (
        <>
          <p className="leading-relaxed">
            <strong>
              Widgetify does not collect any personal data by default.
            </strong>{" "}
            All displayed information (such as weather, cryptocurrency prices,
            etc.) is received directly from public sources and processed on your
            device.
          </p>
          <p className="leading-relaxed">
            The Widgetify extension only uses local storage to maintain your
            settings. This data is stored only on your own device, and we do not
            have access to it.
          </p>
          <p className="leading-relaxed">
            <strong>Optional information:</strong> If you wish to synchronize
            settings across different devices, we may store your name and email
            address. Providing this information is completely optional and does
            not affect the main functionality of the extension.
          </p>
        </>
      )}
    </SectionWrapper>
  );
};

export default CollectedInformation;
