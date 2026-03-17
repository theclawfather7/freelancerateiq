export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: March 17, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="text-gray-700 mb-3">We collect information you provide directly to us, including:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Email address (when purchasing or signing up)</li>
          <li>Payment information (processed securely by Stripe — we never store card data)</li>
          <li>Usage data via Google Analytics (anonymized)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>To deliver your purchased products</li>
          <li>To send transactional emails related to your purchase</li>
          <li>To improve our calculator and content</li>
          <li>To analyze site traffic and usage patterns</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Data Sharing</h2>
        <p className="text-gray-700">We do not sell your personal information. We share data only with trusted service providers (Stripe for payments, Resend for email delivery) who are bound by confidentiality agreements.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Cookies & Analytics</h2>
        <p className="text-gray-700">We use Google Analytics to understand how visitors use our site. This data is aggregated and anonymized. You can opt out via your browser settings or the Google Analytics opt-out extension.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
        <p className="text-gray-700">You may request deletion of your data at any time by emailing hello@freelancerateiq.com. We will respond within 30 days.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Contact</h2>
        <p className="text-gray-700">Questions? Email us at <a href="mailto:hello@freelancerateiq.com" className="text-blue-600 underline">hello@freelancerateiq.com</a></p>
      </section>
    </div>
  )
}
