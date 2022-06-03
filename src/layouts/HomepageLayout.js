import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";

const HomepageLayout = () => {
  return (
    <div className="fullHeight">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomepageLayout;
