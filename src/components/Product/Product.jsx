import React from "react";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className={`${styles.product} card rounded-3 overflow-hidden`}>
      <div className={`${styles.productLabel}`}>HOT</div>

      <Link to="/product-detail" className={styles.productImage}>
        <img
          src="https://cdn2492.cdn-template-4s.com/thumbs/san-pham/dien-thoai/113_thumb_350.webp"
          alt="this-image"
        />
      </Link>

      <div className={styles.productInfo}>
        <Link to="/product-detail" className={styles.productInfoName}>
          Apple iPhone 11 Pro Max, 256GB, Black – Unlocked
        </Link>
        <div className={styles.productInfoRating}>
          <div className="d-flex align-items-center gap-1">
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-star"></i>
          </div>
          <span>(5 Đánh giá)</span>
        </div>
        <div className={styles.productInfoPrice}>
          <span className={styles.priceCurrent}>10.000.000 VNĐ</span>
          <span className={styles.priceOld}>22.000.000 VNĐ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
