import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type GuidePage = {
  name: string
  emoji: string
  badge: string
  title: string
  description: string
  keywords: string[]
  intro: string
  sections: { heading: string; body: string }[]
  keyTakeaways: string[]
  actionItems: string[]
  faq: { q: string; a: string }[]
  relatedTopics: string[]
}

const guides: Record<string, GuidePage> = {
  'how-to-set-freelance-rates': {
    name: 'How to Set Your Freelance Rates',
    emoji: '🎯',
    badge: 'Start Here',
    title: 'How to Set Freelance Rates | The Complete 2026 Guide | FreelanceRateIQ',
    description: 'How to set your freelance rates from scratch. Calculate your minimum viable rate, research market rates, factor in experience — and stop guessing what to charge.',
    keywords: ['how to set freelance rates', 'how to price freelance work', 'freelance rate calculator guide', 'what to charge freelancing', 'freelance rate formula', 'how to calculate freelance hourly rate'],
    intro: 'Setting your freelance rate for the first time — or resetting it after years of undercharging — is one of the most consequential decisions you\'ll make as a freelancer. Most people do it wrong: they either guess ("seems like $50/hour feels right"), anchor too low out of fear, or copy what they see others charging without understanding the context. This guide walks you through the actual math and frameworks for setting a rate that\'s sustainable, competitive, and worth defending.',
    sections: [
      {
        heading: 'The three inputs to any freelance rate',
        body: 'Every freelance rate has three components:\n\n1. Your floor (minimum viable rate): The rate below which you literally lose money. This is not negotiable — it\'s math.\n\n2. Your market rate: What clients in your niche, at your experience level, in your geography, are actually paying.\n\n3. Your target (aspirational rate): What you need to earn to hit your income goals.\n\nThe mistake most freelancers make is setting their rate based on only one of these inputs — usually either copying a market rate without calculating their floor, or calculating only their floor without checking whether the market supports it.',
      },
      {
        heading: 'Step 1: Calculate your minimum viable rate (floor)',
        body: 'Start with the math. Your minimum viable rate (MVR) is the hourly rate below which working makes no financial sense.\n\nFormula:\nMVR = (Annual expenses + Annual taxes + Annual benefits buffer) ÷ Billable hours\n\nAnnual expenses: Everything you need to pay to live and operate your business. Rent, food, utilities, software, equipment, health insurance, professional development — add it all up.\n\nAnnual taxes: Freelancers pay self-employment tax (15.3% for the first $160K) plus income tax. A conservative estimate: multiply your target income by 30% and set that aside.\n\nAnnual benefits buffer: No employer 401k match, no paid vacation, no sick days. Budget for these explicitly. 3 weeks vacation + 5 sick days = 4 weeks = roughly 8% of your working time you need to account for.\n\nBillable hours: This is where most freelancers go wrong. You do not work 40 billable hours per week. Realistically: 40 hours total - 10-15 hours admin/sales/marketing = 25-30 billable hours per week. Times 48 weeks (accounting for time off): 1,200–1,440 billable hours per year.\n\nExample:\n- Annual living expenses: $60,000\n- Annual taxes (30%): $18,000\n- Benefits buffer (vacation, sick, retirement): $6,000\n- Total needed: $84,000\n- Billable hours (25/week × 48 weeks): 1,200\n- MVR = $84,000 ÷ 1,200 = $70/hour\n\nIf you charge less than $70/hour in this example, you\'re working at a loss in real terms.',
      },
      {
        heading: 'Step 2: Research your market rate',
        body: 'Your floor tells you what you need. Market research tells you what\'s possible.\n\nSources for market rate data:\n- FreelanceRateIQ calculator (your niche, experience, city combination)\n- LinkedIn Salary tool (imperfect for freelancers but useful for anchoring)\n- Industry surveys: Freelancers Union annual survey, Salary.com, Glassdoor for equivalent FTE salaries\n- The FTE-to-freelance conversion: Take the equivalent full-time salary, add 30% (for taxes + no benefits), divide by 2,080 hours, multiply by 1.5-2x (for lower volume, business costs, and time value of flexibility)\n- Direct research: Look at freelancer profiles in your niche on Upwork, Toptal, Contra. Check what experienced freelancers advertise.\n\nFor context on what "market rate" means:\n- Entry-level (0-2 yrs): typically the lower quartile of published rates\n- Mid-level (3-6 yrs): median\n- Senior (7+ yrs): upper quartile\n- Expert/niche specialist: top decile or set by value',
      },
      {
        heading: 'Step 3: Reconcile floor vs. market',
        body: 'Now you have two numbers: your MVR (what you need) and your market rate range (what clients pay).\n\nScenario A: Your MVR is below the market median. Good position — you have room to price above your floor while remaining competitive. Set your rate at the market median or above, not at your MVR.\n\nScenario B: Your MVR is at or above the market median. This happens to freelancers in low-cost-of-living areas in high-cost fields (or vice versa), or to people early in their career who have high fixed expenses. Options: reduce expenses, increase specialization to command premium rates, or explicitly plan to target higher-budget clients rather than competing on the median.\n\nScenario C: Your MVR is above the top quartile of market rates. You\'re either in an underpaying market (consider remote work for higher-budget geographies) or your expenses need adjustment.',
      },
      {
        heading: 'Step 4: Set your published rate',
        body: 'Your published rate — the number you quote to clients — should not be your MVR. It should be your target rate: what you want to earn if you had a reasonable volume of good work.\n\nA common framing:\n- MVR: the floor you won\'t go below in negotiation\n- Published rate: your standard rate, above MVR\n- Aspirational rate: what you\'d charge your ideal clients at full market value\n\nStart at or above the market median for your niche and experience. Do not start at your floor — that leaves no negotiation room and signals low value.\n\nPublish your rate or be prepared to state it confidently when asked. Freelancers who say "it depends" without a starting number lose deals to freelancers who quote confidently.',
      },
    ],
    keyTakeaways: [
      'Never set your rate without first calculating your minimum viable rate — the math that tells you your actual floor',
      'The billable hours mistake: you work 25-30 billable hours per week, not 40 — account for this in your calculation',
      'Market rate research (not just your floor) is required — knowing what clients pay is as important as knowing your costs',
      'Your published rate should be at or above the market median for your experience level — not at your floor',
      'Floor ≠ rate. Your floor is your negotiation minimum. Your rate is what you want to earn.',
    ],
    actionItems: [
      'Complete the minimum viable rate formula with your actual annual expenses and target income',
      'Research market rates for your specific niche + experience level using FreelanceRateIQ calculator',
      'Set a published rate at or above the market median',
      'Write your rate down and practice saying it out loud without qualifiers — "my rate is $X per hour"',
    ],
    faq: [
      { q: 'Should I publish my rates publicly or only share when asked?', a: 'Both approaches work, but public rates filter out low-budget clients before they contact you — saving your time. If you work in a niche where project size varies enormously (enterprise vs. small business), publishing a "starting from" rate is a reasonable middle ground. For most freelancers, especially early on, publishing rates reduces the awkwardness of the first conversation.' },
      { q: 'What if my calculated rate is higher than I\'m currently charging?', a: 'Then you\'re undercharging in real terms. Raise rates at the next natural opportunity: new clients get the new rate immediately; existing clients get 30-60 days notice and then transition to the new rate (or don\'t). It\'s uncomfortable, but continuing to work below your minimum viable rate is financially unsustainable.' },
      { q: 'How do I know if I\'m pricing myself out of the market?', a: 'You\'ll see it in your close rate. If you\'re converting fewer than 30% of qualified leads at your rate, it may be too high relative to what you\'re communicating in value. If you\'re closing 80%+ of leads, your rate is almost certainly too low (you want some friction — 40-60% close rate on qualified leads is a healthy indicator).' },
      { q: 'What\'s the difference between a rate and a salary expectation?', a: 'Your rate must account for things an employer covers: health insurance, payroll taxes, retirement contributions, paid time off, equipment, software, training. A $100K full-time salary translates to roughly $70-$80/hour as a freelance equivalent — not $48/hour (100K ÷ 2080 hours). The freelance premium covers these employer-provided costs.' },
    ],
    relatedTopics: ['hourly-vs-project-pricing', 'how-to-raise-freelance-rates', 'value-based-pricing'],
  },

  'hourly-vs-project-pricing': {
    name: 'Hourly vs. Project Pricing',
    emoji: '⚖️',
    badge: 'Critical Decision',
    title: 'Hourly vs. Project Pricing for Freelancers | Which Is Better? | FreelanceRateIQ',
    description: 'Hourly vs. project pricing for freelancers — when each model makes sense, how each affects your income ceiling, and how to quote project prices confidently without underselling.',
    keywords: ['hourly vs project pricing freelance', 'freelance project pricing', 'should freelancers charge by hour or project', 'freelance flat rate vs hourly', 'how to price freelance projects'],
    intro: 'The hourly vs. project pricing debate is the most consequential pricing decision most freelancers make — and most make it by default rather than by design. Hourly feels safe (you get paid for every hour you work). Project pricing feels risky (what if it takes longer than expected?). But hourly pricing has a structural flaw that caps your income and disadvantages you as you get better at your work. This guide explains both models clearly and gives you the framework to decide when each makes sense.',
    sections: [
      {
        heading: 'The fundamental problem with hourly pricing',
        body: 'Hourly pricing has one structural flaw that gets worse as you get more skilled: it rewards time, not results.\n\nImagine you become 2x faster at building websites. Under hourly pricing, you now earn 50% less for the same deliverable. The client gets the same website in half the time and pays half as much. Your improved skill directly reduces your income.\n\nThis is the "expertise penalty" of hourly billing: the better you get, the less you earn per deliverable, unless you constantly raise your hourly rate to offset efficiency gains.\n\nHourly pricing also:\n- Creates a time-tracking administrative burden (tracking every 15 minutes creates friction)\n- Puts the client in the position of scrutinizing your hours ("did this really take 6 hours?")\n- Caps your income at (rate × available hours) — there\'s no leverage\n- Makes your income unpredictable and creates project-length anxiety',
      },
      {
        heading: 'Why project pricing is better for most freelancers',
        body: 'Project pricing (flat rate per deliverable) solves the expertise penalty:\n\nWhen you\'re paid a flat rate for a website, your efficiency improvement directly increases your effective hourly rate. You do the same project in half the time → you earn 2x your effective hourly rate. Your improved skill is rewarded, not penalized.\n\nProject pricing also:\n- Creates clean billing (one invoice, clear scope, no hour debates)\n- Aligns client incentives with quality (they care about the outcome, not the hours)\n- Rewards expertise and speed\n- Creates predictable income (you know the revenue before starting)\n\nThe risk — scope creep — is managed with a good scope of work document, not by defaulting to hourly.',
      },
      {
        heading: 'When hourly pricing makes sense',
        body: 'Hourly billing is appropriate in specific situations:\n\n1. Ongoing, undefined-scope work: Retainer-adjacent work where you don\'t know in advance how many hours will be needed. Monthly consulting where hours vary is often best billed hourly or as a capped retainer.\n\n2. Out-of-scope additions: When a project goes beyond the agreed scope, billing additional work at your hourly rate (via change order) is standard practice.\n\n3. Early client relationships with unknown requirements: Some initial engagements are genuinely exploratory — where neither you nor the client knows the full scope. Hourly billing with a cap can protect both parties.\n\n4. When the client requires it: Some enterprise clients have procurement requirements for T&M (time and materials) billing. If the relationship justifies accommodating this, it can work — with a high hourly rate to compensate for the disadvantage.\n\n5. Niche work with highly variable complexity: Some specialties (legal research, forensic accounting, certain types of development) have genuine complexity variance that makes flat-rate quoting risky.',
      },
      {
        heading: 'How to price projects without underselling',
        body: 'The anxiety around project pricing comes from fear: "What if it takes longer than I estimated?"\n\nHere\'s how to manage that:\n\n1. Track your hours anyway. Even when billing by project, track your actual hours for 6-12 months. This builds a data library: "this type of project takes me X hours." Use this data to price future projects.\n\n2. Build in a buffer. Your project quote should include: (estimated hours × your rate) + 20-30% buffer for unexpected complexity. If the project goes smoothly, you earn above your hourly equivalent. If it\'s more complex, you break even or still earn above your MVR.\n\n3. Scope clearly. Scope creep is the main project-pricing risk. A detailed scope of work (see the SOW template in FreelanceRateIQ templates) with explicit exclusions and a change order process eliminates most scope creep issues.\n\n4. Quote confidently. The formula:\n   - Estimate hours to complete (based on your history)\n   - Multiply by your effective target rate\n   - Add 25% buffer\n   - Round up to a clean number\n   - Present as a project price without showing your hourly math',
      },
      {
        heading: 'The hybrid model: retainers and capped hourly',
        body: 'Many experienced freelancers use a hybrid model:\n\n- Project work (new deliverables, defined scope): flat project rate\n- Ongoing advisory/consulting (ongoing relationship, variable scope): monthly retainer\n- Out-of-scope additions: hourly via change order\n\nMonthly retainers are particularly valuable: a client pays a fixed monthly fee for a defined number of hours or deliverables. This creates predictable income for you and predictable costs for the client. Retainer clients who take 10 hours in some months and 20 in others average out over time.',
      },
    ],
    keyTakeaways: [
      'Hourly pricing penalizes you for getting better at your work — efficiency improvements reduce income',
      'Project pricing rewards expertise: faster delivery = higher effective rate on the same project price',
      'Track hours even when billing by project to build a pricing data library',
      'Build a 20-30% buffer into project quotes to protect against scope complexity',
      'Scope creep is the main risk of project pricing — managed with a clear SOW, not by defaulting to hourly',
      'Hourly billing is appropriate for ongoing undefined-scope work and out-of-scope additions',
    ],
    actionItems: [
      'Identify your last 3 projects — would they have been more profitable as project prices?',
      'Start tracking your actual hours even if you bill by project — build your pricing data library',
      'Quote your next new project as a project price rather than hourly (using the formula above)',
      'Create or update your scope of work template to protect against scope creep',
    ],
    faq: [
      { q: 'What if a project takes significantly longer than I estimated?', a: 'First: it happens, and it\'s a learning experience for your pricing. Short-term, you eat the extra hours — this is why the buffer matters. Longer-term, track what happened and update your estimates for similar future projects. If scope genuinely expanded beyond what was agreed, issue a change order for the out-of-scope work (which requires a clear original SOW to reference).' },
      { q: 'Should I show clients my hourly rate when quoting projects?', a: 'No. Showing your hourly math invites clients to scrutinize your hours and compare you to cheaper alternatives. Quote the project price as a project price — the deliverable has this value, not "X hours × Y rate." Your pricing confidence matters: presenting one number is more professional than showing your math.' },
      { q: 'Is it weird to charge different clients different rates for the same type of work?', a: 'Not at all — pricing varies by client size, budget, complexity, and relationship. A startup gets a different quote than an enterprise company for the same type of website. A referral from a trusted colleague might get a relationship rate. Value-based pricing explicitly accounts for who the client is and what the work means to them. Consistency within client relationships matters more than consistency across clients.' },
      { q: 'How do I handle clients who want hourly billing when I prefer project pricing?', a: 'You can explain your preference: "I find project pricing cleaner for both of us — you know the cost upfront, and I\'m focused on the outcome rather than the clock." If they insist on hourly, accommodate it with a higher hourly rate than your project-equivalent rate (to compensate for the disadvantage). T&M billing for clients who require it should command a 15-25% premium over your project-equivalent rate.' },
    ],
    relatedTopics: ['how-to-set-freelance-rates', 'value-based-pricing', 'how-to-raise-freelance-rates'],
  },

  'how-to-raise-freelance-rates': {
    name: 'How to Raise Your Freelance Rates',
    emoji: '📈',
    badge: 'Most Avoided',
    title: 'How to Raise Your Freelance Rates | Scripts & Timing Guide | FreelanceRateIQ',
    description: 'The complete guide to raising your freelance rates. When to raise them, by how much, scripts for telling clients, and how to handle every objection without losing the relationship.',
    keywords: ['how to raise freelance rates', 'raising freelance rates existing clients', 'freelance rate increase how to', 'when to raise freelance rates', 'how to tell clients about rate increase'],
    intro: 'Raising your rates is the single highest-leverage financial decision available to a freelancer. A 20% rate increase applied to your current workload is a 20% income increase with zero additional hours worked. Yet most freelancers raise their rates far less frequently than they should — some haven\'t raised rates in years, or have never raised rates on existing clients. This guide covers when to raise rates, by how much, how to communicate it professionally, and how to handle the pushback.',
    sections: [
      {
        heading: 'When to raise your rates',
        body: 'The correct answer to "when should I raise my rates" is: more often than you are now.\n\nFive clear signals that it\'s time:\n\n1. You\'re fully booked. Basic economics: if you have more demand than capacity, your price is too low. When you\'re turning away work or have a waiting list, raise rates until supply and demand balance.\n\n2. You haven\'t raised rates in 12+ months. Inflation, skill development, and market movement mean your real rate decreases every year you hold it flat. Annual adjustments (3-10%) are standard in professional services.\n\n3. You\'re adding new skills or credentials. If you\'ve added capabilities that took significant investment (learning a new technology, getting certified, developing a specialization), your rate should reflect the new value.\n\n4. Your close rate is above 70-80%. If almost everyone who gets a proposal from you says yes, your rate is too low. A 40-60% close rate on qualified leads is healthier — it signals your rate has some appropriate friction.\n\n5. You\'re landing bigger or better clients. Market context matters. If you\'re now working with larger companies or more sophisticated clients, those relationships typically warrant higher rates than early-career work.',
      },
      {
        heading: 'How much to raise rates',
        body: 'The right increase depends on the situation:\n\nAnnual adjustment (normal course): 5-15%. This is maintenance — keeping pace with inflation and modest skill development. Framing: "Annual rate adjustment."\n\nSignificant skill addition or market correction: 15-30%. When you\'ve developed a valuable specialization or your rate has drifted below market. Framing: "My rates are being updated to reflect my expanded expertise."\n\nMajor correction after years of stagnation: 30-50%+. If you haven\'t raised rates in 3+ years and are significantly below market. These larger increases may result in some client attrition — which is often the point. You want to hold the volume that pays market rates, not the volume that drags your average down.\n\nNew client rate vs. existing client rate: Always raise new client rates first. New clients get your current market rate immediately. Existing clients can transition over 30-90 days, sometimes with a brief grace period at the old rate.',
      },
      {
        heading: 'How to tell existing clients',
        body: 'The three principles of a professional rate increase communication:\n\n1. Adequate notice. 30 days minimum, 60 preferred for major increases. This shows respect for client planning and is standard in professional services.\n\n2. Matter-of-fact, not apologetic. "I\'m updating my rates" is a statement, not a request for permission. Long, defensive explanations signal that you don\'t believe you\'re worth the new rate.\n\n3. Brief, genuine explanation. One sentence: "This reflects my expanded expertise in [area]" or "This is an annual adjustment to align with market rates." Not a paragraph of justification.\n\nThe email structure:\n- Subject: Rate Update — [Month/Year]\n- Opening: Direct statement of the change\n- Effective date: Specific date, 30-60 days out\n- Brief reason (one sentence)\n- Offer to discuss if they have questions\n- Warm close\n\nSee the Rate Increase Letter template in FreelanceRateIQ templates for word-for-word scripts.',
      },
      {
        heading: 'Handling client pushback',
        body: 'Most clients accept rate increases with no pushback — particularly if you\'ve given adequate notice and communicated professionally. When pushback does happen:\n\n"That\'s too much of an increase."\nResponse: "I understand — this is the rate I need going forward. If the new rate doesn\'t work, I\'m happy to discuss whether we can adjust the scope to fit your budget, or I can refer you to colleagues who might be a better fit."\n\n"We\'ve worked together for years — can we get a loyalty discount?"\nResponse: "I value our working relationship, which is why I\'ve kept your rate stable for the past [X] years. This adjustment brings me to where I need to be. What I can offer is the guarantee that I\'ll give your projects priority placement in my schedule."\n\n"Our budget is fixed and can\'t accommodate this."\nResponse: "That\'s helpful to know. Given that, we have two options: we could scope down the engagement to fit your budget at the new rate, or I could help you find someone whose rates fit your budget. Which would be most useful?"\n\nNote: Notice that none of these responses reduce your rate. They offer alternatives (scope reduction, referral) but hold the line. If you cave and maintain the old rate "just for this client," you\'ve established that your stated rates are negotiable starting points, not real numbers.',
      },
      {
        heading: 'The grandfathering decision',
        body: 'Grandfathering — keeping existing clients at their old rate while charging new clients more — is sometimes used to avoid disruption. It\'s a legitimate tool but has downsides:\n\nPros: Maintains existing revenue, avoids client attrition, shows loyalty to long-term clients.\n\nCons: You end up working for some clients at below-market rates indefinitely. This creates subtle resentment and makes you less engaged with those clients over time. The lowest-paying clients tend to get the least attention.\n\nA middle path: Transition periods rather than permanent grandfathering. Existing clients get the old rate for 90 more days, then transition to the new rate. This is respectful and time-bounded — not a permanent discount.',
      },
    ],
    keyTakeaways: [
      'Rate increases should happen annually as standard practice — not only when you feel ready',
      'Being fully booked and a high close rate (>70%) are the clearest signals your rate is too low',
      'Annual adjustments: 5-15%. Significant increases: 15-30%. Major corrections: 30-50%+',
      'New clients get the new rate immediately; existing clients get 30-60 days notice',
      'Professional communication is brief and matter-of-fact — not apologetic or over-explained',
      'Hold your rate in negotiations — offer scope adjustments or referrals, not discounts',
    ],
    actionItems: [
      'Check: when did you last raise rates? If it\'s been more than 12 months, schedule a rate review now',
      'Check your close rate: above 70%? Your rate is likely too low',
      'Decide: what\'s your new rate for all new clients starting immediately?',
      'Draft a rate increase email to your top 3 existing clients, to be sent this week',
    ],
    faq: [
      { q: 'What if a client leaves when I raise rates?', a: 'That\'s information. A client who leaves at a 15% rate increase was paying below market and would have left eventually anyway. The question is whether you want to hold that client at a below-market rate indefinitely, or free up that capacity for a client who pays market rates. Client attrition at rate increases is normal — a well-managed rate increase accepts some attrition as a feature, not a bug.' },
      { q: 'Should I raise rates mid-project?', a: 'No — don\'t raise rates on work in progress. Apply rate increases to new projects, project renewals, or at the natural end of a retainer period. Raising rates mid-project is poor form unless the scope has dramatically expanded beyond what was agreed.' },
      { q: 'What\'s the difference between raising rates and repricing?', a: 'Raising rates is an upward adjustment to your standard hourly or project rate. Repricing is when you change your pricing model — for example, moving from hourly to project pricing. You can do both simultaneously, but they serve different goals. Rate increases address underpayment; repricing addresses structural pricing model issues.' },
      { q: 'How do I raise rates when I feel like I\'m not good enough yet?', a: 'Impostor syndrome is nearly universal among freelancers and has essentially no correlation with actual skill level. The relevant fact is: market rates are what clients in your niche, at your experience level, are currently paying. If your rate is below that, you\'re undercharging relative to market — not relative to some mythical "good enough" threshold.' },
    ],
    relatedTopics: ['how-to-set-freelance-rates', 'handling-price-objections', 'freelance-pricing-mistakes'],
  },

  'freelance-pricing-mistakes': {
    name: 'Freelance Pricing Mistakes',
    emoji: '🚫',
    badge: 'Avoid These',
    title: '8 Freelance Pricing Mistakes That Keep You Underpaid | FreelanceRateIQ',
    description: 'The 8 most common freelance pricing mistakes. The impostor syndrome discount, competing on price, the hourly ceiling, and more — what they are and exactly how to fix each one.',
    keywords: ['freelance pricing mistakes', 'freelancer undercharging', 'why freelancers undercharge', 'freelance pricing errors', 'how to stop undercharging freelance'],
    intro: 'Most freelancers who are underpaid aren\'t underpaid because their market doesn\'t support higher rates. They\'re underpaid because of specific, identifiable pricing behaviors that consistently leave money on the table. These mistakes are not about skill — they\'re about psychology and process. Here are the eight most damaging ones and exactly how to fix them.',
    sections: [
      {
        heading: 'Mistake 1: The impostor syndrome discount',
        body: 'What it looks like: You calculate your market rate, then reduce it before quoting because you\'re not sure you\'re "good enough yet," or you imagine the client is going to think you\'re too expensive.\n\nWhy it happens: You\'re comparing yourself to idealized freelancers (the best ones you see, not the full range). You\'re discounting for your own internal uncertainty in a way the client never asked for.\n\nThe fix: Quote the market rate for your niche and experience level, not the rate you\'ve discounted for your self-doubt. The client\'s job is to decide if your rate works for them. Your job is to quote your rate — not to pre-negotiate on their behalf before they\'ve even had the chance to say yes.',
      },
      {
        heading: 'Mistake 2: Competing on price',
        body: 'What it looks like: You lower your rate to win projects, especially when you feel competition. You believe being cheaper than other options is your competitive advantage.\n\nWhy it\'s a trap: Competing on price is a race to the bottom. There is always someone cheaper. If you win a client because you\'re the cheapest, you\'ve attracted a price-sensitive client who will switch to a cheaper option the moment one appears — and who will resist every future rate increase.\n\nThe fix: Compete on specificity, not price. The freelancer who wins on price is "a web developer." The freelancer who doesn\'t have to compete on price is "a Shopify developer for DTC fashion brands who has built 40+ stores with a focus on conversion optimization." Specific expertise commands premium prices. Generic service invites price comparison.',
      },
      {
        heading: 'Mistake 3: Hourly billing as a permanent model',
        body: 'What it looks like: You\'ve been billing hourly for years because "that\'s how freelancing works." You get paid for every hour, which feels fair and safe.\n\nWhy it\'s limiting: Hourly billing caps your income at (rate × available hours). There\'s no leverage. And critically: as you get better and faster at your work, hourly billing penalizes you — your efficiency gains go to the client, not to you.\n\nThe fix: Move deliverable-based work to project pricing. Start by tracking your actual hours on hourly projects and computing your effective hourly rate. Then quote the next similar project as a flat fee that reflects the value and your efficiency.',
      },
      {
        heading: 'Mistake 4: Discounting for "small" projects',
        body: 'What it looks like: You charge less for quick projects because they "only take a few hours." A 1-hour consultation gets quoted at $50 when your hourly rate is $100, because it feels wrong to charge $100 for one meeting.\n\nWhy it\'s wrong: Small projects have the same overhead (scoping, communication, invoicing) as large ones, plus they displace potential higher-value work in your schedule. Short work should either cost at full rate or be packaged into a retainer that makes the overhead worthwhile.\n\nThe fix: Set a minimum project fee (typically 3-5 hours minimum) and charge it consistently. Or turn small ongoing relationships into monthly retainers that bundle recurring work.',
      },
      {
        heading: 'Mistake 5: Not adjusting for client size',
        body: 'What it looks like: You charge the same rate to a Fortune 500 company as to a solo founder\'s side project. A $10,000 project is $10,000 whether the client is a startup or an enterprise.\n\nWhy it\'s wrong: The same deliverable has dramatically different value to different clients. A landing page that converts 1% better means $5,000/year to a startup and $500,000/year to an enterprise with the same traffic. The deliverable is the same. The value is radically different.\n\nThe fix: Value-based pricing (the next guide topic) directly addresses this. At minimum, have different rate tiers for different client sizes — "startup rate" vs. "agency and enterprise rate." Many freelancers charge 2-5x more to enterprise clients for the same work.',
      },
      {
        heading: 'Mistake 6: Not charging for revisions',
        body: 'What it looks like: Your contracts say "unlimited revisions" or you allow clients to give endless rounds of feedback without additional billing. You\'ve rewritten a piece four times or redesigned a logo twelve times — all included in the original quote.\n\nWhy it\'s wrong: Unlimited revisions are unlimited scope creep. Each revision round consumes time you\'ve already been paid for. "Unlimited revisions" signals low confidence in your work and attracts clients who use revisions to avoid making decisions.\n\nThe fix: Define revision rounds in your contract (typically 2-3 rounds). After that, revisions are billed at your hourly rate via change order. This creates scope clarity and reduces the revision cycle because clients consolidate feedback when they know additional rounds cost money.',
      },
      {
        heading: 'Mistake 7: Giving discounts instead of reducing scope',
        body: 'What it looks like: When a client says "your quote is too high," you reduce the price while keeping the same deliverables. You do $8,000 worth of work for $6,500 because the client pushed back.\n\nWhy it\'s damaging: You\'ve established that your published rate is a negotiating position, not a real number. This client (and their referrals) will always negotiate. You also create resentment — doing the same work for less than you valued it.\n\nThe fix: When a client can\'t afford your rate for the full scope, offer to reduce the scope to fit their budget — not reduce the rate for the same scope. "At $6,500, I can deliver X and Y, not X, Y, and Z. The full scope I quoted is $8,000. Which would you like to move forward with?" This preserves your rate and gives them a genuine choice.',
      },
      {
        heading: 'Mistake 8: Not raising rates annually',
        body: 'What it looks like: You\'ve been charging the same rate for 2, 3, or 5 years. Your rates haven\'t kept pace with inflation, your skill development, or market changes.\n\nWhy it matters: Inflation at 3%/year means a flat rate loses 15% of its real value over 5 years. Meanwhile, your skills have grown, your portfolio is stronger, and your output quality has improved. A flat rate means you\'re effectively getting paid less each year.\n\nThe fix: Annual rate reviews as a calendar event. New clients: get your current rate immediately. Existing clients: 30-60 days notice and then transition. 5-10% annual adjustments don\'t require justification — they\'re maintenance. 20%+ increases benefit from a brief explanation.',
      },
    ],
    keyTakeaways: [
      'The impostor syndrome discount is quoting for your self-doubt, not for your skills — stop pre-negotiating on behalf of clients',
      'Competing on price attracts price-sensitive clients who will leave for cheaper options — compete on specificity',
      'Unlimited revisions = unlimited scope creep. Always define revision rounds in contracts.',
      'Discounting rate for pushback establishes your rate as a negotiation position — offer scope reduction instead',
      'Annual rate reviews are maintenance, not a special event — build them into your calendar',
    ],
    actionItems: [
      'Audit your last 5 invoices: did you apply any of these 8 mistakes? Where did you leave money on the table?',
      'Remove "unlimited revisions" from your contracts and define revision rounds explicitly',
      'Identify your most common objection ("too expensive") and prepare a response that reduces scope, not rate',
      'Schedule a rate review for your next calendar quarter',
    ],
    faq: [
      { q: 'Is it ever okay to offer a discount?', a: 'Situationally — but as a deliberate choice, not a default response to pushback. A relationship discount for a referral you value, or a reduced rate for a cause you care about, is your choice. A reactive discount because a client said "that\'s too much" is a pricing mistake. The distinction: proactive discounts are strategic; reactive discounts are capitulation.' },
      { q: 'How do I stop feeling guilty about charging "high" rates?', a: 'Reframe what you\'re charging for. You\'re not charging for your time — you\'re charging for the outcome you deliver, the expertise it took years to develop, and the business value your work creates. A client who pays $5,000 for a conversion-optimized landing page that generates $50,000 in revenue got a bargain. The guilt about "high" rates is usually about comparing to hourly wages rather than to the value created.' },
      { q: 'What if I really am underqualified for the rate I want to charge?', a: 'Then build the skills that justify it — but don\'t discount your current skills in the meantime. You can charge market rate for your current level while working toward the next level. The mistake is charging entry-level rates when you have mid-level skills because you\'re comparing yourself to senior practitioners.' },
      { q: 'Are there freelance niches where these mistakes are harder to avoid?', a: 'Highly commoditized niches (certain types of graphic design, simple content writing, data entry) have tighter market rate ranges and more competition on price. In these niches, the strategic move is specialization — narrowing to a specific industry or use case — rather than trying to command premium rates for generic services.' },
    ],
    relatedTopics: ['how-to-raise-freelance-rates', 'handling-price-objections', 'value-based-pricing'],
  },

  'value-based-pricing': {
    name: 'Value-Based Pricing for Freelancers',
    emoji: '💎',
    badge: 'Advanced',
    title: 'Value-Based Pricing for Freelancers | The Complete Guide | FreelanceRateIQ',
    description: 'How to implement value-based pricing as a freelancer. Move beyond hourly rates, quantify the value you deliver, and price based on outcomes — the model used by the highest-earning freelancers.',
    keywords: ['value based pricing freelancers', 'how to price based on value freelance', 'freelance value pricing guide', 'how to charge more as a freelancer', 'outcome based pricing freelance'],
    intro: 'Value-based pricing is the highest-leverage pricing model available to a freelancer — and the most misunderstood. It doesn\'t mean "charge whatever you want." It means pricing based on the economic value you deliver to the client, not on your time or cost. The freelancers who earn $200-$1,000/hour effective rates typically practice some form of value-based pricing, whether they call it that or not. This guide explains how it works and how to implement it.',
    sections: [
      {
        heading: 'What value-based pricing actually means',
        body: 'Value-based pricing: your price is anchored to the economic value the client receives from your work, not to your cost (hourly rate × hours) or to market rate averages.\n\nExample: A landing page that converts at 3% instead of 1% generates $50,000 more revenue per year for a client with 5,000 monthly visitors and a $500 average order value. The market rate for a landing page might be $3,000-$8,000. The value-based price for this specific outcome could be $15,000-$20,000 — because the ROI is still enormous for the client.\n\nValue-based pricing doesn\'t mean you charge 100% of the value you create. It means you anchor your price to the value conversation rather than the time-cost conversation. Most practitioners aim to deliver 5-10x the value of their fee — making the client feel they got exceptional value while charging well above market rate.',
      },
      {
        heading: 'The discovery conversation: how to uncover value',
        body: 'You can\'t price on value without understanding the value. The discovery conversation is where you ask the questions that reveal it.\n\nKey questions:\n\n"What business outcome are you hoping to achieve?" (Not: what deliverable do you want?)\n\n"If we solve this completely, what does success look like in 12 months?"\n\n"What does this problem cost you currently — in time, revenue, or opportunity?"\n\n"Have you tried to solve this before? What was the outcome?"\n\n"What would it mean to your business if you could [specific outcome]?"\n\nThese questions shift the conversation from "what do you want me to build" to "what are we solving and what\'s it worth to solve it." The answers give you the information to price on value rather than time.',
      },
      {
        heading: 'How to calculate value (and where to price relative to it)',
        body: 'Once you understand the business outcome, you can estimate the value:\n\nFor revenue-generating work:\n- Revenue impact × attribution percentage × timeframe\n- Example: A new email sequence expected to generate $120,000 in annual recurring revenue → conservative 15% attribution to your work → $18,000 attributable value per year → price somewhere between $8,000-$15,000 (still great ROI for the client)\n\nFor cost-saving work:\n- Hours saved × loaded cost of those hours\n- Example: A workflow automation that saves a team of 5 people 2 hours/week each → 10 hrs/week × $50 fully-loaded average → $500/week → $26,000/year → price at $8,000-$12,000\n\nFor risk-reduction work:\n- Probability of bad outcome × cost of that outcome\n- Example: Legal/compliance work where non-compliance could cost $200,000 in fines → your audit dramatically reduces that risk → price accordingly\n\nPractical guideline: Price at 10-30% of the estimated first-year value. This gives the client a 3-10x ROI, making the decision easy.',
      },
      {
        heading: 'Moving from cost-based to value-based in practice',
        body: 'You don\'t switch to value-based pricing by flipping a switch. Most freelancers evolve toward it over time:\n\nStage 1 — Still hourly: "My rate is $X per hour"\n\nStage 2 — Project pricing: "This type of project is typically $X"\n\nStage 3 — Contextual project pricing: "Based on what you\'ve told me, this project is $X — it accounts for the complexity of your situation"\n\nStage 4 — Value-anchored pricing: "You mentioned this outcome is worth $Y to your business. My fee is $X, which delivers roughly Z times that in first-year value"\n\nMost freelancers can reach Stage 3 relatively quickly. Stage 4 requires:\n- Comfort with the discovery conversation\n- Confidence in your ability to deliver the outcome (not just the deliverable)\n- A track record you can reference',
      },
      {
        heading: 'When value-based pricing doesn\'t work',
        body: 'Value-based pricing has real limitations:\n\nCommoditized work: When the deliverable is a commodity (a generic blog post, a standard Wordpress theme), there\'s no differentiated value to base pricing on. The solution is specialization — not value-based pricing on generic services.\n\nClients who can\'t quantify their outcomes: Some clients (non-profits, early-stage startups with no revenue) don\'t have the financial context to respond to value pricing. They may genuinely not know what the outcome is worth, making value anchoring impossible.\n\nShort-term work with no measurable outcome: For some tasks (proofreading, formatting, one-off support), the value conversation doesn\'t apply. Price these at a fair hourly or task rate.\n\nClients with procurement-set budgets: Enterprise clients often have predetermined budget brackets. You may need to work within their budget structure, then maximize value within it.',
      },
    ],
    keyTakeaways: [
      'Value-based pricing anchors your fee to client outcomes (revenue, cost savings, risk reduction) not to your time or costs',
      'The discovery conversation is the foundation — you can\'t price on value without understanding what success is worth',
      'Practical target: 10-30% of estimated first-year value, giving the client a 3-10x ROI',
      'Most freelancers evolve toward value-based pricing in stages — start with contextual project pricing',
      'Value-based pricing requires specialization — it doesn\'t work for commoditized, generic services',
    ],
    actionItems: [
      'For your next discovery call, add at least two "value questions" to your standard conversation',
      'After the call, estimate the economic value of the outcome the client described',
      'Quote the project with a value anchor: "This will [outcome] — my fee is [amount], which delivers [ROI estimate] in value"',
      'Track outcomes for 3-5 projects to build a portfolio of value evidence for future conversations',
    ],
    faq: [
      { q: 'Is value-based pricing ethical?', a: 'Yes. Charging in proportion to the value you create is the most economically rational and ethical pricing model. The alternative — charging the same regardless of whether you\'re creating $1,000 or $100,000 in value — actually disadvantages small clients (who pay the same as large ones for less value) and undercharges large clients (who receive enormous value for a commodity price).' },
      { q: 'What if I can\'t quantify the value?', a: 'You don\'t need a precise number. The discovery conversation builds a qualitative sense of scale: is this a $500 problem or a $50,000 problem? Even a rough estimate lets you anchor your price at a more appropriate level. "This seems like a mid-six-figure problem for your business — my fee of $8,000 gives you roughly 15-20x ROI" is a valid value-based pitch even without exact calculation.' },
      { q: 'Won\'t clients push back on value-based prices?', a: 'Some will — those who are accustomed to commodity pricing or who haven\'t internalized the outcome framing. Clients who bought into the value conversation in discovery rarely push back hard on value-based prices, because they\'ve already articulated what the outcome is worth. The resistance usually signals that the value conversation wasn\'t deep enough, not that the price is too high.' },
      { q: 'Do I have to guarantee the outcome to charge for the value?', a: 'No — you guarantee the deliverable and your best professional effort, not the business outcome (which depends on many factors outside your control). However, your track record of similar outcomes is part of what justifies the price. The more case studies and evidence you can point to, the easier the value-based price conversation becomes.' },
    ],
    relatedTopics: ['how-to-set-freelance-rates', 'hourly-vs-project-pricing', 'handling-price-objections'],
  },

  'handling-price-objections': {
    name: 'Handling Price Objections',
    emoji: '💬',
    badge: 'Close More',
    title: 'Handling Freelance Price Objections | Scripts & Responses | FreelanceRateIQ',
    description: 'Word-for-word scripts for every freelance price objection — "that\'s out of my budget," "can you do it cheaper," "I found someone cheaper." Close more at your rate without discounting.',
    keywords: ['freelance price objections', 'how to handle price objections freelance', 'client says too expensive freelance', 'freelance pricing negotiation scripts', 'how to respond to budget objections freelance'],
    intro: 'Every freelancer who quotes real rates will face price objections. "That\'s more than we budgeted." "Can you come down a bit?" "I found someone who quoted half that." These objections feel like rejection — but most of them aren\'t. They\'re negotiating behaviors and information-gathering moves. Learning to respond to them without caving is one of the most valuable sales skills a freelancer can develop.',
    sections: [
      {
        heading: 'Understanding what price objections actually mean',
        body: 'Price objections come in four categories, and misidentifying them leads to wrong responses:\n\n1. Information requests: "How did you get to that number?" The client isn\'t objecting to the price — they want to understand the value. Response: explain the value, not your hours.\n\n2. Budget constraints: "Our budget is $X." This is real information. They may genuinely not have more. Response: offer a smaller scope at their budget, or walk away gracefully.\n\n3. Negotiating behavior: "Is there any flexibility?" This is standard B2B behavior — many procurement professionals are required to push back regardless of whether they think the price is fair. Response: hold your price or offer scope reduction, never a straight discount.\n\n4. Price shopping signals: "I got a quote for half that." They may be testing you, genuinely have a cheaper quote, or exaggerating. Response: address the value differential, not the price gap.\n\nThe critical mistake: treating all objections as Type 2 (genuine budget constraints) and immediately discounting. Most objections are Type 3 (negotiating behavior) and a confident hold wins.',
      },
      {
        heading: 'Script: "That\'s more than we budgeted"',
        body: 'This is the most common objection. It contains real information ("our budget is X") but its purpose may be negotiating, not constraint.\n\nResponse A — If you want to close the deal:\n"I appreciate you sharing that. A couple of options: I could reduce the scope to fit your budget — at [their budget], I could deliver [core deliverable] without [additional elements]. Alternatively, if the full scope is important, the investment I quoted reflects what it takes to do it properly. Which direction makes more sense for you?"\n\nResponse B — If you want to hold price and see if they\'re serious:\n"I understand budget is a real consideration. My quote reflects what I need to charge to deliver the work at the quality level that gets the results we talked about. I don\'t have flexibility on the rate — but if [their budget] is a hard ceiling, we could talk about a smaller initial engagement."\n\nKey principle: Offer a smaller scope, not a smaller rate for the same scope.',
      },
      {
        heading: 'Script: "Can you come down a bit / is there flexibility?"',
        body: 'This is almost always negotiating behavior, not a genuine budget constraint. The right response is a polite hold:\n\nResponse A — Direct hold:\n"That\'s the rate for this project. It reflects the scope and the level of expertise I\'m bringing to it. If the investment doesn\'t work, I\'m happy to look at a reduced scope."\n\nResponse B — Curiosity-based:\n"What number did you have in mind?" [If they give a number significantly lower, treat it as a budget constraint and offer reduced scope. If they give a number close to yours, you may have room to structure differently — for example, a payment plan — without reducing the total.]\n\nResponse C — The return question:\n"Is the rate the main consideration, or are there other factors I should know about?" [Sometimes "can you come down" is really "I\'m not sure your approach is right for us" or "I want to work with someone else but I\'m trying to make your quote work."]',
      },
      {
        heading: 'Script: "I found someone who quoted half that"',
        body: 'This objection is often exaggerated. If someone truly quoted half your rate for the same scope, they\'re either inexperienced, undervaluing their work, or providing a different scope. Here\'s how to respond:\n\nResponse A — Address the comparison:\n"That\'s not uncommon — rates vary a lot in this space. The freelancers I see quoting in that range are typically [earlier in their career / using templated approaches / providing a narrower scope]. What\'s included in their quote?\n\nIf they genuinely want the lower-priced option, this question either reveals that the scopes aren\'t equivalent, or confirms they\'re price-shopping. Either outcome is useful.\n\nResponse B — Acknowledge and hold:\n"There are definitely cheaper options available. The question is whether the cheaper option gets you to [the outcome they described]. My rate reflects my track record of [specific result type]. If budget is the priority over outcome quality, I\'m not going to be the right fit — and that\'s okay."\n\nNote: Never trash competitors. Address your value, not their weaknesses.',
      },
      {
        heading: 'Script: "We have a smaller budget right now — can we revisit this later?"',
        body: 'This is either genuine (they\'ll come back when funded) or a soft no (they won\'t). Find out which:\n\nResponse:\n"Of course — what\'s the timeline you\'re thinking? I want to make sure I flag availability when you\'re ready to move forward. [If they give a vague non-answer: that\'s a soft no — move on. If they give a specific date: that\'s likely genuine.]"\n\nFor genuine future clients: offer to send a brief follow-up note at the timeline they specified. Put it in your calendar. These leads sometimes do convert later.\n\nFor likely soft nos: don\'t chase. "Understood — feel free to reach out when the timing works." Then focus on warmer prospects.',
      },
      {
        heading: 'When to negotiate and when to walk',
        body: 'Not every client relationship is worth pursuing. Walk away signals:\n\n- They want the full scope at a price that\'s below your minimum viable rate\n- They\'ve pushed back multiple times and the conversation has become adversarial\n- Their expressed budget is so far from your rate that no scope reduction makes sense\n- Red flags about their behavior (dismissive, disrespectful, unrealistic expectations)\n\nStay and negotiate signals:\n- The gap is modest (10-20%) and the relationship seems valuable\n- They\'re willing to discuss scope reduction rather than just demanding lower rates\n- The budget constraint seems genuine (not negotiating behavior)\n- The project is strategically valuable (great case study, ideal client type)\n\nThe clean walk-away line: "I don\'t think I\'m going to be the right fit for your budget — and I\'d rather tell you that now than take on a project that\'s going to be stressful for both of us. I\'m happy to share some names of colleagues who might be a better match."',
      },
    ],
    keyTakeaways: [
      'Most price objections are negotiating behavior, not genuine budget constraints — a confident hold wins more often than you think',
      'Offer scope reduction, never rate reduction for the same scope',
      '"I found someone cheaper" usually means different scope, less experience, or an exaggerated comparison — address value, not price',
      'Ask clarifying questions before assuming what the objection means: "What number did you have in mind?"',
      'Know your walk-away point before the negotiation starts — it prevents caving under pressure',
    ],
    actionItems: [
      'Prepare a "scope reduction" version of your next proposal before you send it — have it ready if the budget objection comes',
      'Practice saying "That\'s my rate" out loud until it doesn\'t feel awkward',
      'Identify your walk-away rate for your next project (below this number, you decline)',
      'Role-play the 3 most common objections you get with a freelancer friend',
    ],
    faq: [
      { q: 'What if I need the money and feel pressure to take any rate?', a: 'Financial pressure is the enemy of pricing confidence. The long-term solution is building a pipeline so you\'re never negotiating from desperation. Short-term: a transparent conversation can sometimes work ("my next availability is in 3 weeks — the project needs to work at my rate for me to prioritize it"). But caving on rate when you don\'t have to establishes a bad client precedent that\'s hard to reverse.' },
      { q: 'Should I ask about budget before sending a proposal?', a: 'Yes — as part of your discovery call. "Do you have a budget in mind for this?" gives you useful information. If their budget is dramatically below your rate, you can address it early ("that\'s typically below the range for this type of project — let me share what\'s possible in that range") rather than sending a proposal that\'s going to be rejected.' },
      { q: 'How do I respond if a client says my competitor does it for free?', a: 'Rare but it happens (e.g., platforms that offer free versions of services). Acknowledge and reframe: "That tool does provide a free version — what I\'m offering is [specific differentiation: strategy, customization, support, accountability]. If the free tool fully meets your needs, it might be the right fit. What\'s making you consider a professional option?" Often they\'ll tell you exactly what the free option is missing.' },
      { q: 'Is there a magic number of times to follow up after a price objection?', a: 'One follow-up after a "we need to think about it" is appropriate. Two maximum. After that, you\'re chasing. Send one final note: "Just following up — happy to discuss if you have questions, otherwise I\'ll assume you\'ve gone another direction and wish you well." Clean closure is better than endless pursuit.' },
    ],
    relatedTopics: ['how-to-raise-freelance-rates', 'freelance-pricing-mistakes', 'value-based-pricing'],
  },
}

