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
    <section aria-label={ariaLabel}>
      <h2
        className="mb-3 border-b pb-2 text-xl font-bold"
        {...(!isLanguageFa(lang) && {
          style: { fontFamily: "system-ui, -apple-system, sans-serif" },
        })}
      >
        {isLanguageFa(lang) ? titleFa : titleEn}
      </h2>
      <div
        className={`space-y-3 text-gray-700 ${isLanguageFa(lang) ? "mr-4" : "ml-4"}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
