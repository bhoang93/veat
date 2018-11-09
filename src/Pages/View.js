import React from "react";
import food1 from "../Images/food1.jpg";
import food2 from "../Images/food2.jpg";
import food3 from "../Images/food3.jpg";

import avatar from "../Images/avatar.jpg";

const View = () => {
  return (
    <div className="view">
      <div className="gallery">
        <figure className="gallery__item">
          <span className="gallery__item--hover">
            Click Here for the Recipe
          </span>
          <img src={food1} alt="vegan food" className="gallery__photo" />
        </figure>

        <figure className="gallery__item">
          <span className="gallery__item--hover">
            Click Here for the Recipe
          </span>
          <img src={food2} alt="vegan food" className="gallery__photo" />
        </figure>

        <figure className="gallery__item">
          <span className="gallery__item--hover">
            Click Here for the Recipe
          </span>
          <img src={food3} alt="vegan food" className="gallery__photo" />
        </figure>
      </div>

      <h1 className="overview__heading">Recipes, Restaurants and More</h1>
      <div className="detail">
        <div className="description">
          <p className="description__paragraph">
            Minim laborum consectetur, mandaremus nam fore consequat an quis
            deserunt id consectetur, singulis noster aliqua id quis. Officia
            esse voluptate nam ne summis de dolore, officia ubi consequat a sed
            dolore firmissimum. Eram ubi constias.Et ita esse vidisse, si aute
            id export, e multos quorum ab proident e quae aut pariatur est quis.
            Occaecat esse ipsum ad anim. Multos appellat despicationes, hic hic
            culpa multos multos.
          </p>
          <ul className="description__list">
            <li className="description__list--item">dolore esse nulla</li>
            <li className="description__list--item">quis duis quem</li>
            <li className="description__list--item">sint labore quis</li>
            <li className="description__list--item">dolore aute magna</li>
            <li className="description__list--item">tamen fore cillum</li>
            <li className="description__list--item">illum labore quae</li>
            <li className="description__list--item">nulla esse aute</li>
            <li className="description__list--item">duis sunt eram</li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              Jeff and 3 others recommend this.
            </p>
          </div>
        </div>
        <div className="user-reviews">
          <figure className="review">
            <blockquote className="review__text">
              cillum ipsum duis malis quorum duis tempor amet noster sunt veniam
              eram fore quae eram aliqua aute veniam multos minim
            </blockquote>
            <figcaption className="review__user">
              <img className="user-nav__user-photo" src={avatar} alt="avatar" />
              <div className="review__user-box">
                <p className="review__user-name">Lisa Mackey</p>
                <p className="review__user-date">10th Oct, 2019</p>
              </div>
              <div className="review__rating">4.2</div>
            </figcaption>
          </figure>

          <figure className="review">
            <blockquote className="review__text">
              cillum ipsum duis malis quorum duis tempor amet noster sunt veniam
              eram fore quae eram aliqua aute veniam multos minim
            </blockquote>
            <figcaption className="review__user">
              <img className="user-nav__user-photo" src={avatar} alt="avatar" />
              <div className="review__user-box">
                <p className="review__user-name">Lisa Mackey</p>
                <p className="review__user-date">10th Oct, 2019</p>
              </div>
              <div className="review__rating">8.9</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default View;
