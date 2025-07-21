"use client";

import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import React, { useEffect, useState } from "react";

export const CustomNextLoader = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const mainTheme = theme === "dark" ? "#14b8a6" : "#14b8a6";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <NextTopLoader
        crawlSpeed={100}
        showSpinner={false}
        height={3}
        color={mainTheme}
      />
    </div>
  );
};
