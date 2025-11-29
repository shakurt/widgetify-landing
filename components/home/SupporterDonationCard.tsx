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
  const cardClassName = ` group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white/75 p-3 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.4)]`;

  const badge = getDonationBadge(amount);
  const accent = accentBands[index % accentBands.length];

  return (
    <article className={cardClassName}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {avatar ? (
            <span className="relative inline-flex h-8 w-8 overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
              <img
                src={avatar}
                alt={name ? `آواتار ${name}` : "آواتار حامی"}
                className="h-full w-full object-cover"
                // onError={(event) => {
                //   (event.target as HTMLImageElement).style.display = "none";
                // }}
              />
            </span>
          ) : (
            <span
              className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold tracking-tight text-white ${accent}`}
            >
              {getInitials(name)}
            </span>
          )}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-neutral-900">
              {name || "حامی ناشناس"}
            </span>
            <span className="text-xs text-neutral-500">{formatDate(time)}</span>
          </div>
        </div>
        {badge && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${badge.className}`}
            dir="auto"
          >
            <span className="text-base leading-none">{badge.emoji}</span>
            {badge.label}
          </span>
        )}
      </div>

      <div className="mt-2">
        <p className="text-xs font-medium text-neutral-500">مبلغ حمایت</p>
        <div className="mt-1 flex items-baseline gap-1 text-neutral-900">
          <span className="text-2xl font-semibold">{formatAmount(amount)}</span>
          <span className="text-xs font-medium text-neutral-500" dir="auto">
            {getCurrencySymbol(currency)}
          </span>
        </div>
      </div>

      <div className="mt-2 max-h-20 min-h-20 overflow-y-auto rounded-2xl bg-neutral-100 p-1.5 font-light">
        {description ? (
          <p
            className="[display:-webkit-box] overflow-hidden text-xs leading-tight text-neutral-600"
            style={{
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </p>
        ) : (
          <p className="text-sm text-neutral-400">
            این حامی پیامی ثبت نکرده است.
          </p>
        )}
      </div>

      <div className="mt-2 h-px w-full bg-neutral-200/70"></div>
      <footer className="mt-1 text-xs font-bold text-gray-500">
        سپاس از همراهی شما با ویجتیفای 💙
      </footer>
    </article>
  );
};

export default SupportDonationCard;
