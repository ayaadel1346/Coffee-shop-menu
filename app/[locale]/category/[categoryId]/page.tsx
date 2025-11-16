import LoadingCategories from "@/components/loaders/loading-categories/LoadingCategories";
import HeroSec from "@/components/menu-by-category/Herosec";
import MenuByCategory from "@/components/menu-by-category/MenuByCategory";
import { Suspense } from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ name?: string }>;
}) {
  const { name } = await searchParams;
  const categoryName = name ? name.replace(/-/g, " ") : "Category";

  return {
    title: `${categoryName} Menu`,
    description: `Browse our coffee menu for ${categoryName}`,
  };
}

export default async function Category({
  params,
}: {
  params: Promise<{ categoryId?: string }>;
}) {
  const categoryId = (await params).categoryId?? "";;
  return (
    <>
      <HeroSec />
      <Suspense fallback={<LoadingCategories />}>
        <MenuByCategory categoryId={categoryId} />
      </Suspense>
    </>
  );
}
