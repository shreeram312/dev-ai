import Header from "@/components/header";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Brain,
  BookOpen,
  Target,
  BarChart3,
  MessageSquare,
  Users,
  Trophy,
  Lightbulb,
  Bookmark,
  FileText,
  Zap,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex justify-end items-center gap-4 h-16">
        <Header />
      </header>

      <div className="flex flex-col min-h-screen">
        <section className="py-20 md:py-28 relative">
          <div className="absolute h-full inset-0 -z-10">
            <GridPattern />
          </div>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Your Personal AI Learning Companion
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Master system design, organize your learning resources, and
                  accelerate your growth with AI-powered personalized guidance
                </p>
              </div>

              <div className="space-x-4 cursor-pointer">
                <Link href="/dashboard">
                  <Button className="cursor-pointer">
                    Start Learning <ArrowRight className="ml-1" />
                  </Button>
                </Link>

                <Link href={"/features"}>
                  <Button className="cursor-pointer" variant="outline">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-4xl rounded-lg">
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 p-6 rounded-xl border border-blue-200/50 dark:border-blue-800/50">
                    <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 className="font-semibold text-lg mb-2">
                      AI-Powered Learning
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Personalized study plans and intelligent recommendations
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 p-6 rounded-xl border border-green-200/50 dark:border-green-800/50">
                    <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                    <h3 className="font-semibold text-lg mb-2">
                      System Design Mastery
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Comprehensive resources and practice problems
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 p-6 rounded-xl border border-purple-200/50 dark:border-purple-800/50">
                    <Bookmark className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
                    <h3 className="font-semibold text-lg mb-2">
                      Smart Organization
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Bookmark links, store documents, and track progress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Comprehensive Learning Features
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Everything you need to master system design and accelerate
                  your learning journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                    <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">AI Tutor</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Get personalized explanations, practice problems, and
                    instant feedback on your learning progress.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                    <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">System Design Courses</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Comprehensive courses covering distributed systems,
                    scalability, and architectural patterns.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                    <Bookmark className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Smart Bookmarks</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Organize and categorize your learning resources with
                    intelligent tagging and search.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                  <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900">
                    <FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold">Document Storage</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Store and organize your study materials, notes, and
                    reference documents securely.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                  <div className="p-3 rounded-full bg-red-100 dark:bg-red-900">
                    <BarChart3 className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold">Progress Tracking</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Visualize your learning journey with detailed analytics and
                    performance insights.
                  </p>
                </div>

                <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold">Study Groups</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center">
                    Collaborate with peers, share resources, and learn together
                    in focused study groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Start Your Learning Journey Today
                </h2>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of learners who are mastering system design and
                  accelerating their careers
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-8">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-200 dark:border-gray-800">
          <div className="container px-4 md:px-6 mx-auto py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-1">
                <Brain className="h-6 w-6 text-purple-600" />
                <span className="text-xl font-semibold">
                  AI Learning Companion
                </span>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your personal AI-powered learning assistant for mastering
                  system design and beyond
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
