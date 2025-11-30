import Link from "next/link";

import { ArrowLeft, Home, Search } from "lucide-react";

import { GITHUB_LINK } from "@/constants";
// import { useDocumentTitle } from "../hooks";

const NotFound = () => {
  // useDocumentTitle("صفحه یافت نشد | 404");

  return (
    <>
      {/* Gradient background */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 py-16 text-white md:py-20">
        <div className="flex flex-col items-center text-center">
          <div className="bg-opacity-20 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white">
            <Search size={40} className="text-white" />
          </div>
          <h1 className="mb-2 text-5xl font-bold md:text-7xl">404</h1>
          <p className="mx-auto max-w-2xl text-xl text-blue-100 md:text-2xl">
            صفحه مورد نظر یافت نشد!
          </p>
        </div>
      </div>

      <div className="py-16 text-center">
        <div className="mx-auto mb-12 max-w-2xl">
          <h2 className="mb-6 text-2xl font-bold">
            متاسفیم، صفحه‌ای که به دنبال آن بودید وجود ندارد
          </h2>
          <p className="mb-8 text-gray-600">
            ممکن است آدرس اشتباه وارد کرده باشید یا این صفحه منتقل یا حذف شده
            باشد. می‌توانید به صفحه اصلی بازگردید یا از لینک‌های زیر استفاده
            کنید.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-linear-to-br from-blue-600 to-purple-700 px-6 py-3 font-medium text-white transition hover:from-blue-700 hover:to-purple-800"
            >
              <Home className="ml-2" size={20} />
              صفحه اصلی
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium transition hover:bg-gray-50"
            >
              <ArrowLeft className="ml-2" size={20} />
              بازگشت به صفحه قبل
            </button>
          </div>
        </div>

        {/* Quick links */}
        <div className="mx-auto max-w-2xl">
          <h3 className="mb-4 text-lg font-medium text-gray-600">
            یا شاید به دنبال یکی از این صفحات هستید:
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            <Link
              href="/extension"
              className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 hover:shadow-sm"
            >
              <h4 className="font-medium">اکستنشن مرورگر</h4>
              <p className="text-sm text-gray-500">
                افزونه ویجتی‌فای برای مرورگرها
              </p>
            </Link>

            <Link
              href="/donate"
              className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 hover:shadow-sm"
            >
              <h4 className="font-medium">حمایت مالی</h4>
              <p className="text-sm text-gray-500">کمک به توسعه ویجتی‌فای</p>
            </Link>

            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-200 hover:shadow-sm"
            >
              <h4 className="font-medium">مخزن گیت‌هاب</h4>
              <p className="text-sm text-gray-500">مشارکت در کد پروژه</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
