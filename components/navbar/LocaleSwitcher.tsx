"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { FaGlobe } from "react-icons/fa";

interface LocaleSwitcherProps {
  className?: string;
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({
  className = "flex",
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const newPathname = segments.join("/");

    startTransition(() => {
      router.replace(newPathname);
    });
  };

  return (
    <div
      className={`relative ${className} items-center px-2 py-1 bg-background border border-gray-300 rounded-lg shadow-sm`}
      role="group"
      aria-label="Language switcher"
    >
      <FaGlobe className="text-gray-600 mx-1" size={18} aria-hidden="true" />

      <span
        id="current-language"
        className="text-primary text-sm"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {localeActive === "ar" ? "العربية" : "English"}
      </span>

      <svg
        className="w-4 h-4 text-primary mx-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>

      <select
        id="locale-select"
        name="locale"
        value={localeActive}
        onChange={onSelectChange}
        disabled={isPending}
        aria-labelledby="current-language"
        className="absolute inset-0 opacity-0 cursor-pointer"
      >
        <option value="en" aria-label="Switch to English">
          English
        </option>
        <option value="ar" aria-label="Switch to Arabic">
          Arabic
        </option>
      </select>
    </div>
  );
};

export default LocaleSwitcher;
