"use client";

import Animated3DBackground from "./Animated3DBackground";
import LightThemeBackground from "./LightTheme3DBackground";
import useTheme from "../hooks/useTheme";

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="relative w-full min-h-screen">
      {/* Theme-based background */}
      {theme === "dark" ? <Animated3DBackground key="dark" /> : <LightThemeBackground key="light"/>}

      {/* Page content above the background */}
      <div className="relative z-10 flex flex-col">{children}</div>
    </div>
  );
};

export default Layout;