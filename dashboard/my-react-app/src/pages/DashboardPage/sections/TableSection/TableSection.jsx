import React from "react";
import MembershipBadge from "../MembershipBadge/MembershipBadge";
import styles from "./TableSection.module.scss";
import TitleWithLink from "../TitleWithLink/TitleWithLink";

function TableSection({ title, data, columns }) {
  const avatarVariant =
    title === "Sản phẩm chiết khấu cao" || title === "Sản phẩm mới"
      ? `${styles.tableListAvatar} ${styles["tableListAvatar--rounded"]}`
      : `${styles.tableListAvatar} ${styles["tableListAvatar--circle"]}`;

  const renderCell = (item, column) => {
    if (column === "") {
      return (
        <>
          <span className={styles.tableListRank}>{item.id}</span>
          <img src={item.image} alt={item.name} className={avatarVariant} />
          {item.name}
        </>
      );
    }
    if (column === "% chiết khấu") return item.discount || "-";
    if (column === "Số tiền chiết khấu") return item.amount || "-";
    if (column === "Doanh số") return item.sales || "-";
    if (column === "Gói thành viên")
      return item.membership ? <MembershipBadge type={item.membership} /> : "-";
    if (column === "Tên nhà cung cấp") return item.supplier || "-";
    if (column === "Danh mục hàng hóa") return item.category || "-";
    return null;
  };

  const tableClass =
    title === "Nhà cung cấp mới" ? styles.twoColumns : styles.threeColumns;

  return (
    <div className="box-content">
      <TitleWithLink title={title} />
      <div className="table-responsive">
        <table className={`${styles.tableList} ${tableClass} mt-4`}>
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr data-label={item.id} key={index}>
                {columns.map((column, index) => (
                  <td key={index} data-label={column}>
                    {renderCell(item, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableSection;
