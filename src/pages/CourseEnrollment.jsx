import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import "./CourseEnrollment.css";

export default function CourseEnrollment() {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const authContext = useContext(AuthContext);
  const user = authContext?.user;

  const [showScheduling, setShowScheduling] = useState(false);
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedTime, setSelectedTime] = useState("");
  const [interviewDetails, setInterviewDetails] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const courses = {
    "resume-building": {
      icon: "📝",
      title: "Resume Building Guide",
      description: "Learn to craft a winning resume",
      fullDescription: "Create a professional resume that highlights your skills and experience. Learn formatting tips, key sections, and how to optimize for ATS systems.",
      price: "$29",
      keyPoints: [
        "Understand ATS (Applicant Tracking System) optimization techniques",
        "Master the structure with proper formatting",
        "Learn action-oriented language and metrics",
        "Discover industry-specific keywords",
        "Get professional formatting tips"
      ],
      color: "#ff6b6b",
    },
    "technical-interview": {
      icon: "💬",
      title: "Technical Interview Preparation",
      description: "Master coding and interview fundamentals",
      fullDescription: "Master common interview questions, coding problems, body language, and techniques to make a great first impression with your potential employers.",
      price: "$39",
      keyPoints: [
        "Practice common coding patterns and algorithms",
        "Develop problem-solving strategies",
        "Learn communication techniques",
        "Master data structures and complexity",
        "Build confidence through mock interviews"
      ],
      color: "#4ecdc4",
    },
    "linkedin": {
      icon: "🔄",
      title: "LinkedIn & Personal Branding",
      description: "Build your professional presence",
      fullDescription: "Optimize your LinkedIn profile, create a personal brand, and network effectively to attract recruiters and potential employers.",
      price: "$24",
      keyPoints: [
        "Create a compelling LinkedIn profile headline",
        "Write an engaging professional summary",
        "Optimize your experience section",
        "Build your personal brand",
        "Network strategically"
      ],
      color: "#45b7d1",
    },
    "career-roadmap": {
      icon: "📊",
      title: "Career Roadmap",
      description: "Plan your tech journey",
      fullDescription: "Understand different career paths in tech, set realistic goals, and create a strategic plan to achieve your career objectives.",
      price: "$34",
      keyPoints: [
        "Understand different career paths in tech",
        "Set SMART goals for career development",
        "Learn skill progression",
        "Discover growth opportunities",
        "Create a personalized roadmap"
      ],
      color: "#ffa502",
    },
    "job-search": {
      icon: "🎯",
      title: "Job Search Strategy",
      description: "Find your first opportunity",
      fullDescription: "Learn effective job search strategies, where to find opportunities, how to network, and tips for landing interviews.",
      price: "$29",
      keyPoints: [
        "Learn effective job search strategies",
        "Master networking tips",
        "Discover hidden job markets",
        "Develop a personal brand",
        "Learn interview follow-up strategies"
      ],
      color: "#9b59b6",
    },
  };

  const course = courses[courseId] || courses["resume-building"];
  const TIME_SLOTS = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"];

  const getDateLabel = () => {
    const today = new Date();
    if (selectedDate === "today") {
      return today.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    } else {
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    }
  };

  const handleScheduleSubmit = () => {
    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }
    setInterviewDetails({
      date: selectedDate,
      dateLabel: getDateLabel(),
      time: selectedTime,
    });
    setShowScheduling(false);
    setShowPayment(true);
  };

  const handlePaymentClick = () => {
    setTimeout(() => {
      setPaymentComplete(true);
    }, 2000);
  };

  const handleConfirm = () => {
    localStorage.setItem(`courseEnrollment_${courseId}`, JSON.stringify(interviewDetails));
    navigate(-1);
  };

  if (!user) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <nav style={{ padding: "20px 40px", backgroundColor: "white", borderBottom: "1px solid #e9ecef", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff", textDecoration: "none" }}>
            Evalo
          </Link>
          <button onClick={() => navigate(-1)} style={{ padding: "8px 16px", backgroundColor: "#f8f9fa", color: "#007bff", border: "1px solid #007bff", borderRadius: "6px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}>
            ← Back
          </button>
        </nav>

        <div style={{ padding: "80px 40px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 80px)" }}>
          <div style={{ maxWidth: "500px", backgroundColor: "white", borderRadius: "12px", padding: "50px 40px", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ fontSize: "56px", marginBottom: "20px" }}>🔐</div>
            <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>Sign In Required</h2>
            <p style={{ fontSize: "16px", color: "#666", marginBottom: "30px", lineHeight: "1.6" }}>
              Please sign in to access this course enrollment.
            </p>

            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
              <Link
                to={`/sign-in?redirect=enrollment/${courseId}`}
                style={{ padding: "14px 28px", backgroundColor: "#007bff", color: "white", textDecoration: "none", borderRadius: "8px", fontSize: "15px", fontWeight: "600", textAlign: "center", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = "#0056b3"; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = "#007bff"; }}
              >
                Sign In
              </Link>
              <Link
                to={`/create-account?redirect=enrollment/${courseId}`}
                style={{ padding: "14px 28px", backgroundColor: "white", color: "#007bff", textDecoration: "none", border: "2px solid #007bff", borderRadius: "8px", fontSize: "15px", fontWeight: "600", textAlign: "center", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = "#f0f8ff"; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = "white"; }}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (paymentComplete) {
    return (
      <div className="enrollment-success-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Enrollment Successful!</h2>
          <p className="success-message">You've been enrolled in {course.name}</p>
          
          <div className="enrollment-details">
            <h3>Your Schedule</h3>
            <div className="detail-item">
              <span className="detail-label">📅 Date:</span>
              <span className="detail-value">{interviewDetails.dateLabel}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🕐 Time:</span>
              <span className="detail-value">{interviewDetails.time}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">💰 Amount Paid:</span>
              <span className="detail-value">${course.price}</span>
            </div>
          </div>

          <button className="btn-continue" onClick={handleConfirm}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="enrollment-wrapper">
      <button className="btn-back-nav" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="enrollment-container">
        {!interviewDetails ? (
          <div className="enrollment-card">
            <div className="course-header">
              <div className="course-icon">{course.icon}</div>
              <h1>{course.title}</h1>
              <p className="course-price">{course.price}</p>
            </div>

            <button className="btn-schedule-enrollment" onClick={() => setShowScheduling(true)}>
              📅 Schedule Your Session
            </button>
          </div>
        ) : !showPayment ? (
          <div className="enrollment-card">
            <div className="session-header">
              <h2>📅 Your Session Details</h2>
            </div>

            <div className="session-details">
              <div className="detail-card">
                <span className="detail-icon">📅</span>
                <div className="detail-content">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{interviewDetails.dateLabel}</span>
                </div>
              </div>

              <div className="detail-card">
                <span className="detail-icon">🕐</span>
                <div className="detail-content">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{interviewDetails.time}</span>
                </div>
              </div>

              <div className="detail-card">
                <span className="detail-icon">💰</span>
                <div className="detail-content">
                  <span className="detail-label">Amount</span>
                  <span className="detail-value">{course.price}</span>
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-change" onClick={() => setInterviewDetails(null)}>
                ← Change Schedule
              </button>
              <button className="btn-proceed" onClick={() => setShowPayment(true)}>
                Proceed to Payment →
              </button>
            </div>
          </div>
        ) : (
          <div className="payment-card">
            <h2>💳 Complete Payment</h2>
            
            <div className="payment-summary">
              <div className="summary-row">
                <span>Course</span>
                <span>{course.name}</span>
              </div>
              <div className="summary-row">
                <span>Session Date</span>
                <span>{interviewDetails.dateLabel}</span>
              </div>
              <div className="summary-row">
                <span>Session Time</span>
                <span>{interviewDetails.time}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total Amount</span>
                <span>${course.price}</span>
              </div>
            </div>

            <div className="qr-section">
              <h3>📱 Scan to pay via UPI</h3>
              <div className="qr-box">
                <img src="/qr-code.png" alt="UPI Payment QR" className="qr-code" />
              </div>
              <p className="upi-id">UPI ID: prepx@upi</p>
            </div>

            <div className="payment-buttons">
              <button className="btn-back-payment" onClick={() => setShowPayment(false)}>
                ← Back
              </button>
              <button className="btn-done" onClick={handlePaymentClick}>
                Payment Done
              </button>
            </div>
          </div>
        )}

        {showScheduling && (
          <div className="modal-overlay" onClick={() => setShowScheduling(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>📅 Schedule Your Session</h2>

              <div className="scheduling-section">
                <label>Select Date:</label>
                <div className="date-options">
                  <button className={`date-btn ${selectedDate === "today" ? "active" : ""}`} onClick={() => setSelectedDate("today")}>
                    Today
                  </button>
                  <button className={`date-btn ${selectedDate === "tomorrow" ? "active" : ""}`} onClick={() => setSelectedDate("tomorrow")}>
                    Tomorrow
                  </button>
                </div>
              </div>

              <div className="scheduling-section">
                <label>Select Time Slot (12 PM - 5 PM):</label>
                <div className="time-slots">
                  {TIME_SLOTS.map((time) => (
                    <button key={time} className={`time-slot ${selectedTime === time ? "active" : ""}`} onClick={() => setSelectedTime(time)}>
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn-cancel" onClick={() => setShowScheduling(false)}>
                  Cancel
                </button>
                <button className="btn-confirm" onClick={handleScheduleSubmit} disabled={!selectedTime}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
