"use client";

import { motion } from "framer-motion";

export function ProjectCard({ project }) {
    <motion.div 
        whileHover={{ scale: 1.03 }} 
        className="bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col"
        >
        
        {/* Project Image */}
        <div className="w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800">
            <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
            />
        </div>

        {/* Project Details */}
        <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-2 text-[var(--hero-heading)]">
                {project.title}
            </h3>
            <p className="text-[var(--hero-paragraph)] flex-1">{project.description}</p>
        </div>

    </motion.div>
}
