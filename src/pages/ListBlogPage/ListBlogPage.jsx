import React from "react";
import ArticlesItem from "../../components/ArticlesItem/ArticlesItem";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import styles from "./ListBlogPage.module.scss";

const ListBlogPage = () => {
  return (
    <>
      <div className="container my-3">
        <Breadcrumb />
      </div>

      <div className="bg-light py-5 my-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-8">
              <div className="row g-4">
                {Array(11)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="col-4">
                      <ArticlesItem />
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-4">
              <h4>Bài viết nổi bật</h4>

              <div className={styles.search}>
                <input type="text" placeholder="Tìm kiếm bài viết..." />
                <button>
                  <i className="bi bi-search"></i>
                </button>
              </div>

              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="mb-4">
                    {" "}
                    <ArticlesItem layout="row" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListBlogPage;
