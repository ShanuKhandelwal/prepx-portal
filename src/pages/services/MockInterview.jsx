
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

export default function MockInterview() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="app-page">
      <div className="topbar">
        <button className="btn btn-outline btn-sm" onClick={() => navigate("/services")}>← Back</button>
        <span className="badge">{user?.email}</span>
        <button className="btn btn-outline btn-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="panel">
        <h2>Mock Interview</h2>
        <p className="subtitle">Practice a real interview with feedback.</p>

        <div className="content">
          <h3>What we offer</h3>
          <p>
            Our Mock Interview service provides a real interview-like experience. Candidates answer
            practical questions similar to company interviews and receive honest feedback to improve
            confidence and performance.
          </p>

          <h3>What you get</h3>
          <ul>
            <li>Real-time interview simulation</li>
            <li>Role-based and experience-based questions</li>
            <li>Feedback on answers and approach</li>
            <li>Tips to improve confidence and clarity</li>
            <li>Guidance to handle interview pressure</li>
          </ul>

          <h3>Who this is for</h3>
          <ul>
            <li>Candidates preparing for upcoming interviews</li>
            <li>People who feel nervous during interviews</li>
            <li>Professionals returning after a career gap</li>
          </ul>
        </div>

        <div className="divider" />

        <Link className="link" to="/services">
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
