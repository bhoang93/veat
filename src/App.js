import React, { Component } from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import View from "./Components/View";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Navigation />
          <View />
        </div>
      </div>
    );
  }
}

export default App;
