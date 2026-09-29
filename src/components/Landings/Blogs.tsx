import { SubHeading } from "../ui/Subheading";
import { BlogCard } from "../Blogs/BlogsCard";
import { SectionContainer } from "../ui/SectionContainer";
import { getAllBlogs } from "@/src/utils/sanityFetch";

export default async function BlogsLanding() {
  const blogs = await getAllBlogs();

  return (
    <SectionContainer className="">
      <SubHeading className="">I love to write things </SubHeading>
      <div className="my-4 flex flex-col gap-4">
        {blogs
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime(),
          )
          .map((blog, idx) => (
            <BlogCard key={blog.slug.current ?? idx} posts={blog} />
          ))}
      </div>
    </SectionContainer>
  );
}
