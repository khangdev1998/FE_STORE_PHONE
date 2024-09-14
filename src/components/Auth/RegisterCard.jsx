import React from "react";
import { Link } from "react-router-dom";
import ButtonMain from "./ButtonMain";

const RegisterCard = () => {
  return (
    <div className="card p-4">
      <h2 className="text-center mb-4">Đăng ký</h2>
      <form>
        <div className="row">
          {/* Họ và tên */}
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Họ và tên"
                required
              />
              <label htmlFor="fullname">Họ và tên *</label>
            </div>
          </div>

          {/* Tài khoản */}
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Tài khoản"
                required
              />
              <label htmlFor="username">Tài khoản *</label>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Mật khẩu */}
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Mật khẩu"
                required
              />
              <label htmlFor="password">Mật khẩu *</label>
            </div>
          </div>

          {/* Xác nhận mật khẩu */}
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                required
              />
              <label htmlFor="confirmPassword">Xác nhận mật khẩu *</label>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Email */}
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
              />
              <label htmlFor="email">Email *</label>
            </div>
          </div>

          {/* Số điện thoại */}
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Số điện thoại"
                required
              />
              <label htmlFor="phone">Số điện thoại *</label>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Tỉnh thành */}
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <select className="form-select" id="city" aria-label="Tỉnh thành">
                <option defaultValue>-- Tỉnh thành --</option>
                <option value="1">Hà Nội</option>
                <option value="2">Hồ Chí Minh</option>
              </select>
              <label htmlFor="city">Tỉnh thành *</label>
            </div>
          </div>

          {/* Quận huyện */}
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <select
                className="form-select"
                id="district"
                aria-label="Quận huyện"
              >
                <option defaultValue>-- Quận huyện --</option>
                <option value="1">Quận 1</option>
                <option value="2">Quận 2</option>
              </select>
              <label htmlFor="district">Quận huyện *</label>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Phường xã */}
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <select className="form-select" id="ward" aria-label="Phường xã">
                <option defaultValue>-- Phường xã --</option>
                <option value="1">Phường 1</option>
                <option value="2">Phường 2</option>
              </select>
              <label htmlFor="ward">Phường xã *</label>
            </div>
          </div>

          {/* Địa chỉ */}
          <div className="col-md-6 mb-3">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Địa chỉ"
                required
              />
              <label htmlFor="address">Địa chỉ *</label>
            </div>
          </div>
        </div>

        <ButtonMain text="Đăng ký" />

        <div className="text-center mt-4">
          <span>Bạn đã có tài khoản? </span>
          <Link to="/login">Đăng nhập</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterCard;
