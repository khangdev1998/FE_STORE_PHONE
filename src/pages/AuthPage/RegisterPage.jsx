import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import RegisterCard from "../../components/Auth/RegisterCard";

const RegisterPage = () => {
  return (
    <>
      <div className="container my-3">
        <Breadcrumb />
      </div>

      <div className="bg-light py-5 my-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-12">
              <RegisterCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
