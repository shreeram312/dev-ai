import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/providers/prisma";
import { getOrCreateUser } from "@/utils/get-current-user-info";
import { Link2, Trash2 } from "lucide-react";
import AddLinkButton from "@/components/links/add-link-button";
import Link from "next/link";
import DeleteLinkButton from "@/components/links/delete-link-button";

const Links = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const currentUserInfo = await getOrCreateUser();

  const links = await prisma.links.findMany({
    where: {
      userId: currentUserInfo?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex flex-col gap-6 p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold">Your Links</h1>
      <AddLinkButton />
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <div
            key={link.id}
            className="flex items-center gap-3 border p-3 rounded-md shadow-sm hover:shadow-md transition"
          >
            <Link2 className="w-4 h-4 text-blue-500" />
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 underline truncate max-w-xs"
            >
              {link.url}
            </Link>
            <DeleteLinkButton linkId={link.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
