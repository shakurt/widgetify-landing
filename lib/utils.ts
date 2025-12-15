import { DONATION_BADGES } from "@/lib/constants";

// Donation Page
export const formatDate = (timestamp: number) =>
  new Date(timestamp * 1000).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const formatAmount = (amount: number) =>
  new Intl.NumberFormat("fa-IR").format(amount);

export const getDonationBadge = (amount: number) => {
  for (let i = DONATION_BADGES.length - 1; i >= 0; i -= 1) {
    if (amount >= DONATION_BADGES[i].threshold) {
      return DONATION_BADGES[i];
    }
  }
  return null;
};

export const getCurrencySymbol = (currency: string) => {
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

export const extractFullnameInitialLetters = (name?: string | null): string => {
  if (!name?.trim()) return "؟";
  const parts = name.trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
};

// Privacy Page
export const isLanguageFa = (lang: "en" | "fa") => lang === "fa";

// Validators Utils
export const isEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
