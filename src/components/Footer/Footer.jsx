import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className="row g-5">
          <div className="col-3">
            <h1 className={styles.footerTitle}>CÔNG TY PHẦN MỀM NHÂN HÒA</h1>
            <p className={styles.footerDesc}>
              <b>Phúc Khang Mobile</b> đang là một trong những hệ thống phân
              phối iPhone quốc tế và chính hãng lớn nhất tại TP.HCM. Với uy tín
              và kinh nghiệm lâu năm, dịch vụ chuyên nghiệp giúp khách hàng trên
              toàn lãnh thổ Việt Nam dễ dàng mua sắm các sản phẩm trực tuyến.
            </p>
            <ul className={styles.footerAddress}>
              <li>
                <b>Hotline:</b> <a href="tel:1900 6680">1900 6680</a> -{" "}
                <a href="tel:0901191616">0901191616</a>
              </li>
              <li>
                <b>Địa chỉ: </b> Tầng 4, Tòa nhà số 97 - 99 Láng Hạ, Đống Đa, Hà
                Nội (Tòa nhà Petrowaco)
              </li>
              <li>
                <b>Email:</b>{" "}
                <a href="mailto: contact@sm4s.vn">contact@sm4s.vn</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h1 className={styles.footerTitle}>Top sản phẩm bán chạy</h1>
            <ul className={styles.footerListTag}>
              <li>
                <a href="#!">iPhone 16 Pro Max</a>
              </li>
              <li>
                <a href="#!">iPhone 16</a>
              </li>
              <li>
                <a href="#!">iPhone 15 Pro Max</a>
              </li>
              <li>
                <a href="#!">iPhone 14 Pro</a>
              </li>
              <li>
                <a href="#!">iPhone 12 Pro Max</a>
              </li>
              <li>
                <a href="#!">iPhone 11 Pro Max</a>
              </li>
              <li>
                <a href="#!">iPhone 11 Pro</a>
              </li>
              <li>
                <a href="#!">iPhone XS Max</a>
              </li>
              <li>
                <a href="#!">iPhone 8 Plus</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h1 className={styles.footerTitle}>Hỗ trợ khách hàng</h1>
            <ul className={styles.footerListSupport}>
              <li>
                <a href="#">Hướng dẫn mua hàng</a>
              </li>
              <li>
                <a href="#">Chính sách thanh toán & giao nhận</a>
              </li>
              <li>
                <a href="#">Chính sách bảo hành</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật thông tin</a>
              </li>
              <li>
                <a href="#">Chính sách đổi hàng</a>
              </li>
              <li>
                <a href="#">Cam kết hoàn tiền 100%</a>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h1 className={styles.footerTitle}>Trailer Video</h1>
            <div className={styles.footerVideo}>
              <img
                className="img-fluid"
                src="https://cdn2492.cdn-template-4s.com/media/banner/banner-3.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <span> © 2024 Phúc Khang Mobile. All rights reserved</span>
        <a
          className={styles.copyrightCertification}
          href="https://moit.gov.vn"
          target="_blank"
        >
          <img
            src="https://dev.orderhangthai.com/assets/images/license.png"
            alt="this-image"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
