"use client";
import React from "react";
import { useSidebar } from "../ui/sidebar";
import { PanelLeft } from "lucide-react";

const CustomTrigger = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar}>
      <PanelLeft className="cursor-pointer" />
    </button>
  );
};

export default CustomTrigger;
