import { getAllSBlogs } from "@/src/utils/getSingleBlog";
import { truncate } from "@/src/utils/utils";
import Link from "next/link";
import { SubHeading } from "../ui/Subheading";
import { BlogCard } from "../Blogs/BlogsCard";
import { SectionContainer } from "../ui/SectionContainer";

export default async function BlogsLanding() {
  const blogs = await getAllSBlogs();
  

  return (
    <SectionContainer className="">
      <SubHeading className="">I love to write things </SubHeading>
      <div className="my-4  flex flex-col gap-4 ">
        {blogs
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date).getTime() -
              new Date(a.frontmatter.date).getTime(),
          )
          .map((blog, idx) => (
            <BlogCard key={blog.slug ?? idx} frontmatter={blog.frontmatter} slug={blog.slug} />
          ))}
      </div>
    </SectionContainer>
  );
}
