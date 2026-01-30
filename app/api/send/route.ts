
import { EmailTemplate } from '@/src/components/email-templet/Email';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message }: { name: string; email: string; phone: string; message: string } = body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from:  'onboarding@resend.dev', // Use verified sender email
      to: ["myname14saif@gmail.com"],
      replyTo: email, // Use user's email as reply-to instead
      subject: `Contact Form: Message from ${name}`,
      react: EmailTemplate({ name, phone, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}