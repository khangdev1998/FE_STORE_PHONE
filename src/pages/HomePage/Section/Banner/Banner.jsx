import React from "react";
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="col-12">
          <img
            className="rounded-4 img-fluid"
            src="https://cdn2492.cdn-template-4s.com/media/banner/banner-4.webp"
            alt="this-image"
          />
        </div>

        <div className="row g-md-4 g-sm-3 g-2 mt-1">
          <div className="col-md-3 col-6">
            <img
              className="rounded-4 img-fluid"
              src="https://cdn2492.cdn-template-4s.com/media/banner/banner-6.webp"
              alt="this-image"
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              className="rounded-4 img-fluid"
              src="https://cdn2492.cdn-template-4s.com/media/banner/banner-7.webp"
              alt="this-image"
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              className="rounded-4 img-fluid"
              src="https://cdn2492.cdn-template-4s.com/media/banner/banner-5.webp"
              alt="this-image"
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              className="rounded-4 img-fluid"
              src="https://cdn2492.cdn-template-4s.com/media/banner/banner-8.webp"
              alt="this-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
