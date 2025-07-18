import { AppSidebar } from "@/components/app-sidebar";
import CustomTrigger from "@/components/dashboard/custom-trigger";
import { ThemeToggle } from "@/components/theme-toggle";

import { SidebarProvider } from "@/components/ui/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <header className="flex h-16 shrink-0 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6 shadow-sm">
          <div className="flex flex-1 items-center gap-4">
            <CustomTrigger />

            <div className="sm:ml-auto  ml-auto -mx-2">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="bg-gradient-to-b from-green-50/50 to-transparent dark:from-green-950/20 dark:to-transparent h-2" />

        {children}
      </main>
    </SidebarProvider>
  );
}
