import { LuMail } from "react-icons/lu";

import { MAILTO_PRIVACY } from "@/constants";

import SectionWrapper from "./layout/SectionWrapper";
import { isLanguageFa } from "../_lib/utils";

import type { Language } from "../_lib/types";

type ContactUsProps = {
  lang: Language;
};

const ContactUs: React.FC<ContactUsProps> = ({ lang }) => {
  return (
    <SectionWrapper
      lang={lang}
      titleEn="11. Contact Us"
      titleFa="۱۱. تماس با ما"
      ariaLabel="Contact Us Section"
    >
      {isLanguageFa(lang) ? (
        <>
          <p className="leading-relaxed">
            اگر سؤالی درباره این سیاست حریم خصوصی دارید، لطفاً از طریق ایمیل زیر
            با ما تماس بگیرید:
          </p>
          <a
            className="mt-2 flex w-fit items-center gap-1.5 text-sm text-blue-600 underline-offset-2 hover:underline sm:gap-2 sm:text-base"
            href={MAILTO_PRIVACY}
            aria-label="Send email to privacy@widgetify.ir"
          >
            <LuMail
              size={16}
              className="mb-0.5 sm:h-4.5 sm:w-4.5"
              aria-hidden="true"
            />
            <span>privacy@widgetify.ir</span>
          </a>
        </>
      ) : (
        <>
          <p className="leading-relaxed">
            If you have any questions about this privacy policy, please contact
            us via the email below:
          </p>
          <a
            className="mt-2 flex w-fit items-center gap-1.5 text-sm text-blue-600 underline-offset-2 hover:underline sm:gap-2 sm:text-base"
            href={MAILTO_PRIVACY}
            aria-label="Send email to privacy@widgetify.ir"
          >
            <MdOutgoingMail
              size={16}
              className="mb-0.5 scale-x-[-1] sm:h-[18px] sm:w-[18px]"
              aria-hidden="true"
            />
            <span>privacy@widgetify.ir</span>
          </a>
        </>
      )}
    </SectionWrapper>
  );
};

export default ContactUs;
