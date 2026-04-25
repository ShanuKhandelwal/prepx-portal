import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "../styles/RoleSelection.css";

export default function RoleSelection() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handleSelectRole = (role) => {
    // Store role in localStorage or context if needed
    localStorage.setItem("userRole", role);
    
    // Navigate based on role
    if (role === "fresher") {
      navigate("/fresher");
    } else {
      navigate("/professional");
    }
  };

  return (
    <div className="role-selection-container">
      {/* Top Bar */}
      <div className="role-topbar">
        <button className="role-back-btn" onClick={() => navigate("/login")}>
          ← Back
        </button>
        <span className="role-badge">{user?.email}</span>
        <button className="role-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="role-content">
        <div className="role-card">
          {/* Header */}
          <h1 className="role-title">Welcome to Evalo!! 🚀</h1>
          <p className="role-subtitle">
            Tell us about your experience level so we can personalize your learning journey
          </p>

          {/* Role Selection Buttons */}
          <div className="role-buttons-container">
            {/* Fresher Button */}
            <button
              className="role-button fresher-btn"
              onClick={() => handleSelectRole("fresher")}
            >
              <div className="role-icon">🎓</div>
              <h2>I'm a Fresher</h2>
              <p>
                Just starting my career with minimal work experience
              </p>
              <div className="role-features">
                <span>✓ Foundational concepts</span>
                <span>✓ Interview basics</span>
                <span>✓ Resume guidance</span>
              </div>
            </button>

            {/* Professional Button */}
            <button
              className="role-button professional-btn"
              onClick={() => handleSelectRole("professional")}
            >
              <div className="role-icon">💼</div>
              <h2>I'm a Professional</h2>
              <p>
                Have work experience and looking to advance my career
              </p>
              <div className="role-features">
                <span>✓ Advanced techniques</span>
                <span>✓ Leadership skills</span>
                <span>✓ Career growth</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="role-footer">
        <p>Evalo © 2024 - Interview Preparation Platform</p>
      </div>
    </div>
  );
}
