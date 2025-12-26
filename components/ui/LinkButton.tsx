import Link from "next/link";
import { twMerge } from "tailwind-merge";

type LinkButtonProps = {
  icon: React.ElementType;
  text: string;
  href: string;
  className?: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  icon: Icon,
  text,
  href,
  className = "",
}) => {
  const baseStyle =
    "focus:ring-opacity-50 relative flex items-center justify-center rounded-2xl border border-gray-400 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:scale-105 hover:border-primary/80 hover:bg-gray-50 hover:shadow-lg focus:ring-2 focus:ring-primary/90 focus:outline-none md:px-6 md:py-3";

  return (
    <Link href={href} className={twMerge(baseStyle, className)}>
      {text}
      <Icon
        size={20}
        className="mr-1 mb-0.5 size-4 transition-transform group-hover:scale-110 md:size-5"
        aria-hidden="true"
      />
    </Link>
  );
};

export default LinkButton;
