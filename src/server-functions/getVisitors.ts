"use server";

import { umamiClient } from "@/src/utils/getUmamiClient";

type UmamiWebsiteStats = {
  visitors?: number;
  [key: string]: unknown;
};

type UmamiStatsResponse = {
  status: number;
  data?: UmamiWebsiteStats;
  error?: unknown;
};

function getStatsQuery() {
  const startDate = new Date("2026-01-01T00:00:00.000Z");
  const endDate = new Date();

  return {
    startAt: startDate.getTime(),
    endAt: endDate.getTime(),
    unit: "day",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

export async function getUmamiWebsiteStats(): Promise<UmamiWebsiteStats | null> {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_ID || "";
  if (!websiteId) return null;

  const res = (await umamiClient.getWebsiteStats(
    websiteId,
    getStatsQuery(),
  )) as UmamiStatsResponse;

  if (res?.status !== 200) return null;
  return res.data ?? null;
}

export async function getVisitorsCount(): Promise<number> {
  const stats = await getUmamiWebsiteStats();
  const visitors = stats?.visitors;
  return typeof visitors === "number" ? visitors : 0;
}

