import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function InterviewTypeSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const userType = location.state?.userType || "fresher"; // fresher or professional
  const [selectedInterviews, setSelectedInterviews] = useState([]);

  const interviewCategories = {
    "Development": {
      icon: "💻",
      color: "#007bff",
      interviews: ["Java Developer Interview", "Python Developer Interview", "C++ Developer Interview", "C Developer Interview", "JavaScript Developer Interview", "TypeScript Developer Interview", "Golang Developer Interview", "Rust Developer Interview", "Frontend Developer Interview", "Backend Developer Interview", "Full Stack Developer Interview", "React Developer Interview", "Angular Developer Interview", "Vue.js Developer Interview", "Node.js Developer Interview", "Spring Boot Developer Interview", "Django Developer Interview", "Flask Developer Interview", "Express.js Developer Interview"]
    },
    "Core Computer Science": {
      icon: "🧠",
      color: "#e74c3c",
      interviews: ["Data Structures & Algorithms Interview", "Coding Interview Preparation", "Competitive Programming Interview", "System Design Interview (HLD)", "Low Level Design Interview (LLD)"]
    },
    "Database": {
      icon: "🗄️",
      color: "#3498db",
      interviews: ["SQL Interview", "MySQL Interview", "PostgreSQL Interview", "MongoDB Interview", "Database Design Interview"]
    },
    "Testing": {
      icon: "🧪",
      color: "#f39c12",
      interviews: ["Manual Testing Interview", "Automation Testing Interview", "Selenium Interview", "API Testing Interview", "Performance Testing Interview", "Mobile Testing Interview", "SDET Interview"]
    },
    "DevOps & Cloud": {
      icon: "☁️",
      color: "#16a085",
      interviews: ["DevOps Engineer Interview", "Site Reliability Engineer (SRE) Interview", "AWS Interview", "Azure Interview", "Google Cloud Interview", "Docker Interview", "Kubernetes Interview", "CI/CD Interview", "Linux Interview", "Shell Scripting Interview"]
    },
    "Security & Networking": {
      icon: "🔐",
      color: "#c0392b",
      interviews: ["Cyber Security Interview", "Ethical Hacking Interview", "Network Engineer Interview"]
    },
    "Data & AI": {
      icon: "📊",
      color: "#8e44ad",
      interviews: ["Data Analyst Interview", "Data Scientist Interview", "Machine Learning Interview", "Deep Learning Interview", "AI Engineer Interview", "Business Intelligence Interview"]
    },
    "Mobile Development": {
      icon: "📱",
      color: "#27ae60",
      interviews: ["Android Developer Interview", "iOS Developer Interview", "Flutter Developer Interview", "React Native Developer Interview"]
    },
    "Emerging Tech": {
      icon: "🚀",
      color: "#2980b9",
      interviews: ["Blockchain Developer Interview", "Web3 Developer Interview"]
    }
  };

  const toggleInterview = (interview) => {
    setSelectedInterviews((prev) =>
      prev.includes(interview) ? prev.filter((i) => i !== interview) : [...prev, interview]
    );
  };

  const handleProceed = () => {
    if (selectedInterviews.length === 0) {
      alert("Please select at least one interview type");
      return;
    }
    navigate("/learning-type-selection", { 
      state: { 
        selectedCourses: selectedInterviews,
        userType: userType
      } 
    });
  };

  const handleFresher = () => {
    navigate("/fresher-courses");
  };

  const handleProfessional = () => {
    navigate("/professional-courses");
  };

  const handleITBackground = () => {
    navigate("/it-courses-selection");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff", display: "flex", flexDirection: "column" }}>
      {/* Navigation Bar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backgroundColor: "#f8f9fa", borderBottom: "1px solid #e9ecef" }}>
        <Link to="/" style={{ fontSize: "28px", fontWeight: "bold", color: "#007bff", textDecoration: "none", cursor: "pointer" }}>
          Evalo
        </Link>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#f8f9fa",
            color: "#007bff",
            textDecoration: "none",
            borderRadius: "6px",
            border: "1px solid #007bff",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </nav>

      {/* Header Section */}
      <div style={{ padding: "40px", textAlign: "center", backgroundColor: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)", backgroundImage: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)", color: "white" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "10px" }}>Select Your Interview Type 🎯</h1>
        <p style={{ fontSize: "16px", opacity: 0.95 }}>Choose the interview preparation that matches your experience level</p>
      </div>

      {/* Interview Type Options */}
      <div style={{ flex: 1, padding: "80px 40px", backgroundColor: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Fresher Card */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "50px 40px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                textAlign: "center",
                border: "2px solid transparent",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ff6b6b";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(255, 107, 107, 0.15)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={handleFresher}
            >
              <div style={{ fontSize: "64px", marginBottom: "20px" }}>🎓</div>
              <h3 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>
                Fresher
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
                0-2 years experience or just graduating. Build foundational skills and prepare for entry-level interviews.
              </p>

              <div style={{ backgroundColor: "#fff0f0", padding: "15px", borderRadius: "8px", marginBottom: "25px" }}>
                <p style={{ fontSize: "12px", color: "#ff6b6b", fontWeight: "600", margin: "0 0 8px 0" }}>Includes:</p>
                <ul style={{ fontSize: "12px", color: "#555", textAlign: "left", margin: 0, paddingLeft: "20px" }}>
                  <li>Resume Building</li>
                  <li>Technical Interview Prep</li>
                  <li>LinkedIn Optimization</li>
                  <li>Career Roadmap</li>
                  <li>Job Search Strategies</li>
                </ul>
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  backgroundColor: "#ff6b6b",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#ff5252";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#ff6b6b";
                }}
              >
                Explore Fresher Path →
              </button>
            </div>

            {/* Professional Card */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "50px 40px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                textAlign: "center",
                border: "2px solid transparent",
                transition: "all 0.3s",
                cursor: "pointer",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#667eea";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(102, 126, 234, 0.15)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={handleProfessional}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "20px",
                  backgroundColor: "#667eea",
                  color: "white",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                POPULAR
              </div>

              <div style={{ fontSize: "64px", marginBottom: "20px" }}>💼</div>
              <h3 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>
                Professional
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
                2+ years experience. Master advanced concepts and excel in senior-level and leadership interviews.
              </p>

              <div style={{ backgroundColor: "#f0f2ff", padding: "15px", borderRadius: "8px", marginBottom: "25px" }}>
                <p style={{ fontSize: "12px", color: "#667eea", fontWeight: "600", margin: "0 0 8px 0" }}>Includes:</p>
                <ul style={{ fontSize: "12px", color: "#555", textAlign: "left", margin: 0, paddingLeft: "20px" }}>
                  <li>System Design Mastery</li>
                  <li>Advanced Technical Interviews</li>
                  <li>Career Advancement Strategy</li>
                  <li>Tech Leadership Skills</li>
                  <li>Senior-level Preparation</li>
                </ul>
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  backgroundColor: "#667eea",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5568d3";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#667eea";
                }}
              >
                Explore Professional Path →
              </button>
            </div>

            {/* IT Background Card */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "50px 40px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                textAlign: "center",
                border: "2px solid transparent",
                transition: "all 0.3s",
                cursor: "pointer",
                gridColumn: "1 / -1",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#28a745";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(40, 167, 69, 0.15)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={handleITBackground}
            >
              <div style={{ fontSize: "64px", marginBottom: "20px" }}>🧑‍💼</div>
              <h3 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>
                IT Background - Specialized Courses
              </h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
                Choose specific interview preparation courses based on your technology stack and specialization. Select from 70+ specialized courses across 9 categories.
              </p>

              <div style={{ backgroundColor: "#f0fdf4", padding: "15px", borderRadius: "8px", marginBottom: "25px" }}>
                <p style={{ fontSize: "12px", color: "#28a745", fontWeight: "600", margin: "0 0 8px 0" }}>Categories:</p>
                <div style={{ fontSize: "12px", color: "#555", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", textAlign: "left" }}>
                  <div>💻 Development</div>
                  <div>🧠 Core CS</div>
                  <div>🗄️ Database</div>
                  <div>🧪 Testing</div>
                  <div>☁️ DevOps</div>
                  <div>🔐 Security</div>
                  <div>📊 Data & AI</div>
                  <div>📱 Mobile</div>
                  <div>🚀 Emerging</div>
                </div>
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "14px 28px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#1f8e3c";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#28a745";
                }}
              >
                Browse IT Specializations →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
