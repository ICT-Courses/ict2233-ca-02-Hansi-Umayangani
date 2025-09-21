import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

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

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Gimhani Hansika
                </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                A passionate professional blending{" "}
                <span className="text-primary font-semibold">Software Development</span>,{" "}
                <span className="text-primary font-semibold">Project Management</span>,{" "}
                <span className="text-primary font-semibold">Human Resources</span>, and{" "}
                <span className="text-primary font-semibold">Creative Design</span> to craft impactful solutions.
                </p>

                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
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

            <Button variant="outline" as="a" href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
            </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
}