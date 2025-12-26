import Image from "next/image";
import Link from "next/link";

import type { Contributor } from "@/lib/types";
import "@/styles/contributors.css";

type ContributorImageLinkProps = Contributor;

const ContributorImageLink: React.FC<ContributorImageLinkProps> = ({
  avatar_url,
  html_url,
  login,
  contributions,
}) => {
  return (
    <Link
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="has-hover-persist group relative flex flex-col items-center"
    >
      {/* Tooltip */}
      <div className="absolute -top-9 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-gray-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:text-sm">
        <span className="text-xs font-semibold">{login}</span>
        <span className="mx-1 text-xs text-gray-400">•</span>
        <span className="text-xs text-gray-300">{contributions}</span>
        {/* Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
      </div>

      <div className="relative mb-3 overflow-hidden rounded-full bg-linear-to-br from-blue-100 to-indigo-100 transition-all duration-500">
        <Image
          src={avatar_url}
          alt={login}
          className="hover-persist-item h-16 w-16 object-cover opacity-70 grayscale filter transition-all ease-in-out"
          loading="lazy"
          width={64}
          height={64}
        />
      </div>
    </Link>
  );
};

export default ContributorImageLink;
