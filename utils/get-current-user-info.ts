import prisma from "@/lib/providers/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const getOrCreateUser = async () => {
  const clerkUser = await currentUser();

  const user = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser?.id,
    },
    select: {
      id: true,
      clerkId: true,
      email: true,
      name: true,
      imageUrl: true,
    },
  });

  if (!user) {
    return await prisma.user.create({
      data: {
        clerkId: clerkUser?.id!,
        email: clerkUser?.emailAddresses[0].emailAddress!,
        name: clerkUser?.firstName!,
        surname: clerkUser?.lastName!,
        imageUrl: clerkUser?.imageUrl!,
      },
    });
  }

  return user;
};
