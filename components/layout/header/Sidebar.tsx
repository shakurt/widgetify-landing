import { useRef } from "react";

import { LuX } from "react-icons/lu";
import { useClickAway, useLockBodyScroll } from "react-use";

import FullLogo from "@/components/logo/FullLogo";

import NavLinkList from "./NavLinkList";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);

  useClickAway(sidebarRef, () => {
    if (isOpen) onClose();
  });

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between border-b border-gray-200 p-4">
            <button type="button" onClick={onClose} className="cursor-pointer">
              <FullLogo />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-lg bg-white p-0.5 text-gray-600 transition-colors duration-200 hover:bg-gray-100"
              aria-label="Close Sidebar"
            >
              <LuX size={24} />
            </button>
          </header>

          <NavLinkList onClose={onClose} />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
