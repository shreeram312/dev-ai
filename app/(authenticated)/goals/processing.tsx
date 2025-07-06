"use client";
import { openaiTask } from "@/trigger/abc";
import { useRealtimeRun, useRun } from "@trigger.dev/react-hooks";
import React from "react";

const ProcessingContent = ({
  runId,
  publicAccessToken,
}: {
  runId: string;
  publicAccessToken: string;
}) => {
  const { run, error } = useRealtimeRun<typeof openaiTask>(runId, {
    accessToken: publicAccessToken,
  });

  console.log(run, "run isssssssssssssss");
  if (!run && !error) {
    return (
      <div className="min-h-screen p-8 grid place-items-center">
        <div className="">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 grid place-items-center">
        <div className="text-rose-500">Error: {error.message}</div>
      </div>
    );
  }

  if (!run) {
    return (
      <div className="min-h-screen p-8 grid place-items-center">
        <div className="text-gray-900">No run data available</div>
      </div>
    );
  }
  return (
    <div>
      <div>
        {run.status === "QUEUED" && <div>Queued</div>}

        {run.status === "COMPLETED" && <div>{run.output?.text}</div>}
      </div>
    </div>
  );
};

export default ProcessingContent;
