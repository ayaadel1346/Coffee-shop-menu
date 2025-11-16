import { fetchCoffeeByCategories } from "@/lib/caffeeByCategory";
import { useLocale } from "next-intl";
import { use } from "react";
import CoffeeCard from "../templates/CoffeeCard";

export default function MenuByCategory({ categoryId }: { categoryId: string }) {
  const locale = useLocale();
  const coffees = use(fetchCoffeeByCategories(locale, categoryId));

  if (!coffees || coffees.length === 0) {
    return (
      <p className="mt-10 text-center text-lg text-primary">
        No products available yet
      </p>
    );
  }

  return (
    <main className="min-h-[30vh] px-7 py-11 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
      {coffees.map((coffee, index) => (
        <CoffeeCard key={index} coffee={coffee} />
      ))}
    </main>
  );
}
