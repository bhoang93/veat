import React from "react";
import Icon from "../Images/SVG/Icon";
import { ICONS } from "../Images/SVG/SvgConstants";
import avatar from "../Images/avatar.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__text-container">
        <h1 className="header__main-title">
          <span className="header__main-title--v">V</span>
          eat.
        </h1>
        <h2 className="header__subtitle">Vegan Made Easy</h2>
      </div>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <Icon hw="20" icon={ICONS.BUBBLE} />
          <span className="user-nav__notification">1</span>
        </div>

        <div className="user-nav__icon-box">
          <Icon hw="20" icon={ICONS.SETTINGS} />
        </div>

        <div className="user-nav__user">
          <img className="user-nav__user-photo" src={avatar} alt="avatar" />
          <span className="user-nav__username">Lisa</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
