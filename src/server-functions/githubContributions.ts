"use server";

import { unstable_cache } from "next/cache";
import { githubConfig } from "@/src/config/GithubConfig";
import { filterLastYear } from "../utils/getYear";

export type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

export type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

async function fetchGithub(): Promise<ContributionItem[]> {
  const res = await fetch(
    `${githubConfig.apiUrl}/${githubConfig.username}.json`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    console.error("GitHub contributions API failed:", res.status);
    return [];
  }

  const data: { contributions?: unknown[] } = await res.json();

  if (!data?.contributions || !Array.isArray(data.contributions)) {
    return [];
  }

  const flat = data.contributions.flat();

  const levelMap: Record<
    GitHubContributionResponse["contributionLevel"],
    ContributionItem["level"]
  > = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
  };

  const valid: ContributionItem[] = flat
    .filter((item: unknown): item is GitHubContributionResponse => {
      if (!item || typeof item !== "object") return false;
      const i = item as Partial<GitHubContributionResponse>;
      return (
        typeof i.date === "string" &&
        typeof i.contributionLevel === "string" &&
        typeof i.contributionCount === "number"
      );
    })
    .map((i) => ({
      date: i.date,
      count: i.contributionCount,
      level: levelMap[i.contributionLevel],
    }));

  return filterLastYear(valid);
}

export const getGithubContributions = unstable_cache(
  fetchGithub,
  ["github-contributions"],
  { revalidate: 3600 }
);