import Link from "next/link";

import { FaDiscord, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

import {
  DESKTOP_LINK,
  DISCORD_LINK,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  PWA_LINK,
  TELEGRAM_LINK,
  X_LINK,
} from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-50 to-gray-100 pt-16 pb-8">
      <div className="container">
        <div className="mb-8 grid grid-cols-1 gap-8 pb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center">
              <img
                src="/icons/icon.png"
                alt="ویجتی‌فای"
                className="h-10 w-10 object-contain"
                // onError={(e) => {
                //   e.currentTarget.src = "https://placehold.co/96x96?text=W";
                // }}
              />
              <span className="mr-2 text-xl font-bold text-blue-600">
                ویجتی‌فای
              </span>
            </div>

            <p className="mb-6 font-light text-gray-600">
              محیط خسته کننده خودتون رو با ویجتی‌فای به یک محیط جذاب و کاربرپسند
              تبدیل کنید.
            </p>

            <div className="flex items-center gap-3">
              {/* Discord */}
              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-all hover:bg-indigo-500 hover:text-white hover:shadow"
                aria-label="Discord"
              >
                <FaDiscord />
              </a>

              {/* GitHub */}
              <a
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-all hover:bg-gray-800 hover:text-white hover:shadow"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              {/* Telegram */}
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-all hover:bg-blue-500 hover:text-white hover:shadow"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-all hover:bg-linear-to-br hover:from-pink-500 hover:to-purple-600 hover:text-white hover:shadow"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              {/* X */}
              <a
                href={X_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition-all hover:bg-blue-400 hover:text-white hover:shadow"
                aria-label="X"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">دسترسی سریع</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-blue-600"
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="transition-colors hover:text-blue-600"
                >
                  حمایت مالی
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-lg font-bold">محصولات</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/extension"
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  اکستنشن مرورگر
                </Link>
              </li>
              <li>
                <a
                  href={PWA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  نسخه وب (PWA)
                </a>
              </li>
              <li>
                <a
                  href={DESKTOP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  نسخه دسکتاپ
                </a>
              </li>
              <li>
                <span className="inline-flex cursor-not-allowed items-center text-gray-400">
                  نسخه اندروید
                  <span className="mr-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                    به زودی
                  </span>
                </span>
              </li>
              <li>
                <span className="inline-flex cursor-not-allowed items-center text-gray-400">
                  نسخه iOS
                  <span className="mr-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600">
                    به زودی
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright and Additional Links */}
        <div className="flex flex-col items-center justify-between border-t border-gray-200 pt-6 md:flex-row">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:mb-0">
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              قوانین و مقررات
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              حریم خصوصی
            </Link>
            <Link
              href="/faq"
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              سوالات متداول
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} ویجتی‌فای. تمامی حقوق محفوظ است.
            </p>
            <p className="mt-1 text-xs text-gray-400">
              ساخته شده با ❤️ در ایران
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
