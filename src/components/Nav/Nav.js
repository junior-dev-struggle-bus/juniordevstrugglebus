import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

export default function () {
  return (
    <nav>
      <ul className={styles.linkList}>
        <li className={styles.navLinkItem}>
          <Link to="/resources" className={styles.navLink}>
            Resources
          </Link>
        </li>
        <li className={styles.navLinkItem}>
          <Link to="/events" className={styles.navLink}>
            Upcoming Events
          </Link>
        </li>
        <li className={styles.navLinkItem}>
          <Link to="/organization" className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navLinkItem}>
          <a
            href="https://juniordevstruggleblog.com/"
            target="_blank"
            className={styles.navLink}
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}
