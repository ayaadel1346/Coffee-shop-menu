import LoadingCategories from "@/components/loaders/loading-categories/LoadingCategories";
import HeroSec from "@/components/menu/Herosec";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const FullMenu = dynamic(() => import("@/components/menu/FullMenu"));

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
