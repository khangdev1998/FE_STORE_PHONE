import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const SuppliersPage = lazy(() => import("./pages/SuppliersPage/SuppliersPage"));
const WalletPage = lazy(() => import("./pages/WalletPage/WalletPage"));
const BlogPage = lazy(() => import("./pages/Blog/BlogPage"));
const PricingPage = lazy(() => import("./pages/PricingPage/PricingPage"));
const InformationPage = lazy(() =>
  import("./pages/InformationPage/InformationPage")
);
const SupportPage = lazy(() => import("./pages/SupportPage/SupportPage"));

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/suppliers" element={<SuppliersPage />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/information" element={<InformationPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
