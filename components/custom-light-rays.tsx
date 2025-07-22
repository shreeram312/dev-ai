"use client";
import React, { useEffect, useState } from "react";
import LightRays from "./react-bits/LightRays/LightRays";
import { useTheme } from "next-themes";

const CustomLightRays = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const brightColor = theme === "dark" ? "#FF772E" : "#FFFFFF";

  return (
    <div>
      <div className="absolute inset-0 w-full h-full z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor={brightColor} // Matches your primary color from dark mode
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
    </div>
  );
};

export default CustomLightRays;
