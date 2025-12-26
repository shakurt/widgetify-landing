import type { Metadata } from "next";

import "@/app/globals.css";
import Footer from "@landing/components/layout/main/footer/Footer";
import Header from "@landing/components/layout/main/header/Header";

export const metadata: Metadata = {
  title: {
    default: "ویجتیفای - بهتر شناخت، بهتر کار",
    template: "%s | ویجتیفای",
  },
  description:
    "ویجتیفای ابزاری برای افزایش بهره‌وری و مدیریت بهتر کارهای روزمره شما",
  keywords: ["ویجتیفای", "بهره‌وری", "مدیریت", "ابزار"],
  robots: {
    index: true,
    follow: true,
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
        className="flex min-h-screen flex-col bg-linear-to-br from-blue-50 via-white to-purple-50"
      >
        <Header />
        <main className="flex w-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
