
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

export default function CommunicationSkills() {
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
        <h2>Communication Skills</h2>
        <p className="subtitle">Improve clarity and confidence for interviews and work.</p>

        <div className="content">
          <h3>What we offer</h3>
          <p>
            Our Communication Skills service helps candidates improve spoken and written communication
            required for interviews and professional environments. We focus on clarity, confidence,
            and professional expression.
          </p>

          <h3>What you get</h3>
          <ul>
            <li>Interview communication guidance</li>
            <li>Spoken clarity and confidence tips</li>
            <li>How to answer questions clearly and professionally</li>
            <li>Professional conversation techniques</li>
            <li>Workplace communication basics</li>
          </ul>

          <h3>Who this is for</h3>
          <ul>
            <li>Candidates struggling to express answers clearly</li>
            <li>People strong in skills but weak in communication</li>
            <li>Anyone wanting to improve professional communication</li>
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
