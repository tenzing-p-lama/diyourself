import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";

import SelectedProject from "../../components/SelectedProject/SelectedProject";
import "./ProjectsPage.scss";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = (props) => {
  //   const containerRef = useRef(null);

  //   useEffect(() => {
  //     const scroll = new LocomotiveScroll({
  //       el: containerRef.current,
  //       smooth: true,
  //     });

  //     gsap.to(".projects-item", {
  //       scrollTrigger: {
  //         trigger: ".projects-ul",
  //         // start: "top 80%",
  //         end: "top 20%",
  //         scrub: true,
  //       },
  //       y: 0,
  //       duration: 1,
  //     });

  //     return () => {
  //       scroll.destroy();
  //     };
  //   }, []);

  return (
    // <div ref={containerRef}>
    <main className="projects">
      <h1>Projects</h1>

      <ul className="projects-ul">
        {props.projectsList.map((project) => {
          return (
            <li key={project.id} className="projects-item">
              <Link to={`/projects/${project.id}`}>
                <div className="projects-item__overlay">
                  <h3>{project.title}</h3>
                  <h3>{project.category}</h3>
                </div>
                <img
                  className="projects-item__image"
                  src={project.image}
                  alt={project.title}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
    // </div>
  );
};

export default ProjectsPage;
