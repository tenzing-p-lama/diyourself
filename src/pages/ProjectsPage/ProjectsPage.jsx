import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import LocomotiveScroll from "locomotive-scroll";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useSpring, animated } from "react-spring";

import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const [projectsList, setProjects] = useState([]);
  const containerRef = useRef(null);

  const midpoint = Math.ceil(projectsList.length / 2);
  const firstHalf = projectsList.slice(0, midpoint);
  const secondHalf = projectsList.slice(midpoint);

  useEffect(() => {
    async function fetchProjects() {
      const response = await axios.get(`http://localhost:5050/projects`);
      setProjects(response.data);
    }
    fetchProjects();
  }, []);

  ////

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const currentScroll = container.scrollTop;
      const bottom = 100;

      if (currentScroll + bottom >= maxScroll) {
        // const uls = container.querySelectorAll("ul");

        // uls.forEach((ul) => {
        //   const newUl = ul.cloneNode(true);
        //   ul.parentNode.appendChild(newUl);
        // });
        //

        //
        container.scrollTop = 0;
        //
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  ////

  return (
    /*
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
    */
    <main
      style={{
        height: "90vh",
        overflowY: "auto",
        overflowX: "scroll",
      }}
    >
      <div
        id="container"
        ref={containerRef}
        style={{
          display: "flex",
          flexDirection: "row",
          height: "90vh",
          overflowY: "auto",
        }}
      >
        <div style={{ flex: "0 0 50%", marginRight: "10px" }}>
          <ul className="projects-ul" data-current="0">
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
        </div>

        <div style={{ flex: "0 0 50%" }}>
          <ul className="projects-ul">
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
