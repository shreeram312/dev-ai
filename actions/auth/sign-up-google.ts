import { authClient } from "@/lib/auth-client";

export const signInWithGoogle = async () => {
  console.log("🚀 Starting Google OAuth flow...");
  try {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
    console.log("✅ Google OAuth completed:", data);
  } catch (error) {
    console.error("❌ Google OAuth error:", error);
  }
};
