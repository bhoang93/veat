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
    this.state = {
      recipes: [],
      recipePage: 2
    };
  }

  fullRecipeList = [];

  componentDidMount() {
    fetch(
      "https://www.food2fork.com/api/search?key=7f0486a5c4cf004b8b52646b5c9590e8&q=vegan"
    )
      .then(resp => resp.json())
      .then(
        data => data && data.recipes && this.setState({ recipes: data.recipes })
      )
      .then(() => (this.fullRecipeList = this.state.recipes));
  }

  onSearch = event => {
    const matchingRecipes = this.state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (event.target.value.length > 0) {
      this.setState({ recipes: matchingRecipes });
    } else {
      this.setState({ recipes: this.fullRecipeList });
    }
  };

  loadMoreRecipes = () => {
    fetch(
      `https://www.food2fork.com/api/search?key=7f0486a5c4cf004b8b52646b5c9590e8&q=vegan&page=${
        this.state.recipePage
      }`
    )
      .then(resp => resp.json())
      .then(
        data => (this.fullRecipeList = this.fullRecipeList.concat(data.recipes))
      )
      .then(() =>
        this.setState(prevState => {
          return {
            recipes: this.fullRecipeList,
            recipePage: prevState.recipePage + 1
          };
        })
      );
  };

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
              render={() => (
                <Recipes
                  recipes={this.state.recipes}
                  onSearch={this.onSearch}
                  loadMoreRecipes={this.loadMoreRecipes}
                />
              )}
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
