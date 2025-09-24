"use client"

import { ProjectsHero } from "../components/ProjectsHero";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { GitHubProjects } from "../components/GitHubProjects";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <ProjectsHero />
      <FeaturedProjects />
      <GitHubProjects />
    </div>
  );
}
