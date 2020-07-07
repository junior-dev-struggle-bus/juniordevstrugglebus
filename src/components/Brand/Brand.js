import React from "react";
import { Link } from "react-router-dom";

import styles from "./Brand.module.css";

export default function ({ footer = false }) {
  return (
    <Link to="/" className={`${styles.brand} ${footer ? styles.white : ""}`}>
      JDSB
    </Link>
  );
}
