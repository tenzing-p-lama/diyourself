import "./ProjectsPage.scss";

const ProjectsPage = (props) => {
  return (
    <main className="projects">
      <h1>Projects</h1>

      <ul className="projects-ul">
        {props.projectsList.map((project) => {
          return (
            <li key={project.id} className="projects-item">
              <div className="projects-item__overlay">
                <h3>{project.title}</h3>
                <h3>{project.category}</h3>
              </div>
              <img
                className="projects-item__image"
                src={project.image}
                alt={project.title}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ProjectsPage;
