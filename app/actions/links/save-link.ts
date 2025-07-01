"use server";

import prisma from "@/lib/providers/prisma";
import { getOrCreateUser } from "@/utils/get-current-user-info";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

type SaveLinkResult = {
  status: "success" | "error";
  message: string;
  userinfo?: any;
};

export const saveLink = async (url: string): Promise<SaveLinkResult> => {
  try {
    const currentUserInfo = await getOrCreateUser();

    if (!currentUserInfo) {
      return {
        status: "error",
        message: "User not found",
      };
    }

    const link = await prisma.links.create({
      data: {
        url,
        userId: currentUserInfo.id,
      },
    });

    revalidatePath("/links");

    return {
      status: "success",
      message: "Link saved successfully",
      userinfo: currentUserInfo,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Failed to save link",
    };
  }
};
