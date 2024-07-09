import React from "react";
import styles from "../Gallery/Gallery.module.scss";
import arrowRight from "../../assets/images/arrow-right.svg";

const Gallery = () => {
  return (
    <div className="box-content">
      <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center gap-2">
        <h2 className="title">Tài trợ</h2>
        <a className="read-more" href="#!">
          Xem tất cả
          <img src={arrowRight} alt="this-is-icon" />
        </a>
      </div>

      <div className={styles.gallery}>
        <img
          src="https://plus.unsplash.com/premium_photo-1682633117352-f94fecd90abe?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="this-image"
        />
        <img
          src="https://images.unsplash.com/photo-1618914241432-5043b1b4acf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="this-image"
        />
        <img
          src="https://images.unsplash.com/photo-1497700003451-e1df943a194b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="this-image"
        />
      </div>
    </div>
  );
};

export default Gallery;
