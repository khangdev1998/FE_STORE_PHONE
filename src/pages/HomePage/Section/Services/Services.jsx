import styles from "./Services.module.scss";
import icon1 from "../../../../assets/services-1.svg";
import icon2 from "../../../../assets/services-2.svg";
import icon3 from "../../../../assets/services-3.svg";
import icon4 from "../../../../assets/services-4.svg";

const Services = () => {
  return (
    <div className={`${styles.services} my-md-0 my-3`}>
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-3 col-md-6">
            <div className={styles.servicesItem}>
              <img src={icon1} alt="this-image" />
              <div className={styles.servicesItemContent}>
                <h4>Hoàn tiền 100%</h4>
                <p>Nếu sản phẩm lỗi</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className={styles.servicesItem}>
              <img src={icon2} alt="this-image" />
              <div className={styles.servicesItemContent}>
                <h4>Đổi trả</h4>
                <p>Đổi trả dưới 7 ngày</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className={styles.servicesItem}>
              <img src={icon3} alt="this-image" />
              <div className={styles.servicesItemContent}>
                <h4>Giao hàng</h4>
                <p>Miễn phí vận chuyển cho mọi đơn hàng</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className={styles.servicesItem}>
              <img src={icon4} alt="this-image" />
              <div className={styles.servicesItemContent}>
                <h4>Hỗ trợ 24/7</h4>
                <p>Hỗ trợ trực tuyến 24 giờ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
` `;

export default Services;