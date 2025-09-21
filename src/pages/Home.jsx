import HeroSection from "../components/HeroSection";
import Animated3DBackground from "../components/Animated3DBackground";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-30"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/path-to-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 3D Background */}
      <Animated3DBackground />


      {/* Page content */}
      <div className="relative z-10">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;