import SectionWrapper from "./layout/SectionWrapper";
import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";

type DataProtectionProps = {
  lang: Language;
};

const DataProtection: React.FC<DataProtectionProps> = ({ lang }) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="5. Sensitive Data Protection"
      titleFa="۵. حفاظت از داده‌های حساس"
      ariaLabel="Sensitive Data Protection Section"
    >
      {isLanguageFa(lang) ? (
        <>
          <p>
            ویجتی‌فای از مکانیزم‌های قوی برای حفاظت از داده‌های حساس کاربران
            استفاده می‌کند:
          </p>
          <h3 className="mb-2 text-lg font-semibold">
            حفاظت از داده‌های گوگل:
          </h3>
          <ul className="mr-6 list-disc space-y-2">
            <li>
              <strong>OAuth 2.0:</strong> از پروتکل امن OAuth 2.0 برای احراز
              هویت و دسترسی به داده‌های گوگل استفاده می‌کنیم
            </li>
            <li>
              <strong>دسترسی محدود:</strong> فقط به حداقل دسترسی‌های مورد نیاز
              (تقویم) درخواست می‌کنیم
            </li>
            <li>
              <strong>عدم ذخیره‌سازی:</strong> داده‌های دریافتی از گوگل در
              سرورهای ما ذخیره نمی‌شوند
            </li>
            <li>
              <strong>انقضای توکن:</strong> توکن‌های دسترسی دارای مدت زمان محدود
              هستند و به طور منظم تجدید می‌شوند
            </li>
          </ul>
          <h3 className="text-lg font-semibold">حفاظت از داده‌های کاربر:</h3>
          <ul className="mr-6 list-disc space-y-2">
            <li>
              <strong>هشینگ رمز عبور:</strong> رمزهای عبور با استفاده از
              الگوریتم‌های قوی هش می‌شوند
            </li>
            <li>
              <strong>دسترسی محدود:</strong> فقط پرسنل مجاز به سیستم‌های پایگاه
              داده دسترسی دارند
            </li>
            <li>
              <strong>نظارت و لاگ:</strong> تمام دسترسی‌ها به داده‌ها ثبت و
              نظارت می‌شوند
            </li>
          </ul>
        </>
      ) : (
        <>
          <p>
            Widgetify employs robust mechanisms to protect users' sensitive
            data:
          </p>
          <h3 className="mb-2 text-lg font-semibold">
            Google Data Protection:
          </h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <p className="mt-2 text-gray-500"></p>
              <strong
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                OAuth 2.0:
              </strong>{" "}
              We use the secure OAuth 2.0 protocol for authentication and access
              to Google data
            </li>
            <li>
              <strong>Limited Access:</strong> We only request minimal necessary
              permissions (read-only calendar)
            </li>
            <li>
              <strong>No Storage:</strong> Data received from Google is not
              stored on our servers
            </li>
            <li>
              <strong>Token Expiration:</strong> Access tokens have limited
              lifetimes and are regularly refreshed
            </li>
          </ul>
          <h3 className="mb-2 text-lg font-semibold">User Data Protection:</h3>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong>Password Hashing:</strong> Passwords are hashed using
              strong algorithms
            </li>
            <li>
              <strong>Access Control:</strong> Only authorized personnel have
              access to database systems
            </li>
            <li>
              <strong>Monitoring and Logging:</strong> All data access is logged
              and monitored
            </li>
          </ul>
        </>
      )}
    </SectionWrapper>
  );
};

export default DataProtection;
