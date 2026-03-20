import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type TaxPage = {
  name: string
  emoji: string
  title: string
  description: string
  keywords: string[]
  heroText: string
  intro: string[]
  keyFacts: { label: string; value: string; note?: string }[]
  steps: { title: string; body: string }[]
  mistakes: { title: string; body: string }[]
  calculation: { label: string; value: string; note?: string }[]
  calculationTitle: string
  tips: string[]
  faq: { q: string; a: string }[]
}

const pages: Record<string, TaxPage> = {
  'freelance-tax-guide': {
    name: 'Freelance Tax Guide',
    emoji: '📋',
    title: 'Freelance Tax Guide 2025: How to File Taxes as a Freelancer | FreelanceRateIQ',
    description: 'Complete guide to filing taxes as a freelancer in 2025. Covers self-employment tax, quarterly payments, deductions, forms you need, and how to avoid the most costly mistakes.',
    keywords: ['freelance taxes explained', 'how to file taxes as a freelancer', 'freelance tax guide 2025', 'freelancer taxes complete guide'],
    heroText: 'Filing taxes as a freelancer is fundamentally different from W-2 employment — and most new freelancers get it wrong the first year. This guide covers everything: what you owe, when you owe it, how to reduce it, and how to set your rates to account for it.',
    intro: [
      'When you work as a freelancer, you\'re running a business — even if it feels like just doing some contract work on the side. The IRS treats any self-employment income over $400/year as taxable self-employment income, which means you\'re responsible for both the employee and employer portions of Social Security and Medicare taxes. This self-employment (SE) tax alone adds 15.3% on top of your regular income tax rate.',
      'Unlike a W-2 employee who has taxes withheld automatically, freelancers must estimate and pay their own taxes — typically four times per year through quarterly estimated payments. Failing to do this results in underpayment penalties that add up fast. The IRS charges both a penalty and interest on unpaid quarterly taxes, even if you pay everything when you file your return in April.',
      'The good news: freelancers have access to a much larger suite of deductions than employees. Business expenses, home office, health insurance premiums, retirement account contributions — these can dramatically reduce your taxable income. A well-organized freelancer with good records can reduce their effective tax rate significantly compared to what the raw numbers suggest.',
      'Understanding your tax obligations isn\'t just about compliance — it\'s essential for setting your rates correctly. If you price your services without accounting for SE tax, quarterly payments, and the higher cost of self-employed health insurance, you\'re effectively working for a lot less than you think. This guide gives you the full picture so you can price confidently.',
    ],
    keyFacts: [
      { label: 'SE Tax Rate', value: '15.3%', note: 'On net self-employment income (12.4% SS + 2.9% Medicare)' } as { label: string; value: string; note?: string },
      { label: 'SE Tax Threshold', value: '$400', note: 'Any net self-employment income above $400 triggers SE tax' } as { label: string; value: string; note?: string },
      { label: 'Social Security Wage Base', value: '$168,600 (2024)', note: 'SS tax (12.4%) only applies to income below this amount' } as { label: string; value: string; note?: string },
      { label: 'Medicare Surtax', value: '0.9%', note: 'Additional Medicare tax on income over $200K (single) or $250K (MFJ)' } as { label: string; value: string; note?: string },
      { label: 'Quarterly Due Dates', value: 'Apr 15, Jun 15, Sep 15, Jan 15', note: 'Estimated tax payment deadlines for the calendar year' } as { label: string; value: string; note?: string },
      { label: 'SE Deduction', value: '50% of SE tax', note: 'You can deduct half of your SE tax from gross income' } as { label: string; value: string; note?: string },
    ],
    steps: [
      { title: 'Track every dollar of income and every business expense', body: 'Open a dedicated business checking account and use it exclusively for freelance income and expenses. This single habit eliminates 90% of tax headaches. Use accounting software (Wave is free, QuickBooks Self-Employed is ~$15/mo) to categorize everything automatically.' },
      { title: 'Calculate your estimated quarterly taxes', body: 'Each quarter, estimate your net profit (revenue minus expenses) and pay 25-30% of it to the IRS. Use IRS Form 1040-ES to calculate the safe harbor amount. Most freelancers aim to pay 100-110% of prior year\'s tax liability across four quarterly payments to avoid penalties.' },
      { title: 'Pay quarterly taxes by the deadlines', body: 'Q1 (Jan-Mar) due April 15; Q2 (Apr-May) due June 15; Q3 (Jun-Aug) due September 15; Q4 (Sep-Dec) due January 15 of the following year. Pay via the IRS Direct Pay system at irs.gov or through EFTPS. Set calendar reminders — missing even one deadline triggers penalties.' },
      { title: 'Maximize your business deductions', body: 'Every legitimate business expense reduces your taxable income dollar-for-dollar. Common freelance deductions include: home office, computer and equipment, software subscriptions, internet service, professional development, health insurance premiums (if self-employed), and retirement contributions. Keep receipts for everything.' },
      { title: 'File Schedule C with your Form 1040', body: 'Schedule C (Profit or Loss from Business) is the form that reports your freelance income and deductions. Your net profit from Schedule C flows to your Form 1040 and is also the basis for calculating Schedule SE (self-employment tax). If you operate under an LLC, you still file Schedule C unless taxed as an S-corp.' },
      { title: 'Consider an S-corp election if you earn over $60-80K net', body: 'Once your net self-employment income exceeds roughly $60,000-80,000/year, the SE tax savings from an S-corp election (where you pay yourself a reasonable salary and take the rest as distributions) can exceed the cost of additional accounting. Consult a CPA before doing this — it adds complexity.' },
      { title: 'Work with a CPA who understands freelancers', body: 'A good freelance-savvy CPA pays for themselves many times over. They\'ll find deductions you missed, optimize your quarterly payment strategy, and advise on structure. Expect to pay $300-800/year for freelance-focused tax prep — a worthwhile investment against a $10,000+ tax bill.' },
    ],
    mistakes: [
      { title: 'Not paying quarterly estimated taxes', body: 'This is the #1 mistake new freelancers make. They earn money all year, skip the quarterly payments thinking they\'ll just pay at tax time — then face both a large tax bill AND an underpayment penalty in April. The IRS charges around 8% annual interest on underpaid quarterly taxes as of 2024.' },
      { title: 'Failing to save for taxes throughout the year', body: 'The standard advice is to set aside 25-30% of every freelance payment in a dedicated tax savings account. Don\'t spend money you haven\'t paid taxes on yet. Some freelancers target 30-35% to create a buffer for state taxes too.' },
      { title: 'Missing deductions for lack of documentation', body: 'The IRS requires substantiation for business expense deductions. Verbal estimates and mental notes don\'t hold up in an audit. Use an app to photograph receipts immediately, keep business and personal expenses strictly separated, and maintain a mileage log if you drive for business.' },
      { title: 'Not deducting the home office when you qualify', body: 'Many freelancers skip the home office deduction out of fear of triggering an audit (a myth for legitimately-used spaces) or confusion about how to calculate it. If you have a dedicated space used regularly and exclusively for your freelance business, the home office deduction can save you $500-3,000+/year.' },
      { title: 'Ignoring retirement contributions as a tax strategy', body: 'A SEP-IRA lets you contribute up to 25% of net self-employment income (max $66,000 for 2023). A Solo 401(k) allows even more. Every dollar you contribute reduces your taxable income dollar-for-dollar — and also reduces your SE tax base. A $20,000 SEP-IRA contribution can cut your tax bill by $6,000-8,000+.' },
    ],
    calculationTitle: 'Tax Calculation: $100K Freelancer',
    calculation: [
      { label: 'Gross freelance revenue', value: '$100,000' },
      { label: 'Business deductions (estimated)', value: '−$12,000', note: 'Home office, equipment, software, professional dev' },
      { label: 'Net self-employment income', value: '$88,000' },
      { label: 'SE tax deduction (50% of SE tax)', value: '−$6,217', note: '50% × 14.13% × $88,000' },
      { label: 'SEP-IRA contribution', value: '−$15,000', note: 'Optional but highly recommended' },
      { label: 'Adjusted gross income', value: '$66,783' },
      { label: 'Standard deduction (2024)', value: '−$14,600' },
      { label: 'Taxable income', value: '$52,183' },
      { label: 'Federal income tax (22% bracket)', value: '$6,652', note: 'Approximate; uses marginal rates' },
      { label: 'Self-employment tax', value: '$12,434', note: '14.13% × $88,000' },
      { label: 'Total federal tax', value: '$19,086' },
      { label: 'Effective federal rate', value: '19.1%', note: 'Of gross $100K revenue' },
    ],
    tips: [
      'Open a dedicated business checking account from day one — this single habit eliminates 90% of tax complications and creates a clean paper trail.',
      'Automate your quarterly tax savings: set up an automatic transfer of 28% of every client payment to a dedicated savings account labeled "Taxes."',
      'Use the "prior year safe harbor" rule: if you pay at least 100% of your prior year\'s total tax liability in four equal quarterly installments, the IRS cannot penalize you even if you owe more at year-end.',
      'The SE tax deduction (50% of your SE tax) reduces your taxable income — don\'t miss it. It\'s automatically calculated on Schedule SE and flows to Form 1040 Schedule 1.',
      'Your freelance rate should be 35-40% higher than an equivalent W-2 salary to account for SE taxes, no employer benefits, and business overhead. Use the FreelanceRateIQ calculator to find your number.',
    ],
    faq: [
      { q: 'Do I need to file taxes if I only made a small amount freelancing?', a: 'If your net self-employment income (revenue minus expenses) exceeds $400 in a year, you\'re required to file and pay SE tax. This threshold is very low intentionally — the IRS wants freelancers paying into Social Security and Medicare from the start. Even small side income triggers the filing requirement.' },
      { q: 'What\'s the difference between gross income and net self-employment income for tax purposes?', a: 'Gross income is everything your clients paid you. Net self-employment income is gross minus legitimate business deductions. SE tax is calculated on your net SE income (technically 92.35% of net SE income). This means your deductions reduce both your income tax AND your SE tax — a powerful double benefit.' },
      { q: 'Can I deduct my health insurance premiums as a freelancer?', a: 'Yes — self-employed individuals can deduct 100% of health, dental, and long-term care insurance premiums for themselves and their family as an above-the-line deduction on Form 1040. This is one of the most valuable deductions available to freelancers. The deduction is limited to your net self-employment income.' },
      { q: 'What happens if I miss a quarterly tax payment?', a: 'The IRS charges an underpayment penalty calculated at the federal short-term interest rate plus 3 percentage points (roughly 8% annualized as of 2024) on the amount that was underpaid, for the period it was underpaid. You\'ll also owe the full tax when you file. The penalty is calculated on Form 2210 and added to your tax bill.' },
    ],
  },

  'self-employment-tax': {
    name: 'Self-Employment Tax',
    emoji: '💼',
    title: 'Self-Employment Tax Rate 2025: What Freelancers Actually Owe | FreelanceRateIQ',
    description: 'The complete guide to self-employment tax for freelancers. Covers the SE tax rate, how to calculate it, the SE tax deduction, and how a $100K freelancer computes their SE tax bill.',
    keywords: ['self employment tax rate', 'self employment tax calculator freelance', 'self employed tax 2025', 'how to calculate self employment tax'],
    heroText: 'Self-employment tax is the single biggest tax surprise for new freelancers — a 15.3% charge on top of regular income tax that W-2 employees never think about because their employer pays half. Here\'s exactly how it works and how to minimize it.',
    intro: [
      'Self-employment (SE) tax is the freelancer\'s version of FICA taxes — Social Security and Medicare contributions that every worker pays. When you\'re an employee, you pay 7.65% and your employer pays the matching 7.65%. When you\'re self-employed, you pay both halves: 15.3% of your net self-employment income.',
      'The SE tax rate breaks down as 12.4% for Social Security (on income up to $168,600 in 2024) and 2.9% for Medicare (on all income). If your net self-employment income exceeds $200,000 as a single filer or $250,000 married filing jointly, an additional 0.9% Medicare surtax applies to the excess. These rates apply to 92.35% of your net SE income (not 100%) due to the way the IRS structures the calculation.',
      'The practical impact is significant. A freelancer earning $100,000 net faces roughly $14,130 in SE tax before even touching income taxes. This is why freelancers often talk about needing to charge 35-40% more than an equivalent W-2 employee to actually take home the same amount — SE taxes are a core part of that gap.',
      'The saving grace: you can deduct half of your SE tax from your gross income when calculating your adjusted gross income (AGI). This deduction — automatically calculated on Schedule SE — reduces the income tax you owe, partially offsetting the SE tax burden. It doesn\'t reduce the SE tax itself, but it does reduce the overall tax bill.',
    ],
    keyFacts: [
      { label: 'Total SE Tax Rate', value: '15.3%' },
      { label: 'Social Security Portion', value: '12.4%', note: 'On income up to $168,600 (2024)' } as { label: string; value: string; note?: string },
      { label: 'Medicare Portion', value: '2.9%', note: 'On all net SE income, no cap' } as { label: string; value: string; note?: string },
      { label: 'Additional Medicare', value: '0.9%', note: 'On income over $200K (single) / $250K (MFJ)' } as { label: string; value: string; note?: string },
      { label: 'SE Tax Base', value: '92.35% of net SE income', note: 'Not 100% — this is how the IRS structures the calc' } as { label: string; value: string; note?: string },
      { label: 'SE Tax Deduction', value: '50% deductible from AGI', note: 'Half of SE tax reduces your taxable income' } as { label: string; value: string; note?: string },
    ],
    steps: [
      { title: 'Calculate your net self-employment income', body: 'Start with all 1099/freelance revenue. Subtract all legitimate business deductions (home office, equipment, software, professional development, etc.). The result is your net SE income, which is what SE tax is calculated on.' },
      { title: 'Multiply net SE income by 92.35%', body: 'This gives you the "SE tax base." The IRS allows this 7.65% reduction because employers can deduct the employer half of FICA as a business expense — this is the equivalent adjustment for self-employed individuals.' },
      { title: 'Multiply the SE tax base by 15.3%', body: 'This is your SE tax. For a freelancer with $88,000 net SE income: $88,000 × 92.35% = $81,268 × 15.3% = $12,434 in SE tax.' },
      { title: 'Check the Social Security wage base', body: 'In 2024, only the first $168,600 of SE income is subject to the 12.4% Social Security portion. If you earn more than that, the 2.9% Medicare tax continues on all income. This cap is adjusted annually for inflation.' },
      { title: 'Calculate the SE tax deduction', body: 'Divide your total SE tax by 2. This amount is deductible from your gross income when calculating AGI. For $12,434 in SE tax, you get a $6,217 above-the-line deduction — reducing your income tax bill.' },
      { title: 'Complete Schedule SE', body: 'Schedule SE (Self-Employment Tax) is attached to your Form 1040 and does these calculations automatically. Fill out Part I for most freelancers. The net SE tax from Schedule SE flows to your Form 1040 as additional tax, and the deduction flows to Schedule 1.' },
      { title: 'Pay via quarterly estimated taxes throughout the year', body: 'SE tax is included in your quarterly estimated tax payments. Don\'t wait until April — include an estimate of your SE tax liability in each quarterly payment to avoid underpayment penalties.' },
    ],
    mistakes: [
      { title: 'Calculating SE tax on gross revenue instead of net income', body: 'Your SE tax is on net self-employment income — after business deductions. If you earned $100K but spent $12K on legitimate business expenses, your SE tax base is $88K × 92.35% = $81,268, not $100K. Every deductible expense reduces both income tax AND SE tax.' },
      { title: 'Forgetting the 92.35% multiplier', body: 'SE tax is not simply 15.3% of net income — it\'s 15.3% of 92.35% of net income. This nuance reduces your SE tax slightly (by about 1.2% of net income). While small, it\'s important for accurate quarterly payment estimates.' },
      { title: 'Missing the SE tax deduction on Form 1040', body: 'Half of your SE tax is deductible from gross income. This is an above-the-line deduction (you get it even if you take the standard deduction) that reduces your federal income tax. It\'s calculated on Schedule SE and automatically flows to Schedule 1 Line 15.' },
      { title: 'Not accounting for state SE-equivalent taxes', body: 'Several states have their own self-employment or business income taxes. California, for example, has a 1.5% self-employment tax on net SE income. Research your state\'s requirements and add them to your estimated quarterly payments.' },
      { title: 'Ignoring the S-corp strategy for high earners', body: 'Once net SE income exceeds roughly $60,000-80,000, forming an S-corp and paying yourself a reasonable salary can save thousands in SE tax annually. The distributions you take above your salary are NOT subject to SE tax. At $150K net, this strategy can save $5,000-15,000/year in SE taxes.' },
    ],
    calculationTitle: 'SE Tax Calculation: $100K Freelancer',
    calculation: [
      { label: 'Gross freelance revenue', value: '$100,000' },
      { label: 'Business deductions', value: '−$12,000' },
      { label: 'Net self-employment income', value: '$88,000' },
      { label: '× 92.35% (SE tax base)', value: '$81,268' },
      { label: '× 15.3% (SE tax rate)', value: '$12,434', note: 'Your total SE tax' },
      { label: 'Social Security portion (12.4%)', value: '$10,077', note: 'On $81,268 (all below $168,600 cap)' },
      { label: 'Medicare portion (2.9%)', value: '$2,357', note: 'On all $81,268' },
      { label: 'SE tax deduction (÷ 2)', value: '$6,217', note: 'Reduces your AGI, saving you ~$1,367 in income tax at 22% bracket' },
      { label: 'Net SE tax cost (after deduction benefit)', value: '~$11,067', note: 'Actual out-of-pocket impact after income tax savings' },
    ],
    tips: [
      'Think of SE tax as the "freelancer premium" — you need to charge ~15% more than W-2 market rates just to break even on this one tax. Factor it into every rate you quote.',
      'The S-corp election is the most powerful legal SE tax reduction strategy for freelancers earning over $80K net. Get a CPA consult before filing Form 2553 — timing and salary levels matter.',
      'Business deductions reduce both your income tax AND your SE tax. Each dollar of deduction saves you roughly 15.3% in SE tax plus your marginal income tax rate — a combined savings of 37-52%+ on each deductible dollar.',
      'Use the IRS EFTPS (Electronic Federal Tax Payment System) at eftps.gov for easy, trackable quarterly payments. Set up auto-pay to never miss a deadline.',
      'Your SE tax contributions count toward your Social Security benefit calculation. Higher SE income means a higher future Social Security benefit — so you\'re not just paying a tax, you\'re building future retirement income.',
    ],
    faq: [
      { q: 'Is self-employment tax the same as income tax?', a: 'No — they\'re separate taxes. SE tax (15.3%) funds Social Security and Medicare. Income tax (10-37% federal plus state) funds general government. You owe both on your freelance income. SE tax is calculated on Schedule SE; income tax on the main Form 1040 rate schedule. Together they determine your total federal tax bill.' },
      { q: 'What is the 92.35% multiplier in the SE tax calculation?', a: 'The IRS applies the SE tax to 92.35% of net self-employment income rather than 100%. This is because when you\'re an employee, the employer\'s half of FICA is a deductible business expense for the employer. The 92.35% factor gives self-employed individuals the equivalent adjustment — effectively excluding from the SE tax base the amount that an employer would deduct.' },
      { q: 'Do I owe SE tax on all freelance income or just profit?', a: 'SE tax is on net self-employment income — profit after business deductions. Revenue minus legitimate business expenses equals net SE income. This is a key distinction: a freelancer who earns $100K but has $20K in real business expenses owes SE tax on $80K, not $100K. Every deduction is doubly valuable because it reduces both income tax and SE tax.' },
      { q: 'How does S-corp election reduce self-employment tax?', a: 'When you elect S-corp status, your business pays you a reasonable W-2 salary and any remaining profit comes out as a shareholder distribution. The W-2 salary portion is subject to normal FICA taxes (7.65% employee + 7.65% employer). But the distributions above the salary are NOT subject to SE tax. If you pay yourself $60K salary on $120K net profit, you pay FICA only on $60K instead of $120K — saving roughly $9,180 in SE tax minus the additional accounting costs.' },
    ],
  },

  'quarterly-taxes': {
    name: 'Quarterly Estimated Taxes',
    emoji: '📅',
    title: 'Quarterly Estimated Taxes for Freelancers 2025 | FreelanceRateIQ',
    description: 'Complete guide to quarterly estimated taxes for freelancers. Due dates, how to calculate what you owe, safe harbor rules, and how to avoid underpayment penalties.',
    keywords: ['quarterly estimated taxes freelancer', 'how to pay quarterly taxes', 'estimated tax payments 2025', 'freelancer quarterly tax deadlines'],
    heroText: 'Quarterly taxes are the part of freelancing nobody warns you about until April arrives with a nasty surprise. Here\'s exactly how to calculate them, when to pay them, and how to never owe a penalty.',
    intro: [
      'As a freelancer, you don\'t have an employer withholding taxes from each paycheck — so the IRS requires you to "pay as you go" by making four estimated tax payments throughout the year. These quarterly payments cover both your federal income tax and self-employment tax on income earned during that period. Fail to pay them, and the IRS charges an underpayment penalty plus interest on what you should have paid.',
      'The quarterly system exists because the US tax system is pay-as-you-earn. The IRS doesn\'t want to wait until April 15 to collect taxes on income earned the previous January. For employees, withholding handles this automatically. For freelancers, estimated payments are the equivalent mechanism — and getting them roughly right throughout the year is how you avoid a painful surprise at tax time.',
      'The good news is that the quarterly payment rules have a built-in safety net called the "safe harbor" rule. If you pay at least 100% of your prior year\'s total tax liability (or 110% if your prior year income was over $150K) across four equal quarterly payments, the IRS cannot penalize you even if you ultimately owe more when you file your return. This makes the calculation straightforward for most freelancers who had a prior year of tax history.',
      'Getting quarterly taxes right also helps with cash flow planning. Freelancers who don\'t track their income throughout the year often discover they\'ve been spending money they should have set aside for taxes. A simple system — moving 28-30% of every payment received into a dedicated tax savings account — combined with the quarterly payment schedule keeps you on track year-round.',
    ],
    keyFacts: [
      { label: 'Q1 Due Date', value: 'April 15', note: 'Income earned January 1 – March 31' } as { label: string; value: string; note?: string },
      { label: 'Q2 Due Date', value: 'June 15', note: 'Income earned April 1 – May 31' } as { label: string; value: string; note?: string },
      { label: 'Q3 Due Date', value: 'September 15', note: 'Income earned June 1 – August 31' } as { label: string; value: string; note?: string },
      { label: 'Q4 Due Date', value: 'January 15 (next year)', note: 'Income earned September 1 – December 31' } as { label: string; value: string; note?: string },
      { label: 'Safe Harbor Rule', value: '100% of prior year tax', note: 'Or 110% if prior year income > $150K' } as { label: string; value: string; note?: string },
      { label: 'Underpayment Penalty Rate', value: '~8% annualized (2024)', note: 'Federal short-term rate + 3%; charged on unpaid amounts' } as { label: string; value: string; note?: string },
    ],
    steps: [
      { title: 'Determine your payment method: safe harbor or current year estimate', body: 'Safe harbor: pay 25% of last year\'s total tax liability each quarter. This eliminates penalty risk regardless of income changes. Current year estimate: track income quarterly and pay 25-30% of estimated net profit. Better if income dropped from last year, or if this is your first year freelancing (no prior year baseline).' },
      { title: 'Calculate the safe harbor amount from your prior return', body: 'Find your total tax from last year\'s Form 1040 (line 24). Divide by 4. If your prior year income was over $150,000, multiply by 110% before dividing by 4. Pay this amount by each quarterly deadline. This is the simplest, most reliable method for consistent earners.' },
      { title: 'Track income and expenses throughout each quarter', body: 'If using the current-year estimate method, update your projections monthly. Net income × 28-30% = estimated quarterly payment. Adjust up or down based on actual results. Keep a running P&L spreadsheet or use accounting software to make this easy.' },
      { title: 'Pay via IRS Direct Pay or EFTPS', body: 'IRS Direct Pay (irs.gov/payments) allows one-time payments with no registration. EFTPS (eftps.gov) requires registration but allows scheduling future payments and viewing payment history. Both are free, instant, and create a clear paper trail. Avoid mailing checks — it\'s slower and harder to track.' },
      { title: 'Don\'t forget state quarterly taxes', body: 'Most states with an income tax require quarterly estimated payments too. State due dates usually align with federal dates but verify at your state\'s tax agency website. Failing to pay state estimated taxes triggers separate state underpayment penalties.' },
      { title: 'Adjust payments if your income changes significantly mid-year', body: 'If you land a big project in Q3 or lose clients in Q2, update your estimates. You can "catch up" by paying more in a later quarter, but you may still owe penalty on the earlier underpaid quarter. The IRS annualizes each quarter separately.' },
      { title: 'Reconcile at year-end and file on time', body: 'Your quarterly payments are credited against your final tax liability when you file Form 1040. If you overpaid, you receive a refund. If you underpaid, you owe the difference (plus any penalty). File by April 15 (or extend to October 15, though extension doesn\'t extend the payment deadline).' },
    ],
    mistakes: [
      { title: 'Skipping quarterly payments and hoping to pay everything in April', body: 'This is the most common and expensive mistake. The IRS penalizes underpaid quarterly taxes separately from any tax owed at filing. You can owe a penalty even if you pay everything by April 15. The penalty accrues from the date each quarterly payment was due.' },
      { title: 'Not adjusting payments for a high-income year', body: 'If you\'re having a much better year than expected, the safe harbor amount (based on last year\'s lower income) may not be enough to avoid a large tax bill in April — though it does prevent the penalty. Consider making "top-up" payments throughout the year to avoid a cash flow shock.' },
      { title: 'Forgetting the Q4 payment due in January', body: 'The fourth quarterly payment is due January 15 of the following year — not December 31, not April 15. Many freelancers forget this because the holidays disrupt their routine. Set a calendar reminder for January 10 to give yourself a few days to calculate and pay.' },
      { title: 'Not accounting for state quarterly payments', body: 'Federal and state quarterly taxes are separate obligations with separate payment systems. California (FTB), New York (DTF), Texas (no state income tax), etc. all have their own systems. Missing state quarterly payments triggers state-level penalties in addition to federal ones.' },
      { title: 'Calculating payments on gross revenue instead of estimated net profit', body: 'Your quarterly payment should be based on estimated taxable income — net profit after deductions, minus the SE tax deduction, minus any retirement contributions. Overpaying gives you a refund but costs you cash flow. Underpaying triggers penalties.' },
    ],
    calculationTitle: 'Quarterly Tax Calculation: $100K Annual Freelancer',
    calculation: [
      { label: 'Estimated annual gross revenue', value: '$100,000' },
      { label: 'Estimated annual deductions', value: '−$12,000' },
      { label: 'Estimated net SE income', value: '$88,000' },
      { label: 'SE tax (15.3% × 92.35%)', value: '$12,434' },
      { label: 'SE tax deduction', value: '−$6,217' },
      { label: 'Estimated taxable income', value: '$69,783', note: 'After standard deduction of $14,600' },
      { label: 'Estimated federal income tax', value: '$9,032', note: 'At marginal rates for single filer' },
      { label: 'Total estimated annual tax', value: '$21,466' },
      { label: 'Quarterly payment (÷ 4)', value: '$5,367', note: 'Per quarter via IRS Direct Pay' },
      { label: 'Monthly savings needed', value: '$1,789', note: 'Set aside this amount each month' },
    ],
    tips: [
      'Set up an automatic transfer of 28% of every client payment to a dedicated "Taxes" savings account the same day you receive it — this is the simplest system and it works.',
      'Schedule all four quarterly payment dates in your calendar at the start of each year with a 5-day advance reminder. Missing a deadline by one day still triggers a penalty.',
      'In your first year freelancing, use the current-year estimate method since you have no prior year baseline. Keep it simple: estimate quarterly profit and pay 28-30% of it.',
      'If a payment deadline falls on a weekend or legal holiday, the due date moves to the next business day. Check the IRS website at the start of each year to confirm the exact dates.',
      'EFTPS (eftps.gov) lets you schedule all four quarterly payments at once in January — set it and forget it for the entire year. You can modify payments later if income changes dramatically.',
    ],
    faq: [
      { q: 'What happens if I miss a quarterly tax payment?', a: 'The IRS charges an underpayment penalty on the amount that was due, calculated from the due date until the actual payment date. As of 2024, the rate is approximately 8% annualized (the federal short-term interest rate plus 3%). The penalty is calculated on IRS Form 2210 and added to your tax bill when you file. Paying late is better than never paying — stop the penalty clock as soon as possible.' },
      { q: 'Do I need to make quarterly payments if I only freelance part-time?', a: 'You need to make quarterly estimated payments if you expect to owe at least $1,000 in federal taxes after subtracting withholding and refundable credits. If you have a full-time job with withholding and only do a small amount of freelancing, your W-2 withholding may cover the freelance tax too — but check the math to be sure.' },
      { q: 'Can I pay more than four times per year?', a: 'Yes — the IRS accepts payments at any time. Many freelancers pay monthly or even after each major client payment to keep their savings account accurate. Overpaying is fine (you\'ll get a refund); underpaying triggers penalties. Paying more frequently than quarterly just reduces the risk of underpaying a single quarter.' },
      { q: 'What is the "annualized income installment method"?', a: 'This is an alternative to the safe harbor method for freelancers with highly seasonal income. Instead of paying equal quarterly amounts, you annualize your actual income each quarter and pay the corresponding tax. This prevents overpaying early in the year when income is low and underpaying late in the year when income spikes. Calculated on IRS Form 2210 Schedule AI.' },
    ],
  },

  'freelance-tax-deductions': {
    name: 'Freelance Tax Deductions',
    emoji: '✂️',
    title: 'Freelance Tax Deductions 2025: What You Can Write Off | FreelanceRateIQ',
    description: 'The complete list of freelance tax deductions for 2025. What expenses you can write off, how to document them, and strategies for maximizing your deductions legally.',
    keywords: ['freelance tax deductions', 'what can a freelancer write off', 'freelancer deductions 2025', 'self employed tax write offs'],
    heroText: 'Every dollar you spend running your freelance business is a dollar the IRS shouldn\'t tax. Most freelancers leave thousands in deductions on the table every year because they don\'t know what\'s deductible or how to document it. Here\'s the complete playbook.',
    intro: [
      'Tax deductions are one of the most powerful advantages of freelancing over W-2 employment. As a self-employed person, you can deduct any "ordinary and necessary" business expense from your income before calculating taxes. This reduces your taxable income — and since deductions cut both your income tax and your self-employment tax, each deductible dollar is worth more than it looks.',
      'The IRS standard for business deductions is "ordinary and necessary": the expense must be common in your type of business, and it must be helpful and appropriate for your business (not personal luxury). The key word is "business" — expenses must have a legitimate business purpose. Mixed-use expenses (like a home internet connection used for both work and personal browsing) are typically deductible in proportion to their business use.',
      'Documentation is everything. The IRS requires substantiation for all deductions above minimal thresholds. Receipts, bank statements, credit card statements, and invoices are all acceptable. For expenses like business meals, you also need to document the business purpose and who was present. A good habit: photograph receipts immediately with your phone and sync to cloud storage.',
      'Freelance deductions fall into several main categories: business operations (software, equipment, supplies), workspace (home office), transportation, professional development, health costs, and retirement contributions. Understanding all of them — and making sure you\'re capturing every legitimate expense — can reduce a $100K freelancer\'s tax bill by $3,000-8,000+ annually.',
    ],
    keyFacts: [
      { label: 'Home Office Simplified Rate', value: '$5/sq ft', note: 'Up to 300 sq ft = max $1,500 deduction' } as { label: string; value: string; note?: string },
      { label: 'Section 179 Expensing', value: 'Up to $1.16M (2023)', note: 'Deduct full cost of qualifying equipment in year of purchase' } as { label: string; value: string; note?: string },
      { label: 'Bonus Depreciation', value: '60% (2024)', note: 'Phases down: 60% in 2024, 40% in 2025, 20% in 2026' } as { label: string; value: string; note?: string },
      { label: 'Meals Deduction', value: '50%', note: 'Business meals with clients or while traveling for work' } as { label: string; value: string; note?: string },
      { label: 'Health Insurance Deduction', value: '100%', note: 'Self-employed health/dental/LTC premiums (limited to SE net income)' } as { label: string; value: string; note?: string },
      { label: 'SEP-IRA Max Contribution', value: '$66,000 (2023)', note: 'Or 25% of net SE income, whichever is less' } as { label: string; value: string; note?: string },
    ],
    steps: [
      { title: 'Set up a dedicated business checking account and credit card', body: 'All business income and expenses should flow through dedicated accounts. This is the foundation of good deduction tracking. Never mix personal and business expenses in the same account — it creates a documentation nightmare and makes legitimate deductions harder to prove.' },
      { title: 'Claim the home office deduction if you qualify', body: 'If you have a space used regularly and exclusively for business, you can deduct either $5/sq ft (simplified method, up to 300 sq ft) or the actual percentage of your home\'s expenses (mortgage interest/rent, utilities, insurance) that your office space represents. Regular and exclusive use is required — a desk in your bedroom corner doesn\'t qualify, but a dedicated room does.' },
      { title: 'Deduct all equipment and technology', body: 'Computers, monitors, tablets, phones (business use %, cameras, microphones, desks, chairs — all deductible. Under Section 179, you can deduct the full purchase price in the year you buy it rather than depreciating over multiple years. Keep purchase receipts and document business purpose.' },
      { title: 'Track all software and subscription expenses', body: 'Every software subscription used for your business is deductible: Adobe Creative Suite, Figma, Notion, Slack, Zoom, QuickBooks, project management tools, cloud storage, domain names, web hosting, email marketing tools, LinkedIn Premium. These often add up to $1,000-3,000+/year for active freelancers.' },
      { title: 'Deduct professional development and education', body: 'Online courses, books, conferences, seminars, professional certifications — all deductible if related to your current freelance work. Note: education for a new career doesn\'t qualify, but education to improve skills in your existing freelance work does. Udemy, Coursera, books from Amazon, conference tickets — keep the receipts.' },
      { title: 'Capture health insurance and retirement contributions', body: 'If you pay your own health insurance (not covered by a spouse\'s employer plan), 100% of premiums are deductible from AGI. SEP-IRA and Solo 401(k) contributions reduce both income tax and SE tax basis. These two deductions alone can save a $100K freelancer $5,000-10,000/year in taxes.' },
      { title: 'Don\'t forget business insurance, banking fees, and professional services', body: 'Business liability insurance, E&O insurance, banking fees on your business account, payment processing fees (Stripe, PayPal charges), accounting software, your CPA\'s fees — all deductible. Even the cost of this guide (if it helps your freelance business) is a deductible business expense.' },
    ],
    mistakes: [
      { title: 'Skipping the home office deduction out of audit fear', body: 'The myth that home office deductions trigger audits is outdated. The IRS uses sophisticated data matching and the home office deduction is well-established for self-employed individuals. If you legitimately use a dedicated space exclusively for business, claim it. The savings are real: a 150 sq ft office saves $750 under the simplified method, or potentially much more under the actual expense method.' },
      { title: 'Not deducting partial business use of mixed-use items', body: 'Your cell phone, home internet, and car have both personal and business uses. Deduct the business-use percentage — typically 50-80% for a freelancer who uses these primarily for work. Document your calculation: "I use my phone 70% for business based on call logs and usage analysis." You don\'t need perfection, just a reasonable, documented estimate.' },
      { title: 'Missing the self-employed health insurance deduction', body: 'Paying $600/month in health insurance? That\'s $7,200/year deductible from your AGI — saving a freelancer in the 22% bracket $1,584 in income tax alone. The deduction is claimed on Schedule 1 Line 17, not on Schedule C. It doesn\'t require itemizing. Many freelancers miss this because it\'s not on the obvious form.' },
      { title: 'Failing to document the business purpose of expenses', body: 'The IRS doesn\'t just want receipts — they want context. For meals, document who attended and the business purpose. For travel, document the business reason. For equipment, note which business projects it supports. Create a simple habit: when you log an expense, add a one-sentence note about its business purpose.' },
      { title: 'Not deducting retirement contributions made before tax filing', body: 'SEP-IRA contributions can be made up until the tax filing deadline (including extensions) for the prior year. This means in April, a freelancer can open a SEP-IRA and contribute money that reduces their prior year\'s tax liability. A $20,000 SEP-IRA contribution made in March can reduce a prior-year tax bill by $4,400-10,000+.' },
    ],
    calculationTitle: 'Deduction Impact: $100K Freelancer',
    calculation: [
      { label: 'Gross revenue', value: '$100,000' },
      { label: 'Home office (150 sq ft simplified)', value: '−$750' },
      { label: 'Computer & equipment', value: '−$2,500' },
      { label: 'Software subscriptions', value: '−$1,800' },
      { label: 'Internet (70% business use)', value: '−$840' },
      { label: 'Phone (60% business use)', value: '−$720' },
      { label: 'Professional development', value: '−$1,200' },
      { label: 'Business insurance', value: '−$600' },
      { label: 'Professional services (CPA, etc.)', value: '−$500' },
      { label: 'Miscellaneous supplies/expenses', value: '−$500' },
      { label: 'Total deductions (Schedule C)', value: '−$9,410' },
      { label: 'Net SE income', value: '$90,590' },
      { label: 'Tax savings vs. no deductions (at ~38% combined rate)', value: '~$3,576', note: 'Income tax + SE tax savings' },
    ],
    tips: [
      'Every legitimate deduction saves you roughly 38-52 cents per dollar (income tax rate + 15.3% SE tax). At the 22% federal bracket, a $1,000 deduction saves you $373 in taxes.',
      'Use accounting software from day one — Wave (free), FreshBooks, or QuickBooks Self-Employed automatically categorize expenses and generate reports perfect for Schedule C.',
      'The Section 179 election lets you deduct the full cost of equipment and software in the year purchased instead of depreciating it over several years. This front-loads your deductions into the current year — useful in high-income years.',
      'Create a "deduction folder" in your email or cloud storage and forward all receipt confirmation emails there. One folder, always ready for tax time.',
      'If your business use of a vehicle exceeds the standard mileage rate benefit, you can deduct actual vehicle expenses (insurance, gas, repairs, depreciation) in proportion to business use. Track mileage with an app like MileIQ from the start of the year — retroactive estimates won\'t hold up.',
    ],
    faq: [
      { q: 'Can I deduct my computer if I also use it personally?', a: 'Yes, but only the business-use percentage. If you use your computer 75% for business and 25% personally, you deduct 75% of the cost. Document your estimate with a reasonable calculation. Under Section 179, you can still deduct the business-use portion in full in the year of purchase rather than deprecating it over time.' },
      { q: 'Are meals with clients deductible?', a: 'Business meals with clients or business associates are 50% deductible when there is a clear business purpose. Document the date, location, business purpose, and names of attendees. The "entertainment" deduction (sporting events, concerts, etc.) was eliminated by the 2017 Tax Cuts and Jobs Act and is no longer deductible.' },
      { q: 'Can I deduct my coworking space membership?', a: 'Yes, 100% — if you use the coworking space for business. Unlike the home office, coworking spaces don\'t require the "exclusive use" test. A WeWork or coworking membership is a straightforward business expense deductible on Schedule C. Note: if you both have a home office AND a coworking membership, you can deduct both.' },
      { q: 'What\'s the difference between a deduction and a credit?', a: 'A deduction reduces your taxable income, while a credit reduces your tax bill directly. Deductions are worth your marginal tax rate per dollar (e.g., 22 cents per dollar at the 22% bracket). Credits are worth a full dollar per dollar. Freelancers primarily benefit from deductions, though the child tax credit, earned income credit, and premium tax credit may also apply.' },
    ],
  },

  'freelance-tax-rate': {
    name: 'Freelance Tax Rate',
    emoji: '📊',
    title: 'Freelance Tax Rate 2025: What Percent Do You Actually Pay? | FreelanceRateIQ',
    description: 'What is the actual freelance tax rate? A clear breakdown of what percent of income freelancers pay in federal and state taxes at every income level — with real numbers.',
    keywords: ['freelance tax rate', 'what percent of income do freelancers pay in taxes', 'effective tax rate freelancer 2025', 'freelance income tax percentage'],
    heroText: 'The freelance tax rate isn\'t one number — it\'s a combination of self-employment tax, federal income tax, and state taxes that vary by income level. Here\'s what you actually owe at every income level, with the math shown.',
    intro: [
      'When freelancers ask "what\'s my tax rate?" they\'re usually thinking about one number that represents everything they owe. The reality is more complex: you owe self-employment tax (a flat 15.3% on net income up to the Social Security wage base), federal income tax (a progressive rate from 10-37% depending on taxable income), and state income tax (0-13.3% depending on state). The combination is your total effective tax rate.',
      'The most important distinction is marginal rate vs. effective rate. Your marginal rate is the rate you pay on your last (highest) dollar of income — the rate most people quote when asked. Your effective rate is the average rate across all your income — almost always lower because of the progressive bracket structure and deductions. A freelancer quoting a 35% marginal rate might have an effective total rate of only 22-28%.',
      'Freelancers face higher combined rates than equivalent W-2 employees at the same gross income because of SE tax. An employee earning $100K pays 7.65% FICA and has their employer pay the other 7.65%. A freelancer earning $100K pays the full 15.3% SE tax themselves. This 7.65% difference is one of the core reasons why freelance rates need to be meaningfully higher than equivalent W-2 salaries.',
      'The good news: deductions and the SE tax deduction soften the blow significantly. A well-optimized freelancer with good deduction practices can reduce their effective federal rate to roughly 18-24% on $100K gross — not dramatically higher than a well-positioned W-2 employee. The key is understanding the levers and using them all.',
    ],
    keyFacts: [
      { label: '2024 Federal Brackets (Single)', value: '10/12/22/24/32/35/37%' },
      { label: 'SE Tax Rate', value: '15.3%', note: 'On net SE income up to SS wage base' } as { label: string; value: string; note?: string },
      { label: 'Standard Deduction (2024)', value: '$14,600', note: 'Single; $29,200 MFJ' } as { label: string; value: string; note?: string },
      { label: 'SS Wage Base (2024)', value: '$168,600', note: 'Social Security portion caps here' } as { label: string; value: string; note?: string },
      { label: 'Highest State Tax (CA)', value: '13.3%', note: 'On income over $1M' } as { label: string; value: string; note?: string },
      { label: 'No Income Tax States', value: '9 states', note: 'TX, FL, NV, WA, WY, AK, SD, TN, NH' } as { label: string; value: string; note?: string },
    ],
    steps: [
      { title: 'Calculate your net self-employment income', body: 'Gross revenue minus all Schedule C deductions = net SE income. This is the foundation for all other tax calculations.' },
      { title: 'Calculate SE tax', body: 'Net SE income × 92.35% × 15.3% = SE tax. Divide by 2 to get the SE tax deduction you\'ll claim on Schedule 1.' },
      { title: 'Calculate adjusted gross income (AGI)', body: 'Net SE income minus SE tax deduction minus self-employed health insurance deduction minus retirement contributions = AGI.' },
      { title: 'Apply the standard deduction (or itemize)', body: 'Most freelancers take the standard deduction ($14,600 single in 2024). Subtract from AGI to get taxable income.' },
      { title: 'Calculate federal income tax using the bracket table', body: '10% on first $11,600; 12% on $11,601-$47,150; 22% on $47,151-$100,525; 24% on $100,526-$191,950; 32% on $191,951-$243,725; etc. Most freelancers earning $50K-$200K net are in the 22-24% marginal bracket.' },
      { title: 'Add SE tax to income tax for total federal liability', body: 'Federal income tax + SE tax = total federal tax liability. This is the number you\'re trying to cover with quarterly payments.' },
      { title: 'Add state income tax to get all-in rate', body: 'Look up your state\'s tax rates and apply them to your state taxable income (which may differ from federal). Your total tax rate = federal + state combined.' },
    ],
    mistakes: [
      { title: 'Confusing marginal rate with effective rate', body: 'Quoting your 24% "tax bracket" doesn\'t mean you pay 24% on everything. You pay 10% on the first $11,600, 12% on the next tier, etc. The 24% only applies to income in that bracket range. Your actual effective income tax rate might be 16-18% even if your marginal bracket is 24%.' },
      { title: 'Ignoring SE tax when comparing freelance to W-2 income', body: 'A $100K freelance income is NOT equivalent to a $100K W-2 salary after taxes. The freelancer pays ~$14K more in SE tax than the employee pays in employee FICA. Factor this in when comparing compensation offers: a $100K W-2 offer might be equivalent to needing to earn $115K+ as a freelancer to net the same.' },
      { title: 'Not accounting for state income taxes in rate setting', body: 'A California freelancer faces 9.3-13.3% state income tax on significant income, a Texas freelancer pays 0%. Your all-in effective rate varies dramatically by state. Include state taxes in your financial planning and rate calculations.' },
      { title: 'Forgetting the QBI deduction', body: 'The Qualified Business Income (QBI) deduction — available through 2025 — allows most freelancers to deduct 20% of qualified business income from taxable income. This effectively reduces your income tax rate by 20% on qualifying income. Not all freelancers in every service business qualify; check IRS guidelines for your field.' },
      { title: 'Not using the SE tax deduction', body: 'The 50% SE tax deduction reduces your AGI, which reduces your income tax in addition to everything else. At the 22% bracket, this deduction saves you an additional $1,367 in income tax on a $100K income scenario.' },
    ],
    calculationTitle: 'Effective Rate Breakdown: $100K Freelancer (Single, No State Tax)',
    calculation: [
      { label: 'Gross revenue', value: '$100,000' },
      { label: 'Business deductions (Schedule C)', value: '−$12,000' },
      { label: 'Net SE income', value: '$88,000' },
      { label: 'SE tax (15.3% × 92.35%)', value: '$12,434' },
      { label: 'SE tax deduction', value: '−$6,217' },
      { label: 'AGI', value: '$81,783' },
      { label: 'Standard deduction', value: '−$14,600' },
      { label: 'Taxable income', value: '$67,183' },
      { label: 'Federal income tax', value: '$9,591', note: '10/12/22% brackets applied' },
      { label: 'Total federal tax', value: '$22,025' },
      { label: 'Effective rate (of gross $100K)', value: '22.0%', note: 'All-in federal; add state for full picture' },
    ],
    tips: [
      'Your effective rate is always lower than your marginal rate — quote the right number when telling clients or peers "what rate you pay."',
      'At $100K gross with reasonable deductions, most single US freelancers pay an effective federal rate of 20-24%. Add state taxes for your full picture.',
      'Each deductible dollar saves you your marginal income tax rate + 15.3% SE tax. At the 22% bracket, that\'s a 37.3% tax savings per dollar of deduction.',
      'The QBI deduction (through 2025) can reduce your effective rate by 3-5 percentage points if you qualify. Many service-based freelancers qualify — check IRS Publication 535.',
      'Your break-even freelance rate vs. W-2 equivalent should account for the SE tax premium plus benefits gap. Use FreelanceRateIQ\'s calculator to find your exact number.',
    ],
    faq: [
      { q: 'What is the average tax rate for a freelancer making $75K?', a: 'A single freelancer earning $75K gross with typical deductions ($10K) might face: SE tax of ~$9,177, federal income tax of ~$6,500, effective federal rate of about 21% of gross. Add state taxes for your full picture. With retirement contributions and health insurance deductions, the effective rate can drop to 17-18%.' },
      { q: 'How does the freelance tax rate compare to W-2 employment?', a: 'At the same gross income, freelancers typically pay 6-10% more in total taxes than W-2 employees — primarily due to the employer\'s half of FICA that freelancers must pay themselves. However, freelancers have access to more deductions (home office, business expenses, retirement options) that W-2 employees largely can\'t access, partially offsetting this premium.' },
      { q: 'Does freelance income get taxed more than regular income?', a: 'Freelance income is taxed at the same income tax rates as other earned income, but with an additional 15.3% SE tax layer. The SE tax is the main difference. A freelancer and a W-2 employee with the same taxable income pay the same income tax rates; the freelancer just also owes SE tax while the employee has their FICA split with their employer.' },
      { q: 'What is the QBI deduction and do I qualify?', a: 'The Qualified Business Income (QBI) deduction allows pass-through businesses (sole proprietors, S-corps, partnerships) to deduct up to 20% of qualified business income from taxable income. Most freelancers qualify, though some service businesses (attorneys, consultants, financial advisors, some other professional services) phase out at higher incomes. It\'s scheduled to expire after tax year 2025 unless extended.' },
    ],
  },

  'home-office-deduction': {
    name: 'Home Office Deduction',
    emoji: '🏠',
    title: 'Home Office Deduction for Freelancers 2025 | FreelanceRateIQ',
    description: 'How to claim the home office deduction as a freelancer. Simplified vs. regular method, what qualifies, how much you save, and how to avoid the common mistakes.',
    keywords: ['home office deduction freelancer', 'home office tax write off', 'home office deduction 2025 self employed', 'how to claim home office deduction'],
    heroText: 'The home office deduction is one of the most valuable and most misunderstood deductions for freelancers. Most people who qualify don\'t claim it — leaving hundreds to thousands of dollars on the table every year. Here\'s exactly how it works.',
    intro: [
      'If you use part of your home regularly and exclusively for your freelance business, you can deduct that space on your taxes. This can mean deducting a portion of your rent or mortgage interest, utilities, home insurance, and repairs — or using the simpler $5/square foot method. For most freelancers, this is one of the largest available deductions they never claim.',
      'The home office deduction has two key requirements: regular use and exclusive use. Regular means you use the space consistently for business — not occasionally, and not just because it\'s convenient when you work from home sometimes. Exclusive means that space is dedicated to business and not also used for personal activities. A desk in your bedroom doesn\'t qualify. A spare bedroom converted entirely to your office does.',
      'There are two calculation methods: the simplified method ($5 per square foot, up to 300 sq ft, maximum $1,500 deduction) and the regular method (actual percentage of home expenses based on the ratio of office space to total home square footage). The regular method produces larger deductions for most homeowners and high-rent renters, but requires more documentation and calculation.',
      'One important note for homeowners: the home office deduction under the regular method creates "unrecaptured depreciation" when you eventually sell your home. The portion of depreciation deducted for your home office becomes taxable (at a max 25% rate) when you sell. This is a real consideration for homeowners — for renters, there\'s no such complication.',
    ],
    keyFacts: [
      { label: 'Simplified Method Rate', value: '$5 per sq ft' },
      { label: 'Simplified Method Max', value: '300 sq ft ($1,500/yr)' },
      { label: 'Regular Method Basis', value: 'Actual % of home expenses' },
      { label: 'Qualification Test 1', value: 'Regular use for business' },
      { label: 'Qualification Test 2', value: 'Exclusive use for business' },
      { label: 'Form Required', value: 'Form 8829 (regular) or Schedule C line 30 (simplified)' },
    ],
    steps: [
      { title: 'Verify you meet the exclusive use test', body: 'Your home office must be used only for business — not for personal activities at other times. A dedicated room you enter only for work qualifies. A dining room table where you sometimes work does not. If in doubt, set up a physical partition or rearrange to create a clearly dedicated space.' },
      { title: 'Measure your office square footage', body: 'Measure the area you use exclusively for business. A 10x12 room is 120 sq ft. Also note your total home square footage — you\'ll need this for the regular method. The ratio (office ÷ total home) is your business use percentage.' },
      { title: 'Choose your calculation method', body: 'Simplified: multiply office sq ft by $5 (max $1,500). Quick but capped. Regular method: multiply your deductible home expenses (rent, mortgage interest, utilities, insurance, repairs, depreciation) by your business-use percentage. Larger deduction potential but more work.' },
      { title: 'Gather your home expense documentation (regular method)', body: 'Collect annual totals for: rent or mortgage interest (from Form 1098), homeowners/renters insurance, utilities (electric, gas, internet proportional to whole-home use), HOA fees, and any home repairs or maintenance that benefited the whole home. Multiply each by your office-to-home percentage.' },
      { title: 'Complete Form 8829 (regular method)', body: 'Form 8829 guides you through the regular method calculation. It calculates your deductible home expenses, handles the business-use percentage, and includes a depreciation calculation for homeowners. The result flows to Schedule C line 30.' },
      { title: 'Claim the deduction on Schedule C', body: 'Under the simplified method, enter your calculated deduction directly on Schedule C line 30. Under the regular method, your Form 8829 result flows to Schedule C line 30. Either way, this reduces your net business profit and therefore both your income tax and SE tax.' },
      { title: 'Keep documentation year-round', body: 'Save all utility bills, rent receipts, mortgage statements, insurance invoices, and repair receipts. Take a photograph of your office space showing it\'s a dedicated business area. Keep these for at least 3 years after filing (the IRS audit window for most returns).' },
    ],
    mistakes: [
      { title: 'Thinking home office deductions trigger audits', body: 'This is a persistent myth. The IRS uses automated data matching and statistical sampling — not targeted home-office hunts. Self-employed individuals claiming home office deductions are common and expected. The real audit risk comes from deductions that seem disproportionately large relative to your income, not from claiming a legitimate home office.' },
      { title: 'Using the simplified method when the regular method would save more', body: 'The simplified method maxes at $1,500 for a 300 sq ft office. A freelancer in a 1,200 sq ft apartment with $36,000/year in rent (NYC, SF) has a business-use percentage of 25% — worth a $9,000 home office deduction under the regular method vs. $1,500 under simplified. The math matters enormously for high-rent areas.' },
      { title: 'Claiming home office but not deducting related utilities and internet', body: 'Under the regular method, a portion of your utilities (electricity, gas, internet, water) is deductible through the home office. Under simplified, internet used for business is separately deductible as a direct business expense (usually 70-80% business use). Don\'t leave these companion deductions on the table.' },
      { title: 'Not reclaiming the deduction after remodeling or reconfiguring', body: 'If you stopped claiming the home office deduction after a move or renovation and now have a qualifying dedicated space, you can start claiming it again. There\'s no penalty for having previously not claimed it — you simply begin claiming it for the current and future years.' },
      { title: 'Failing to document the exclusive use in writing', body: 'If audited, you\'ll need to demonstrate exclusive use. A short written description of the space ("Room used exclusively as my freelance writing office, not used for any personal activities"), combined with photos and utility records, is sufficient documentation.' },
    ],
    calculationTitle: 'Home Office Deduction: Two Methods Compared',
    calculation: [
      { label: 'Office: 150 sq ft | Total home: 1,000 sq ft', value: '15% business use' },
      { label: '--- SIMPLIFIED METHOD ---', value: '' },
      { label: 'Rate: $5/sq ft × 150 sq ft', value: '$750 deduction' },
      { label: '--- REGULAR METHOD ---', value: '' },
      { label: 'Annual rent', value: '$24,000' },
      { label: 'Utilities (electricity + gas)', value: '$2,400' },
      { label: 'Renters insurance', value: '$240' },
      { label: 'Total home expenses', value: '$26,640' },
      { label: '× 15% business use', value: '$3,996 deduction', note: 'More than 5× the simplified method' },
      { label: 'Tax savings at 37.3% combined rate (22% + SE)', value: '~$1,491', note: 'Regular method; $280 under simplified' },
    ],
    tips: [
      'Renters in expensive cities should almost always use the regular method — the deduction can be 5-10× larger than the simplified method.',
      'Take a dated photo of your office space annually. If ever questioned, photos with metadata timestamps are powerful documentation.',
      'The home office deduction doesn\'t require you to never leave the house. You can work at clients\' offices or coffee shops and still claim a home office as long as the dedicated space is your principal place of business.',
      'You can\'t use the home office deduction to create a business loss — under the regular method, the deduction is limited to your net business income. Unused home office deductions carry forward to the next year.',
      'Home office expenses also reduce your SE tax base, not just income tax. At $4,000 in home office deductions, you\'re saving roughly $612 in SE tax alone ($4,000 × 15.3%), on top of income tax savings.',
    ],
    faq: [
      { q: 'Can I claim a home office deduction if I also rent a coworking space?', a: 'Yes. You can deduct both your home office (if you use it regularly and exclusively for business) and your coworking space membership. The home office deduction requires regular and exclusive use; the coworking space is a direct business expense. Many freelancers have both a home office for deep work and a coworking space for meetings.' },
      { q: 'Does my home office need to be a separate room?', a: 'Technically, no — but exclusive use is required, which practically means a dedicated space. A corner of a room with a clearly demarcated work area used only for business might qualify, but a shared dining table does not. A dedicated room with a door is the cleanest, most defensible home office. A partition or divider can help create a qualifying dedicated area in a smaller home.' },
      { q: 'What if I\'m renting month-to-month? Can I still claim a home office?', a: 'Yes. Whether you own or rent, and regardless of your lease terms, you can claim a home office deduction as long as the space qualifies (regular, exclusive business use). The regular method for renters uses your rent payments as the primary expense base. Being month-to-month vs. on a fixed lease makes no difference to the deduction.' },
      { q: 'How does home office depreciation work for homeowners?', a: 'Under the regular method, homeowners can deduct depreciation on the business-use portion of their home. This is calculated using the home\'s cost basis (excluding land), divided by 39 years (commercial property depreciation schedule), multiplied by the business-use percentage. The benefit: a real annual deduction. The catch: when you sell the home, the IRS "recaptures" the depreciation at a maximum 25% tax rate.' },
    ],
  },

  'freelance-retirement-accounts': {
    name: 'Freelance Retirement Accounts',
    emoji: '🏦',
    title: 'Freelance Retirement Accounts 2025: SEP-IRA vs Solo 401(k) | FreelanceRateIQ',
    description: 'The best retirement accounts for freelancers explained. SEP-IRA vs Solo 401(k) vs SIMPLE IRA — contribution limits, tax benefits, setup process, and which is right for you.',
    keywords: ['freelance retirement accounts', 'sep ira vs solo 401k freelancer', 'self employed retirement accounts 2025', 'best retirement account freelancer'],
    heroText: 'Retirement accounts are the most powerful legal tax reduction tool available to freelancers — and most freelancers dramatically underuse them. A $20,000 SEP-IRA contribution can cut your tax bill by $7,000-8,000+. Here\'s how to choose the right account and use it aggressively.',
    intro: [
      'Freelancers have access to retirement accounts with dramatically higher contribution limits than traditional employee 401(k)s. While employees are limited to $23,000 per year in a 401(k) (2024), a freelancer with a SEP-IRA can contribute up to $66,000/year — or 25% of net SE income, whichever is less. A Solo 401(k) offers similar contribution room with even more flexibility for higher-income earners.',
      'Every dollar you contribute to a SEP-IRA, Solo 401(k), or SIMPLE IRA reduces your taxable income dollar-for-dollar. More importantly for freelancers, retirement contributions also reduce your net SE income, which means they reduce both your income tax AND your SE tax. A $20,000 SEP-IRA contribution at the 22% bracket saves you $4,400 in income tax plus approximately $3,060 in SE tax — a combined $7,460 in tax savings.',
      'The choice between account types depends primarily on your income level and how much you want to contribute. Under $50K net income, a SEP-IRA is usually the right choice: dead simple to open, no annual filings required, and contribution limits are adequate. Over $100K net, a Solo 401(k) often allows much larger contributions due to the "employee + employer" contribution structure. Under $50K annual income or with one or two employees, a SIMPLE IRA is worth considering.',
      'The tax-deferred compounding benefit is enormous over time. A freelancer contributing $20,000/year from age 30-60 at a 7% average return accumulates approximately $1.9 million — almost all from investment growth. The current-year tax savings are the bonus that essentially makes the government subsidize your retirement savings. No other legal tax strategy for freelancers comes close.',
    ],
    keyFacts: [
      { label: 'SEP-IRA Limit (2024)', value: '$69,000', note: 'Or 25% of net SE income, whichever is less' } as { label: string; value: string; note?: string },
      { label: 'Solo 401(k) Employee Limit (2024)', value: '$23,000', note: '+$7,500 catch-up if age 50+' } as { label: string; value: string; note?: string },
      { label: 'Solo 401(k) Employer Limit', value: 'Up to 25% of comp', note: 'Employee + employer combined max $69,000' } as { label: string; value: string; note?: string },
      { label: 'SIMPLE IRA Employee Limit', value: '$16,000 (2024)', note: '+$3,500 catch-up if age 50+' } as { label: string; value: string; note?: string },
      { label: 'SEP-IRA Setup Deadline', value: 'Tax filing deadline (incl. extensions)' },
      { label: 'Solo 401(k) Setup Deadline', value: 'December 31 of the tax year' },
    ],
    steps: [
      { title: 'Choose your account type based on income and goals', body: 'Under $50K net: SEP-IRA is simplest and contribution limits are adequate. Over $100K net: Solo 401(k) allows more total contributions because of the employee contribution portion. Have employees: SIMPLE IRA. Want Roth option: Solo 401(k) (many custodians offer Roth Solo 401(k)).' },
      { title: 'Open the account at a low-cost custodian', body: 'Fidelity, Vanguard, Charles Schwab, and TD Ameritrade all offer free SEP-IRA and Solo 401(k) accounts with no annual fees. Fidelity and Schwab have the most flexible options and best customer service for self-employed individuals. Avoid high-fee insurance or bank products for this.' },
      { title: 'Calculate your maximum contribution', body: 'SEP-IRA: net SE income × 92.35% × 20% (approximately 25% of net SE income after adjustments). Use IRS Publication 560 Table and Worksheets for the exact calculation. Solo 401(k): employee portion up to $23,000 + employer portion up to 25% of W-2 compensation (more complex; custodian or CPA can calculate).' },
      { title: 'Determine how much to contribute this year', body: 'Contribute as much as you can afford while maintaining adequate operating cash flow and emergency reserves. Even contributing the maximum allowable amount is almost always the right financial decision — the tax savings are immediate, guaranteed returns that exceed most investment alternatives.' },
      { title: 'For SEP-IRA: contribute by tax filing deadline', body: 'You can open a SEP-IRA and make contributions for the prior tax year any time before your tax filing deadline — including extensions. This means in April, you can open a SEP-IRA and reduce last year\'s taxes. This flexibility makes the SEP-IRA uniquely powerful for retroactive tax planning.' },
      { title: 'For Solo 401(k): open by December 31 of the tax year', body: 'The Solo 401(k) must be established by December 31 of the year for which you want to make contributions. Employee contributions (up to $23,000) must be made by December 31. Employer contributions can be made up to the tax filing deadline, including extensions.' },
      { title: 'Invest the contributions in low-cost index funds', body: 'Vanguard Target Date funds, Fidelity ZERO index funds, or simple three-fund portfolios (US stocks, international stocks, bonds) are ideal for most freelancers. Keep investment fees under 0.20% annually — high fees compound against you as powerfully as low fees compound for you.' },
    ],
    mistakes: [
      { title: 'Not opening a retirement account because you "don\'t have enough to contribute"', body: 'Even $5,000/year in a SEP-IRA saves a 22%-bracket freelancer $765 in income tax + $765 in SE tax = $1,530 in immediate tax savings. The government is essentially handing you $1,530 to save for retirement. Start with any amount you can afford — you can always contribute more in high-income years.' },
      { title: 'Waiting until a "good year" to open the account', body: 'The best time to open a retirement account is now. The compounding benefit of starting earlier vastly outweighs any concern about contribution size. A SEP-IRA can be opened with a $500 contribution. Open the account, establish the habit, and scale up contributions as income grows.' },
      { title: 'Using a SEP-IRA when a Solo 401(k) would allow more contributions at higher incomes', body: 'At $100K+ net income, the Solo 401(k) often allows significantly more total contributions than a SEP-IRA. This is because the Solo 401(k) employee contribution ($23,000) is added on top of the employer contribution, while the SEP-IRA is employer-contribution only. At $100K net income, a Solo 401(k) might allow $40,000+ in total contributions vs. $18,587 with a SEP-IRA.' },
      { title: 'Not contributing for years with business losses or low income', body: 'You can only contribute to a SEP-IRA or Solo 401(k) if you have net SE income. In a loss year, no contribution is possible. However, you can still maintain the account and let existing contributions compound. A Roth IRA ($7,000/year if income is under certain thresholds) remains an option even in lower-income years.' },
      { title: 'Ignoring the Backdoor Roth strategy for high earners', body: 'High-income freelancers who earn above the Roth IRA income limits ($161K single, $240K MFJ in 2024) can use the "backdoor Roth" strategy: make a non-deductible traditional IRA contribution then convert it to a Roth. This adds another $7,000/year in tax-advantaged savings on top of your SEP-IRA or Solo 401(k).' },
    ],
    calculationTitle: 'Retirement Contribution Tax Savings: $100K Freelancer',
    calculation: [
      { label: 'Net SE income', value: '$88,000' },
      { label: 'SEP-IRA max contribution (~20% × net SE)', value: '$17,584' },
      { label: 'Income tax savings (22% bracket)', value: '$3,868' },
      { label: 'SE tax savings (contribution reduces SE base)', value: '~$2,690', note: '$17,584 × 15.3%' },
      { label: 'Total immediate tax savings', value: '$6,558', note: 'Guaranteed return from tax savings alone' },
      { label: 'Effective return on contribution', value: '~37.3%', note: '$6,558 / $17,584 = immediate tax savings rate' },
      { label: 'Future value (30 years, 7% returns)', value: '~$133,700', note: 'This year\'s contribution alone' },
    ],
    tips: [
      'Open a SEP-IRA at Fidelity this week — it takes 10 minutes online and is completely free. You can contribute $0 this year and still have the account ready for when you need it.',
      'The Solo 401(k)\'s employee contribution ($23,000) is particularly powerful if your net income is under $100K because it allows higher contributions than a SEP-IRA at lower income levels.',
      'Consider a Roth Solo 401(k) for the employee contribution portion — you pay taxes now on that $23,000 but all future growth is tax-free. Given current tax rates and likely future increases, Roth conversions often make sense for younger freelancers.',
      'Your CPA can calculate the exact maximum contribution for your specific income situation. The self-employed retirement contribution worksheets in IRS Publication 560 are clear but require careful reading. A $300 CPA consultation to optimize this can save you $5,000-10,000 in taxes.',
      'SEP-IRA contributions can be made for the prior year up until you file your return (including extensions). In a pinch, filing for a tax extension to October 15 gives you extra months to accumulate the cash for a large contribution.',
    ],
    faq: [
      { q: 'Can I have both a SEP-IRA and a Solo 401(k)?', a: 'Generally, no — you can\'t contribute to both a SEP-IRA and a Solo 401(k) for the same self-employment income in the same year. (There are some exceptions for employees with a day job who also freelance.) Choose one. For most freelancers over $80K net income, the Solo 401(k) allows higher total contributions; under $80K, the SEP-IRA is usually simpler with comparable or better limits.' },
      { q: 'What happens to my SEP-IRA if I hire employees?', a: 'This is the big SEP-IRA gotcha: if you hire eligible employees, you must make the same percentage contribution to their SEP-IRAs as you make to your own. A 20% contribution for yourself means 20% for every eligible employee too — which can become very expensive. Solo 401(k) plans don\'t allow employees (other than a spouse), so they\'re truly designed for solo freelancers.' },
      { q: 'Is a Roth SEP-IRA available?', a: 'As of 2023, SECURE Act 2.0 allowed employers (including self-employed) to designate SEP-IRA contributions as Roth. However, most major custodians have been slow to implement Roth SEP-IRAs. Fidelity began offering them in 2024. If you want Roth treatment with high contribution limits, the Solo 401(k) Roth option is currently more widely available.' },
      { q: 'Can I still contribute to a retirement account if I had a loss this year?', a: 'No — both SEP-IRA and Solo 401(k) contributions require net SE income. If your freelance business had a net loss, you cannot make SE retirement contributions for that year. However, you may be able to contribute to a traditional or Roth IRA if you have other earned income (from a part-time job, for example). The regular Roth/traditional IRA limits are $7,000/year (2024) and require any earned income.' },
    ],
  },

  'llc-vs-sole-proprietor': {
    name: 'LLC vs Sole Proprietor',
    emoji: '🏢',
    title: 'LLC vs Sole Proprietor for Freelancers 2025 | FreelanceRateIQ',
    description: 'Should you form an LLC as a freelancer? A clear breakdown of the tax differences, liability protection, costs, and when each structure makes sense in 2025.',
    keywords: ['llc vs sole proprietor freelancer', 'should freelancer form llc', 'freelancer business structure 2025', 'llc benefits for freelancers'],
    heroText: 'Most freelancers start as sole proprietors without realizing it. Whether you should form an LLC — and what the tax implications are — depends on your income, risk exposure, and state. Here\'s the clear answer.',
    intro: [
      'When you start freelancing and collect your first dollar without forming a business entity, you are automatically a sole proprietor. Legally and for tax purposes, you and your business are the same entity. All freelance income goes on Schedule C of your personal Form 1040, and all business debts and liabilities are personally your responsibility. This is the default structure for millions of freelancers, and for many — especially those just starting out or earning under $50K — it\'s perfectly fine.',
      'An LLC (Limited Liability Company) creates a legal separation between you as a person and your freelance business. If your business gets sued or incurs debts it can\'t pay, your personal assets (home, savings, car) are generally protected. This liability protection is the primary reason to form an LLC — not taxes. From a federal tax perspective, a single-member LLC with no special elections is treated identically to a sole proprietorship: you still file Schedule C, still owe SE tax, still pay quarterly estimates.',
      'The tax picture changes when you combine an LLC with an S-corp tax election. Once your net self-employment income exceeds roughly $60,000-80,000, filing Form 2553 to have your LLC taxed as an S-corporation can save substantial SE taxes. An S-corp pays you a reasonable W-2 salary (subject to FICA) and lets you take additional profits as distributions (not subject to SE tax). At $150K net, this can save $8,000-20,000+/year in SE taxes — far more than the added complexity and accounting costs.',
      'The decision matrix for most freelancers: sole proprietor if under $50K net income or just starting out; LLC if you have meaningful client contracts and want liability protection; LLC + S-corp election if you consistently earn $80K+ net and have a CPA to handle the additional complexity. State formation costs ($50-500/year) and annual reporting requirements vary significantly — California charges $800/year minimum just for the privilege of having an LLC there.',
    ],
    keyFacts: [
      { label: 'Default Tax Treatment (LLC)', value: 'Same as sole proprietor', note: 'Schedule C; SE tax applies; no difference without election' } as { label: string; value: string; note?: string },
      { label: 'S-Corp Effective Threshold', value: '~$60-80K net income', note: 'Below this, S-corp complexity exceeds tax savings' } as { label: string; value: string; note?: string },
      { label: 'LLC Formation Cost', value: '$50-500 (state fee)', note: 'Varies: WY $100, DE $90, CA $70 + $800 annual minimum' } as { label: string; value: string; note?: string },
      { label: 'S-Corp Salary Requirement', value: '"Reasonable" W-2 salary', note: 'IRS requires market-rate salary — you can\'t pay $1/year' } as { label: string; value: string; note?: string },
      { label: 'Annual LLC Cost (rough)', value: '$200-1,500/yr', note: 'State fees + registered agent + additional accounting' } as { label: string; value: string; note?: string },
      { label: 'S-Corp Additional Accounting', value: '$800-2,500/yr', note: 'Payroll processing, separate S-corp return (Form 1120-S)' } as { label: string; value: string; note?: string },
    ],
    steps: [
      { title: 'Assess your liability exposure as a freelancer', body: 'The primary reason to form an LLC is liability protection. If a client could potentially sue you for significant damages — a website goes down, a campaign fails, proprietary information is mishandled — an LLC creates a protective barrier between your business and personal assets. Freelancers in high-stakes fields (legal, financial, medical, software for regulated industries) have more exposure than writers or graphic designers.' },
      { title: 'Understand that a single-member LLC doesn\'t change your federal taxes', body: 'By default, the IRS treats a single-member LLC as a "disregarded entity" for federal income tax purposes. You still file Schedule C. You still owe SE tax. You still pay quarterly estimates. The LLC filing only matters for state legal purposes and liability protection — not for federal tax.' },
      { title: 'Decide if you need a business checking account (you do)', body: 'Whether you operate as a sole proprietor or LLC, you should have a dedicated business checking account. This is table stakes for professional freelancing regardless of your legal structure. Mercury and Relay are excellent free options for freelancers. Commingling personal and business funds is the primary way LLC liability protection gets "pierced" in court.' },
      { title: 'Choose a formation state thoughtfully', body: 'If you live in one state, form your LLC in your home state — not Delaware or Wyoming, despite what you read online. Those states are advantageous for large corporations or businesses operating in multiple states. A freelancer in Texas forming a Wyoming LLC still has to "foreign qualify" in Texas and pay both states\' fees. Home state is simpler and usually cheaper.' },
      { title: 'Model the S-corp math at $60-80K+ net income', body: 'Run the numbers with your CPA once your net SE income consistently exceeds $60,000-80,000. Example: $120K net income with $75K W-2 salary → SE tax on $75K only instead of $120K → saves roughly $6,885 in SE tax (minus ~$2,000/year additional accounting costs = net savings ~$4,885). The savings grow larger as income grows.' },
      { title: 'Separate your business and personal finances completely', body: 'Whether you\'re a sole proprietor or LLC, run all business income through a dedicated account and pay all business expenses from it. This creates the paper trail that protects you in an audit and maintains the "corporate formalities" that keep LLC liability protection intact.' },
      { title: 'Revisit your structure annually as income grows', body: 'Business structure decisions aren\'t permanent. Most freelancers start as sole proprietors, form an LLC for liability protection at $50-75K income, and elect S-corp taxation at $100K+. Review your structure with a CPA annually — the right answer changes as your income grows.' },
    ],
    mistakes: [
      { title: 'Forming an LLC thinking it reduces SE taxes automatically', body: 'A single-member LLC with no special elections pays exactly the same federal taxes as a sole proprietor. SE tax, income tax, quarterly payments — all identical. The LLC only helps with liability protection unless you also make an S-corp election. Many new freelancers spend $200-500 forming an LLC expecting a tax benefit that doesn\'t exist without the S-corp step.' },
      { title: 'Not maintaining corporate formalities after forming an LLC', body: 'An LLC\'s liability protection can be "pierced" — eliminated — if you don\'t treat the LLC as a separate entity. Key requirements: maintain a separate business bank account, never commingle personal and business funds, keep basic records, and sign contracts in your business name. LLC protection isn\'t automatic if you don\'t behave as if the business is a separate entity.' },
      { title: 'Electing S-corp status at too low an income level', body: 'S-corp benefits only exceed costs once net income is consistently above $60,000-80,000. Below that, the additional cost of payroll processing, a separate tax return (Form 1120-S), and a CPA to manage it all typically exceeds the SE tax savings. Don\'t file Form 2553 prematurely — it\'s difficult to undo.' },
      { title: 'Choosing the wrong state for LLC formation', body: 'Forming in Wyoming or Delaware as a home-based freelancer creates unnecessary complexity. You\'ll need to register as a "foreign LLC" in your home state anyway and pay fees in both states. In most cases, form your LLC in the state where you live and work. The exotic-state benefits only apply in specific circumstances that don\'t apply to solo freelancers.' },
      { title: 'Not getting professional advice before making S-corp election', body: 'The S-corp election (Form 2553) requires careful timing, reasonable compensation analysis, and payroll setup. Filing it incorrectly or at the wrong time can create problems that are expensive to unwind. A 2-hour CPA consultation before filing is the best $300-600 you\'ll spend when considering the S-corp path.' },
    ],
    calculationTitle: 'SE Tax Savings: LLC (Default) vs. LLC + S-Corp at $150K Net',
    calculation: [
      { label: '--- DEFAULT LLC / SOLE PROPRIETOR ---', value: '' },
      { label: 'Net SE income', value: '$150,000' },
      { label: 'SE tax (15.3% × 92.35%)', value: '$21,191' },
      { label: '--- LLC + S-CORP ELECTION ---', value: '' },
      { label: 'Reasonable W-2 salary', value: '$80,000' },
      { label: 'FICA on salary (employee + employer)', value: '$12,240', note: '15.3% × $80,000' },
      { label: 'S-corp distribution (not subject to SE tax)', value: '$70,000' },
      { label: 'SE/FICA tax under S-corp', value: '$12,240' },
      { label: 'SE Tax Savings', value: '$8,951', note: '$21,191 − $12,240' },
      { label: 'Less: additional S-corp accounting costs', value: '−$2,000', note: 'Payroll + Form 1120-S filing' },
      { label: 'Net annual benefit', value: '$6,951' },
    ],
    tips: [
      'The LLC decision and the S-corp decision are separate. You can have an LLC taxed as a sole proprietor (most freelancers), or an LLC with S-corp election for high earners, or a corporation with S-corp election.',
      'If you\'re in a high-litigation-risk profession (tech, finance, legal services, medical), forming an LLC is worthwhile even at low income levels purely for the liability protection.',
      'In California, all LLCs pay an $800/year minimum franchise tax regardless of income. For a California freelancer earning under $30K, this fee may outweigh the benefits of LLC formation.',
      'Keep a paper trail of all business decisions: contracts, invoices, expense records, and business correspondence. This documentation is what makes the LLC "real" in the eyes of a court.',
      'If you do elect S-corp, your "reasonable compensation" salary should be documented. The IRS has specific guidance on what constitutes reasonable compensation for your industry and role. A CPA\'s documentation of this analysis is your protection if audited.',
    ],
    faq: [
      { q: 'Is there any tax benefit to forming an LLC without an S-corp election?', a: 'No — a single-member LLC without an S-corp or C-corp election is a "disregarded entity" for federal tax purposes. You pay exactly the same federal income tax and SE tax as a sole proprietor. The LLC provides liability protection and professional credibility, but zero federal tax difference. Some states have LLC-specific taxes or lower rates for LLC income — research your specific state.' },
      { q: 'When should I make the S-corp election?', a: 'Most CPAs recommend considering the S-corp election once net self-employment income consistently exceeds $60,000-80,000 per year. At $100K net, the SE tax savings typically exceed the additional accounting costs ($1,500-3,000/year) by $3,000-8,000. At $150K+, the savings are substantial. The election must be filed by March 15 of the year you want it to take effect (or within 2 months and 15 days of the start of the business year).' },
      { q: 'What is "reasonable compensation" for S-corp purposes?', a: 'The IRS requires S-corp owner-employees to pay themselves a reasonable W-2 salary for their services before taking distributions. Reasonable compensation is typically defined as what you\'d pay a third party to do your job — often 40-60% of net S-corp income. Paying yourself $1/year to avoid FICA is an audit red flag. Most CPAs document a salary analysis each year showing comparable market rates.' },
      { q: 'Can a sole proprietor get the same liability protection as an LLC?', a: 'No. A sole proprietor has unlimited personal liability for business debts and judgments. If a client sues your sole proprietorship and wins, they can go after your personal assets: savings, car, home equity. An LLC creates a barrier — they can pursue LLC assets but generally cannot reach personal assets (unless you\'ve personally guaranteed debts or the corporate veil is pierced). Professional liability insurance is also important alongside the LLC.' },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = pages[slug]
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://freelancerateiq.com/taxes/${slug}`,
      siteName: 'FreelanceRateIQ',
      type: 'website',
    },
  }
}

