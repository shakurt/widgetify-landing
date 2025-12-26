import { twMerge } from "tailwind-merge";

type HeroDownloadButtonSecondaryProps = {
  name: string;
  icon: React.ElementType;
  url: string;
  isAvailable: boolean;
  comingSoon?: boolean;
  show?: boolean;
};

const HeroDownloadButtonSecondary: React.FC<
  HeroDownloadButtonSecondaryProps
> = ({
  name,
  icon: Icon,
  url,
  isAvailable,
  comingSoon = false,
  show = true,
}) => {
  const notAvailableStyle =
    "cursor-not-allowed opacity-50 border-0 transition-none hover:shadow-none hover:bg-gray-200 bg-gray-200 hover:scale-100 pointer-events-none";
  const baseStyle =
    "group relative flex items-center rounded-2xl border-2 border-primary/20 bg-white px-3 py-2 font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5 hover:shadow-lg focus:ring-2 focus:ring-primary focus:outline-none md:px-6 md:py-3";

  if (!show) return;

  return (
    <a
      className={
        isAvailable ? baseStyle : twMerge(baseStyle, notAvailableStyle)
      }
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      aria-disabled={!isAvailable}
      aria-label={`${name} - ${isAvailable ? "دانلود افزونه ویجتیفای" : "به زودی در دسترس خواهد بود"}`}
      title={`${isAvailable ? "دانلود" : "به زودی"} ${name}`}
    >
      <Icon
        size={20}
        className={`ml-1.5 size-4 transition-transform md:ml-2 md:size-5 ${isAvailable && "group-hover:scale-110"}`}
        aria-hidden="true"
      />
      <span className="text-sm md:text-base">{name}</span>
      {!comingSoon ? (
        <div className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1">
          <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 md:h-3 md:w-3" />
        </div>
      ) : (
        <span className="mr-1 text-sm text-gray-400 md:mr-2">(به زودی)</span>
      )}
    </a>
  );
};

export default HeroDownloadButtonSecondary;
