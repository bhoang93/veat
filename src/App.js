import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

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
      isLoading: false,
      recipes: [],
      recipePage: 2,
      loadedRest: false,
      restList: []
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
    this.setState(
      prevState => {
        return { isLoading: !prevState.isLoading };
      },
      () =>
        fetch(
          `https://www.food2fork.com/api/search?key=7f0486a5c4cf004b8b52646b5c9590e8&q=vegan&page=${
            this.state.recipePage
          }`
        )
          .then(resp => resp.json())
          .then(
            data =>
              (this.fullRecipeList = this.fullRecipeList.concat(data.recipes))
          )
          .then(() =>
            this.setState(prevState => {
              return {
                recipes: this.fullRecipeList,
                recipePage: prevState.recipePage + 1,
                isLoading: !prevState.isLoading
              };
            })
          )
    );
  };

  loadRest = () => {
    this.setState(
      prevState => {
        return { isLoading: !prevState.isLoading };
      },
      () => {
        const setPosition = position => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;

          fetch(
            `https://www.vegguide.org/search/by-lat-long/${lat},${long}/filter/veg_level=5"`,
            {
              headers: {
                "User-Agent": "veat"
              }
            }
          )
            .then(resp => resp.json())
            .then(data =>
              this.setState(prevState => {
                return {
                  restList: data.entries,
                  loadedRest: !prevState.loadRest,
                  isLoading: !prevState.isLoading
                };
              })
            );
        };

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(setPosition);
        }
      }
    );
  };

  resetRest = () => {
    this.setState({
      loadedRest: false,
      restList: []
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="content">
            <Navigation />
            <Route exact path="/" component={View} />
            <Route
              path="/recipes"
              render={() => (
                <Recipes
                  isLoading={this.state.isLoading}
                  recipes={this.state.recipes}
                  onSearch={this.onSearch}
                  loadMoreRecipes={this.loadMoreRecipes}
                />
              )}
            />
            <Route
              path="/restfinder"
              render={() => (
                <RestFinder
                  loadedRest={this.state.loadedRest}
                  isLoading={this.state.isLoading}
                  loadRest={this.loadRest}
                  restList={this.state.restList}
                  resetRest={this.resetRest}
                />
              )}
            />
            <Route path="/learn" component={Learn} />
            <Route path="/favourites" component={Favourites} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
