import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Search, Shield, Upload } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 md:py-28 relative">
        <div className="absolute h-full inset-0 -z-10">
          <GridPattern />
        </div>
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Intelligent Receipt Scanning
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Scan, analyze and organize your receipts with AI powered
                precision. Save time and gain insights from your expenses
              </p>
            </div>

            <div className="space-x-4 cursor-pointer">
              <Link href="/receipts">
                <Button className="cursor-pointer">
                  Get Started <ArrowRight className="ml-1" />
                </Button>
              </Link>

              <Link href={"/features"}>
                <Button className="cursor-pointer" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-3xl rounded-lg">
            <div className="p-6 md:p-8">{/* <PDFDropzone /> */}</div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Powerful Features
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our AI-powered platform transforms how you handle receipts and
                track expenses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Upload className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Easy Uploads</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Drag and drop your PDF receipts for instance scanning and
                  processing.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                  <Search className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold">AI Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Automatically extract and categorize expense data with
                  intelligent AI
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                  <Search className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Expense Insights</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Generate reports and gain valuable insights from your spending
                  patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Sample Pricing
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Choose the plan that works best for you
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="flex flex-col p-6 border border-gray-700 rounded-lg shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Free</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Free tier for all to try
                </p>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-bold">$0.00</p>
                <p className="text-gray-500 dark:text-gray-400">/month</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>2 Scans per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>Basic Data Extraction</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>7-day history</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href={"/manage-plan"}>
                  <Button className="w-full" variant={"outline"}>
                    Sign Up Free
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col p-6 border border-gray-700 rounded-lg shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Starter</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A taste of expensing with AI!
                </p>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-bold">$4.99</p>
                <p className="text-gray-500 dark:text-gray-400">/month</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>50 Scans per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>Enhanced Data Extraction</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>30-day history</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href={"/manage-plan"}>
                  <Button className="w-full" variant={"outline"}>
                    Choose Plan
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col p-6 border border-gray-700 rounded-xl shadow-md relative">
              <div className="absolute -top-3 right-4 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Pro features for the pro user
                </p>
              </div>
              <div className="mt-4">
                <p className="text-4xl font-bold">$9.99</p>
                <p className="text-gray-500 dark:text-gray-400">/month</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>300 Scans per month</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>Advanced AI Data Extraction</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>AI Summaries</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>Expense categories & tags</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>Advanced export options</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-5 w-5 mr-2" />
                  <span>Unlimited history</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href={"/manage-plan"}>
                  <Button className="w-full ">Choose Plan</Button>
                </Link>
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
                Start Scanning Today
              </h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Join thousands of users who save and gain insights from their
                receipts
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6 mx-auto py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-semibold">Expensio</span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Expensio. The starter way to track your money
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
