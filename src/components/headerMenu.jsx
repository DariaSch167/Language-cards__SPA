import React from "react";
import headerHome from "../images/header_home.svg";
import headerGame from "../images/header_game.svg";
import headerFAQ from "../images/header_faq.svg";

function HeaderMenu() {
  return (
    <React.Fragment>
      <ul className="header__menu">
        <li className="header__menu-item">
          <button id="header_home">
            <img src={headerHome} alt="home" />
          </button>
        </li>
        <li className="header__menu-item">
          <button id="header_game">
            <img src={headerGame} alt="game" />
          </button>
        </li>
        <li className="header__menu-item">
          <button id="header_faq">
            <img src={headerFAQ} alt="faq" />
          </button>
        </li>
      </ul>
    </React.Fragment>
  );
}
export default HeaderMenu;
