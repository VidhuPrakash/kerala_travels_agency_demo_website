
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://keralatravels.in'),
  title: {
    default: 'Kerala Travels | Authentic Kerala Tour Packages & Houseboat Holidays',
    template: '%s | Kerala Travels',
  },
  description: 'Discover Kerala with hand-crafted tour packages covering backwaters, hill stations, wildlife, and Ayurveda. Book houseboat holidays, Munnar tea estate tours, and more from Malappuram-based Kerala experts.',
  keywords: ['Kerala tour packages', 'Kerala houseboat', 'Alleppey backwaters', 'Munnar tours', 'Kerala travel agency', 'God own country tours', 'Kerala Ayurveda retreat'],
  authors: [{ name: 'Kerala Travels' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://keralatravels.in',
    siteName: 'Kerala Travels',
    title: 'Kerala Travels | Authentic Kerala Tour Packages',
    description: 'Discover Kerala with hand-crafted tour packages from local experts in Malappuram.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Kerala Travels' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerala Travels | Authentic Kerala Tour Packages',
    description: 'Discover Kerala with hand-crafted tour packages from local experts.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://keralatravels.in' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
