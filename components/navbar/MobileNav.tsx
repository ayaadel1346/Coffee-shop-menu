"use client";

import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

interface MobileNavProps {
  menuOpen: boolean;
  links: { href: string; label: string }[];
  cleanPathname: string;
  handleLinkClick: () => void;
}

export default function MobileNav({
  menuOpen,
  links,
  cleanPathname,
  handleLinkClick,
}: MobileNavProps) {
  return (
    <div
      className={`
        lg:hidden absolute left-0 right-0 top-full z-40
        transform transition-transform duration-300 ease-in-out
        will-change-transform
        ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"}
      `}
      role="menu"
      aria-label="Mobile navigation menu"
      aria-hidden={!menuOpen}
    >
      <div
        className="bg-background border-secondary shadow-md py-6 px-4
                   flex flex-col items-center gap-6"
        // keep padding so menu has visible area to translate
      >
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={handleLinkClick}
            aria-current={cleanPathname === link.href ? "page" : undefined}
            role="menuitem"
            className={`
              text-[14px] md:text-[18px] font-medium transition-colors
              ${cleanPathname === link.href ? "text-active-link" : "text-primary"}
            `}
          >
            {link.label}
          </Link>
        ))}

        <LocaleSwitcher className="mt-4 flex" />
      </div>
    </div>
  );
}
