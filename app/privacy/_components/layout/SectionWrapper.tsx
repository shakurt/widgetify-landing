import { isLanguageFa } from "../../_lib/utils";

import type { Language } from "../../_lib/types";

type SectionWrapperProps = {
  titleEn: string;
  titleFa: string;
  children: React.ReactNode;
  lang: Language;
  ariaLabel: string;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  titleEn,
  titleFa,
  children,
  lang,
  ariaLabel,
}) => {
  return (
    <section
      aria-labelledby={`section-${ariaLabel.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <h2
        id={`section-${ariaLabel.replace(/\s+/g, "-").toLowerCase()}`}
        className="mb-3 border-b pb-2 text-base font-bold sm:text-lg md:text-xl"
        {...(!isLanguageFa(lang) && {
          style: { fontFamily: "system-ui, -apple-system, sans-serif" },
        })}
      >
        {isLanguageFa(lang) ? titleFa : titleEn}
      </h2>
      <div
        className={`space-y-2 text-sm text-gray-700 sm:space-y-3 sm:text-base ${isLanguageFa(lang) ? "mr-3 sm:mr-4" : "ml-3 sm:ml-4"}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
