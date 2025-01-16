import Link from "next/link";
import { Logo } from "@/components/custom/logo";
import { Button } from "@/components/ui/button";

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
    <div className="flex items-center justify-center gap-32 py-3 bg-white shadow-md dark:bg-gray-800">
      <Logo text={logoText.text} />
      <div className="flex items-center gap-2 md:gap-8 lg:gap-10">
        <Link
          href={dreamHome.url}
          className="hidden md:text-lg sm:text-sm md:block"
        >
          {dreamHome.text}
        </Link>
        <Link
          href={howItWorks.url}
          className="hidden md:text-lg sm:text-sm md:block"
        >
          {howItWorks.text}
        </Link>
        <Link
          href={pricings.url}
          className="hidden md:text-lg sm:text-sm md:block"
        >
          {pricings.text}
        </Link>
        <Link
          href={projectGallery.url}
          className="hidden md:text-lg sm:text-sm md:block"
        >
          {projectGallery.text}
        </Link>
        <Link
          href={pricings.url}
          className="hidden md:text-lg sm:text-sm md:block"
        >
          {pricings.text}
        </Link>
      </div>
      <Link href={ctaButton.url} className="md:mr-20 sm: mr-20">
        <Button className="font-sans">{ctaButton.text}</Button>
      </Link>
    </div>
  );
}
