import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Trang chủ</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Trang hiện tại
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumb;
