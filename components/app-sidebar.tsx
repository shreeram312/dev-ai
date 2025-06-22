"use client";
import {
  Home,
  Brain,
  BookOpen,
  Target,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  GraduationCap,
  Lightbulb,
  Users,
  Trophy,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Menu items for AI Learning Companion
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "AI Tutor",
    url: "/ai-tutor",
    icon: Brain,
  },
  {
    title: "Courses",
    url: "/courses",
    icon: BookOpen,
  },
  {
    title: "Goals",
    url: "/goals",
    icon: Target,
  },
  {
    title: "Progress",
    url: "/progress",
    icon: BarChart3,
  },
  {
    title: "Chat",
    url: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Study Groups",
    url: "/study-groups",
    icon: Users,
  },
  {
    title: "Achievements",
    url: "/achievements",
    icon: Trophy,
  },
  {
    title: "Insights",
    url: "/insights",
    icon: Lightbulb,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const darkLogo = "/logos/logo_dark_mode.png";
  const lightLogo = "/logos/greg_final.png";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Sidebar
      variant="floating"
      className="border-r border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
    >
      <SidebarHeader className=" ">
        <div className="flex items-center justify-center">
          <Brain className="w-16 h-16 text-[var(--color-primary)] group-hover:rotate-6 transition-transform duration-300" />
        </div>
        <div className="text-center mt-3">
          <h3 className="text-sm font-semibold text-foreground">DEV-AI</h3>
          <p className="text-xs text-muted-foreground">
            Your Personal AI Learning Companion
          </p>
        </div>
      </SidebarHeader>

      <SidebarSeparator className="mx-4 bg-border/50" />

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => {
                const isActive =
                  pathname === item.url || pathname.startsWith(`${item.url}/`);

                return (
                  <SidebarMenuItem className="relative" key={item.title}>
                    <SidebarMenuButton
                      className={cn(
                        "w-full gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                        "hover:bg-accent/50",
                        isActive
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "hover:text-foreground"
                      )}
                      asChild
                      isActive={isActive}
                    >
                      <Link href={item.url} className="flex items-center">
                        <item.icon
                          size={18}
                          className={cn(
                            "transition-all duration-200",
                            isActive ? "text-primary" : "text-muted-foreground "
                          )}
                        />
                        <span
                          className={cn(
                            "text-sm font-medium transition-colors duration-200",
                            isActive ? "text-primary" : "text-muted-foreground "
                          )}
                        >
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 pt-2">
        <Button
          variant="ghost"
          size="sm"
          className="w-full gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-destructive/10 hover:text-destructive"
          onClick={() => {}}
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
