import SectionWrapper from "./layout/SectionWrapper";
import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";

type ExtensionPermissionsProps = {
  lang: Language;
};
const ExtensionPermissions: React.FC<ExtensionPermissionsProps> = ({
  lang,
}) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="2. Extension Permissions"
      titleFa="۲. دسترسی‌های افزونه"
      ariaLabel="Extension Permission Section"
    >
      {isLanguageFa(lang) ? (
        <>
          <p className="leading-relaxed">
            افزونه ویجتیفای فقط به دسترسی‌های ضروری برای عملکرد اصلی خود نیاز
            دارد:
          </p>
          <ul
            className="mr-5 list-disc space-y-1.5 sm:mr-6 sm:space-y-2"
            role="list"
          >
            <li className="leading-relaxed">
              دسترسی به نیـو‌تب برای نمایش ویجت‌ها
            </li>
            <li className="leading-relaxed">
              دسترسی به اینترنت برای دریافت داده‌های عمومی مانند آب و هوا، قیمت
              ارزها و غیره
            </li>
          </ul>
        </>
      ) : (
        <>
          <p className="leading-relaxed">
            The Widgetify extension only requires essential permissions for its
            main functionality:
          </p>
          <ul
            className="ml-5 list-disc space-y-1.5 sm:ml-6 sm:space-y-2"
            role="list"
          >
            <li className="leading-relaxed">
              Access to new tab for displaying widgets
            </li>
            <li className="leading-relaxed">
              Internet access to retrieve public data such as weather,
              cryptocurrency prices, etc.
            </li>
          </ul>
        </>
      )}
    </SectionWrapper>
  );
};

export default ExtensionPermissions;
