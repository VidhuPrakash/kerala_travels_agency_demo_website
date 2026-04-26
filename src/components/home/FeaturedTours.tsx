import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedTours } from "@/data/tours";
import TourCard from "@/components/tours/TourCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import styles from "./FeaturedTours.module.css";

export default function FeaturedTours() {
  const tours = getFeaturedTours();

  return (
    <section className={styles.section} id="tours">
      <div className="container">
        <AnimateOnScroll animation="fadeUp" as="div" className={styles.header}>
          <p className={styles.eyebrow}>Handpicked Experiences</p>
          <h2 className={styles.title}>Featured Kerala Journeys</h2>
          <p className={styles.subtitle}>
            Curated by our local experts — each itinerary is tested, tasted, and
            loved before it reaches you.
          </p>
        </AnimateOnScroll>
        <div className={styles.grid}>
          {tours.map((tour, i) => (
            <TourCard key={tour.id} tour={tour} index={i} />
          ))}
        </div>
        <div className={styles.cta}>
          <Link href="/tours" className={styles.link}>
            View All Tour Packages <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
