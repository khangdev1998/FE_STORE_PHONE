import React, { useState } from "react";
import styles from "./ListPhonePage.module.scss";
import Product from "../../components/Product/Product";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const ListPhonePage = () => {
  // State để lưu trữ giá trị của thanh trượt và các bộ lọc
  const [visibleProducts, setVisibleProducts] = useState(12);
  const totalProducts = 30; // Tổng số sản phẩm

  // Các state cho bộ lọc
  const [selectedMemory, setSelectedMemory] = useState("");
  const [selectedScreenSize, setSelectedScreenSize] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedRam, setSelectedRam] = useState(""); // State cho lọc RAM

  // Hàm xử lý xem thêm sản phẩm
  const handleLoadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  // Hàm xử lý thay đổi bộ lọc
  const handleFilterChange = (e, filterType) => {
    const value = e.target.value;
    switch (filterType) {
      case "memory":
        setSelectedMemory(value);
        break;
      case "screenSize":
        setSelectedScreenSize(value);
        break;
      case "price":
        setSelectedPrice(value);
        break;
      case "brand":
        setSelectedBrand(value);
        break;
      case "ram":
        setSelectedRam(value); // Xử lý lọc RAM
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="container my-3">
        <Breadcrumb />
      </div>

      <div className="bg-light py-5 my-4">
        <div className="container">
          {/* Dropdown lọc sản phẩm */}
          <div className={styles.dropdownList}>
            <select
              className="form-select"
              value={selectedPrice}
              onChange={(e) => handleFilterChange(e, "price")}
            >
              <option value="">Chọn mức giá</option>
              <option value="duoi-5-trieu">Dưới 5 triệu</option>
              <option value="5-10-trieu">5-10 triệu</option>
              <option value="10-15-trieu">10-15 triệu</option>
              <option value="tren-15-trieu">Trên 15 triệu</option>
            </select>

            {/* Dropdown chọn bộ nhớ */}
            <select
              className="form-select"
              value={selectedMemory}
              onChange={(e) => handleFilterChange(e, "memory")}
            >
              <option value="">Chọn bộ nhớ</option>
              <option value="32gb">32GB</option>
              <option value="64gb">64GB</option>
              <option value="128gb">128GB</option>
              <option value="256gb">256GB</option>
            </select>

            {/* Dropdown chọn kích thước màn hình */}
            <select
              className="form-select"
              value={selectedScreenSize}
              onChange={(e) => handleFilterChange(e, "screenSize")}
            >
              <option value="">Chọn kích thước màn hình</option>
              <option value="duoi-5-inch">Dưới 5 inch</option>
              <option value="5-6-inch">5-6 inch</option>
              <option value="tren-6-inch">Trên 6 inch</option>
            </select>

            {/* Dropdown chọn thương hiệu */}
            <select
              className="form-select"
              value={selectedBrand}
              onChange={(e) => handleFilterChange(e, "brand")}
            >
              <option value="">Chọn thương hiệu</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="oppo">Oppo</option>
            </select>

            {/* Dropdown chọn RAM */}
            <select
              className="form-select"
              value={selectedRam}
              onChange={(e) => handleFilterChange(e, "ram")}
            >
              <option value="">Chọn RAM</option>
              <option value="4gb">4GB</option>
              <option value="6gb">6GB</option>
              <option value="8gb">8GB</option>
              <option value="12gb">12GB</option>
            </select>
          </div>

          {/* Hiển thị sản phẩm */}
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
