import Link from "next/link";

import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

import type { PrivacyLanguage } from "@/lib/types";
import { isLanguageFa } from "@/lib/utils";

type BackButtonProps = {
  lang: PrivacyLanguage;
};

const BackButton: React.FC<BackButtonProps> = ({ lang }) => {
  return (
    <nav className="border-t pt-4 pb-2" aria-label="Privacy page navigation">
      <Link
        href="/"
        className="text-primary inline-flex items-center gap-1.5 text-sm underline-offset-2 hover:underline sm:text-base"
        aria-label={
          isLanguageFa(lang) ? "بازگشت به صفحه اصلی" : "Return to Home Page"
        }
      >
        {isLanguageFa(lang) ? (
          <LuArrowRight
            size={14}
            className="sm:h-4 sm:w-4"
            aria-hidden="true"
          />
        ) : (
          <LuArrowLeft size={14} className="sm:h-4 sm:w-4" aria-hidden="true" />
        )}
        <span>
          {isLanguageFa(lang) ? "بازگشت به صفحه اصلی" : "Return to Home Page"}
        </span>
      </Link>
    </nav>
  );
};

export default BackButton;
