import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import React, { Suspense, lazy } from "react";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import MainLayout from "./layout/MainLayout";
import LoginPage from "./pages/AuthPage/LoginPage";
import ListPhonePage from "./pages/ListPhonePage/ListPhonePage";
import ListBlogPage from "./pages/ListBlogPage/ListBlogPage";
import IntroDucePage from "./pages/IntroDucePage/IntroDucePage";
import ForgotPasswordPage from "./pages/AuthPage/ForgotPasswordPage";
import CustomerSupport from "./pages/HomePage/CustomerSupport/CustomerSupport";
import ContactPage from "./pages/ContactPage/ContactPage";
import CartFirstStep from "./pages/CartPage/CartFirstStep";
import BlogDetail from "./pages/ListBlogPage/BlogDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartSecondStep from "./pages/CartPage/CartSecondStep";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

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

            {/* Trang giỏ hàng */}
            <Route path="/cart-step1" element={<CartFirstStep />} />
            <Route path="/cart-step2" element={<CartSecondStep />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
