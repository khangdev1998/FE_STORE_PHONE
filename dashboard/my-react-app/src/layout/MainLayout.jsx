import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <div className="p-md-4 p-2">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
