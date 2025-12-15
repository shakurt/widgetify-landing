import "server-only";

import { repositories } from "@/lib/constants";
import { Donation } from "@/lib/types";

type DonationResponse = {
  donates: Donation[];
};

export const getDonations = async (count?: number): Promise<Donation[]> => {
  try {
    const res = await fetch("https://api.widgetify.ir/top-donates", {
      cache: "force-cache",
      next: { revalidate: 28800 },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch donations: ${res.status} ${res.statusText}`
      );
    }

    const data: DonationResponse = await res.json();

    if (!data || !Array.isArray(data.donates)) {
      throw new Error("Invalid donations data structure");
    }

    const donations = data.donates;
    if (count) return donations.slice(0, count);
    return donations;
  } catch (error) {
    console.error("Error fetching donations:", error);

    return [];
  }
};

// add cache and check the func
export const getContributors = async () => {
  try {
    const contributorsData = await Promise.allSettled(
      repositories.map(async (url) => {
        try {
          const response = await fetch(url, {
            headers: {
              "User-Agent": "widgetify-landing/1.0",
            },
          });

          if (!response.ok) {
            if (
              response.status === 403 &&
              response.headers.get("X-RateLimit-Remaining") === "0"
            ) {
              console.warn(`GitHub API rate limit exceeded for ${url}`);
              return []; // Return empty array for rate limited repos
            }
            console.warn(
              `Failed to fetch contributors from ${url}: ${response.status}`
            );
            return []; // Return empty array for failed repos
          }

          const json = await response.json();

          // Validate that we got an array
          if (!Array.isArray(json)) {
            console.warn(`Invalid contributors data from ${url}`);
            return [];
          }

          return json;
        } catch (error) {
          console.error(`Error fetching from ${url}:`, error);
          return []; // Return empty array on any error
        }
      })
    );

    // Extract successful results, filter out empty arrays
    const successfulData = contributorsData
      .filter((result): result is PromiseFulfilledResult<any[]> => {
        console.log("Contributor fetch result:", result);
        return (
          result.status === "fulfilled" &&
          Array.isArray(result.value) &&
          result.value.length > 0
        );
      })
      .map((result) => result.value);

    // Remove duplicate contributors by summing their contributions
    const allContributors = successfulData.flat();
    const contributorsByLogin = new Map();

    for (const contributor of allContributors) {
      // Basic validation of contributor object
      if (
        !contributor ||
        !contributor.login ||
        typeof contributor.contributions !== "number"
      ) {
        continue; // Skip invalid contributors
      }

      const existing = contributorsByLogin.get(contributor.login);
      if (existing) {
        existing.contributions += contributor.contributions;
      } else {
        contributorsByLogin.set(contributor.login, { ...contributor });
      }
    }

    // Highest first by contributions
    const uniqueContributors = Array.from(contributorsByLogin.values()).sort(
      (a, b) => b.contributions - a.contributions
    );

    return uniqueContributors;
  } catch (error) {
    console.error("Critical error in getContributors:", error);
    return [];
  }
};
