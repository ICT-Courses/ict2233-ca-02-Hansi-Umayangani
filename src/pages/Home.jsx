import HeroSection from "../components/HeroSection";
import Animated3DBackground from "../components/Animated3DBackground";
import LightThemeBackground from "../components/LightTheme3DBackground";
import useTheme from "../hooks/useTheme";

const Home = () => {
  
  const { theme } = useTheme();
  
  return (
    <div className="relative w-full min-h-screen">
      {/* Theme-based background */}
      {theme === "dark" ? <Animated3DBackground /> : <LightThemeBackground />}

      {/* Page content above the background */}
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        {/* Other sections like Projects, About etc. */}
      </div>
    </div>
  );
};

export default Home;