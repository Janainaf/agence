import React from "react";

const Featured = ({ match }) => {
  let project = match.params.project;
  return (
    <div className="main-content">
      <h2>{project} </h2>
      <p>
        Introducing <strong>{project}</strong>, a project that was done by us.{" "}
        <strong></strong>!
      </p>
    </div>
  );
};

export default Featured;
