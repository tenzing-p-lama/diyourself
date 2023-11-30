import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./SavedProjectsPage.scss";

const SavedProjectsPage = () => {
  const [savedProjects, setSavedProjects] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);

  const midpoint = Math.ceil(projectDetails.length / 2);
  const firstHalf = projectDetails.slice(0, midpoint);
  const secondHalf = projectDetails.slice(midpoint);

  useEffect(() => {
    // Retrieve liked projects from localStorage
    const likedProjectsFromStorage = localStorage.getItem("likedProjects");
    if (likedProjectsFromStorage) {
      const parsedLikedProjects = JSON.parse(likedProjectsFromStorage);
      setSavedProjects(parsedLikedProjects);

      // Fetch details for each saved project
      const fetchDetails = async () => {
        const projectsDetails = await Promise.all(
          parsedLikedProjects.map((projectId) =>
            axios
              .get(
                `https://diyourself-986a58a2ea07.herokuapp.com/projects/${projectId}`
              )
              .then((response) => response.data)
              .catch((error) => {
                console.error("Error fetching project details", error);
                return null;
              })
          )
        );
        setProjectDetails(projectsDetails.filter(Boolean));
      };

      fetchDetails();
    }
  }, []);

  const handleRemoveProject = (projectId) => {
    const updatedSavedProjects = savedProjects.filter(
      (savedProject) => savedProject !== projectId
    );
    const updatedProjectDetails = projectDetails.filter(
      (project) => project.id !== projectId
    );

    setSavedProjects(updatedSavedProjects);
    setProjectDetails(updatedProjectDetails);
    localStorage.setItem("likedProjects", JSON.stringify(updatedSavedProjects));
  };

  // Function to check if a project is saved
  const isProjectSaved = (projectId) => savedProjects.includes(projectId);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <main className="projects">
      <Link to="/projects" className="savedprojects-button">
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="lg"
          style={{
            color: "#000000",
            cursor: "pointer",
          }}
        />
        <h4 className="savedprojects-button__back">Back to Projects</h4>
      </Link>

      <div className="savedprojects-container">
        <ul>
          {firstHalf.map((project) => (
            <div key={project.id} className="savedprojects-ul">
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

                <FontAwesomeIcon
                  icon={faBookmark}
                  className={
                    isProjectSaved(project.id) ? "bookmark-saved" : "bookmark"
                  }
                  size="2xl"
                  style={{
                    color: isSaved ? "#000000" : "#FF0000",
                    cursor: "pointer",
                  }}
                  onClick={() => handleRemoveProject(project.id)}
                />
              </div>
            </div>
          ))}
        </ul>

        <ul>
          {secondHalf.map((project) => (
            <div key={project.id} className="savedprojects-ul">
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

                <FontAwesomeIcon
                  icon={faBookmark}
                  className={
                    isProjectSaved(project.id) ? "bookmark-saved" : "bookmark"
                  }
                  size="2xl"
                  style={{
                    color: isSaved ? "#000000" : "#FF0000",
                    cursor: "pointer",
                  }}
                  onClick={() => handleRemoveProject(project.id)}
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default SavedProjectsPage;
