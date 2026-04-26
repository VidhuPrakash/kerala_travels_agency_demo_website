import {
  Leaf,
  Handshake,
  Sprout,
  Zap,
  Sparkles,
  Shield,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import styles from "./WhyUs.module.css";

const features = [
  {
    icon: Leaf,
    title: "Kerala-Born Experts",
    desc: "Our guides grew up in these hills, backwaters, and forests. They know the hidden paths, the family-run restaurants, and the festivals nobody else knows about.",
  },
  {
    icon: Handshake,
    title: "Small Group Promise",
    desc: "Maximum 12 travellers per group. You get personal attention, real conversations, and an experience that never feels like a tourist conveyor belt.",
  },
  {
    icon: Sprout,
    title: "Responsible Tourism",
    desc: "We partner with local communities, eco-lodges, and tribal cooperatives. Every rupee you spend here stays here.",
  },
  {
    icon: Zap,
    title: "24/7 On-Ground Support",
    desc: "From booking to your last day, our local team is just a WhatsApp message away — no call centers, no bots, just humans who care.",
  },
  {
    icon: Sparkles,
    title: "Tailor-Made Itineraries",
    desc: "No two trips are the same. Tell us your dream Kerala experience and we will craft something that fits you perfectly.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    desc: "KTDC approved, Government of Kerala certified, and comprehensively insured. Travel with complete peace of mind.",
  },
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.inner}>
          <AnimateOnScroll
            animation="slideLeft"
            as="div"
            className={styles.left}
          >
            <p className={styles.eyebrow}>Why Choose Us</p>
            <h2 className={styles.title}>
              Kerala Is Our Home,
              <br />
              <em>Not Just Our Office</em>
            </h2>
            <p className={styles.desc}>
              Founded in Malappuram in 2008, we have spent over sixteen years
              building relationships with boatmen in Alleppey, planters in
              Munnar, tribal elders in Wayanad, and Ayurvedic doctors in
              Kovalam. That network is your advantage.
            </p>
            <a href="/about" className={styles.btn}>
              Our Story <ArrowRight size={16} />
            </a>
          </AnimateOnScroll>
          <div className={styles.right}>
            {features.map((f, i) => (
              <AnimateOnScroll
                key={f.title}
                animation="fadeUp"
                delay={i * 90}
                as="div"
                className={styles.feature}
              >
                <span className={styles.featureIcon}>
                  <f.icon size={24} />
                </span>
                <div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
