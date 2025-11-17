"use client";

import { useTranslations } from "next-intl";
import TitleDescBottonSec from "../templates/TitleDescBottonSec";
import { useRouter } from "next/navigation";

export default function CoffeeMenu() {
  const tCoffeeMenu = useTranslations("Homepage.coffeeMenu");
  const router = useRouter();
  return (
    <TitleDescBottonSec
      title={tCoffeeMenu("title")}
      quote={tCoffeeMenu("description")}
      buttonLabel={tCoffeeMenu("buttonLabel")}
      onButtonClick={() => router.push("/menu")}
    />
  );
}
