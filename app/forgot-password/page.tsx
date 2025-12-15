"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import RequestPasswordReset from "@/components/forgot-password/RequestPasswordReset";
import ResetPassword from "@/components/forgot-password/ResetPassword";

// import { useDocumentTitle } from "../hooks";

const ForgotPassword = () => {
  // useDocumentTitle("بازیابی رمز عبور");

  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const emailFromUrl = searchParams.get("email");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState(emailFromUrl || "");

  const [originalToken, setOriginalToken] = useState(token || "");

  const isResetMode = Boolean(originalToken && emailFromUrl);

  // useEffect(() => {
  //   if (token && emailFromUrl) {
  //     setOriginalToken(token);
  //     const newSearchParams = new URLSearchParams();
  //     newSearchParams.set("email", emailFromUrl);
  //     setSearchParams(newSearchParams);
  //   }
  // }, [token, emailFromUrl, setSearchParams]);

  const handleRequestSuccess = (submittedEmail: string) => {
    setIsSubmitted(true);
    setEmail(submittedEmail);
  };

  const handleResetSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative px-4 py-10">
        <div className="animate-fade-in mx-auto flex max-w-6xl flex-col items-center text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            <span className="animate-slide-down block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isResetMode ? "تغییر رمز عبور" : "بازیابی رمز عبور"}
            </span>
          </h1>

          <p className="animate-fade-in-up mb-6 max-w-2xl text-lg text-gray-600 md:text-xl">
            {isResetMode
              ? "لطفاً رمز عبور جدید خود را وارد کنید"
              : "ایمیل خود را وارد کنید و ما لینک بازیابی را برایتان ارسال خواهیم کرد"}
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="animate-fade-in-up mx-auto max-w-md">
          {isResetMode ? (
            !isSubmitted ? (
              <ResetPassword
                email={emailFromUrl || ""}
                token={originalToken}
                onResetSuccess={handleResetSuccess}
              />
            ) : (
              <div className="animate-slide-up rounded-xl border border-gray-200 bg-white p-6 text-center shadow-lg transition">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-linear-to-br from-green-400 to-green-600">
                  <svg
                    className="h-7 w-7 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="mb-2 text-2xl font-bold">
                  رمز عبور با موفقیت تغییر کرد
                </h2>
                <p className="mb-5 text-gray-600">
                  اکنون می‌توانید با رمز عبور جدید خود وارد حساب کاربری شوید.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://app.widgetify.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-purple-600 p-3 font-medium text-white transition hover:scale-[1.03] hover:from-blue-700 hover:to-purple-700 hover:shadow-lg active:scale-[0.97]"
                  >
                    رفتن به صفحه اصلی اپلیکیشن
                  </a>

                  <Link
                    href="/"
                    className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white p-3 font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                  >
                    بازگشت به صفحه اصلی
                  </Link>
                </div>
              </div>
            )
          ) : !isSubmitted ? (
            <RequestPasswordReset
              onSubmitSuccess={handleRequestSuccess}
              emailProp={email}
            />
          ) : (
            <div className="animate-slide-up rounded-xl border border-gray-200 bg-white p-6 text-center shadow-lg transition">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-linear-to-br from-green-400 to-green-600">
                <svg
                  className="h-7 w-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="mb-2 text-2xl font-bold">ایمیل ارسال شد</h2>
              <p className="mb-5 text-gray-600">
                درخواست بازیابی رمز عبور با موفقیت ثبت شد. لطفاً ایمیل خود (
                {email}) را بررسی کنید و دستورالعمل‌های بازیابی رمز عبور را
                دنبال کنید.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setEmail("");
                    setIsSubmitted(false);
                  }}
                  className="w-full rounded-lg bg-linear-to-r from-blue-600 to-purple-600 p-3 font-medium text-white transition hover:scale-[1.03] hover:from-blue-700 hover:to-purple-700 hover:shadow-lg active:scale-[0.97]"
                >
                  تلاش مجدد با ایمیل دیگر
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
