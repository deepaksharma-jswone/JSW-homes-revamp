import Image from "next/image";

import handshake from "../../../public/handshake.svg";
import home from "../../../public/home.svg";
import key from "../../../public/key.svg";
import speaker from "../../../public/speaker.svg";
import { Button } from "../ui/button";

function getIcon(name: string) {
  switch (name) {
    case "HAND_SHAKE":
      return <HanshakeIcon className="w-12 h-12 mb-4 text-gray-900" />;
    case "HOME_ICON":
      return <HomeIcon className="w-12 h-12 mb-4 text-gray-900" />;
    case "KEY_ICON":
      return <KeyIcon className="w-12 h-12 mb-4 text-gray-900" />;
    case "SPEAKER_ICON":
      return <SpeakerIcon className="w-12 h-12 mb-4 text-gray-900" />;
    default:
      return null;
  }
}

interface ProcessProps {
  id: number;
  heading: string;
  subHeading: string;
  icon: string;
}

interface ProcessSectionProps {
  id: number;
  __component: string;
  heading: string;
  subHeading: string;
  description: string;
  steps: ProcessProps[];
  ctaButton: {
    id: number;
    text: string;
    isExternal: boolean;
    url: "string";
  };
}

export function ProcessSection({
  data,
}: {
  readonly data: ProcessSectionProps;
}) {
  const { steps, heading, subHeading, ctaButton } = data;
  // console.dir(steps, { depth: null });
  return (
    <div className="flex w-full items-center justify-center flex-col gap-5 md:gap-10 md:p-20 p-5 bg-[#F6F5EF]">
      <h1 className="text-3xl font-medium text-center md:text-left md:text-5xl sm:text-3xl lg:text-7xl">
        {/* {heading} */}A glimpse into our{" "}
        <span className="text-[#FC7F11]">building process</span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-slate-500 text-center">
        {subHeading}
      </p>
      <div className="flex-1">
        <section className="container px-4 py-6 mx-auto md:px-6 lg:py-24">
          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((feature) => (
              <div
                key={feature.id}
                className="flex md:flex-col items-center text-center gap-10"
              >
                <span className="w-1/4">{getIcon(feature.icon)}</span>
                <span className="w-3/4">
                  <h2 className="mb-4 text-lg md:text-2xl font-bold text-left">
                    {feature.heading}
                  </h2>
                  <p className="text-gray-500 text-left text-sm">
                    {feature.subHeading}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Button className="mt-1 rounded-lg" variant={"outline"} size={"full"}>
        {ctaButton.text}
      </Button>
    </div>
  );
}

function HanshakeIcon(props: React.CSSProperties) {
  return (
    <Image
      {...props}
      src={handshake}
      alt={"handshake svg"}
      style={{ width: "auto", height: "auto" }}
    />
  );
}

function KeyIcon(props: React.CSSProperties) {
  return (
    <Image
      {...props}
      src={key}
      alt={"key svg"}
      style={{ width: "auto", height: "auto" }}
    />
  );
}

function HomeIcon(props: React.CSSProperties) {
  return (
    <Image
      {...props}
      src={home}
      alt={"home svg"}
      style={{ width: "auto", height: "auto" }}
    />
  );
}

function SpeakerIcon(props: React.CSSProperties) {
  return (
    <Image
      {...props}
      src={speaker}
      alt={"speaker svg"}
      style={{ width: "auto", height: "auto" }} //because we are changing heights and width by css
    />
  );
}
