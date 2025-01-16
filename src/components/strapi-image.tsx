import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
  fill?: boolean;
}

export function StrapiImage({
  src,
  alt = "hero image",
  height = 0,
  width = 0,
  className,
  fill,
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return (
    <Image
      layout="responsive"
      src={imageUrl}
      alt={alt}
      className={className}
      priority
      height={height}
      width={width}
    />
  );
}
