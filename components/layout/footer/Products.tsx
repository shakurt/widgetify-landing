import { DESKTOP_LINK, PWA_LINK, CHROME_EXTENSION_URL } from "@/lib/constants";

import FooterLink from "./FooterLink";

const Products = () => {
  return (
    <nav
      aria-labelledby="products-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <h3 id="products-heading" className="mb-2 text-lg font-bold">
        محصولات
      </h3>
      <meta itemProp="name" content="محصولات ویجتیفای" />
      <ul className="space-y-2" role="list">
        <li>
          <FooterLink href={CHROME_EXTENSION_URL} target="_blank">
            اکستنشن مرورگر
          </FooterLink>
        </li>
        <li>
          <FooterLink href={PWA_LINK} target="_blank">
            نسخه وب (PWA)
          </FooterLink>
        </li>
        <li>
          <FooterLink href={DESKTOP_LINK} target="_blank">
            نسخه دسکتاپ
          </FooterLink>
        </li>
        <li>
          <FooterLink comingSoon={true}>نسخه اندروید</FooterLink>
        </li>
        <li>
          <FooterLink comingSoon={true}>نسخه iOS</FooterLink>
        </li>
      </ul>
    </nav>
  );
};

export default Products;
