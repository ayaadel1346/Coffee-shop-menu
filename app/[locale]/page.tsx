import DelightSec from "@/components/homepage/DelightSec/DelightSec";
import HeroSec from "@/components/homepage/HeroSec";
import TitleDescBottonSec from "@/components/templates/TitleDescBottonSec";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Homepage.WelcomeSec");
  return (
    <>
      <HeroSec />
      <TitleDescBottonSec title={t("title")} description={t("description")} />
      <DelightSec />
    </>
  );
}
