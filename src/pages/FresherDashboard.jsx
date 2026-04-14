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

      </div>
    </div>
  );
}
