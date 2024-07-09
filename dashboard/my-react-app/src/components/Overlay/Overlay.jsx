import React from "react";
import styles from "./Overlay.module.scss";

const Overlay = ({ isVisible, onClick }) => {
  return isVisible ? (
    <div className={styles.overlay} onClick={onClick}>
      <div class={styles.closeBtn}>Close</div>
    </div>
  ) : null;
};

export default Overlay;
