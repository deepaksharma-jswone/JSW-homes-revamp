import Link from "next/link";
// import { StrapiImage } from "../strapi-image";
import EmblaCarousel from "../ui/carousel";
import { Button } from "../ui/button";

import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText?: string | null;
}

interface CarouselProps {
  heading: string;
  id: number;
  image: Image[];
  subHeading: string;
}

interface Link {
  id: number;
  url: string;
  text: string;
}

interface GallerySectionProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
  ctaButton: Link;
  carousal: CarouselProps;
}

export function GallerySection({
  data,
}: {
  readonly data: GallerySectionProps;
}) {
  const { subHeading, carousal, ctaButton } = data;
  //   console.log("data", carousal);

  return (
    <div className="flex items-center justify-center p-5 flex-col gap-5 bg-[#FCFCF7]">
      <h1 className="text-3xl font-medium text-center md:text-left md:text-5xl sm:text-3xl lg:text-7xl">
        Our Project <span className="text-[#FC7F11]">Gallery</span>
      </h1>
      <p className="text-base text-center md:text-xl lg:text-2xl text-slate-500">
        {subHeading}
      </p>
      <div className="w-full">
        <EmblaCarousel
          carosuelItems={carousal}
          options={OPTIONS}
          delay={5000}
        />
      </div>
      <Button
        className="rounded-lg mb-10 w-full"
        size={"full"}
        variant={"outline"}
      >
        {ctaButton.text}
      </Button>
    </div>
  );
}
