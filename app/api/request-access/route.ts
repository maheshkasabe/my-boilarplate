import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      debug: true
    });

    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { message: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Format interests for better readability in email
    let interests = 'None selected';
    if (formData.interests && formData.interests.length > 0) {
      interests = formData.interests.join(', ');
    }

    let info = await transporter.sendMail({
      from: `"Diligent Insight Access Request" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || "nigel@diligentinsight.co.uk",
      subject: `Access Request: ${formData.first_name} ${formData.last_name} from ${formData.company}`,
      text: `Name: ${formData.first_name} ${formData.last_name}
Email: ${formData.email}
Company: ${formData.company}
Job Title: ${formData.job_title || 'Not provided'}
Company Size: ${formData.company_size || 'Not provided'}
Interests: ${interests}
Additional Information: ${formData.message || 'No additional information provided'}`,
      html: `
        <h1>New Access Request</h1>
        <p><strong>Name:</strong> ${formData.first_name} ${formData.last_name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Job Title:</strong> ${formData.job_title || 'Not provided'}</p>
        <p><strong>Company Size:</strong> ${formData.company_size || 'Not provided'}</p>
        <p><strong>Interests:</strong> ${interests}</p>
        <p><strong>Additional Information:</strong></p>
        <p>${formData.message || 'No additional information provided'}</p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ success: true, message: 'Access request submitted successfully' });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to submit access request', 
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      },
      { status: 500 }
    );
  }
} 