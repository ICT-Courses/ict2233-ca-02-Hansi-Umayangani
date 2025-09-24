"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 
               bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] 
               bg-clip-text text-transparent"
          >
            Get In Touch
          </h1>

          {/* Paragraph */}
        </motion.div>
      </div>
    </section>
  );
}
