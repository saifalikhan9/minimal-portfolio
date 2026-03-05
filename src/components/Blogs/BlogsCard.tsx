import { BlogMetadata } from "@/src/types/Blogs";
import { truncate } from "@/src/utils/utils";
import { Link } from "next-view-transitions";



export const BlogCard: React.FC<BlogMetadata> = ({ frontmatter, slug }) => (
    <Link
        href={`/blog/${slug}`}
        className="hover:bg-secondary/10 bg-secondary/20 rounded dark:shadow-custom-inset-shadow-dark shadow-custom-dark  transition-all duration-200 ease-in-out hover:scale-101 p-2"
    >
        <div className="items-center justify-between md:flex">
            <Title>{frontmatter.title}</Title>

            <BlogDate date={frontmatter.date} />


        </div>

        <Description >
            {truncate(frontmatter.description, 150)}
        </Description>
    </Link>
);

const BlogDate: React.FC<{ date: string }> = ({ date }) => {
    return (
        <p className="text-foreground mb-2 w-20 text-xs">
            {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            })}
        </p>
    );
};

const Title: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <h2 className="text-foreground mb-2 w-full max-w-xl text-base font-bold tracking-tight">
        {children}
    </h2>;
};

const Description: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <p className="text-secondary max-w-lg text-sm">{children}</p>;
};

