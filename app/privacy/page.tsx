import BackButton from "./_components/BackButton";
import ChangePrivacy from "./_components/ChangePrivacy";
import CollectedInformation from "./_components/CollectedInformation";
export const metadata = {
  title: "Privacy Policy | Widgetify",
  description: "Widgetify privacy policy and data protection information",
};
import ContactUs from "./_components/ContactUs";
import DataDeletion from "./_components/DataDeletion";
import DataProtection from "./_components/DataProtection";
import DataSharing from "./_components/DataSharing";
import DataUsage from "./_components/DataUsage";
import ExtensionPermissions from "./_components/ExtensionPermissions";
import GoogleIntegration from "./_components/GoogleIntegration";
import Introduction from "./_components/Introduction";
import Header from "./_components/layout/Header";
import OpenSourceNote from "./_components/OpenSourceNote";
import Retention from "./_components/Retention";
import Security from "./_components/Security";
import { isLanguageFa } from "./_lib/utils";

import type { Language } from "./_lib/types";

type PrivacyPageProps = {
  searchParams: Promise<{ lang?: Language }>;
};

const PrivacyPage: React.FC<PrivacyPageProps> = async ({ searchParams }) => {
  const { lang = "fa" } = await searchParams;

  return (
    <section
      {...(!isLanguageFa(lang) ? { dir: "ltr" } : { dir: "rtl" })}
      aria-label="Privacy Policy Page"
    >
      <Header lang={lang} />
      <section className="container max-w-4xl space-y-9">
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
      </section>
    </section>
  );
};

export default PrivacyPage;
