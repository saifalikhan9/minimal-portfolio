
import { getSingleSanityBlog } from "@/src/utils/getSingleBlog";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import Link from "next/link";
import ReactMarkdown from "react-markdown"

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await  params;
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
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 md:px-0 ">
        <Link
          href="/blog"
          className="text-xs text-muted-forground hover:text-forground w-fit rounded-full border border-border/40 bg-background/40 px-3 py-1 transition-all duration-200 hover:bg-secondary/10"
        >
          ← Back to all blogs
        </Link>

        <header className="border-b border-border/40 pb-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-forground">
            Blog
          </p>
          <h1 className="text-forground mt-2 text-2xl font-bold leading-tight md:text-4xl">
            {frontmatter.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-forground">
            <span>
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-forground" />
            <span>{frontmatter.author}</span>
          </div>
          <p className="text-secondary mt-4 text-sm md:text-base">
            {frontmatter.description}
          </p>
        </header>
        <article className="prose max-w-none dark:prose-invert prose-sm md:prose-base  w-full">

          <ReactMarkdown >{content}</ReactMarkdown>
        </article>

      </div>
    </Container>
  );
}
