// src/components/LightThemeBackground.jsx
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const DigitalParticles = () => {
  const pointsRef = useRef();
  const particles = new Float32Array(5000 * 3).map(() => (Math.random() - 0.5) * 20);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.01;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() / 2) * 0.03;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled>
      <PointMaterial 
        color="#00ffcc" 
        size={0.03} 
        sizeAttenuation 
        transparent 
        opacity={0.8} 
      />
    </Points>
  );
};

const LightTheme3DBackground = () => {
  return (
    <Canvas className="!absolute inset-0 !w-full !h-full">
      <ambientLight intensity={0.3} />
      <DigitalParticles />
    </Canvas>
  );
};

export default LightTheme3DBackground;
