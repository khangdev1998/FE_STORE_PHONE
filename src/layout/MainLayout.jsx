import React, { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Overlay from "../components/Overlay/Overlay";

const MainLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const btnShowSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const wrapperStyle = {
    gridTemplateColumns: isCollapsed ? "auto 1fr" : null,
  };

  return (
    <>
      <Header btnShowSidebar={btnShowSidebar} />
      <div className="wrapper" style={wrapperStyle}>
        <Sidebar
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <Overlay isVisible={isSidebarOpen} onClick={closeSidebar} />
        <div className="p-md-4 p-2">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