export async function generateStaticParams() {
  return Object.keys(guides).map((topic) => ({ topic }))
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic } = await params
  const page = guides[topic]
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://freelancerateiq.com/pricing-guide/${topic}`,
      siteName: 'FreelanceRateIQ',
      type: 'article',
    },
  }
}

const guideNames: Record<string, string> = {
  'how-to-set-freelance-rates': 'How to Set Your Rates',
  'hourly-vs-project-pricing': 'Hourly vs. Project Pricing',
  'how-to-raise-freelance-rates': 'How to Raise Your Rates',
  'freelance-pricing-mistakes': 'Pricing Mistakes',
  'value-based-pricing': 'Value-Based Pricing',
  'handling-price-objections': 'Handling Objections',
}

export default async function PricingGuideTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params
  const page = guides[topic]
  if (!page) notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-emerald-400 transition-colors">FreelanceRateIQ</Link>
          <span>›</span>
          <Link href="/pricing-guide" className="hover:text-emerald-400 transition-colors">Pricing Guide</Link>
          <span>›</span>
          <span className="text-slate-400">{page.name}</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">{page.emoji}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium`}>{page.badge}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{page.name}</h1>
          <p className="text-slate-400 leading-relaxed">{page.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-8 mb-10">
          {page.sections.map((section) => (
            <div key={section.heading} className="pb-8 border-b border-slate-700/50">
              <h2 className="text-xl font-bold mb-4 text-white">{section.heading}</h2>
              {section.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-400 leading-relaxed text-sm mb-3">{para}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Key takeaways */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/40 p-5 mb-8">
          <h2 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Key Takeaways</h2>
          <ul className="space-y-2">
            {page.keyTakeaways.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action items */}
        <div className="bg-emerald-950/30 rounded-2xl border border-emerald-700/30 p-5 mb-8">
          <h2 className="font-bold text-emerald-300 mb-3 text-sm uppercase tracking-wider">✅ Action Items</h2>
          <ul className="space-y-2">
            {page.actionItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rate guide CTA */}
        <div className="bg-slate-800/50 rounded-2xl border border-emerald-500/30 p-6 text-center mb-8">
          <div className="text-2xl mb-2">📊</div>
          <h2 className="text-lg font-bold mb-2">See the Actual Numbers for Your Niche</h2>
          <p className="text-slate-400 text-sm mb-4">
            Strategy is important. But you also need the market data — what freelancers in your niche and city are actually charging. Our rate guide covers 12 niches with rate tables by experience level.
          </p>
          <Link
            href="/#guide"
            className="inline-block px-6 py-2.5 rounded-lg font-bold text-sm bg-emerald-600 hover:bg-emerald-500 transition-colors"
          >
            Get the Freelance Rate Guide — $27 →
          </Link>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {page.faq.map((item) => (
              <div key={item.q} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/30">
                <h3 className="font-semibold text-white mb-2 text-sm">{item.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related topics */}
        <div className="p-5 rounded-2xl border border-slate-700/40 bg-slate-800/30 mb-8">
          <h2 className="font-bold mb-3 text-white">More Pricing Guides</h2>
          <div className="flex flex-wrap gap-3">
            {page.relatedTopics.map(t => (
              <Link key={t} href={`/pricing-guide/${t}`} className="text-sm text-emerald-400 hover:underline">
                {guideNames[t] || t} →
              </Link>
            ))}
            <Link href="/pricing-guide" className="text-sm text-slate-500 hover:text-slate-300">All guides →</Link>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/40">
          <p className="text-slate-400 text-sm mb-2">Ready to calculate your rate? Use the free tool.</p>
          <Link href="/" className="text-emerald-400 font-semibold hover:underline text-sm">
            Free freelance rate calculator →
          </Link>
        </div>
      </div>
    </div>
  )
}
