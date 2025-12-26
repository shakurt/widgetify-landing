import Link from "next/link";

const ShowPasswordResetSuccessMessage = () => {
  return (
    <article
      dir="rtl"
      className="animate-slide-up rounded-xl border border-gray-200 bg-white p-4 text-center shadow-lg transition md:p-6"
      role="status"
      aria-live="polite"
    >
      <header className="mb-4">
        <div
          className="mx-auto mb-3 inline-flex h-14 w-14 animate-pulse items-center justify-center rounded-2xl bg-linear-to-br from-green-400 to-green-600"
          aria-hidden="true"
        >
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
        <h2 className="mb-2 text-xl font-bold md:text-2xl">
          رمز عبور با موفقیت تغییر کرد
        </h2>
        <p className="mb-5 text-sm text-gray-600 md:text-base">
          اکنون می‌توانید با رمز عبور جدید خود وارد حساب کاربری شوید.
        </p>
      </header>
      <div className="flex flex-col gap-3">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-lg bg-linear-to-r from-blue-600 to-purple-600 p-3 font-medium text-white transition hover:scale-[1.03] hover:from-blue-700 hover:to-purple-700 hover:shadow-lg active:scale-[0.97]"
          aria-label="بازگشت به صفحه اصلی"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </article>
  );
};

export default ShowPasswordResetSuccessMessage;
