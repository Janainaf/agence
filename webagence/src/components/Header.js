import React from "react";

const Header = () => (
  <header>
    <span className="icn-logo">
      <i className="material-icons">code</i>
    </span>
    <ul className="main-nav">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Works</a>
      </li>
      <li>
        <button>Dark/Light</button>
      </li>
    </ul>
  </header>
);

export default Header;