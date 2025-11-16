import { useTranslations } from "next-intl";
import TopHeroSec from "../templates/TopHeroSec";

export default function HeroSec() {
  const t = useTranslations("Homepage.navbar");

  return <TopHeroSec imageSrc="/home/top_bg_1.jpg" title={t("menu")} />;
}
