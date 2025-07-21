import { Client } from "@upstash/qstash";

// You need to run this and set credentials at your .env: npx @upstash/qstash-cli dev
// In development, use the QStash CLI dev server
// In production, use the configured QStash service
const qstashConfig = {
  token: process.env.QSTASH_TOKEN!,
  // this was the fix, don't use QSTASH_URL locally
  baseUrl:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8080"
      : process.env.QSTASH_URL,
};

export const qstashClient = new Client(qstashConfig);
