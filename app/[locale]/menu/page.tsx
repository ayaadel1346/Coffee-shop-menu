import LoadingCategories from "@/components/loaders/loading-categories/LoadingCategories";
import HeroSec from "@/components/menu/Herosec";
import dynamic from "next/dynamic";

const FullMenu = dynamic(() => import("@/components/menu/FullMenu"), {
  loading: () => <LoadingCategories />,
});
export default function Menu() {
  return (
    <>
      <HeroSec />
      <FullMenu />
    </>
  );
}
