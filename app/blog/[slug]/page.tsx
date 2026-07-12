import rehypeHighlight from "@shikijs/rehype";
import { getSingleSanityBlog } from "@/src/utils/getSingleBlog";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import Link from "next/link";

import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogComponents } from "@/src/components/Blogs/BlogComponents";
import Image from "next/image";

import { IconCalendarEvent, IconMoodPuzzled, IconShare } from "@tabler/icons-react";
import { Button } from "@/src/components/ui/Button";
import { SectionContainer } from "@/src/components/ui/SectionContainer";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getSingleSanityBlog(slug);
  if (!data) {
    return {};
  }
  const { frontmatter } = data;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      publishedTime: frontmatter.date,
    },
  };
}

export default async function Blogs({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const blogData = await getSingleSanityBlog(slug);
  if (!blogData) {
    return redirect("/blog");
  }

  const { content, frontmatter } = blogData;
  const blogImageURL = urlFor(frontmatter.imagesLink)?.url();
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
                    alt={frontmatter.title}
                    width={500}
                    height={500}
                    className="block h-auto w-full object-cover"
                  />
                ) : (
                  <div className="flex h-100 items-center justify-center">
                    <div className="flex flex-col items-center">
                      <IconMoodPuzzled className="size-20" />
                      <p className="text-xl">Image not found</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h1 className="font-playfair text-forground my-4 text-3xl font-semibold md:text-4xl">
              {frontmatter.title}
            </h1>
            <p className="text-muted-forground text-base md:text-lg font-normal">
              {frontmatter.description}
            </p>
            <div className="my-4 flex items-center justify-between">
              <span className="text-muted-forground inline-flex gap-2">
                <div className="flex items-center justify-center">
                  <IconCalendarEvent className="md:size-6 size-5 shrink-0" />
                </div>
                <p className="text-sm md:text-base">
                  {frontmatter.date.toString()}
                </p>
              </span>
              <Button icon={<IconShare className="size-4 "/>} className="" variant="secondary">
                Share
              </Button>
            </div>
          </header>
          <article className="">
            <div className="">
              <MDXRemote
                source={content}
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
                                properties: Record<string, unknown>;
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
