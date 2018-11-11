import React from "react";
import { ICONS } from "../Images/SVG/SvgConstants";
import Icon from "../Images/SVG/Icon";
import spinner from "../Images/SVG/spinner10.svg";

import SearchBox from "../Components/SearchBox";

const Recipes = ({
  isLoading,
  recipes,
  onSearch,
  loadMoreRecipes,
  scrollToTop,
  scrollToBottom
}) => {
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
            <div className="recipe__load" onClick={loadMoreRecipes}>
              Load More &darr;
            </div>
          ) : (
            <img
              src={spinner}
              className="loading-spinner"
              alt="loading spinner"
            />
          )}
        </div>
      ) : (
        <img src={spinner} className="loading-spinner" alt="loading spinner" />
      )}
      <aside>
        <div className="scroll scrollToTop" onClick={scrollToTop}>
          <Icon icon={ICONS.UPARROW} hw={50} />
        </div>
        <div className="scroll scrollToBottom" onClick={scrollToBottom}>
          <Icon icon={ICONS.DOWNARROW} hw={50} />
        </div>
      </aside>
    </div>
  );
};

export default Recipes;
