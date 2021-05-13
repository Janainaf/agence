import React from "react";
import { Route, NavLink } from "react-router-dom";

import ProjectContainer from "./StudyCase";
import { Sedan, Selano, Platon } from "../data/projects";

const Work = ({ match }) => (
  <div className="main-content home">
    <h2>Projects</h2>
    <p>
      Découvrez pas à pas comment nous avons été présent pour lancer vos marques
      préférées.
    </p>
    <ul className="work-nav">
      <li>
        <NavLink to={`${match.url}/sedan-study-case`}>Sedan</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/selano-study-case`}>Selano</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/platon-study-case`}>Platon</NavLink>
      </li>
    </ul>

    {/* Write routes here... */}

    <Route
      path={`${match.path}/sedan-study-case`}
      render={() => <ProjectContainer data={Sedan} />}
    />
    <Route
      path={`${match.path}/selano-study-case`}
      render={() => <ProjectContainer data={Selano} />}
    />
    <Route
      path={`${match.path}/platon-study-case`}
      render={() => <ProjectContainer data={Platon} />}
    />
  </div>
);

export default Work;
