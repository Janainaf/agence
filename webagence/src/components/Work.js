import React from "react";
import { Route, NavLink } from "react-router-dom";
import Featured from "./StudyCase";

const Works = () => (
  <div className="main-content work">
    <div className="work-header group">
      <h2> Projects </h2>
      <ul className="work-nav">
        <li>
          <NavLink to="/works/platon">Platon</NavLink>
        </li>
        <li>
          <NavLink to="/works/solane">Solane</NavLink>
        </li>
        <li>
          <NavLink to="/works/sedal">Sedal</NavLink>
        </li>
      </ul>
    </div>
    <Route path="/works/platon" component={Featured} />
  </div>
);

export default Works;
