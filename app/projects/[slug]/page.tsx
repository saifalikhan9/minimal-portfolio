import { ProjectContents } from "@/src/components/Projects/Project-Content";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionContainer } from "@/src/components/ui/SectionContainer";
import { getSingleProject } from "@/src/utils/getprojects";
import {
  IconBrandGithub,
  IconCalendarEvent,
  IconGlobe,
  IconWorld,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

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
    <Container className="min-h-screen pt-24 pb-16">
      <SectionContainer>
        <div className="mx-auto flex flex-col gap-6">
          <Link
            href="/projects"
            className="text-muted-forground hover:text-forground border-border/40 bg-background/40 hover:bg-secondary/10 w-fit rounded-full border px-3 py-1 text-xs transition-all duration-200"
          >
            ← Back to Projects
          </Link>

          <article className="">
            <header className="border-secondary border-b">
              <div className="shadow-custom-inset-shadow rounded-2xl p-2">
                <div className="max-h-110 overflow-hidden rounded-xl">
                  <Image
                    src={frontmatter.imageUrl}
                    alt={frontmatter.title}
                    width={500}
                    height={500}
                    className="block h-auto w-full object-cover"
                  />
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
                    <IconCalendarEvent className="size-6 shrink-0" />
                  </div>
                </span>
                <div className="inline-flex gap-2">
                  {frontmatter.liveLink && (
                    <Link target="_blank" href={frontmatter.liveLink}>
                      <Button
                        icon={<IconWorld />}
                        className="px-5"
                        variant="secondary"
                      >
                        Link
                      </Button>
                    </Link>
                  )}
                  {frontmatter.githubLink && (
                    <Link target="_blank" href={frontmatter.githubLink}>
                      <Button icon={<IconBrandGithub />} className="px-5">
                        Github
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </header>

            <div className="">
              {content}
              {/* <MDXRemote source={content}/> */}
              {/* <MDXRemote
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
            /> */}
            </div>
          </article>
        </div>
      </SectionContainer>
    </Container>
  );
}
