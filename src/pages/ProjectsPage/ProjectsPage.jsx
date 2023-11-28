import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const [projectsList, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await axios.get(`http://localhost:5050/projects`);
      setProjects(response.data);
    }
    fetchProjects();
  }, []);

  const midpoint = Math.ceil(projectsList.length / 2);

  const firstHalf = projectsList.slice(0, midpoint);
  const secondHalf = projectsList.slice(midpoint);

  return (
    <main className="projects">
      <div className="projects-container">
        <div className="projets-container__UL">
          <ul className="projects-ul">
            {firstHalf.map((project) => (
              <li key={project.id} className="projects-item">
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
              </li>
            ))}
          </ul>

          <ul className="projects-ul">
            {secondHalf.map((project) => (
              <li key={project.id} className="projects-item">
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
