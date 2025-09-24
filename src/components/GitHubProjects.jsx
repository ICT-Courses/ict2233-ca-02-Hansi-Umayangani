"use client";

import { ProjectCard } from "./ProjectCard";

const githubSampleProjects = [
    {
  title: "Point of Sales System",
    description:
      "A desktop application for a small-scale aquarium business to manage sales, inventory, and customer records efficiently.",
    image: "src/assets/Projects_Snapshots/AquaPOS.png",
    demoLink: "https://drive.google.com/file/d/1uvLOmyRMV3cr9pWgLmTYx17jBaPXR2To/view?usp=sharing", 
    codeLink: "https://github.com/ICT-Courses/application-development-ca1-Hansi-Umayangani.git",
  },
  {
    title: "Promotional Footwear Website",
    description:
      "A promotional website for a footwear business showcasing products and brand information without e-commerce functionality.",
    image: "src/assets/Projects_Snapshots/S&S_Footwear_Web.png",
    demoLink: "http://ss-footwear-promo-website.vercel.app",
    codeLink: "https://github.com/Hansi-Umayangani/S-S-Footwear-Promo-Website.git",
  },
  {
    title: "Pawfect Home Pet Adoption Center",
    description:
      "A website for a pet adoption center, enabling users to view adoptable pets and learn about adoption procedures.",
    image: "src/assets/Projects_Snapshots/Pawfect_Home_Web.png",
    demoLink: "#",
    codeLink: "https://github.com/ICT-Courses/ict2233-ca-01-Hansi-Umayangani.git",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio showcasing my projects, skills, and experience in a modern and responsive design.",
    image: "src/assets/Projects_Snapshots/Portfolio.png",
    demoLink: "#",
    codeLink: "#",
  },
];

export function GitHubProjects() {
  return (
    <section className="py-20 bg-gradient-to-t from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--hero-heading)]">
            GitHub Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {githubSampleProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
