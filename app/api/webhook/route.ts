import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover' as any,
})

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const email = session.customer_email || session.customer_details?.email

    if (email) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'FreelanceRateIQ <guide@freelancerateiq.com>',
          to: email,
          subject: 'Your FreelanceRateIQ Guide is here 🎉',
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #10b981;">Your guide is ready!</h1>
              <p>Thanks for purchasing the FreelanceRateIQ Guide. You're about to know exactly what to charge — and how to get clients to pay it.</p>
              <p>
                <a href="https://freelancerateiq.com/downloads/freelancerateiq-guide.pdf" 
                   style="background: #10b981; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin: 20px 0;">
                  Download Your Guide →
                </a>
              </p>
              <p style="color: #666; font-size: 14px;">The download link will work forever — bookmark it or download the PDF now.</p>
              <p style="color: #666; font-size: 14px;">Questions? Reply to this email.</p>
            </div>
          `,
        }),
      })
    }
  }

  return NextResponse.json({ received: true })
}
