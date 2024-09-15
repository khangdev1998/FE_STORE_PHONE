import React from "react";
import styles from "./Hero.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
              src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/100924-BANNER-IP16SR-1200.jpg"
              alt="this-image"
            />
          </div>
          <div className={styles.heroSliderItem}>
            <img
              src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/banner-tragop-3khong-1200-130724.png"
              alt="this-image"
            />
          </div>
          <div className={styles.heroSliderItem}>
            <img
              src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/030824-banner-oppo-reno12-1200.png"
              alt="this-image"
            />
          </div>
          <div className={styles.heroSliderItem}>
            <img
              src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/head-simso-1200-260624.png"
              alt="this-image"
            />
          </div>
        </Slider>
      </div>
      <div className={`${styles.heroList} d-md-block d-none`}>
        <div className="row g-sm-4 g-2">
          <div className="col-md-4">
            <img
              src="https://cdn2492.cdn-template-4s.com/media/banner/banner-1.webp"
              alt="this-image"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://cdn2492.cdn-template-4s.com/media/banner/banner-2.webp"
              alt="this-image"
            />
          </div>
          <div className="col-md-4">
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
