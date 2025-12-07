import Link from "next/link";

import { twMerge } from "tailwind-merge";

type SocialLinkProps = {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
};

const SocialLink = ({
  href,
  children,
  ariaLabel,
  className,
}: SocialLinkProps) => {
  const mergedClassName = twMerge(
    "flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-all hover:shadow duration-300 text-gray-700 hover:text-white bg-white",
    className
  );

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={mergedClassName}
      aria-label={`${ariaLabel} Link`}
    >
      {children}
    </Link>
  );
};

export default SocialLink;
