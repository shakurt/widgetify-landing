"use client";
import { useState } from "react";

import { Menu } from "lucide-react";
import { useMountedState, useWindowScroll } from "react-use";

import NavLinkList from "@/components/layout/header/NavLinkList";
import Sidebar from "@/components/layout/header/Sidebar";
import FullLogo from "@/components/logo/FullLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMounted = useMountedState();

  const { y } = useWindowScroll();
  const isScrolled = isMounted() && y > 10;

  return (
    // TODO: check for shadow transition
    <div
      aria-label="navbar container"
      className={`sticky top-0 z-50 bg-white transition-[shadow] duration-200 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <FullLogo
          classname={`transition-[width,height] duration-200s ${isScrolled && "h-9 w-9"}`}
        />

        <div aria-label="Desktop Navigation" className="hidden md:flex">
          <NavLinkList />
        </div>

        <button
          type="button"
          aria-label="Open Navbar Menu"
          onClick={() => setIsMenuOpen(true)}
          className="cursor-pointer rounded bg-white text-gray-600 transition-colors duration-200 hover:bg-gray-100 md:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default Header;
