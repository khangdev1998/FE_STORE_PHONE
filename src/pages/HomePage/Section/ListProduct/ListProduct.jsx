import React from "react";
import styles from "./ListProduct.module.scss";
import Product from "../../../../components/Product/Product";
import ReadmoreButton from "../../../../components/ReadmoreButton/ReadmoreButton";

const ListProduct = () => {
  return (
    <div className={styles.listProduct}>
      <div className="container">
        <div className={styles.listProductHeader}>
          <h1
            style={{
              fontSize: "clamp(1.375rem, 1.109rem + 1.002vw, 1.75rem)",
              lineHeight: "30px",
              color: "#292f36",
              fontWeight: "bold",
            }}
          >
            Điện thoại
          </h1>
          <ReadmoreButton to="/list-phone" text="Xem thêm sản phẩm" />
        </div>

        <div className="row g-md-4 g-3">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div className="col-xl-3 col-lg-4 col-6" key={index}>
                <Product />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
