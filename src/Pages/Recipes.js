import React from "react";
import Loading from "../Components/Loading";
import PageControls from "../Components/PageControls";
import SearchBox from "../Components/SearchBox";

const Recipes = ({ isLoading, recipes, onSearch, loadMoreRecipes }) => {
  return (
    <div className="main-container">
      <h1 className="recipe-main-title">Vegan Recipes</h1>
      {recipes.length > 0 ? (
        <div className="recipes-container">
          <SearchBox onSearch={onSearch} />
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
          {!isLoading ? (
            <div className="change-page" onClick={loadMoreRecipes}>
              Load More &darr;
            </div>
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <Loading />
      )}
      <PageControls />
    </div>
  );
};

export default Recipes;
