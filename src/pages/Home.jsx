import HeroSection from "../components/HeroSection";
import Animated3DBackground from "../components/Animated3DBackground";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Animated3DBackground />
        <div>
        <HeroSection />
        </div>
    </div>
  );
};

export default Home;