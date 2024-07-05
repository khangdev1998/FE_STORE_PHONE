import React from "react";
import styles from "./CardList.module.scss";
import arrowRight from "../../../assets/images/arrow-right.svg";

const CardList = () => {
  return (
    <div className="row g-xl-4 g-3">
      <div className="col-xxl-3 col-sm-6 col-12">
        <div className={`${styles.cardItem} ${styles.cardItemFirst}`}>
          <div
            className={`${styles.cardItemContent} flex-column align-items-sm-start align-items-center gap-3`}
          >
            <h2>Kết nối gian hàng</h2>
            <button className={styles.cardItemContentBtn}>
              <img src={arrowRight} alt="this-is-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-sm-6 col-12">
        <div className={`${styles.cardItem} ${styles.cardItemSecond}`}>
          <div
            className={`${styles.cardItemContent} flex-column align-items-sm-start align-items-center gap-3`}
          >
            <h2>Sản phẩm đang bán</h2>
            <button className={styles.cardItemContentBtn}>
              <img src={arrowRight} alt="this-is-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-sm-6 col-12">
        <div className={`${styles.cardItem} ${styles.cardItemThird}`}>
          <div
            className={`${styles.cardItemContent} flex-column align-items-sm-start align-items-center gap-3`}
          >
            <h2>Đơn hàng</h2>
            <button className={styles.cardItemContentBtn}>
              <img src={arrowRight} alt="this-is-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-sm-6 col-12">
        <div className={`${styles.cardItem} ${styles.cardItemFourth}`}>
          <div
            className={`${styles.cardItemContent} flex-column align-items-sm-start align-items-center gap-3`}
          >
            <h2>Hướng dẫn bán hàng</h2>
            <button className={styles.cardItemContentBtn}>
              <img src={arrowRight} alt="this-is-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
