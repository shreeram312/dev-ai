import prisma from "@/lib/providers/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

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
