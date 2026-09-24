import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['joshdvisser@gmail.com'],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h3>New contact message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    return Response.json({ success: false }, { status: 500 })
  }
}

