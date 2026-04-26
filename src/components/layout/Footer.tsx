import Link from "next/link";
import { Leaf, MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#1a3c2e"
          />
        </svg>
      </div>
      <div className={styles.body}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <p className={styles.brandName}>
                <Leaf size={18} /> Kerala <em>Travels</em>
              </p>
              <p className={styles.tagline}>
                God's Own Country, Crafted For You
              </p>
              <p className={styles.desc}>
                Based in Malappuram, Kerala. Serving travellers across India and
                the world since 2008.
              </p>
              <div className={styles.socials}>
                {["Instagram", "Facebook", "WhatsApp"].map((s) => (
                  <a key={s} href="#" aria-label={s}>
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.col}>
              <h4>Destinations</h4>
              <ul>
                {[
                  "Alleppey Backwaters",
                  "Munnar",
                  "Wayanad",
                  "Thekkady",
                  "Kovalam",
                  "Fort Kochi",
                ].map((d) => (
                  <li key={d}>
                    <Link href="/tours">{d}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Company</h4>
              <ul>
                {[
                  ["About Us", "/about"],
                  ["Our Tours", "/tours"],
                  ["Contact", "/contact"],
                  ["Privacy Policy", "/privacy"],
                  ["Terms", "/terms"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <Link href={h}>{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Contact</h4>
              <address>
                <p>
                  <MapPin size={14} /> Malappuram, Kerala 676505
                </p>
                <p>
                  <Phone size={14} />{" "}
                  <a href="tel:+914832300000">+91 483 230 0000</a>
                </p>
                <p>
                  <Mail size={14} />{" "}
                  <a href="mailto:hello@keralatravels.in">
                    hello@keralatravels.in
                  </a>
                </p>
                <p>
                  <Clock size={14} /> Mon–Sat: 9am – 7pm IST
                </p>
              </address>
            </div>
          </div>

          <div className={styles.bottom}>
            <p>
              &copy; {new Date().getFullYear()} Kerala Travels. All rights
              reserved. Kerala Tourism Approved Agency.
            </p>
            <p>GSTIN: 32AAAAA0000A1ZZ | Reg. No: KT/MAL/2008/0142</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
