"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AutoBreadcrumb() {
  const pathname = usePathname().split("?")[0];
  const t = useTranslations("Homepage.navbar");

  let segments = pathname.split("/").filter(Boolean);

  if (segments[0]?.length === 2) {
    segments = segments.slice(1);
  }

  const firstNumberIndex = segments.findIndex((seg) => !isNaN(Number(seg)));

  const items = segments.map((seg, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = !isNaN(Number(seg)) ? seg : t(seg) || seg;

    const isPlainText =
      firstNumberIndex > 0 && index === firstNumberIndex - 1;

    return { label, href, isPlainText };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 text-primary text-sm md:text-lg"
    >
      <ol className="flex items-center space-x-2">
        <li className="flex items-center">
          <Link href="/" className="hover:underline">
            {t("home") || "Home"}
          </Link>
          {items.length > 0 && <span className="mx-2 text-secondary">/</span>}
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <>
                  {item.isPlainText ? (
                    <span className="opacity-70">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="hover:underline">
                      {item.label}
                    </Link>
                  )}
                  <span className="mx-2 text-secondary">/</span>
                </>
              ) : (
                <span aria-current="page" className="opacity-70">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
