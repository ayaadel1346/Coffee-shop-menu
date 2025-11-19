import { Coffee } from "@/types";
import CustomImage from "./CustomImage";
import { useTranslations } from "next-intl";

export default function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const t = useTranslations("CoffeeCard");
  return (
    <div
      role="group"
      aria-label={`Coffee card`}
      className="flex flex-row items-center space-x-4"
    >
      <div className="min-w-[150px] h-[150px] relative">
        <CustomImage
          src={coffee.image}
          alt={`image of ${coffee.name}`}
          objectFit="cover"
        />
      </div>

      <section className="flex flex-col space-y-2 text-sm md:text-md lg:text-lg">
        <h2 className="text-xl md:text-2xl font-bold text-accent">
          {coffee.name}
        </h2>

        <p className="opacity-90">{coffee.description}</p>

        <p className="text-sm lg:text-base">
          <span className="font-semibold">{t("origin")}:</span> {coffee.origin}
        </p>

        <p className="text-sm  md:text-lg">
          <span className="font-semibold">{t("price")}:</span> ${coffee.price}
        </p>
      </section>
    </div>
  );
}
