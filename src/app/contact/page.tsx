import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Kerala Travels — Plan Your Kerala Holiday",
  description:
    "Get in touch with Kerala Travels to plan your perfect Kerala holiday. Call, WhatsApp, or fill the form and our local experts will respond within 4 hours.",
  alternates: { canonical: "https://keralatravels.in/contact" },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Kerala Travels",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MG Road",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      postalCode: "676505",
      addressCountry: "IN",
    },
    telephone: "+914832300000",
    email: "hello@keralatravels.in",
    url: "https://keralatravels.in",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>We Are Here For You</p>
          <h1 className={styles.heroTitle}>
            Let's Plan Your
            <br />
            <em>Perfect Kerala Journey</em>
          </h1>
          <p className={styles.heroSub}>
            Our local experts respond within 4 hours on weekdays.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          <AnimateOnScroll
            animation="slideLeft"
            as="div"
            className={styles.formSide}
          >
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <ContactForm />
          </AnimateOnScroll>

          <AnimateOnScroll
            animation="slideRight"
            delay={150}
            as="div"
            className={styles.infoSide}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Get in Touch Directly</h3>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={20} />
                <div>
                  <p className={styles.contactLabel}>Phone</p>
                  <a href="tel:+914832300000" className={styles.contactValue}>
                    +91 483 230 0000
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MessageCircle className={styles.contactIcon} size={20} />
                <div>
                  <p className={styles.contactLabel}>WhatsApp</p>
                  <a
                    href="https://wa.me/914832300000"
                    className={styles.contactValue}
                  >
                    +91 483 230 0000
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={20} />
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <a
                    href="mailto:hello@keralatravels.in"
                    className={styles.contactValue}
                  >
                    hello@keralatravels.in
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={20} />
                <div>
                  <p className={styles.contactLabel}>Office</p>
                  <p className={styles.contactValue}>
                    MG Road, Malappuram
                    <br />
                    Kerala 676505, India
                  </p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Clock className={styles.contactIcon} size={20} />
                <div>
                  <p className={styles.contactLabel}>Hours</p>
                  <p className={styles.contactValue}>
                    Monday – Saturday
                    <br />
                    9:00am – 7:00pm IST
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.faqCard}>
              <h3 className={styles.infoTitle}>Quick Answers</h3>
              {[
                [
                  "How far in advance should I book?",
                  "For peak season (Oct–Mar), we recommend booking 4–6 weeks ahead. Off-season bookings can be made 1–2 weeks prior.",
                ],
                [
                  "Is a custom itinerary possible?",
                  "Absolutely — custom itineraries are our specialty. Share your dates, interests, and budget and we will build something unique.",
                ],
                [
                  "What payment methods do you accept?",
                  "We accept UPI, bank transfer, credit/debit cards, and international wire transfers. Only 20% deposit needed to confirm.",
                ],
              ].map(([q, a]) => (
                <div key={q} className={styles.faq}>
                  <p className={styles.faqQ}>{q}</p>
                  <p className={styles.faqA}>{a}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
