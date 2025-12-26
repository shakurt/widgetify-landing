import "@/app/globals.css";
import Header from "@auth/components/layout/Header";

import { ToastProvider } from "@/components/ui/ToastContext";

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
