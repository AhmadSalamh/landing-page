"use client";
import styles from "./loader.module.scss";
import { useState, useEffect } from "react";
const Loader = () => {
  const [loading, setLoading] = useState(true); // Set initial state to true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading state to false when component mounts
    }, 2000);
  }, []); // Empty dependency array to run the effect only once

  return (
    loading && (
      <div className="fixed w-full h-full flex items-center justify-center z-50 bg-black">
        <div className={styles.loader} role="alert" aria-busy="true"></div>
      </div>
    )
  )
};

export default Loader;
