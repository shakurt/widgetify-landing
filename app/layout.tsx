import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "ویجتیفای",
  description: "ویجتیفای - وب‌سایت رسمی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
