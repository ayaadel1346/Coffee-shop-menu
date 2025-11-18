import Link from "next/link";
import CustomImage from "./templates/CustomImage";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Website footer"
      className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center text-white bg-footer-bg-color"
    >
      <CustomImage
        src="/logo_footer.png"
        alt="CafféLine logo"
        width={100}
        height={100}
        preload={false}
      />

      <p className="my-9 md:max-w-[50%]">{t("description")}</p>

      <address
        aria-label="Company contact information"
        className="grid grid-cols-1 gap-4 text-sm not-italic leading-relaxed md:grid-cols-2"
      >
        <p>{t("address")}</p>

        <p>
          <span className="font-semibold">{t("phoneLabel")} </span>
          <a
            href="tel:8884567890"
            aria-label="Call us at 888 456 7890"
            className="transition-all duration-300 ease-in-out hover:text-accent-light"
          >
            {t("phone")}
          </a>
        </p>

        <p>
          <span className="font-semibold">{t("faxLabel")} </span>
          {t("fax")}
        </p>

        <p>
          <span className="font-semibold">{t("emailLabel")} </span>
          <a
            href="mailto:info@caffeline.com"
            aria-label="Email us at info at caffe line dot com"
            className="transition-all duration-300 ease-in-out hover:text-accent-light"
          >
            {t("email")}
          </a>
        </p>
      </address>

      <hr className="my-6 w-3/4 border-t border-secondary" />

      <div
        aria-label="Copyright and legal links"
        className="flex flex-col items-center justify-center gap-2 text-sm text-white md:flex-row"
      >
        <p>
          © {currentYear} {t("rights")}
        </p>

        <Link
          href="/"
          aria-label="Read Terms of Use"
          className="transition-all duration-300 ease-in-out hover:text-accent-light"
        >
          {t("terms")}
        </Link>

        <span aria-hidden="true">•</span>

        <Link
          href="/"
          aria-label="Read Privacy Policy"
          className="transition-all duration-300 ease-in-out hover:text-accent-light"
        >
          {t("privacy")}
        </Link>
      </div>
    </footer>
  );
}
