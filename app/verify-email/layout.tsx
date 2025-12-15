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
        <header className="animate-fade-in flex flex-col items-center text-center">
          <h1 className="mb-3 text-3xl leading-tight font-bold text-gray-900 sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="animate-slide-down block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              تأیید ایمیل
            </span>
          </h1>

          <p className="animate-fade-in-up text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:leading-loose">
            با تأیید حساب خود، به تمامی امکانات و ویژگی‌های ویجتیفای دسترسی پیدا
            می‌کنید.
          </p>
        </header>
        <section className="animate-fade-in-up w-full">{children}</section>
      </div>
    </div>
  );
};

export default VerifyEmailLayout;
