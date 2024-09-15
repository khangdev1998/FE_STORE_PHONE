import React from "react";
import styles from "./Blog.module.scss";
import ArticlesItem from "../../../../components/ArticlesItem/ArticlesItem";
import ReadmoreButton from "../../../../components/ReadmoreButton/ReadmoreButton";

const Blog = () => {
  return (
    <div className={`${styles.blog} my-5`}>
      <div className="container">
        <div className="d-flex flex-sm-row flex-column align-items-center gap-2 justify-content-between mb-4">
          <h1
            style={{
              fontSize: "clamp(1.375rem, 1.109rem + 1.002vw, 1.75rem)",
              lineHeight: "30px",
              color: "#292f36",
              fontWeight: "bold",
            }}
          >
            Kiến thức hữu ích
          </h1>
          <ReadmoreButton to="/list-blog" text="Xem thêm bài viết" />
        </div>

        <div className="row g-md-4 g-3">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div className="col-lg-3 col-md-4 col-6" key={index}>
                <ArticlesItem />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
