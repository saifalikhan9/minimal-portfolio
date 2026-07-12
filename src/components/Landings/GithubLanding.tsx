"use client";

import { Container } from "../ui/Container";
import { githubConfig } from "@/src/config/GithubConfig";
import { useTheme } from "next-themes";
import { ActivityCalendar } from "react-activity-calendar";
import { ContributionItem } from "@/src/server-functions/githubContributions";
import { useEffect, useState } from "react";

export const GithubLanding = ({
  contributions,
}: {
  contributions: ContributionItem[];
}) => {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !contributions?.length) return null;

  return (
    <>
      <Container className="px-2 md:px-8 py-4">
        <h2 className="text-muted-forground mx-2 mb-4 text-sm">
          Github Contributions
        </h2>
        <div className="bg-secondary/10 mx-auto rounded-xl p-4 lg:max-w-full">
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
          />
        </div>
      </Container>
    </>
  );
};
