import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Welcome to Kerala Travels">
      <div className={styles.bg}>
        <img
          src="https://cdn.pixabay.com/photo/2017/06/27/14/20/couple-2447450_1280.jpg"
          alt="Kerala backwaters at sunset"
          className={styles.bgImg}
        />
        <div className={styles.overlay} />
        <div className={styles.grain} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <MapPin size={14} /> Based in Malappuram, Kerala
        </p>
        <h1 className={styles.title}>
          Where Every Journey
          <br />
          <em>Becomes a Memory</em>
        </h1>
        <p className={styles.subtitle}>
          Authentic Kerala experiences crafted by locals — backwaters, highland
          tea estates,
          <br />
          ancient forests, and Ayurvedic sanctuaries, all woven into one
          journey.
        </p>
        <div className={styles.actions}>
          <Link href="/tours" className={styles.btnPrimary}>
            Explore Tours
          </Link>
          <Link href="/contact" className={styles.btnSecondary}>
            Plan Custom Trip
          </Link>
        </div>
        <div className={styles.stats}>
          {[
            ["16+", "Years in Kerala"],
            ["5,000+", "Happy Travellers"],
            ["4.9", "Average Rating"],
            ["50+", "Destinations"],
          ].map(([n, l]) => (
            <div key={l} className={styles.stat}>
              <span className={styles.statNum}>
                {n}
                {l === "Average Rating" && (
                  <Star size={14} fill="currentColor" />
                )}
              </span>
              <span className={styles.statLabel}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
