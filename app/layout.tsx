import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FreelanceRateIQ — What Should You Actually Charge?',
  description: 'Free freelance rate calculator. Get a data-backed hourly rate for your niche, experience, and market in 30 seconds.',
  keywords: 'freelance rate calculator, how much to charge freelancing, freelancer hourly rate, freelance pricing guide',
  openGraph: {
    title: 'FreelanceRateIQ — What Should You Actually Charge?',
    description: 'Free freelance rate calculator. Know your worth in 30 seconds.',
    url: 'https://freelancerateiq.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N8PWNM79');` }} />
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VWZ1CYZ0S9" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-VWZ1CYZ0S9');` }} />
      </head>
      <body className={inter.className}>
        {/* GTM noscript fallback */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N8PWNM79" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        {children}
      </body>
    </html>
  )
}
