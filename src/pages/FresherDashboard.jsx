import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "../styles/FresherDashboard.css";

export default function FresherDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const fresherFeatures = [
    {
      id: 1,
      icon: "📝",
      title: "Resume Building Guide",
      subtitle: "Learn to craft a winning resume",
      description: "Step-by-step guide to build an impressive resume with proper formatting, keywords, and ATS optimization. Includes real resume examples and templates.",
      benefits: ["ATS-optimized templates", "Section-wise guidance", "Real examples from top companies", "Download ready resume"],
      action: "Start Building"
    },
    {
      id: 2,
      icon: "💬",
      title: "Interview Basics Workshop",
      subtitle: "Ace your first interview",
      description: "Learn common interview questions, how to answer them, and tips for making a great first impression.",
      benefits: ["Most asked questions", "How to answer perfectly", "Body language tips", "Mock interview practice"],
      action: "Join Workshop"
    },
    {
      id: 3,
      icon: "🔄",
      title: "LinkedIn & Personal Branding",
      subtitle: "Build your professional presence",
      description: "Create a professional LinkedIn profile, optimize it for recruiters, and build your personal brand online.",
      benefits: ["Profile optimization", "Recruiter visibility tips", "Content strategy", "Networking guides"],
      action: "Start Now"
    },
    {
      id: 4,
      icon: "📊",
      title: "Career Roadmap",
      subtitle: "Plan your tech journey",
      description: "Get a personalized career roadmap for different tech roles (Frontend, Backend, Full Stack, Data Science, etc.)",
      benefits: ["Role-based roadmaps", "Skill progression path", "Timeline estimations", "Resource recommendations"],
      action: "Explore Paths"
    },
    {
      id: 5,
      icon: "🎯",
      title: "Job Search Strategy",
      subtitle: "Find your first opportunity",
      description: "Complete guide on how to search for jobs, apply effectively, and follow up with companies.",
      benefits: ["Job portal guide", "Application tips", "Follow-up templates", "Salary negotiation"],
      action: "Get Started"
    }
  ];



  return (
    <div className="fresher-dashboard">
      {/* Top Bar */}
      <div className="topbar">
        <button className="btn btn-outline btn-sm" onClick={() => navigate("/register")}>← Back</button>
        <span className="badge">{user?.email}</span>
        <button className="btn btn-outline btn-sm" onClick={handleLogout}>Logout</button>
      </div>

      {/* Hero Section */}
      <div className="fresher-hero">
        <div className="hero-content">
          <h1 className="hero-title">🚀 Welcome to Fresher's Hub!</h1>
          <p className="hero-subtitle">Your complete guide to land your first tech job</p>
          <p className="hero-description">
            We've curated the best resources and strategies to help you prepare for interviews, build your professional presence, and secure your first opportunity in tech.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="fresher-container">

        {/* Features Grid */}
        <section className="features-section">
          <h2 className="section-title">🎯 Your Learning Journey</h2>
          <p className="section-subtitle">Choose what you want to work on first</p>
          
          <div className="features-grid">
            {fresherFeatures.map((feature) => (
              <div
                key={feature.id}
                className="feature-card"
                onClick={() => setExpandedSection(expandedSection === feature.id ? null : feature.id)}
              >
                <div className="feature-header">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-title-section">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-subtitle">{feature.subtitle}</p>
                  </div>
                </div>

                {expandedSection === feature.id && (
                  <div className="feature-expanded">
                    <p className="feature-description">{feature.description}</p>
                    <div className="feature-benefits">
                      <h4>What you'll learn:</h4>
                      <ul>
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx}>✓ {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <button 
                      className="feature-action-btn"
                     onClick={(e) => {
                      e.stopPropagation();

                       if (feature.id === 1) {
                      navigate("/resume-building");
                      } else if (feature.id === 2) {
                      navigate("/interview-workshop");
                       }
                      }}
                    >
                      {feature.action}
                    </button>
                  </div>
                )}

                {expandedSection !== feature.id && (
                  <div className="feature-preview">
                    Click to expand <span>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Enrolled Courses */}
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
            Your Courses
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            {/* ...existing course cards... */}
          </div>
        </div>

        {/* Mock Interview Section */}
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
            🎤 Mock Interview Practice
          </h2>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "30px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "15px" }}>🎬</div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginBottom: "12px" }}>
              Practice Real Interview Scenarios
            </h3>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginBottom: "20px" }}>
              Participate in mock interviews with AI-powered feedback. Get real-time evaluation of your communication, technical skills, and confidence.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px", marginBottom: "20px" }}>
              <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "8px" }}>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>0</div>
                <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Interviews Completed</div>
              </div>
              <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "8px" }}>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>0%</div>
                <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Average Score</div>
              </div>
              <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "8px" }}>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>0</div>
                <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Hours Practiced</div>
              </div>
            </div>
            <button
              style={{
                padding: "12px 32px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0056b3";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#007bff";
                e.target.style.transform = "scale(1)";
              }}
            >
              Start Mock Interview
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
