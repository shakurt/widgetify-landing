import Header from "@/components/layout/privacy/Header";
import BackButton from "@/components/privacy/BackButton";
import ChangePrivacy from "@/components/privacy/ChangePrivacy";
import CollectedInformation from "@/components/privacy/CollectedInformation";
import ContactUs from "@/components/privacy/ContactUs";
import DataDeletion from "@/components/privacy/DataDeletion";
import DataProtection from "@/components/privacy/DataProtection";
import DataSharing from "@/components/privacy/DataSharing";
import DataUsage from "@/components/privacy/DataUsage";
import ExtensionPermissions from "@/components/privacy/ExtensionPermissions";
import GoogleIntegration from "@/components/privacy/GoogleIntegration";
import Introduction from "@/components/privacy/Introduction";
import OpenSourceNote from "@/components/privacy/OpenSourceNote";
import Retention from "@/components/privacy/Retention";
import Security from "@/components/privacy/Security";
import type { PrivacyLanguage } from "@/lib/types";
import { isLanguageFa } from "@/lib/utils";

export const metadata = {
  title: "Privacy Policy | Widgetify",
  description: "Widgetify privacy policy and data protection information",
};

type PrivacyPageProps = {
  searchParams: Promise<{ lang?: PrivacyLanguage }>;
};

const PrivacyPage: React.FC<PrivacyPageProps> = async ({ searchParams }) => {
  const { lang = "fa" } = await searchParams;

  return (
    <article
      {...(!isLanguageFa(lang) ? { dir: "ltr" } : { dir: "rtl" })}
      className="min-h-screen"
    >
      <Header lang={lang} />
      <div className="container max-w-4xl space-y-6 py-6 sm:space-y-8 sm:py-8 md:space-y-9">
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
