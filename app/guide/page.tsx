export const dynamic = 'force-dynamic';

import Stripe from 'stripe';
import { guideTitle, guideContent, guideSections } from './content';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
});

interface PageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function GuidePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  if (!sessionId) {
    return <ErrorPage message="No session ID provided. Please purchase the guide to access this page." />;
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return <ErrorPage message="Invalid or expired link. Please contact support." />;
  }

  if (session.payment_status !== 'paid') {
    return <ErrorPage message="Payment not completed. Please complete your purchase to access the guide." />;
  }

  // Parse markdown-like content to HTML sections
  const sections = guideContent.split('\n---\n');

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; }
          .guide-container { max-width: 100% !important; padding: 20px !important; }
        }
        .guide-body h1 { font-size: 1.875rem; font-weight: 700; margin: 2rem 0 1rem; }
        .guide-body h2 { font-size: 1.5rem; font-weight: 700; margin: 2rem 0 0.75rem; color: #34d399; border-bottom: 1px solid #374151; padding-bottom: 0.5rem; }
        .guide-body h3 { font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 0.5rem; color: #6ee7b7; }
        .guide-body h4 { font-size: 1rem; font-weight: 600; margin: 1rem 0 0.25rem; color: #a7f3d0; }
        .guide-body p { margin: 0.75rem 0; line-height: 1.7; color: #d1d5db; }
        .guide-body ul, .guide-body ol { margin: 0.75rem 0 0.75rem 1.5rem; color: #d1d5db; }
        .guide-body li { margin: 0.25rem 0; line-height: 1.6; }
        .guide-body strong { color: #f9fafb; font-weight: 600; }
        .guide-body em { color: #9ca3af; font-style: italic; }
        .guide-body blockquote { border-left: 3px solid #34d399; padding-left: 1rem; margin: 1rem 0; color: #9ca3af; font-style: italic; background: #1f2937; border-radius: 0 0.375rem 0.375rem 0; padding: 0.75rem 1rem; }
        .guide-body table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.875rem; }
        .guide-body th { background: #1f2937; color: #34d399; padding: 0.5rem 0.75rem; text-align: left; border: 1px solid #374151; }
        .guide-body td { padding: 0.5rem 0.75rem; border: 1px solid #374151; color: #d1d5db; }
        .guide-body tr:nth-child(even) td { background: #111827; }
        .guide-body code { background: #1f2937; padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.875rem; color: #34d399; }
        .guide-body pre { background: #111827; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1rem 0; border: 1px solid #374151; }
        .guide-body pre code { background: none; padding: 0; }
        .guide-body hr { border: none; border-top: 1px solid #374151; margin: 2rem 0; }
        .guide-body .checklist li { list-style: none; margin-left: -1.5rem; }
      `}</style>

      <main className="min-h-screen bg-slate-900 text-white">
        {/* Header */}
        <div className="bg-slate-800 border-b border-slate-700 no-print">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">FreelanceRateIQ</span>
              <p className="text-slate-400 text-xs mt-0.5">Your purchase is confirmed ✓</p>
            </div>
            <button
              onClick={() => window.print()}
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              💾 Save as PDF
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-800/50 border-b border-slate-700 no-print">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <p className="text-slate-400 text-xs mb-2 uppercase tracking-wider">Contents</p>
            <div className="flex flex-wrap gap-2">
              {guideSections.map((section, i) => (
                <span key={i} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                  {i + 1}. {section}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Guide Content */}
        <div className="guide-container max-w-4xl mx-auto px-4 py-10">
          <div
            className="guide-body"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(guideContent) }}
          />
        </div>

        {/* Footer */}
        <div className="bg-slate-800 border-t border-slate-700 mt-10 no-print">
          <div className="max-w-4xl mx-auto px-4 py-6 text-center">
            <p className="text-slate-400 text-sm">
              Questions? Reply to your purchase confirmation email.
            </p>
            <a href="/" className="text-emerald-400 hover:text-emerald-300 text-sm mt-2 inline-block">
              ← Back to FreelanceRateIQ Calculator
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

function ErrorPage({ message }: { message: string }) {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="text-5xl mb-6">🔒</div>
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="text-slate-400 mb-6">{message}</p>
        <a
          href="/"
          className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Back to Calculator
        </a>
      </div>
    </main>
  );
}

function renderMarkdown(md: string): string {
  return md
    // Headers
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Tables
    .replace(/^\|(.+)\|$/gm, (line) => {
      if (line.includes('---')) return '';
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      return '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
    })
    // Wrap table rows
    .replace(/(<tr>.*<\/tr>\n?)+/gs, (match) => {
      const rows = match.trim().split('\n').filter(Boolean);
      if (rows.length === 0) return match;
      const firstRow = rows[0].replace(/<td>/g, '<th>').replace(/<\/td>/g, '</th>');
      const rest = rows.slice(1).join('\n');
      return `<table>${firstRow}${rest ? '\n' + rest : ''}</table>`;
    })
    // Horizontal rules
    .replace(/^---$/gm, '<hr />')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Code inline
    .replace(/`(.+?)`/g, '<code>$1</code>')
    // Checkboxes
    .replace(/^- \[ \] (.+)$/gm, '<li>☐ $1</li>')
    .replace(/^- \[x\] (.+)$/gm, '<li>☑ $1</li>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/gs, '<ul>$&</ul>')
    // Paragraphs (lines that aren't already wrapped)
    .split('\n\n')
    .map(block => {
      block = block.trim();
      if (!block) return '';
      if (block.startsWith('<h') || block.startsWith('<ul') || block.startsWith('<table') ||
          block.startsWith('<blockquote') || block.startsWith('<hr') || block.startsWith('<pre')) {
        return block;
      }
      return `<p>${block.replace(/\n/g, '<br />')}</p>`;
    })
    .join('\n');
}
