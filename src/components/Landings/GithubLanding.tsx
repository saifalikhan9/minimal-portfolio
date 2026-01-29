"use client";
import React, { useEffect, useState } from "react";

import { Container } from "../ui/Container";
import { githubConfig } from "@/src/config/GithubConfig";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Heading } from "../ui/Heading";
import { SubHeading } from "../ui/Subheading";
import { ActivityCalendar } from "react-activity-calendar";

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel:
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";
};

function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return contributions.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= oneYearAgo;
  });
}

export const GithubLanding = () => {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${githubConfig.apiUrl}/${githubConfig.username}.json`,
        );
        console.log(response, "response");

        const data: { contributions?: unknown[] } = await response.json();

        if (data?.contributions && Array.isArray(data.contributions)) {
          // Flatten the nested array structure
          const flattenedContributions = data.contributions.flat();

          // Convert contribution levels to numbers
          const contributionLevelMap = {
            NONE: 0,
            FIRST_QUARTILE: 1,
            SECOND_QUARTILE: 2,
            THIRD_QUARTILE: 3,
            FOURTH_QUARTILE: 4,
          };

          // Transform to the expected format
          const validContributions = flattenedContributions
            .filter(
              (item: unknown): item is GitHubContributionResponse =>
                typeof item === "object" &&
                item !== null &&
                "date" in item &&
                "contributionCount" in item &&
                "contributionLevel" in item,
            )
            .map((item: GitHubContributionResponse) => ({
              date: String(item.date),
              count: Number(item.contributionCount || 0),
              level: (contributionLevelMap[
                item.contributionLevel as keyof typeof contributionLevelMap
              ] || 0) as ContributionItem["level"],
            }));

          if (validContributions.length > 0) {
            // Calculate total contributions
            const total = validContributions.reduce(
              (sum, item) => sum + item.count,
              0,
            );
            setTotalContributions(total);

            // Filter to show only the past year
            const filteredContributions = filterLastYear(validContributions);
            setContributions(filteredContributions);
          } else {
            setHasError(true);
          }
        } else {
          setHasError(true);
        }
      } catch (err) {
        console.error("Failed to fetch GitHub contributions:", err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log(contributions,)
  return (
    <>
      <Container className="p-3 lg:px-8">
        <h2 className="text-sm text-muted-forground mb-4 mx-2">Github Contributions</h2>
        <div className="bg-secondary/10 mx-auto lg:max-w-full rounded-xl p-4 inset-shadow-[1px_1px_4px_2.3px_rgba(0,0,0,0.1)] md:max-w-[44rem] dark:inset-shadow-[0_1px_2px_var(--color-neutral-500),0_-2px_4px_var(--color-neutral-500)] dark:ring-neutral-500">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <p className="text-muted-foreground">Loading contributions...</p>
            </div>
          ) : hasError ? (
            <div className="flex items-center justify-center py-8">
              <p className="text-muted-foreground">Failed to load contributions</p>
            </div>
          ) : contributions.length > 0 ? (
            <ActivityCalendar
              data={contributions}
              blockSize={11}
              blockMargin={4}
              fontSize={githubConfig.fontSize}
              colorScheme={theme === "dark" ? "dark" : "light"}
              maxLevel={githubConfig.maxLevel}
              theme={githubConfig.theme}
              labels={{
                months: githubConfig.months,
                weekdays: githubConfig.weekdays,
                totalCount: githubConfig.totalCountLabel,
              }}
              style={{
                color: "var(--color-forground)",
              }}
            />
          ) : null}
        </div>
      </Container>
    </>
  );
};
