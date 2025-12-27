import type { Metadata } from "next";

import "@/app/globals.css";
import Footer from "@landing/components/layout/main/footer/Footer";
import Header from "@landing/components/layout/main/header/Header";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default:
      "ویجتیفای - افزونه رایگان مرورگر برای مدیریت کارها و افزایش بهره‌وری",
    template: "%s | ویجتیفای",
  },
  description:
    "ویجتیفای یک افزونه متن‌باز و رایگان برای کروم و فایرفاکس است. با ویجت‌های هوشمند نیوتب، کارهای روزمره خود را مدیریت کنید. شامل مدیریت وظایف، یادداشت، تقویم، آب و هوا و ادغام با گوگل کلندر.",
  keywords: [
    "ویجتیفای",
    "افزونه مرورگر فارسی",
    "کروم اکستنشن",
    "فایرفاکس ادان",
    "بهره‌وری",
    "مدیریت وظایف",
    "یادداشت آنلاین",
    "نیوتب",
    "ویجت مرورگر",
    "متن‌باز",
    "رایگان",
    "گوگل کلندر",
    "مدیریت زمان",
    "productivity extension",
    "Widgetify",
    "task manager",
    "new tab extension",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
    url: "https://widgetify.app",
    siteName: "ویجتیفای",
    title: "ویجتیفای - افزونه رایگان مرورگر برای افزایش بهره‌وری",
    description:
      "افزونه متن‌باز و رایگان برای مدیریت کارها، یادداشت‌برداری و افزایش بهره‌وری در مرورگر کروم و فایرفاکس",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ویجتیفای - افزونه بهره‌وری برای مرورگر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ویجتیفای - افزونه رایگان مرورگر برای افزایش بهره‌وری",
    description: "افزونه متن‌باز و رایگان برای مدیریت کارها و افزایش بهره‌وری",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://widgetify.app",
    languages: {
      "fa-IR": "https://widgetify.app",
      "en-US": "https://widgetify.app?lang=en",
    },
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
        <Header />
        <main className="flex w-full flex-1">
          <div className="min-h-screen w-full">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
