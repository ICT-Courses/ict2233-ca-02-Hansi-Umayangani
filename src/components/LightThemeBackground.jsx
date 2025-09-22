// src/components/LightThemeBackground.jsx
import React from "react";

const LightThemeBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/light-theme-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-white/20" /> {/* optional overlay */}
    </div>
  );
};

export default LightThemeBackground;
