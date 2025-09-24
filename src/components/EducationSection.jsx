"use client"

import { motion } from "framer-motion"

export function EducationSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic path and achievements that shaped my knowledge and skills.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
