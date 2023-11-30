import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

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

  //
  //
  const [likedProjects, setLikedProjects] = useState(() => {
    const likedProjectsFromStorage = localStorage.getItem("likedProjects");
    return likedProjectsFromStorage ? JSON.parse(likedProjectsFromStorage) : [];
  });

  // Function to handle saving a project
  const handleSaveProject = (projectId) => {
    // Check if the project is already in likedProjects
    if (!likedProjects.includes(projectId)) {
      // If not, add it to likedProjects
      const updatedLikedProjects = [...likedProjects, projectId];
      setLikedProjects(updatedLikedProjects);
      // Save likedProjects to localStorage
      localStorage.setItem(
        "likedProjects",
        JSON.stringify(updatedLikedProjects)
      );
    }
  };
  //
  //

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
              <div key={project.id} className="projects-ul__group">
                <div className="projects-item">
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

                <FontAwesomeIcon
                  icon={faBookmark}
                  className="projects-ul__save"
                  size="2xl"
                  style={{
                    color: likedProjects.includes(project.id)
                      ? "#ff0000"
                      : "#000000",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSaveProject(project.id)}
                />
              </div>
            ))}
          </ul>

          <ul className="projects-ul" style={{ overflowY: "auto" }}>
            {secondHalf.map((project) => (
              <div key={project.id} className="projects-ul__group">
                <div className="projects-item">
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

                <FontAwesomeIcon
                  icon={faBookmark}
                  className="projects-ul__save"
                  size="2xl"
                  style={{
                    color: likedProjects.includes(project.id)
                      ? "#ff0000"
                      : "#000000",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSaveProject(project.id)}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
