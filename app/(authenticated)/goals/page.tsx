"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TriggerProvider } from "@/lib/providers/trigger";
// import { openaiTask } from "@/trigger/abc";
import { useChat } from "@ai-sdk/react";
import { useRealtimeRun } from "@trigger.dev/react-hooks";
import React, { useState } from "react";
import ProcessingContent from "./processing";

const page = () => {
  const [input, setInput] = useState("");
  const [apiResponse, setApiResponse] = useState<{
    id: string;
    publicAccessToken: string;
  } | null>(null);
  const [runId, setRunId] = useState("");

  const { messages, handleSubmit } = useChat({
    api: "/api/generate-text",
    body: {
      prompt: input,
    },

    onResponse: async (response) => {
      const data = await response.json();
      setApiResponse(data);
      setRunId(data.id);
    },
  });

  const handleGenerateText = async () => {
    if (!input.trim()) return;

    try {
      await handleSubmit(
        { preventDefault: () => {} },
        { allowEmptySubmit: true }
      );
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your prompt..."
        />
        <Button onClick={handleGenerateText}>Submit</Button>
      </div>

      {apiResponse && (
        <TriggerProvider accessToken={apiResponse.publicAccessToken}>
          <ProcessingContent
            runId={runId}
            publicAccessToken={apiResponse.publicAccessToken}
          />
        </TriggerProvider>
      )}
    </div>
  );
};

export default page;
