"use client";
import { Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
// import { deleteLink } from "@/app/actions/links/delete-link";

const DeleteLinkButton = ({ linkId }: { linkId: string }) => {
  const handleDeleteLink = async () => {
    // const response = await deleteLink(linkId);
    // if (response.status === "success") {
    //   toast.success(response.message);
    // } else {
    //   toast.error(response.message);
    // }
  };

  return (
    <div className="ml-auto cursor-pointer">
      <Button variant="ghost" size="icon" onClick={handleDeleteLink}>
        <Trash2 className="w-4 h-4 text-red-500 ml-auto cursor-pointer" />
      </Button>
    </div>
  );
};

export default DeleteLinkButton;
