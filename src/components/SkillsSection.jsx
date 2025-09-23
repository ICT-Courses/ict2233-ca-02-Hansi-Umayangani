"use client"

import { motion } from "framer-motion"

export function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of technical expertise, management strengths, and collaborative tools 
            that enable seamless coordination of people, processes, and technology
          </p>
        </motion.div>
      </div>
    </section>
  )
}
