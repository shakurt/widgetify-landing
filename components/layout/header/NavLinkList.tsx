"use client";

import {
  LuHandHeart,
  LuShield,
  LuMessageSquareWarning,
  LuHouse,
} from "react-icons/lu";

import NavLink from "@/components/layout/header/NavLink";

type NavLinkListProps = {
  onClose?: () => void;
};

const NavLinkList: React.FC<NavLinkListProps> = ({ onClose }) => {
  return (
    <nav
      className="flex-1 overflow-y-auto p-4 md:overflow-visible md:p-0"
      aria-label="منوی اصلی"
    >
      <ul className="flex flex-col gap-y-2 md:flex md:flex-row md:items-center md:gap-x-1 md:gap-y-0">
        <li>
          <NavLink href="/" Icon={LuHouse} label="خانه" onClick={onClose} />
        </li>
        <li>
          <NavLink
            href="/donate"
            Icon={LuHandHeart}
            label="حمایت"
            onClick={onClose}
          />
        </li>
        <li>
          <NavLink
            href="/privacy"
            Icon={LuShield}
            label="حریم خصوصی"
            onClick={onClose}
          />
        </li>
        <li>
          <NavLink
            href="https://feedback.widgetify.ir"
            isExternal={true}
            Icon={LuMessageSquareWarning}
            label="پیشنهاد و انتقادات"
            onClick={onClose}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavLinkList;
