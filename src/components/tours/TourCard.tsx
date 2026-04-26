import Link from "next/link";
import { Zap, MapPin, Clock, ArrowRight, Star } from "lucide-react";
import { Tour } from "@/data/tours";
import styles from "./TourCard.module.css";

export default function TourCard({
  tour,
  index = 0,
}: {
  tour: Tour;
  index?: number;
}) {
  const discount = Math.round((1 - tour.price / tour.originalPrice) * 100);
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link
        href={`/tours/${tour.slug}`}
        className={styles.imgWrap}
        aria-label={tour.title}
      >
        <img
          src={tour.image}
          alt={tour.title}
          className={styles.img}
          loading="lazy"
        />
        <div className={styles.badges}>
          <span className={styles.category}>{tour.category}</span>
          {discount > 0 && (
            <span className={styles.discount}>–{discount}%</span>
          )}
        </div>
        <div className={styles.difficulty}>
          <span>
            <Zap size={12} /> {tour.difficulty}
          </span>
        </div>
      </Link>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.location}>
            <MapPin size={12} /> {tour.location}
          </span>
          <span className={styles.duration}>
            <Clock size={12} /> {tour.duration}
          </span>
        </div>
        <h3 className={styles.title}>
          <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
        </h3>
        <p className={styles.desc}>{tour.description}</p>
        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.currentPrice}>
              ₹{tour.price.toLocaleString("en-IN")}
            </span>
            <span className={styles.originalPrice}>
              ₹{tour.originalPrice.toLocaleString("en-IN")}
            </span>
            <span className={styles.perPerson}>per person</span>
          </div>
          <div className={styles.rating}>
            <span className={styles.star}>
              <Star size={12} fill="currentColor" />
            </span>
            <span className={styles.ratingNum}>{tour.rating}</span>
            <span className={styles.reviews}>({tour.reviews})</span>
          </div>
        </div>
        <Link href={`/tours/${tour.slug}`} className={styles.btn}>
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
