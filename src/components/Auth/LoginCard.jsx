import React from "react";
import styles from "./Auth.module.scss";
import ButtonMain from "./ButtonMain";
import { useNavigate } from "react-router-dom";

const LoginCard = ({ navigate }) => {
  return (
    <>
      <div className="d-flex justify-content-between gap-3 mb-3">
        <button className="btn btn-primary w-100 p-2">
          <i className="bi bi-google me-1"></i> Đăng nhập google
        </button>
        <button className="btn btn-primary w-100 p-2">
          <i className="bi bi-facebook me-1"></i> Đăng nhập facebook
        </button>
      </div>

      <div className={styles.orDivider}>
        <span>Hoặc tài khoản</span>
      </div>

      <form>
        {/* Tài khoản */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control "
            id="floatingUsername"
            placeholder="Tài khoản"
            required
          />
          <label htmlFor="floatingUsername">Tài khoản</label>
        </div>

        {/* Mật khẩu */}
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control "
            id="floatingPassword"
            placeholder="Mật khẩu"
            required
          />
          <label htmlFor="floatingPassword">Mật khẩu</label>
        </div>

        {/* Quên mật khẩu */}
        <div className="text-end mb-3">
          <button
            type="value"
            className="btn btn-link text-decoration-none text-muted"
            data-bs-dismiss="modal"
            onClick={() => navigate("/forgot-password")}
          >
            Quên mật khẩu?
        </button>
        </div>

        <ButtonMain text="Đăng nhập" />
      </form>
    </>
  );
};

export default LoginCard;
