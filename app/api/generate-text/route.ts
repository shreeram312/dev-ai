import prisma from "@/lib/providers/prisma";
import { openai } from "@ai-sdk/openai";
import { generateText, smoothStream, streamText, tool } from "ai";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    tools: {
      weather: tool({
        description: "Get the weather in a location",
        parameters: z.object({
          location: z.string().describe("The location to get the weather for"),
        }),

        execute: async ({ location }) => ({
          //   location,
          //   temperature: 32,

          ///make a api call to get the weather
          temperature: 100,
        }),
      }),

      getDataFromDatabase: tool({
        description: "Get data from database",
        parameters: z.object({}),
        execute: async () => {
          const data = await prisma.user.findMany({});
          return data;
        },
      }),
    },
    prompt,
    system:
      "You are a helpful assistant that can answer questions and help with tasks.",

    // maxSteps: 5,
    maxSteps: 2,
  });

  return result.toDataStreamResponse();
}
