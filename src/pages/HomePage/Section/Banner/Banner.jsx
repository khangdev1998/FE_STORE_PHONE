import React from "react";
import styles from "./Banner.module.scss";
import banner1 from "../../../../assets/banner-1.png";
import banner2 from "../../../../assets/banner-2.png";
import banner3 from "../../../../assets/banner-3.png";
import banner4 from "../../../../assets/banner-4.png";
import banner5 from "../../../../assets/banner-5.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className="col-12">
          <img
            className="rounded-4 img-fluid"
            src={banner1}
            alt="this-image"
          />
        </div>

        <div className="row g-md-4 g-sm-3 g-2 mt-1">
          <div className="col-md-3 col-6">
            <img
              className="rounded-4 img-fluid"
              src={banner2}
              alt="this-image"
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              className="rounded-4 img-fluid"
              src={banner3}
              alt="this-image"
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              className="rounded-4 img-fluid"
              src={banner4}
              alt="this-image"
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              src={banner5}
              className="rounded-4 img-fluid"
              alt="this-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
