import FullLogo from "@/components/logo/FullLogo";

const Header = () => {
  return (
    <header
      aria-label="ظرف نوار ناوبری"
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="container flex h-16 items-center justify-between">
        <FullLogo />
      </div>
    </header>
  );
};

export default Header;
