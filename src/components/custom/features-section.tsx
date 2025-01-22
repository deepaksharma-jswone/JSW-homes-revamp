import Image from "next/image";

import handshake from "../../../public/handshake.svg";
import home from "../../../public/home.svg";
import key from "../../../public/key.svg";
import speaker from "../../../public/speaker.svg";

function getIcon(name: string) {
  switch (name) {
    case "CLOCK_ICON":
      return <ClockIcon className="w-12 h-12 mb-4 text-gray-900" />;
    case "CHECK_ICON":
      return <CheckIcon className="w-12 h-12 mb-4 text-gray-900" />;
    case "CLOUD_ICON":
      return <CloudIcon className="w-12 h-12 mb-4 text-gray-900" />;
    case "HANDSHAKE_ICON":
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

interface FeatureProps {
  id: number;
  heading: string;
  subHeading: string;
  icon: string;
}

interface FeatureSectionProps {
  id: number;
  __component: string;
  title: string;
  description: string;
  feature: FeatureProps[];
}

export function FeatureSection({
  data,
}: {
  readonly data: FeatureSectionProps;
}) {
  const { feature } = data;
  // console.dir(feature, { depth: null });
  return (
    <div className="">
      <div className="flex-1">
        <section className="container px-4 py-6 mx-auto md:px-6 lg:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {feature.map((feature) => (
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

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function HanshakeIcon(props: any) {
  return <Image {...props} src={handshake} alt={"handshake svg"} />;
}

function KeyIcon(props: any) {
  return <Image {...props} src={key} alt={"key svg"} />;
}

function HomeIcon(props: any) {
  return <Image {...props} src={home} alt={"home svg"} />;
}

function SpeakerIcon(props: any) {
  return <Image {...props} src={speaker} alt={"speaker svg"} />;
}
