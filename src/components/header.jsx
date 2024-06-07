import React from "react";
import HeaderMenu from "./headerMenu.jsx";
import headerLogo from "../images/header_logo.svg";

function Header() {
  return (
    <React.Fragment>
      <div className="header__menu-title">
        <img src={headerLogo} alt="logo" />
        <h1>English Study App</h1>
      </div>
      <HeaderMenu />
    </React.Fragment>
  );
}
export default Header;
