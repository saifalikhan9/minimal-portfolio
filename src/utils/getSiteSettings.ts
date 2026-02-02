import { sanityClient } from "@/src/lib/sanity-client";

export type SiteSettings = {
  resumeUrl?: string;
};

export async function getSiteSettings(): Promise<SiteSettings> {
  const query = `
    *[_type == "siteSettings" && _id == "siteSettings"][0]{
      resumeUrl
    }
  `;

  try {
    const settings = await sanityClient.fetch(query);
    return {
      resumeUrl: settings?.resumeUrl,
    };
  } catch {
    return {};
  }
}

