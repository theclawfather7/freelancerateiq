import { redirect } from 'next/navigation'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover' as any,
})

async function sendDeliveryEmail(email: string) {
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'FreelanceRateIQ <hello@freelancerateiq.com>',
      to: email,
      subject: 'Your FreelanceRateIQ Guide is here 🎉',
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px; background: #0f172a; color: #e2e8f0;">
          <h1 style="color: #10b981; margin-bottom: 8px;">Your guide is ready!</h1>
          <p style="color: #94a3b8;">Thanks for buying the FreelanceRateIQ Guide. Time to charge what you're actually worth.</p>
          <div style="margin: 32px 0;">
            <a href="https://freelancerateiq.com/downloads/freelancerateiq-guide.pdf" 
               style="background: #10b981; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; display: inline-block; font-weight: 600;">
              Download Your Guide (PDF) →
            </a>
          </div>
          <p style="color: #64748b; font-size: 13px;">The link works forever — save it or download the PDF now. Questions? Reply to this email.</p>
        </div>
      `,
    }),
  })
}

export default async function Success({ searchParams }: { searchParams: { session_id?: string } }) {
  const sessionId = searchParams.session_id

  if (sessionId) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      if (session.payment_status === 'paid') {
        const email = session.customer_email || session.customer_details?.email
        if (email) {
          await sendDeliveryEmail(email)
        }
      }
    } catch (e) {
      // silently continue — still show success page
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">You're all set!</h1>
        <p className="text-slate-400 mb-6">
          Your FreelanceRateIQ Guide is on its way to your inbox. Check your email — it usually arrives within a minute.
        </p>
        <a href="/downloads/freelancerateiq-guide.pdf" 
           className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block mb-4">
          Download Now →
        </a>
        <p className="text-slate-500 text-sm">
          Didn't get the email? Check spam, or just use the download link above.
        </p>
      </div>
    </main>
  )
}
