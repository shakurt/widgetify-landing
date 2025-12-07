import Brand from "./Brand";
import Newsletter from "./Newsletter";
import Products from "./Products";
import QuickLinks from "./QuickLinks";
import Social from "./Social";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-50 to-gray-100 pt-6">
      <div className="container">
        <Brand />
        <Social />

        <div className="container my-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <QuickLinks />
          <Products />
          <Newsletter />
        </div>
      </div>

      <SubFooter />
    </footer>
  );
};

export default Footer;
