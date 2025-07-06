import { openaiTask } from "@/trigger/abc";
import { openai } from "@ai-sdk/openai";
import { auth, tasks } from "@trigger.dev/sdk/v3";
import { generateText, smoothStream, streamText, tool } from "ai";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  console.log(prompt, "prompt from server");

  const handle = await tasks.trigger<typeof openaiTask>(openaiTask.id, {
    prompt,
  });

  console.log("handle", handle);

  return NextResponse.json(handle);
}
