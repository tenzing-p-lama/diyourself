//
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ProjectsPage.scss";

const ProjectsPage = () => {
  const [projectsList, setProjects] = useState([]);
  // const containerRef = useRef(null);
  //
  const projectItemRefs = useRef([]);
  //

  useEffect(() => {
    async function fetchProjects() {
      const response = await axios.get(`http://localhost:5050/projects`);
      setProjects(response.data);
    }
    fetchProjects();

    //
    /*
    // Initialize Locomotive Scroll after the projects have loaded
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
    // Clean up Locomotive Scroll on component unmount
    return () => {
      scroll.destroy();
    };
    //
*/
    //
  }, []);

  //
  //gsap
  /*
  useEffect(() => {
    // Function to handle animations
    const animateProjects = (projectItem, i) => {
      gsap.to(projectItem, {
        opacity: 1,
        repeat: 1,
        yoyo: true,
        ease: "none",
        scrollTrigger: {
          trigger: projectItem,
          start: "center bottom",
          end: "center top",
          markers: true,
          scrub: true,
        },
      });
    };

    // Iterate through each project item
    projectItemRefs.current.forEach((projectItem, i) => {
      animateProjects(projectItem, i);
    });

    // ScrollTrigger for entire page
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onLeave: (self) => {
        self.scroll(1);
        ScrollTrigger.update();
      },
      onLeaveBack: (self) => {
        self.scroll(ScrollTrigger.maxScroll(window) - 1);
        ScrollTrigger.update();
      },
    });
    // Cleanup function
    return () => {
      // Ensure to kill ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  */
  //
  //

  const midpoint = Math.ceil(projectsList.length / 2);
  const firstHalf = projectsList.slice(0, midpoint);
  const secondHalf = projectsList.slice(midpoint);

  return (
    <main className="projects">
      <div className="projects-container">
        <div className="projects-container__UL">
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
