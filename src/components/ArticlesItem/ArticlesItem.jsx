import React from "react";
import styles from "./ArticlesItem.module.scss";
import { Link } from "react-router-dom";

const ArticlesItem = ({ layout = "column" }) => {
  const layoutClass =
    layout === "row" ? styles.articlesItemRow : styles.articlesItemColumn;

  return (
    <div className={`${styles.articlesItem} ${layoutClass}`}>
      <Link to={"/blog-detail"} className={`${styles.articlesItemImage} ratio ratio-16x9`}>
        <img
          src="https://cdn2492.cdn-template-4s.com/thumbs/tin-tuc/avatar1715259374421-17152593751802061368444_thumb_350.webp"
          alt="this-image"
        />
      </Link>
      <div className={styles.articlesItemContent}>
        <Link to={"/blog-detail"}>
          Sự kiện Apple: iPhone 16 Pro có màu Titan Sa mạc mới tuyệt đẹp, Apple
          Watch nhiều nâng cấp!
        </Link>
        <p>
          Tại sự kiện Wonderlust ra mắt iPhone 15 series, kỹ sư khoa học vật
          liệu Isabel Yang cho biết iPhone 15 Pro mới sẽ sử dụng titan cấp 5
          trong khung khiến không ít người thắc mắc.
        </p>
      </div>
    </div>
  );
};

export default ArticlesItem;
