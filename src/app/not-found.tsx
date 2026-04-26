import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.desc}>
          Looks like you have ventured off the beaten path. Let us guide you
          back.
        </p>
        <Link href="/" className={styles.btn}>
          Return to Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
