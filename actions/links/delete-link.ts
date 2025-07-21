// "use server";

// import prisma from "@/lib/providers/prisma";
// import { getOrCreateUser } from "@/utils/get-current-user-info";
// import { revalidatePath } from "next/cache";

// type DeleteLinkResult = {
//   status: "success" | "error";
//   message: string;
// };

// export const deleteLink = async (linkId: string): Promise<DeleteLinkResult> => {
//   try {
//     const currentUserInfo = await getOrCreateUser();
//     if (!currentUserInfo) {
//       return { status: "error", message: "User not found" };
//     }
//     const link = await prisma.links.delete({
//       where: { id: linkId, userId: currentUserInfo.id },
//     });
//     revalidatePath("/links");
//     return { status: "success", message: "Link deleted successfully" };
//   } catch (error) {
//     return { status: "error", message: "Failed to delete link" };
//   }
// };
