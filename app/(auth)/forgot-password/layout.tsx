import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فراموشی رمز عبور | ویجتیفای",
  description:
    "بازیابی رمز عبور حساب کاربری ویجتیفای - با بازنشانی رمز عبور خود به حساب خود دسترسی پیدا کنید",
  keywords: [
    "فراموشی رمز عبور",
    "بازیابی رمز",
    "ویجتیفای",
    "احراز هویت",
    "افزونه مرورگر",
    "نیو تب",
  ],
  openGraph: {
    title: "فراموشی رمز عبور | ویجتیفای",
    description:
      "بازیابی رمز عبور حساب خود و دسترسی به تمام امکانات افزونه نیو تب ویجتیفای",
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary",
    title: "فراموشی رمز عبور | ویجتیفای",
    description: "بازیابی رمز عبور حساب خود و دسترسی به تمام امکانات ویجتیفای",
  },
  alternates: {
    canonical: "/forgot-password",
  },
  robots: {
    index: false,
    follow: false,
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
