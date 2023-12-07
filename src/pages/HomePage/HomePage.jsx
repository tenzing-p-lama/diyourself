import { Link } from "react-router-dom";
import "./HomePage.scss";
import ProjectsPage from "../ProjectsPage/ProjectsPage";

function HomePage() {
  return (
    <>
      <div className="home-bg">
        <div className="home-content">
          <section>
            <p className="home-logo__tagline">Do It Yourself</p>
          </section>

          <Link to="/projects">
            <button type="button" className="btn-two">
              <h4>Explore</h4>
            </button>
          </Link>
        </div>
      </div>

      <ProjectsPage />
    </>
  );
}

export default HomePage;
