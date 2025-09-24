"use client"

import { ProjectsHero } from "../components/ProjectsHero";
import { FeaturedProjects } from "../components/FeaturedProjects";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <ProjectsHero />
      <FeaturedProjects />
    </div>
  );
}
