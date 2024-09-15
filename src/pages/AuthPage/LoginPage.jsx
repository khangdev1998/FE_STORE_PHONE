import React from "react";
import LoginCard from "../../components/Auth/LoginCard";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="container my-3">
        <Breadcrumb />
      </div>

      <div className="bg-light py-5 my-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="card p-4">
                <h2 className="text-center mb-4">Đăng nhập</h2>
                <LoginCard />

                <div className="text-end mt-4">
                  <Link to="/register" className="btn btn-outline-primary">
                    Đăng ký ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
