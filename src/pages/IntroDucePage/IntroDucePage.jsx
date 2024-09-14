import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const IntroDucePage = () => {
  return (
    <>
      <div className="container my-3">
        <Breadcrumb />
      </div>
      <div className="my-4 p-5 bg-light">
        <div className="container">
          {/* Title chính */}
          <h2 className="color-primary mb-3">
            Giới thiệu về Công Ty Cửa Hàng Bán Điện Thoại XTMobile
          </h2>

          {/* Nội dung đoạn văn */}
          <p className="lead mb-4">
            <strong>Công ty TNHH Thế Giới Di Động</strong> là một trong những
            nhà bán lẻ điện thoại di động hàng đầu tại Việt Nam, với mục tiêu
            mang đến cho khách hàng những sản phẩm và dịch vụ tốt nhất. Được
            thành lập vào năm 2004, công ty đã không ngừng phát triển và mở
            rộng, trở thành điểm đến tin cậy của hàng triệu khách hàng trên cả
            nước. Với hệ thống cửa hàng trải rộng khắp các tỉnh thành, từ thành
            phố lớn đến các khu vực nông thôn, Thế Giới Di Động cam kết cung cấp
            các sản phẩm điện thoại chính hãng, đảm bảo chất lượng và dịch vụ
            hậu mãi tuyệt vời.
          </p>

          {/* Sứ mệnh của chúng tôi */}
          <h3 className="mb-2 mt-4">Sứ mệnh của chúng tôi</h3>
          <p className="mb-4">
            Chúng tôi hiểu rằng, trong thời đại công nghệ phát triển không
            ngừng, việc sở hữu một chiếc điện thoại di động không chỉ giúp khách
            hàng kết nối, làm việc và giải trí mà còn thể hiện phong cách sống
            và cá tính. Với sứ mệnh đó, Thế Giới Di Động luôn nỗ lực cung cấp
            những sản phẩm công nghệ tiên tiến nhất, từ những mẫu smartphone cao
            cấp như iPhone, Samsung Galaxy, đến các dòng điện thoại giá rẻ, phục
            vụ nhu cầu đa dạng của người tiêu dùng.
          </p>

          {/* Sản phẩm đa dạng */}
          <h3 className="mb-2 mt-4">Sản phẩm đa dạng, chính hãng</h3>
          <p className="mb-3">
            Tại Thế Giới Di Động, chúng tôi tự hào mang đến cho khách hàng một
            danh mục sản phẩm phong phú, bao gồm:
          </p>
          <ul className="list-group mb-4">
            <li className="list-group-item">
              <strong>Smartphone cao cấp:</strong> Những mẫu điện thoại từ các
              thương hiệu hàng đầu thế giới như Apple, Samsung, Xiaomi, OPPO,
              Huawei... Các dòng sản phẩm này không chỉ nổi bật về thiết kế sang
              trọng mà còn sở hữu những tính năng đột phá như màn hình OLED,
              camera chụp ảnh chuyên nghiệp, và công nghệ bảo mật tiên tiến.
            </li>
            <li className="list-group-item">
              <strong>Điện thoại tầm trung và giá rẻ:</strong> Chúng tôi cũng
              cung cấp các dòng sản phẩm phù hợp với túi tiền của đa số khách
              hàng, từ những người dùng phổ thông cho đến học sinh, sinh viên.
              Các dòng điện thoại như Vivo, Realme, Nokia... là lựa chọn lý
              tưởng cho người tiêu dùng tìm kiếm sự cân đối giữa chất lượng và
              giá cả.
            </li>
            <li className="list-group-item">
              <strong>Phụ kiện điện thoại:</strong> Ngoài các sản phẩm chính là
              điện thoại, chúng tôi còn cung cấp một loạt phụ kiện đi kèm như ốp
              lưng, kính cường lực, tai nghe, pin dự phòng, và các sản phẩm
              thông minh khác, giúp khách hàng có trải nghiệm hoàn thiện và tiện
              lợi.
            </li>
          </ul>

          {/* Cam kết chất lượng */}
          <h3 className="mb-2 mt-4">Cam kết chất lượng</h3>
          <p className="mb-4">
            Tất cả sản phẩm bán ra tại Thế Giới Di Động đều là hàng chính hãng,
            được nhập khẩu từ những nhà phân phối uy tín và có đầy đủ chứng nhận
            chất lượng. Chúng tôi cam kết:
          </p>
          <ul className="list-group mb-4">
            <li className="list-group-item">
              <strong>Bảo hành chính hãng:</strong> Mỗi sản phẩm khi bán ra đều
              đi kèm chế độ bảo hành chính hãng từ 12 đến 24 tháng (tùy theo
              loại sản phẩm), giúp khách hàng yên tâm khi sử dụng.
            </li>
            <li className="list-group-item">
              <strong>Đổi trả dễ dàng:</strong> Chính sách đổi trả trong vòng 30
              ngày nếu sản phẩm gặp lỗi kỹ thuật từ nhà sản xuất. Điều này thể
              hiện cam kết của chúng tôi đối với sự hài lòng của khách hàng.
            </li>
          </ul>

          {/* Dịch vụ chăm sóc khách hàng */}
          <h3 className="mb-2 mt-4">Dịch vụ chăm sóc khách hàng hàng đầu</h3>
          <p className="mb-4">
            Đội ngũ nhân viên tại Thế Giới Di Động luôn được đào tạo chuyên
            nghiệp, sẵn sàng hỗ trợ và tư vấn cho khách hàng về mọi thắc mắc
            liên quan đến sản phẩm và dịch vụ. Chúng tôi hiểu rằng việc chọn mua
            một chiếc điện thoại phù hợp không phải lúc nào cũng dễ dàng, vì vậy
            nhân viên của chúng tôi luôn nhiệt tình hỗ trợ khách hàng từ việc so
            sánh sản phẩm, tư vấn các tính năng, cho đến hướng dẫn sử dụng.
          </p>
          <p className="mb-4">
            Ngoài ra, chúng tôi còn cung cấp dịch vụ hậu mãi chuyên nghiệp như
            sửa chữa, bảo dưỡng sản phẩm, giúp khách hàng an tâm trong suốt quá
            trình sử dụng. Đội ngũ kỹ thuật viên lành nghề của chúng tôi sẵn
            sàng khắc phục mọi sự cố mà khách hàng gặp phải.
          </p>

          {/* Hệ thống cửa hàng */}
          <h3 className="mb-2 mt-4">Hệ thống cửa hàng rộng khắp</h3>
          <p className="mb-4">
            Với hơn 1000 cửa hàng trên toàn quốc, từ các thành phố lớn như Hà
            Nội, TP. Hồ Chí Minh, Đà Nẵng, Cần Thơ cho đến các tỉnh thành khác,
            Thế Giới Di Động luôn ở gần bạn. Bạn có thể dễ dàng ghé thăm bất kỳ
            cửa hàng nào của chúng tôi để trải nghiệm thực tế sản phẩm, nhận
            được tư vấn trực tiếp từ nhân viên, và mua sắm với các chương trình
            khuyến mãi hấp dẫn.
          </p>

          {/* Mua sắm trực tuyến */}
          <h3 className="mb-2 mt-4">Mua sắm trực tuyến tiện lợi</h3>
          <p className="mb-4">
            Nhằm đáp ứng nhu cầu mua sắm hiện đại, Thế Giới Di Động còn phát
            triển hệ thống bán hàng trực tuyến tại website chính thức. Khách
            hàng chỉ cần truy cập vào trang web của chúng tôi, chọn sản phẩm ưa
            thích, đặt hàng, và chúng tôi sẽ giao hàng tận nơi trong thời gian
            ngắn nhất. Hệ thống thanh toán trực tuyến an toàn, cùng với chính
            sách giao hàng nhanh chóng, tiện lợi giúp khách hàng có những trải
            nghiệm mua sắm không chỉ tại cửa hàng mà còn ngay tại nhà.
          </p>

          {/* Chương trình khuyến mãi */}
          <h3 className="mb-2 mt-4">Các chương trình khuyến mãi và ưu đãi</h3>
          <p className="mb-4">
            Chúng tôi liên tục cập nhật các chương trình khuyến mãi hấp dẫn,
            giảm giá sốc, trả góp 0%, và các ưu đãi đặc biệt dành cho khách hàng
            thân thiết. Khách hàng có thể dễ dàng săn các chương trình ưu đãi
            này tại hệ thống cửa hàng hoặc trên website.
          </p>

          {/* Định hướng tương lai */}
          <h3 className="mb-2 mt-4">Định hướng tương lai</h3>
          <p className="mb-4">
            Trong tương lai, Thế Giới Di Động tiếp tục mở rộng mạng lưới cửa
            hàng, nâng cao chất lượng dịch vụ và đa dạng hóa danh mục sản phẩm,
            nhằm trở thành nhà bán lẻ điện thoại và sản phẩm công nghệ số 1 tại
            Việt Nam. Chúng tôi cam kết mang đến cho khách hàng những trải
            nghiệm tốt nhất, không chỉ trong mua sắm mà còn trong toàn bộ hành
            trình sử dụng sản phẩm.
          </p>

          {/* Kết luận */}
          <h3 className="mb-2 mt-4">Kết luận</h3>
          <p className="mb-4">
            Với kinh nghiệm nhiều năm trong lĩnh vực bán lẻ điện thoại di động,
            Thế Giới Di Động đã và đang trở thành thương hiệu uy tín, được khách
            hàng tin tưởng. Chúng tôi luôn lấy khách hàng làm trung tâm, nỗ lực
            cải tiến dịch vụ và mang đến những sản phẩm công nghệ tiên tiến
            nhất. Đến với Thế Giới Di Động, bạn không chỉ sở hữu những sản phẩm
            điện thoại chất lượng, mà còn trải nghiệm dịch vụ hoàn hảo và tận
            tâm từ đội ngũ của chúng tôi.
          </p>

          {/* Nút hành động */}
          <p className="mt-4">
            <Link to="/list-phone" className="btn btn-primary py-2 px-3">
              Đến ngay cửa hàng của chúng tôi
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default IntroDucePage;
