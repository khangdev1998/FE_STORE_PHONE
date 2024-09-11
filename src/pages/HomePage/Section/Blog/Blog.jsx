import React from "react";
import styles from "./Blog.module.scss";
import ArticlesItem from "../../../../components/ArticlesItem/ArticlesItem";

const Blog = () => {
  return (
    <div className={`${styles.blog} my-5`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h1 className="fs-4">Kiến thức hữu ích</h1>
        </div>

        <div className="row g-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div className="col-3" key={index}>
                <ArticlesItem />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
