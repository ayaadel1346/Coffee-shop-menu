import { useTranslations } from "next-intl";

export default function MainPage() {
  const t = useTranslations("AboutPage");

  return (
    <main className="relative flex flex-col items-center justify-start w-full min-h-[40vh] px-7 py-11 text-primary">
      <section
        aria-labelledby="about-subtitle"
        className="mb-12 w-full md:max-w-[80%] lg:max-w-3/5"
      >
        <h2
          id="about-subtitle"
          className="mb-4 text-2xl md:text-3xl font-bold text-accent"
        >
          {t("subtitle")}
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          {t("description")}
        </p>
      </section>

      <section
        aria-label="Mission and Vision"
        className="mb-12 w-full md:max-w-[80%] lg:max-w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8 text-center"
      >
        <div className="p-6 rounded-lg shadow-lg">
          <h3 className="mb-2 text-xl md:text-2xl font-semibold text-accent">
            {t("missionTitle")}
          </h3>
          <p>{t("missionText")}</p>
        </div>

        <div className="p-6 rounded-lg shadow-lg">
          <h3 className="mb-2 text-xl md:text-2xl font-semibold text-accent">
            {t("visionTitle")}
          </h3>
          <p>{t("visionText")}</p>
        </div>
      </section>

      <section
        aria-labelledby="team-title"
        className="mb-12 w-full md:max-w-[80%] lg:max-w-3/5 text-center"
      >
        <h2
          id="team-title"
          className="mb-6 text-2xl md:text-3xl font-bold text-accent"
        >
          {t("teamTitle")}
        </h2>
        <p>{t("teamText")}</p>
      </section>
    </main>
  );
}
