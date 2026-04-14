import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "../styles/ResumeBuildingGuide.css";

export default function InterviewWorkshop() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const handlePayment = () => {
    navigate("/payment-scanner", {
      state: {
        serviceDetails: {
          service: "Interview Basics Workshop",
          price: 499,
          duration: "2 Days",
        },
      },
    });
  };

  return (
    <div className="interview-workshop">
      
      {/* 🔹 NAVBAR */}
      <nav className="navbar">
        <div className="navbar-content">
          <button className="nav-back-btn" onClick={() => navigate("/fresher")}>
            ← Back
          </button>

          <div className="nav-center">
            <h2 className="nav-title">Interview Workshop</h2>
          </div>

          <div className="nav-right">
            <span className="user-email">{user?.email}</span>
            <button className="nav-logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* 🔹 MAIN */}
      <div className="resume-main">

        {/* LEFT CONTENT */}
        <div className="service-section">

          {/* HERO */}
          <div className="hero-banner">
            <div className="banner-content">
              <h1 className="main-title">
                Crack Your First Interview 🚀
              </h1>
              <p className="main-subtitle">
                Special workshop designed for freshers to build confidence and get hired
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h3>HR Questions</h3>
              <p>Tell me about yourself, strengths, weaknesses</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🧠</div>
              <h3>Technical Basics</h3>
              <p>Core concepts asked in interviews</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🎤</div>
              <h3>Mock Interview</h3>
              <p>Practice like real interview</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🔥</div>
              <h3>Confidence Boost</h3>
              <p>Improve communication & body language</p>
            </div>
          </div>

          {/* WHAT YOU WILL LEARN */}
          <div className="whats-included">
            <h2>What You’ll Get</h2>

            <div className="includes-list">
              <div className="include-item">✓ Top 50 HR Questions</div>
              <div className="include-item">✓ How to Answer Smartly</div>
              <div className="include-item">✓ Resume Explanation Tips</div>
              <div className="include-item">✓ Live Mock Interview</div>
              <div className="include-item">✓ Personalized Feedback</div>
              <div className="include-item">✓ Interview Preparation PDF</div>
            </div>
          </div>

          {/* EXTRA SECTION */}
          <div className="whats-included">
            <h2>Who Should Join?</h2>

            <div className="includes-list">
              <div className="include-item">✓ Final year students</div>
              <div className="include-item">✓ Fresh graduates</div>
              <div className="include-item">✓ Anyone preparing for first job</div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sidebar">
          <div className="order-card">

            <div className="order-header">
              <h2>Join Workshop</h2>
              <p className="order-subtitle">For Freshers Only</p>
            </div>

            <div className="order-details">
              <div className="detail-row">
                <span className="detail-label">Duration:</span>
                <span className="detail-value">2 Days</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Mode:</span>
                <span className="detail-value">Live (Google Meet)</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Level:</span>
                <span className="detail-value">Beginner</span>
              </div>
            </div>

            <div className="price-box">
              <span className="price-label">Workshop Price</span>
              <span className="price-value">₹499</span>
            </div>

            <button className="pay-button" onClick={handlePayment}>
              💳 Join Workshop Now
            </button>

            <div className="note-box">
              <p>
                💡 After payment, you’ll receive workshop details via email.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}