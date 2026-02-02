import { ProjectsList } from "../Projects/ProjectsList";
export default function Projects() {

  return (
    <section
      id="/projects"
      className="shadow-sectionInset dark:shadow-sectionInset-dark my-4 px-3 py-4 md:px-10"
    >
      <p className="text-muted-forground py-2 text-sm">
        Here are some of my projects that I have worked on.
      </p>

      <ProjectsList  />
    </section>
  );
}
