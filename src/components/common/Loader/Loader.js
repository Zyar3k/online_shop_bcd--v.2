import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      {/* <div className={`${styles.loadingSpinner} ${styles.first}`}></div>
      <div className={`${styles.loadingSpinner} ${styles.second}`}></div>
      <div className={`${styles.loadingSpinner} ${styles.third}`}></div>
      <div className={`${styles.loadingSpinner} ${styles.fourth}`}></div> */}
      <div className={`${styles.loadingSpinner} ${styles.fifth}`}></div>
    </div>
  );
};

export default Loader;
