import "server-only";
import { cache } from "react";

import { repositories } from "@/constants";

export const getDonations = cache(
  async (count?: number): Promise<Donation[]> => {
    // TODO: Error case handling

    const res = await fetch("https://api.widgetify.ir/top-donates");
    const data: DonationResponse = await res.json();
    const donations = data.donates;
    if (count) return donations.slice(0, count);
    return donations;
  }
);

export const getContributors = cache(async () => {
  // TODO: Error case handling

  const contributorsData = await Promise.all(
    repositories.map(async (url) => {
      const response = await fetch(url);
      const json = await response.json();
      if (!response.ok) {
        if (
          response.status === 403 &&
          response.headers.get("X-RateLimit-Remaining") === "0"
        ) {
          throw new Error("Rate limit exceeded");
        }
        throw new Error(json.message || "خطایی رخ داد");
      }
      return json;
    })
  );

  // Remove duplicate contributors by summing their contributions
  const allContributors = contributorsData.flat();
  const contributorsByLogin = new Map();
  for (const contributor of allContributors) {
    const existing = contributorsByLogin.get(contributor.login);
    if (existing) existing.contributions += contributor.contributions;
    else contributorsByLogin.set(contributor.login, { ...contributor });
  }

  // Highest first by contributions
  const uniqueContributors = Array.from(contributorsByLogin.values()).sort(
    (a, b) => b.contributions - a.contributions
  );

  return uniqueContributors;
});

export interface Donation {
  time: number;
  amount: number;
  currency: string;
  toman_amount: number;
  name: string;
  description: string;
  avatar?: string | null;
}

export interface DonationResponse {
  donates: Donation[];
}
