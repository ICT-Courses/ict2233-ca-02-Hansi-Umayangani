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
          {/* Heading and paragraph */}
        </motion.div>
      </div>
    </section>
  );
}
