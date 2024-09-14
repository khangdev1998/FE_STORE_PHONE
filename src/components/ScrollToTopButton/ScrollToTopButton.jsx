import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.scss";
import arrowUp from ".././../assets/arrow-up.svg";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hàm xử lý khi nhấn vào nút scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Theo dõi sự kiện cuộn để hiển thị hoặc ẩn nút
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <img src={arrowUp} alt="this-icon" />
    </button>
  );
};

export default ScrollToTopButton;
