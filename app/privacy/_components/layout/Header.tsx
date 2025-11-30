import Link from "next/link";

import { Globe, Shield } from "lucide-react";

import { isLanguageFa } from "../../_lib/utils";

import type { Language } from "../../_lib/types";
type HeaderProps = {
  lang: Language;
};

const Header: React.FC<HeaderProps> = ({ lang }) => {
  return (
    <header className="border-b bg-gray-50 py-8">
      <div className="container max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3" aria-label="title group">
            <Shield size={24} className="text-blue-600" />
            <h2 className="text-2xl font-bold">
              {isLanguageFa(lang)
                ? "سیاست حفظ حریم خصوصی ویجتی‌فای"
                : "Widgetify Privacy Policy"}
            </h2>
          </div>
          <Link
            href={`/privacy?lang=${isLanguageFa(lang) ? "en" : "fa"}`}
            className="flex cursor-pointer items-center gap-1 rounded-md border bg-white px-3 py-1 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50"
          >
            <Globe size={16} />
            <span>{isLanguageFa(lang) ? "English" : "فارسی"}</span>
          </Link>
        </div>
        <p
          className="mt-2 text-gray-500"
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
