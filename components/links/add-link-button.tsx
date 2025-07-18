"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
// import { saveLink } from "@/app/actions/links/save-link";
import { toast } from "sonner";

const AddLinkButton = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddLink = async () => {
    if (!url.trim()) {
      toast.error("Please enter a valid URL.");
      return;
    }

    try {
      setLoading(true);
      // const link = await saveLink(url.trim());

      // if (link.status === "success") {
      //   toast.success(link.message);
      //   setUrl("");
      // } else {
      //   toast.error(link.message);
      // }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Input
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="h-12 flex-1"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter" && !loading) {
            handleAddLink();
          }
        }}
      />
      <Button onClick={handleAddLink} disabled={loading} className="h-12">
        {loading ? "Adding..." : "Add"}
      </Button>
    </div>
  );
};

export default AddLinkButton;
