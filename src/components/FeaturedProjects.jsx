"use client";

import { ProjectCard } from "./ProjectCard";
import { featuredProjects } from "../data/Projects";

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--hero-heading)]">
            Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
