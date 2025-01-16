import Image from "next/image";

import handshake from "../../../public/handshake.svg";
import home from "../../../public/home.svg";
import key from "../../../public/key.svg";
import speaker from "../../../public/speaker.svg";

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
  const { steps, heading, subHeading } = data;
  // console.dir(steps, { depth: null });
  return (
    <div className="flex w-full items-center justify-center flex-col gap-10 p-20 bg-[#F6F5EF]">
      <h1 className="text-7xl font-medium text-left md:text-5xl sm:text-3xl lg:text-7xl">
        {heading}
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-slate-500">
        {subHeading}
      </p>
      <div className="flex-1">
        <section className="container px-4 py-6 mx-auto md:px-6 lg:py-24">
          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
              >
                {getIcon(feature.icon)}
                <h2 className="mb-4 text-2xl font-bold">{feature.heading}</h2>
                <p className="text-gray-500">{feature.subHeading}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
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
