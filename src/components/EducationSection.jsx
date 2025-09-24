"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Calendar  } from "lucide-react"

const educationData = [
  {
    institution: "University of Sri Jayawardhanapura, Sri Lanka",
    degree: "BSc. (Hons) in Information Technology (Ongoing)",
    period: "2024 - 2027",
    details:
      "Pursuing a degree in Information Technology with a focus on software development, problem solving, and innovative technologies.",
    icon: GraduationCap,
  },
  {
    institution: "Chartered Institute of Personnel Management (CIPM), Colombo 05",
    degree: "Diploma in Human Resources Management (Ongoing)",
    period: "2024 - Present",
    details:
      "Expanding knowledge in human resources, leadership, and organizational development.",
    icon: GraduationCap,
  },
  {
    institution: "Chartered Institute of Personnel Management (CIPM), Colombo 05",
    degree: "Advanced Certificate in Human Resources Management",
    period: "2023 - 2024",
    details:
      "Completed advanced training in HR strategies and professional practices.",
    icon: GraduationCap,
  },
  {
    institution: "BCI Campus, Negombo",
    degree: "Aquinas Diploma in English & Literature",
    period: "2023 - 2024",
    details:
      "Developed strong communication and analytical skills through studies in English language and literature.",
    icon: GraduationCap,
  },
  {
    institution: "IMBS Green Campus, Gampaha",
    degree: "Diploma in Information & Communication Technology",
    period: "2020 - 2021",
    details:
      "Studied ICT fundamentals including networking, hardware, and basic programming.",
    icon: GraduationCap,
  },
  {
    institution: "Devi Balika Vidyalaya, Colombo 08",
    degree: "G.C.E. Advanced Level Examination",
    period: "2020 - 2022",
    details: "Completed A/L in Arts Stream with 3A's - Z Score: 1.8167.",
    icon: BookOpen,
  },
  {
    institution: "Gothami Balika Vidyalaya, Colombo 10",
    degree: "G.C.E. Ordinary Level Examination",
    period: "2014 - 2019",
    details: "Successfully passed O/L with 9A's.",
    icon: BookOpen,
  },
]

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

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-300 dark:bg-gray-700"></div>

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0
            const Icon = edu.icon || GraduationCap

            return (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-12 flex w-full items-start relative ${
                    isLeft ? "justify-start" : "justify-end"
                }`}
                >
                {/* Connector line from vertical timeline to card */}
                <span
                    className={`absolute top-40 h-0.5 bg-primary`}
                    style={{
                    left: isLeft ? undefined : "50%",
                    right: isLeft ? "50%" : undefined,
                    width: "2rem",
                    }}
                ></span>

                {/* Card */}
                <div className={`relative w-full md:w-1/2 ${isLeft ? "pr-8" : "pl-8"}`}>
                    <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition relative">
                    {/* Floating Icon */}
                    <Icon className="w-10 h-10 text-primary absolute -top-5 -left-5 bg-white/80 dark:bg-gray-800/60 p-2 rounded-full shadow-md" />

                    {/* Card Content */}
                    <h3 className="text-lg font-semibold mb-2">{edu.institution}</h3>
                    <p className="font-medium">{edu.degree}</p>
                    <p className="flex items-center text-sm text-muted-foreground mt-2 mb-3">
                        <Calendar className="w-4 h-4 mr-2 text-[#A3968A]" />
                        {edu.period}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">{edu.details}</p>
                    </div>
                </div>
                </motion.div>
            )
            })}

        </div>
      </div>
    </section>
  )
}
