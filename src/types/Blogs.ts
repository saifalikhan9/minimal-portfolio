export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  author: string;
  imagesLink: string;
};

export type BlogData = {
  content: string;
  frontmatter: BlogFrontmatter;
};

export type BlogMetadata = {
  frontmatter: BlogFrontmatter;
  slug: string;
};
