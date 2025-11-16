import CustomImage from "../../templates/CustomImage";
import { use } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { fetchCategories } from "@/lib/category";

export default function CategorySec() {
  const locale = useLocale();
  const categories = use(fetchCategories(locale));

  if (!categories || categories.length === 0) return null;

  return (
    <div className="relative w-full min-h-[60vh]">
      <CustomImage
        src="/home/category_bg.jpeg"
        alt="Hero background showing coffee"
        preload={false}
        objectFit="cover"
        className="absolute inset-0 -z-10"
      />

      <main
        aria-label="Coffee categories"
        className="grid min-h-[60vh] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10 justify-items-center items-center"
      >
        {categories.map((category) => (
          <Link
            href={{
              pathname: `/category/${category.id}`,
              query: { name: category.name },
            }}
            key={category.id}
            className="group"
            aria-label={`View ${category.name} category page`}
          >
            <div className="relative mx-auto w-[200px] h-[200px] rounded-full overflow-hidden">
              <CustomImage
                src={category.image}
                alt={`catgeory image ${category.id}`}
                preload={false}
                objectFit="cover"
                className="transition-transform duration-300 ease-out group-hover:scale-115"
              />
            </div>

            <h3 className="mt-4 text-center text-lg font-bold text-primary">
              {category.name}
            </h3>
          </Link>
        ))}
      </main>
    </div>
  );
}
