"use client";
import { projects } from "@/src/constants/Projects";
import { ProjectCard } from "./project-card";
import { LayoutGroup } from "motion/react";
import { useState } from "react";

export const ProjectsList = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const latestProjects = [...projects]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    )
    .slice(0, 4);


  return (
    <LayoutGroup>
      <div
        onMouseLeave={() => setHovered(null)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {latestProjects.map((project, inx) => (
          <ProjectCard
            key={`${project.title}`}
            index={`card-${inx}`}
            projects={project}
            hovered={hovered}
            onMouseEnter={() => setHovered(`card-${inx}`)}
          />
        ))}
      </div>
    </LayoutGroup>
  );
};
