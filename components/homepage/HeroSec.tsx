"use client";

import { useTranslations } from "next-intl";
import CustomImage from "@/components/CustomImage";
import { useState } from "react";

export default function HeroSec() {
  const t = useTranslations("Homepage.herosec");
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const maxOffset = 70;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * -maxOffset;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -maxOffset;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      role="banner"
      aria-label="Hero section with main title and decorative images"
      className="relative w-full h-[90vh] lg:h-[85vh] flex justify-center items-center overflow-hidden"
    >
      <CustomImage
        src="/home/bg_main_slider.jpg"
        alt="Hero background showing coffee"
        preload={true}
        className="absolute inset-0 -z-10"
        objectFit="cover"
      />

      <div
        id="main-wrapper"
        className="relative flex flex-col items-center justify-center h-full lg:w-[60%] transition-transform duration-150"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        <h1 className="flex flex-col items-center py-5 text-primary">
          <span className="text-[25px] md:text-[40px] lg:text-[70px] font-thin">
            {t("first_title")}
          </span>
          <span className="text-[30px] md:text-[45px] lg:text-[80px] font-bold">
            {t("second_title")}
          </span>
        </h1>

        <CustomImage
          width={70}
          height={134}
          alt="Decorative arrow pointing right"
          src="/home/main_slider_el_6.png"
          preload={true}
          className="hidden lg:block absolute top-[40%] right-[3%]"
          aria-hidden="true"
        />
        <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
          <CustomImage
            alt="Decorative coffee cup illustration"
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
            aria-hidden="true"
          />
        </div>
      </div>

      <CustomImage
        width={263}
        height={174}
        alt="Top-left decorative shape"
        src="/home/slider_1_el_1.png"
        preload={true}
        className="absolute top-0 left-0 w-20 h-[50px] md:w-[120px] md:h-20 lg:w-[263px] lg:h-[174px]"
        aria-hidden="true"
      />

      <CustomImage
        width={169}
        height={131}
        alt="Top-right decorative pattern"
        src="/home/main_slider_el_3.png"
        preload={true}
        className="hidden lg:block absolute top-0 right-0"
        aria-hidden="true"
      />

      <CustomImage
        width={300}
        height={200}
        alt="Bottom-left decorative element"
        src="/home/slider_2_el_1.png"
        preload={true}
        className="hidden lg:block absolute bottom-0 left-0"
        aria-hidden="true"
      />

      <CustomImage
        width={300}
        height={200}
        alt="Bottom-right decorative design"
        src="/home/main_slider_el_5.png"
        preload={true}
        className="hidden lg:block absolute bottom-0 right-0"
        aria-hidden="true"
      />
    </div>
  );
}
