import { LogIn, Shield, HandHeart, MessageSquareWarning } from "lucide-react";

import NavLink from "@/components/layout/header/NavLink";

type NavLinkListProps = {
  onClose?: () => void;
};

const NavLinkList: React.FC<NavLinkListProps> = ({ onClose }) => {
  return (
    <nav className="flex-1 overflow-y-auto p-4 md:overflow-visible md:p-0">
      <ul className="flex flex-col gap-y-2 md:flex md:flex-row md:items-center md:gap-x-1 md:gap-y-0">
        <li>
          <NavLink
            href="/donate"
            Icon={HandHeart}
            label="حمایت"
            onClick={onClose}
          />
        </li>
        <li>
          <NavLink
            href="/privacy"
            Icon={Shield}
            label="حریم خصوصی"
            onClick={onClose}
          />
        </li>
        <li>
          <NavLink
            href="https://feedback.widgetify.ir"
            isExternal={true}
            Icon={MessageSquareWarning}
            label="پیشنهاد و انتقادات"
            onClick={onClose}
          />
        </li>
        <li>
          <NavLink
            href="/login"
            Icon={LogIn}
            label="ورود / ثبت نام"
            onClick={onClose}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavLinkList;
