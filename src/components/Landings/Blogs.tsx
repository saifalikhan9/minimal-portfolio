import { getAllBlogs } from "@/src/utils/getSingleBlog";
import { truncate } from "@/src/utils/utils";
import Link from "next/link";
import { SubHeading } from "../ui/Subheading";

export default async function BlogsLanding() {
  const blogs = await getAllBlogs();
  

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
            <Link
              href={`/blog/${blog.slug}`}
              key={idx}
              className="hover:bg-secondary/10 rounded transition-all duration-200 ease-in-out hover:scale-101 md:p-2"
            >
              <div className="items-center justify-between md:flex">
                <h2 className="text-forground mb-2 w-full text-base font-bold tracking-tight">
                  {blog.frontmatter.title}
                </h2>
                <p className="text-forground mb-2 w-20 text-xs">
                  {new Date(blog.frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="text-secondary max-w-lg text-sm">
                {truncate(blog.frontmatter.description, 150)}
              </p>
            </Link>
          ))}
      </div>
    </section>
  );
}
