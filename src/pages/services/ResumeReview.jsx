
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

export default function ResumeReview() {
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
        <h2>Resume Review</h2>
        <p className="subtitle">Improve resume quality to increase interview calls.</p>

        <div className="content">
          <h3>What we offer</h3>
          <p>
            Our Resume Review service helps candidates improve their resume so it clearly highlights
            skills, experience, and achievements. We review structure, content, and formatting to
            ensure it looks professional and is easy to read.
          </p>

          <h3>What you get</h3>
          <ul>
            <li>Detailed review of resume content and structure</li>
            <li>Suggestions to improve clarity and impact</li>
            <li>Formatting and readability improvements</li>
            <li>ATS-friendly recommendations</li>
            <li>Final guidance to make the resume stronger</li>
          </ul>

          <h3>Who this is for</h3>
          <ul>
            <li>Freshers and experienced professionals</li>
            <li>Candidates not getting interview calls</li>
            <li>Anyone planning to switch jobs or roles</li>
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
