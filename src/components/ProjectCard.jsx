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
    </motion.div>
}
