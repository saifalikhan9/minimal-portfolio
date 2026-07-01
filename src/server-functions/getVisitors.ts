"use server";

// import { unstable_cache } from "next/cache";
// import { umamiClient } from "@/src/utils/getUmamiClient";

// type UmamiWebsiteStats = {
//   visitors?: number;
//   [key: string]: unknown;
// };

// type UmamiStatsResponse = {
//   status: number;
//   data?: UmamiWebsiteStats;
//   error?: unknown;
// };

// function getStatsQuery() {
//   const startDate = new Date("2025-01-01T00:00:00.000Z");
//   const endDate = new Date();

//   return {
//     startAt: startDate.getTime(),
//     endAt: endDate.getTime(),
//     unit: "day",
//     timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
//   };
// }

// async function fetchVisitorsCount(): Promise<number> {
//   const websiteId = process.env.NEXT_PUBLIC_UMAMI_ID || "";
//   if (!websiteId) return 0;
//   console.log(await umamiClient);

//   const res = (await umamiClient.getWebsiteStats(
//     websiteId,
//     getStatsQuery(),
//   )) as UmamiStatsResponse;
//   console.log(res);

//   if (res?.status !== 200) return 0;

//   const visitors = res.data?.visitors;
//   return typeof visitors === "number" ? visitors : 0;
// }

// export const getVisitorsCount = unstable_cache(
//   fetchVisitorsCount,
//   ["umami-visitors-count"],
//   {
//     revalidate: 2, // cache 60 seconds (adjust if needed)
//   },
// );

export const getCount = async () => {
  // Use %2F instead of TOTAL to target your root path ("/")
  const res = await fetch(
    "https://saifalikhan99.goatcounter.com/counter/%2F.json",
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    console.error("Failed to fetch GoatCounter data");
    return 250; // Fallback to Umami count
  }

  const data = await res.json();
  
  // This will now log your actual dashboard stats!
  console.log(data); 

  // Remove commas (if any) before parsing to prevent NaN/truncation issues on large numbers
  const goatCount = parseInt((data.count || '0').replace(/,/g, ''), 10);
  
  // Combine Umami history with new GoatCounter stats
  const count = 250 + goatCount; 
  
  return count;
};
