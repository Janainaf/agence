import React from "react";

const ProjectContainer = (props) => {
  let projects = props.data.map((project) => {
    return (
      <li className="work media group">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </li>
    );
  });
  return (
    <div>
      <ul>{projects}</ul>
    </div>
  );
};

export default ProjectContainer;
