import React from "react";
import CardList from "./layout/CardList/CardList";
import SellingProducts from "./layout/SellingProducts/SellingProducts";

const DashboardPage = () => {
  return (
    <div>
      <CardList />
      <SellingProducts />
    </div>
  );
};

export default DashboardPage;
