import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsJSON from "../../data/projects.json";

import ImageGallery from "../../components/ImageGallery/ImageGallery.jsx";

import "./ProjectDetailsPage.scss";

function ProjectDetailsPage() {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    // Convert the id from string to number
    const numericId = parseInt(id, 10);

    const project = projectsJSON.find((project) => project.id === numericId);

    setProjectDetails(project);
  }, [id]);

  if (!projectDetails) {
    return <p>Project not found</p>;
  }

  return (
    <div className="plans">
      <section className="plans-info">
        <h1 className="plans-info__desc">{projectDetails.title}</h1>

        {/* {projectDetails.image.map((image, index) => (
          <img
            key={index}
            src={image}
            className="plans-info__images"
            alt={`${projectDetails.title} - Image ${index + 1}`}
          />
        ))} */}

        <ImageGallery
          images={projectDetails.image}
          alt={projectDetails.title}
        />

        <h2 className="plans-info__desc">{projectDetails.description}</h2>

        <h3 className="plans-info__desc">
          Category: {projectDetails.category}
        </h3>

        <ul className="plans-info__list">
          <h5>Materials:</h5>
          {projectDetails.materials && (
            <ul>
              {projectDetails.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          )}
        </ul>

        <ul className="plans-info__list">
          <h5>Tools Required:</h5>
          {projectDetails.toolsRequired && (
            <ul>
              {projectDetails.toolsRequired.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          )}
        </ul>
      </section>

      <ul className="plans-steps"></ul>
      {projectDetails.steps.map((step) => {
        return (
          <li key={step.id} className="plans-steps__list">
            <img
              className="plans-steps__list-item"
              src={step.images}
              alt={step.stepTitle}
            />
            <div className="plans-steps__list-group">
              <h1 className="plans-steps__list-item">{step.stepNumber}</h1>
              <h2 className="plans-steps__list-item">{step.stepTitle}</h2>
              <p className="plans-steps__list-item">{step.detail}</p>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default ProjectDetailsPage;
