import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import styles from "./Destinations.module.css";

const destinations = [
  {
    name: "Alleppey",
    desc: "Venice of the East",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
  },
  {
    name: "Munnar",
    desc: "Tea Capital of Kerala",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
  },
  {
    name: "Wayanad",
    desc: "Tribal Forest Heartland",
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
  },
  {
    name: "Kovalam",
    desc: "Ayurveda & Arabian Sea",
    img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80",
  },
  {
    name: "Thekkady",
    desc: "Spice & Wildlife Haven",
    img: "https://images.unsplash.com/photo-1584553421349-3557471bed79?w=600&q=80",
  },
  {
    name: "Fort Kochi",
    desc: "500 Years of History",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
  },
];

export default function Destinations() {
  return (
    <section className={styles.section}>
      <div className="container">
        <AnimateOnScroll animation="fadeUp" as="div" className={styles.header}>
          <p className={styles.eyebrow}>Where We Take You</p>
          <h2 className={styles.title}>Kerala's Most Beloved Destinations</h2>
        </AnimateOnScroll>
      </div>
      <div className={styles.strip}>
        {destinations.map((d) => (
          <Link href="/tours" key={d.name} className={styles.card}>
            <img
              src={d.img}
              alt={`${d.name} Kerala`}
              className={styles.img}
              loading="lazy"
            />
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardName}>{d.name}</h3>
              <p className={styles.cardDesc}>{d.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
