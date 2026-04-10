import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "../styles/ResumeBuildingGuide.css";

export default function ResumeBuildingGuide() {
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
          service: "Professional Resume Writing",
          price: 500,
          turnaround: "24-48 hours"
        }
      }
    });
  };

  return (
    <div className="resume-guide">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          <button className="nav-back-btn" onClick={() => navigate("/fresher")}>
            <span>←</span> Back
          </button>
          <div className="nav-center">
            <h2 className="nav-title">Resume Service</h2>
          </div>
          <div className="nav-right">
            <span className="user-email">{user?.email}</span>
            <button className="nav-logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="resume-main">
        {/* Left Section - Service Info */}
        <div className="service-section">
          <div className="hero-banner">
            <div className="banner-content">
              <h1 className="main-title">Get Your Resume Written by Professionals</h1>
              <p className="main-subtitle">Fast, Effective, and Affordable Resume Writing Service</p>
            </div>
          </div>

          {/* Features */}
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Get your resume in 24-48 hours</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <h3>Professional Quality</h3>
              <p>Written by experienced professionals</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📋</div>
              <h3>ATS Optimized</h3>
              <p>Passes through screening systems</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">♻️</div>
              <h3>Unlimited Revisions</h3>
              <p>Until you're completely satisfied</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="whats-included">
            <h2>What's Included in the Service</h2>
            <div className="includes-list">
              <div className="include-item">
                <span className="checkmark">✓</span>
                <span>Professional Resume Writing & Optimization</span>
              </div>
              <div className="include-item">
                <span className="checkmark">✓</span>
                <span>ATS (Applicant Tracking System) Optimization</span>
              </div>
              <div className="include-item">
                <span className="checkmark">✓</span>
                <span>Professional Cover Letter</span>
              </div>
              <div className="include-item">
                <span className="checkmark">✓</span>
                <span>LinkedIn Profile Optimization</span>
              </div>
              <div className="include-item">
                <span className="checkmark">✓</span>
                <span>Unlimited Revisions & Updates</span>
              </div>
              <div className="include-item">
                <span className="checkmark">✓</span>
                <span>100% Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Order Card & Contact */}
        <div className="sidebar">
          {/* Order Card */}
          <div className="order-card">
            <div className="order-header">
              <h2>Start Your Journey</h2>
              <p className="order-subtitle">Professional Resume Writing</p>
            </div>

            <div className="order-details">
              <div className="detail-row">
                <span className="detail-label">Service:</span>
                <span className="detail-value">Professional Resume Writing</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Turnaround:</span>
                <span className="detail-value">24-48 Hours</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Includes:</span>
                <span className="detail-value">Resume + Cover Letter + LinkedIn</span>
              </div>
            </div>

            <div className="price-box">
              <span className="price-label">Total Price</span>
              <span className="price-value">₹2,999</span>
            </div>

            <button className="pay-button" onClick={handlePayment}>
              <span className="pay-icon">💳</span>
              Pay Now - Scan QR Code
            </button>

            <div className="note-box">
              <p>💡 <strong>Note:</strong> A professional will be assigned to create your resume.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
