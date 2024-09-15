import React, { useState } from "react";
import styles from "./ListPhonePage.module.scss";
import Product from "../../components/Product/Product";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const ListPhonePage = () => {
  // State để lưu trữ giá trị của thanh trượt
  const [price, setPrice] = useState(500000);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const totalProducts = 30; // Tổng số sản phẩm

  // Hàm định dạng giá trị tiền tệ VNĐ
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  // Hàm xử lý xem thêm sản phẩm
  const handleLoadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };
  return (
    <>
      <div className="container my-3">
        <Breadcrumb />
      </div>
      <div className="bg-light py-5 my-4">
        <div className="container">
          <div className="row justify-content-between align-items-center g-sm-4 g-2 mb-4">
            {/* Lọc giá bằng input range */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <label htmlFor="priceRange" className="form-label">
                Giá sản phẩm: {formatCurrency(price)}
              </label>
              <input
                type="range"
                className="form-range"
                id="priceRange"
                min="0"
                max="1000000"
                step="10000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            {/* Sắp xếp theo giá */}
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <label htmlFor="sortPrice" className="form-label">
                Sắp xếp theo giá
              </label>
              <select id="sortPrice" className="form-select">
                <option value="asc">Giá: Thấp đến cao</option>
                <option value="desc">Giá: Cao đến thấp</option>
              </select>
            </div>
          </div>
          <div className="row g-lg-4 g-3">
            {Array(totalProducts)
              .fill(0)
              .slice(0, visibleProducts)
              .map((_, index) => (
                <div className="col-lg-3 col-md-4 col-6" key={index}>
                  <Product />
                </div>
              ))}
          </div>

          {/* Nút xem thêm */}
          {visibleProducts < totalProducts && (
            <div className="d-flex justify-content-center mt-4">
              <button
                className="btn btn-primary py-2 px-3 d-flex align-items-center gap-2"
                onClick={handleLoadMore}
              >
                Xem thêm sản phẩm{" "}
                <i className="bi bi-arrow-down-right-square fs-5"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ListPhonePage;
