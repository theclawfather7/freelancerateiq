import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Template = {
  name: string
  emoji: string
  badge: string
  title: string
  description: string
  keywords: string[]
  intro: string
  whenToUse: string[]
  whatToCustomize: string[]
  templateText: string
  usageTips: string[]
  commonMistakes: string[]
  faq: { q: string; a: string }[]
  relatedTemplates: string[]
}

const templates: Record<string, Template> = {
  'freelance-contract': {
    name: 'Freelance Contract Template',
    emoji: '📄',
    badge: 'Most Downloaded',
    title: 'Free Freelance Contract Template 2026 | Copy-Paste | FreelanceRateIQ',
    description: 'Free freelance contract template for 2026. Complete freelance services agreement covering scope, payment, revisions, IP ownership, and kill fees. Copy, customize, send.',
    keywords: ['freelance contract template', 'freelance services agreement template', 'freelance contract template free', 'simple freelance contract template', 'freelance contract template 2026', 'freelance contract word template'],
    intro: 'A freelance contract protects both you and your client. It defines what you\'re delivering, when you\'re delivering it, how much you\'re getting paid, and what happens when things go sideways. Without one, you\'re relying on a handshake agreement that\'s legally worthless and practically useless when disputes arise. This template covers the essential clauses that matter most in freelance work.',
    whenToUse: [
      'Any project over $500 — below that, the risk is low but a contract still sets professional expectations',
      'New clients you haven\'t worked with before',
      'Ongoing retainer relationships (especially at the start)',
      'Projects where the scope could easily expand (web development, content strategy, design systems)',
      'Clients who seem unclear about deliverables or timeline',
    ],
    whatToCustomize: [
      '[FREELANCER NAME] — your full legal name or business name',
      '[CLIENT NAME] — client\'s full legal name or company name',
      '[PROJECT NAME] — the specific project title',
      '[START DATE] and [END DATE] — project timeline',
      '[DELIVERABLES] — list your specific deliverables in detail',
      '[RATE] and [PAYMENT TERMS] — your rate and when payment is due',
      '[REVISION COUNT] — how many revision rounds are included',
      '[KILL FEE PERCENTAGE] — typically 25-50% of total project value',
      '[GOVERNING STATE] — the state whose laws govern the contract',
    ],
    templateText: `FREELANCE SERVICES AGREEMENT

This Freelance Services Agreement ("Agreement") is entered into as of [DATE] between [CLIENT NAME] ("Client") and [FREELANCER NAME] ("Freelancer").

1. SERVICES

Freelancer agrees to provide the following services ("Services") to Client:

[DESCRIBE SPECIFIC DELIVERABLES IN DETAIL]

All work not explicitly listed above is excluded from this Agreement. Additional work requires a written change order and additional compensation.

2. TIMELINE

Freelancer will begin work on [START DATE] and complete the Services by [END DATE], subject to timely receipt of all required materials, approvals, and feedback from Client. Delays caused by Client will extend the completion date by a corresponding amount.

3. COMPENSATION

Client agrees to pay Freelancer [TOTAL AMOUNT OR RATE STRUCTURE] as follows:

- [DEPOSIT PERCENTAGE]% deposit ([AMOUNT]) due upon signing this Agreement
- [MILESTONE PERCENTAGE]% ([AMOUNT]) due upon [MILESTONE, e.g., completion of first draft]
- Remaining balance ([AMOUNT]) due upon delivery of final work

Invoices are due [NET 15 / NET 30] days from the invoice date. Payments more than [NUMBER] days late will incur a late fee of [1.5% / 2%] per month.

4. REVISIONS

This Agreement includes [NUMBER] rounds of revisions. A revision is defined as a set of changes submitted together in a single feedback document. Additional revisions beyond those included will be billed at Freelancer's standard hourly rate of $[HOURLY RATE].

5. INTELLECTUAL PROPERTY

Upon receipt of full payment, Freelancer assigns to Client all right, title, and interest in the final deliverables, including all copyrights. Freelancer retains the right to display the work in their portfolio unless Client requests otherwise in writing.

Freelancer retains ownership of all preliminary work, concepts, and drafts not included in the final deliverables.

6. CONFIDENTIALITY

Freelancer agrees to keep confidential all proprietary or sensitive information shared by Client in connection with this project and will not disclose such information to third parties without Client's written consent.

7. KILL FEE

If Client cancels this project after work has begun, Client agrees to pay a kill fee equal to [KILL FEE PERCENTAGE]% of the total project value, plus payment for all work completed to date. This compensates Freelancer for time allocated and declined work during the project period.

8. INDEPENDENT CONTRACTOR

Freelancer is an independent contractor, not an employee of Client. Freelancer is responsible for all taxes on compensation received under this Agreement.

9. WARRANTIES

Freelancer warrants that: (a) the work will be original; (b) it will not infringe any third-party intellectual property rights; and (c) Freelancer has the right to enter into this Agreement.

10. LIMITATION OF LIABILITY

Freelancer's total liability under this Agreement shall not exceed the total fees paid by Client under this Agreement. In no event shall either party be liable for indirect, incidental, or consequential damages.

11. DISPUTE RESOLUTION

Any dispute arising under this Agreement shall first be addressed through good-faith negotiation. If unresolved within 30 days, the parties agree to binding arbitration under the rules of the American Arbitration Association in [GOVERNING STATE].

12. ENTIRE AGREEMENT

This Agreement constitutes the entire agreement between the parties and supersedes all prior communications regarding the Services.

AGREED:

Client: _________________________ Date: _______
[CLIENT NAME]

Freelancer: _________________________ Date: _______
[FREELANCER NAME]`,
    usageTips: [
      'Use an e-signature tool (HelloSign/Docusign free tier, or AND.CO) — a signed PDF is legally equivalent to a wet signature in most US states',
      'Never start work without a signed contract AND deposit in your bank account — verbal confirmation is not enough',
      'Define "revision" specifically — unlimited "tweaks" is how projects spiral. A round of revisions = feedback submitted at one time, not ongoing drip-feedback',
      'The kill fee clause is what protects you from a client who disappears mid-project — make it 30-50% for projects over 2 weeks',
      'Adjust governing state to your home state — this matters if you ever need to go to small claims court',
      'For ongoing retainer work, create a Master Services Agreement (MSA) once, then short Statements of Work (SOW) for each project',
    ],
    commonMistakes: [
      'Starting work before the contract is signed and deposit received ("they seemed trustworthy")',
      'Vague deliverables ("website redesign") instead of specific ones ("6 responsive web pages in Figma, including homepage, about, services, 3 case studies")',
      'No kill fee clause — if a client ghosts mid-project, you need compensation for the time you blocked off',
      'Not defining what "approval" means — without a formal approval clause, clients can delay indefinitely',
      'Forgetting to address rush fees, travel, and expenses for projects that might require them',
    ],
    faq: [
      { q: 'Is this contract template legally binding?', a: 'A contract is legally binding when both parties agree to its terms and there\'s an exchange of value (services for payment). This template covers those requirements. However, it\'s a general template — for complex, high-value projects, have an attorney review it. For most freelance work under $10,000, this template is appropriate.' },
      { q: 'Do I need a lawyer to create a freelance contract?', a: 'No — for most standard freelance projects. This template covers the essential clauses. If you\'re doing high-value work (enterprise contracts, ongoing retainers over $50K/year), complex IP arrangements, or working in a regulated industry, a legal review is worth the investment. Services like Clerky and Stripe Atlas also have template libraries.' },
      { q: 'What if a client refuses to sign a contract?', a: 'That\'s a red flag. Legitimate clients understand contracts protect both parties. Common objection: "We don\'t need contracts for small projects." Your response: "I require a contract for all projects — it also protects you. It\'s a one-page document." If they refuse, seriously consider declining the work.' },
      { q: 'Can I use this contract for international clients?', a: 'Yes, with modifications. Add a "governing law" clause specifying your jurisdiction explicitly and remove the AAA arbitration clause (AAA is US-specific) in favor of general arbitration or mediation language. For significant international projects, having an attorney familiar with cross-border contracts review it is worthwhile.' },
    ],
    relatedTemplates: ['freelance-invoice', 'freelance-scope-of-work', 'freelance-nda'],
  },

  'freelance-invoice': {
    name: 'Freelance Invoice Template',
    emoji: '🧾',
    badge: 'Quick Download',
    title: 'Free Freelance Invoice Template 2026 | Copy-Paste | FreelanceRateIQ',
    description: 'Free freelance invoice template for 2026. Professional invoice with net-30 terms, late fee language, and itemized line items. Copy, customize, and send.',
    keywords: ['freelance invoice template', 'freelance invoice template free', 'freelancer invoice template', 'simple freelance invoice template', 'freelance invoice template 2026', 'how to invoice as a freelancer'],
    intro: 'A professional invoice is the difference between getting paid on time and chasing payments for weeks. A good freelance invoice includes all the information a client\'s accounting department needs to process payment, clear late fee language that motivates timely payment, and professional formatting that reinforces your brand. This template covers all of it.',
    whenToUse: [
      'At project completion (milestone billing) or on the first of the month (retainer billing)',
      'When a deposit is due before project start',
      'Any time you need to request payment for completed work',
      'When converting from a proposal to a billing document',
    ],
    whatToCustomize: [
      '[YOUR NAME/COMPANY] — your freelance business name',
      '[YOUR ADDRESS] — mailing address (required for legal invoices)',
      '[YOUR EMAIL] — for payment questions and correspondence',
      '[INVOICE NUMBER] — sequential number (001, 002, etc.)',
      '[INVOICE DATE] — date the invoice is issued',
      '[DUE DATE] — payment due date (typically 15 or 30 days from invoice date)',
      '[CLIENT NAME AND ADDRESS] — client\'s billing address',
      '[PROJECT DESCRIPTION] — what the work was for',
      '[RATE AND QUANTITY] — hourly rate × hours, or flat fee',
      '[YOUR PAYMENT DETAILS] — bank transfer, PayPal, Stripe link, etc.',
    ],
    templateText: `INVOICE

From:
[YOUR NAME / BUSINESS NAME]
[ADDRESS LINE 1]
[CITY, STATE, ZIP]
[EMAIL ADDRESS]
[PHONE NUMBER (optional)]

To:
[CLIENT COMPANY NAME]
Attn: [CLIENT CONTACT NAME]
[CLIENT ADDRESS]
[CLIENT EMAIL]

Invoice Number: [INV-001]
Invoice Date: [DATE]
Due Date: [DATE + 30 DAYS] (Net 30)
Project: [PROJECT NAME]

---

SERVICES RENDERED

Description                                    Qty    Rate       Amount
-----------------------------------------------------------------------
[Service/deliverable description]              [1]    $[RATE]    $[AMOUNT]
[Service/deliverable description]              [hrs]  $[RATE]/hr $[AMOUNT]
[Service/deliverable description]              [1]    $[RATE]    $[AMOUNT]

-----------------------------------------------------------------------
SUBTOTAL                                                          $[SUBTOTAL]
[Tax (if applicable, e.g., state/local)]                         $[TAX]
-----------------------------------------------------------------------
TOTAL DUE                                                         $[TOTAL]

Less deposit previously paid:                                    -$[DEPOSIT]
-----------------------------------------------------------------------
BALANCE DUE                                                       $[BALANCE]

---

PAYMENT METHODS

[ ] Bank Transfer (ACH):
    Bank: [BANK NAME]
    Routing: [ROUTING NUMBER]
    Account: [ACCOUNT NUMBER]

[ ] PayPal: [YOUR PAYPAL EMAIL]

[ ] Stripe Payment Link: [YOUR STRIPE LINK]

[ ] Check payable to: [YOUR NAME/BUSINESS NAME]
    Mail to: [YOUR ADDRESS]

---

PAYMENT TERMS

Payment is due within 30 days of the invoice date. Invoices unpaid after 30 days will incur a late fee of 1.5% per month (18% annually) on the outstanding balance. If payment is 60+ days late, Freelancer reserves the right to suspend delivery of any remaining work and pursue collection.

Questions about this invoice? Contact [EMAIL] or [PHONE].

Thank you for your business!

[YOUR NAME]
[BUSINESS NAME]
[DATE]`,
    usageTips: [
      'Use sequential invoice numbers (INV-001, INV-002) from day one — this is required for tax records and looks professional',
      'Send the invoice the day the work is delivered — not days later. Immediate invoicing anchors payment to delivery',
      'Use invoice software (Wave free, FreshBooks, QuickBooks) for auto-reminders. Manual follow-up is exhausting',
      'Net-15 is more aggressive than Net-30 but most clients expect 30. For small projects (<$1,000), Net-15 is reasonable',
      'Include a Stripe payment link or PayPal.me link — every additional step to pay = lower payment speed',
      'Keep a copy of every invoice sent in a folder organized by year — essential at tax time',
    ],
    commonMistakes: [
      'Sending invoice days or weeks after delivery — the longer you wait, the harder it is to collect',
      'No late fee language — without it, clients have zero financial incentive to pay on time',
      'Missing your own contact information — accounting departments can\'t pay you if they can\'t reach you',
      'Not specifying payment methods — "please pay me" with no instructions is not actionable',
      'Vague description ("project work") instead of specific ("Homepage design — 3 rounds revisions — final delivery March 15")',
      'No invoice number — makes tracking and reconciliation impossible',
    ],
    faq: [
      { q: 'When should I send a freelance invoice?', a: 'Send it the same day you deliver the work. Psychological research on payment timing shows that same-day invoicing results in faster payment than delayed invoicing. When delivery and invoice arrive together, the client connects payment to delivery. When you invoice a week later, the connection is weaker and the urgency is lower.' },
      { q: 'Should I charge sales tax on freelance invoices?', a: 'It depends on your state and service type. Most US states do not require freelancers to charge sales tax on services (vs. products). However, some states (Texas, Hawaii, New Mexico) do tax certain services. Check your state\'s revenue department website. If in doubt, consult an accountant — the cost of one question is worth the certainty.' },
      { q: 'What do I do if a client doesn\'t pay?', a: 'Escalation sequence: (1) Friendly reminder at 5 days past due ("Just checking in on invoice #001"); (2) Firmer reminder at 14 days past due with late fee notice; (3) Formal demand letter at 30 days past due; (4) Suspend ongoing work; (5) Small claims court for amounts under your state\'s limit (usually $5,000-$10,000); (6) Collections agency for amounts that justify their fee.' },
      { q: 'What\'s the difference between Net-15, Net-30, and Net-45?', a: 'These terms mean payment is due 15, 30, or 45 days from the invoice date. Net-30 is the standard for most B2B invoicing. Net-15 is appropriate for smaller amounts or clients with a payment history. Net-45 is sometimes required by larger companies with lengthy AP processes — acceptable for large, reliable clients, not ideal for smaller work.' },
    ],
    relatedTemplates: ['freelance-contract', 'freelance-rate-increase-letter', 'freelance-proposal'],
  },

  'freelance-proposal': {
    name: 'Freelance Project Proposal',
    emoji: '📋',
    badge: 'Win More Clients',
    title: 'Free Freelance Proposal Template 2026 | Win More Clients | FreelanceRateIQ',
    description: 'Free freelance project proposal template. A structured proposal that presents your approach, timeline, and pricing professionally. Copy, customize, close.',
    keywords: ['freelance proposal template', 'freelance project proposal template free', 'how to write a freelance proposal', 'freelance proposal template word', 'client proposal template freelancer'],
    intro: 'A good proposal does two things: it demonstrates that you understand the client\'s problem, and it shows them a clear picture of how you\'ll solve it. Most freelancers either skip proposals entirely (just sending a rate) or write proposals that are effectively price quotes with some padding. A proper proposal answers the client\'s real question: "Why should I hire this person over anyone else?" This template gives you the structure to answer that question.',
    whenToUse: [
      'After an initial discovery call or meeting with a prospective client',
      'For any project over $2,000 where the scope warrants explanation',
      'When competing against other freelancers (a proposal differentiates you)',
      'When the client seems price-focused (a good proposal shifts focus from cost to value)',
      'For complex projects where showing your process builds confidence',
    ],
    whatToCustomize: [
      '[CLIENT NAME] — personalize the opening with their actual name',
      '[THEIR COMPANY] — their business name',
      '[THE SPECIFIC PROBLEM THEY MENTIONED] — reference something specific from your discovery call',
      '[YOUR UNDERSTANDING OF THE PROJECT] — show you listened',
      '[YOUR APPROACH] — explain HOW you\'ll do the work, not just that you will',
      '[DELIVERABLES LIST] — specific, concrete outcomes',
      '[TIMELINE] — realistic milestones with dates',
      '[OPTION 1/2/3 PRICING] — give 2-3 options (most choose the middle)',
      '[YOUR RELEVANT WORK] — 2-3 specific past projects',
      '[EXPIRY DATE] — typically 7-14 days from proposal date',
    ],
    templateText: `FREELANCE PROJECT PROPOSAL

Prepared for: [CLIENT NAME], [CLIENT COMPANY]
Prepared by: [YOUR NAME]
Date: [DATE]
Proposal valid until: [DATE + 14 DAYS]

---

UNDERSTANDING YOUR PROJECT

[CLIENT NAME], based on our conversation on [DATE], I understand that [THE SPECIFIC PROBLEM OR OPPORTUNITY THEY DESCRIBED].

The core challenge seems to be: [THEIR STATED PROBLEM IN 1-2 SENTENCES].

The goal we're working toward: [DESIRED OUTCOME IN 1-2 SENTENCES].

Is that a fair summary? [Note: This section should feel like it was written specifically for them — not copy-pasted. Personalize it.]

---

MY APPROACH

Here's how I would approach this project:

Phase 1 — Discovery ([DURATION])
[Describe what happens in this phase and why it matters]

Phase 2 — [PHASE NAME] ([DURATION])
[Describe what happens and the key deliverables]

Phase 3 — [PHASE NAME] ([DURATION])
[Describe what happens — usually the primary execution phase]

Phase 4 — Revisions & Refinement ([DURATION])
[How feedback and revisions work]

Phase 5 — Final Delivery & Handoff ([DURATION])
[What final delivery looks like and what the client receives]

---

DELIVERABLES

At the end of this project, you will receive:

□ [Specific deliverable #1 — be precise]
□ [Specific deliverable #2]
□ [Specific deliverable #3]
□ [Specific deliverable #4]
□ [Any access credentials, documentation, training, etc.]

NOT included in this scope (but available as add-ons):
□ [Things explicitly out of scope]
□ [Things that might be assumed but aren't included]

---

TIMELINE

Milestone                          Estimated Completion
--------------------------------------------------
Project kick-off                   [DATE]
[Phase 1 deliverable]              [DATE]
[Phase 2 deliverable]              [DATE]
First draft / initial delivery     [DATE]
Client review & feedback           [DATE + 1 WEEK BUFFER]
Revisions complete                 [DATE]
Final delivery                     [DATE]

Total project duration: [X WEEKS]

---

INVESTMENT

I'm presenting three options so you can choose the scope that fits your needs and budget:

OPTION A — [CORE NAME] — $[PRICE]
Includes: [Core deliverables]
Best for: [Type of client or situation]

OPTION B — [STANDARD NAME] — $[PRICE] (Recommended)
Includes: Everything in Option A, plus [additions]
Best for: [Type of client or situation]

OPTION C — [PREMIUM NAME] — $[PRICE]
Includes: Everything in Option B, plus [additions]
Best for: [Type of client or situation]

All options include [NUMBER] rounds of revisions, [SUPPORT PERIOD], and [OTHER INCLUDED FEATURES].

Payment terms:
- 50% deposit due upon signing (project start)
- 25% due upon [MILESTONE]
- 25% due upon final delivery

---

WHY WORK WITH ME

In the past [X] years, I've helped [type of client] achieve [type of outcome]. A few relevant examples:

[PROJECT/CLIENT TYPE]: [Outcome in 1-2 sentences. Metrics when possible.]

[PROJECT/CLIENT TYPE]: [Outcome in 1-2 sentences. Metrics when possible.]

[PROJECT/CLIENT TYPE]: [Outcome in 1-2 sentences. Metrics when possible.]

---

NEXT STEPS

If this proposal looks right, here's how to move forward:

1. Reply to this email with "Approved" or your questions
2. I'll send a contract and deposit invoice within 24 hours
3. Work begins upon receipt of signed contract and deposit

This proposal is valid until [DATE]. I'm currently booking projects starting [EARLIEST START DATE].

Questions? Reply directly to this email or schedule a call: [CALENDAR LINK]

Looking forward to working with you,

[YOUR NAME]
[YOUR TITLE]
[EMAIL] | [PHONE]
[PORTFOLIO URL]`,
    usageTips: [
      'Personalize the "Understanding Your Project" section with something specific they said — this section is where most freelancers send generic language and lose clients',
      'Three pricing options anchor the client to the middle option — Option B is what most will choose, and it\'s your preferred scope',
      'Keep deliverables extremely specific — "website" is not a deliverable. "6 responsive web pages designed in Figma, exported as production-ready assets" is a deliverable',
      'Send proposals within 24 hours of discovery calls while the conversation is fresh — waiting a week loses momentum',
      'Follow up the day before expiry with "Just following up on the proposal I sent — let me know if you have questions" — this converts a significant percentage of warm leads',
      'Never include hourly rates in a proposal — project pricing hides your hourly math and lets clients focus on value, not time',
    ],
    commonMistakes: [
      'Starting with "I" or "We" — great proposals start with the client\'s situation, not your credentials',
      'Only listing deliverables without explaining your approach — clients want to understand HOW you work, not just WHAT you\'ll produce',
      'Single-option pricing — gives clients a yes/no decision instead of a choose-your-scope decision',
      'No expiry date — creates urgency and prevents clients from sitting on proposals indefinitely',
      'Generic "About Me" section that could apply to any freelancer — specificity wins proposals',
    ],
    faq: [
      { q: 'How long should a freelance proposal be?', a: '1-3 pages for most projects. Longer proposals signal that you need to write a lot to justify your value. If you can\'t explain your approach, deliverables, and pricing in 2 pages, either the project is more complex than a proposal can cover (use a Statement of Work instead) or you\'re over-explaining.' },
      { q: 'Should I show pricing in the proposal?', a: 'Yes — a proposal without pricing is not a proposal, it\'s a sales pitch. Clients need to see numbers to make a decision. Present pricing after you\'ve explained your approach and deliverables — anchoring the price to the value you\'ve described.' },
      { q: 'How do I write a proposal for a client who only wants a price?', a: 'Acknowledge their request, then briefly add context: "Happy to give you a number — but I find that when I understand the goal more specifically, I can usually give you a more accurate scope and avoid unexpected additions. Can I ask two quick questions first?" Most serious clients will say yes.' },
      { q: 'What\'s the difference between a proposal and a quote?', a: 'A quote is a price list. A proposal is a document that demonstrates you understand the client\'s problem, explains your approach to solving it, specifies the deliverables, and presents pricing. Proposals win more work because they sell on value and trust, not just cost comparison.' },
    ],
    relatedTemplates: ['freelance-contract', 'freelance-scope-of-work', 'freelance-invoice'],
  },

  'freelance-scope-of-work': {
    name: 'Scope of Work Template',
    emoji: '📐',
    badge: 'Scope Creep Protection',
    title: 'Free Freelance Scope of Work Template | Prevent Scope Creep | FreelanceRateIQ',
    description: 'Free scope of work template for freelancers. Define exactly what\'s included and excluded in every project. Protects you from scope creep and unpaid work.',
    keywords: ['freelance scope of work template', 'scope of work template freelancer', 'how to write scope of work freelance', 'scope of work template free', 'freelance project scope template'],
    intro: 'Scope creep — the gradual expansion of project requirements beyond what was agreed — is the #1 source of unpaid work for freelancers. The solution is a detailed scope of work (SOW) that defines exactly what is and is not included in a project. The more specific your SOW, the better protected you are when a client says "can you just also add..." A good SOW is your professional record of what was agreed.',
    whenToUse: [
      'For any project that might expand beyond the initial brief',
      'As an attachment to your contract, giving the contract legal specificity',
      'When a client has a history of adding "small" requests',
      'After a client asks for a change mid-project (create a Change Order based on this template)',
      'For retainer agreements to define what the monthly deliverables are',
    ],
    whatToCustomize: [
      '[PROJECT NAME] — specific project title',
      '[CLIENT] and [FREELANCER] — both parties\' names',
      '[INCLUDED DELIVERABLES] — exhaustive list of what you will deliver',
      '[EXCLUDED ITEMS] — the "not in scope" list is as important as what\'s included',
      '[REVISION POLICY] — number of rounds and definition of a revision',
      '[APPROVAL PROCESS] — how and when the client formally approves work',
      '[CHANGE ORDER RATE] — your hourly rate for out-of-scope additions',
    ],
    templateText: `SCOPE OF WORK

Project: [PROJECT NAME]
Client: [CLIENT NAME / COMPANY]
Freelancer: [YOUR NAME / BUSINESS]
Date: [DATE]
Version: 1.0

---

1. PROJECT OVERVIEW

[2-3 sentences summarizing the project goal and context. What are we building and why?]

---

2. INCLUDED DELIVERABLES

The following are included in this project scope:

Phase 1 — [PHASE NAME]
□ [Deliverable 1 — be specific. "Homepage design" is not specific. "1 homepage design in Figma, responsive for desktop (1440px) and mobile (375px), including header, hero, 3 feature sections, and footer" is specific.]
□ [Deliverable 2]
□ [Deliverable 3]

Phase 2 — [PHASE NAME]
□ [Deliverable 1]
□ [Deliverable 2]
□ [Deliverable 3]

Total page/asset/deliverable count: [NUMBER]

---

3. EXPLICITLY NOT INCLUDED (OUT OF SCOPE)

The following are NOT included in this project and would require a separate Change Order:

□ [Common expansion item — e.g., "Additional pages beyond those listed above"]
□ [Common expansion item — e.g., "Copywriting or content creation (client provides all text)"]
□ [Common expansion item — e.g., "Ongoing maintenance after project delivery"]
□ [Common expansion item — e.g., "Social media graphics or marketing assets"]
□ [Common expansion item — e.g., "Print or physical deliverables"]
□ Any work not explicitly listed in Section 2

---

4. REVISION POLICY

This project includes [NUMBER] revision rounds per phase.

A revision round is defined as: a single consolidated set of feedback submitted at one time via [email/shared document/etc.].

A revision round is NOT: ongoing drip feedback, redesigns based on change of direction, or feedback submitted in multiple batches.

Additional revisions beyond those included will be billed at $[HOURLY RATE]/hour with a minimum of [1 HOUR] per revision session.

---

5. APPROVAL PROCESS

Client agrees to provide written approval (email is acceptable) for each phase before work on the next phase begins.

If Client does not provide feedback or approval within [NUMBER] business days of receiving work, the work will be considered approved and Freelancer will proceed to the next phase.

---

6. CLIENT RESPONSIBILITIES

For this project to proceed on schedule, Client agrees to:
□ Provide all required materials (content, assets, access credentials) by [DATE]
□ Designate one primary point of contact for all feedback
□ Provide consolidated feedback (not individual team member feedback delivered separately)
□ Respond to approval requests within [NUMBER] business days

Delays caused by Client will extend the project timeline accordingly.

---

7. CHANGE ORDER PROCESS

Any additions to this scope require a written Change Order. Freelancer will provide a Change Order with estimated time and cost for Client's approval before proceeding with out-of-scope work. Verbal requests for additional work are not binding.

Change Order rates: $[HOURLY RATE]/hour or flat project rate as agreed.

---

8. ACCEPTANCE

By proceeding with project payment and/or signing this document, Client acknowledges that they have read and agree to this Scope of Work.

Client: _________________________ Date: _______
[CLIENT NAME]

Freelancer: _________________________ Date: _______
[YOUR NAME]`,
    usageTips: [
      'The "not in scope" list is often more important than the "included" list — think about every way this project could expand and explicitly exclude those expansions',
      'Never start work without written approval on the SOW — "we talked about it" is not enforceable',
      'Add a "client responsibilities" section — missed deadlines from clients are the most common cause of project delays, and this clause gives you cover',
      'Update the SOW version number (v1.0, v1.1, v2.0) every time you make changes — this creates a clear audit trail',
      'For retainers, create a monthly SOW that defines what 10 hours per month actually includes',
      'The "approval within X business days" clause prevents clients from holding projects in limbo indefinitely',
    ],
    commonMistakes: [
      'Assuming the client understands what\'s included — what seems obvious to you is not obvious to them',
      'No explicit exclusions list — without "not included" language, clients assume everything is included',
      'Soft revision language ("unlimited minor tweaks") — this is a scope creep guarantee',
      'No client responsibility clause — makes it impossible to hold clients accountable for delays',
      'Version 1.0 and never updating it — changes discussed verbally need to be captured in an updated SOW or change order',
    ],
    faq: [
      { q: 'What\'s the difference between a scope of work and a contract?', a: 'A contract is the legal agreement covering general terms (payment, IP, dispute resolution, liability). A scope of work defines the specific deliverables and project parameters. They work together: the contract governs the relationship; the SOW governs the specific project. Many freelancers include the SOW as an exhibit to the contract.' },
      { q: 'How specific should deliverables be in a scope of work?', a: 'As specific as possible. Instead of "website design," write "8 responsive web pages designed in Figma including: homepage, about, services, 4 service sub-pages, contact. Each page includes desktop (1440px) and mobile (375px) designs. Final deliverables: Figma source file and exported assets." Specificity prevents disputes.' },
      { q: 'What is a change order?', a: 'A change order is a mini-contract for out-of-scope work. When a client requests something not in the original SOW, you write a change order that describes the addition, the cost, and the timeline impact. Client signs or approves it, you do the work, you invoice for it. Change orders protect you from doing unpaid work while keeping the project moving.' },
      { q: 'Should I charge for creating a scope of work?', a: 'For small projects (under $5,000), typically not — the SOW is part of project setup. For large, complex projects where scoping requires significant discovery work, a paid discovery/scoping phase (usually $500-$2,000) is common and professional. The paid discovery produces the SOW as a deliverable.' },
    ],
    relatedTemplates: ['freelance-contract', 'freelance-proposal', 'freelance-nda'],
  },

  'freelance-nda': {
    name: 'Freelance NDA Template',
    emoji: '🔒',
    badge: 'Confidentiality',
    title: 'Free Freelance NDA Template 2026 | Non-Disclosure Agreement | FreelanceRateIQ',
    description: 'Free mutual NDA template for freelancers. Non-disclosure agreement covering confidential information, trade secrets, and unreleased products. Copy, customize, sign.',
    keywords: ['freelance nda template', 'freelancer non disclosure agreement template', 'nda template free freelance', 'simple nda template freelancer', 'freelance nda 2026'],
    intro: 'Clients sometimes ask freelancers to sign NDAs before sharing details about an unreleased product, proprietary technology, or confidential business strategy. In most cases, this is completely reasonable — and you should be comfortable signing one. This template is a mutual NDA, meaning both parties agree to keep each other\'s confidential information private. This is important: a one-sided NDA that only protects the client leaves your own work and methods unprotected.',
    whenToUse: [
      'A client asks you to sign an NDA before the project begins',
      'You\'re working on an unreleased product, app, or service',
      'You have access to the client\'s trade secrets, pricing, or customer data',
      'You want a standard document ready to send when a client requests one',
    ],
    whatToCustomize: [
      '[PARTY A] — typically the client company',
      '[PARTY B] — you (the freelancer)',
      '[EFFECTIVE DATE] — today\'s date or project start date',
      '[PURPOSE] — the specific project or engagement',
      '[TERM] — how long the NDA lasts (typically 1-3 years)',
      '[GOVERNING STATE] — your home state',
    ],
    templateText: `MUTUAL NON-DISCLOSURE AGREEMENT

This Mutual Non-Disclosure Agreement ("Agreement") is entered into as of [DATE] between [PARTY A NAME] ("Party A") and [PARTY B NAME / YOUR NAME] ("Party B"), collectively referred to as the "Parties."

1. PURPOSE

The Parties wish to explore or engage in [BRIEF DESCRIPTION OF PROJECT / RELATIONSHIP] (the "Purpose"). In connection with the Purpose, each Party may disclose certain confidential information to the other Party.

2. DEFINITION OF CONFIDENTIAL INFORMATION

"Confidential Information" means any information disclosed by one Party (the "Disclosing Party") to the other Party (the "Receiving Party"), either directly or indirectly, in writing, orally, or by inspection of tangible objects, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and circumstances of disclosure.

Confidential Information does not include information that:
(a) Is or becomes publicly known through no breach of this Agreement;
(b) Was rightfully known by the Receiving Party prior to disclosure;
(c) Is rightfully received from a third party without restriction on disclosure;
(d) Is independently developed by the Receiving Party without use of Confidential Information.

3. OBLIGATIONS

Each Party agrees to:
(a) Hold all Confidential Information in strict confidence;
(b) Not disclose Confidential Information to any third party without the prior written consent of the Disclosing Party;
(c) Use the Confidential Information only for the Purpose described above;
(d) Protect the Confidential Information with at least the same degree of care it uses to protect its own confidential information, but no less than reasonable care.

4. PERMITTED DISCLOSURES

A Party may disclose Confidential Information to its employees, contractors, or advisors who: (a) have a need to know for the Purpose, and (b) are bound by confidentiality obligations at least as protective as those in this Agreement.

5. TERM

This Agreement will remain in effect for [ONE YEAR / TWO YEARS / THREE YEARS] from the Effective Date, unless terminated earlier by mutual written agreement. Obligations of confidentiality with respect to Confidential Information disclosed during the term will survive termination for an additional [ONE YEAR].

6. RETURN OF MATERIALS

Upon request by the Disclosing Party, the Receiving Party will promptly return or destroy all materials containing Confidential Information and certify such return or destruction in writing.

7. NO LICENSE

Nothing in this Agreement grants either Party any license or right in the Confidential Information of the other Party except as expressly set forth herein.

8. INJUNCTIVE RELIEF

The Parties acknowledge that breach of this Agreement would cause irreparable harm for which monetary damages would be an inadequate remedy. Either Party may seek injunctive relief in addition to any other remedies available at law or in equity.

9. GOVERNING LAW

This Agreement shall be governed by the laws of the State of [GOVERNING STATE], without regard to conflict of law principles.

10. ENTIRE AGREEMENT

This Agreement constitutes the entire agreement between the Parties with respect to confidentiality and supersedes all prior discussions and agreements relating to the subject matter herein.

AGREED:

Party A: _________________________ Date: _______
[PARTY A NAME / TITLE]

Party B: _________________________ Date: _______
[YOUR NAME]`,
    usageTips: [
      'Always insist on a mutual NDA — a one-sided NDA only protects the client. Your methods, processes, and work deserve protection too.',
      'Read any NDA a client sends before signing — some corporate NDAs have extremely broad language that could prevent you from working in your industry for years',
      'The definition of "confidential information" is the most important clause — make sure it has carve-outs for publicly known information',
      'Standard term for freelance NDAs is 1-2 years. Anything over 3 years warrants scrutiny.',
      'Keep a copy of every NDA you sign — you may need to reference it when evaluating future work',
    ],
    commonMistakes: [
      'Signing a one-sided NDA without pushing back for mutual confidentiality',
      'Not reading the term — some NDAs have 5 or 10-year terms that are unreasonably restrictive',
      'Signing an NDA that covers "all information received" without carve-outs — could prevent you from using your own methods',
      'Not keeping a copy of what you signed — important if you later need to recall what was agreed',
    ],
    faq: [
      { q: 'Do I need to sign an NDA before every freelance project?', a: 'No — most routine freelance projects don\'t require an NDA. NDAs are most relevant when you\'re working with unreleased products, trade secrets, or proprietary processes. For typical web design, content writing, or development work, a good contract with a confidentiality clause is often sufficient.' },
      { q: 'What\'s the difference between an NDA and a confidentiality clause in a contract?', a: 'A confidentiality clause in a contract covers confidentiality within the context of that specific project. A standalone NDA is a separate document, sometimes signed before the project begins, that covers all information exchanged during the relationship. For most freelance work, a confidentiality clause in your contract is sufficient.' },
      { q: 'Can I negotiate an NDA that a client sends me?', a: 'Yes — NDAs are negotiable. If a client\'s NDA is one-sided, has an unreasonably long term, or uses overbroad confidential information definitions, you can propose modifications. Most reasonable clients will agree to a mutual NDA with reasonable terms.' },
      { q: 'What happens if I accidentally breach an NDA?', a: 'First, review what you disclosed and whether it actually qualifies as confidential information under the agreement\'s definition. If it was a genuine breach, inform the client immediately and explain the situation — most NDAs allow for cure of inadvertent disclosure. If there are damages, negotiate a settlement before it becomes a legal matter.' },
    ],
    relatedTemplates: ['freelance-contract', 'freelance-scope-of-work', 'freelance-proposal'],
  },

  'freelance-rate-increase-letter': {
    name: 'Rate Increase Letter Template',
    emoji: '📈',
    badge: 'Charge More',
    title: 'Freelance Rate Increase Letter Template | How to Raise Your Rates | FreelanceRateIQ',
    description: 'Professional email templates for notifying freelance clients of a rate increase. Scripts for 20%, 30%, and 50%+ increases with objection-handling guidance.',
    keywords: ['freelance rate increase letter', 'how to tell clients about rate increase freelance', 'freelance raise rates email template', 'notifying clients of price increase freelance', 'freelance rate increase script'],
    intro: 'Raising your rates is uncomfortable — which is why most freelancers don\'t do it often enough. The result: freelancers with 5 years of experience charging rates they set in year one. This template gives you three scripts for different rate increase levels (moderate, significant, and major) plus objection-handling responses for the most common pushback. The key insight: most clients accept rate increases with no pushback if they\'re communicated professionally, in advance, and with clear reasoning.',
    whenToUse: [
      'Annually — rate increases every 12 months are normal and expected',
      'After you\'ve added significant new skills or expertise',
      'When your workload is fully booked (supply and demand)',
      'When a client\'s project complexity has increased beyond the original scope',
      'When you haven\'t raised rates in 2+ years',
    ],
    whatToCustomize: [
      '[CLIENT NAME] — their first name for the personal version',
      '[CURRENT RATE] — your current rate with this client',
      '[NEW RATE] — your new rate',
      '[PERCENTAGE INCREASE] — calculated percentage',
      '[EFFECTIVE DATE] — at least 30 days from today',
      '[YOUR REASON] — the genuine reason (demand, new skills, market alignment)',
    ],
    templateText: `--- SCRIPT 1: MODERATE INCREASE (10-25%) ---
Subject: Rate Update for [MONTH/YEAR] — [YOUR NAME]

Hi [CLIENT NAME],

I wanted to reach out ahead of our upcoming [PROJECT/RENEWAL/MONTHLY BILLING CYCLE] to let you know that I'll be adjusting my rates starting [DATE].

My current rate of $[CURRENT RATE]/hour will increase to $[NEW RATE]/hour — a [X]% adjustment.

This reflects [REASON: e.g., "increased demand for my services" / "expanded expertise in [skill]" / "alignment with current market rates for [your niche]"].

This new rate will apply to [new projects / all work after the effective date]. Current projects in progress will remain at the existing rate through [completion/date].

I've genuinely appreciated working with you on [specific project or work] and look forward to continuing that. Let me know if you have any questions.

Best,
[YOUR NAME]


--- SCRIPT 2: SIGNIFICANT INCREASE (25-50%) ---
Subject: Service Rate Update — Effective [DATE]

Hi [CLIENT NAME],

I wanted to give you advance notice of an upcoming rate change.

Starting [DATE], my rate will be $[NEW RATE]/hour, up from the current $[CURRENT RATE]/hour. I want to be transparent: this is a [X]% increase, and I recognize that's significant.

Here's the context: [GENUINE EXPLANATION — e.g., "My schedule is fully committed, and I'm restructuring my client roster to focus on a smaller number of engagements where I can do my best work. This rate reflects the current market for [your niche] at [your experience level]" OR "I've invested significantly in [specific skill/tool/certification] over the past year, and this adjustment reflects the expanded value I'm bringing to projects."]

I'd love to continue working with you. If the new rate doesn't work within your current budget, I completely understand — I'm happy to discuss whether a different scope or format might make sense, or to refer you to other strong freelancers at a different rate point.

Please let me know how you'd like to proceed. No decision needed before [DATE — give 2+ weeks].

Best,
[YOUR NAME]


--- SCRIPT 3: MAJOR INCREASE (50%+) OR NEW RELATIONSHIP RATE ---
Subject: Updated Rate for Future Projects

Hi [CLIENT NAME],

I hope things are going well on your end.

I'm reaching out because I'm updating my rates for the coming year, and I wanted to be upfront with you rather than having it come up in a proposal unexpectedly.

My rate going forward will be $[NEW RATE]/[hour/project], which represents a meaningful increase from what I've charged you previously. This reflects where my work has moved — [specific, genuine reason: e.g., "I've narrowed my focus to [specific niche], the demand is significant, and my pricing now reflects that specialization" OR "I've built a strong enough track record and client base that I'm raising my floor rate across all new engagements"].

I genuinely value our work together and want to be transparent about this well in advance. If you have a project you'd like to lock in at the current rate before [DATE], I'm happy to discuss that.

If the new rate isn't workable, I completely understand. I can recommend a few talented freelancers who work at a range of price points.

Looking forward to hearing from you.

Best,
[YOUR NAME]


--- OBJECTION HANDLING ---

OBJECTION: "That's too much of an increase."
RESPONSE: "I understand — it is a significant change. I've kept rates stable for [X years], and this brings them in line with where I need to be for [reason]. I want to keep working with you, so let me ask: is there a version of our work together that would fit within your budget? I could [adjust scope / reduce retainer hours / switch to project-based vs. hourly] — happy to explore options."

OBJECTION: "Our budget is fixed and can't accommodate this."
RESPONSE: "That's helpful to know. I appreciate the transparency. Given the budget constraint, we have two realistic options: (1) I could scope a smaller engagement that fits within your current budget, or (2) I can recommend some strong freelancers who work at a lower rate point. Which would be more helpful?"

OBJECTION: "We've worked together for years — can you give us a loyalty discount?"
RESPONSE: "I really value our working relationship, and I have kept your rate stable for [X years] as a reflection of that. This new rate is what I need to charge going forward. What I can offer is a longer notice period and the guarantee that I'll give your projects priority access to my schedule — that has real value when quality freelancers are booked out."

OBJECTION: [No response at all]
RESPONSE (2 weeks later): "Hi [CLIENT NAME] — just following up to make sure my rate update email landed. Happy to discuss any questions before the effective date of [DATE]. Let me know either way."`,
    usageTips: [
      'Give 30-60 days notice — this is professional courtesy and gives clients time to budget or find alternatives',
      'Be matter-of-fact, not apologetic — you don\'t need to justify a market rate increase extensively. Brief and professional is better than long and defensive',
      'Annual increases are expected in professional services — frame it as a standard annual adjustment, not a major event',
      'Never negotiate against yourself — don\'t preemptively offer a discount in the rate increase announcement',
      'Have a referral ready for clients who genuinely can\'t afford the new rate — it shows good faith and preserves the relationship',
      'For long-term clients you want to keep, consider grandfathering for 90 days before full increase — softens the transition without permanently reducing your rate',
    ],
    commonMistakes: [
      'Not raising rates at all for years, then trying to raise 100% at once — smaller, annual increases are much easier for clients to accept',
      'Over-explaining and apologizing — a long, defensive email signals you don\'t believe you\'re worth the new rate',
      'Giving less than 30 days notice — professional services typically provide 30-60 days on rate changes',
      'Raising rates on active projects mid-engagement — always apply increases to new projects or at natural renewal points',
      'Not sending the email and hoping clients won\'t notice when they get a new invoice — they will notice, and it\'s worse to surprise them',
    ],
    faq: [
      { q: 'How much should I raise my rates each year?', a: 'Industry standard is 5-15% annually for freelancers in established niches. This covers inflation, skill development, and market alignment. If you\'re significantly underpriced relative to your market, a 25-50% correction over 1-2 years is appropriate. Use the FreelanceRateIQ calculator to see where your current rate stands relative to market.' },
      { q: 'What if a client leaves after a rate increase?', a: 'Good. If a client can\'t afford your rate when you\'ve corrected to market, they weren\'t paying you fairly in the first place. Clients who leave at a 20% increase were either undervaluing your work or truly had budget constraints — in either case, you can replace that revenue with a client who pays market rate.' },
      { q: 'Should I raise rates for all clients at once or stagger it?', a: 'Both approaches work. Staggering gives you time to handle any departures before hitting all clients at once. Raising all at once is administratively cleaner. A common approach: raise rates on all new clients immediately, then roll existing clients in at their next project or renewal.' },
      { q: 'How do I raise rates on a client I really like working with?', a: 'The same way you\'d raise rates on any client — professionally and with adequate notice. If you genuinely value the relationship, you can soften the transition with a grandfathering period. But don\'t permanently price one client below market — that resentment eventually damages the relationship more than a rate increase would have.' },
    ],
    relatedTemplates: ['freelance-contract', 'freelance-invoice', 'freelance-proposal'],
  },
}

