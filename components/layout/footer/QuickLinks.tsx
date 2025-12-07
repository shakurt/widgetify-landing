import FooterLink from "./FooterLink";
const QuickLinks = () => {
  return (
    <section>
      <h3 className="mb-2 text-lg font-bold">دسترسی سریع</h3>
      <ul className="space-y-2 text-gray-600">
        <li>
          <FooterLink href="/">صفحه اصلی</FooterLink>
        </li>
        <li>
          <FooterLink href="/donate">حمایت مالی</FooterLink>
        </li>
      </ul>
    </section>
  );
};

export default QuickLinks;
