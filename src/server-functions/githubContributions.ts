"use server";

import { unstable_cache } from "next/cache";
import { githubConfig } from "@/src/config/GithubConfig";
// import { filterLastYear } from "../utils/getYear";

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
    `${githubConfig.apiUrl}/${githubConfig.username}?y=last`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    console.error("GitHub contributions API failed:", res.status);
    return [];
  }

  const data: { contributions?: unknown[] } = await res.json();

  if (!Array.isArray(data.contributions)) {
    return [];
  }

  const contributions = data.contributions.filter(
    (item): item is ContributionItem => {
      if (!item || typeof item !== "object") return false;

      const i = item as Partial<ContributionItem>;

      return (
        typeof i.date === "string" &&
        typeof i.count === "number" &&
        typeof i.level === "number"
      );
    },
  );

  return contributions;
}

export const getGithubContributions = unstable_cache(
  fetchGithub,
  ["github-contributions"],
  { revalidate: 3600 },
);
