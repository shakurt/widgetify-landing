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
          <p>
            افزونه ویجتی‌فای فقط به دسترسی‌های ضروری برای عملکرد اصلی خود نیاز
            دارد:
          </p>
          <ul className="mr-6 list-disc space-y-2">
            <li>دسترسی به نیـو‌تب برای نمایش ویجت‌ها</li>
            <li>
              دسترسی به اینترنت برای دریافت داده‌های عمومی مانند آب و هوا، قیمت
              ارزها و غیره
            </li>
          </ul>
        </>
      ) : (
        <>
          <p>
            The Widgetify extension only requires essential permissions for its
            main functionality:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Access to new tab for displaying widgets</li>
            <li>
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
