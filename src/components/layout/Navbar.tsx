"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav
      ref={navRef}
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Kerala Travels Home">
          <Leaf className={styles.logoIcon} size={22} />
          <span className={styles.logoText}>
            Kerala <em>Travels</em>
          </span>
        </Link>

        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {[
            ["/", "Home"],
            ["/tours", "Tours"],
            ["/about", "About"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={styles.cta}
              onClick={() => setOpen(false)}
            >
              Plan Your Trip
            </Link>
          </li>
        </ul>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
