import rehypeHighlight from "@shikijs/rehype";

import {
    BlogSlug,
  getSingleSanityBlog,
} from "@/src/utils/sanityFetch";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/src/components/ui/Container";
import { SectionContainer } from "@/src/components/ui/SectionContainer";
import { BlogComponents } from "@/src/components/Blogs/BlogComponents";

import Link from "next/link";
import Image from "next/image";

import { MDXRemote } from "next-mdx-remote/rsc";

import {
  IconCalendarEvent,
  IconMoodPuzzled,
  IconShare,
} from "@tabler/icons-react";

import { Button } from "@/src/components/ui/Button";

import { urlFor } from "@/sanity/lib/image";

import { sanityClient } from "@/src/lib/sanity-client";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = await getSingleSanityBlog(slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,

    description: blog.description,

    authors: [
      {
        name: blog.author,
      },
    ],

    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.publishedAt,
    },
  };
}

export async function generateStaticParams(): Promise<BlogSlug[]> {
  const posts = await sanityClient.fetch<BlogSlug[]>(
    `
      *[_type == "post" && defined(slug.current)] {
        "slug": slug.current
      }
    `,
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;

  const blog = await getSingleSanityBlog(slug);

  if (!blog) {
    notFound();
  }

  const blogImageURL = blog.image
    ? (urlFor(blog.image)?.url() ?? null)
    : null;

  return (
    <Container className="min-h-screen pt-24 pb-16">
      <SectionContainer>
        <div className="flex w-full flex-col gap-6">
          <Link
            href="/blog"
            className="text-muted-forground hover:text-forground border-border/40 bg-background/40 hover:bg-secondary/10 w-fit rounded-full border px-3 py-1 text-xs transition-all duration-200"
          >
            ← Back to Blogs
          </Link>

          <header className="border-secondary border-b">
            <div className="shadow-custom-inset-shadow rounded-2xl p-2">
              <div className="max-h-110 overflow-hidden rounded-xl">
                {blogImageURL ? (
                  <Image
                    src={blogImageURL}
                    alt={blog.title}
                    width={500}
                    height={500}
                    className="block h-auto w-full object-cover"
                  />
                ) : (
                  <div className="flex h-100 items-center justify-center">
                    <div className="flex flex-col items-center">
                      <IconMoodPuzzled className="size-20" />

                      <p className="text-xl">
                        Image not found
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h1 className="font-playfair text-forground my-4 text-3xl font-semibold md:text-4xl">
              {blog.title}
            </h1>

            <p className="text-muted-forground text-base font-normal md:text-lg">
              {blog.description}
            </p>

            <div className="my-4 flex items-center justify-between">
              <span className="text-muted-forground inline-flex gap-2">
                <div className="flex items-center justify-center">
                  <IconCalendarEvent className="size-5 shrink-0 md:size-6" />
                </div>

                <p className="text-sm md:text-base">
                  {blog.publishedAt}
                </p>
              </span>

              <Button
                icon={<IconShare className="size-4" />}
                variant="secondary"
              >
                Share
              </Button>
            </div>
          </header>

          <article>
            <div>
              <MDXRemote
                source={blog.content}
                components={BlogComponents}
                options={{
                  mdxOptions: {
                    rehypePlugins: [
                      [
                        rehypeHighlight,
                        {
                          theme: "github-dark",

                          transformers: [
                            {
                              pre(node: {
                                properties: Record<
                                  string,
                                  unknown
                                >;
                              }) {
                                delete node.properties.style;
                              },
                            },
                          ],
                        },
                      ],
                    ],
                  },
                }}
              />
            </div>
          </article>
        </div>
      </SectionContainer>
    </Container>
  );
}