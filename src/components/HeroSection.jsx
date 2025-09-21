import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

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

      {/* Placeholder for content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl font-bold">Hero Section</h1>
        </div>
      </div>
    </section>
  );
}