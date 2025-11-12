"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CustomImage from "../../templates/CustomImage";
import { useTranslations } from "next-intl";
import styles from "./DelightSec.module.css";

export default function DelightSec() {
  const t = useTranslations("Homepage.delightSec");
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -400]);

  return (
    <div
      ref={ref}
      id={styles.delight}
      className="
        relative flex  items-center justify-around
        w-full  h-[95vh] md:h-[75vh] lg:h-[92vh] px-3 lg:px-0
        overflow-x-hidden
      "
    >
      <CustomImage
        src="/home/bg_home_paralax.jpg"
        alt=""
        aria-hidden="true"
        preload={false}
        className="absolute inset-0 -z-10"
        objectFit="cover"
      />

      <motion.div
        style={{ y }}
        className="
          relative z-20
          w-[50%] h-[200px]
          md:h-[300px]
          lg:w-[400px] lg:h-[400px]
        "
      >
        <CustomImage
          alt=""
          aria-hidden="true"
          src="/home/slider_2_el_2.png"
          srcSet={[
            { src: "/home/cupmobile.png", media: "(max-width: 767px)" },
            {
              src: "/home/cuptablet.png",
              media: "(min-width: 768px) and (max-width: 1023px)",
            },
            { src: "/home/slider_2_el_2.png", media: "(min-width: 1024px)" },
          ]}
          preload={true}
          objectFit="contain"
          className="drop-shadow-2xl"
        />
      </motion.div>

      <section
        className="
          relative z-10
          w-[50%] md:w-[45%] lg:w-[35%]
        "
        aria-labelledby="delight-heading"
      >
        <h2
          id="delight-heading"
          className="
            text-primary font-normal
            text-[25px] md:text-4xl lg:text-6xl
          "
        >
          <span
            className="
              block font-bold
              text-[30px] md:text-5xl lg:text-8xl
            "
          >
            {t("heading.line1")}
          </span>
          <span
            className="
              block font-bold
              text-[30px] md:text-5xl lg:text-8xl
            "
          >
            {t("heading.line2")}
          </span>
          {t("heading.line3")}
        </h2>

        <p
          className="
            mt-4 lg:mt-7
            text-[14px] md:text-[18px] lg:text-[20px]
            leading-[25px] lg:leading-[30px]
          "
        >
          {t("description")}
        </p>
      </section>
    </div>
  );
}
