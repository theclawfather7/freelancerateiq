import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type LevelPage = {
  slug: string
  label: string
  emoji: string
  yearsRange: string
  title: string
  description: string
  keywords: string[]
  heroText: string
  ratesByNiche: { niche: string; range: string; notes: string }[]
  whereYouAre: string[]
  howToLevel: string[]
  clientTypes: { type: string; body: string }[]
  commonMistakes: { mistake: string; fix: string }[]
  tips: string[]
  faq: { q: string; a: string }[]
  nextLevel: { slug: string; label: string; teaser: string } | null
}

const levels: Record<string, LevelPage> = {
  'entry-level': {
    slug: 'entry-level',
    label: 'Entry Level',
    emoji: '🌱',
    yearsRange: '0–2 years freelancing',
    title: 'Entry Level Freelance Rates 2025 | What to Charge Starting Out | FreelanceRateIQ',
    description: 'What should entry level freelancers charge? See 2025 rate benchmarks for new freelance developers, designers, and writers. Avoid undercharging — know your floor.',
    keywords: ['entry level freelance rates', 'what to charge as new freelancer', 'beginner freelance hourly rate', 'entry level freelance developer rate', 'starting freelance rates 2025'],
    heroText: 'Starting out as a freelancer is hard — you have no track record, a thin portfolio, and you don\'t know what to charge. Most new freelancers undercharge massively out of fear. This page gives you real entry-level rate benchmarks across niches, common mistakes to avoid, and a clear path to raising rates fast.',
    ratesByNiche: [
      { niche: 'Web Developer', range: '$40–$65/hr', notes: 'HTML/CSS/JS basics, simple React projects, portfolio builds' },
      { niche: 'UX/UI Designer', range: '$35–$55/hr', notes: 'Figma/Sketch basics, personal projects, spec work portfolio' },
      { niche: 'Copywriter', range: '$35–$55/hr', notes: 'Blog posts, product descriptions, social copy' },
      { niche: 'Graphic Designer', range: '$30–$50/hr', notes: 'Logo design, social media graphics, basic brand kits' },
      { niche: 'Content Writer', range: '$25–$45/hr', notes: 'Blog articles, listicles, basic SEO content' },
      { niche: 'Social Media Manager', range: '$25–$40/hr', notes: 'Scheduling, basic content creation, engagement' },
      { niche: 'Digital Marketing / SEO', range: '$35–$55/hr', notes: 'Basic keyword research, on-page optimization, analytics setup' },
      { niche: 'Data Analyst', range: '$40–$65/hr', notes: 'Excel/Sheets, basic Python/SQL, reporting dashboards' },
      { niche: 'Virtual Assistant', range: '$18–$30/hr', notes: 'Admin, scheduling, email management, research' },
      { niche: 'DevOps / Cloud', range: '$50–$75/hr', notes: 'Linux basics, AWS fundamentals, basic CI/CD pipelines' },
    ],
    whereYouAre: [
      'You have 0–2 years of freelance experience (or are transitioning from employment)',
      'Your portfolio has personal projects, spec work, or early-stage client work',
      'You\'re still figuring out your niche and what you want to specialize in',
      'Getting clients feels uncertain — you\'re not sure how to find or pitch them',
      'You sometimes wonder if you\'re charging too much or too little',
      'You may have accepted below-market rates just to get work and testimonials',
    ],
    howToLevel: [
      'Document everything you build — before/after screenshots, project outcomes, client results. Your portfolio is your rate negotiation.',
      'Specialize early. "Web developer" gets lower rates than "React developer for SaaS startups." Specificity = premium.',
      'Raise rates with every new client. Your 3rd client should pay 20–30% more than your 1st. Never freeze rates.',
      'Collect testimonials aggressively. A single strong client testimonial can justify a 30–50% rate increase.',
      'Stop pitching on price. Pitch outcomes. "I built a checkout funnel that improved conversions by 40%" beats "I\'m affordable."',
      'Get one case study with real numbers. Results-based proof is the single fastest path to rate increases.',
    ],
    clientTypes: [
      { type: 'Small Local Businesses', body: 'Small businesses (restaurants, salons, local services) are often your first clients. They have modest budgets but are more likely to hire someone without a long track record. Good for building portfolio pieces — less good for income growth.' },
      { type: 'Friends & Referrals', body: 'Most entry-level freelancers get first clients from personal network referrals. These are usually below-market-rate but valuable for portfolio and testimonials. Don\'t do unpaid work — even referrals pay something.' },
      { type: 'Freelance Platforms', body: 'Upwork, Fiverr, and Toptal entry tier are common starting points. Rates are compressed by competition but can build a feedback history. Aim to move off platforms within 12–18 months once you have direct client relationships.' },
    ],
    commonMistakes: [
      { mistake: 'Charging hourly when starting out', fix: 'Project rates are easier to manage when you\'re slower. A $400 project sounds manageable; $25/hr × 16 hours feels like desperation. Use project pricing, not hourly, for your first few clients.' },
      { mistake: 'Working for free "to build portfolio"', fix: 'Never work for free. Even $200 for a project that takes you 20 hours is better than $0. Paying clients treat the relationship differently and give you actual business context.' },
      { mistake: 'Taking any client who shows interest', fix: 'Even early on, red flags are red flags. Clients who push back hard on your already-low rates, demand endless revisions, or don\'t respect your time will cost you more than they pay.' },
      { mistake: 'Not raising rates after 6 months', fix: 'Set a calendar reminder for 6 months. Raise rates 20–30% for new clients. You don\'t owe anyone the same rate you charged when you were less experienced.' },
    ],
    tips: [
      'Your floor rate should be your true hourly cost: monthly expenses ÷ 20 billable hours/week × 0.75 (for taxes/overhead)',
      'Build 3 strong case studies before calling yourself established — not portfolio pieces, actual business outcomes',
      'Charge more than you think you\'re worth and less than an agency would charge — you live in that gap',
      'Your first 3 clients set your psychological rate anchor — aim higher than feels comfortable',
      'Time-track every project for the first 6 months — most new freelancers underestimate time by 40–60%',
    ],
    faq: [
      { q: 'How much should an absolute beginner freelancer charge?', a: 'Your minimum floor rate depends on your niche. For web development, $40–$50/hr is realistic even for beginners if you can demonstrate basic competency through portfolio pieces. Content writers might start at $25–$35/hr. The floor is wherever your living expenses require you to stop. Never go below $20/hr for any skilled work — below that, you\'re in commodity territory.' },
      { q: 'Should I charge less to get more clients when starting out?', a: 'Slightly lower than market rate is fine — 20–30% below mid-market is reasonable. But there\'s a point of diminishing returns: clients who pay $20/hr don\'t become $80/hr clients. You need to work with slightly-better clients from the start to calibrate toward higher rates over time.' },
      { q: 'How do I get my first client with no portfolio?', a: 'Build 2–3 spec projects (real-looking but hypothetical clients) and add them to a simple portfolio site. Reach out to your personal network with a clear offer. Offer a "founding client" discount (not free) to 1–2 businesses you admire. One good project beats zero projects every time.' },
      { q: 'When should I raise my rates after starting?', a: 'After every 2–3 projects, raise your rate for new clients by 15–25%. Don\'t wait for someone to tell you you\'re ready. If your current rates are getting accepted without pushback on most pitches, you\'re charging too little.' },
    ],
    nextLevel: { slug: 'junior', label: 'Junior (2–4 years)', teaser: 'Once you have 3+ client case studies and a clear niche, it\'s time to price like a junior specialist.' },
  },

  junior: {
    slug: 'junior',
    label: 'Junior',
    emoji: '📈',
    yearsRange: '2–4 years freelancing',
    title: 'Junior Freelancer Rates 2025 | Rates for 2–4 Year Freelancers | FreelanceRateIQ',
    description: 'Junior freelancer rate guide for 2025. What to charge with 2–4 years experience. Benchmarks for developers, designers, copywriters, and more — plus how to level up faster.',
    keywords: ['junior freelance rates 2025', 'freelance rates 2-4 years experience', 'junior freelance developer hourly rate', 'junior freelance designer rate', 'how much to charge junior freelancer'],
    heroText: 'You\'ve built a portfolio, landed several clients, and proven you can deliver. Now the question is: are you still charging entry-level rates? Most junior freelancers undercharge because they\'re not sure they\'ve "earned" higher rates yet. This page shows you exactly where you stand versus the market — and the specific moves that push you to mid-level rates fast.',
    ratesByNiche: [
      { niche: 'Web Developer', range: '$60–$90/hr', notes: 'React/Vue/Angular proficiency, deployed client projects, full-stack basics' },
      { niche: 'UX/UI Designer', range: '$55–$80/hr', notes: 'Complete project portfolio, user research basics, client presentations' },
      { niche: 'Copywriter', range: '$55–$80/hr', notes: 'Proven conversions, repeat clients, content strategy basics' },
      { niche: 'Graphic Designer', range: '$48–$72/hr', notes: 'Brand identity work, print + digital, client testimonials' },
      { niche: 'Content Writer', range: '$40–$62/hr', notes: 'SEO-driven content, proven traffic results, editorial experience' },
      { niche: 'Social Media Manager', range: '$40–$60/hr', notes: 'Measurable growth results, content strategy, analytics reporting' },
      { niche: 'Digital Marketing / SEO', range: '$55–$80/hr', notes: 'Proven keyword wins, client case studies, strategy reports' },
      { niche: 'Data Analyst', range: '$60–$90/hr', notes: 'Python/SQL proficiency, dashboard creation, actionable insights delivered' },
      { niche: 'DevOps / Cloud', range: '$70–$100/hr', notes: 'AWS certifications, containerization, CI/CD pipelines in production' },
      { niche: 'Consultant / Strategy', range: '$75–$110/hr', notes: 'Demonstrated business impact, clear methodology, repeatable process' },
    ],
    whereYouAre: [
      'You have 2–4 years of freelance experience with real client work to show',
      'You\'ve delivered projects successfully and have testimonials or reviews',
      'You\'re getting referrals from past clients — some inbound interest',
      'You\'ve started to specialize in a niche or type of client',
      'You sometimes lose deals on price and aren\'t sure if that\'s okay',
      'You\'re consistently busy but not sure if you\'re charging enough',
    ],
    howToLevel: [
      'Pick one industry vertical and become known in it. "Web developer for e-commerce brands" beats "web developer" — both on rates and on how easy it is to market yourself.',
      'Start tracking results in client metrics: "increased conversion rate 35%," "reduced page load by 2s," "grew organic traffic 120%." These numbers are your negotiation weapons.',
      'Stop taking any-and-all projects. At this stage, turning down misaligned clients is a rate multiplier — it signals confidence and keeps your capacity for better-fit clients.',
      'Build a simple case study format: problem → solution → result. Three strong case studies get you mid-level rates regardless of years of experience.',
      'Get AWS/GCP certified, get a UX certification, take a conversion copywriting course — a credential closes rate objections even when your portfolio already justifies the rate.',
      'Target a slightly larger client tier. If you\'ve been doing solopreneurs, pitch small businesses. If you\'ve done small businesses, pitch agencies. Each tier up means 30–50% more in rates.',
    ],
    clientTypes: [
      { type: 'Small-to-Medium Businesses', body: 'SMBs with 5–50 employees are the sweet spot for junior freelancers — they have real budgets, need regular work, and aren\'t yet so large that they use enterprise vendors. Winning 2–3 solid SMB retainers puts you on a clear path to mid-level.' },
      { type: 'Marketing Agencies', body: 'Agencies are excellent junior clients — they have consistent overflow work, pay on schedule, and expose you to diverse projects. Build agency relationships now; they often become long-term retainer clients and referral sources.' },
      { type: 'Startups (Seed–Series A)', body: 'Early-stage startups move fast, have flexible budgets relative to their urgency, and often need the exact skills junior freelancers have developed. The risk: many early startups are underfunded. Focus on funded startups (check Crunchbase).' },
    ],
    commonMistakes: [
      { mistake: 'Sticking with original clients at original rates', fix: 'Long-term clients should get annual rate increases of 10–20%. If you\'ve been at the same rate for 18+ months, you\'re funding your clients\' growth, not yours.' },
      { mistake: 'Competing on price with offshore freelancers', fix: 'You cannot win a price war with $8/hr offshore workers. Position on timezone, communication, cultural context, and relationship quality — all things that justify 5–10× higher rates.' },
      { mistake: 'Taking every revision request without scope discussion', fix: 'Scope creep at junior level is a rate killer. Define revision rounds in your contract. After revision 2, it\'s a change order. Enforcing scope discipline is professional, not rude.' },
      { mistake: 'Not asking for referrals', fix: 'The single most underused tactic at this stage. After every successful project, ask: "Do you know 1–2 other founders/managers who might benefit from similar work?" One referral ask turns one client into two.' },
    ],
    tips: [
      'Your hourly rate should increase with every new client — not every project, but every new client relationship',
      'Build a simple 1-page case study template — fill it out for every completed project immediately after delivery',
      'Specialize enough to be findable in your niche; generalize enough to never run out of work',
      'If you\'re fully booked at your current rate, you\'re undercharging — raise rates until you have 20% free capacity',
      'Start an email list or LinkedIn newsletter in your niche now — content compounds into inbound leads at mid-level',
    ],
    faq: [
      { q: 'How do I know when I\'m ready to move from entry to junior rates?', a: 'You\'re ready when you can point to 3+ completed projects with positive client outcomes and at least 1–2 testimonials. You don\'t need 4 years — some freelancers hit junior rates after 12 months. Experience quality matters more than time.' },
      { q: 'Should junior freelancers work with retainer clients?', a: 'Yes — retainers are your first stable income. Even a small $1,000–$2,000/month retainer covering 10–15 hours reduces the month-to-month income anxiety that causes junior freelancers to accept low one-off projects.' },
      { q: 'Is it worth getting certifications at the junior level?', a: 'Certain certifications close rate objections efficiently: AWS Solutions Architect, Google Analytics, HubSpot Content Marketing, Adobe Certified Expert. They don\'t teach you much you don\'t already know — but they signal credibility to clients who are on the fence about your experience level.' },
      { q: 'How do I handle clients who push back on my rates?', a: 'At junior level, some pushback is expected. The best response is not to justify your rate but to anchor to outcomes: "My last client saw X result from this type of work." If they still push back heavily, they may not be the right client. Let some deals go.' },
    ],
    nextLevel: { slug: 'mid-level', label: 'Mid-Level (4–7 years)', teaser: 'Once you have a clear specialty, consistent demand, and 5+ strong case studies, you\'re pricing for mid-level.' },
  },

  'mid-level': {
    slug: 'mid-level',
    label: 'Mid-Level',
    emoji: '⚡',
    yearsRange: '4–7 years freelancing',
    title: 'Mid-Level Freelance Rates 2025 | Established Freelancer Benchmarks | FreelanceRateIQ',
    description: 'Mid-level freelance rates for 2025. What established freelancers with 4–7 years charge across web development, design, copywriting, and more.',
    keywords: ['mid level freelance rates 2025', 'established freelance developer rates', 'experienced freelancer hourly rate', 'mid-level freelance designer rate', 'freelance rates 4-7 years experience'],
    heroText: 'At mid-level, you have enough experience that your skills are no longer in question. The rate conversation shifts from "can you deliver?" to "are you the right fit?" Mid-level is where many freelancers plateau — not because they can\'t charge more, but because they haven\'t made the mindset shift from "selling services" to "delivering outcomes." This page shows the rates, the strategies, and the mindset changes that push mid-level freelancers toward senior.',
    ratesByNiche: [
      { niche: 'Web Developer', range: '$85–$130/hr', notes: 'Full-stack, TypeScript, production systems, team leadership experience' },
      { niche: 'UX/UI Designer', range: '$80–$120/hr', notes: 'Product design systems, user research, stakeholder presentations' },
      { niche: 'Copywriter', range: '$75–$115/hr', notes: 'Conversion-focused copy, email sequences, landing pages with proven results' },
      { niche: 'Graphic Designer', range: '$70–$105/hr', notes: 'Brand identity systems, packaging, campaign design' },
      { niche: 'Content Writer', range: '$60–$90/hr', notes: 'Content strategy, editorial direction, SEO-driven content programs' },
      { niche: 'Social Media Manager', range: '$60–$90/hr', notes: 'Full social strategy, paid social, analytics and reporting' },
      { niche: 'Digital Marketing / SEO', range: '$80–$120/hr', notes: 'Full-funnel strategy, technical SEO, demonstrable ROI track record' },
      { niche: 'Data Analyst', range: '$90–$135/hr', notes: 'Advanced analytics, ML basics, business intelligence leadership' },
      { niche: 'DevOps / Cloud', range: '$110–$160/hr', notes: 'Multi-cloud architecture, SRE practices, production incident response' },
      { niche: 'Consultant / Strategy', range: '$130–$195/hr', notes: 'Clear methodology, documented business outcomes, executive communication' },
    ],
    whereYouAre: [
      'You\'re consistently busy — more inbound work than you can take on at current capacity',
      'Clients refer you without being asked — your reputation is doing some of the selling',
      'You have a clear specialty: a niche industry, technology, or problem type you\'re known for',
      'You turn down some projects because they\'re not the right fit',
      'You\'ve been at roughly the same rate range for 12–18+ months',
      'You wonder if senior rates are something you "qualify for" yet',
    ],
    howToLevel: [
      'Shift from hourly to project and retainer pricing. Mid-level freelancers who charge hourly cap their income. Project-based and retainer pricing rewards your speed and expertise — not just your time.',
      'Build a proprietary process or framework. "My 3-phase design sprint" is worth more than "I design things." Named processes signal systematized expertise and justify senior rates.',
      'Start producing content in your niche. Case studies, LinkedIn posts, a newsletter. Content at this stage converts directly into inbound leads at better rates.',
      'Increase your client floor. Consciously stop taking projects under $5,000. Mid-level freelancers who maintain a minimum project size grow faster than those who stay flexible on size.',
      'Build relationships with other senior/expert freelancers who can refer overflow. When they\'re booked, they refer to you — their trust signals quality to the client.',
      'Develop one high-value specialization that commands a premium. "UX designer" is mid-level. "UX designer for enterprise SaaS onboarding flows" can price like senior.',
    ],
    clientTypes: [
      { type: 'Established SMBs and Mid-Market Cos', body: 'Companies with $5M–$50M revenue are ideal mid-level clients. They have professional procurement, defined budgets, and genuinely need specialized skills. Projects are larger, relationships longer, and rates higher than with early-stage clients.' },
      { type: 'Agencies as Subcontractors', body: 'By mid-level, you can charge agencies $80–$130/hr to handle their overflow. Agencies mark you up to their clients, so they expect to pay professional rates. This is the most consistent income source at this stage if you want predictability without business development.' },
      { type: 'Series B+ Startups', body: 'Funded startups at Series B or later have proper budgets and can pay mid-level rates without negotiation. They move fast, value expertise, and often convert to longer engagements. Getting into 2–3 funded startups per year creates excellent case studies.' },
    ],
    commonMistakes: [
      { mistake: 'Still quoting hourly for complex projects', fix: 'Move complex projects to fixed-price with defined deliverables. Fixed-price rewards your expertise and eliminates the awkward "was that 3 or 4 hours?" dynamic that drags down the relationship.' },
      { mistake: 'Not having a clear niche statement', fix: 'You need a one-sentence answer to "what do you do?" that\'s specific enough to be memorable. If your answer takes more than 10 seconds, you\'re describing skills rather than positioning a specialty.' },
      { mistake: 'Accepting below-floor projects "just this once"', fix: 'Every below-floor project is a signal to yourself (and the market) that your floor is negotiable. Hold the floor. Better to have 2 weeks of empty calendar than 2 months of under-market work.' },
      { mistake: 'Underinvesting in tools and infrastructure', fix: 'Mid-level is the time to invest in a proper CRM, proposal software, invoicing tool, and professional contract templates. These signal professionalism and reduce friction in your business development.' },
    ],
    tips: [
      'Mid-level is where most freelancers plateau — break out by choosing depth over breadth in your niche',
      'If you\'re turning away 30%+ of inbound requests, your rates are still too low',
      'Client roster curation is now as important as client acquisition — drop the bottom 20% every year',
      'Your rate for new clients should always be higher than your rate for existing clients',
      'Start thinking in annual client value, not hourly rates — a $120/hr client at 20 hrs/month is $28,800/year',
    ],
    faq: [
      { q: 'What\'s the difference between a mid-level and senior freelancer?', a: 'The primary difference is who initiates the relationship. Mid-level freelancers do most of the client development. Senior freelancers mostly receive inbound inquiries. The rate difference reflects reputation, demand, and niche authority — not just additional years of experience.' },
      { q: 'Should I move to project-based pricing at mid-level?', a: 'Yes, for most project types. Hourly billing caps your income and can feel adversarial (clients watching the clock). Project pricing rewards your speed and creates cleaner client relationships. Keep hourly for genuinely open-ended retainers and advisory work.' },
      { q: 'How do I raise rates without losing current clients?', a: 'Give existing clients 60–90 days notice of upcoming rate increases. Frame it as annual calibration to market rates. Most good clients accept increases of 10–20% when framed professionally. If a client leaves over a 15% increase, they were not going to support your growth anyway.' },
      { q: 'Is a specialty really necessary at mid-level?', a: 'Not required, but it dramatically accelerates rate growth. Generalists plateau faster at mid-level because they compete on price. Specialists compete on fit and expertise, which is a much better negotiating position. Even a loose specialty ("I primarily work with B2B SaaS") makes a meaningful rate difference.' },
    ],
    nextLevel: { slug: 'senior', label: 'Senior (7–12 years)', teaser: 'Inbound demand, a named process, and clients willing to wait for you — that\'s the senior threshold.' },
  },

  senior: {
    slug: 'senior',
    label: 'Senior',
    emoji: '🏆',
    yearsRange: '7–12 years freelancing',
    title: 'Senior Freelance Rates 2025 | High-Value Specialist Benchmarks | FreelanceRateIQ',
    description: 'Senior freelance rates for 2025. What experienced specialists with 7–12 years charge for development, design, copywriting, and consulting. Premium market benchmarks.',
    keywords: ['senior freelance rates 2025', 'senior freelance developer hourly rate', 'experienced freelance specialist rates', 'senior freelance designer rate 2025', 'high value freelancer rates'],
    heroText: 'Senior freelancers don\'t look for clients — clients find them. At this level, your reputation, portfolio, and niche authority do most of the selling. Rates of $125–$200+/hr are the norm in most niches, and the real constraint on earnings is no longer rate but capacity and leverage. This page shows senior market benchmarks, how to maximize your leverage, and the mindset that separates senior from expert freelancers.',
    ratesByNiche: [
      { niche: 'Web Developer', range: '$130–$200/hr', notes: 'Architecture decisions, tech leadership, complex system integration' },
      { niche: 'UX/UI Designer', range: '$115–$175/hr', notes: 'Design systems leadership, product strategy, design org advisory' },
      { niche: 'Copywriter', range: '$110–$165/hr', notes: 'Brand voice authority, launch copy, conversion strategy leadership' },
      { niche: 'Graphic Designer', range: '$100–$155/hr', notes: 'Brand strategy + design execution, creative direction' },
      { niche: 'Content Writer / Strategist', range: '$90–$140/hr', notes: 'Content leadership, editorial strategy, channel authority' },
      { niche: 'SEO / Growth', range: '$120–$180/hr', notes: 'Technical SEO audits, growth strategy, cross-channel integration' },
      { niche: 'Data Scientist / ML Engineer', range: '$150–$230/hr', notes: 'Production ML systems, model deployment, data strategy leadership' },
      { niche: 'DevOps / Cloud Architect', range: '$160–$240/hr', notes: 'Enterprise cloud architecture, security, multi-region systems' },
      { niche: 'Consultant / Fractional', range: '$200–$350/hr', notes: 'Fractional CXO work, board advisory, strategy engagements' },
      { niche: 'AI / ML Specialist', range: '$175–$300/hr', notes: 'LLM integration, AI product development, enterprise AI strategy' },
    ],
    whereYouAre: [
      'Most of your clients come through referrals or inbound — you do little or no cold outreach',
      'Clients ask for you specifically, not just "a developer" or "a designer"',
      'You turn down more work than you take on',
      'You have a clear point of view on your industry — clients hire you partly for your opinions',
      'Your rate history shows consistent increases over the years without major client losses',
      'You\'ve built real relationships with other senior/expert freelancers in your space',
    ],
    howToLevel: [
      'Shift from selling time to selling leverage. Productize one service offering — a fixed-scope audit, a sprint package, a training program. Leverage means your income decouples from your hours.',
      'Write a book, publish a course, or launch a newsletter. Expert-level income starts before expert-level years when you build intellectual property that markets itself.',
      'Start commanding waiting lists. If clients can have you immediately, you\'re not priced high enough. A 2–4 week wait time is a feature, not a bug.',
      'Build referral flywheel with 3–5 complementary senior freelancers. You refer them when you\'re in their niche; they refer you back. Combined networks beat individual outreach at every level.',
      'Introduce minimum engagement sizes. Senior freelancers who accept any project size remain mid-level in practice. A $10K minimum forces better client quality.',
      'Audit your client roster annually. Fire your lowest-value 20%. The freed capacity always fills with better clients at higher rates.',
    ],
    clientTypes: [
      { type: 'Enterprise and Funded Companies', body: 'Series C+ startups, mid-market companies, and enterprise divisions can budget $150–$300+/hr for senior specialists without procurement escalation. These clients value reliability and expertise over price — exactly what senior freelancers offer.' },
      { type: 'Agencies Needing a Senior Voice', body: 'Agencies hire senior freelancers as strategic leads, creative directors, or technical architects for engagements that need seniority the agency doesn\'t have in-house. These are often 3–12 month engagements at strong rates.' },
      { type: 'Fractional / Interim Executive', body: 'Fractional CMO, fractional CTO, fractional design director — senior freelancers with leadership experience can step into these roles for $200–$400+/hr. The market for fractional executives has grown dramatically since 2020.' },
    ],
    commonMistakes: [
      { mistake: 'Not raising rates despite high demand', fix: 'If you\'re consistently full and turning away work, raise rates 25–40% for new clients. Senior freelancers often undercharge out of habit, not necessity. Demand is the signal to raise rates, not a reason to stay comfortable.' },
      { mistake: 'Still working hourly for complex strategy work', fix: 'Senior strategic work should be priced as fixed engagements or retainers, not hourly. A senior consultant charging $200/hr for 10 hours of strategy advice is leaving $20K–$50K on the table vs. packaging it as a $30K engagement.' },
      { mistake: 'Not building IP and leverage', fix: 'At senior level, time is the constraint. Building courses, frameworks, or productized services creates income that doesn\'t require trading hours. Even one $1,000 course that sells 50 times/year is 50 hours of consulting income without the hours.' },
      { mistake: 'Under-investing in personal brand', fix: 'Senior clients often do due diligence before hiring. Your LinkedIn, website, published work, and speaking appearances are part of the vetting process. A sparse online presence at this level suggests you\'ve been doing client work but not building career capital.' },
    ],
    tips: [
      'Senior is where you start thinking about leverage: products, teams, partnerships — not more hours',
      'Publishing one genuinely useful piece of long-form content per month compounds into a major inbound lead source',
      'Speaking at one industry conference per year can produce 3–5 qualified inbound clients — the ROI is exceptional',
      'Your day rate ($1,000–$2,500/day) is often more compelling to corporate clients than your hourly rate',
      'Every senior freelancer should have an "exit price" — the rate at which they\'d drop everything for a new client',
    ],
    faq: [
      { q: 'What separates a $150/hr freelancer from a $300/hr freelancer?', a: 'Usually: niche specificity, demonstrable outcomes in that niche, personal brand, and scarcity. A $300/hr specialist is one of very few people who can do a specific thing for a specific type of client. A $150/hr specialist is excellent but one of many. The market pays a premium for scarcity at the intersection of skill + industry + outcome.' },
      { q: 'Is it worth moving to fractional executive roles at senior level?', a: 'For the right personality, yes. Fractional CMO, CTO, or CPO roles run $200–$400/hr and often involve 10–20 hours/week engagements. They\'re multi-month relationships that provide income stability while maintaining the flexibility of freelance. The main requirement is leadership experience alongside technical skill.' },
      { q: 'How do I stop competing with mid-level freelancers on price?', a: 'Clear niche positioning and visible credentials eliminate most price competition. When a client is comparing you to a mid-level generalist, something in your positioning isn\'t differentiating you enough. Tighten your specialty, sharpen your case studies, and lead with outcomes rather than deliverables.' },
      { q: 'Should senior freelancers have a minimum engagement size?', a: 'Yes. A $5,000–$10,000 minimum project size is appropriate for most senior freelancers. Small projects are disproportionately time-consuming relative to their value — intake, onboarding, and relationship management cost almost the same regardless of project size.' },
    ],
    nextLevel: { slug: 'expert', label: 'Expert / Principal (12+ years)', teaser: 'Authority, leverage, and rates above the market — that\'s the expert position.' },
  },

  expert: {
    slug: 'expert',
    label: 'Expert / Principal',
    emoji: '💎',
    yearsRange: '12+ years freelancing',
    title: 'Expert Freelance Rates 2025 | Top 5% Freelancer Benchmarks | FreelanceRateIQ',
    description: 'Expert freelance rates for 2025. What top-tier independent consultants and specialists charge — $200–$500+/hr benchmarks, leverage strategies, and how to build an expert-level freelance practice.',
    keywords: ['expert freelance rates 2025', 'top freelancer hourly rate', 'principal consultant rates', 'expert independent consultant rate', 'high ticket freelancer rates 2025'],
    heroText: 'Expert freelancers operate at a level where the conversation isn\'t about rate — it\'s about access. Clients come to them because there\'s no one else they\'d rather have, and the rate is whatever makes the client say yes. At $200–$500+/hr (or equivalent day/project rates), expert freelancers have solved the rate problem and instead focus on leverage, scalability, and the kind of work worth doing.',
    ratesByNiche: [
      { niche: 'Web / Software Architect', range: '$200–$350/hr', notes: 'Systems architecture, tech org advisory, CTO-level engineering leadership' },
      { niche: 'Principal UX Designer / Design Director', range: '$175–$280/hr', notes: 'Design system leadership, VP-level design strategy, org transformation' },
      { niche: 'Senior Conversion Copywriter', range: '$165–$300/hr', notes: 'Proven 7–8 figure launch results, brand voice authority, retained advisory' },
      { niche: 'Creative Director', range: '$160–$280/hr', notes: 'Campaign direction, brand narrative leadership, executive creative advisory' },
      { niche: 'Content / Editorial Director', range: '$140–$220/hr', notes: 'Content program P&L, SEO-driven growth leadership, editorial strategy' },
      { niche: 'Growth / Demand Gen Expert', range: '$175–$300/hr', notes: 'Multi-channel growth architecture, 8-figure revenue track record' },
      { niche: 'Staff / Principal ML Engineer', range: '$225–$400+/hr', notes: 'Production AI systems, LLM architecture, AI product development advisory' },
      { niche: 'Cloud / Security Architect', range: '$200–$350+/hr', notes: 'Enterprise cloud security, FedRAMP, SOC 2 architecture advisory' },
      { niche: 'Fractional C-Suite', range: '$250–$500+/hr', notes: 'Fractional CMO/CTO/CPO/CFO — board-level advisory and executive leadership' },
      { niche: 'Independent Strategy Consultant', range: '$300–$600+/hr', notes: 'McKinsey-equivalent advisory, board relationships, long-term retained counsel' },
    ],
    whereYouAre: [
      'Clients seek you out — you have a waitlist or turn away significant work',
      'You\'re known by name in your niche — people mention you in discussions you\'re not in',
      'You set your own terms — clients adapt to your process, not vice versa',
      'You\'ve built intellectual property: frameworks, methods, published writing, or speaking reputation',
      'You think in terms of engagements, retainers, and leverage — not individual hours',
      'Income is not the constraint — how to spend your time on work that matters is the constraint',
    ],
    howToLevel: [
      'Build a product or program alongside client work. A course, book, or cohort program that carries your methodology converts your expertise into scalable income independent of client hours.',
      'Consider a "firm" or associate model. Expert freelancers who want to scale past personal capacity can bring in 1–3 senior associates who do delivery while the principal does strategy and business development.',
      'Develop board and advisory positions. Expert freelancers become trusted advisors — joining advisory boards (often with equity), speaking at conferences, and building the kind of career capital that transcends any individual engagement.',
      'Shift to retained advisory. Instead of project-by-project work, move as many relationships as possible to monthly retainers of 5–20 hours. Predictable income, maximum leverage, minimum overhead.',
      'Publish your methodology. A book, a signature framework, or a body of work that articulates your intellectual contribution to your field creates inbound demand that runs indefinitely.',
      'Be selective enough to stay exceptional. Expert rates require expert results. Turning down wrong-fit work is a prerequisite for maintaining the performance that justifies expert rates.',
    ],
    clientTypes: [
      { type: 'C-Suite and Board-Level Clients', body: 'Expert freelancers work at the executive level — CMOs, CTOs, and CEOs who need trusted outside counsel. These relationships are advisory in nature, long-term, and compensated at rates that reflect the business impact at stake.' },
      { type: 'PE/VC Portfolio Companies', body: 'Private equity and venture capital-backed companies frequently hire expert independents for specific transformation engagements: growth strategy, technical architecture, brand repositioning. PE clients pay premium rates and expect measurable outcomes fast.' },
      { type: 'Conference and Speaking Engagements', body: 'Expert freelancers get paid to speak — at industry conferences, company offsites, and executive summits. Speaking fees ($5K–$25K+/engagement) add a meaningful income stream while building the visibility that drives more expert-level client work.' },
    ],
    commonMistakes: [
      { mistake: 'Still billing hourly for strategic work', fix: 'Expert strategic work should never be billed hourly. A 30-minute insight from an expert who\'s spent 15 years developing that perspective is worth far more than $350 (the hourly rate × 0.5). Use engagement and retainer pricing.' },
      { mistake: 'Underpricing out of imposter syndrome', fix: 'Even at the expert level, imposter syndrome is real. The market tells you your rate is right when clients accept without negotiation. If you\'re getting 100% acceptance, you\'re priced too low. Target 70–80% acceptance — some price resistance is a sign of correct pricing.' },
      { mistake: 'Not protecting time and energy', fix: 'Expert level is when you have the leverage to be selective — use it. Taking on clients or projects that drain you is a choice that costs more than the invoice value. Your best work comes from well-selected engagements.' },
      { mistake: 'Staying on platforms', fix: 'Expert freelancers who are still primarily sourcing through Upwork, Toptal, or Fiverr are leaving significant money on the table. Platform margins, positioning constraints, and rate ceilings all work against expert-level income. Direct relationships are the only path.' },
    ],
    tips: [
      'Expert rates are justified by scarcity + outcomes + trust — optimize all three simultaneously',
      'Day rates ($2,000–$5,000+) are often more palatable to corporate clients than hourly rates',
      'The best expert clients come from publishing and speaking — not from cold outreach',
      'Build 1–3 "anchor clients" on annual retainers — they provide stability while you take on exciting project work',
      'Teach what you know — courses, workshops, and keynotes compound your expertise into leverage',
    ],
    faq: [
      { q: 'Is there a ceiling on expert freelance rates?', a: 'Effectively no ceiling for the right combination of expertise, outcomes, and market. McKinsey principals bill at $600–$900/hr equivalent. Well-known fractional CMOs charge $300–$500/hr. The practical ceiling is client ability to pay and the availability of alternatives — both of which become less constraining as your reputation grows.' },
      { q: 'How do expert freelancers typically structure engagements?', a: 'Expert freelancers typically use: (1) Monthly retainers of 10–20 hours for ongoing advisory, (2) Fixed-scope strategic engagements at $25K–$100K+, (3) Speaking and training programs at day rates, (4) Fractional executive roles at $200–$400/hr equivalents. Pure hourly billing is rare at this level.' },
      { q: 'Should expert freelancers have employees or associates?', a: 'Optionally. Some expert freelancers prefer to stay solo and use rate/leverage to cap their hours at 20–25/week while maintaining high income. Others build small firms of 3–8 associates to scale delivery. Both work — the choice depends on whether you want to manage people or just do the work.' },
      { q: 'How important is personal brand at the expert level?', a: 'It\'s everything. Expert-level client relationships begin with reputation — someone has read your writing, heard you speak, or received a referral from someone who trusts you. Without a visible body of work and known reputation, you\'re functionally operating at senior rates regardless of experience.' },
    ],
    nextLevel: null,
  },
}

