import Link from "next/link";
import Image from "next/image";
import icon from "../../../public/icon.svg";

function HomesIcon(props: any) {
  return <Image src={icon} alt={"jsw homes logo"} {...props} />;
}

interface LogoProps {
  text?: string;
  dark?: boolean;
}

export function Logo({
  text = "Logo Text",
  dark = false,
}: Readonly<LogoProps>) {
  return (
    <Link className="flex items-center gap-2" href="/">
      <HomesIcon className={"ml-20"} />
      {/* <span
        className={`text-lg font-semibold ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {text}
      </span> */}
    </Link>
  );
}
