import React from "react";
import styles from "./Hero.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../../../../assets/hero-1.jpg";
import hero2 from "../../../../assets/hero-2.png";
import hero3 from "../../../../assets/hero-3.png";
import hero4 from "../../../../assets/hero-4.png";
import heroSecond1 from "../../../../assets/hero-second-1.png";
import heroSecond2 from "../../../../assets/hero-second-2.png";
import heroSecond3 from "../../../../assets/hero-second-3.png";

const Hero = () => {
  const settings = {
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
            src={hero1}
              alt="this-image"
            />
          </div>
          <div className={styles.heroSliderItem}>
            <img
              src={hero2}
              alt="this-image"
            />
          </div>
          <div className={styles.heroSliderItem}>
            <img
              src={hero3}
              alt="this-image"
            />
          </div>
          <div className={styles.heroSliderItem}>
            <img
              src={hero4}
              alt="this-image"
            />
          </div>
        </Slider>
      </div>
      <div className={`${styles.heroList} d-md-block d-none`}>
        <div className="row g-sm-4 g-2">
          <div className="col-md-4">
            <img
             src={heroSecond1}
              alt="this-image"
            />
          </div>
          <div className="col-md-4">
            <img
              src={heroSecond2}
              alt="this-image"
            />
          </div>
          <div className="col-md-4">
            <img
              src={heroSecond3}
              alt="this-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
