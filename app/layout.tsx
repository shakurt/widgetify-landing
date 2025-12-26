import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://widgetify.app"),
  title: {
    default: "ویجتیفای - افزونه مرورگر برای افزایش بهره‌وری و مدیریت کارها",
    template: "%s | ویجتیفای",
  },
  description:
    "ویجتیفای یک افزونه رایگان و متن‌باز برای مرورگرهای کروم و فایرفاکس است که با ارائه ویجت‌های کاربردی، بهره‌وری شما را افزایش می‌دهد. مدیریت کارها، یادداشت‌برداری، تقویم و بیشتر.",
  keywords: [
    "ویجتیفای",
    "افزونه مرورگر",
    "بهره‌وری",
    "مدیریت کار",
    "نیوتب",
    "ویجت",
    "کروم اکستنشن",
    "فایرفاکس ادان",
    "متن‌باز",
    "رایگان",
    "Widgetify",
    "browser extension",
    "productivity",
    "new tab",
  ],
  authors: [{ name: "Widgetify Team" }],
  creator: "Widgetify",
  publisher: "Widgetify",
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
    title: "ویجتیفای - افزونه مرورگر برای افزایش بهره‌وری",
    description:
      "افزونه رایگان و متن‌باز برای مدیریت کارها و افزایش بهره‌وری در مرورگر",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ویجتیفای - افزونه بهره‌وری",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ویجتیفای - افزونه مرورگر برای افزایش بهره‌وری",
    description:
      "افزونه رایگان و متن‌باز برای مدیریت کارها و افزایش بهره‌وری در مرورگر",
    images: ["/twitter-image.png"],
    creator: "@widgetify",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div suppressHydrationWarning>{children}</div>;
}
