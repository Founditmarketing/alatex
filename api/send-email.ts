import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, propertyType, painPoint, squareFootage, timeline } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !company) {
      return res.status(400).json({ error: 'Missing required fields: name, email, phone, and company are required.' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    const { data, error } = await resend.emails.send({
      from: 'AlaTex Landscaping <hello@alatexlandscaping.com>',
      to: ['Bryan@alatexlandscaping.com'],
      replyTo: email,
      subject: `New Project Inquiry from ${name} — ${propertyType || 'General'}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; border-radius: 16px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background-color: #111827; padding: 32px 24px; text-align: center;">
            <h1 style="color: #4ade80; font-size: 24px; margin: 0; letter-spacing: -0.5px;">🌿 New Project Inquiry</h1>
            <p style="color: #9ca3af; font-size: 14px; margin-top: 8px;">Submitted via AlaTex Landscaping Website</p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 24px;">
            
            <!-- Contact Info -->
            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
              <h2 style="color: #111827; font-size: 16px; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 600; width: 140px;">Name</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Email</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Phone</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Company / Property</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">${company}</td>
                </tr>
              </table>
            </div>

            <!-- Project Details -->
            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px;">
              <h2 style="color: #111827; font-size: 16px; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Project Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 600; width: 140px;">Property Type</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">${propertyType || 'Not specified'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Primary Need</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">${painPoint || 'Not specified'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Area Size</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">${squareFootage || 'Not specified'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-size: 14px; font-weight: 600;">Timeline</td>
                  <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">${timeline || 'Not specified'}</td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f3f4f6; padding: 20px 24px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">You can reply directly to this email to respond to <strong>${name}</strong>.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
  }
}
