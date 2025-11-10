"use client";

import { useTranslations } from "next-intl";
import CustomImage from "@/components/CustomImage";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroSec() {
  const t = useTranslations("Homepage.HeroSec");
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 15 });
  const springY = useSpring(y, { stiffness: 100, damping: 15 });

  const maxOffset = 70;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * -maxOffset;
    const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * -maxOffset;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      role="banner"
      aria-label="Hero section with main title and decorative images"
      className="relative w-full h-[90vh] lg:h-[85vh] flex justify-center items-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CustomImage
        src="/home/bg_main_slider.jpg"
        alt="Hero background showing coffee"
        preload={true}
        className="absolute inset-0 -z-10"
        objectFit="cover"
      />

      <motion.div
        id="main-wrapper"
        className="relative flex flex-col items-center justify-center h-full lg:w-[60%]"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <h1 className="flex flex-col items-center py-5 text-primary text-center">
          <span className="text-[25px] md:text-[40px] lg:text-[70px] font-thin">
            {t("first_title")}
          </span>
          <span className="text-[30px] md:text-[45px] lg:text-[80px] font-bold">
            {t("second_title")}
          </span>
        </h1>

        <motion.div
          className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
          style={{
            x: useSpring(x, { stiffness: 50, damping: 10 }),
            y: useSpring(y, { stiffness: 50, damping: 10 }),
          }}
        >
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
        </motion.div>
      </motion.div>

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
