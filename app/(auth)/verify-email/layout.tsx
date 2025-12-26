import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تأیید ایمیل | ویجتیفای",
  description:
    "تأیید حساب کاربری ویجتیفای - با تأیید ایمیل خود به تمامی امکانات افزونه ویجتیفای دسترسی پیدا کنید",
  keywords: [
    "تأیید ایمیل",
    "ویجتیفای",
    "احراز هویت",
    "افزونه مرورگر",
    "نیو تب",
  ],
  openGraph: {
    title: "تأیید ایمیل | ویجتیفای",
    description:
      "تأیید حساب خود و دسترسی به تمام امکانات افزونه نیو تب ویجتیفای",
    type: "website",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary",
    title: "تأیید ایمیل | ویجتیفای",
    description: "تأیید حساب خود و دسترسی به تمام امکانات ویجتیفای",
  },
  alternates: {
    canonical: "/verify-email",
  },
  robots: {
    index: false,
    follow: false,
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
