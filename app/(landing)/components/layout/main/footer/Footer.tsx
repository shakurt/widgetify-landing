import Brand from "./Brand";
import LegalLinks from "./LegalLinks";
import Products from "./Products";
import QuickLinks from "./QuickLinks";
import Social from "./Social";
import SubFooter from "./SubFooter";
const Footer = () => {
  return (
    <footer
      className="bg-linear-to-br from-gray-50 to-gray-100 pt-6"
      role="contentinfo"
      aria-label="اطلاعات پایین صفحه"
    >
      <div className="container">
        <Brand />
        <Social />

        <div
          className="container my-8 grid grid-cols-1 gap-8 min-[450px]:grid-cols-2 min-[450px]:justify-items-center min-[550px]:grid-cols-3"
          aria-label="لینک‌های فوتر"
        >
          <QuickLinks />
          <Products />
          <LegalLinks />
        </div>
      </div>

      <SubFooter />
    </footer>
  );
};

export default Footer;
