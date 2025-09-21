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
        </div>
      </div>
    </section>
  );
}