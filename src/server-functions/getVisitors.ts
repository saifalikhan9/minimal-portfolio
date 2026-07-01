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
  const res = await fetch(
    "https://saifalikhan99.goatcounter.com/counter/TOTAL.json",
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    console.error("Failed to fetch GoatCounter data");
    
    return 250 ; // this count is from the previous umami analytics 
  }

  const data = await res.json();

 
const count = 250+parseInt(data.count) // this count is from the previous umami analytics 
  return count;
};
