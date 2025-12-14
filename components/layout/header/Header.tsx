"use client";

import { useState } from "react";

import { useMountedState, useWindowScroll } from "react-use";

import NavLinkList from "@/components/layout/header/NavLinkList";
import Sidebar from "@/components/layout/header/Sidebar";
import FullLogo from "@/components/logo/FullLogo";

import SidebarButton from "./SidebarButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMounted = useMountedState();

  const { y } = useWindowScroll();
  const isScrolled = isMounted() && y > 10;

  return (
    <div
      aria-label="navbar container"
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <FullLogo
          classname={`transition-[width,height] duration-200 ${isScrolled && "h-9 w-9"}`}
        />

        <div aria-label="Desktop Navigation" className="hidden md:flex">
          <NavLinkList />
        </div>

        <SidebarButton setIsMenuOpen={setIsMenuOpen} />
      </div>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default Header;
