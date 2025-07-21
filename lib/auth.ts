import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/lib/generated/prisma";
import { createAuthMiddleware } from "better-auth/api";
import { qstashClient } from "./providers/qstash-client";

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      mapProfileToUser: async (profile) => {
        return {
          email: profile.email,
          firstName: profile.given_name,
          lastName: profile.family_name,
          image: profile.picture,
        };
      },
    },
  },
  rateLimit: {
    window: 60, // time window in seconds
    max: 10,
  },

  databaseHooks: {
    user: {
      create: {
        before: async (user, context) => {
          return { data: user };
        },
        after: async (user, context) => {
          console.log("Database hook triggered for user:", user.email);

          try {
            await qstashClient.publishJSON({
              url: `${process.env.NEXT_PUBLIC_APP_URL}/api/emails/dequeue`,
              body: {
                email: user.email,
                subject: "Welcome to Dev-AI",
                body: `<h1>Welcome to Dev-AI</h1>
                <p>Hi ${user.email || "there"},</p>
                <p>Thank you for signing up! You can now start Exploring Dev-AI.</p>
                <p>You can start creating your first  drawing by clicking the button below.</p>
                <p>You can also start exploring the other features of Dev-AI by clicking the button below.</p>
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" class="bg-blue-500 text-white px-4 py-2 rounded-md">Explore Dev-AI</a>
                <p>Best regards,<br>The Dev-AI Team-Shreeram</p>`,
              },
            });
            console.log("Email queued successfully for:", user.email);
          } catch (error) {
            console.error("Error queuing email:", error);
          }
        },
      },
    },
  },
});
