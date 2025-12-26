export type Donation = {
  time: number;
  amount: number;
  currency: string;
  toman_amount: number;
  name: string;
  description: string;
  avatar?: string | null;
};

export type Contributor = {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

export type PrivacyLanguage = "en" | "fa";

export type ActionResponse = {
  success: boolean;
  message: string;
  error?: Record<string, string>;
};
