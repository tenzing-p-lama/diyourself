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
          `https://diyourself-986a58a2ea07.herokuapp.com/projects/${id}`
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
            <div className="plans-info__prep1">
              <div className="plans-info__prep1-block">
                <h4 className="plans-info__desc">{projectDetails.category}</h4>

                <h1 className="plans-info__desc">{projectDetails.title}</h1>

                <span className="plans-info__desc">
                  {projectDetails.description}
                </span>
              </div>

              <ImageGallery
                images={projectDetails.image}
                alt={projectDetails.title}
              />
            </div>

            <div className="plans-info__prep2">
              <li className="plans-info__list">
                <p>Materials:</p>
                {projectDetails.materials && (
                  <ul className="plans-info__list-name">
                    {projectDetails.materials.map((material, index) => (
                      <li key={index} className="plans-info__list-req">
                        {material}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="plans-info__list">
                <p>Tools Required:</p>
                {projectDetails.toolsRequired && (
                  <ul className="plans-info__list-name">
                    {projectDetails.toolsRequired.map((tool, index) => (
                      <li key={index} className="plans-info__list-req">
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="plans-info__list">
                <p>Cut List:</p>
                {projectDetails.cutList && (
                  <ul className="plans-info__list-name">
                    {projectDetails.cutList.map((cutlist, index) => (
                      <li key={index} className="plans-info__list-req">
                        {cutlist}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
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
