import React from "react";
import styles from "./ListProduct.module.scss";
import Product from "../../../../components/Product/Product";

const ListProduct = () => {
  return (
    <div className={styles.listProduct}>
      <div className="container">
        <div className={styles.listProductHeader}>
          <h1>Điện thoại</h1>

          <a href="#!">
            Xem thêm
            <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>

        <div className="row g-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div className="col-3" key={index}>
                <Product />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
