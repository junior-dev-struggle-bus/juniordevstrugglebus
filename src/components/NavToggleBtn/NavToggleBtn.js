import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import styles from "./NavToggleBtn.module.css";

export default function ({ showClose, toggleNav }) {
  const Icon = showClose ? FaTimes : FaBars;

  return <Icon onClick={toggleNav} className={styles.navToggle} />;
}
