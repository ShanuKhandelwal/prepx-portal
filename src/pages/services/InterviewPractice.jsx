
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

export default function InterviewPractice() {
  const { user, logout } = useAuth();

  return (
    <div className="app-page">
      <div className="topbar">
        <span className="badge">{user?.email}</span>
        <button className="btn btn-outline btn-sm" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="panel">
        <h2>Interview Practice</h2>
        <p className="subtitle">Topic-wise practice to improve interview performance.</p>

        <div className="content">
          <h3>What we offer</h3>
          <p>
            Interview Practice focuses on improving interview skills through repeated question-answer
            sessions. This helps candidates prepare specific topics, technologies, or skill areas
            required for their job role.
          </p>

          <h3>What you get</h3>
          <ul>
            <li>Topic-wise interview questions</li>
            <li>Practice sessions for weak areas</li>
            <li>Expected answers and explanation</li>
            <li>Tips to structure responses</li>
            <li>Improved confidence through practice</li>
          </ul>

          <h3>Who this is for</h3>
          <ul>
            <li>Candidates preparing technical or domain topics</li>
            <li>Freshers preparing for first interviews</li>
            <li>Professionals switching roles or domains</li>
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
