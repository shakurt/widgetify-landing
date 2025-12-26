import Link from "next/link";

import { LuGlobe, LuShield } from "react-icons/lu";

import type { PrivacyLanguage } from "@/lib/types";
import { isLanguageFa } from "@/lib/utils";

type HeaderProps = {
  lang: PrivacyLanguage;
};

const Header: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <header className="py-6 md:py-8" role="banner">
      <div className="container max-w-4xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <LuShield
              size={20}
              className="text-primary sm:h-6 sm:w-6"
              aria-hidden="true"
            />
            <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
              {isLanguageFa(lang)
                ? "سیاست حفظ حریم خصوصی ویجتیفای"
                : "Widgetify Privacy Policy"}
            </h1>
          </div>
          <Link
            href={`/privacy?lang=${isLanguageFa(lang) ? "en" : "fa"}`}
            className="flex w-fit items-center gap-1 rounded-md border bg-white px-3 py-1.5 text-xs text-gray-700 transition-colors duration-200 hover:bg-gray-50 sm:text-sm"
            aria-label={
              isLanguageFa(lang) ? "Switch to English" : "تغییر به فارسی"
            }
          >
            <LuGlobe
              size={14}
              className={`sm:h-4 sm:w-4 ${isLanguageFa(lang) && "mb-1"}`}
              aria-hidden="true"
            />
            <span>{isLanguageFa(lang) ? "English" : "فارسی"}</span>
          </Link>
        </div>
        <p
          className="mt-3 text-xs text-gray-500 sm:text-sm"
          {...(!isLanguageFa(lang) && {
            style: { fontFamily: "system-ui, -apple-system, sans-serif" },
          })}
        >
          {isLanguageFa(lang)
            ? "آخرین به‌روزرسانی: 26 تیر ۱۴۰۴"
            : "Last updated: July 17, 2025"}
        </p>
      </div>
    </header>
  );
};

export default Header;
