import LoadingCategories from "@/components/loaders/loading-categories/LoadingCategories";
import HeroSec from "@/components/menu-by-category/Herosec";
import dynamic from "next/dynamic";

const MenuByCategory = dynamic(
  () => import("@/components/menu-by-category/MenuByCategory"),
  { loading: () => <LoadingCategories /> },
);

export function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6].map((id) => ({
    categoryId: id.toString(),
  }));
}

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
  const categoryId = (await params).categoryId ?? "";
  return (
    <>
      <HeroSec />
      <MenuByCategory categoryId={categoryId} />
    </>
  );
}
