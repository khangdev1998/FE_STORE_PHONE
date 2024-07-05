import React from "react";
import styles from "./Sidebar.module.scss";
import sidebarIcon1 from "../../assets/images/sidebar-icon1.svg";
import sidebarIcon2 from "../../assets/images/sidebar-icon2.svg";
import sidebarIcon3 from "../../assets/images/sidebar-icon3.svg";
import sidebarIcon4 from "../../assets/images/sidebar-icon4.svg";
import sidebarIcon5 from "../../assets/images/sidebar-icon5.svg";
import sidebarIcon6 from "../../assets/images/sidebar-icon6.svg";
import sidebarIcon7 from "../../assets/images/sidebar-icon7.svg";
import sidebarIcon8 from "../../assets/images/sidebar-icon8.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li>
          <a href="#!">
            <img src={sidebarIcon1} alt="this-is-icon" />
            <span>Bảng điều khiển</span>
          </a>
        </li>
        <li>
          <a href="#!">
            <img src={sidebarIcon2} alt="this-is-icon" />
            <span>Sản phẩm</span>
          </a>
        </li>
        <li>
          <a href="#!">
            <img src={sidebarIcon3} alt="this-is-icon" />
            <span>Nhà cung cấp</span>
          </a>
        </li>
        <li>
          <a href="#!">
            <img src={sidebarIcon4} alt="this-is-icon" />
            <span>Ví</span>
          </a>
        </li>
        <li>
          <a href="#!">
            <img src={sidebarIcon5} alt="this-is-icon" />
            <span> Blog </span>
          </a>
        </li>
        <li>
          <a href="#!">
            <img src={sidebarIcon6} alt="this-is-icon" />
            <span> Bảng giá </span>
          </a>
        </li>
        <li>
          <a href="#!">
            <img src={sidebarIcon7} alt="this-is-icon" />
            <span>Thông tin</span>
          </a>
        </li>
        <li>
          <a href="#!">
            <img src={sidebarIcon8} alt="this-is-icon" />
            <span>Hỗ trợ</span>
          </a>
        </li>
      </ul>
      <button className={styles.sidebarToggle}>
        <i className="bi bi-chevron-left"></i>
      </button>
    </div>
  );
};

export default Sidebar;
