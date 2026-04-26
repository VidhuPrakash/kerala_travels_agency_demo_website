import type { Metadata } from "next";
import { Sprout, Handshake, FileText } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | Kerala Travels — Local Experts Since 2008",
  description:
    "Kerala Travels is a Malappuram-based travel agency founded in 2008. Discover our story, our team, and our commitment to authentic, responsible Kerala tourism.",
  alternates: { canonical: "https://keralatravels.in/about" },
};

const team = [
  {
    name: "Rajan Nair",
    role: "Founder & Head Guide",
    since: "2008",
    expertise: "Backwaters & Wildlife",
    initials: "RN",
  },
  {
    name: "Amina Fathima",
    role: "Travel Experiences Director",
    since: "2011",
    expertise: "Ayurveda & Wellness",
    initials: "AF",
  },
  {
    name: "Thomas Kurien",
    role: "Senior Nature Guide",
    since: "2013",
    expertise: "Wayanad & Thekkady",
    initials: "TK",
  },
  {
    name: "Lakshmi Devi",
    role: "Customer Experience Lead",
    since: "2015",
    expertise: "Heritage & Culture",
    initials: "LD",
  },
];

const milestones = [
  {
    year: "2008",
    event: "Founded in Malappuram with a single houseboat and a dream",
  },
  {
    year: "2011",
    event: "Expanded to hill stations — launched Munnar and Wayanad packages",
  },
  {
    year: "2014",
    event:
      "Partnered with Adivasi cooperatives in Wayanad for tribal homestays",
  },
  {
    year: "2017",
    event:
      "Launched Ayurveda retreats in collaboration with certified Kovalam doctors",
  },
  {
    year: "2020",
    event:
      "Went digital-first; supported 200+ families during pandemic with zero layoffs",
  },
  {
    year: "2024",
    event:
      "Reached 5,000+ happy travellers and launched our carbon-neutral pledge",
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1400&q=80"
          alt="Kerala backwaters"
          className={styles.heroImg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Our Story</p>
          <h1 className={styles.heroTitle}>
            Born in Kerala.
            <br />
            <em>Built for Travellers.</em>
          </h1>
        </div>
      </div>

      <div className="container">
        {/* Story */}
        <section className={styles.story}>
          <AnimateOnScroll
            animation="slideLeft"
            as="div"
            className={styles.storyText}
          >
            <p className={styles.eyebrowGreen}>
              Founded 2008 · Malappuram, Kerala
            </p>
            <h2 className={styles.sectionTitle}>
              We Did Not Build a Travel Company.
              <br />
              We Opened Our Home.
            </h2>
            <p>
              Kerala Travels started with a simple belief: the best guide is
              someone who grew up on these shores, waded through these
              backwaters, and breathed this monsoon air since childhood. Our
              founder Rajan Nair, a boatman's son from Alleppey, started with a
              single kettuvallam and a conviction that travellers deserved more
              than scripted tours.
            </p>
            <p>
              Sixteen years later, we are a team of twenty local experts spread
              across every major destination in Kerala — but our philosophy has
              never changed. We treat every traveller as a guest in our home,
              not a transaction on a ledger.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll
            animation="slideRight"
            delay={150}
            as="div"
            className={styles.storyImage}
          >
            <img
              src="https://images.unsplash.com/photo-1584553421349-3557471bed79?w=700&q=80"
              alt="Kerala spice plantation"
            />
          </AnimateOnScroll>
        </section>

        {/* Milestones */}
        <section className={styles.timeline}>
          <h2 className={styles.sectionTitleCenter}>Our Journey</h2>
          <div className={styles.timelineList}>
            {milestones.map((m, i) => (
              <AnimateOnScroll
                key={m.year}
                animation="slideLeft"
                delay={i * 80}
                as="div"
                className={styles.milestone}
              >
                <div className={styles.milestoneYear}>{m.year}</div>
                <div className={styles.milestoneLine} />
                <div className={styles.milestoneEvent}>{m.event}</div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className={styles.team}>
          <p className={styles.eyebrowGreen}>The People Behind Your Journey</p>
          <h2 className={styles.sectionTitle}>Meet Our Experts</h2>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <AnimateOnScroll
                key={member.name}
                animation="scaleUp"
                delay={i * 100}
                as="div"
                className={styles.memberCard}
              >
                <div className={styles.memberAvatar}>{member.initials}</div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberMeta}>
                  Since {member.since} · {member.expertise}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className={styles.values}>
          <div className={styles.valuesGrid}>
            {[
              {
                icon: Sprout,
                title: "Responsible Travel",
                desc: "We offset every carbon footprint and donate 2% of revenue to Kerala forest conservation.",
              },
              {
                icon: Handshake,
                title: "Community First",
                desc: "Over 80% of our supplier network is local family-owned businesses, cooperatives, and tribal homestays.",
              },
              {
                icon: FileText,
                title: "Full Transparency",
                desc: "No hidden fees, no commission-based recommendations. Your itinerary is built for your experience, not our margins.",
              },
            ].map((v, i) => (
              <AnimateOnScroll
                key={v.title}
                animation="fadeUp"
                delay={i * 120}
                as="div"
                className={styles.value}
              >
                <span className={styles.valueIcon}>
                  <v.icon size={24} />
                </span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
