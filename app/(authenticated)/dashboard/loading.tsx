import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen -my-30">
      <Loader2 className="animate-spin text-[var(--color-primary)]" />
    </div>
  );
};

export default Loading;
