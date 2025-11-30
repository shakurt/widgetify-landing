import Link from "next/link";

import { GITHUB_LINK } from "@/constants";

import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";

type OpenSourceNote = {
  lang: Language;
};

const OpenSourceNote: React.FC<OpenSourceNote> = ({ lang }) => {
  return (
    <aside
      className="mt-6 rounded-lg border bg-gray-50 p-3 text-sm text-gray-700 sm:mt-8 sm:p-4 sm:text-base"
      role="note"
      aria-label="Open source information"
    >
      <p className="leading-relaxed">
        {isLanguageFa(lang) ? (
          <>
            <strong>توجه:</strong> ویجتی‌فای یک پروژه متن‌باز است و کد آن به
            صورت عمومی در
            <Link
              href={GITHUB_LINK}
              className="mx-1 text-blue-600 underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Widgetify on GitHub"
            >
              گیت‌هاب
            </Link>
            قابل دسترسی است.
          </>
        ) : (
          <>
            <strong>Note:</strong> Widgetify is an open-source project and its
            code is publicly available on
            <Link
              href={GITHUB_LINK}
              className="mx-1 text-blue-600 underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Widgetify on GitHub"
            >
              GitHub
            </Link>
            .
          </>
        )}
      </p>
    </aside>
  );
};

export default OpenSourceNote;
