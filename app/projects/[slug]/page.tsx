import { ProjectContents } from "@/src/components/Projects/Project-Content";
import { getSingleProject } from "@/src/utils/getprojects";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const data = await getSingleProject(slug);
  if (!data) return {};

  const { frontmatter } = data;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const project = await getSingleProject(slug);

  if (!project) return null;

  const { content, frontmatter } = project;
  
  return (
    <div className="flex min-h-screen justify-start">
      <ProjectContents frontmatter={frontmatter} content={content} />
    </div>
  );
}