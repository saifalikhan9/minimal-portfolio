import { BlogCard } from "@/src/components/Blogs/BlogsCard";
import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { getPageMetadata } from "@/src/config/Meta";
import { getAllSBlogs } from "@/src/utils/getSingleBlog";
import { Metadata } from "next";
import { Robots } from "next/dist/lib/metadata/types/metadata-types";




export const generateMetadata = (): Metadata => {
  const metadata = getPageMetadata("/blog");
  return {
    ...metadata,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      } as Robots["googleBot"],
    },
  };
};

export default async function BlogPost() {
  const allblogs = await getAllSBlogs();

  return (
    <Container className="pt-20 min-h-screen">
      <Heading>All Blogs </Heading>
      <div className="my-4 mx-4 flex flex-col gap-4 md:px-10">
        {allblogs
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date).getTime() -
              new Date(a.frontmatter.date).getTime(),
          )
          .map((blog, idx) => (
            <BlogCard key={blog.slug ?? idx} frontmatter={blog.frontmatter} slug={blog.slug} />
          ))}
      </div>
    </Container>
  );
}