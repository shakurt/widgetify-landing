import Image from "next/image";
import Link from "next/link";

import { twMerge } from "tailwind-merge";

import LogoImage from "@/assets/logo/logo.png";

type FullLogoProps = {
  classname?: string;
};

const FullLogo: React.FC<FullLogoProps> = ({ classname }) => {
  const mergedClassName = twMerge(`object-contain`, classname);

  return (
    <Link href="/" className="flex items-center">
      <Image
        src={LogoImage}
        alt="ویجتی‌فای"
        width={32}
        height={32}
        className={mergedClassName}
        // TODO: handle image error
        // onError={(e) => {
        //   e.currentTarget.src = "https://placehold.co/96x96?text=W";
        // }}
      />

      {/* TODO: the header is rendering client-side and we need to put h111 tag actually on page content and remove h1 tag here */}
      <h1 className="mr-2 text-xl font-bold text-blue-600">ویجتی‌فای</h1>
    </Link>
  );
};

export default FullLogo;
