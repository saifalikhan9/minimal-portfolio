import { ContributionItem } from "../server-functions/githubContributions";

export function filterLastYear(
  contributions: ContributionItem[],
): ContributionItem[] {
  const today = new Date();

  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate(),
  );

  const start = oneYearAgo.toISOString().slice(0, 10);
  const end = today.toISOString().slice(0, 10);

  return contributions
    .filter((item) => {
      return item.date >= start && item.date <= end;
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}
