import type { Metadata } from "next";
import TourFilters from "@/components/tours/TourFilters";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kerala Tour Packages | Backwaters, Hill Stations, Wildlife & More",
  description:
    "Browse 50+ Kerala tour packages covering Alleppey backwaters, Munnar tea estates, Wayanad wildlife, Thekkady spice tours, Kovalam Ayurveda retreats and Fort Kochi heritage walks.",
  alternates: { canonical: "https://keralatravels.in/tours" },
};

export default function ToursPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1400&q=80"
            alt="Kerala wilderness"
          />
          <div className={styles.heroOverlay} />
        </div>
        <AnimateOnScroll
          animation="fadeUp"
          as="div"
          className={styles.heroContent}
        >
          <p className={styles.eyebrow}>All Kerala Experiences</p>
          <h1 className={styles.heroTitle}>Our Tour Packages</h1>
          <p className={styles.heroSub}>
            Hand-crafted journeys across God's Own Country
          </p>
        </AnimateOnScroll>
      </div>

      <div className="container">
        <div className={styles.body}>
          <TourFilters />
        </div>
      </div>
    </div>
  );
}