export async function generateStaticParams() {
  return Object.keys(levels).map((level) => ({ level }))
}

export async function generateMetadata({ params }: { params: Promise<{ level: string }> }): Promise<Metadata> {
  const { level } = await params
  const page = levels[level]
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://freelancerateiq.com/experience/${level}`,
      siteName: 'FreelanceRateIQ',
      type: 'website',
    },
  }
}

export default async function ExperienceLevelPage({ params }: { params: Promise<{ level: string }> }) {
  const { level } = await params
  const page = levels[level]
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
            <Link href="/experience" className="hover:text-white transition-colors">By Level</Link>
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <Link href="/#guide" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-lg transition-colors font-medium">
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
            <Link href="/experience" className="hover:text-white transition-colors">Rates by Experience</Link>
            <span>›</span>
            <span>{page.label}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight">
            {page.label} Freelance Rates
          </h1>
          <p className="text-slate-500 text-sm mb-4">{page.yearsRange}</p>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">{page.heroText}</p>
        </div>
      </section>

      {/* Rate table */}
      <section className="pb-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">{page.label} Rates by Niche</h2>
          <p className="text-slate-500 text-sm text-center mb-6">2025 US market · Hourly · {page.yearsRange}</p>
          <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-500 uppercase text-xs">
                    <th className="px-5 py-3 text-left">Niche</th>
                    <th className="px-5 py-3 text-left">Rate Range</th>
                    <th className="px-5 py-3 text-left hidden sm:table-cell">Typical Profile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {page.ratesByNiche.map((row) => (
                    <tr key={row.niche} className="hover:bg-slate-800/50">
                      <td className="px-5 py-3 font-medium text-white">{row.niche}</td>
                      <td className="px-5 py-3 text-indigo-300 font-medium">{row.range}</td>
                      <td className="px-5 py-3 text-slate-500 text-xs hidden sm:table-cell">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Where you are */}
      <section className="pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-7">
            <h2 className="text-xl font-bold text-white mb-4">📍 Signs You&apos;re at {page.label}</h2>
            <ul className="space-y-2">
              {page.whereYouAre.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-indigo-400 mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to level up */}
      <section className="pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">How to Level Up Your Rates</h2>
          <ul className="space-y-4">
            {page.howToLevel.map((item, i) => (
              <li key={i} className="flex items-start gap-4 bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="w-7 h-7 rounded-full bg-indigo-600/20 border border-indigo-800/50 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm font-bold text-indigo-400">
                  {i + 1}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Client types */}
      <section className="pb-14 px-4 bg-slate-900/30 border-t border-b border-slate-800 py-14">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Best Client Types at {page.label}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {page.clientTypes.map((c) => (
              <div key={c.type} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 text-sm">{c.type}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Common Mistakes at {page.label}</h2>
          <div className="space-y-4">
            {page.commonMistakes.map((item) => (
              <div key={item.mistake} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-red-400 text-sm flex-shrink-0 mt-0.5">❌</span>
                  <span className="font-semibold text-white text-sm">{item.mistake}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-sm flex-shrink-0 mt-0.5">✅</span>
                  <span className="text-slate-400 text-sm leading-relaxed">{item.fix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">{page.label} Quick Tips</h2>
          <ul className="space-y-3">
            {page.tips.map((tip) => (
              <li key={tip} className="flex items-start gap-3">
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
          <h2 className="text-2xl font-bold mb-6 text-center">FAQ</h2>
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

      {/* Next level CTA */}
      {page.nextLevel && (
        <section className="pb-14 px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 text-center">
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">Next Stage</p>
              <h3 className="font-bold text-white mb-2">{page.nextLevel.label}</h3>
              <p className="text-slate-400 text-sm mb-4">{page.nextLevel.teaser}</p>
              <Link
                href={`/experience/${page.nextLevel.slug}`}
                className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                See {page.nextLevel.label} Rates →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Main CTA */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-b from-indigo-950/60 to-slate-900 border border-indigo-800/50 rounded-2xl p-10">
            <h2 className="text-3xl font-bold text-white mb-3">Calculate Your Exact Rate</h2>
            <p className="text-slate-400 mb-8">
              Niche + experience level + market = your number. Free calculator, takes 30 seconds.
            </p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Use the Free Rate Calculator →
            </Link>
            <p className="text-slate-500 text-xs mt-3">
              Also: <Link href="/experience" className="underline hover:text-slate-300">All experience levels</Link>
              {' · '}
              <Link href="/calculators" className="underline hover:text-slate-300">Niche calculators</Link>
              {' · '}
              <Link href="/cities" className="underline hover:text-slate-300">City rates</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-bold text-sm"><span className="text-white">FreelanceRate</span><span className="text-indigo-400">IQ</span></Link>
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
