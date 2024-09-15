import React from "react";
import styles from "./ContactPage.module.scss";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const ContactPage = () => {
  return (
    <>
      <div className="container my-3">
        <Breadcrumb />
      </div>

      <div className="bg-light py-5 mt-4">
        <div className="container my-4">
          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="mb-3">Thông tin liên hệ</h3>
              <ul className="d-flex flex-column gap-sm-3 gap-2">
                <li className="d-flex align-items-center gap-3">
                  <i className="bi bi-geo-alt-fill fs-5"></i>
                  Tầng 4, Tòa nhà số 97 - 99 Láng Hạ, Đống Đa, Hà Nội (Tòa nhà
                  Petrowaco)
                </li>
                <li className="d-flex align-items-center gap-3">
                  <i className="bi bi-telephone-fill fs-5"></i>
                  <div className="d-flex align-items-center gap-2">
                    <a className="text-muted" href="tel: 1900 6680">
                      19006680
                    </a>
                    <span>-</span>
                    <a className="text-muted" href="tel: 0901191616">
                      0901191616
                    </a>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <i className="bi bi-envelope-fill fs-5"></i>
                  <a className="text-muted" href="mailto: contact@sm4s.vn">
                    {" "}
                    contact@sm4s.vn
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <form>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Họ và tên"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control py-2"
                      placeholder="Số điện thoại"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Tiêu đề"
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control py-2"
                    rows="5"
                    placeholder="Nội dung"
                    required
                  ></textarea>
                </div>

                <div className="text-end">
                  <button
                    type="submit"
                    className="btn btn-primary w-auto px-3 lh-lg"
                  >
                    Gửi yêu cầu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="ratio ratio-21x9">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3723.70688851208!2d105.782417!3d21.044411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3327ee6777%3A0x2f6a232e9ed2243f!2zNDg5IEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1726158757781!5m2!1svi!2sus"></iframe>
      </div>
    </>
  );
};

export default ContactPage;
