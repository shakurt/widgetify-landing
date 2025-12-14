export const CHROME_EXTENSION_URL =
  "https://chromewebstore.google.com/detail/widgetify/ajaaioiiekongmlakdbellaoglnffmoh" as const;

export const PWA_LINK = "https://app.widgetify.ir" as const;
export const DESKTOP_LINK =
  "https://github.com/sajjadmrx/btime-desktop" as const;

export const MAILTO_PRIVACY = "mailto:privacy@widgetify.ir" as const;
export const DONATE_LINK = "http://ref.widgetify.ir/donate" as const;
export const GITHUB_LINK = "https://github.com/widgetify-app" as const;
export const DISCORD_LINK = "https://discord.gg/p9TZzEV39e" as const;
export const TELEGRAM_LINK = "https://t.me/widgetify" as const;
export const X_LINK = "https://x.com/widgetify_ir" as const;
export const INSTAGRAM_LINK = "https://instagram.com/widgetify.ir" as const;

export const repositories = [
  "https://api.github.com/repos/widgetify-app/widgetify-extension/contributors",
  "https://api.github.com/repos/sajjadmrx/btime-desktop/contributors",
  "https://api.github.com/repos/widgetify-app/widgetify-pwa/contributors",
  "https://api.github.com/repos/widgetify-app/widgetify-landing/contributors",
] as const;

// Donation page
export const DONATION_BADGES = [
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
] as const;

export const ACCENT_BANDS = [
  "bg-neutral-900",
  "bg-neutral-800",
  "bg-neutral-700",
  "bg-neutral-600",
] as const;
