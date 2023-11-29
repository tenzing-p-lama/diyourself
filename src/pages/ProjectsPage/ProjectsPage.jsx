import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const [projectsList, setProjects] = useState([]);
  const containerRef = useRef(null);

  const midpoint = Math.ceil(projectsList.length / 2);
  const firstHalf = projectsList.slice(0, midpoint);
  const secondHalf = projectsList.slice(midpoint);

  useEffect(() => {
    async function fetchProjects() {
      const response = await axios.get(
        `https://diyourself-986a58a2ea07.herokuapp.com/projects`
      );
      setProjects(response.data);
    }
    fetchProjects();
  }, []);

  return (
    <main className="projects">
      <div className="projects-container">
        <div
          id="container"
          ref={containerRef}
          className="projects-container__UL"
        >
          <ul className="projects-ul" style={{ overflowY: "auto" }}>
            {firstHalf.map((project) => (
              <div key={project.id} className="projects-item">
                <Link to={`/projects/${project.id}`}>
                  <div className="projects-item__overlay">
                    <h1>{project.title}</h1>
                    <h4>{project.category}</h4>
                  </div>

                  <img
                    className="projects-item__image"
                    src={project.image[0] || "/upload.jpg"}
                    alt={project.title}
                  />
                </Link>
              </div>
            ))}
          </ul>

          <ul className="projects-ul" style={{ overflowY: "auto" }}>
            {secondHalf.map((project) => (
              <div key={project.id} className="projects-item">
                <Link to={`/projects/${project.id}`}>
                  <div className="projects-item__overlay">
                    <h1>{project.title}</h1>
                    <h4>{project.category}</h4>
                  </div>

                  <img
                    className="projects-item__image"
                    src={project.image[0] || "/upload.jpg"}
                    alt={project.title}
                  />
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
