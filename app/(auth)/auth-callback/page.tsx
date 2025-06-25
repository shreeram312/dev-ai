import prisma from "@/lib/providers/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Client } from "@upstash/qstash";

const qstashClient = new Client({
  // Add your token to a .env file
  token: process.env.QSTASH_TOKEN!,
});

const AuthCallbackPage = async () => {
  const user = await currentUser();

  if (!user?.id || !user?.primaryEmailAddress?.emailAddress) {
    return redirect("/sign-in");
  }

  const dbUser = await prisma.user.findFirst({
    where: {
      clerkId: user.id,
    },
  });

  if (!dbUser) {
    // Create new user in database
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.primaryEmailAddress.emailAddress,
        name: user.firstName ?? "",
        surname: user.lastName ?? "",
        imageUrl: user.imageUrl,
      },
    });

    //Send email to user via qstash and resend
    await qstashClient.publishJSON({
      url: `${process.env.NEXT_PUBLIC_APP_URL}/api/emails/dequeue`,
      body: {
        email: user.primaryEmailAddress.emailAddress,
        subject: "Welcome to Dev-AI",
        body: `<h1>Welcome to Dev-Excalidraw!</h1>
        <p>Hi ${user.firstName || "there"},</p>
        <p>Thank you for signing up! You can now start Exploring Dev-AI.</p>
        <p>You can start creating your first  drawing by clicking the button below.</p>
        <p>You can also start exploring the other features of Dev-AI by clicking the button below.</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" class="bg-blue-500 text-white px-4 py-2 rounded-md">Explore Dev-AI</a>
        <p>Best regards,<br>The Dev-AI Team-Shreeram</p>`,
      },
    });

    // console.log("Qstash message published");
  } else {
    // Update existing user information
    await prisma.user.update({
      where: { clerkId: user.id },
      data: {
        email: user.primaryEmailAddress.emailAddress,
        name: user.firstName ?? dbUser.name,
        surname: user.lastName ?? dbUser.surname,
        imageUrl: user.imageUrl,
      },
    });
  }

  // Always redirect to dashboard after successful authentication
  return redirect("/dashboard");
};

export default AuthCallbackPage;
