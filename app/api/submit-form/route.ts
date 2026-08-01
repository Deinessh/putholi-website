import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract text fields
    const data: Record<string, string> = {};
    const attachments: any[] = [];
    
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        if (value.size > 0) {
          const buffer = Buffer.from(await value.arrayBuffer());
          attachments.push({
            filename: value.name,
            content: buffer,
            contentType: value.type,
          });
        }
      } else {
        data[key] = value as string;
      }
    }

    const emailHtml = `
      <h2>New Membership Registration</h2>
      <p>A new membership form has been submitted. Details are below:</p>
      <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; max-width: 600px;">
        ${Object.entries(data).map(([k, v]) => `
          <tr>
            <td style="background-color: #f8fafc; font-weight: bold;">${k}</td>
            <td>${v}</td>
          </tr>
        `).join('')}
      </table>
      <p>Please find the uploaded photo, ID proof, and payment receipt (if provided) attached to this email.</p>
    `;

    // Try to send email via SMTP if credentials are provided in Env
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.SMTP_FROM || 'noreply@putholi.org';
    
    // The recipient is the user's email ID as requested
    const toEmail = data.email;

    if (smtpHost && smtpUser && smtpPass && toEmail) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Putholi Empowerment Society" <${fromEmail}>`,
        to: toEmail,
        subject: 'Copy of your Putholi Membership Registration',
        html: emailHtml,
        attachments,
      });
      
      console.log(`Email sent successfully to ${toEmail}`);
    } else {
      console.log('--- MOCK EMAIL SENT (SMTP Credentials not configured) ---');
      console.log(`To: ${toEmail}`);
      console.log(`Data:`, data);
      console.log(`Attachments: ${attachments.length} files attached.`);
      console.log('-------------------------------------------------------');
      
      if (!toEmail) {
        throw new Error('Email address is missing from the form data.');
      }
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error: any) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ error: error.message || 'Failed to submit form' }, { status: 500 });
  }
}
