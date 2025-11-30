import Link from "next/link";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";
type BackButtonProps = {
  lang: Language;
};

const BackButton: React.FC<BackButtonProps> = ({ lang }) => {
  return (
    <div className="border-t py-4" aria-label="Back Link Button Container">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-blue-600 hover:underline"
        aria-label="Navigate Back To Home Page"
      >
        {isLanguageFa(lang) ? (
          <FaArrowRightLong size={16} />
        ) : (
          <FaArrowLeftLong size={16} />
        )}

        {isLanguageFa(lang) ? "بازگشت به صفحه اصلی" : "Return to Home Page"}
      </Link>
    </div>
  );
};

export default BackButton;
