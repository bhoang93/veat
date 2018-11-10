import React from "react";

import SearchBox from "../Components/SearchBox";

const Recipes = ({ recipes, onSearch, loadMoreRecipes }) => {
  return (
    <div>
      <h1 className="recipe-main-title">Recipes</h1>
      <SearchBox onSearch={onSearch} />
      {recipes.length > 0 ? (
        <div className="recipes-container">
          {recipes.map(recipe => {
            return (
              <div className="recipe" id={recipe.recipe_id}>
                <img
                  className="recipe__img"
                  src={recipe.image_url}
                  alt="Recipe"
                />
                <div className="recipe__header">
                  <h2 className="recipe__title">{recipe.title}</h2>
                  <p className="recipe__publisher">
                    From{" "}
                    <a className="recipe__pub-link" href={recipe.publisher_url}>
                      {recipe.publisher}
                    </a>
                  </p>
                </div>
                <div className="recipe__link">
                  <a href={recipe.source_url}>Recipe</a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
      <div className="recipe__load" onClick={loadMoreRecipes}>
        Load More
      </div>
    </div>
  );
};

export default Recipes;