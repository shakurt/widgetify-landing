"use client";

import { LuMenu } from "react-icons/lu";

type SidebarButtonProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

const SidebarButton: React.FC<SidebarButtonProps> = ({ setIsMenuOpen }) => {
  return (
    <button
      type="button"
      aria-label="Open Navbar Menu"
      onClick={() => setIsMenuOpen(true)}
      className="cursor-pointer rounded-lg bg-white p-0.5 text-gray-600 transition-colors duration-200 hover:bg-gray-100 md:hidden"
    >
      <LuMenu size={24} />
    </button>
  );
};

export default SidebarButton;
