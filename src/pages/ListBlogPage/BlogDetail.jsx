import React from "react";
import styles from "./ListBlogPage.module.scss";
import ArticlesItem from "../../components/ArticlesItem/ArticlesItem";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const BlogDetail = () => {
  return (
    <>
      <div className="container mt-3">
        <Breadcrumb />
      </div>
      <div className="container my-4">
        <div className={styles.post}>
          <div className={styles.postCaption}>
            <h1 className={styles.title}>
              Samsung trình diễn loạt TV cao cấp thế hệ mới tại Việt Nam: AI là
              điểm nhấn, giá thấp nhất 38 triệu đồng
            </h1>
            <p className={styles.description}>
              3 dòng TV cao cấp gồm Neo QLED 8K, Neo QLED 4K và TV OLED 2024 sẽ
              được mở bán tại thị trường Việt Nam từ ngày 1/6. Ngoài các dòng TV
              chủ lực kể trên, hãng cũng mang đến bản nâng cấp của TV The Frame
              với thiết kế khung tranh quen thuộc, giá treo ẩn và khung viền đi
              kèm. Chế độ Art Mode mới cho phép người dùng thưởng thức miễn phí
              20 tranh bản quyền theo chế độ hình nền. Thư viện tranh cũng được
              tăng lên 2.500 tác phẩm nghệ thuật.
            </p>
            <div className="d-flex flex-md-row flex-column align-items-md-center align-items-start gap-3 mb-4">
              <span className={styles.date}>16:09 - 28/05/2024</span>
              <div className={styles.listTag}>
                <a href="#!">Samsung</a>
                <a href="#!">Apple</a>
              </div>
            </div>
            <div className="ratio ratio-21x9 rounded-4 overflow-hidden mb-4   ">
              <img
                className="object-fit-cover"
                src="https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=" this-image"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-9">
              <div className={`${styles.postContent} bg-light p-4 rounded-4`}>
                <h1>
                  3 dòng TV cao cấp gồm Neo QLED 8K, Neo QLED 4K và TV OLED 2024
                  sẽ được mở bán tại thị trường Việt Nam từ ngày 1/6.
                </h1>
                <p>
                  Samsung vừa chính thức trình làng dòng sản phẩm TV cao cấp thế
                  hệ 2024 gồm TV Neo QLED 8K, Neo QLED 4K và TV OLED tại Việt
                  Nam.
                </p>
                <p>
                  Trong đó, Neo QLED 8K là dòng TV cao cấp nhất của hãng với bộ
                  xử lý NQ8 AI thế hệ thứ 3, nâng cấp số lượng mạng nơ-ron thần
                  kinh gấp 8 lần thế hệ trước (từ 64 lên 512), tốc độ xử lý cũng
                  cao gấp đôi.
                </p>
                <p>
                  Với công nghệ 8K AI Upscaling Pro, dòng TV này cho phép người
                  dùng nâng cấp nguồn nội dung lên chất lượng tiệm cận nhất với
                  độ phân giải 8K, bên cạnh công nghệ AI Motion Enhancer Pro (tự
                  động nhận diện và nâng cấp hình ảnh bằng AI) và Real Depth
                  Enhancer Pro (thêm chi tiết vào các cảnh chuyển động nhanh
                  bằng AI).
                </p>
                <p>
                  Dòng NEO QLED 8K có kích thước trải rộng từ 50 đến 98 inch,
                  giá từ 37,9 đến 179,9 triệu đồng.
                </p>
                <img
                  className={styles.image}
                  src="https://images.unsplash.com/photo-1574678720375-897c87118486?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="this-image"
                />
                <p>
                  Ngoài ra, nhờ các tính năng AI, TV cũng có thể tự nhận biết và
                  điều chỉnh theo nhu cầu của người dùng như kích hoạt chế độ AI
                  Auto Game khi ngừoi dùng chơi game, AI Energy tiết kiệm điện
                  khi điều chỉnh độ sáng phù hợp với căn phòng cũng như tắt TV
                  khi không có người trong phòng.
                </p>
                <p>
                  Các mẫu TV này đều đạt chứng nhận bảo mật thông qua phần mềm
                  Knox và kết nối với thiết bị từ hơn 2.000 thương hiệu khác
                  nhau thông qua ứng dụng SmartThings.
                </p>
              </div>
              <div
                className={`${styles.postSummary} bg-body-secondary rounded-3`}
              >
                <div className={styles.postSummaryContact}>
                  <div className={styles.image}>
                    <img
                      className="object-fit-cover"
                      src="https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="this-image"
                    />
                  </div>
                  <div className={styles.content}>
                    <span>
                      Liên hệ mua bất kỳ sản phẩm điện thoại nào tại cửa hàng
                    </span>
                    <b>XT MOBILE</b>
                    <span>
                      Tầng 4, Tòa nhà số 97 - 99 Láng Hạ, Đống Đa, Hà Nội (Tòa
                      nhà Petrowaco)
                    </span>
                    <div className="d-flex align-items-center gap-1">
                      Hotline:
                      <div className="d-flex align-items-center gap-2">
                        <a
                          className="text-muted text-decoration-none"
                          href="tel: 19006680"
                        >
                          19006680
                        </a>
                        <span>-</span>
                        <a
                          className="text-muted text-decoration-none"
                          href="tel: 0901191616"
                        >
                          0901191616
                        </a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      Giới thiệu:
                      <Link to="/introduce">
                        Giới thiệu về Công Ty Cửa Hàng Bán Điện Thoại
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.listPostRelated}>
          <h2 className={styles.listPostRelatedTitle}>Bài viết liên quan</h2>
          <div className="row g-4">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div className="col-3" key={index}>
                  <ArticlesItem />
                </div>
              ))}
          </div>
        </div>

        <div className={styles.comment}>
          <h2 className={styles.commentTitle}>Bình luận</h2>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "200px" }}
            ></textarea>
            <label htmlFor="floatingTextarea2">
              Viết bình luận của bạn tại đây
            </label>
          </div>
          <div className="text-end mt-3">
            <button className="btn btn-primary py-2 px-3">Gửi bình luận</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
