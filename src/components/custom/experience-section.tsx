import Link from "next/link";
import EmblaCarousel from "../ui/carousel";

import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };

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

interface ExperienceSectionProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
  ctaButton: Link;
  carousel: CarouselProps;
}

export function ExperienceSection({
  data,
}: {
  readonly data: ExperienceSectionProps;
}) {
  const { subHeading, carousel, heading } = data;
  // console.log("data", data);

  return (
    <div className="flex items-center justify-center p-5 flex-col gap-5 bg-[#FCFCF7]">
      <h1 className="text-3xl font-medium text-center md:text-left md:text-5xl sm:text-3xl lg:text-7xl">
        {heading}
      </h1>
      <p className="text-base text-center md:text-xl lg:text-2xl text-slate-500">
        {subHeading}
      </p>
      <EmblaCarousel
        carosuelItems={carousel}
        options={OPTIONS}
        delay={5000}
        subHeadingClassName={"text-left #6B7280 w-3/4"}
      />
    </div>
  );
}
