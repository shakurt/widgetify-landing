import { Metadata } from "next";

import Header from "@landing/components/layout/privacy/Header";
import BackButton from "@landing/components/privacy/BackButton";
import ChangePrivacy from "@landing/components/privacy/ChangePrivacy";
import CollectedInformation from "@landing/components/privacy/CollectedInformation";
import ContactUs from "@landing/components/privacy/ContactUs";
import DataDeletion from "@landing/components/privacy/DataDeletion";
import DataProtection from "@landing/components/privacy/DataProtection";
import DataSharing from "@landing/components/privacy/DataSharing";
import DataUsage from "@landing/components/privacy/DataUsage";
import ExtensionPermissions from "@landing/components/privacy/ExtensionPermissions";
import GoogleIntegration from "@landing/components/privacy/GoogleIntegration";
import Introduction from "@landing/components/privacy/Introduction";
import OpenSourceNote from "@landing/components/privacy/OpenSourceNote";
import Retention from "@landing/components/privacy/Retention";
import Security from "@landing/components/privacy/Security";

import type { PrivacyLanguage } from "@/lib/types";
import { isLanguageFa } from "@/lib/utils";

export const metadata: Metadata = {
  title: "سیاست حفظ حریم خصوصی - Widgetify Privacy Policy",
  description:
    "سیاست حفظ حریم خصوصی افزونه ویجتیفای. اطلاعات کامل درباره نحوه جمع‌آوری، استفاده و حفاظت از داده‌های شما. Widgetify privacy policy and GDPR compliance information.",
  keywords: [
    "حریم خصوصی ویجتیفای",
    "privacy policy",
    "GDPR",
    "حفاظت از داده",
    "امنیت اطلاعات",
    "data protection",
    "ویجتیفای",
    "Widgetify privacy",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "سیاست حفظ حریم خصوصی - Widgetify Privacy Policy",
    description:
      "اطلاعات کامل درباره نحوه حفاظت از حریم خصوصی و داده‌های کاربران در افزونه ویجتیفای",
    url: "https://widgetify.app/privacy",
    type: "website",
  },
  alternates: {
    canonical: "https://widgetify.app/privacy",
    languages: {
      "fa-IR": "https://widgetify.app/privacy?lang=fa",
      "en-US": "https://widgetify.app/privacy?lang=en",
    },
  },
};

type PrivacyPageProps = {
  searchParams: Promise<{ lang?: PrivacyLanguage }>;
};

const PrivacyPage: React.FC<PrivacyPageProps> = async ({ searchParams }) => {
  const { lang = "fa" } = await searchParams;

  return (
    <article {...(!isLanguageFa(lang) ? { dir: "ltr" } : { dir: "rtl" })}>
      <Header lang={lang} />
      <div className="container mx-auto max-w-4xl space-y-6 border-t py-6 sm:space-y-8 sm:py-8 md:space-y-9">
        <Introduction lang={lang} />

        <CollectedInformation lang={lang} />

        <ExtensionPermissions lang={lang} />

        <GoogleIntegration lang={lang} />

        <DataUsage lang={lang} />

        <DataProtection lang={lang} />

        <DataSharing lang={lang} />

        <Security lang={lang} />

        <Retention lang={lang} />

        <DataDeletion lang={lang} />

        <ChangePrivacy lang={lang} />

        <ContactUs lang={lang} />

        <OpenSourceNote lang={lang} />

        <BackButton lang={lang} />
      </div>
    </article>
  );
};

export default PrivacyPage;
