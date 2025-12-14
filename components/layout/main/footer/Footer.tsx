import Brand from "./Brand";
import Newsletter from "./Newsletter";
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

        <nav
          className="container my-8 grid grid-cols-1 gap-8 md:grid-cols-3"
          aria-label="لینک‌های فوتر"
        >
          <QuickLinks />
          <Products />
          <Newsletter />
        </nav>
      </div>

      <SubFooter />
    </footer>
  );
};

export default Footer;
