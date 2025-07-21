"use client";

import { Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { authClient } from "@/lib/auth-client";

function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { data: session } = authClient.useSession();

  return (
    <header
      className={`sticky   top-0 z-50 w-full px-6 py-3 flex justify-between items-center transition-colors duration-300  border-b bg-[var(--color-background)] border-[var(--color-border)] shadow-sm ${
        isHomePage ? "shadow-md" : ""
      }`}
    >
      <Link href="/" className="flex items-center space-x-2 group">
        <Brain className="w-6 h-6 text-[var(--color-primary)] group-hover:rotate-6 transition-transform duration-300" />
        <span className="text-xl font-bold text-[var(--color-primary)] group-hover:opacity-90 transition-opacity">
          DEV-AI
        </span>
      </Link>

      <div className="flex items-center gap-4">
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
            <Button className="rounded-[var(--radius-md)] text-sm px-5 py-2 font-medium text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:bg-opacity-90 transition">
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/sign-in">
            <Button className="rounded-[var(--radius-md)] text-sm px-5 py-2 font-medium text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:bg-opacity-90 transition">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
