import CategorySec from "@/components/homepage/category-sec/CategorySec";
import DelightSec from "@/components/homepage/DelightSec/DelightSec";
import HeroSec from "@/components/homepage/HeroSec";
import LifeBegin from "@/components/homepage/LifeBegin/LifeBegin";
import LoadingCategories from "@/components/loaders/loading-categories/LoadingCategories";
import TitleDescBottonSec from "@/components/templates/TitleDescBottonSec";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

export default function Home() {
  const tWelcome = useTranslations("Homepage.welcomeSec");
  const tCoffeeMenu = useTranslations("Homepage.coffeeMenu");
  return (
    <>
      <HeroSec />
      <TitleDescBottonSec
        title={tWelcome("title")}
        description={tWelcome("description")}
      />
      <DelightSec />
      <TitleDescBottonSec
        title={tCoffeeMenu("title")}
        quote={tCoffeeMenu("description")}
        buttonLabel={tCoffeeMenu("buttonLabel")}
      />
      <Suspense fallback={<LoadingCategories />}>
        <CategorySec />
      </Suspense>

      <LifeBegin />
    </>
  );
}
