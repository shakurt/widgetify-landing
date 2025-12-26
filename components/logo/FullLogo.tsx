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
    <Link
      href="/"
      className="flex items-center"
      aria-label="ویجتیفای - صفحه اصلی"
    >
      <Image
        src={LogoImage}
        alt="لوگوی ویجتیفای"
        width={32}
        height={32}
        className={mergedClassName}
        priority
      />
      <span className="text-primary mr-2 text-base font-bold md:text-xl">
        ویجتیفای
      </span>
    </Link>
  );
};

export default FullLogo;
