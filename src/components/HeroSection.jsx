import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";


export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Digital Background */}
      <Canvas className="!absolute inset-0 !w-full !h-full">
        <ambientLight intensity={0.5} />
        <Stars
          radius={200}
          depth={60}
          count={8000}
          factor={7}
          saturation={0}
          fade
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.1} />
      </Canvas>

      {/* Foreground content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
            {/* Profile Image */}
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
            >
            <div className="w-52 h-52 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <img
                    src="src/assets/Profile_Picture.JPG"
                    alt="Gimhani Hansika"
                    className="w-48 h-48 rounded-full object-cover"
                />
                </div>
            </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >

                <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--hero-heading)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                Hi, I'm{" "}
                <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    Gimhani Hansika
                </span>
                </motion.h1>

                <p className="text-xl md:text-2xl text-[var(--hero-subheading)] mb-8 max-w-3xl mx-auto">
                A passionate professional blending{" "}
                <span className="text-primary font-semibold">Software Development</span>,{" "}
                <span className="text-primary font-semibold">Project Management</span>,{" "}
                <span className="text-primary font-semibold">Human Resources</span>, and{" "}
                <span className="text-primary font-semibold">Creative Design</span> to craft impactful solutions.
                </p>

                <p className="text-lg text-[var(--hero-paragraph)] mb-12 max-w-2xl mx-auto">
                I thrive on building meaningful user experiences, leading projects with clarity,
                and combining technical expertise with human-centered thinking.
                Always eager to learn, grow, and contribute to opportunities that make a real difference.
                </p>
            </motion.div>

          {/* CTA Buttons */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
            <Button as="a" href="/projects">
                View My Work
            </Button>

            <Button variant="outline" as="a" href="/resume.pdf" size="md" download="Gimhani_Hansika_Resume.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
            </Button>
            </motion.div>

            {/* Social Links */}
            <svg style={{ display: "none" }}>
                <linearGradient id="social-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#01742d" />
                    <stop offset="100%" stopColor="#84cc16" />
                </linearGradient>
            </svg>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center space-x-6 mb-16"
            >
                <Button variant="ghost" as="a" href="https://github.com/Hansi-Umayangani" target="_blank">
                <Github className="h-6 w-6 text-tertiary"/>
                </Button>

                <Button variant="ghost" as="a" href="https://www.linkedin.com/in/gimhani-hansika-945292311" target="_blank">
                <Linkedin className="h-6 w-6 text-tertiary" />
                </Button>

                <Button variant="ghost" as="a" href="mailto:gimhanihansika2020@gmail.com">
                <Mail className="h-6 w-6 text-tertiary" />
                </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
            <Button variant="ghost" onClick={scrollToNext}>
                <motion.div
                animate={{ y: [0, 10, 0] }} // move down 10px and back
                transition={{
                    duration: 1,      // total duration of one bounce
                    repeat: Infinity,  // loop forever
                    ease: "easeInOut", // smooth bounce
                }}
                >
                <ArrowDown className="h-5 w-5" 
                style={{ stroke: "var(--foreground)" }}
                />
                </motion.div>
            </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
}