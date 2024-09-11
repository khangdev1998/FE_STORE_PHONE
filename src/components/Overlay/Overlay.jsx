import React from "react";
import styles from "./Overlay.module.scss";

const Overlay = ({ isVisible, onClick }) => {
  return isVisible ? (
    <div className={styles.overlay} onClick={onClick}></div>
  ) : null;
};

export default Overlay;
