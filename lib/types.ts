export type Donation = {
  time: number;
  amount: number;
  currency: string;
  toman_amount: number;
  name: string;
  description: string;
  avatar?: string | null;
};

export type PrivacyLanguage = "en" | "fa";
