import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const params = useParams();

  const [projectsList, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await axios.get(`http://localhost:5050/projects`);
      setProjects(response.data);
    }
    fetchProjects();
  }, []);

  return (
    <main className="projects">
      <div className="projects-container">
        <ul className="projects-ul">
          {projectsList.map((project) => {
            // Check if project.image is an array and has at least one element
            const imageSrc =
              Array.isArray(project.image) && project.image.length > 0
                ? project.image[0]
                : "/default-image.jpg";

            return (
              <li key={project.id} className="projects-item">
                <Link to={`/projects/${project.id}`}>
                  <div className="projects-item__overlay">
                    <h1>{project.title}</h1>
                    <h4>{project.category}</h4>
                  </div>

                  <img
                    className="projects-item__image"
                    src={imageSrc}
                    alt={project.title}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

//
//
/*
const ProjectsPage = (props) => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.scrollLeft);
      }
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (containerElement) {
        containerElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  //

  return (
    <main className="projects">
      <div className="projects-container" ref={containerRef}>
        <ul className="projects-ul">
          {props.projectsList.map((project) => {
            return (
              <li key={project.id} className="projects-item">
                <Link to={`/projects/${project.id}`}>
                  <div className="projects-item__overlay">
                    <h1>{project.title}</h1>
                    <h4>{project.category}</h4>
                  </div>

                  <img
                    className="projects-item__image"
                    src={project.image[0]}
                    alt={project.title}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
    );
};
*/
//

export default ProjectsPage;