export async function generateStaticParams() {
  return Object.keys(templates).map((template) => ({ template }))
}

export async function generateMetadata({ params }: { params: Promise<{ template: string }> }): Promise<Metadata> {
  const { template } = await params
  const page = templates[template]
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://freelancerateiq.com/templates/${template}`,
      siteName: 'FreelanceRateIQ',
      type: 'article',
    },
  }
}

const templateNames: Record<string, string> = {
  'freelance-contract': 'Freelance Contract',
  'freelance-invoice': 'Invoice Template',
  'freelance-proposal': 'Project Proposal',
  'freelance-scope-of-work': 'Scope of Work',
  'freelance-nda': 'NDA Template',
  'freelance-rate-increase-letter': 'Rate Increase Letter',
}

export default async function TemplatePage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params
  const page = templates[template]
  if (!page) notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-emerald-400 transition-colors">FreelanceRateIQ</Link>
          <span>›</span>
          <Link href="/templates" className="hover:text-emerald-400 transition-colors">Templates</Link>
          <span>›</span>
          <span className="text-slate-400">{page.name}</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">{page.emoji}</span>
            <div>
              <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium mb-2">{page.badge}</span>
              <h1 className="text-3xl md:text-4xl font-bold">{page.name}</h1>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed">{page.intro}</p>
        </div>

        {/* When to use */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/40 p-5 mb-8">
          <h2 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">When to Use This Template</h2>
          <ul className="space-y-1.5">
            {page.whenToUse.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What to customize */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/40 p-5 mb-8">
          <h2 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">What to Customize</h2>
          <ul className="space-y-1.5">
            {page.whatToCustomize.map((w, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Template */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold">The Template</h2>
            <span className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded">Copy all text below</span>
          </div>
          <div className="bg-slate-900/80 rounded-xl border border-slate-600/40 p-6 font-mono text-sm text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {page.templateText}
          </div>
          <p className="text-slate-500 text-xs mt-2">Select all text above and copy (Ctrl+A / Cmd+A, then Ctrl+C / Cmd+C)</p>
        </div>

        {/* Usage tips */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Pro Tips for Using This Template</h2>
          <div className="space-y-2">
            {page.usageTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700/30">
                <span className="text-amber-400 mt-0.5 flex-shrink-0 text-lg">💡</span>
                <p className="text-sm text-slate-300 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common mistakes */}
        <div className="bg-red-950/20 rounded-2xl border border-red-800/20 p-5 mb-8">
          <h2 className="text-lg font-bold mb-3 text-red-300">⚠️ Common Mistakes to Avoid</h2>
          <ul className="space-y-2">
            {page.commonMistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rate guide upsell */}
        <div className="bg-emerald-900/20 rounded-2xl border border-emerald-600/30 p-6 text-center mb-8">
          <div className="text-2xl mb-2">💰</div>
          <h2 className="text-lg font-bold mb-2">Know What to Put in the Rate Fields</h2>
          <p className="text-slate-400 text-sm mb-4">
            Templates protect you once you have a client. But first you need to know what rates to put in them. The FreelanceRateIQ guide shows you exactly what to charge — by niche, city, and experience level.
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

        {/* Related templates */}
        <div className="p-5 rounded-2xl border border-slate-700/40 bg-slate-800/30 mb-8">
          <h2 className="font-bold mb-3 text-white">More Free Templates</h2>
          <div className="flex flex-wrap gap-3">
            {page.relatedTemplates.map(t => (
              <Link key={t} href={`/templates/${t}`} className="text-sm text-emerald-400 hover:underline">
                {templateNames[t] || t} →
              </Link>
            ))}
            <Link href="/templates" className="text-sm text-slate-500 hover:text-slate-300">All templates →</Link>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/40">
          <p className="text-slate-400 text-sm mb-2">Ready to set your rates? Use the free calculator.</p>
          <Link href="/" className="text-emerald-400 font-semibold hover:underline text-sm">
            Free freelance rate calculator →
          </Link>
        </div>
      </div>
    </div>
  )
}
