import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
  return (
    <div>
      <Header {...props} />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
