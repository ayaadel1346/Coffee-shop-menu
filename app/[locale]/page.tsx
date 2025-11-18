import CategorySec from "@/components/homepage/category-sec/CategorySec";
import CoffeeMenu from "@/components/homepage/CoffeeMenu";
import DelightSec from "@/components/homepage/DelightSec/DelightSec";
import Drinks from "@/components/homepage/drinks/Drinks";
import HeroSec from "@/components/homepage/HeroSec";
import LifeBegin from "@/components/homepage/LifeBegin/LifeBegin";
import LoadingCategories from "@/components/loaders/loading-categories/LoadingCategories";
import TitleDescBottonSec from "@/components/templates/TitleDescBottonSec";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

export default function Home() {
  const tWelcome = useTranslations("Homepage.welcomeSec");
  return (
    <>
      <HeroSec />
      <TitleDescBottonSec
        title={tWelcome("title")}
        description={tWelcome("description")}
      />
      <DelightSec />
      <CoffeeMenu />
      <Suspense fallback={<LoadingCategories />}>
        <CategorySec />
      </Suspense>
      <Drinks />
      <LifeBegin />
    </>
  );
}
