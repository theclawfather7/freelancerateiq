import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const AUDIENCE_ID = 'b7a27db5-06b8-4574-aa25-f2793ac987f5'

export async function POST(request: Request) {
  try {
    const { email, niche, rate } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Add to Resend audience
    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    })

    // Send the welcome/rate email
    await resend.emails.send({
      from: 'FreelanceRateIQ <hello@freelancerateiq.com>',
      to: email,
      subject: `Your ${niche || 'freelance'} rate breakdown + 5 pricing mistakes to avoid`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Your Freelance Rate Breakdown</title>
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    
    <div style="text-align:center;margin-bottom:32px;">
      <span style="background:#10b981;color:white;font-size:12px;font-weight:600;padding:4px 12px;border-radius:20px;letter-spacing:0.5px;">FREELANCERATEIQ</span>
    </div>

    <h1 style="color:#f1f5f9;font-size:28px;font-weight:700;margin:0 0 16px;line-height:1.3;">
      ${rate ? `Your ${niche} rate: $${rate}/hr` : `Your ${niche || 'freelance'} rate breakdown`}
    </h1>

    <p style="color:#94a3b8;font-size:16px;line-height:1.6;margin:0 0 32px;">
      Here's the full picture — plus 5 pricing mistakes that cost freelancers $10k–$40k a year.
    </p>

    <div style="background:#1e293b;border:1px solid #334155;border-radius:12px;padding:24px;margin-bottom:24px;">
      <h2 style="color:#10b981;font-size:14px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin:0 0 16px;">
        The 5 Biggest Freelance Pricing Mistakes
      </h2>
      <div style="space-y:12px;">
        <p style="color:#cbd5e1;font-size:14px;margin:0 0 12px;padding-left:20px;position:relative;">
          <span style="position:absolute;left:0;color:#ef4444;font-weight:700;">1.</span>
          <strong style="color:#f1f5f9;">Anchoring to your salary.</strong> Your hourly rate should cover taxes (~30%), unpaid hours, benefits, and profit. A $75k salary job → $65–75/hr minimum freelance rate. Most people set it at $35.
        </p>
        <p style="color:#cbd5e1;font-size:14px;margin:0 0 12px;padding-left:20px;position:relative;">
          <span style="position:absolute;left:0;color:#ef4444;font-weight:700;">2.</span>
          <strong style="color:#f1f5f9;">Not raising rates annually.</strong> Inflation runs 3–5%/year. Every year you don't raise rates, you take a real pay cut. Annual 10–15% rate increases should be automatic.
        </p>
        <p style="color:#cbd5e1;font-size:14px;margin:0 0 12px;padding-left:20px;position:relative;">
          <span style="position:absolute;left:0;color:#ef4444;font-weight:700;">3.</span>
          <strong style="color:#f1f5f9;">Hourly pricing when you should go project-based.</strong> Hourly punishes you for getting faster. Project pricing lets you earn $200/hr for expertise that took years to build.
        </p>
        <p style="color:#cbd5e1;font-size:14px;margin:0 0 12px;padding-left:20px;position:relative;">
          <span style="position:absolute;left:0;color:#ef4444;font-weight:700;">4.</span>
          <strong style="color:#f1f5f9;">Giving a number before the client shows budget.</strong> Always ask what they have in mind first. Anchoring too low is the #1 reason freelancers underprice on discovery calls.
        </p>
        <p style="color:#cbd5e1;font-size:14px;margin:0 0 12px;padding-left:20px;position:relative;">
          <span style="position:absolute;left:0;color:#ef4444;font-weight:700;">5.</span>
          <strong style="color:#f1f5f9;">Not charging for revisions.</strong> Scope creep kills margin. 2 rounds of revisions = 40% more work. Spell it out in your contract — additional rounds at $X/hr.
        </p>
      </div>
    </div>

    <div style="background:linear-gradient(135deg,#065f46,#047857);border-radius:12px;padding:24px;margin-bottom:24px;text-align:center;">
      <h3 style="color:#white;font-size:18px;font-weight:700;margin:0 0 8px;color:#fff;">
        Want the full rate negotiation playbook?
      </h3>
      <p style="color:#a7f3d0;font-size:14px;margin:0 0 16px;line-height:1.5;">
        Rate tables for 40+ niches · Word-for-word scripts to raise rates · How to turn down low-paying clients without burning bridges
      </p>
      <a href="https://freelancerateiq.com" 
         style="display:inline-block;background:#fff;color:#065f46;font-weight:700;font-size:15px;padding:12px 28px;border-radius:8px;text-decoration:none;">
        Get the Guide — $27 →
      </a>
    </div>

    <p style="color:#475569;font-size:13px;line-height:1.6;margin:0 0 8px;">
      You subscribed because you used the FreelanceRateIQ calculator. 
      <a href="https://freelancerateiq.com" style="color:#10b981;">Visit the site</a>
    </p>
    <p style="color:#334155;font-size:12px;margin:0;">
      © 2026 FreelanceRateIQ · <a href="https://freelancerateiq.com/privacy" style="color:#475569;">Privacy</a>
    </p>
  </div>
</body>
</html>
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: error.message || 'Failed' }, { status: 500 })
  }
}
