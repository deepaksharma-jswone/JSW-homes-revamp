import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface FeatureCardProps {
  id: number;
  heading: string;
  subHeading: string;
  icon: null;
}

export function FeatureCard({
  id,
  heading,
  subHeading,
  icon,
}: Readonly<FeatureCardProps>) {
  return (
    <div className="bg-[#F6F5EF] shadow-lg p-6 md:max-w-64 md:h-44 w-11/12 rounded-lg md:rounded-none" key={id}>
      <h3 className="text-1.5xl font-bold">{heading}</h3>
      <p className="text-gray-600 text-sm">{subHeading}</p>
    </div>
  );
}
