import Link from "next/link";

import { GITHUB_LINK } from "@/constants";

import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";

type OpenSourceNote = {
  lang: Language;
};

const OpenSourceNote: React.FC<OpenSourceNote> = ({ lang }) => {
  return (
    <p className="mt-8 rounded-lg border bg-gray-50 p-4 text-gray-700">
      {isLanguageFa(lang) ? (
        <>
          <strong>توجه:</strong> ویجتی‌فای یک پروژه متن‌باز است و کد آن به صورت
          عمومی در
          <Link
            href={GITHUB_LINK}
            className="mx-1 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            گیت‌هاب{" "}
          </Link>
          قابل دسترسی است.{" "}
        </>
      ) : (
        <>
          <strong>Note:</strong> Widgetify is an open-source project and its
          code is publicly available on
          <Link
            href={GITHUB_LINK}
            className="mx-1 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          .
        </>
      )}
    </p>
  );
};

export default OpenSourceNote;
