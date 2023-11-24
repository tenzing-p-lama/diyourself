import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ImageGallery from "../../components/ImageGallery/ImageGallery.jsx";
import "./ProjectDetailsPage.scss";

function ProjectDetailsPage() {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    async function fetchProjectDetails() {
      try {
        const response = await axios.get(
          `http://localhost:5050/projects/${id}`
        );
        setProjectDetails(response.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    }
    fetchProjectDetails();
  }, [id]);

  return (
    <>
      {projectDetails && (
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
                    <h1 className="plans-steps__list-item">
                      {step.stepNumber}
                    </h1>
                    <h2 className="plans-steps__list-item">{step.stepTitle}</h2>
                    <p className="plans-steps__list-item">{step.detail}</p>
                  </div>
                </li>
              );
            })}
          </section>
        </div>
      )}
    </>
  );
}

export default ProjectDetailsPage;
