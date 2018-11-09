import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

import View from "./Pages/View";
import RestFinder from "./Pages/RestFinder";
import Recipes from "./Pages/Recipes";
import Learn from "./Pages/Learn";
import Favourites from "./Pages/Favourites";

class App extends Component {
  constructor() {
    super();
    this.state = { recipes: [{ title: "Loading..." }] };
  }

  componentDidMount() {
    fetch(
      "https://www.food2fork.com/api/search?key=7f0486a5c4cf004b8b52646b5c9590e8&q=vegan"
    )
      .then(resp => resp.json())
      .then(data => this.setState({ recipes: data.recipes }))
      .then(() => console.log(this.state.recipes));
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header />
          <div className="content">
            <Navigation />
            <Route exact path="/" component={View} />
            <Route
              path="/recipes"
              render={() => <Recipes recipes={this.state.recipes} />}
            />
            <Route path="/restfinder" component={RestFinder} />
            <Route path="/learn" component={Learn} />
            <Route path="/favourites" component={Favourites} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
