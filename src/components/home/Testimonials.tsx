import { Star } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The Alleppey houseboat experience was beyond anything I imagined. Waking up to mist on the water with chai in hand — that image will stay with me forever. Kerala Travels handled every detail flawlessly.",
    tour: "Alleppey Backwater Odyssey",
  },
  {
    name: "James & Claire Whitmore",
    location: "London, UK",
    rating: 5,
    text: "We have travelled extensively across Asia, and this Munnar trip ranked in our top three experiences ever. The tea estate walks, the wildlife, the bungalow — and our guide Rajan was extraordinary.",
    tour: "Munnar Tea Highland Escape",
  },
  {
    name: "Arjun Menon",
    location: "Bangalore",
    rating: 5,
    text: "Booked the Wayanad tribal trail for my honeymoon. The team went above and beyond — surprise flower decorations at the homestay, a private waterfall picnic. Five stars is not enough.",
    tour: "Wayanad Tribal Forest Trail",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <AnimateOnScroll animation="fadeUp" as="div" className={styles.header}>
          <p className={styles.eyebrow}>What Travellers Say</p>
          <h2 className={styles.title}>Stories From The Road</h2>
        </AnimateOnScroll>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <AnimateOnScroll
              key={i}
              animation="scaleUp"
              delay={i * 130}
              as="article"
              className={styles.card}
            >
              <div className={styles.stars}>
                {Array(t.rating)
                  .fill(null)
                  .map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name[0]}</div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorMeta}>
                    {t.location} &middot; <em>{t.tour}</em>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
