import rehypeHighlight from "@shikijs/rehype";
import { getSingleSanityBlog } from "@/src/utils/getSingleBlog";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import Link from "next/link";

import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogComponents } from "@/src/components/Blogs/BlogComponents";
import Image from "next/image";

import { IconCalendarEvent } from "@tabler/icons-react";
import { Button } from "@/src/components/ui/Button";

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

  return (
    <Container className="min-h-screen pt-24 pb-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 md:px-0">
        <Link
          href="/blog"
          className="text-muted-forground hover:text-forground border-border/40 bg-background/40 hover:bg-secondary/10 w-fit rounded-full border px-3 py-1 text-xs transition-all duration-200"
        >
          ← Back to Blogs
        </Link>

        <header className="border-secondary border-b">
          <div className="shadow-custom-inset-shadow mx-auto max-w-3xl overflow-hidden rounded-2xl p-2">
            <Image
              src={
                "https://images.unsplash.com/photo-1779269724146-93450257e249?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Blog image"
              height={500}
              width={500}
              className="w-full rounded-[11px] object-cover"
            />
          </div>

          <h1 className="font-playfair text-forground my-4 text-4xl font-medium">
            {frontmatter.title}
          </h1>
          <p className="text-muted-forground text-xl">
            {frontmatter.description}
          </p>
          <div className="my-4 flex items-center justify-between">
            <span className="text-muted-forground inline-flex gap-2">
              <div className="flex items-center justify-center">
                <IconCalendarEvent className="size-6 shrink-0" />
              </div>
              <p>{frontmatter.date.toString()}</p>
            </span>
            <Button className="px-5" variant="secondary">
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
                            pre(node) {
                            
                              delete node.properties.style;
                            },
                          },
                        ],
                      },
                    ],
                  ]
                },
              }}
            />
          </div>
        </article>
      </div>
    </Container>
  );
}
