import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const Animated3DBackground = () => {
  return (
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
  );
};

export default Animated3DBackground;