import React from "react";
import CardList from "./sections/CardList/CardList";
import SellingProducts from "./sections/SellingProducts/SellingProducts";
import TableSection from "../../components/TableSection/TableSection";
import {
  discountProducts,
  topSuppliers,
  topSellers,
  newProducts,
  newSuppliers,
} from "../../data";
import Gallery from "../../components/Gallery/Gallery";

const DashboardPage = () => {
  return (
    <div>
      <CardList />

      <SellingProducts />

      <div className="row mt-4">
        <div className="col-xxl-6 col-12 mb-4">
          <TableSection
            title={discountProducts.title}
            data={discountProducts.data}
            columns={discountProducts.columns}
            avatarVariant="circle"
          />
        </div>
        <div className="col-xxl-6 col-12 mb-4">
          <TableSection
            title={topSuppliers.title}
            data={topSuppliers.data}
            columns={topSuppliers.columns}
            avatarVariant="rounded"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-6 col-12 mb-4">
          <TableSection
            title={topSellers.title}
            data={topSellers.data}
            columns={topSellers.columns}
            avatarVariant="circle"
          />
        </div>
        <div className="col-xxl-6 col-12 mb-4">
          <TableSection
            title={newProducts.title}
            data={newProducts.data}
            columns={newProducts.columns}
            avatarVariant="rounded"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-6 col-12 mb-4">
          <TableSection
            title={newSuppliers.title}
            data={newSuppliers.data}
            columns={newSuppliers.columns}
            avatarVariant="circle"
          />
        </div>

        <div className="col-xxl-6 col-12">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
