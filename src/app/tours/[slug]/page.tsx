import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Zap,
  Check,
  Leaf,
  Phone,
  MessageCircle,
  Star,
} from "lucide-react";
import { tours, getTourBySlug } from "@/data/tours";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import styles from "./page.module.css";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = getTourBySlug(params.slug);
  if (!tour) return {};
  return {
    title: `${tour.title} | Kerala Travels`,
    description: tour.longDescription,
    alternates: { canonical: `https://keralatravels.in/tours/${tour.slug}` },
    openGraph: {
      title: `${tour.title} | Kerala Travels`,
      description: tour.description,
      images: [{ url: tour.image, width: 800, height: 600, alt: tour.title }],
    },
  };
}

export default function TourDetailPage({ params }: Props) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();

  const discount = Math.round((1 - tour.price / tour.originalPrice) * 100);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.longDescription,
    touristType: "Adventure",
    itinerary: { "@type": "ItemList", name: tour.title },
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: "Kerala Travels",
      url: "https://keralatravels.in",
    },
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className={styles.hero}>
        <img src={tour.image} alt={tour.title} className={styles.heroImg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className="container">
            <Link href="/tours" className={styles.back}>
              <ArrowLeft size={16} /> All Tours
            </Link>
            <span className={styles.category}>{tour.category}</span>
            <h1 className={styles.title}>{tour.title}</h1>
            <p className={styles.tagline}>{tour.tagline}</p>
            <div className={styles.heroMeta}>
              <span>
                <MapPin size={14} /> {tour.location}
              </span>
              <span>
                <Clock size={14} /> {tour.duration}
              </span>
              <span>
                <Zap size={14} /> {tour.difficulty}
              </span>
              <span>
                <Star size={14} fill="currentColor" /> {tour.rating} (
                {tour.reviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {/* Main content */}
          <div className={styles.main}>
            <AnimateOnScroll
              animation="fadeUp"
              as="section"
              className={styles.section}
            >
              <h2 className={styles.sectionTitle}>About This Experience</h2>
              <p className={styles.longDesc}>{tour.longDescription}</p>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="fadeUp"
              delay={100}
              as="section"
              className={styles.section}
            >
              <h2 className={styles.sectionTitle}>Trip Highlights</h2>
              <ul className={styles.highlights}>
                {tour.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>
                    <Check className={styles.checkIcon} size={16} />
                    {h}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="fadeUp"
              delay={200}
              as="section"
              className={styles.section}
            >
              <h2 className={styles.sectionTitle}>What's Included</h2>
              <ul className={styles.includes}>
                {tour.includes.map((inc) => (
                  <li key={inc} className={styles.include}>
                    <Leaf size={16} />
                    {inc}
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>

          {/* Booking sidebar */}
          <AnimateOnScroll
            animation="slideRight"
            delay={200}
            as="div"
            className={styles.sidebar}
          >
            <div className={styles.bookingCard}>
              <div className={styles.priceBlock}>
                <p className={styles.from}>Starting from</p>
                <div className={styles.priceRow}>
                  <span className={styles.price}>
                    ₹{tour.price.toLocaleString("en-IN")}
                  </span>
                  {discount > 0 && (
                    <span className={styles.badge}>–{discount}%</span>
                  )}
                </div>
                <p className={styles.originalPrice}>
                  <s>₹{tour.originalPrice.toLocaleString("en-IN")}</s> per
                  person
                </p>
              </div>

              <div className={styles.duration}>{tour.duration}</div>

              <Link href="/contact" className={styles.bookBtn}>
                Book This Tour
              </Link>
              <Link href="/contact" className={styles.inquireBtn}>
                Ask a Question
              </Link>

              <p className={styles.guarantee}>
                <Check size={14} /> Free cancellation up to 7 days before
                <br />
                <Check size={14} /> Best price guarantee
                <br />
                <Check size={14} /> Pay just 20% deposit to confirm
              </p>
            </div>

            <div className={styles.helpCard}>
              <h3>Need Help Choosing?</h3>
              <p>Our Kerala experts are available Mon–Sat, 9am–7pm IST.</p>
              <a href="tel:+914832300000" className={styles.phone}>
                <Phone size={16} /> +91 483 230 0000
              </a>
              <a href="https://wa.me/914832300000" className={styles.whatsapp}>
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
