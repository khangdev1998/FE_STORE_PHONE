import React from "react";
import styles from "./ArticlesItem.module.scss";
import { Link } from "react-router-dom";
import articleImage from "../../assets/articles-image.png";
import PropTypes from "prop-types";

const ArticlesItem = ({ layout = "column" }) => {
  const layoutClass =
    layout === "row" ? styles.articlesItemRow : styles.articlesItemColumn;

  return (
    <div className={`${styles.articlesItem} ${layoutClass}`}>
      <Link
        to={"/blog-detail"}
        className={`${styles.articlesItemImage} ratio ratio-16x9`}
      >
        <img src={articleImage} alt="this-image" />
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

ArticlesItem.propTypes = {
  layout: PropTypes.string,
};

export default ArticlesItem;
