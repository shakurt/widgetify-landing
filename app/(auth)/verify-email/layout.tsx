import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تأیید ایمیل - فعال‌سازی حساب کاربری | ویجتیفای",
  description:
    "تأیید و فعال‌سازی حساب کاربری ویجتیفای. با کلیک بر روی لینک ارسال شده به ایمیل خود، حساب کاربری خود را تأیید کنید و به تمامی امکانات افزونه مرورگر ویجتیفای دسترسی داشته باشید.",
  keywords: [
    "تأیید ایمیل ویجتیفای",
    "فعال‌سازی حساب",
    "تایید ایمیل",
    "email verification",
    "verify email",
    "ویجتیفای",
    "احراز هویت",
    "حساب کاربری",
    "افزونه مرورگر",
    "Widgetify email verification",
    "activate account",
  ],
  openGraph: {
    title: "تأیید ایمیل | ویجتیفای",
    description:
      "تأیید و فعال‌سازی حساب کاربری ویجتیفای و دسترسی به تمام امکانات افزونه نیو تب",
    type: "website",
    locale: "fa_IR",
    url: "https://widgetify.app/verify-email",
  },
  twitter: {
    card: "summary",
    title: "تأیید ایمیل | ویجتیفای",
    description: "تأیید و فعال‌سازی حساب کاربری ویجتیفای",
  },
  alternates: {
    canonical: "https://widgetify.app/verify-email",
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

const VerifyEmailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-md space-y-8">
        <section className="animate-fade-in-up w-full">{children}</section>
      </div>
    </div>
  );
};

export default VerifyEmailLayout;
