import { Link } from "react-router-dom";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="home-bg">
      <div className="home-content">
        <h1>DIY</h1>
        <Link to="/projects">
          <button type="button" className="btn-two">
            <h4>Explore</h4>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
