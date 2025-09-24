"use client"

import { motion } from "framer-motion"

// Experience data
const experiences = [
  {
    role: "Event & Project Management",
    caption:
      "Coordinating and organizing events, guiding project teams, managing documentation, and fostering leadership, teamwork, and effective communication across various student projects and workshops.",
    bgImage: "src/assets/Experience_Cards/Evenet_Management.jpg",
  },
  {
    role: "UI/UX Designer",
    caption: "Designing modern, responsive interfaces and ensuring seamless user experiences.",
    bgImage: "src/assets/Experience_Cards/UI-UX_Designer.jpg",
  },
  {
    role: "Graphic Design",
    caption: "Crafting creative visuals, posters, and digital content that bring ideas to life aesthetically.",
    bgImage: "src/assets/Experience_Cards/Graphic_Designer.jpg",
  },
  {
    role: "Full Stack Web Projects",
    caption: "Developing websites and applications with modern tools while learning to balance frontend aesthetics and backend logic.",
    bgImage: "src/assets/Experience_Cards/Programmer.jpg",
  },
  {
    role: "Documentation & Research",
    caption: "Preparing structured reports, research findings, and project documentation that meet professional standards.",
    bgImage: "src/assets/Experience_Cards/Research-Documentation.jpg",
  },
  {
    role: "Personal & Creative Growth",
    caption:
      "Exploring creativity beyond technology through music, performance, photography, design, and artistic expression, enhancing both personal and professional development.",
    bgImage: "src/assets/Experience_Cards/Aesthatics.jpg",
  },
]


export function ExperienceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of professional experiences, creative contributions, and personal growth.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden shadow-lg">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${exp.bgImage})` }}
            ></div>
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-xl font-bold text-white mb-3">{exp.role}</h3>
                <p className="text-sm text-white opacity-90">{exp.caption}</p>
            </div>
            <div className="aspect-[4/3]"></div>
            </div>
        ))}
        </div>

      </div>
    </section>
  )
}
