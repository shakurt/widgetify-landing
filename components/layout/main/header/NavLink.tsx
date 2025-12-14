"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  isExternal?: boolean;
  Icon: React.ElementType;
  label: string;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  isExternal = false,
  Icon,
  label,
  onClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      aria-label={isExternal ? `${label} - باز شدن در تب جدید` : label}
      aria-current={isActive ? "page" : undefined}
      className={`flex items-center rounded-md px-3 py-2 transition-colors duration-150 ${
        isActive
          ? "bg-blue-50 font-medium text-blue-600"
          : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
      }`}
    >
      <Icon className="ml-1.5 size-4.5" aria-hidden="true" />
      {label}
    </Link>
  );
};

export default NavLink;
