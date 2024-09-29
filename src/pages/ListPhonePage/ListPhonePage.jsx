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
