import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <button>Dark/Light</button>

    <ul className="main-nav">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink exact to="works">
          Works
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
