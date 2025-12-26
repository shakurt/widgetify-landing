import React from "react";

type ShowRequestPasswordResetSuccessMessageProps = {
  handleRequestAgain: () => void;
  email: string;
};

const ShowRequestPasswordResetSuccessMessage: React.FC<
  ShowRequestPasswordResetSuccessMessageProps
> = ({ handleRequestAgain, email }) => {
  return (
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
        درخواست بازیابی رمز عبور با موفقیت ثبت شد. لطفاً ایمیل خود ({email}) را
        بررسی کنید و دستورالعمل‌های بازیابی رمز عبور را دنبال کنید.
      </p>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleRequestAgain}
          className="w-full rounded-lg bg-linear-to-r from-blue-600 to-purple-600 p-3 font-medium text-white transition hover:scale-[1.03] hover:from-blue-700 hover:to-purple-700 hover:shadow-lg active:scale-[0.97]"
        >
          تلاش مجدد با ایمیل دیگر
        </button>
      </div>
    </div>
  );
};

export default ShowRequestPasswordResetSuccessMessage;
