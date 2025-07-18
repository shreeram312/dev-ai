import SignUpForm from "@/components/auth/signup-form";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="flex min-h-svh w-full">
      {/* Left side - Big Image */}
      <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:bg-muted/50">
        <div className="flex flex-col  ">
          <div className="relative w-full h-screen ">
            <Image
              src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"
              alt="Receipt Tracker"
              width={2000}
              height={2000}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="lg:hidden w-full h-screen bg-muted/50" />
      {/* Right side - Sign Up Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
