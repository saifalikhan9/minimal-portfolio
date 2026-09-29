import type { QueryParams } from "next-sanity";

import { sanityClient } from "@/src/lib/sanity-client";

export interface SanityImage {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
}

export interface Blog {
  slug: { current: string };
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  image: SanityImage;
  content: string;
}

export type BlogSlug = {
  slug: string;
};

const POSTS_QUERY = `
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {
    title,
    slug,
    description,
    publishedAt,
    author,
    image
  }
`;

const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    description,
    image,
    publishedAt,
    author,
    content
  }
`;

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 3600,
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
}): Promise<T> {
  return sanityClient.fetch<T>(query, params, {
    next: {
      revalidate,
    },
  });
}

export async function getAllBlogs(): Promise<Blog[]> {
  try {
    const posts = await sanityFetch<Blog[]>({
      query: POSTS_QUERY,
      params: {},
      revalidate: 3600,
    });

    return posts ?? [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export async function getSingleSanityBlog(slug: string): Promise<Blog | null> {
  try {
    const post = await sanityFetch<Blog | null>({
      query: POST_QUERY,
      params: { slug },
      revalidate: 3600,
    });

    return post ?? null;
  } catch (error) {
    console.error("Failed to fetch blog:", {
      slug,
      error,
    });

    return null;
  }
}
