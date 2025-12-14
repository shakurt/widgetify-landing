import FooterLink from "./FooterLink";

const SubFooter = () => {
  return (
    <div className="border-t border-gray-200 py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6"
          aria-label="لینک‌های قانونی"
        >
          <FooterLink href="/terms">قوانین و مقررات</FooterLink>
          <FooterLink href="/privacy">حریم خصوصی</FooterLink>
          <FooterLink href="/faq">سوالات متداول</FooterLink>
        </nav>

        <div className="text-center md:text-right">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ویجتیفای. تمامی حقوق محفوظ است.
          </p>
          <p className="mt-1 text-xs text-gray-400">ساخته شده با ❤️ در ایران</p>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
