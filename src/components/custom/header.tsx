import Link from "next/link";
import { Logo } from "@/components/custom/logo";
import { Button } from "@/components/ui/button";

// import { SquareMenu } from "lucide-react";
import { AlignJustify } from "lucide-react";

interface HeaderProps {
  data: {
    logoText: {
      id: number;
      text: string;
      url: string;
    };
    ctaButton: {
      id: number;
      text: string;
      url: string;
    };
    dreamHome: {
      id: number;
      text: string;
      url: string;
    };
    howItWorks: {
      id: number;
      text: string;
      url: string;
    };
    pricings: {
      id: number;
      text: string;
      url: string;
    };
    projectGallery: {
      id: number;
      text: string;
      url: string;
    };
  };
}

export async function Header({ data }: Readonly<HeaderProps>) {
  // console.log("data dta", data);
  const {
    logoText,
    ctaButton,
    dreamHome,
    howItWorks,
    projectGallery,
    pricings,
  } = data;
  return (
    <div className="bg-white dark:bg-gray-800 flex items-center justify-between p-2.5 md:px-20 lg:px-40">
      <Logo text={logoText.text} />
      <div className="hidden items-center gap-2 md:gap-8 lg:gap-10 md:flex">
        <Link href={dreamHome.url} className="md:text-lg sm:text-sm md:block">
          {dreamHome.text}
        </Link>
        <Link href={howItWorks.url} className="md:text-lg sm:text-sm md:block">
          {howItWorks.text}
        </Link>
        <Link href={pricings.url} className="md:text-lg sm:text-sm md:block">
          {pricings.text}
        </Link>
        <Link
          href={projectGallery.url}
          className="md:text-lg sm:text-sm md:block"
        >
          {projectGallery.text}
        </Link>
        <Link href={pricings.url} className="md:text-lg sm:text-sm md:block">
          {pricings.text}
        </Link>
      </div>
      <Link
        href={ctaButton.url}
        className="hidden lg:block md:block md:mr-20 sm:mr-20"
      >
        <Button className="font-sans">{ctaButton.text}</Button>
      </Link>
      <AlignJustify className="block lg:hidden md:hidden sm:block" size={24} />
    </div>
  );
}
