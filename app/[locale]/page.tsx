import CoffeeMenu from "@/components/homepage/CoffeeMenu";
import DelightSec from "@/components/homepage/delight-sec/DelightSec";
import Drinks from "@/components/homepage/drinks/Drinks";
import HeroSec from "@/components/homepage/HeroSec";
import LifeBegin from "@/components/homepage/life-begin/LifeBegin";
import LoadingCategories from "@/components/loaders/loading-categories/LoadingCategories";
import TitleDescBottonSec from "@/components/core/TitleDescBottonSec";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const CategorySec = dynamic(
  () => import("@/components/homepage/category-sec/CategorySec"),
  { loading: () => <LoadingCategories /> },
);

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
      <CategorySec />
      <Drinks />
      <LifeBegin />
    </>
  );
}
