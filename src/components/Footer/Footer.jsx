import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const Footer = () => {
  const opts = {
    playerVars: {
      controls: 1,
      rel: 0,
      modestbranding: 1,
      mute: 1,
      autoplay: 1,
      loop: 1,
      playlist: "GDlkCkcIqTs",
    },
  };
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className="row g-md-5 g-4">
          <div className="col-lg-3 col-md-6">
            <h1 className={styles.footerTitle}>Công Ty Cửa Hàng Điện Thoại</h1>
            <p className={styles.footerDesc}>
              <b>XT Mobile</b> đang là một trong những hệ thống phân phối iPhone
              quốc tế và chính hãng lớn nhất tại TP.HCM. Với uy tín và kinh
              nghiệm lâu năm, dịch vụ chuyên nghiệp giúp khách hàng trên toàn
              lãnh thổ Việt Nam dễ dàng mua sắm các sản phẩm trực tuyến.
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
          <div className="col-lg-3 col-md-6">
            <h1 className={styles.footerTitle}>Top sản phẩm bán chạy</h1>
            <ul className={styles.footerListTag}>
              <li>
                <Link to="/product-detail">iPhone 16 Pro Max</Link>
              </li>
              <li>
                <Link to="/product-detail">iPhone 16</Link>
              </li>
              <li>
                <Link to="/product-detail">iPhone 15 Pro Max</Link>
              </li>
              <li>
                <Link to="/product-detail">iPhone 14 Pro</Link>
              </li>
              <li>
                <Link to="/product-detail">iPhone 12 Pro Max</Link>
              </li>
              <li>
                <Link to="/product-detail">iPhone 11 Pro Max</Link>
              </li>
              <li>
                <Link to="/product-detail">iPhone 11 Pro</Link>
              </li>
              <li>
                <Link to="/product-detail">iPhone XS Max</Link>
              </li>
              <li>
                <Link to="/product-detail">iPhone 8 Plus</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h1 className={styles.footerTitle}>Hỗ trợ khách hàng</h1>
            <ul className={styles.footerListSupport}>
              <li>
                <Link to="/customer-support">Hướng dẫn mua hàng</Link>
              </li>
              <li>
                <Link to="/customer-support">
                  Chính sách thanh toán & giao nhận
                </Link>
              </li>
              <li>
                <Link to="/customer-support">Chính sách bảo hành</Link>
              </li>
              <li>
                <Link to="/customer-support">Chính sách bảo mật thông tin</Link>
              </li>
              <li>
                <Link to="/customer-support">Chính sách đổi hàng</Link>
              </li>
              <li>
                <Link to="/customer-support">Cam kết hoàn tiền 100%</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h1 className={styles.footerTitle}>Trailer Video</h1>
            <div className={styles.footerVideo}>
              <YouTube videoId="GDlkCkcIqTs" opts={opts} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <span>© 2024 XT Mobile. All rights reserved</span>
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
