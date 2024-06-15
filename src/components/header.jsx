import React from "react";
import "../styles/_header.scss";
import HeaderMenu from "./HeaderMenu.jsx";
import headerLogo from "../images/header_logo.svg";

function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__menu-title">
          <img src={headerLogo} alt="logo" />
          <h1>English Study App</h1>
        </div>
        <HeaderMenu />
      </header>
    </React.Fragment>
  );
}
export default Header;
