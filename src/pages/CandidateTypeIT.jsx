import { useState } from "react";
import { Link } from "react-router-dom";

export default function CandidateTypeIT() {
  const [learnerType, setLearnerType] = useState(null);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", display: "flex", flexDirection: "column" }}>
      {/* Navigation Bar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backgroundColor: "#f8f9fa", borderBottom: "1px solid #e9ecef" }}>
        <Link to="/" style={{ fontSize: "28px", fontWeight: "bold", color: "#007bff", textDecoration: "none", cursor: "pointer" }}>
          Evalo
        </Link>
        <Link to="/" style={{ padding: "8px 16px", backgroundColor: "#f8f9fa", color: "#007bff", textDecoration: "none", borderRadius: "6px", border: "1px solid #007bff", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
          ← Back Home
        </Link>
      </nav>

      {/* Main Header */}
      <div style={{ padding: "40px", textAlign: "center", backgroundColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)", backgroundImage: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)", color: "white" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "10px" }}>Our Services 🎯</h1>
        <p style={{ fontSize: "16px", opacity: 0.95 }}>Personalized learning paths for your career growth</p>
      </div>

      {/* Step 1: Select Learner Type */}
      <div style={{ flex: 1, padding: "60px 40px", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "30px", gap: "15px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#007bff", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "bold" }}>
              1
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", margin: 0 }}>Who are you?</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px", marginLeft: "55px" }}>
            {/* Fresher Card */}
            <Link
              to="/fresher-courses"
              style={{
                padding: "30px",
                borderRadius: "12px",
                border: "2px solid #ddd",
                backgroundColor: "white",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                textDecoration: "none",
                color: "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#007bff";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 123, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ddd";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "42px", marginBottom: "15px" }}>👨‍🎓</div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>Fresher</h3>
              <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
                Just starting your tech career or preparing for your first job
              </p>
              <div style={{ fontSize: "12px", color: "#007bff", fontWeight: "600" }}>
                Explore Courses →
              </div>
            </Link>

            {/* Professional Card */}
            <Link
              to="/professional-courses"
              style={{
                padding: "30px",
                borderRadius: "12px",
                border: "2px solid #ddd",
                backgroundColor: "white",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                textDecoration: "none",
                color: "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#007bff";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 123, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#ddd";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "42px", marginBottom: "15px" }}>💼</div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>Professional</h3>
              <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
                Experienced professional looking to advance your career
              </p>
              <div style={{ fontSize: "12px", color: "#007bff", fontWeight: "600" }}>
                Explore Courses →
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
