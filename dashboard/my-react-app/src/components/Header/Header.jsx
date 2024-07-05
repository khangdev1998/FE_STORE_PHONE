import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import sideMenu from "../../assets/images/side-menu.svg";
import downArrow from "../../assets/images/down-arrow.svg";
import glass from "../../assets/images/glass.svg";

const Header = () => {
  return (
    <div
      className={`${styles.header} d-flex flex-lg-row flex-column align-items-center gap-3`}
    >
      <div className={styles.headerLogo}>
        <button className={`${styles.headerLogoBars}`}>
          <img src={sideMenu} alt="this-is-icon" />
        </button>
        <a href="#!" className="logo">
          <img src={logo} alt="this-is-icon" />
        </a>
      </div>
      <div className="ms-lg-auto d-flex flex-lg-row flex-column align-items-center gap-3">
        <div className={styles.headerSearch}>
          <div
            className={`${styles.headerSearchWrapper} header-search__wrapper w-100 d-flex align-items-center gap-3`}
          >
            <div className={styles.headerSearchDropdown}>
              <button type="button" id="dropdownMenuButton">
                <span>Tất cả</span>
                <img src={downArrow} alt="this-is-icon" />
              </button>
              <ul>
                <li>
                  <a href="#!">Sản phẩm 1</a>
                </li>
                <li>
                  <a href="#!">Sản phẩm 2</a>
                </li>
                <li>
                  <a href="#!">Sản phẩm 3</a>
                </li>
              </ul>
            </div>
            <input
              className={`${styles.headerSearchField} border-none w-100 h-100`}
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
            />
          </div>
          <button className={styles.headerSearchBtn} type="button">
            <img src={glass} alt="Tìm kiếm" />
          </button>
        </div>

        <div className={styles.headerAccount}>
          <button
            className={`${styles.headerAccountBtn} ${styles.headerAccountBtnLogin}`}
          >
            Đăng nhập
          </button>
          <button
            className={`${styles.headerAccountBtn} ${styles.headerAccountBtnRegister}`}
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
