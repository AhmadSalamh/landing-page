"use client";
import styles from "./Mouse.module.scss";

const Mouse = () => {
  const handleClick = () => {
    const section1 = document.getElementById("section-1");
    section1.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={handleClick}
      className={styles.mouseIcon}
      role="button"
      aria-label="Mouse Icon"
    >
      <span className={styles.mouseWheel}></span>
    </button>
  );
};

export default Mouse;
