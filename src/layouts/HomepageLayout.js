import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";

const HomepageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomepageLayout;
