"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 w-full px-6 py-3 flex justify-between items-center transition-colors duration-300 border-b bg-[var(--color-background)] border-[var(--color-border)] shadow-sm ${
        isHomePage ? "shadow-md" : ""
      }`}
    >
      <Link href="/" className="flex items-center space-x-2 group">
        <Shield className="w-6 h-6 text-[var(--color-primary)] group-hover:rotate-6 transition-transform duration-300" />
        <span className="text-xl font-bold text-[var(--color-primary)] group-hover:opacity-90 transition-opacity">
          Expensify
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <SignedIn>
          <Link href="/receipts">
            <Button className="rounded-[var(--radius-md)] text-sm px-5 py-2 font-medium text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:bg-opacity-90 transition">
              My Receipts
            </Button>
          </Link>
          <Link href="/manage-plan">
            <Button className="rounded-[var(--radius-md)] text-sm px-5 py-2 font-medium text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:bg-opacity-90 transition">
              Manage Plan
            </Button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <SignUpButton
            mode="modal"
            signInForceRedirectUrl={
              process.env.NEXT_PUBLIC_SIGN_IN_REDIRECT_URL
            }
          >
            <Button className="rounded-[var(--radius-md)] text-sm px-5 py-2 font-medium text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:bg-opacity-90 transition">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedOut>
          <SignInButton
            signUpForceRedirectUrl={
              process.env.NEXT_PUBLIC_SIGN_UP_REDIRECT_URL
            }
            mode="modal"
          >
            <Button className="rounded-[var(--radius-md)] text-sm px-5 py-2 font-medium text-[var(--color-primary-foreground)] bg-[var(--color-primary)] hover:bg-opacity-90 transition">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
