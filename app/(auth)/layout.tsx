import type { Metadata } from "next";

import "@/app/globals.css";
import Header from "@auth/components/layout/Header";

import { ToastProvider } from "@/components/ui/ToastContext";

export const metadata: Metadata = {
  title: {
    default: "احراز هویت | ویجتیفای",
    template: "%s | ویجتیفای",
  },
  description:
    "صفحات احراز هویت و مدیریت حساب کاربری افزونه ویجتیفای - ورود، ثبت‌نام، بازیابی رمز عبور و تأیید ایمیل",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col bg-gray-50"
      >
        <ToastProvider>
          <Header />

          <main className="flex w-full flex-1">{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}
