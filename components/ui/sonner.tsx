"use client";
import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: `bg-background text-foreground border-border shadow-lg ${
            isDark ? "text-green-500" : ""
          }`,
          description: `text-muted-foreground ${isDark ? "text-bg-primary" : ""}`,
          actionButton: `bg-primary text-primary-foreground font-medium ${
            isDark ? "text-green-500" : ""
          } hover:bg-primary/90`,
          cancelButton: `bg-muted text-muted-foreground font-medium ${
            isDark ? "text-green-500" : ""
          } hover:bg-muted/90`,
          closeButton: `text-muted-foreground ${isDark ? "text-bg-primary" : ""}`,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
