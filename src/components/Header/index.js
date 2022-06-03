import React from "react";
import "./styles.scss";

import Logo from "../../assets/funhat.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Fun Hat" />
        </div>
      </div>
    </header>
  );
};

export default Header;
