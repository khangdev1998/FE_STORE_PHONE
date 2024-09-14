import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import ForgotPasswordPage from "./pages/AuthPage/ForgotPasswordPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import IntroDucePage from "./pages/IntroDucePage/IntroDucePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import BlogDetail from "./pages/ListBlogPage/BlogDetail";
import ListPhonePage from "./pages/ListPhonePage/ListPhonePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ListBlogPage from "./pages/ListBlogPage/ListBlogPage";
import CustomerSupport from "./pages/HomePage/CustomerSupport/CustomerSupport";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <MainLayout>
        <Suspense fallback={null}>
          <Routes>
            {/* Trang chủ */}
            <Route path="/" element={<HomePage />} />

            {/* Trang danh sách điện thoại */}
            <Route path="/list-phone" element={<ListPhonePage />} />

            {/* Trang danh sách bài viết */}
            <Route path="/list-blog" element={<ListBlogPage />} />

            {/* Trang Giới thiệu */}
            <Route path="/introduce" element={<IntroDucePage />} />

            {/* Trang Liên hệ */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Trang bài viết chi tiết */}
            <Route path="/blog-detail" element={<BlogDetail />} />

            {/* Trang chi tiết sản phẩm */}
            <Route path="/product-detail" element={<ProductDetailPage />} />

            {/* Trang đăng nhập */}
            <Route path="/login" element={<LoginPage />} />

            {/* Trang đăng ký */}
            <Route path="/register" element={<RegisterPage />} />

            {/* Trang quên mật khẩu */}
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Trang hỗ trợ khách hàng */}
            <Route path="/customer-support" element={<CustomerSupport />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
