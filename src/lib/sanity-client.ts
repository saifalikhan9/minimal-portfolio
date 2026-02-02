import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  /**
   * If your dataset is private, you must provide a server-only token (DO NOT prefix with NEXT_PUBLIC).
   * When a token is used, disable the CDN (private datasets aren't served through it).
   */
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: process.env.SANITY_API_READ_TOKEN ? false : true,
  // Ensure the website only reads published content (no draft access required)
  perspective: "published",
});
