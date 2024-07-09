import React from "react";
import styles from "../SellingProducts/SellingProducts.module.scss";
import productImage1 from "../../../../assets/images/product-image1.png";
import productImage2 from "../../../../assets/images/product-image2.png";
import productImage3 from "../../../../assets/images/product-image3.png";
import productImage4 from "../../../../assets/images/product-image4.png";
import productImage5 from "../../../../assets/images/product-image5.png";
import award1 from "../../../../assets/images/award1.svg";
import award2 from "../../../../assets/images/award2.svg";
import award3 from "../../../../assets/images/award3.svg";
import arrowRight from "../../../../assets/images/arrow-right.svg";

const SellingProducts = () => {
  return (
    <div className="product mt-4 box-content">
      <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center gap-2 mb-4">
        <h2 className={styles.productTitle}>Sản phẩm bán chạy</h2>
        <a className="read-more" href="#!">
          Xem tất cả
          <img src={arrowRight} alt="this-is-icon" />
        </a>
      </div>
      <div className={styles.productList}>
        <div className={styles.productItem}>
          <div className={`${styles.productItemImage}`}>
            <img src={productImage1} alt="this-is-image" />
            <div className={styles.productItemImageAward}>
              <img src={award1} />
            </div>
          </div>
          <div className={styles.productItemContent}>
            <h4>
              <a href="#!">Acquadi-Giò</a>
            </h4>
            <div className={styles.productItemStatistic}>
              <div className={styles.productItemStatisticCol}>
                <span>Lượt bán:</span>
                <b>10000</b>
              </div>
              <div className={styles.productItemStatisticCol}>
                <span>Doanh số:</span>
                <b>10.452.751</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productItem}>
          <div className={`${styles.productItemImage}`}>
            <img src={productImage2} alt="this-is-image" />
            <div className={styles.productItemImageAward}>
              <img src={award2} />
            </div>
          </div>
          <div className={styles.productItemContent}>
            <h4>
              <a href="#!">Acquadi-Giò</a>
            </h4>
            <div className={styles.productItemStatistic}>
              <div className={styles.productItemStatisticCol}>
                <span>Lượt bán:</span>
                <b>10000</b>
              </div>
              <div className={styles.productItemStatisticCol}>
                <span>Doanh số:</span>
                <b>10.452.751</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productItem}>
          <div className={`${styles.productItemImage}`}>
            <img src={productImage3} alt="this-is-image" />
            <div className={styles.productItemImageAward}>
              <img src={award3} />
            </div>
          </div>
          <div className={styles.productItemContent}>
            <h4>
              <a href="#!">Acquadi-Giò</a>
            </h4>
            <div className={styles.productItemStatistic}>
              <div className={styles.productItemStatisticCol}>
                <span>Lượt bán:</span>
                <b>10000</b>
              </div>
              <div className={styles.productItemStatisticCol}>
                <span>Doanh số:</span>
                <b>10.452.751</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productItem}>
          <div className={`${styles.productItemImage}`}>
            <img src={productImage4} alt="this-is-image" />
          </div>
          <div className={styles.productItemContent}>
            <h4>
              <a href="#!">Acquadi-Giò</a>
            </h4>
            <div className={styles.productItemStatistic}>
              <div className={styles.productItemStatisticCol}>
                <span>Lượt bán:</span>
                <b>10000</b>
              </div>
              <div className={styles.productItemStatisticCol}>
                <span>Doanh số:</span>
                <b>10.452.751</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productItem}>
          <div className={`${styles.productItemImage}`}>
            <img src={productImage5} alt="this-is-image" />
          </div>
          <div className={styles.productItemContent}>
            <h4>
              <a href="#!">Acquadi-Giò</a>
            </h4>
            <div className={styles.productItemStatistic}>
              <div className={styles.productItemStatisticCol}>
                <span>Lượt bán:</span>
                <b>10000</b>
              </div>
              <div className={styles.productItemStatisticCol}>
                <span>Doanh số:</span>
                <b>10.452.751</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellingProducts;
