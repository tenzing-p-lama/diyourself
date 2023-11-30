import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const [projectsList, setProjects] = useState([]);
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [likedProjects, setLikedProjects] = useState(() => {
    const likedProjectsFromStorage = localStorage.getItem("likedProjects");
    return likedProjectsFromStorage ? JSON.parse(likedProjectsFromStorage) : [];
  });

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

  const handleSaveProject = (projectId) => {
    if (!likedProjects.includes(projectId)) {
      const updatedLikedProjects = [...likedProjects, projectId];
      setLikedProjects(updatedLikedProjects);
      localStorage.setItem(
        "likedProjects",
        JSON.stringify(updatedLikedProjects)
      );
    }
  };

  // Apply category filter to both lists
  const filteredFirstHalf = firstHalf.filter(
    (project) => !selectedCategory || project.category === selectedCategory
  );

  const filteredSecondHalf = secondHalf.filter(
    (project) => !selectedCategory || project.category === selectedCategory
  );

  return (
    <main className="projects">
      <div className="projects-filter">
        <label className="projects-filter__menu">
          <h3>Filter by Category:</h3>
          <select
            className="projects-filter__dropdown"
            value={selectedCategory || ""}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
          >
            <option value="">All</option>
            {Array.from(
              new Set(projectsList.map((project) => project.category))
            ).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="projects-container">
        <div
          id="container"
          ref={containerRef}
          className="projects-container__UL"
        >
          <ul className="projects-ul" style={{ overflowY: "auto" }}>
            {filteredFirstHalf.map((project) => (
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
            {filteredSecondHalf.map((project) => (
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
