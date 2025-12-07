import Link from "next/link";

type SubFooterLinkProps =
  | {
      href: string;
      children: React.ReactNode;
      target?: "_blank" | "_self" | "_parent" | "_top";
      comingSoon?: false;
    }
  | {
      href?: never;
      children: React.ReactNode;
      target?: never;
      comingSoon: true;
    };

const FooterLink: React.FC<SubFooterLinkProps> = ({
  href,
  children,
  target = "_self",
  comingSoon = false,
}) => {
  if (comingSoon)
    return (
      <span
        className="inline-flex cursor-not-allowed items-center text-gray-400 select-none"
        role="text"
        aria-label={`${children} - به زودی`}
      >
        {children}
        <span
          className="mr-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-600"
          aria-hidden="true"
        >
          به زودی
        </span>
      </span>
    );

  return (
    <Link
      href={href!}
      className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-600"
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      itemProp="url"
    >
      {children}
    </Link>
  );
};

export default FooterLink;
