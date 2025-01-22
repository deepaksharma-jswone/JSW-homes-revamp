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
      <div className="flex w-full justify-between flex-col-reverse gap-10 md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center flex-col gap-5">
          <h1 className="text-5xl font-medium text-left">
            You Dream,
            <br />
            We <span className="text-[#FC7F11]">Deliver.</span>
          </h1>
          <p className="text-lg text-slate-500 text-center">
            {subHeading.split("One")[0]}One
            <br />
            {subHeading.split("One")[1]}
          </p>
          <div className="flex items-center justify-between gap-10 ml-5 mr-5">
            <span>
              <p className="text-lg font-medium md:text-5xl sm:text-3xl">
                300+
              </p>
              <p className="text-slate-500 text-sm">Quality Checks</p>
            </span>
            <span>
              <p className="text-lg font-medium md:text-5xl sm:text-3xl">10</p>
              <p className="text-slate-500 text-sm">Years Warrenty*</p>
            </span>
            <span>
              <p className="text-lg font-medium md:text-5xl sm:text-3xl">
                100+
              </p>
              <p className="text-slate-500 text-sm">Happy Families</p>
            </span>
          </div>
          <Button className="rounded-lg mb-10" size={"full"}>
            {link.text}
          </Button>
        </div>
        <div className="flex justify-center md:w-1/2 relative p-5 md:p-10">
          <StrapiImage
            alt={image.alternativeText ?? "no alternative text"}
            src={image.url}
            fill={true}
            width={328}
            height={189}
            className="w-full aspect-[16/9] top-0 left-0 object-cover rounded-lg md:rounded-none"
          />
        </div>
      </div>
    </header>
  );
}
