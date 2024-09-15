import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ButtonMain from "../../components/Auth/ButtonMain";

const ForgotPasswordPage = () => {
  return (
    <>
      <div className="container my-3">
        <Breadcrumb />
      </div>

      <div className="bg-light py-5 my-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9 col-12">
              <div className="card p-4">
                <h2 className="text-center mb-4">Quên mật khẩu</h2>

                <div className="d-flex flex-sm-row flex-column text-sm-start text-center align-items-center border rounded mb-3 p-3">
                  <i className="bi bi-envelope fs-2 text-primary me-3"></i>
                  <div>
                    <strong>Khôi phục mật khẩu qua email</strong>
                    <p>Mã sẽ gửi qua email bạn đăng ký để thay đổi mật khẩu</p>
                  </div> 
                  <i className="bi bi-check-circle ms-auto fs-4 text-primary d-sm-block d-none"></i>
                </div>

                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required
                    />
                    <label htmlFor="email">Email *</label>
                  </div>

                  <ButtonMain text="Xác nhận" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
