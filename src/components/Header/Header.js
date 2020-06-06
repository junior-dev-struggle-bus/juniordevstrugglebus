import React, { useState, useEffect } from "react";

import styles from "./Header.module.css";

import Brand from "../Brand/Brand";
import Nav from "../Nav/Nav";
import NavToggleBtn from "../NavToggleBtn/NavToggleBtn";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showClose, setShowClose] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  function toggleNav(params) {
    if (window.innerWidth < 768) {
      setShowNav(!showNav);
      setShowClose(!showClose);
    }
  }

  function handleResize() {
    if (window.innerWidth < 768) {
      setShowNav(false);
      setShowClose(false);
    }
  }

  return (
    <header className={styles.header}>
      <Brand />
      <NavToggleBtn showClose={showNav} toggleNav={toggleNav} />
      <Nav showNav={showNav} toggleNav={toggleNav} />
    </header>
  );
}
