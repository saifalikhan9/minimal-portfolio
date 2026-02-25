import { ContributionItem } from "../server-functions/githubContributions";

export function filterLastYear(contributions: ContributionItem[]): ContributionItem[] {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  
    return contributions.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= oneYearAgo;
    });
  }