"use client";

import { ProjectCard } from "./project-card";
import { LayoutGroup } from "motion/react";
import { useState } from "react";
import { Project } from "@/src/types/Projects";

export const ProjectsList = ({projects}:{projects:Project[]}) => {
  const [hovered, setHovered] = useState<string | null>(null);



  return (
    <LayoutGroup>
      <div
        onMouseLeave={() => setHovered(null)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {projects.map((project, inx) => (
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
