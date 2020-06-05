import React from "react";

import styles from "./Header.module.css";

import Brand from "../Brand/Brand.js";
import Nav from "../Nav/Nav.js";

export default function Header() {
  return (
    <header className={styles.header}>
      <Brand />
      <Nav />
    </header>
  );
}
