import React from "react";
import styles from "./Hero.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1650,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };
  return (
    <div className={styles.hero}>
      <div className={styles.heroSlider}>
        <Slider {...settings}>
          <div className={styles.heroSliderItem}>
            <img
              src="https://cdn2492.cdn-template-4s.com/media/banner/slide-1.webp"
              alt="this-image"
            />
          </div>
          <div className={styles.heroSliderItem}>
            <img
              src="https://cdn2492.cdn-template-4s.com/media/banner/slide-2.webp"
              alt="this-image"
            />
          </div>
        </Slider>
      </div>

      <div className={styles.heroList}>
        <div className="row g-4">
          <div className="col-4">
            <img
              src="https://cdn2492.cdn-template-4s.com/media/banner/banner-1.webp"
              alt="this-image"
            />
          </div>
          <div className="col-4">
            <img
              src="https://cdn2492.cdn-template-4s.com/media/banner/banner-2.webp"
              alt="this-image"
            />
          </div>
          <div className="col-4">
            <img
              src="https://cdn2492.cdn-template-4s.com/media/banner/banner-3.webp"
              alt="this-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
