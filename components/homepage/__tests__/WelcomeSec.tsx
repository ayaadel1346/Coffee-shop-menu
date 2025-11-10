import { useTranslations } from "next-intl";

export default function WelcomeSec() {
  const t = useTranslations("Homepage.WelcomeSec");

  return (
    <section
      role="region"
      aria-labelledby="welcome-title"
      className="flex flex-col justify-center items-center md:w-[65%] mx-auto my-[70px] px-3 md:px-0"
    >
      <h2
        data-testid="welcome-title"
        className="text-primary text-[18px] md:text-[30px] font-bold mb-2"
      >
        {t("title")}
      </h2>
      <p
        data-testid="welcome-description"
        className="text-secondary text-[16px] md:text-[18px] text-center leading-5 md:leading-[30px]"
      >
        {t("description")}
      </p>
    </section>
  );
}
