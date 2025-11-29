import { FaChrome, FaEdge, FaFirefox, FaOpera, FaBrave } from "react-icons/fa6";

import { CHROME_EXTENSION_URL } from "@/constants";

import DownloadButtonChrome from "./DownloadButtonPrimary";
import DownloadButtonSecondary from "./DownloadButtonSecondary";

const DownloadButtons = () => {
  return (
    <section
      className="animate-fade-in-up mb-10 flex flex-col items-center"
      aria-label="Download Buttons Section"
    >
      <DownloadButtonChrome />

      <div
        className="mt-6 flex flex-wrap justify-center gap-3"
        aria-label="Secondary Browsers Container"
      >
        <DownloadButtonSecondary
          show={false}
          name="گوگل کروم"
          icon={FaChrome}
          url={CHROME_EXTENSION_URL}
          isAvailable={true}
        />
        <DownloadButtonSecondary
          name="اج"
          icon={FaEdge}
          url={CHROME_EXTENSION_URL}
          isAvailable={true}
        />
        <DownloadButtonSecondary
          name="Brave"
          icon={FaBrave}
          url={CHROME_EXTENSION_URL}
          isAvailable={true}
        />
        <DownloadButtonSecondary
          name="مرورگر اپرا"
          icon={FaOpera}
          url="https://t.me/widgetify_help/23"
          isAvailable={true}
        />
        <DownloadButtonSecondary
          name="فایرفاکس"
          icon={FaFirefox}
          url="https://addons.mozilla.org/en-US/firefox/addon/widgetify/"
          isAvailable={false}
          comingSoon={true}
        />
      </div>

      <p
        className="mt-3 max-w-xl text-center text-sm text-gray-500"
        aria-label="Install Help Text"
      >
        نصب خیلی راحته! فقط کافیه روی مرورگر مورد نظرت کلیک کنی و دکمه "Add to
        Chrome" رو بزنی
      </p>
    </section>
  );
};

export default DownloadButtons;
