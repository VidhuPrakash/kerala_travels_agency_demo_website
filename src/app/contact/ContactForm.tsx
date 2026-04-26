"use client";
import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travel_date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent)
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <CheckCircle size={48} />
        </div>
        <h3>Thank You, {form.name}!</h3>
        <p>
          We have received your enquiry and will get back to you within 4 hours.
          Check your email at {form.email}.
        </p>
      </div>
    );

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
          >
            <option value="">Select a destination</option>
            {[
              "Alleppey Backwaters",
              "Munnar",
              "Wayanad",
              "Thekkady",
              "Kovalam",
              "Fort Kochi",
              "Complete Kerala Tour",
            ].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="travel_date">Planned Travel Date</label>
        <input
          id="travel_date"
          name="travel_date"
          type="date"
          value={form.travel_date}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your dream Kerala trip — group size, interests, budget, any special requests..."
        />
      </div>
      <button type="submit" className={styles.submit}>
        Send Enquiry <ArrowRight size={16} />
      </button>
    </form>
  );
}
