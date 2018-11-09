import React from "react";
import Icon from "../Images/SVG/Icon";
import { ICONS } from "../Images/SVG/SvgConstants";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

const pages = [
  { name: "Home", icon: ICONS.HOME, id: "" },
  { name: "Recipes", icon: ICONS.FOOD, id: "recipes" },
  { name: "Find Restaurants", icon: ICONS.SHOP, id: "restfinder" },
  { name: "Learn More", icon: ICONS.LEARN, id: "learn" },
  { name: "Your Favourites", icon: ICONS.STAR, id: "favourites" }
];

const linkStyle = {
  backgroundColor: "#2d7d84"
};

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="side-nav">
        {pages.map(page => {
          return (
            <li key={page.id} className="side-nav__item">
              <NavLink
                activeStyle={linkStyle}
                exact
                className="side-nav__link"
                to={`/${page.id}`}
              >
                <Icon hw={30} icon={page.icon} fill={"#f5f5f5"} />
                <span className="side-nav__text">{page.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
