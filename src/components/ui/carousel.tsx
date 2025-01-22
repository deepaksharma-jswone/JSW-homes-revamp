"use client";

import React from "react";
import { StrapiImage } from "../strapi-image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import { cn } from "@/lib/utils";

import { DotButton, useDotButton } from "./carousel-dot-button";

export default function EmblaCarousel({
  carosuelItems,
  options,
  delay = 2000,
  headingClassName = "",
  subHeadingClassName = "",
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: delay }),
    ClassNames(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carosuelItems?.map((item: any) => (
            <div className="embla__slide" key={item.id}>
              <StrapiImage
                src={item.image.url}
                width={400}
                height={600}
                alt={item.image.subHeading}
                className="embla__slide__img"
              />
              {item?.subHeading && (
                <p
                  className={cn(
                    "text-sm pt-10 text-center text-[#000000]",
                    subHeadingClassName
                  )}
                >
                  {item?.subHeading}
                  {/* <p className="pt-2">~{item?.heading}</p> */}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
