import Link from "next/link";
import { StrapiImage } from "../strapi-image";
import { Button } from "../ui/button";
import { FeatureCard } from "../feature-card";
import cardTick from "../../public/images/card-tick.svg";
import colorFilter from "../../public/images/colorfilter.svg";
import paintBucket from "../../public/images/paintbucket.svg";
import home from "../../public/images/home.svg";

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

interface SubHeroSectionProps {
  id: number;
  documentId: string;
  __component: string;
  heading: string;
  subHeading: string;
  image: Image;
  link: Link;
}

export function SubHeroSection({
  data,
}: {
  readonly data: SubHeroSectionProps;
}) {
  // console.dir(data, { depth: null });
  const { feature, subHeading, image, ctaButton } = data;
  // console.log("data", data);

  return (
    <header className="mt-2 md:mt-0">
      <div className="flex w-full justify-between flex-col-reverse md:flex-row">
        <div
          className="md:w-1/2 relative h-[800px] bg-cover bg-center flex items-end md:items-center justify-center"
          style={{
            backgroundImage: `url(http://localhost:1337${image.url})`,
          }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 mb-9 md:mb-0">
            {feature.map((data: any) => (
              <FeatureCard
                key={data.id}
                id={data.id}
                heading={data.heading}
                subHeading={data.subHeading}
                icon={data.icon}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 flex text-center items-center flex-col gap-2">
          <h1 className="text-3xl font-medium md:text-5xl sm:text-3xl lg:text-7xl w-full">
            Why JSW One
            <span className="text-[#FC7F11]"> Homes</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-slate-500 w-full mb-5">
            {subHeading}
          </p>
          <Button className="mt-1 hidden md:block" variant={"outline"}>
            {ctaButton.text}
          </Button>
        </div>
      </div>
    </header>
  );
}
