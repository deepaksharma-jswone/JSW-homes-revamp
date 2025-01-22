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
    <div className="flex items-center justify-center p-5 flex-col gap-5 bg-[#FCFCF7]">
      <h1 className="text-3xl font-medium text-center md:text-left md:text-5xl sm:text-3xl lg:text-7xl">
        Buil your{" "}
        <span className="text-[#FC7F11]">
          <br />
          Dream home.
        </span>
      </h1>
      <p className="text-base text-center md:text-xl lg:text-2xl text-slate-500">
        {subHeading}
      </p>
      <StrapiImage
        alt={image.alternativeText ?? "no alternative text"}
        src={image.url}
        fill={true}
        width={328}
        height={260}
        className="w-full h-full top-0 left-0 object-cover rounded-lg md:rounded-none"
      />
      <Button className="rounded-lg mb-10 w-full" size={"full"}>{ctaButton.text}</Button>
    </div>
  );
}
