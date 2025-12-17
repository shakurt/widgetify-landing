import FooterLink from "@/components/layout/main/footer/FooterLink";

const LegalLinks = () => {
  return (
    <nav
      aria-labelledby="لینک‌های قانونی"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h3 id="legal-links" className="mb-2 text-base font-bold md:text-lg">
        لینک‌های قانونی
      </h3>
      <meta itemProp="name" content="محصولات ویجتیفای" />
      <ul className="space-y-2" role="list">
        <li>
          <FooterLink href="/terms">قوانین و مقررات</FooterLink>
        </li>
        <li>
          <FooterLink href="/privacy">حریم خصوصی</FooterLink>
        </li>
        <li>
          <FooterLink href="/faq">سوالات متداول</FooterLink>
        </li>
      </ul>
    </nav>
  );
};

export default LegalLinks;
