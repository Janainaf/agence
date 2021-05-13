import React from "react";

const Project = (props) => (
  <li className="work media group">
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  </li>
);
const ProjectContainer = (props) => {
  let projects = props.data.map((project) => {
    return (
      <Project
        title={project.title}
        desc={project.description}
        key={project.id}
      />
    );
  });
  return (
    <div>
      <ul>{projects}</ul>
    </div>
  );
};

export default ProjectContainer;
