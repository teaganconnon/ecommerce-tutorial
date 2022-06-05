import React from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./../../firebase/utils";

import Logo from "../../assets/funhat.png";

const Header = (props) => {
  const { currentUser } = props;
  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="Fun Hat" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <span onClick={onLogout}>Log Out</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to={"/registration"}>Register</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
