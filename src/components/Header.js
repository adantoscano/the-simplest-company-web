import React from "react";
import Link from "next/link";

import { navLinks } from "../utils/data.js";
import styles from "../../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
        {navLinks.map((link, index) => {
          return (
              <Link key={index} href={link.path} passHref>
                <li key={index}>{link.name}</li>
              </Link>
          );
        })}
        </ul>
      </nav>
    </header>
  );
}
