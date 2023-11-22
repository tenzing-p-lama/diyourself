import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsJSON from "../../data/projects.json";

import "./ProjectDetailsPage.scss";

function ProjectDetailsPage() {
  const { id } = useParams(); // Get the project ID from the URL parameters
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    // Convert the id from string to number
    const numericId = parseInt(id, 10);

    const project = projectsJSON.find((project) => project.id === numericId);
    console.log("Found Project:", project);

    setProjectDetails(project);
  }, [id]);

  if (!projectDetails) {
    return <p>Project not found</p>;
  }

  return (
    <div className="plans">
      <h1>{projectDetails.title}</h1>
      {projectDetails.image.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${projectDetails.title} - Image ${index + 1}`}
        />
      ))}
      <p>{projectDetails.description}</p>
      <p>{projectDetails.category}</p>
      <ul>Materials: {projectDetails.materials}</ul>
      <ul>Tools Required: {projectDetails.toolsRequired}</ul>
      <ul>Steps</ul>
      {projectDetails.steps.map((step, index) => {
        return (
          <li key={index}>
            <h2>Step {step.stepNumber}</h2>
            <h3>{step.stepTitle}</h3>
            <p>{step.detail}</p>
            <img src={step.images} alt={step.stepTitle} />
          </li>
        );
      })}
    </div>
  );
}

export default ProjectDetailsPage;
