import type { Metadata } from "next";

import "@/app/globals.css";
import Header from "@auth/components/layout/Header";

import { ToastProvider } from "@/components/ui/ToastContext";
import Script from "next/script";

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
      <head>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () {
                (c[a].q = c[a].q || []).push(arguments);
              };
              t = l.createElement(r);
              t.async = 1;
              t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "ur7mnks7ui");
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RJ08KS8BD3"
          strategy="afterInteractive"
        />

        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RJ08KS8BD3');
          `}
        </Script>
      </head>
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
