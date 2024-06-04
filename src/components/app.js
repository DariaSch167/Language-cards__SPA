import React, { Component } from "react";
import Header from "./header.jsx";
import Main from "./main.jsx";
import Footer from "./footer.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
