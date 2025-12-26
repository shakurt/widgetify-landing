import Image from "next/image";

import { ACCENT_BANDS } from "@/lib/constants";
import type { Donation } from "@/lib/types";
import {
  formatDate,
  formatAmount,
  getCurrencySymbol,
  getDonationBadge,
  extractFullnameInitialLetters,
} from "@/lib/utils";

type SupportDonationCardProps = {
  index: number;
} & Donation;

const SupportDonationCard: React.FC<SupportDonationCardProps> = ({
  name,
  avatar,
  time,
  amount,
  currency,
  description,
  index,
}) => {
  const badge = getDonationBadge(amount);
  const accentColor = ACCENT_BANDS[index % ACCENT_BANDS.length];
  const displayName = name || "حامی ناشناس";
  const formattedAmount = formatAmount(amount);
  const currencySymbol = getCurrencySymbol(currency);

  return (
    <article
      className="group animate-scale-in flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white/75 p-3.5 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-18px_rgba(0,0,0,0.4)] sm:p-4 md:p-5 lg:rounded-2xl"
      aria-label={`حمایت ${displayName} به مبلغ ${formattedAmount} ${currencySymbol}`}
      itemScope
      itemType="https://schema.org/MonetaryGrant"
    >
      <div className="flex items-start justify-between gap-2 md:gap-3">
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
          {avatar ? (
            <div className="relative inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-neutral-200 shadow-sm sm:h-10 sm:w-10 md:h-11 md:w-11">
              <Image
                src={avatar}
                alt={`آواتار ${displayName}`}
                width={44}
                height={44}
                className="h-full w-full object-cover"
                loading="lazy"
                itemProp="image"
              />
            </div>
          ) : (
            <span
              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold tracking-tight text-white sm:h-10 sm:w-10 sm:text-base md:h-11 md:w-11 ${accentColor}`}
              aria-label={`حروف اول نام ${displayName}`}
            >
              {extractFullnameInitialLetters(name)}
            </span>
          )}
          <div className="flex min-w-0 flex-col">
            <span
              className="truncate text-sm leading-tight font-semibold text-neutral-900 sm:text-base md:text-lg"
              itemProp="Supporter"
            >
              {displayName}
            </span>
            <time
              className="text-xs leading-snug text-neutral-500 sm:text-sm"
              dateTime={new Date(time * 1000).toISOString()}
              itemProp="datePublished"
            >
              {formatDate(time)}
            </time>
          </div>
        </div>
        {badge && (
          <span
            className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold sm:gap-1.5 sm:px-2.5 sm:py-1 md:px-3 md:text-sm ${badge.className}`}
            role="status"
            aria-label={`سطح حمایت: ${badge.label}`}
          >
            <span
              className="text-sm leading-none sm:text-base"
              aria-hidden="true"
            >
              {badge.emoji}
            </span>
            <span className="hidden whitespace-nowrap sm:inline">
              {badge.label}
            </span>
          </span>
        )}
      </div>

      <div className="mt-2.5 sm:mt-3 md:mt-4">
        <p
          className="text-xs leading-tight font-medium text-neutral-500 sm:text-sm"
          id={`amount-label-${index}`}
        >
          مبلغ حمایت
        </p>
        <div
          className="mt-1 flex items-baseline gap-1 text-neutral-900 sm:gap-1.5"
          aria-labelledby={`amount-label-${index}`}
          itemProp="amount"
          itemScope
          itemType="https://schema.org/MonetaryAmount"
        >
          <span
            className="text-xl leading-none font-bold sm:text-2xl md:text-3xl"
            itemProp="value"
          >
            {formattedAmount}
          </span>
          <span
            className="text-xs leading-tight font-medium text-neutral-500 sm:text-sm md:text-base"
            itemProp="currency"
          >
            {currencySymbol}
          </span>
        </div>
      </div>

      <div
        className="mt-2.5 max-h-20 min-h-20 overflow-y-auto rounded-xl bg-neutral-100 p-2.5 sm:mt-3 sm:rounded-2xl sm:p-3 md:mt-4"
        role="region"
        aria-label="پیام حمایت"
      >
        {description ? (
          <p
            className="line-clamp-4 text-xs leading-relaxed text-neutral-600 sm:line-clamp-5 sm:text-sm md:leading-loose"
            itemProp="description"
          >
            {description}
          </p>
        ) : (
          <p className="text-xs leading-relaxed text-neutral-400 italic sm:text-sm">
            این حامی پیامی ثبت نکرده است.
          </p>
        )}
      </div>

      <div
        className="mt-2.5 h-px w-full bg-neutral-200/70 sm:mt-3 md:mt-4"
        role="separator"
        aria-hidden="true"
      />

      <footer className="mt-2 text-xs leading-tight font-semibold text-neutral-500 sm:mt-2.5 sm:text-sm md:text-base">
        <span>سپاس از همراهی شما با ویجتیفای 💙</span>
      </footer>
    </article>
  );
};

export default SupportDonationCard;
