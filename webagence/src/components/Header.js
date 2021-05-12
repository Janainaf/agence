import React from "react";
import { NavLink } from "react-router-dom";
import DarkMode from "./Darkmode";

const Header = () => (
  <header>
    <DarkMode></DarkMode>{" "}
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
        <NavLink exact to="/works">
          Projects
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
