import React, { Component } from "react";
import "../styles/general.scss";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <Header />
          <div className="main__wrapper">
            <Main />
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
