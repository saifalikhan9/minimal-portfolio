
export interface Project {
  title: string;
  description: string;
  imageLink: string;
  video?: string;
  linkLink: string;
  technologies: { name: string; icon: React.ReactNode }[];
  githubLink: string;
  details: boolean;
  projectDetailsPageSlug: string;
  isWorking: boolean;
  slug?: string;
}

export type ProjectFrontmatter = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  timeline: string;
  role?: string;
  team?: string;
  status: "Completed" | "Running" | string;
  liveLink?: string;
  githubLink?: string;
  technologies?: string[];
};

export type ProjectContent = React.ReactElement;
