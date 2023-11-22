import React from "react";
import "./SelectedProject.scss";

function SelectedProject(props) {
  return (
    <>
      <h1>{props.SelectedProject.title}</h1>
      <p>{props.SelectedProject.description}</p>
    </>
  );
}

export default SelectedProject;
