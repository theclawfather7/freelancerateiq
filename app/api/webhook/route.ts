import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    const customerEmail = session.customer_details?.email || session.customer_email;
    const sessionId = session.id;

    if (customerEmail) {
      try {
        const downloadLink = `https://freelancerateiq.com/guide?session_id=${sessionId}`;

        await resend.emails.send({
          from: 'FreelanceRateIQ <onboarding@resend.dev>',
          to: customerEmail,
          subject: 'Your FreelanceRateIQ Guide is ready! 📄',
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
              </head>
              <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f172a; color: #e2e8f0; margin: 0; padding: 0;">
                <div style="max-width: 560px; margin: 0 auto; padding: 40px 24px;">
                  
                  <div style="text-align: center; margin-bottom: 32px;">
                    <span style="font-size: 48px;">📄</span>
                    <h1 style="color: #f8fafc; font-size: 24px; margin: 16px 0 8px;">Your Guide is Ready</h1>
                    <p style="color: #94a3b8; margin: 0;">FreelanceRateIQ Rate Strategy Guide</p>
                  </div>

                  <p style="color: #cbd5e1; line-height: 1.6;">Hey!</p>
                  <p style="color: #cbd5e1; line-height: 1.6;">
                    Your purchase is confirmed. Here's your instant access link to the 
                    <strong style="color: #f8fafc;">FreelanceRateIQ Rate Strategy Guide</strong>:
                  </p>

                  <div style="text-align: center; margin: 32px 0;">
                    <a href="${downloadLink}" 
                       style="background: #10b981; color: white; text-decoration: none; font-weight: 700; 
                              padding: 16px 32px; border-radius: 8px; display: inline-block; font-size: 16px;">
                      📄 Open Your Guide →
                    </a>
                  </div>

                  <div style="background: #1e293b; border-radius: 8px; padding: 16px; margin: 24px 0;">
                    <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Inside your guide:</p>
                    <ul style="color: #94a3b8; font-size: 14px; margin: 0; padding-left: 20px; line-height: 1.8;">
                      <li>Rate tables for 15+ niches with percentile breakdowns</li>
                      <li>Word-for-word scripts to raise rates with existing clients</li>
                      <li>How to position as premium vs just expensive</li>
                      <li>Negotiation tactics that actually work</li>
                      <li>When and how to say no to low-paying clients</li>
                    </ul>
                  </div>

                  <p style="color: #64748b; font-size: 13px; line-height: 1.6;">
                    <strong style="color: #94a3b8;">Tip:</strong> Open the link and use your browser's 
                    "Print → Save as PDF" to save it permanently to your computer.
                  </p>

                  <hr style="border: none; border-top: 1px solid #1e293b; margin: 32px 0;" />

                  <p style="color: #475569; font-size: 12px; text-align: center;">
                    FreelanceRateIQ · Questions? Reply to this email.<br />
                    <a href="https://freelancerateiq.com" style="color: #10b981;">freelancerateiq.com</a>
                  </p>
                </div>
              </body>
            </html>
          `,
        });

        console.log(`Fulfillment email sent to ${customerEmail} for session ${sessionId}`);
      } catch (emailError) {
        console.error('Failed to send fulfillment email:', emailError);
        // Don't return error — Stripe needs a 200 or it'll retry
      }
    } else {
      console.warn(`No email found for session ${sessionId}`);
    }
  }

  return NextResponse.json({ received: true });
}
