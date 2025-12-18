import nodemailer from 'nodemailer';

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    
    const { name, email, projectType, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create transporter using environment variables from Cloudflare
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: env.EMAIL_USER,
      replyTo: email,
      to: 'apdirahiimipraahim@gmail.com',
      subject: `Portfolio Contact: ${projectType || 'General Inquiry'} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Project Type: ${projectType || 'Not specified'}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
