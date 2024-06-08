import React, { Component } from "react";
import "../styles/general.scss";
import Header from "./header.jsx";
import Main from "./main.jsx";
import Footer from "./footer.jsx";

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
