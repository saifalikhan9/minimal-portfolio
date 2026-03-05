import { getAllSBlogs } from "@/src/utils/getSingleBlog";
import { truncate } from "@/src/utils/utils";
import Link from "next/link";
import { SubHeading } from "../ui/Subheading";
import { BlogCard } from "../Blogs/BlogsCard";

export default async function BlogsLanding() {
  const blogs = await getAllSBlogs();
  

  return (
    <section className="">
      <SubHeading className="">I love to write things </SubHeading>
      <div className="my-4 ml-4 flex flex-col gap-4 md:px-10">
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
    </section>
  );
}
