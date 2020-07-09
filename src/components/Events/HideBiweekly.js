import React from "react";
import styles from "./HideBiweekly.module.css";

export default function ({ hideBiweekly, setHideBiweekly }) {
  const handleClick = () => {
    setHideBiweekly(!hideBiweekly);
  };

  return (
    <button
      type="button"
      className={`btn primary ${styles.btn}`}
      onClick={handleClick}
    >
      {hideBiweekly ? "Show Biweekly Meetups" : "Hide Biweekly Meetups"}
    </button>
  );
}
