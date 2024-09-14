import React from "react";
import { Link } from "react-router-dom";
import styles from "./ReadmoreButton.module.scss";

const ReadmoreButton = ({ to, text }) => {
  return (
    <Link to={to} className={styles.readmore}>
      {text}
      <i className="bi bi-arrow-right ms-2"></i>
    </Link>
  );
};

export default ReadmoreButton;
