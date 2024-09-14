import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Overlay from "../Overlay/Overlay";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginCard from "../Auth/LoginCard";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); 

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isSidebarOpen]);

  // Hàm kiểm tra xem đường dẫn hiện tại có khớp với đường dẫn của link không
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className={`${styles.topbar}`}>
        <div className="container d-flex align-items-center justify-content-between gap-4">
          <div className={styles.topbarContact}>
            <a href="tel:0123456789" className={styles.topbarContactLink}>
              <i className="bi bi-telephone-fill"></i>
              <span> 0123456789</span>
            </a>
            <a
              href="mailto:contact@yourdomain"
              className={styles.topbarContactLink}
            >
              <i className="bi bi-envelope-fill"></i>
              <span>Email: contact@yourdomain</span>
            </a>
          </div>

          <div className={styles.topbarSocial}>
            <a href="#" className={styles.topbarSocialLink}>
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className={styles.topbarSocialLink}>
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className={styles.topbarSocialLink}>
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className={styles.topbarSocialLink}>
              <i className="bi bi-google"></i>
            </a>
            <a href="#" className={styles.topbarSocialLink}>
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={`${styles.header}`}>
          <Link className={styles.headerLogo} to="/">
            <img
              src="https://cdn.xtmobile.vn/vnt_upload/weblink/logoxt-01-01_1_copy.png"
              alt="this-icon"
            />
          </Link>
          <ul className={styles.headerList}>
          <li className={isActiveLink("/") ? styles.active : ""}>
              <Link to="/">Trang chủ</Link>
            </li>
            <li className={isActiveLink("/list-phone") ? styles.active : ""}>
              <Link to="/list-phone">Điện thoại</Link>
            </li>
            <li className={isActiveLink("/list-blog") ? styles.active : ""}>
              <Link to="/list-blog">Bài viết</Link>
            </li>
            <li className={isActiveLink("/introduce") ? styles.active : ""}>
              <Link to="/introduce">Giới thiệu</Link>
            </li>
            <li className={isActiveLink("/contact") ? styles.active : ""}>
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
          <div className={styles.headerControls}>
            <button
              type="button"
              className={styles.headerControlsSearch}
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="bi bi-search"></i>
            </button>
            <button
              type="button"
              className={styles.headerControlsUser}
              data-bs-toggle="modal"
              data-bs-target="#userModal"
            >
              <i className="bi bi-person-fill"></i>
              <span>Tài khoản</span>
            </button>
            <button
              onClick={openSidebar}
              type="button"
              className={styles.headerControlsCart}
            >
              <i className="bi bi-cart3"></i>
              <span>Giỏ hàng 10</span>
            </button>
          </div>

          {SearchModal()}
          {CartModal(isSidebarOpen, closeSidebar)}
          {UserModal()}
          <Overlay isVisible={isSidebarOpen} onClick={closeSidebar} />
        </div>
      </div>
    </>
  );
};

const SearchModal = () => {
  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex="-1"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className={styles.search}>
              <input type="text" placeholder="Tìm kiếm..." />
              <button>
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartModal = (isSidebarOpen) => {
  return (
    <div
      className={`${styles["modal-cart"]} ${
        isSidebarOpen ? styles["show"] : ""
      }`}
    >
      <div className={styles["header-notification"]}>
        <span className={styles["caption"]}>Thông báo</span>
        <img
          src="https://dev.orderhangthai.com/assets/images/gear.svg"
          alt="this-icon"
        />
      </div>

      <div className={styles["body-notification"]}>
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <a
              key={index}
              href="#!"
              className={styles["body-notification__item"]}
            >
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="this-image"
              />
              <div className={styles["body-notification__item-content"]}>
                <div className="d-flex align-items-center justify-content-between gap-3 mb-1">
                  <h2 className={styles["title"]}>Đang vận chuyển</h2>
                  <span className={styles["time"]}>2h trước</span>
                </div>

                <p className={styles["desc"]}>
                  Đơn hàng
                  <b>#DSKKM9865</b>
                  với mã vận đơn
                  <b>SPHDSJDJJHK3424</b>
                  đã được người bán giao cho đơn vị vận chuyển qua phương thức
                  vận chuyển
                  <b>SPX Express</b>.
                </p>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

const UserModal = () => {
  const navigate = useNavigate();
  return (
    <div
      className="modal fade"
      id="userModal"
      tabIndex="-1"
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" style={{ maxWidth: "580px" }}>
        <div className="modal-content p-3">
          <div className="modal-header pt-1">
            <h1
              className="modal-title fs-5 text-uppercase"
              id="exampleModalLabel"
            >
              Đăng nhập tài khoản của bạn
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <LoginCard navigate={navigate} />
          </div>
          <div className="modal-footer mt-2 pb-1">
            <button
              className="btn btn-outline-primary"
              data-bs-dismiss="modal"
              onClick={() => navigate("/register")}
            >
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
