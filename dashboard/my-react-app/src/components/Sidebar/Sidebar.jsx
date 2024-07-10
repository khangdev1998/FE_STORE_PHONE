import React from "react";
import { NavLink } from "react-router-dom"; // Sử dụng NavLink từ react-router-dom
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

const Sidebar = ({ isCollapsed, toggleSidebar, isSidebarOpen }) => {
  return (
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
      <ul className={styles.sidebarList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <img src={sidebarIcon1} alt="this-is-icon" />
            {!isCollapsed && <span>Bảng điều khiển</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <img src={sidebarIcon2} alt="this-is-icon" />
            {!isCollapsed && <span>Sản phẩm</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/suppliers"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <img src={sidebarIcon3} alt="this-is-icon" />
            {!isCollapsed && <span>Nhà cung cấp</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/wallet"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <img src={sidebarIcon4} alt="this-is-icon" />
            {!isCollapsed && <span>Ví</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/blog"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <img src={sidebarIcon5} alt="this-is-icon" />
            {!isCollapsed && <span>Blog</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/pricing"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <img src={sidebarIcon6} alt="this-is-icon" />
            {!isCollapsed && <span>Bảng giá</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/information"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <img src={sidebarIcon7} alt="this-is-icon" />
            {!isCollapsed && <span>Thông tin</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/support"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <img src={sidebarIcon8} alt="this-is-icon" />
            {!isCollapsed && <span>Hỗ trợ</span>}
          </NavLink>
        </li>
      </ul>
      <button className={styles.sidebarToggle} onClick={toggleSidebar}>
        <i
          className={`bi ${
            isCollapsed ? "bi-chevron-right" : "bi-chevron-left"
          }`}
        ></i>
      </button>
    </div>
  );
};

export default Sidebar;
