import React from "react";
import { Link } from "react-router-dom";

import styles from "./Brand.module.css";

export default function () {
  return (
    <Link to="/" className={styles.brand}>
      JDSB
    </Link>
  );
}
