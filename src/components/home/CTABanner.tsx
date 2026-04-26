import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <img
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1400&q=80"
          alt="Kerala tea estate"
        />
        <div className={styles.overlay} />
      </div>
      <div className="container">
        <AnimateOnScroll animation="fadeUp" as="div" className={styles.content}>
          <p className={styles.eyebrow}>Limited Availability</p>
          <h2 className={styles.title}>Ready to Discover God's Own Country?</h2>
          <p className={styles.subtitle}>
            Our peak season packages for October–March are filling fast. Secure
            your spot with just a 20% deposit.
          </p>
          <div className={styles.actions}>
            <Link href="/tours" className={styles.btnPrimary}>
              See All Packages
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              Talk to an Expert
            </Link>
          </div>
          <p className={styles.note}>
            <Phone size={14} /> Call us: +91 483 230 0000 &nbsp;|&nbsp;{" "}
            <Mail size={14} /> hello@keralatravels.in
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
