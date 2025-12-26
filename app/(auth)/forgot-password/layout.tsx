import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بازیابی رمز عبور - فراموشی رمز | ویجتیفای",
  description:
    "بازیابی و بازنشانی رمز عبور حساب کاربری ویجتیفای. با وارد کردن ایمیل خود، لینک بازیابی رمز عبور را دریافت کنید و به حساب خود دسترسی پیدا کنید. فرآیند ساده و امن.",
  keywords: [
    "فراموشی رمز عبور ویجتیفای",
    "بازیابی رمز عبور",
    "بازنشانی رمز",
    "reset password",
    "forgot password",
    "ویجتیفای",
    "احراز هویت",
    "حساب کاربری",
    "افزونه مرورگر",
    "Widgetify password recovery",
  ],
  openGraph: {
    title: "بازیابی رمز عبور | ویجتیفای",
    description:
      "بازیابی رمز عبور حساب ویجتیفای و دسترسی مجدد به تمام امکانات افزونه مرورگر",
    type: "website",
    locale: "fa_IR",
    url: "https://widgetify.app/forgot-password",
  },
  twitter: {
    card: "summary",
    title: "بازیابی رمز عبور | ویجتیفای",
    description:
      "بازیابی رمز عبور حساب ویجتیفای و دسترسی مجدد به امکانات افزونه",
  },
  alternates: {
    canonical: "https://widgetify.app/forgot-password",
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

const ForgotPasswordLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-md space-y-2 md:space-y-6">
        <header className="animate-fade-in flex flex-col items-center text-center">
          <h1 className="mb-3 text-3xl leading-tight font-bold text-gray-900 sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="animate-slide-down block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              فراموشی رمز عبور
            </span>
          </h1>
        </header>
        <section className="animate-fade-in-up w-full">{children}</section>
      </div>
    </div>
  );
};

export default ForgotPasswordLayout;
