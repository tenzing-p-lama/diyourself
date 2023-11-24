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

        <ImageGallery
          images={projectDetails.image}
          alt={projectDetails.title}
        />

        <h3 className="plans-info__desc">{projectDetails.category}</h3>

        <h3 className="plans-info__desc">{projectDetails.description}</h3>

        <div className="plans-info__prep">
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

          <ul className="plans-info__list">
            <h5>Cut List:</h5>
            {projectDetails.cutList && (
              <ul>
                {projectDetails.cutList.map((cutlist, index) => (
                  <li key={index}>{cutlist}</li>
                ))}
              </ul>
            )}
          </ul>
        </div>
      </section>

      <section className="plans-steps">
        {projectDetails.steps.map((step) => {
          return (
            <li key={step.id} className="plans-steps__list">
              <div className="plans-steps__list-img">
                <img
                  className="plans-steps__list-item"
                  src={step.images}
                  alt={step.stepTitle}
                />
              </div>

              <div className="plans-steps__list-group">
                <h1 className="plans-steps__list-item">{step.stepNumber}</h1>
                <h2 className="plans-steps__list-item">{step.stepTitle}</h2>
                <p className="plans-steps__list-item">{step.detail}</p>
              </div>
            </li>
          );
        })}
      </section>
    </div>
  );
}

export default ProjectDetailsPage;
