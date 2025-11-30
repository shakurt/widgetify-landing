import { MdOutgoingMail } from "react-icons/md";

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
          <p>
            اگر سؤالی درباره این سیاست حریم خصوصی دارید، لطفاً از طریق ایمیل زیر
            با ما تماس بگیرید:
          </p>
          <a
            className="mt-1 flex items-center gap-2 text-blue-600 hover:underline"
            href={MAILTO_PRIVACY}
          >
            <MdOutgoingMail size={17.5} className="mb-0.5" />
            privacy@widgetify.ir
          </a>
        </>
      ) : (
        <>
          <p>
            If you have any questions about this privacy policy, please contact
            us via the email below:
          </p>
          <a
            className="mt-1 flex items-center gap-2 text-blue-600 hover:underline"
            href={MAILTO_PRIVACY}
          >
            <MdOutgoingMail size={17.5} className="mb-0.5 scale-x-[-1]" />
            privacy@widgetify.ir
          </a>
        </>
      )}
    </SectionWrapper>
  );
};

export default ContactUs;
