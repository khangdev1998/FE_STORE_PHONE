import React, { useState } from "react";
import styles from "./ProductDetailPage.module.scss";
import Product from "../../components/Product/Product";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import productImage1 from "../../assets/product-1.png"; // Silver
import productImage2 from "../../assets/product-2.png"; // Gold
import productImage3 from "../../assets/product-3.png"; // Space Gray
import productImage4 from "../../assets/product-4.png"; // Midnight Green

const ProductDetailPage = () => {
  // Khai báo state để quản lý số lượng sản phẩm và màu sắc được chọn
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Silver");

  // Danh sách các tùy chọn màu
  const colors = [
    { name: "Silver", image: productImage1 },
    { name: "Gold", image: productImage2 },
    { name: "Space Gray", image: productImage3 },
    { name: "Midnight Green", image: productImage4 },
  ];

  // Hàm xử lý tăng số lượng
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Hàm xử lý giảm số lượng
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Hàm xử lý thay đổi giá trị trong input
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  // Hàm xử lý chọn màu
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Tìm hình ảnh sản phẩm theo màu sắc được chọn
  const selectedProductImage = colors.find(
    (color) => color.name === selectedColor
  ).image;

  return (
    <>
      <div className="container mt-3 mb-4">
        <Breadcrumb />
      </div>
      <div className="container mb-5">
        <div className="row g-sm-4 g-2">
          <div className="col-sm-5">
            <img
              className="img-fluid"
              src={selectedProductImage}
              alt={selectedColor}
            />
          </div>
          <div className="col-sm-7">
            <div className={styles.productInfo}>
              <h1 className={styles.productInfoTitle}>
                Apple iPhone 11 Pro Max, 8GB, 256GB ({selectedColor})
              </h1>
              <div className={styles.productInfoRating}>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                </div>
                <span>4.9</span>
              </div>
              <div className={styles.productInfoPrice}>
                <span className={styles.priceCurrent}>28.000.000đ</span>
                <span className={styles.priceOld}>32.000.000đ</span>
              </div>
              <div className="mb-3">
                <b>Chọn màu sắc:</b>
                <div className="d-flex align-items-center flex-wrap gap-3 mt-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => handleColorChange(color.name)}
                      className={`btn btn-outline-primary ${
                        selectedColor === color.name ? "active" : ""
                      }`}
                    >
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles.productInfoCode}>
                <b>Mã sản phẩm:</b>
                <span>GQB6S3F5V9</span>
              </div>
              <div className={styles.productInfoCategory}>
                <b>Danh mục:</b>
                <a className="text-muted" href="#">
                  Điện thoại
                </a>
              </div>
              <ul className={styles.productInfoDetails}>
                <li>RAM: 16GB</li>
                <li>Ổ cứng: SSD 256GB</li>
                <li>Kích thước màn hình: 14 inch</li>
              </ul>
              <div className={styles.productInfoQuantity}>
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  style={{
                    opacity: quantity === 1 ? "0.5" : "1",
                    pointerEvents: quantity === 1 ? "none" : "auto",
                  }}
                >
                  <i className="bi bi-dash-lg"></i>
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={handleInputChange}
                />
                <button type="button" onClick={increaseQuantity}>
                  <i className="bi bi-plus-lg"></i>
                </button>
              </div>
              <button className="btn btn-outline-primary">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className="row g-4 mt-4">
            <div className="col-12">
              <h3 className="mb-sm-3 mb-2">Thông tin sản phẩm</h3>
              <p>
                Apple iPhone 11 Pro Max, 8GB, 256GB này có màn hình Retina màn
                hình rộng 14 inch có đèn nền LED độ phân giải cao (độ phân giải
                gốc 2560 x 1600). Được trang bị Intel Core i5 (2.3GHz) và Intel
                Iris Plus Graphics 640. Ổ cứng thể rắn dung lượng 256GB với 8GB
                RAM. Hỗ trợ hệ điều hành Mac. Gói bao gồm Vỏ màu đen, Chuột
                không dây và Tai nghe Bluetooth! Thiết bị này đã được thử nghiệm
                ở tình trạng hoạt động tốt. Nó sẽ có dấu hiệu sử dụng và các
                nhược điểm về mặt thẩm mỹ, có thể bao gồm một số vết xước/vết
                lõm, tất cả những điều này không ảnh hưởng đến khả năng sử dụng
                của thiết bị này. (Tân trang lại)
                <br />
                Tận hưởng hiệu suất PC nhanh, mượt mà mà không bị hao pin nhờ bộ
                nhớ LPDDR5. Và với ống dẫn nhiệt kép, thiết bị của bạn luôn đẹp,
                mát và hoạt động tốt nhất. Trong khi đó, bộ điều nhiệt thích ứng
                sẽ tối ưu hóa năng lượng tùy theo vị trí thiết bị của bạn, cho
                dù đó là trên bề mặt ổn định như bàn làm việc hay bề mặt không
                ổn định như lòng bàn tay của bạn. Bằng cách sử dụng các thuật
                toán và gia tốc kế tiên tiến, thiết bị của bạn sẽ điều chỉnh
                thông minh các cấu hình nguồn và nhiệt cho phù hợp với tình
                huống để giúp thiết bị của bạn hoạt động trơn tru.
              </p>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h3 className="mb-3">Sản phẩm tương tự</h3>
          <div className="row g-md-4 g-3">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div className="col-lg-3 col-md-4 col-6" key={index}>
                  <Product />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
