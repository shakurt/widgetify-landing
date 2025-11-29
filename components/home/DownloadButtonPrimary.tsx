import Link from "next/link";

import { FaChrome } from "react-icons/fa6";

import { CHROME_EXTENSION_URL } from "@/constants";

const DownloadButtonChrome = () => {
  return (
    <Link
      href={CHROME_EXTENSION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group focus:ring-opacity-50 relative flex transform items-center rounded-2xl bg-linear-to-r from-blue-600 to-blue-700 px-12 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
      aria-label="دانلود افزونه ویجتیفای برای گوگل کروم - بهترین افزونه نیو تب"
    >
      <FaChrome
        size={32}
        className="ml-4 transition-transform group-hover:scale-110"
      />
      <span className="text-2xl">دانلود برای گوگل کروم</span>

      <span className="absolute -top-2 -right-2 animate-pulse rounded-full bg-yellow-300 px-2 py-1 text-xs font-bold text-blue-700">
        محبوب‌ترین
      </span>
    </Link>
  );
};

export default DownloadButtonChrome;
