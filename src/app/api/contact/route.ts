import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Simulate email delivery (replace with Resend, Nodemailer, etc.)
    console.log("📩 Contact form received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
