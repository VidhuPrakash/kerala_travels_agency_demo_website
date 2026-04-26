
import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import FeaturedTours from '@/components/home/FeaturedTours'
import Destinations from '@/components/home/Destinations'
import WhyUs from '@/components/home/WhyUs'
import Testimonials from '@/components/home/Testimonials'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Kerala Travels | Best Kerala Tour Packages from Malappuram',
  description: 'Kerala Travels — your local experts for backwater houseboats, Munnar tea estate tours, Wayanad wildlife, Ayurveda retreats and heritage walks. Book authentic Kerala experiences.',
  alternates: { canonical: 'https://keralatravels.in' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedTours />
      <Destinations />
      <WhyUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}
