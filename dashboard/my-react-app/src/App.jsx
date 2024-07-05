import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from "./layout/MainLayout";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <div>
      <MainLayout>
        <DashboardPage />
      </MainLayout>
    </div>
  );
}

export default App;