export default async function TaxSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = pages[slug]
  if (!page) notFound()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Nav */}
      <nav className="border-b border-slate-800 bg-slate-950/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight">
            <span className="text-white">FreelanceRate</span>
            <span className="text-indigo-400">IQ</span>
          </Link>
          <div className="flex items-center gap-5 text-sm text-slate-400">
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link
              href="/#guide"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-lg transition-colors font-medium"
            >
              Get the $27 Guide
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-14 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto">
          <div className="text-6xl mb-4">{page.emoji}</div>
          <div className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-800/50 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-5">
            <Link href="/taxes" className="hover:text-white transition-colors">Tax Guides</Link>
            <span>›</span>
            <span>{page.name}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            {page.name}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {page.heroText}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-14 px-4">
        <div className="max-w-3xl mx-auto space-y-5">
          {page.intro.map((para, i) => (
            <p key={i} className="text-slate-300 leading-relaxed">{para}</p>
          ))}
        </div>
      </section>

      {/* Key Facts */}
      <section className="pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-indigo-800/40 rounded-xl p-7">
            <h2 className="text-xl font-bold text-white mb-5">⚡ Quick Reference</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {page.keyFacts.map((fact) => (
                <div key={fact.label} className="bg-slate-800/50 rounded-lg p-4">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">{fact.label}</div>
                  <div className="text-lg font-bold text-indigo-300">{fact.value}</div>
                  {fact.note && <div className="text-xs text-slate-500 mt-1">{fact.note}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Step-by-Step Guide</h2>
          <div className="space-y-4">
            {page.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-700/50 flex items-center justify-center text-indigo-400 font-bold text-sm">
                  {i + 1}
                </div>
                <div className="flex-1 pb-4 border-b border-slate-800 last:border-0">
                  <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            {page.mistakes.map((mistake, i) => (
              <div key={i} className="bg-slate-900 border border-red-900/30 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-lg flex-shrink-0 mt-0.5">✗</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{mistake.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{mistake.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculation */}
      <section className="pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">{page.calculationTitle}</h2>
          <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
            <div className="divide-y divide-slate-800">
              {page.calculation.map((row, i) => (
                <div key={i} className={`flex items-start justify-between px-5 py-3 ${row.label.startsWith('---') ? 'bg-slate-800/50' : ''}`}>
                  <div className="flex-1">
                    {row.label.startsWith('---') ? (
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{row.label.replace(/---/g, '').trim()}</span>
                    ) : (
                      <span className="text-sm text-slate-300">{row.label}</span>
                    )}
                    {row.note && <div className="text-xs text-slate-500 mt-0.5">{row.note}</div>}
                  </div>
                  {row.value && !row.label.startsWith('---') && (
                    <span className={`text-sm font-semibold ml-4 flex-shrink-0 ${row.label.toLowerCase().includes('total') || row.label.toLowerCase().includes('effective') || row.label.toLowerCase().includes('savings') || row.label.toLowerCase().includes('net') ? 'text-indigo-300' : 'text-slate-300'}`}>
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">5 Pro Tips</h2>
          <ul className="space-y-3">
            {page.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600/20 border border-indigo-800/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {page.faq.map((item) => (
              <div key={item.q} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-b from-indigo-950/60 to-slate-900 border border-indigo-800/50 rounded-2xl p-10">
            <div className="text-4xl mb-4">💰</div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Know Your Taxes. Now Know Your Rates.
            </h2>
            <p className="text-slate-400 mb-6">
              Understanding your tax burden is step one. Step two is setting your freelance rates high enough to actually keep what you earn. Our $27 guide gives you exact rate benchmarks for 40+ niches — so you can price with full knowledge of what the IRS will take.
            </p>
            <ul className="text-slate-400 text-sm text-left max-w-xs mx-auto mb-8 space-y-1.5">
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Rates for 40+ freelance niches</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Tax-adjusted rate calculations</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Client negotiation scripts</li>
              <li className="flex items-center gap-2"><span className="text-indigo-400">✓</span> Rate increase letter templates</li>
            </ul>
            <Link
              href="/#guide"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Get the Freelance Rate Guide — $27 →
            </Link>
            <p className="text-slate-500 text-xs mt-3">One-time · Instant PDF download · 30-day guarantee</p>
            <p className="mt-4 text-slate-500 text-xs">
              Also:{' '}
              <Link href="/" className="underline hover:text-slate-300 transition-colors">Free rate calculator</Link>
              {' · '}
              <Link href="/taxes" className="underline hover:text-slate-300 transition-colors">All tax guides</Link>
              {' · '}
              <Link href="/blog" className="underline hover:text-slate-300 transition-colors">Freelance blog</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-bold text-sm">
            <span className="text-white">FreelanceRate</span><span className="text-indigo-400">IQ</span>
          </Link>
          <p className="text-slate-500 text-sm">© 2025 FreelanceRateIQ. Know your worth.</p>
          <div className="flex gap-5 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
