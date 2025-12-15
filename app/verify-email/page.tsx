"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { LuCircleAlert, LuCircleCheck } from "react-icons/lu";

import { postVerifyEmail } from "@/lib/data/client-data";
import { isEmail } from "@/lib/utils";

const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  useEffect(() => {
    const verifyEmail = async () => {
      const response = await postVerifyEmail(token!, email!);
      if (response.message === "EMAIL_VERIFIED") setIsSuccess(true);
      else if (response.message === "VERIFICATION_FAILED") {
        setError(
          "تایید ایمیل ناموفق بود. لینک ممکن است منقضی شده یا قبلاً استفاده شده باشد."
        );
        setIsVerifying(false);
      } else {
        setError("خطا در تایید ایمیل. لطفاً مجدداً تلاش کنید.");
        setIsVerifying(false);
      }
    };

    if (token && email) {
      if (isEmail(email)) verifyEmail();
      else setError("آدرس ایمیل نامعتبر است.");
    } else {
      setError(
        "لینک تایید ایمیل نامعتبر است. لطفاً مطمئن شوید که از لینک صحیح استفاده می‌کنید."
      );
      setIsVerifying(false);
    }
  }, [token, email]);

  if (isVerifying)
    return (
      <article
        className="space-y-4 rounded-xl border border-gray-200 bg-white p-4 text-center shadow-lg transition sm:space-y-5 sm:p-6 md:p-8"
        aria-busy="true"
        aria-label="درحال تایید ایمیل"
      >
        <div className="mx-auto inline-flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 sm:h-16 sm:w-16">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent sm:h-8 sm:w-8"></div>
        </div>
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-xl leading-tight font-bold text-gray-900 sm:text-2xl md:text-3xl">
            درحال تایید ایمیل
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
            لطفاً صبر کنید، درحال بررسی و تایید آدرس ایمیل شما هستیم...
          </p>
        </div>
      </article>
    );

  if (isSuccess)
    return (
      <article
        className="animate-slide-up space-y-4 rounded-xl border border-green-200 bg-green-50/50 p-4 text-center shadow-lg transition sm:space-y-5 sm:p-6 md:p-8"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-green-400 to-green-600 sm:h-16 sm:w-16">
          <LuCircleCheck className="h-6 w-6 text-white sm:h-8 sm:w-8" />
        </div>
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-xl leading-tight font-bold text-green-900 sm:text-2xl md:text-3xl">
            ایمیل تایید شد!
          </h2>
          <p className="text-sm leading-relaxed text-green-700 sm:text-base">
            آدرس ایمیل شما با موفقیت تایید شد. اکنون می‌توانید از تمامی امکانات
            حساب کاربری خود استفاده کنید.
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-green-300 bg-green-600 px-4 py-2.5 font-semibold text-white transition hover:border-green-400 hover:bg-green-700 sm:px-5 sm:py-3"
          >
            بازگشت به صفحه اصلی
          </Link>
        </nav>
      </article>
    );
  else
    return (
      <article
        className="animate-slide-up space-y-4 rounded-xl border border-red-200 bg-red-50/50 p-4 text-center shadow-lg transition sm:space-y-5 sm:p-6 md:p-8"
        role="alert"
      >
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-red-400 to-red-600 sm:h-16 sm:w-16">
          <LuCircleAlert className="h-6 w-6 text-white sm:h-8 sm:w-8" />
        </div>
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-xl leading-tight font-bold text-red-900 sm:text-2xl md:text-3xl">
            خطا در تایید ایمیل
          </h2>
          <p className="text-sm leading-relaxed text-red-700 sm:text-base">
            {error}
          </p>
        </div>
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-red-300 bg-red-600 px-4 py-2.5 font-semibold text-white transition hover:border-red-400 hover:bg-red-700 sm:px-5 sm:py-3"
          >
            بازگشت به صفحه اصلی
          </Link>
        </nav>
      </article>
    );
};

export default VerifyEmailPage;
