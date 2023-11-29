import { Link } from "react-router-dom";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="home-bg">
      <div className="home-content">
        <section>
          {/* <h1 className="home-logo">DIY</h1> */}
          <p className="home-logo__tagline">Do It Yourself</p>
        </section>

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
