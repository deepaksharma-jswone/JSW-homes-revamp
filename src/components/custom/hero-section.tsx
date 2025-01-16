import Link from "next/link";
import { StrapiImage } from "../strapi-image";
import { Button } from "../ui/button";

interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

interface Link {
  id: number;
  url: string;
  text: string;
}

interface HeroSectionProps {
  id: number;
  documentId: string;
  __component: string;
  Heading: string;
  subHeading: string;
  image: Image;
  link: Link;
}

export function HeroSection({ data }: { readonly data: HeroSectionProps }) {
  // console.dir(data, { depth: null });
  const { Heading, subHeading, image, link } = data;
  // console.log("data", data);

  return (
    <header>
      <div className="flex w-full justify-between">
        <div className="w-1/2 flex items-center justify-center flex-col gap-10">
          <h1 className="text-7xl font-medium text-left md:text-5xl sm:text-3xl lg:text-7xl">
            You Dream,
            <br />
            We <span className="text-[#FC7F11]">Deliver.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-500">
            {subHeading.split("JSW")[0]}JSW
            <br />
            {subHeading.split("JSW")[1]}
          </p>
          <div className="flex gap-10">
            <span>
              <p className="text-5xl font-medium md:text-5xl sm:text-3xl">300+</p>
              <p className="text-slate-500">Quality Checks</p>
            </span>
            <span>
              <p className="text-5xl font-medium md:text-5xl sm:text-3xl">10</p>
              <p className="text-slate-500">Years Warrenty*</p>
            </span>
            <span>
              <p className="text-5xl font-medium md:text-5xl sm:text-3xl">100+</p>
              <p className="text-slate-500">Happy Families</p>
            </span>
          </div>
          <Button className="mt-1">{link.text}</Button>
        </div>
        <div className="w-1/2 relative">
          <StrapiImage
            alt={image.alternativeText ?? "no alternative text"}
            src={image.url}
            fill={true}
            width={0}
            height={0}
            className="w-full h-full top-0 left-0 object-cover"
          />
        </div>
      </div>
    </header>
  );
}
