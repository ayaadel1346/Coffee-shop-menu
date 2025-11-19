import Image from "next/image";

interface SrcSetEntry {
  src: string;
  type?: string;
  media?: string;
}

interface PreloadImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
  preload?: boolean;
  fetchPriority?: "high" | "low" | "auto";

  sizes?: string;
  className?: string;
  srcSet?: SrcSetEntry[];
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export default function CustomImage({
  src,
  alt,
  width,
  height,
  blurDataURL,
  preload = false,
  fetchPriority = "auto",
  sizes = "",
  className = "",
  srcSet = [],
  objectFit,
}: PreloadImageProps) {
  const useFill = !width && !height;

  return (
    <picture>
      {srcSet.map((source, index) => (
        <source
          key={index}
          srcSet={source.src}
          type={source.type}
          media={source.media}
        />
      ))}

      {useFill ? (
        <Image
          src={src}
          alt={alt}
          fill
          objectFit={objectFit}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          sizes={sizes}
          preload={preload}
          fetchPriority={fetchPriority}
          className={className}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          sizes={sizes}
          preload={preload}
          fetchPriority={fetchPriority}
          className={className}
        />
      )}
    </picture>
  );
}
