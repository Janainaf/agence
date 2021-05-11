import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <button>Dark/Light</button>

    <ul className="main-nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="works">Works</Link>
      </li>
    </ul>
  </header>
);

export default Header;
