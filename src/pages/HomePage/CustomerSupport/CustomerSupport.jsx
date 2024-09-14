import React from "react";

const CustomerSupport = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Chính Sách Mua Hàng</h2>

      {/* Hướng dẫn mua hàng */}
      <div className="card mb-3">
        <div className="card-header">
          <h5 className="mb-0">Hướng dẫn mua hàng</h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            Quý khách có thể mua hàng trực tiếp tại cửa hàng hoặc đặt hàng
            online qua website. Vui lòng chọn sản phẩm, thêm vào giỏ hàng, và
            làm theo hướng dẫn để hoàn tất quá trình đặt hàng. Nếu cần hỗ trợ,
            vui lòng liên hệ với bộ phận chăm sóc khách hàng của chúng tôi.
          </p>
        </div>
      </div>

      {/* Chính sách thanh toán & giao nhận */}
      <div className="card mb-3">
        <div className="card-header">
          <h5 className="mb-0">Chính sách thanh toán & giao nhận</h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            Chúng tôi chấp nhận các phương thức thanh toán như tiền mặt, chuyển
            khoản ngân hàng, và thanh toán qua thẻ tín dụng. Hàng hóa sẽ được
            giao tận nơi trong vòng 3-5 ngày làm việc kể từ khi hoàn tất thanh
            toán.
          </p>
        </div>
      </div>

      {/* Chính sách bảo hành */}
      <div className="card mb-3">
        <div className="card-header">
          <h5 className="mb-0">Chính sách bảo hành</h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            Sản phẩm của chúng tôi được bảo hành 12 tháng kể từ ngày mua hàng.
            Trong thời gian bảo hành, nếu sản phẩm gặp bất kỳ lỗi kỹ thuật nào,
            vui lòng mang đến trung tâm bảo hành gần nhất để được hỗ trợ.
          </p>
        </div>
      </div>

      {/* Chính sách bảo mật thông tin */}
      <div className="card mb-3">
        <div className="card-header">
          <h5 className="mb-0">Chính sách bảo mật thông tin</h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            Chúng tôi cam kết bảo mật thông tin cá nhân của quý khách hàng. Mọi
            thông tin sẽ chỉ được sử dụng cho mục đích liên hệ và phục vụ việc
            mua sắm của quý khách, không tiết lộ cho bên thứ ba nếu không có sự
            đồng ý của quý khách.
          </p>
        </div>
      </div>

      {/* Chính sách đổi hàng */}
      <div className="card mb-3">
        <div className="card-header">
          <h5 className="mb-0">Chính sách đổi hàng</h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            Quý khách có thể đổi sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng
            nếu phát hiện lỗi từ nhà sản xuất. Sản phẩm đổi cần giữ nguyên tình
            trạng ban đầu và có đầy đủ bao bì, tem nhãn.
          </p>
        </div>
      </div>

      {/* Cam kết hoàn tiền 100% */}
      <div className="card mb-3">
        <div className="card-header">
          <h5 className="mb-0">Cam kết hoàn tiền 100%</h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            Nếu sản phẩm không đúng với mô tả hoặc bị lỗi do nhà sản xuất mà
            không thể sửa chữa hoặc thay thế, chúng tôi cam kết hoàn tiền 100%
            cho quý khách.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
