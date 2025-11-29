import { isLanguageFa } from "../_lib/utils";
import Title from "./ui/Title";

import type { Language } from "../_lib/types";

type CollectedInformationProps = {
  lang: Language;
};

const CollectedInformation: React.FC<CollectedInformationProps> = ({
  lang,
}) => {
  return (
    <section aria-label="Collected Information Section">
      {isLanguageFa(lang) ? (
        <Title text="۱. اطلاعات جمع‌آوری شده" lang="fa" />
      ) : (
        <Title text="1. Collected Information" lang="en" />
      )}

      <div
        className={`space-y-3 text-gray-700 ${isLanguageFa(lang) ? "mr-4" : "ml-4"}`}
      >
        {isLanguageFa(lang) ? (
          <>
            <p>
              <strong>
                ویجتی‌فای هیچ داده شخصی را به طور پیش‌فرض جمع‌آوری نمی‌کند.
              </strong>{" "}
              تمام اطلاعات نمایش داده شده (مانند آب و هوا، قیمت ارزها و غیره)
              مستقیماً از منابع عمومی دریافت شده و در دستگاه شما پردازش می‌شوند.
            </p>
            <p>
              افزونه ویجتی‌فای تنها از ذخیره‌سازی محلی (Local Storage) برای حفظ
              تنظیمات شما استفاده می‌کند. این داده‌ها فقط در دستگاه خودتان ذخیره
              می‌شوند و ما به آن‌ها دسترسی نداریم.
            </p>
            <p>
              <strong>اطلاعات اختیاری:</strong> در صورت تمایل به همگام‌سازی
              تنظیمات بین دستگاه‌های مختلف، ما ممکن است نام و آدرس ایمیل شما را
              ذخیره کنیم. ارائه این اطلاعات کاملاً اختیاری است و تأثیری در
              عملکرد اصلی افزونه ندارد.
            </p>
          </>
        ) : (
          <>
            <p>
              <strong>
                Widgetify does not collect any personal data by default.
              </strong>{" "}
              All displayed information (such as weather, cryptocurrency prices,
              etc.) is received directly from public sources and processed on
              your device.
            </p>
            <p>
              The Widgetify extension only uses local storage to maintain your
              settings. This data is stored only on your own device, and we do
              not have access to it.
            </p>
            <p>
              <strong>Optional information:</strong> If you wish to synchronize
              settings across different devices, we may store your name and
              email address. Providing this information is completely optional
              and does not affect the main functionality of the extension.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default CollectedInformation;
