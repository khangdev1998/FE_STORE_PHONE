import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Overlay from "../Overlay/Overlay";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoginCard from "../Auth/LoginCard";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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

  return (
    <>
      <div className={styles.topbar}>
        <div className="container d-flex flex-md-row flex-column align-items-center justify-content-between gap-md-4 gap-2">
          <div className={`${styles.topbarContact} d-md-flex d-none`}>
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
          <div className="d-flex align-items-center gap-3">
            <button
              type="button"
              onClick={() => toggleSidebar()}
              className="d-lg-none d-block"
            >
              {" "}
              <i className="d-lg-none d-block fs-2 bi bi-layout-text-sidebar-reverse"></i>
            </button>
            <Link className={styles.headerLogo} to="/">
              <img src={logo} alt="this-icon" />
            </Link>
          </div>
          <div
            className={`${styles.headerNav} ${isSidebarOpen && styles.show}`}
          >
            <ul className={styles.headerNavList}>
              <li>
                <NavLink
                  onClick={toggleSidebar}
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  Trang chủ
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleSidebar}
                  to="/list-phone"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  Điện thoại
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleSidebar}
                  to="/list-blog"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  Bài viết
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleSidebar}
                  to="/introduce"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  Giới thiệu
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleSidebar}
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  Liên hệ
                </NavLink>
              </li>
            </ul>
            <div className={`${styles.headerNavContact}`}>
              <h5>Liên hệ</h5>
              <a href="tel:0123456789" className={styles.topbarContactLink}>
                <i className="bi bi-telephone-fill"></i>
                <span>0123456789</span>
              </a>
              <a
                href="mailto:contact@yourdomain"
                className={styles.topbarContactLink}
              >
                <i className="bi bi-envelope-fill"></i>
                <span>Email: contact@yourdomain</span>
              </a>

              <div className="d-flex align-items-center gap-3 mt-1">
                <a href="#!">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-google"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
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
              <span className="d-sm-block d-none">Tài khoản</span>
            </button>
            <Link to={"/cart-step1"} className={styles.headerControlsCart}>
              <i className="bi bi-cart3"></i>
              <span className="d-sm-block d-none">Giỏ hàng 10</span>
            </Link>
          </div>
          {SearchModal()}
          {UserModal()}
          <Overlay isVisible={isSidebarOpen} onClick={toggleSidebar} />
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
            <LoginCard isModal="true" />
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
