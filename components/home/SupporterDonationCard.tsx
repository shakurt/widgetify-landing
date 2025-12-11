type SupportDonationCardProps = {
  name: string;
  avatar?: string | null;
  time: number;
  amount: number;
  currency: string;
  description?: string | null;
  index: number;
};

const SupportDonationCard: React.FC<SupportDonationCardProps> = ({
  name,
  avatar,
  time,
  amount,
  currency,
  description,
  index,
}) => {
  const formatDate = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formatAmount = (amount: number) =>
    new Intl.NumberFormat("fa-IR").format(amount);

  const getCurrencySymbol = (currency: string) => {
    switch (currency.toUpperCase()) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "GBP":
        return "£";
      case "TOMAN":
      case "IRR":
        return "تومان";
      default:
        return currency;
    }
  };

  const donationBadges = [
    {
      threshold: 100_000,
      label: "حامی نوپا",
      emoji: "🌱",
      className: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    },
    {
      threshold: 500_000,
      label: "حامی پرشور",
      emoji: "🔥",
      className: "bg-orange-50 text-orange-700 border border-orange-200",
    },
    {
      threshold: 1_000_000,
      label: "حامی الماس",
      emoji: "💎",
      className: "bg-indigo-50 text-indigo-700 border border-indigo-200",
    },
    {
      threshold: 5_000_000,
      label: "حامی طلایی",
      emoji: "⭐",
      className: "bg-amber-50 text-amber-800 border border-amber-300",
    },
    {
      threshold: 10_000_000,
      label: "حامی پلاتینیوم",
      emoji: "🏅",
      className: "bg-slate-100 text-slate-800 border border-slate-300",
    },
  ];

  const getDonationBadge = (amount: number) => {
    for (let index = donationBadges.length - 1; index >= 0; index -= 1) {
      const badge = donationBadges[index];
      if (amount >= badge.threshold) return badge;
    }
    return null;
  };

  const getInitials = (name?: string | null) => {
    if (!name) return "؟";
    const parts = name.trim().split(/\s+/);
    if (!parts.length) return "؟";
    return parts
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const accentBands = [
    "bg-neutral-900",
    "bg-neutral-800",
    "bg-neutral-700",
    "bg-neutral-600",
  ];
  const cardClassName = `group relative flex animate-scale-in flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white/75 p-3 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.4)] sm:p-4`;

  const badge = getDonationBadge(amount);
  const accent = accentBands[index % accentBands.length];

  return (
    <article
      className={cardClassName}
      aria-label={`حمایت ${name || "ناشناس"} به مبلغ ${formatAmount(amount)} ${getCurrencySymbol(currency)}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-2.5">
          {avatar ? (
            <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-lg border border-neutral-200 shadow-sm sm:h-10 sm:w-10">
              <img
                src={avatar}
                alt={name ? `آواتار ${name}` : "آواتار حامی"}
                className="h-full w-full object-cover"
                loading="lazy"
                // onError={(event) => {
                //   (event.target as HTMLImageElement).style.display = "none";
                // }}
              />
            </span>
          ) : (
            <span
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold tracking-tight text-white sm:h-10 sm:w-10 ${accent}`}
              aria-label={`حروف اول نام ${name || "حامی"}`}
            >
              {getInitials(name)}
            </span>
          )}
          <div className="flex flex-col">
            <span className="text-sm leading-tight font-semibold text-neutral-900 sm:text-base">
              {name || "حامی ناشناس"}
            </span>
            <time
              className="text-xs text-neutral-500 sm:text-sm"
              dateTime={new Date(time * 1000).toISOString()}
            >
              {formatDate(time)}
            </time>
          </div>
        </div>
        {badge && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold sm:px-2.5 sm:py-1 ${badge.className}`}
            dir="auto"
            role="status"
            aria-label={`سطح حمایت: ${badge.label}`}
          >
            <span
              className="text-sm leading-none sm:text-base"
              aria-hidden="true"
            >
              {badge.emoji}
            </span>
            <span className="hidden sm:inline">{badge.label}</span>
          </span>
        )}
      </div>

      <div className="mt-2 sm:mt-3">
        <p
          className="text-xs font-medium text-neutral-500 sm:text-sm"
          id={`amount-label-${index}`}
        >
          مبلغ حمایت
        </p>
        <div
          className="mt-1 flex items-baseline gap-1 text-neutral-900"
          aria-labelledby={`amount-label-${index}`}
        >
          <span className="text-xl font-semibold sm:text-2xl">
            {formatAmount(amount)}
          </span>
          <span
            className="text-xs font-medium text-neutral-500 sm:text-sm"
            dir="auto"
          >
            {getCurrencySymbol(currency)}
          </span>
        </div>
      </div>

      <div
        className="mt-2 max-h-20 min-h-20 overflow-y-auto rounded-xl bg-neutral-100 p-2 font-light sm:mt-3 sm:rounded-2xl"
        role="region"
        aria-label="پیام حمایت"
      >
        {description ? (
          <p
            className="[display:-webkit-box] overflow-hidden text-xs leading-tight text-neutral-600 sm:text-sm"
            style={{
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>
        ) : (
          <p className="text-xs text-neutral-400 italic sm:text-sm">
            این حامی پیامی ثبت نکرده است.
          </p>
        )}
      </div>

      <div
        className="mt-2 h-px w-full bg-neutral-200/70 sm:mt-3"
        role="separator"
      ></div>
      <footer className="mt-1.5 text-xs font-bold text-gray-500 sm:mt-2 sm:text-sm">
        <span aria-label="سپاس از همراهی شما با ویجتیفای">
          سپاس از همراهی شما با ویجتیفای 💙
        </span>
      </footer>
    </article>
  );
};

export default SupportDonationCard;
