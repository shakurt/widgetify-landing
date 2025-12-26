import FooterLink from "./FooterLink";
const QuickLinks = () => {
  return (
    <nav aria-labelledby="quick-links-heading">
      <h3
        id="quick-links-heading"
        className="mb-2 text-base font-bold md:text-lg"
      >
        دسترسی سریع
      </h3>
      <ul className="space-y-2 text-gray-600" role="list">
        <li>
          <FooterLink href="/">صفحه اصلی</FooterLink>
        </li>
        <li>
          <FooterLink href="/donation">حمایت مالی</FooterLink>
        </li>
      </ul>
    </nav>
  );
};

export default QuickLinks;
