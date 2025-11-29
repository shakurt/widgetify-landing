import Link from "next/link";

type DownloadButtonSecondaryProps = {
  name: string;
  icon: React.ElementType;
  url: string;
  isAvailable: boolean;
  comingSoon?: boolean;
  show?: boolean;
};

const DownloadButtonSecondary: React.FC<DownloadButtonSecondaryProps> = ({
  name,
  icon: Icon,
  url,
  isAvailable,
  comingSoon = false,
  show = true,
}) => {
  if (!show) return;

  if (!isAvailable) {
    return (
      <div className="group relative flex cursor-not-allowed items-center rounded-2xl border-2 border-gray-100 bg-gray-100 px-6 py-3 font-medium text-gray-500 opacity-50 transition-all duration-300">
        <Icon size={20} className="ml-3" />
        <span className="text-base">{name}</span>
        {comingSoon && (
          <span className="mr-2 text-sm text-gray-400">(به زودی)</span>
        )}
      </div>
    );
  }

  return (
    <Link
      className="group focus:ring-opacity-50 relative flex items-center rounded-2xl border-2 border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:bg-gray-50 hover:shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      <Icon
        size={20}
        className="ml-3 transition-transform group-hover:scale-110"
      />
      <span className="text-base">{name}</span>
      {!comingSoon && (
        <div className="absolute -top-1 -right-1">
          <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
        </div>
      )}
    </Link>
  );
};

export default DownloadButtonSecondary;
