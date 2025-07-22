import Header from "@/components/header";
import LightRays from "@/components/react-bits/LightRays/LightRays";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CustomLightRays from "@/components/custom-light-rays";

export default async function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* LightRays component as background */}
      <div>
        <CustomLightRays />
      </div>

      {/* Header (z-index 20 to be above LightRays) */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Hero Section Content (centered and responsive) */}
      <div className="flex-1 flex items-center justify-center relative z-20 px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full text-center space-y-6">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-foreground drop-shadow-lg">
            Your <span className="text-primary">AI-Powered</span> Developer
            Companion
          </h1>

          {/* Sub-headline/Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-serif max-w-2xl mx-auto leading-relaxed">
            Boost your productivity, get instant coding help, and streamline
            your workflow with intelligent assistance.
          </p>

          {/* Call to Action Button */}
          <Link href="/sign-up" passHref className="inline-block">
            <Button className="mt-6 px-10 py-4 text-lg sm:text-xl font-semibold  bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition transform hover:-translate-y-1 rounded-[var(--radius-md)]">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
