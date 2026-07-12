import { projects } from "@/src/constants/Projects";
import { ProjectsList } from "../Projects/ProjectsList";
import { SectionContainer } from "../ui/SectionContainer";
export default function Projects() {
  const latestProjects = [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <SectionContainer
      id="/projects"
      className="shadow-sectionInset dark:shadow-sectionInset-dark pb-0"
    >
      <p className="text-muted-forground py-4 text-sm">
        Here are some of my projects that I have worked on.
      </p>

      <ProjectsList projects={latestProjects} />
    </SectionContainer>
  );
}
