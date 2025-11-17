import LoadingCategories from "@/components/loaders/loading-categories/LoadingCategories";
import FullMenu from "@/components/menu/FullMenu";
import HeroSec from "@/components/menu/Herosec";
import { Suspense } from "react";

export default function Menu() {
  return (
    <>
      <HeroSec />
      <Suspense fallback={<LoadingCategories />}>
        <FullMenu />
      </Suspense>
    </>
  );
}
