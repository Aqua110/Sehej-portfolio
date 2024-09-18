import React from "react";
import styles from "../Assets/css/Spinner.module.css";

const Spinner = () => {
  return (
<div className={styles['full-spinner-container']} >
    <div>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    </div>
  );
};

export default Spinner;