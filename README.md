# Kerala Travels — Next.js Website

A production-ready travel agency website for Kerala, India, built with Next.js 14 App Router.

## Features

- **SSR/SSG**: All pages use Server-Side Rendering or Static Generation
- **SEO-Optimised**: Full metadata API, Open Graph, Twitter cards, JSON-LD structured data
- **Sitemap & Robots**: Auto-generated sitemap.xml and robots.txt
- **Component Architecture**: Every section is a separate, reusable component
- **CSS Modules**: Scoped styles, zero CSS-in-JS overhead
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigable
- **Responsive**: Works on all screen sizes

## Project Structure

```
src/
  app/                  # Next.js App Router pages
    page.tsx            # Home page (SSG)
    layout.tsx          # Root layout with Navbar & Footer
    sitemap.ts          # Auto-generated sitemap
    robots.ts           # robots.txt
    tours/
      page.tsx          # Tours listing (SSG)
      [slug]/
        page.tsx        # Tour detail (SSG with generateStaticParams)
    about/page.tsx      # About page (SSG)
    contact/page.tsx    # Contact page (SSR)
  components/
    layout/             # Navbar, Footer
    home/               # Hero, FeaturedTours, Destinations, WhyUs, Testimonials, CTABanner
    tours/              # TourCard, TourFilters
  data/
    tours.ts            # All tour data + helper functions
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## SEO Implementation

- `metadata` export on every page
- `generateMetadata` for dynamic tour pages
- JSON-LD structured data (TouristTrip, TravelAgency)
- Canonical URLs
- Open Graph & Twitter card meta
- Auto-generated sitemap.xml
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text on all images
- Semantic HTML throughout
