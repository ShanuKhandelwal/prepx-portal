import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "../styles/ProfessionalDashboard.css";

export default function ProfessionalDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const professionalFeatures = [
    {
      id: 1,
      icon: "🎯",
      title: "Advanced Technical Skills",
      subtitle: "Master cutting-edge technologies",
      description: "Deepen expertise in advanced system design, architecture patterns, and emerging technologies. Stay competitive with industry trends.",
      benefits: ["System design mastery", "Microservices architecture", "Cloud infrastructure", "Performance optimization", "Advanced design patterns"],
      action: "Explore Skills"
    },
    {
      id: 2,
      icon: "💼",
      title: "Leadership & Management",
      subtitle: "Transition to leadership roles",
      description: "Develop essential skills for leading teams, managing projects, and growing into senior or managerial positions.",
      benefits: ["Team management", "Project leadership", "Mentoring skills", "Decision making", "Conflict resolution"],
      action: "Start Leadership Path"
    },
    {
      id: 3,
      icon: "🚀",
      title: "Career Advancement Strategy",
      subtitle: "Plan your next career move",
      description: "Strategic roadmap for promotions, role transitions, and career growth. Learn to negotiate better positions and compensation.",
      benefits: ["Promotion strategies", "Role transition planning", "Salary negotiation", "Career branding", "Network expansion"],
      action: "View Strategy"
    },
    {
      id: 4,
      icon: "🏢",
      title: "Interview Prep for Senior Roles",
      subtitle: "Ace senior level interviews",
      description: "Specialized interview preparation for senior roles, tech leads, and management positions. System design, behavioral, and strategic questions.",
      benefits: ["System design interviews", "Architecture discussions", "Behavioral scenarios", "Technical depth", "Leadership questions"],
      action: "Prepare Now"
    },
    {
      id: 5,
      icon: "💰",
      title: "Compensation & Negotiation",
      subtitle: "Maximize your earnings",
      description: "Understand market rates, negotiate packages, and optimize total compensation. Learn to evaluate offers comprehensively.",
      benefits: ["Market research tools", "Negotiation strategies", "Package evaluation", "Equity understanding", "Benefits optimization"],
      action: "Get Insights"
    },
    {
      id: 6,
      icon: "🌐",
      title: "Professional Networking",
      subtitle: "Build powerful connections",
      description: "Strategic networking for professionals. Build influence, find opportunities, and create a powerful professional brand.",
      benefits: ["Executive networking", "Industry events", "Personal branding", "Thought leadership", "Opportunity sourcing"],
      action: "Start Networking"
    }
  ];

  const careerTracks = [
    { 
      name: "Senior Engineer Path", 
      duration: "2-3 years", 
      level: "Intermediate to Expert", 
      color: "#FF6B6B",
      description: "Deep technical expertise, architecture design, mentoring"
    },
    { 
      name: "Tech Lead Track", 
      duration: "2-4 years", 
      level: "Team Leadership", 
      color: "#4ECDC4",
      description: "Team management, project delivery, strategic decisions"
    },
    { 
      name: "Engineering Manager Path", 
      duration: "3-5 years", 
      level: "Full Management", 
      color: "#45B7D1",
      description: "Department management, hiring, budget, strategy"
    },
    { 
      name: "Startup/Entrepreneurship", 
      duration: "Ongoing", 
      level: "Founder Level", 
      color: "#96CEB4",
      description: "Build your own company, innovation, fundraising"
    }
  ];

  const professionalTips = [
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Stay updated with emerging technologies. Dedicate 5-10 hours weekly to learning new skills and tools."
    },
    {
      icon: "🤝",
      title: "Build Your Network",
      description: "Relationships matter at senior levels. Invest in building strong professional networks and mentorships."
    },
    {
      icon: "📈",
      title: "Document Achievements",
      description: "Keep track of your wins, impact, and growth. This helps during promotions and negotiations."
    },
    {
      icon: "🎓",
      title: "Seek Mentors",
      description: "Find senior mentors in your field. Learn from their experience and avoid common pitfalls."
    },
    {
      icon: "🌟",
      title: "Build Your Brand",
      description: "Establish thought leadership through blogs, talks, open source, and industry presence."
    },
    {
      icon: "🎯",
      title: "Set Clear Goals",
      description: "Define 1-year, 3-year, and 5-year goals. Review and adjust quarterly to stay on track."
    }
  ];

  const milestones = [
    { year: "Year 1", task: "Master current tech stack", status: "pending" },
    { year: "Year 2", task: "Lead a project or small team", status: "pending" },
    { year: "Year 3", task: "Explore leadership opportunities", status: "pending" },
    { year: "Year 4+", task: "Transition to next role (Lead/Manager/Founder)", status: "pending" }
  ];

  return (
    <div className="professional-dashboard">
      {/* Top Bar */}
      <div className="topbar">
        <button className="btn btn-outline btn-sm" onClick={() => navigate("/register")}>← Back</button>
        <span className="badge">{user?.email}</span>
        <button className="btn btn-outline btn-sm" onClick={handleLogout}>Logout</button>
      </div>

      {/* Hero Section */}
      <div className="professional-hero">
        <div className="hero-content">
          <h1 className="hero-title">💼 Professional's Growth Hub</h1>
          <p className="hero-subtitle">Accelerate your career to the next level</p>
          <p className="hero-description">
            Specialized resources for experienced professionals. Whether you're aiming for senior roles, leadership positions, or entrepreneurship, we've got you covered.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="professional-container">

        {/* Features Grid */}
        <section className="features-section">
          <h2 className="section-title">🎯 Your Growth Opportunities</h2>
          <p className="section-subtitle">Choose your path to advancement</p>
          
          <div className="features-grid">
            {professionalFeatures.map((feature) => (
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
                      <h4>What you'll master:</h4>
                      <ul>
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx}>✓ {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="feature-action-btn">{feature.action}</button>
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

        {/* Career Timeline */}
        <section className="timeline-section">
          <h2 className="section-title">📈 Career Progression Timeline</h2>
          <div className="timeline">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h4 className="timeline-period">{milestone.year}</h4>
                  <p className="timeline-task">{milestone.task}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Paths */}
        <section className="tracks-section">
          <h2 className="section-title">🛣️ Career Path Options</h2>
          <p className="section-subtitle">Choose your next strategic move</p>
          
          <div className="tracks-grid">
            {careerTracks.map((track, idx) => (
              <div key={idx} className="track-card" style={{ borderTop: `4px solid ${track.color}` }}>
                <h3 className="track-name">{track.name}</h3>
                <p className="track-description">{track.description}</p>
                <div className="track-info">
                  <span className="track-duration">⏱️ {track.duration}</span>
                  <span className="track-level">📊 {track.level}</span>
                </div>
                <button className="track-explore-btn" style={{ backgroundColor: track.color }}>
                  Explore Path →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Tips */}
        <section className="tips-section">
          <h2 className="section-title">💡 Key Strategies for Professionals</h2>
          <div className="tips-grid">
            {professionalTips.map((tip, idx) => (
              <div key={idx} className="tip-card">
                <div className="tip-icon">{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Growth Benchmarks */}
        <section className="benchmarks-section">
          <h2 className="section-title">📊 Growth Benchmarks</h2>
          <p className="section-subtitle">Track your progress against industry standards</p>
          
          <div className="benchmarks-grid">
            <div className="benchmark-card">
              <div className="benchmark-icon">💰</div>
              <h3>Salary Growth</h3>
              <p className="benchmark-value">15-25% YoY</p>
              <p className="benchmark-desc">Industry average salary progression</p>
            </div>

            <div className="benchmark-card">
              <div className="benchmark-icon">🎓</div>
              <h3>Skill Development</h3>
              <p className="benchmark-value">3-5 New Skills</p>
              <p className="benchmark-desc">Learn per year for competitiveness</p>
            </div>

            <div className="benchmark-card">
              <div className="benchmark-icon">🤝</div>
              <h3>Network Size</h3>
              <p className="benchmark-value">500+ Connections</p>
              <p className="benchmark-desc">Professional network on LinkedIn</p>
            </div>

            <div className="benchmark-card">
              <div className="benchmark-icon">📈</div>
              <h3>Role Progression</h3>
              <p className="benchmark-value">Every 2-3 Years</p>
              <p className="benchmark-desc">Typical promotion timeline</p>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="insights-section">
          <h2 className="section-title">🔍 Market Insights & Trends</h2>
          
          <div className="insights-grid">
            <div className="insight-card">
              <h3>🚀 High-Demand Skills</h3>
              <ul>
                <li>• AI/ML Integration</li>
                <li>• Cloud Architecture</li>
                <li>• DevOps/SRE</li>
                <li>• System Design</li>
                <li>• Team Leadership</li>
              </ul>
            </div>

            <div className="insight-card">
              <h3>💼 Role Opportunities</h3>
              <ul>
                <li>• Tech Lead</li>
                <li>• Engineering Manager</li>
                <li>• Solutions Architect</li>
                <li>• Staff Engineer</li>
                <li>• Startup Co-founder</li>
              </ul>
            </div>

            <div className="insight-card">
              <h3>🌍 Emerging Markets</h3>
              <ul>
                <li>• Remote/Distributed Teams</li>
                <li>• Startup Ecosystem</li>
                <li>• Enterprise Tech</li>
                <li>• Fintech/Web3</li>
                <li>• Climate Tech</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Enrolled Courses */}
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
            Your Advanced Courses
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
            🎤 Advanced Mock Interview Practice
          </h2>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "30px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              borderTop: "3px solid #007bff",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "15px" }}>🎬</div>
            <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#333", marginBottom: "12px" }}>
              Senior-Level Interview Simulation
            </h3>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6", marginBottom: "20px" }}>
              Practice advanced technical interviews with system design, behavioral questions, and leadership scenarios. Get detailed feedback on your performance.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px", marginBottom: "20px" }}>
              <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "8px", borderLeft: "3px solid #007bff" }}>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>0</div>
                <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Interviews Completed</div>
              </div>
              <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "8px", borderLeft: "3px solid #007bff" }}>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>0%</div>
                <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Average Score</div>
              </div>
              <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "8px", borderLeft: "3px solid #007bff" }}>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>0</div>
                <div style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>Hours Practiced</div>
              </div>
            </div>
            <button
              onClick={() => navigate("/sign-in")}
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
              Start Advanced Mock Interview
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Level Up?</h2>
            <p>Choose your path: Go deeper in technical skills or explore leadership roles</p>
            <div className="cta-buttons">
              <button 
                className="cta-btn cta-primary"
                onClick={() => navigate("/services/interview-practice")}
              >
                🚀 Prepare for Senior Interview
              </button>
              <button 
                className="cta-btn cta-secondary"
                onClick={() => navigate("/services")}
              >
                📚 Explore All Services
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
