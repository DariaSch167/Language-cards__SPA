import React from "react";
import "../styles/_gameMain.scss";
import GameField from "./GameField.jsx";
import GameAsideMenu from "./GameAsideMenu.jsx";

function Game() {
  return (
    <React.Fragment>
      <div className="game-main">
        <div className="game-main__aside">
          <GameAsideMenu />
        </div>
        <div className="game-main__field">
          <GameField />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Game;
