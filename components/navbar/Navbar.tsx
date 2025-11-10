"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomImage from "../CustomImage";
import LocaleSwitcher from "./LocaleSwitcher";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const t = useTranslations("Homepage.Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const cleanPathname = pathname.replace(new RegExp(`^/${locale}`), "") || "/";
  const isRtl = locale === "ar";
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/", label: t("home") },
    { href: "/menu", label: t("menu") },
    { href: "/about", label: t("about_us") },
    { href: "/contact", label: t("contact_us") },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 flex flex-col border-b border-secondary bg-background z-50 px-6 md:px-20 py-4">
      <div className="flex justify-between items-center w-full">
        <CustomImage
          src="/logo.png"
          alt="Logo image"
          width={128}
          height={128}
          preload={true}
          srcSet={[{ src: "/logo.png", type: "image/webp" }]}
          className="w-24 h-24 md:w-32 md:h-[124px] rounded-full object-cover"
        />

        <nav
          className="hidden lg:flex items-center gap-10"
          aria-label="Main navigation"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={handleLinkClick}
              aria-current={cleanPathname === link.href ? "page" : undefined}
              className={`
                relative text-[20px] font-semibold transition-colors
                ${cleanPathname === link.href ? "text-active-link" : "text-primary"}
                after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full
                after:bg-primary after:scale-x-0 after:transition-transform
                hover:after:scale-x-100
                ${isRtl ? "after:right-0 after:origin-right" : "after:left-0 after:origin-left"}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <LocaleSwitcher className="hidden lg:flex" />

        <button
          aria-label="Toggle navigation menu"
          className="lg:hidden text-primary text-2xl focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <MobileNav
        menuOpen={menuOpen}
        links={links}
        cleanPathname={cleanPathname}
        handleLinkClick={handleLinkClick}
      />
    </header>
  );
}
