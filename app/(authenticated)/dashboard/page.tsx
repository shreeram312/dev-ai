import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/providers/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Receipt, Settings, Plus } from "lucide-react";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return redirect("/");
  }

  // Get user data from database
  const dbUser = await prisma.user.findFirst({
    where: {
      clerkId: user.id,
    },
  });

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-foreground)] mb-2">
            Welcome back, {dbUser?.name || user.firstName || "User"}!
          </h1>
          <p className="text-[var(--color-muted-foreground)]">
            Manage your receipts and track your expenses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Link href="/receipts">
                <Button className="w-full justify-start" variant="outline">
                  <Receipt className="w-4 h-4 mr-2" />
                  View Receipts
                </Button>
              </Link>
              <Link href="/receipts/upload">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Receipt
                </Button>
              </Link>
              <Link href="/manage-plan">
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Manage Plan
                </Button>
              </Link>
            </div>
          </div>

          {/* User Info */}
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-4">
              Account Information
            </h2>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-[var(--color-muted-foreground)]">
                  Name:
                </span>
                <span className="ml-2 text-[var(--color-foreground)]">
                  {dbUser?.name} {dbUser?.surname}
                </span>
              </div>
              <div>
                <span className="text-[var(--color-muted-foreground)]">
                  Email:
                </span>
                <span className="ml-2 text-[var(--color-foreground)]">
                  {dbUser?.email}
                </span>
              </div>
              <div>
                <span className="text-[var(--color-muted-foreground)]">
                  Member since:
                </span>
                <span className="ml-2 text-[var(--color-foreground)]">
                  {dbUser?.createdAt
                    ? new Date(dbUser.createdAt).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-4">
              Statistics
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">
                  Total Receipts:
                </span>
                <span className="text-[var(--color-foreground)] font-medium">
                  0
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">
                  This Month:
                </span>
                <span className="text-[var(--color-foreground)] font-medium">
                  0
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-muted-foreground)]">
                  Total Spent:
                </span>
                <span className="text-[var(--color-foreground)] font-medium">
                  $0.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
