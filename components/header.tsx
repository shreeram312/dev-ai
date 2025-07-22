import { Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { authClient } from "@/lib/auth-client";

async function Header() {
  const { data: session } = await authClient.getSession();

  return (
    <div>
      <div className="sticky top-0 z-50 w-full flex justify-center px-2 sm:px-4 py-2 sm:py-3">
        <header className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex justify-between items-center transition-colors duration-300 border bg-[var(--color-background)] border-[var(--color-border)] shadow-lg rounded-xl sm:rounded-2xl backdrop-blur-sm bg-opacity-95">
          <Link
            href="/"
            className="flex items-center space-x-1 sm:space-x-2 group"
          >
            <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)] group-hover:rotate-6 transition-transform duration-300" />
            <span className="text-lg sm:text-xl font-bold text-[var(--color-primary)] group-hover:opacity-90 transition-opacity">
              DEV-AI
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            {/* 
          {pathname === "/" ? (
            <Link href="/dashboard">
              <Button className="rounded-[var(--radius-md)] text-sm px-5 py-2 font-medium text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:bg-opacity-90 transition">
                Dashboard
              </Button>
            </Link>
          ) : (
            <div></div>
          )} */}

            {session && session.user ? (
              <Link href="/dashboard">
                <Button className="rounded-[var(--radius-md)] text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 font-medium text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:bg-opacity-90 transition">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link href="/sign-in">
                <Button className="rounded-[var(--radius-md)] text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 font-medium text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:bg-opacity-90 transition">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
