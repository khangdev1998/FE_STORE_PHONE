import React from "react";
import styles from "./ListProduct.module.scss";
import Product from "../../../../components/Product/Product";
import { Link } from "react-router-dom";

const ListProduct = () => {
  return (
    <div className={styles.listProduct}>
      <div className="container">
        <div className={styles.listProductHeader}>
          <h1>Điện thoại</h1>

          <Link to="/list-phone">
            Xem thêm
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
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
