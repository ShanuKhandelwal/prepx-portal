
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-wrap">
      <div className="home-hero">
        <div className="brand-badge">PrepX</div>

        <h1 className="home-title">
          PrepX <span className="home-title-accent">Interview Prep</span>
        </h1>

        <p className="home-subtitle">
          Resume Review · Mock Interview · Interview Practice · Communication Skills
        </p>

        <div className="home-actions">
          <Link className="btn btn-primary" to="/login">
            Login
          </Link>

          <Link className="btn btn-outline" to="/signup">
            Create Account
          </Link>
        </div>

        <div className="home-note">
          <span className="dot" /> Fast, simple and professional preparation support.
        </div>
      </div>
    </div>
  );
}
