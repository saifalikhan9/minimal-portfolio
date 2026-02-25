import type {  BlogData, BlogMetadata } from "@/src/types/Blogs";
import { sanityClient } from "../lib/sanity-client";

export const getAllSBlogs = async (): Promise<Array<BlogMetadata>> => {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      description,
      publishedAt,
      author
    }
  `;

  let posts: any[] = [];
  try {
    posts = await sanityClient.fetch(query);
  } catch (error) {
    console.error("Sanity: failed to fetch posts (getAllSBlogs)", error);
    return [];
  }

  return posts.map((post: any) => ({
    slug: post.slug.current,
    frontmatter: {
      title: post.title,
      description: post.description,
      date: post.publishedAt,
      author: post.author,
    },
  }));
};



export const getSingleSanityBlog = async (
  slug: string,
): Promise<BlogData | null> => {
  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      description,
      publishedAt,
      author,
      content
    }
  `;

  let post: any = null;
  try {
    post = await sanityClient.fetch(query, { slug });
  } catch (error) {
    console.error("Sanity: failed to fetch post (getSingleSanityBlog)", {
      slug,
      error,
    });
    return null;
  }

  if (!post) return null;

  return {
    frontmatter: {
      title: post.title,
      description: post.description,
      date: post.publishedAt,
      author: post.author,
    },
    content: post.content, // markdown string
  };
};

