import AutoBreadcrumb from "../AutoBreadcrumb";
import CustomImage from "./CustomImage";

export default function TopHeroSec({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: string;
}) {
  return (
    <div
      className="
        relative h-[35vh] w-full flex flex-col justify-center items-center overflow-hidden
        after:content-[''] after:absolute after:bottom-0 after:left-0
        after:h-0.5 after:w-[30%] after:bg-accent
        after:animate-[slide-horizontal_3s_linear_infinite]
      "
    >
      <CustomImage
        src={imageSrc}
        alt="Hero background"
        preload={true}
        fetchPriority="high"
        className="absolute inset-0 -z-10"
        objectFit="cover"
      />

      <h1 className="text-primary text-4xl font-bold mb-4">{title}</h1>
      <AutoBreadcrumb />
    </div>
  );
}
