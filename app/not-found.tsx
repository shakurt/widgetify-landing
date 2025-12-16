"use client";

import Link from "next/link";

import { LuArrowLeft, LuHouse, LuSearch } from "react-icons/lu";

import { GITHUB_LINK } from "@/lib/constants";

const NotFound = () => {
  return (
    <section dir="rtl" className="w-full">
      <section className="my-4 md:my-6 lg:my-8">
        <div className="container rounded-lg bg-linear-to-br from-blue-600 to-purple-700 py-10 text-white md:py-12 lg:py-16">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 md:h-20 md:w-20">
              <LuSearch className="h-8 w-8 text-white md:h-10 md:w-10" />
            </div>

            <h1 className="mb-3 text-4xl font-bold md:text-5xl lg:text-7xl">
              404
            </h1>
            <h2 className="mb-4 text-lg font-bold text-blue-50 md:mb-6 md:text-2xl lg:text-3xl">
              متاسفیم، صفحه‌ای که به دنبال آن بودید وجود ندارد
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-blue-100 md:text-base">
              ممکن است آدرس اشتباه وارد کرده باشید یا این صفحه منتقل یا حذف شده
              باشد. می‌توانید به صفحه اصلی بازگردید یا از لینک‌های زیر استفاده
              کنید.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-8 text-center md:py-10 lg:py-12">
        <div
          className="mx-auto mb-10 flex max-w-sm flex-col items-center justify-center gap-3 md:mb-12 md:max-w-lg lg:mb-14 lg:max-w-2xl lg:flex-row lg:gap-4"
          aria-label="دکمه‌های عملیات"
        >
          <Link
            href="/"
            className="flex w-full items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-purple-700 px-4 py-2.5 font-medium text-white transition hover:from-blue-700 hover:to-purple-800 active:scale-95 md:px-6 md:py-3"
          >
            صفحه اصلی
            <LuHouse className="mr-2 mb-px h-5 w-5" />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 active:scale-95 md:px-6 md:py-3"
          >
            بازگشت به صفحه قبل
            <LuArrowLeft className="mr-1 mb-px h-5 w-5" />
          </button>
        </div>

        <nav className="mx-auto max-w-3xl" aria-label="صفحات مرتبط">
          <h3 className="mb-6 text-base font-medium text-gray-700 md:mb-8 md:text-lg">
            یا شاید به دنبال یکی از این صفحات هستید:
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-5">
            <Link
              href="/extension"
              className="group rounded-lg border border-gray-200 bg-white p-4 transition hover:scale-105 hover:border-blue-300 hover:shadow-lg md:p-5"
            >
              <h4 className="mb-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600 md:text-base">
                اکستنشن مرورگر
              </h4>
              <p className="text-xs text-gray-600 md:text-sm">
                افزونه ویجتیفای برای مرورگرها
              </p>
            </Link>

            <Link
              href="/donate"
              className="group rounded-lg border border-gray-200 bg-white p-4 transition hover:scale-105 hover:border-blue-300 hover:shadow-lg md:p-5"
            >
              <h4 className="mb-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600 md:text-base">
                حمایت مالی
              </h4>
              <p className="text-xs text-gray-600 md:text-sm">
                کمک به توسعه ویجتیفای
              </p>
            </Link>

            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-gray-200 bg-white p-4 transition hover:scale-105 hover:border-blue-300 hover:shadow-lg md:p-5"
            >
              <h4 className="mb-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600 md:text-base">
                مخزن گیت‌هاب
              </h4>
              <p className="text-xs text-gray-600 md:text-sm">
                مشارکت در کد پروژه
              </p>
            </a>
          </div>
        </nav>
      </section>
    </section>
  );
};

export default NotFound;
