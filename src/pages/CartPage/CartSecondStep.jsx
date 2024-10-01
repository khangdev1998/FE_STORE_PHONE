import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.scss";
import qrcodeImage from "../../assets/deposit-qrcode.png";

const CartSecondStep = () => {
  // Dữ liệu cho các sản phẩm
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 11 Pro Max, 8GB, 256GB",
      price: 28000000, // 28.000.000 VND
      originalPrice: 32000000, // 32.000.000 VND (giá gốc)
      quantity: 1,
      image:
        "https://cdn2492.cdn-template-4s.com/thumbs/san-pham/dien-thoai/113_thumb_350.webp", // Hình ảnh sản phẩm
    },
  ]);

  // Tính tổng giá sản phẩm
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Khởi tạo state để lưu trữ thông tin
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    addressType: "Nhà riêng",
    note: "",
  });

  // Hàm để cập nhật state khi người dùng thay đổi giá trị input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mt-5">
      {modalPayment()}

      <h3 className="mb-4">Thanh toán và giao hàng</h3>
      <div className="row g-4">
        <div className="col-md-8">
          <div className="border p-lg-4 p-3 rounded">
            <form>
              {/* Họ và tên + Số điện thoại */}
              <div className="row mb-4 g-4">
                <div className="col-md-6">
                  <label htmlFor="fullName" className="form-label">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>

              {/* Địa chỉ */}
              <div className="mb-4">
                <label htmlFor="address" className="form-label">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Nhập địa chỉ"
                />
              </div>

              {/* Tỉnh / Thành + Quận / Huyện */}
              <div className="row mb-4 g-4">
                <div className="col-md-6">
                  <label htmlFor="city" className="form-label">
                    Tỉnh / Thành
                  </label>
                  <select
                    className="form-select"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  >
                    <option value="">Chọn tỉnh / thành</option>
                    <option value="HaNoi">Hà Nội</option>
                    <option value="HCM">Hồ Chí Minh</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="district" className="form-label">
                    Quận / Huyện
                  </label>
                  <select
                    className="form-select"
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                  >
                    <option value="">Chọn quận / huyện</option>
                    <option value="Q1">Quận 1</option>
                    <option value="Q2">Quận 2</option>
                  </select>
                </div>
              </div>

              {/* Phường / Xã */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <label htmlFor="ward" className="form-label">
                    Phường / Xã
                  </label>
                  <select
                    className="form-select"
                    id="ward"
                    name="ward"
                    value={formData.ward}
                    onChange={handleInputChange}
                  >
                    <option value="">Chọn phường / xã</option>
                    <option value="P1">Phường 1</option>
                    <option value="P2">Phường 2</option>
                  </select>
                </div>
              </div>

              {/* Loại địa chỉ */}
              <div className="mb-4">
                <label className="form-label">Loại địa chỉ</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="addressType"
                      id="nharieng"
                      value="Nhà riêng"
                      checked={formData.addressType === "Nhà riêng"}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="nharieng">
                      Nhà riêng
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="addressType"
                      id="congty"
                      value="Công ty"
                      checked={formData.addressType === "Công ty"}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="congty">
                      Công ty
                    </label>
                  </div>
                </div>
              </div>

              {/* Ghi chú */}
              <div className="mb-4">
                <label htmlFor="note" className="form-label">
                  Ghi chú
                </label>
                <textarea
                  className="form-control"
                  id="note"
                  name="note"
                  rows="3"
                  value={formData.note}
                  onChange={handleInputChange}
                  placeholder="Nhập ghi chú nếu có..."
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-4">
          <div className="border rounded-3 p-lg-4 p-3">
            <h5 className="text-danger">
              Tổng giá: {getTotalPrice().toLocaleString()}₫
            </h5>
            <div className="d-flex flex-column gap-2 mt-3">
              <button
                type="button"
                className="btn btn-primary p-2"
                data-bs-toggle="modal"
                data-bs-target="#modalPayment"
              >
                Thanh toán ngay
              </button>
              <Link to="/list-phone" className="btn btn-primary p-2">
                Tiếp tục mua sắm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const modalPayment = () => {
  return (
    <div
      className="modal fade"
      id="modalPayment"
      tabIndex="-1"
      aria-labelledby="modalPaymentLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body p-5">
            <div className={styles.deposit}>
              <h1 className={styles.depositCaption}>Thông tin nạp tiền</h1>
              <p className={styles.depositDesc}>
                Quét mã này để chuyển khoản tới tôi!
              </p>

              <div className={styles.depositInfomation}>
                <div className="row g-3">
                  <div className="col-6">
                    <span>Tên ngân hàng:</span>
                  </div>
                  <div className="col-6">
                    <b>MB - Ngân hàng Quân Đội</b>
                  </div>
                  <div className="col-6">
                    <span>Số tài khoản:</span>
                  </div>
                  <div className="col-6">
                    <b>0888222227</b>
                  </div>
                  <div className="col-6">
                    <span>Chủ tài khoản:</span>
                  </div>
                  <div className="col-6">
                    <b>Đoàn Tuấn Vũ</b>
                  </div>
                  <div className="col-6">
                    <span>Nội dung chuyển khoản:</span>
                  </div>
                  <div className="col-6">
                    <b>AOWBZB</b>
                  </div>
                </div>
                <p className={styles.textNote}>
                  Khi chuyển khoản nhớ nhập đúng nội dung chuyển tiền để hệ
                  thống xử lý nhanh nhất cho quý khách
                </p>
              </div>

              <div className="d-flex justify-content-center  ">
                <img
                  className="deposit-qrcode mt-4"
                  src={qrcodeImage}
                  alt="this-qrcode"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSecondStep;
