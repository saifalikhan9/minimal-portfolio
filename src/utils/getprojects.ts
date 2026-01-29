import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import type { ProjectContent, ProjectFrontmatter } from "@/src/types/Projects";

type ProjectData = {
  content: ProjectContent;
  frontmatter: ProjectFrontmatter;
};

type ProjectMeta = {
  frontmatter: ProjectFrontmatter;
  slug: string;
};

export const getSingleProject = async (
  fileName: string,
): Promise<ProjectData | null> => {
  const filePath = path.join(process.cwd(), "src/data/projects", `${fileName}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const singleProject = fs.readFileSync(filePath, "utf-8");
  if (singleProject) {
    const { content, frontmatter } = await compileMDX<ProjectFrontmatter>({
      source: singleProject,
      options: { parseFrontmatter: true },
    });
    return {
      content,
      frontmatter,
    };
  }

  return null;
};

export const getAllProjects = async (): Promise<Array<ProjectMeta>> => {
  const files = fs.readdirSync(path.join(process.cwd(), "src/data/projects"));
  const blogs = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(process.cwd(), "src/data/projects", file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { frontmatter } = await compileMDX<ProjectFrontmatter>({
        source: fileContent,
        options: { parseFrontmatter: true },
      });
      const slug = file.replace(/\.mdx$/, "");
      return {
        slug,
        frontmatter,
      };
    }),
  );
  return blogs;
};
