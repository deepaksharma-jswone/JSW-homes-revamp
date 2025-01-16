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

interface DreamHomeSectionProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
  ctaButton: Link;
}

export function DreamHomeSection({
  data,
}: {
  readonly data: DreamHomeSectionProps;
}) {
  const { subHeading, image, ctaButton } = data;
//   console.log("data", data);

  return (
    <div className="flex w-full items-center justify-center flex-col gap-10 p-20 bg-[#FCFCF7]">
      <h1 className="text-7xl font-medium text-left md:text-5xl sm:text-3xl lg:text-7xl">
        Buil your <span className="text-[#FC7F11]">dream home.</span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-slate-500">
        {subHeading}
      </p>
      <StrapiImage
        alt={image.alternativeText ?? "no alternative text"}
        src={image.url}
        fill={true}
        width={0}
        height={0}
        className="w-full h-full top-0 left-0 object-cover"
      />
      <Button className="mt-1">{ctaButton.text}</Button>
    </div>
  );
}
