import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { Resend } from "resend";

export const POST = verifySignatureAppRouter(async (req: Request) => {
  const payload = await req.json();
  const { email, subject, body } = payload as {
    email: string;
    subject: string;
    body: string;
  };
  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log("dequeueing email", email, subject, body);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: subject,
    html: body,
  });

  return new Response(`Email with id "${email}" processed successfully.`);
});
