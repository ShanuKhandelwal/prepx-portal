
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const SERVICES = [
  { path: "/services/resume-review", title: "Resume Review", subtitle: "Improve resume quality and increase interview calls." },
  { path: "/services/mock-interview", title: "Mock Interview", subtitle: "Real interview simulation with feedback." },
  { path: "/services/interview-practice", title: "Interview Practice", subtitle: "Topic-wise practice to improve performance." },
  { path: "/services/communication-skills", title: "Communication Skills", subtitle: "Improve clarity and confidence in communication." },
];

export default function ServicesPage() {
  const { user, logout } = useAuth();

  return (
    <div className="app-page">
      <div className="topbar">
        <span className="badge">{user?.email}</span>
        <button className="btn btn-outline btn-sm" onClick={logout}>Logout</button>
      </div>

      <div className="panel">
        <h2>Services</h2>
        <p className="subtitle">Choose a service to continue.</p>

        <div style={{ display: "grid", gap: 12 }}>
          {SERVICES.map((s) => (
            <Link key={s.path} to={s.path} style={{ textDecoration: "none" }}>
              <div
                style={{
                  padding: 14,
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 6px 16px rgba(15,23,42,0.06)",
                  color: "#0f172a",
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: 4 }}>{s.title}</div>
                <div style={{ color: "#64748b", marginBottom: 10, fontSize: "0.9rem" }}>
                  {s.subtitle}
                </div>
                <div style={{ color: "#4f46e5", fontWeight: 700 }}>Open →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
