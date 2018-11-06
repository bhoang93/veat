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

      <form action="#" className="search">
        <input type="text" class="search__input" placeholder="Search recipes" />
        <button className="search__button">
          <Icon styleType="search" hw="20" icon={ICONS.SEARCH} />
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <Icon hw="30" icon={ICONS.LEARN} />
          <span styleType="nav" className="user-nav__notification">
            1
          </span>
        </div>

        <div className="user-nav__icon-box">
          <Icon hw="30" icon={ICONS.BUBBLE} />
          <span styleType="nav" className="user-nav__notification">
            1
          </span>
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
