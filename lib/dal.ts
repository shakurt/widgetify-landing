import { api } from "@/lib/api";
import { repositories } from "@/lib/constants";
import type { Contributor, Donation } from "@/lib/types";

type DonationResponse = {
  success: boolean;
  message: string;
  donates: Donation[];
};

export const getDonations = async (
  count?: number
): Promise<DonationResponse> => {
  try {
    const res = await api("/top-donates", {
      cache: "force-cache",
      next: { revalidate: 3600 },
      method: "GET",
    });

    if (!res.ok)
      return {
        success: false,
        message: "Failed to fetch donations",
        donates: [],
      };

    const { donates }: { donates: Donation[] } = await res.json();

    if (count)
      return {
        success: true,
        message: "Donations fetched successfully",
        donates: donates.slice(0, count),
      };

    return {
      success: true,
      message: "Donations fetched successfully",
      donates,
    };
  } catch (error) {
    console.error("Error fetching donations:", error);
    return {
      success: false,
      message: "Error fetching donations in catch block",
      donates: [],
    };
  }
};

type ContributorsResponse = {
  success: boolean;
  message: string;
  contributors: Contributor[];
};
export const getContributors = async (): Promise<ContributorsResponse> => {
  try {
    const contributorsData = await Promise.allSettled(
      repositories.map(async (url) => {
        try {
          const res = await fetch(url, {
            cache: "force-cache",
            next: { revalidate: 3600 },
            method: "GET",
          });

          if (!res.ok) {
            if (
              res.status === 403 &&
              res.headers.get("X-RateLimit-Remaining") === "0"
            ) {
              console.warn(`GitHub API rate limit exceeded for ${url}`);
              return {
                success: false,
                message: "Rate limit exceeded",
                contributors: [],
              };
            }

            console.warn(
              `Failed to fetch contributors from ${url}: ${res.status}`
            );
            return {
              success: false,
              message: "Failed to fetch contributors",
              contributors: [],
            };
          }

          const resJson = await res.json();

          return resJson;
        } catch (error) {
          console.error(`Error fetching from ${url}:`, error);
          return {
            success: false,
            message: "Error fetching contributors in catch block",
            contributors: [],
          };
        }
      })
    );

    // Extract successful results, filter out empty arrays
    const successfulData = contributorsData
      .filter((result): result is PromiseFulfilledResult<Contributor[]> => {
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

    return {
      success: true,
      message: "Contributors fetched successfully",
      contributors: uniqueContributors,
    };
  } catch (error) {
    console.error("Critical error in getContributors:", error);
    return {
      success: false,
      message: "Critical error in getContributors catch block",
      contributors: [],
    };
  }
};
