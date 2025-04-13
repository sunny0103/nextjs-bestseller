"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" className={`${pathname === "/" ? styles.active : ""}`}>
            Home
          </Link>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 5"
          >
            <path
              className={styles.path}
              d="M0 2.5 Q25 0 50 2.5 T100 2.5"
              fill="none"
            />
          </svg>
        </li>
        <li>
          <Link
            href="/about"
            className={`${pathname === "/about" ? styles.active : ""}`}
          >
            About
          </Link>
          <svg
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 5"
          >
            <path
              className={styles.path}
              d="M0 2.5 Q25 0 50 2.5 T100 2.5"
              fill="none"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
}
