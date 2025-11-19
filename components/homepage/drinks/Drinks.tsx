"use client";

import CustomImage from "@/components/core/CustomImage";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Drinks() {
  const tDrinks = useTranslations("drinks");
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();

  const drinks = [
    {
      id: 1,
      image: "/home/second_slider_el_1.png",
      subImage: "/home/second_slider_el_2.png",
      title: tDrinks("0.title"),
      subtitle: tDrinks("0.subtitle"),
      description: tDrinks("0.description"),
    },
    {
      id: 2,
      image: "/home/second_slider_el_3.png",
      subImage: "/home/second_slider_el_2.png",
      title: tDrinks("1.title"),
      subtitle: tDrinks("1.subtitle"),
      description: tDrinks("1.description"),
    },
    {
      id: 3,
      image: "/home/second_slider_el_4.png",
      subImage: "/home/second_slider_el_2.png",
      title: tDrinks("2.title"),
      subtitle: tDrinks("2.subtitle"),
      description: tDrinks("2.description"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const isRTL = locale === "ar";

  useEffect(() => {
    if (paused) return;

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % drinks.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentIndex, paused, drinks.length]);

  return (
    <section className="relative flex justify-center w-full min-h-[90vh] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        {drinks.map(
          (drink, index) =>
            index === currentIndex && (
              <div
                key={drink.id}
                className="w-full flex flex-row justify-end items-center gap-5 p-4 rounded shadow bg-footer-bg-color text-white"
              >
                <motion.div
                  key={drink.id + "-image"}
                  initial={{ x: isRTL ? "100%" : "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: isRTL ? "100%" : "-100%", opacity: 0 }}
                  transition={{ type: "tween", duration: 1 }}
                  className="relative w-[113px] h-[113px] md:w-[250px] md:h-[250px] lg:w-[34%] lg:h-[75%]"
                >
                  <CustomImage src={drink.image} alt={drink.title} />
                </motion.div>

                <motion.div
                  key={drink.id + "-content"}
                  className="w-1/2 px-2 md:px-7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative w-[100px] h-20 md:w-[150px] md:h-[130px]">
                    <CustomImage
                      src={drink.subImage}
                      alt={`${drink.title} sub`}
                    />
                  </div>

                  <h2 className="text-lg leading-[30px] mt-5  md:text-6xl md:leading-[70px] font-bold">
                    {drink.title}
                  </h2>
                  <h3 className="text-md leading-[30px] md:text-2xl  md:leading-[60px] font-medium">
                    {drink.subtitle}
                  </h3>
                  <p className="md:w-[60%] text-sm leading-[30px] mb-4">
                    {drink.description}
                  </p>

                  <button
                    onClick={() => router.push("/menu")}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    className="relative cursor-pointer text-[14px] md:text-[18px] font-bold text-accent-2 border-2 border-accent-2 py-3 px-5 md:py-4 md:px-6 my-5
                      after:content-[''] after:absolute after:top-[8%] after:left-[3.5%] after:w-full after:h-full after:border-2 after:border-accent-2 after:opacity-0
                      hover:after:opacity-100 after:transition-opacity after:duration-300 after:ease-out"
                  >
                    {t("viewFullMenu")}
                  </button>
                </motion.div>
              </div>
            ),
        )}
      </AnimatePresence>
    </section>
  );
}
