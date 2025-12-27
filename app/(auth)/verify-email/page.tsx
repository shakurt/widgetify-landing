"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LuCircleAlert, LuCircleCheck, LuLoader } from "react-icons/lu";

import { postVerifyEmail } from "@/lib/auth";
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
      try {
        const response = await postVerifyEmail(token!, email!);
        if (response.success) {
          setIsSuccess(true);
        } else {
          setError(
            response.message || "متأسفانه فرآیند تایید با خطا مواجه شد."
          );
        }
      } catch (err) {
        setError("ارتباط با سرور برقرار نشد. لطفا اینترنت خود را بررسی کنید.");
      } finally {
        setIsVerifying(false);
      }
    };

    if (token && email) {
      if (isEmail(email)) verifyEmail();
      else {
        setError("فرمت آدرس ایمیل وارد شده صحیح نیست.");
        setIsVerifying(false);
      }
    } else {
      setError("لینک تایید منقضی شده یا نامعتبر است. لطفاً دوباره تلاش کنید.");
      setIsVerifying(false);
    }
  }, [token, email]);

  const cardStyles =
    "max-w-md mx-auto space-y-6 rounded-2xl border p-6 text-center shadow-sm sm:p-10";

  if (isVerifying)
    return (
      <article
        className={`${cardStyles} border-gray-100 bg-white`}
        aria-busy="true"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-50">
          <LuLoader className="h-8 w-8 animate-spin text-slate-600" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-gray-900">
            یه لحظه صبر کن...
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            داریم اطلاعاتت رو چک می‌کنیم تا همه چی برای شروع آماده بشه.
          </p>
        </div>
      </article>
    );

  if (isSuccess)
    return (
      <article
        className={`${cardStyles} animate-in fade-in zoom-in border-emerald-100 bg-emerald-50/30 duration-300`}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <LuCircleCheck className="h-8 w-8 text-emerald-600" />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-black text-emerald-900">
            هورا! حسابت فعال شد
          </h2>
          <p className="text-sm leading-relaxed text-emerald-800/90 sm:text-base">
            تایید ایمیل با موفقیت انجام شد. حالا می‌تونی از تمام قابلیت‌های
            <span className="font-bold text-emerald-900"> افزونه نیوتب </span> و
            <span className="font-bold text-emerald-900">
              {" "}
              اپلیکیشن ویجتیفای{" "}
            </span>
            استفاده کنی.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/"
            className="block w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-sm shadow-emerald-200 transition-all hover:bg-emerald-700 active:scale-[0.98]"
          >
            بزن بریم به ویجتیفای
          </Link>
        </div>
      </article>
    );

  return (
    <article
      className={`${cardStyles} animate-in fade-in zoom-in border-red-100 bg-red-50/30 duration-300`}
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
        <LuCircleAlert className="h-8 w-8 text-red-600" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-black text-red-900">
          آخ! یه مشکلی پیش اومد
        </h2>
        <p className="text-sm leading-relaxed text-red-700/80 sm:text-base">
          {error}
        </p>
      </div>

      <div className="pt-2">
        <Link
          href="/"
          className="block w-full rounded-xl bg-gray-900 py-3.5 text-sm font-bold text-white transition-all hover:bg-black active:scale-[0.98]"
        >
          برگشت به صفحه اصلی
        </Link>
      </div>
    </article>
  );
};

export default VerifyEmailPage;
