"use client"

import Layout from "../components/Layout";
import { ProjectsHero } from "../components/ProjectsHero";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { GitHubProjects } from "../components/GitHubProjects";

export default function Projects() {
  return (
    <Layout>
    <div className="flex flex-col" >
      <ProjectsHero />
      <div className="container mx-auto px-4 py-4 md:py-2">
        <FeaturedProjects />
        <GitHubProjects />
      </div>
    </div>
    </Layout>
  );
}
