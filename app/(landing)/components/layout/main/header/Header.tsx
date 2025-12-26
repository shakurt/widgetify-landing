"use client";

import { useState } from "react";

import NavLinkList from "@landing/components/layout/main/header/NavLinkList";
import Sidebar from "@landing/components/layout/main/header/Sidebar";
import { LuMenu } from "react-icons/lu";
import { useMountedState, useWindowScroll } from "react-use";

import FullLogo from "@/components/logo/FullLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMounted = useMountedState();

  const { y } = useWindowScroll();
  const isScrolled = isMounted() && y > 10;

  return (
    <header
      aria-label="ظرف نوار ناوبری"
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <FullLogo
          classname={`transition-all duration-200 ${isScrolled && "h-9 w-9"}`}
        />

        <div aria-label="ناوبری دسکتاپ" className="hidden md:flex">
          <NavLinkList />
        </div>

        <button
          type="button"
          aria-label="باز کردن منوی ناوبری"
          onClick={() => setIsMenuOpen(true)}
          disabled={isMenuOpen}
          className="cursor-pointer rounded-lg bg-white p-0.5 text-gray-600 transition-colors duration-200 hover:bg-gray-100 md:hidden"
        >
          <LuMenu size={24} aria-hidden="true" />
        </button>
      </div>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
