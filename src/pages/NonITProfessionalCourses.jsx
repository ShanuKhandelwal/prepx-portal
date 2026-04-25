import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserInfoModal from "../components/UserInfoModal";
import "./NonITProfessionalCourses.css";

export default function NonITProfessionalCourses() {
  const [selectedType, setSelectedType] = useState("individual");
  const navigate = useNavigate();
  const location = useLocation();
  
  const selectedInterviewType = location.state?.interviewType || "HR & Behavioral";

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showScheduling, setShowScheduling] = useState(false);
  const [selectedDate, setSelectedDate] = useState("today");
  const [selectedTime, setSelectedTime] = useState("");
  const [interviewDetails, setInterviewDetails] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [showPaymentConfirmation, setShowPaymentConfirmation] = useState(false);
  const [screenshotConfirmationMessage, setScreenshotConfirmationMessage] = useState(false);
  const [showPackageScheduling, setShowPackageScheduling] = useState(false);
  const [packageSelectedDate, setPackageSelectedDate] = useState("today");
  const [packageSelectedTime, setPackageSelectedTime] = useState("");
  const [packageDetails, setPackageDetails] = useState(null);
  const [showPackagePayment, setShowPackagePayment] = useState(false);
  const [packagePaymentComplete, setPackagePaymentComplete] = useState(false);
  const [packagePaymentScreenshot, setPackagePaymentScreenshot] = useState(null);
  const [showPackagePaymentConfirmation, setShowPackagePaymentConfirmation] = useState(false);
  const [packageScreenshotConfirmationMessage, setPackageScreenshotConfirmationMessage] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const [userInfoType, setUserInfoType] = useState("individual");

  const professionalServices = [
    {
      id: 1,
      icon: "📝",
      title: "Resume Building Guide",
      description: "Learn to craft a winning resume",
      details: "Create a professional resume that highlights your skills and experience.",
      price: 200,
    },
    {
      id: 2,
      icon: "💬",
      title: "Technical Interview Preparation",
      description: "Master coding and interview fundamentals",
      details: "Master common interview questions, coding problems, and techniques.",
      price: 200,
    },
    {
      id: 3,
      icon: "🔄",
      title: "LinkedIn & Personal Branding",
      description: "Build your professional presence",
      details: "Optimize your LinkedIn profile and create a personal brand.",
      price: 200,
    },
    {
      id: 4,
      icon: "📊",
      title: "Career Roadmap",
      description: "Plan your tech journey",
      details: "Understand different career paths and create a strategic plan.",
      price: 200,
    },
    {
      id: 5,
      icon: "🎯",
      title: "Job Search Strategy",
      description: "Find your first opportunity",
      details: "Learn effective job search strategies and networking tips.",
      price: 200,
    },
  ];

  const packageData = {
    title: "Complete Professional Package",
    description: "Advance your career with expert-led courses",
    originalPrice: 1000,
    discount: 200,
    finalPrice: 800,
    courses: [
      "Resume Building Guide",
      "Technical Interview Preparation",
      "LinkedIn & Personal Branding",
      "Career Roadmap",
      "Job Search Strategy",
    ],
    benefits: [
      "5 Complete Courses",
      "Lifetime Access",
      "Advanced Content",
      "Career Coaching",
      "Network Building",
    ],
  };

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

  const getPackageDateLabel = () => {
    const today = new Date();
    if (packageSelectedDate === "today") {
      return today.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    } else {
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    }
  };

  const handleEnroll = (service) => {
    setSelectedCourse(service);
    setUserInfoType("individual");
    setShowUserInfoModal(true);
  };

  const handlePackageSchedule = () => {
    setUserInfoType("package");
    setShowUserInfoModal(true);
  };

  const handleUserInfoSubmit = (formData) => {
    setUserInfo(formData);
    setShowUserInfoModal(false);
    
    if (userInfoType === "individual") {
      setSelectedDate("today");
      setSelectedTime("");
      setPaymentScreenshot(null);
      setShowScheduling(true);
    } else {
      setPackageSelectedDate("today");
      setPackageSelectedTime("");
      setPackagePaymentScreenshot(null);
      setShowPackageScheduling(true);
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
  };

  const handlePackageScheduleSubmit = () => {
    if (!packageSelectedTime) {
      alert("Please select a time slot");
      return;
    }
    setPackageDetails({
      dateLabel: getPackageDateLabel(),
      time: packageSelectedTime,
    });
    setShowPackageScheduling(false);
  };

  const handleScreenshotUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPaymentScreenshot(reader.result);
        setShowPaymentConfirmation(false);
        setScreenshotConfirmationMessage(true);
        setTimeout(() => {
          setScreenshotConfirmationMessage(false);
          setPaymentComplete(true);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePackageScreenshotUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPackagePaymentScreenshot(reader.result);
        setShowPackagePaymentConfirmation(false);
        setPackageScreenshotConfirmationMessage(true);
        setTimeout(() => {
          setPackageScreenshotConfirmationMessage(false);
          setPackagePaymentComplete(true);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = () => {
    localStorage.setItem(`courseEnrollment_${selectedCourse.id}`, JSON.stringify(interviewDetails));
    navigate("/");
  };

  const handlePackageConfirm = () => {
    localStorage.setItem(`packageEnrollment_non-it-professional`, JSON.stringify({
      type: "professional",
      enrolledAt: new Date().toISOString(),
      price: packageData.finalPrice,
      date: packageDetails.dateLabel,
      time: packageDetails.time,
    }));
    navigate("/");
  };

  if (paymentComplete) {
    return (
      <div className="enrollment-success-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Enrollment Successful!</h2>
          <p className="success-message">You've been enrolled in {selectedCourse.title}</p>
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
              <span className="detail-value">₹{selectedCourse.price}</span>
            </div>
          </div>
          <button className="btn-continue" onClick={handleConfirm}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (packagePaymentComplete) {
    return (
      <div className="enrollment-success-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Package Purchase Successful!</h2>
          <p className="success-message">You've purchased {packageData.title}</p>
          <div className="enrollment-details">
            <h3>Purchase Details</h3>
            <div className="detail-item">
              <span className="detail-label">Package:</span>
              <span className="detail-value">{packageData.title}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">📅 Date:</span>
              <span className="detail-value">{packageDetails.dateLabel}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🕐 Time:</span>
              <span className="detail-value">{packageDetails.time}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Amount Paid:</span>
              <span className="detail-value">₹{packageData.finalPrice}</span>
            </div>
          </div>
          <button className="btn-continue" onClick={handlePackageConfirm}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="non-it-professional-courses-wrapper">
      <div className="header-section">
        <div className="logo-and-back">
          <h2 className="logo">Evalo</h2>
          <button className="btn-back" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </div>

      <div className="page-title-section">
        <h1>📈 Non-IT Professional Learning Path</h1>
        <p>Advanced courses to accelerate your career</p>
      </div>

      <div className="interview-type-section">
        <div className="interview-type-card">
          <p className="interview-label">Your Selected Interview Type:</p>
          <p className="interview-type">{selectedInterviewType}</p>
        </div>
      </div>

      <div className="learning-options-section">
        <p className="options-label">How would you like to learn?</p>
        <div className="toggle-section">
          <button className={`toggle-btn ${selectedType === "individual" ? "active" : ""}`} onClick={() => setSelectedType("individual")}>
            📌 Individual Courses
          </button>
          <button className={`toggle-btn ${selectedType === "package" ? "active" : ""}`} onClick={() => setSelectedType("package")}>
            🎁 Complete Package
          </button>
        </div>
      </div>

      {selectedType === "individual" ? (
        <div className="courses-section">
          <div className="courses-header">
            <h2>Choose Your Courses</h2>
            <p>Pick the courses that match your needs - 5 essential courses for professionals</p>
          </div>
          <div className="services-grid">
            {professionalServices.map((service) => (
              <div key={service.id} className={`service-card service-card-${service.id}`}>
                <div className="service-top">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <p className="service-details">{service.details}</p>
                <div className="service-footer">
                  <span className="service-price">₹{service.price}</span>
                  <button className="btn-enroll" onClick={() => handleEnroll(service)}>
                    Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="package-section">
          <div className="package-card">
            <div className="package-header">
              <h2>Complete Professional Package</h2>
              <p>Advance your career with expert-led courses</p>
            </div>
            <div className="pricing-box">
              <div className="price-item original">
                <span>Original Price</span>
                <span>₹{packageData.originalPrice}</span>
              </div>
              <div className="price-item savings">
                <span>SAVE</span>
                <span>₹{packageData.discount}</span>
              </div>
              <div className="price-item final">
                <span>Your Price</span>
                <span>₹{packageData.finalPrice}</span>
              </div>
            </div>
            <div className="package-includes">
              <h3>📚 Included Courses:</h3>
              <ul>
                {packageData.courses.map((course, index) => (
                  <li key={index}>✓ {course}</li>
                ))}
              </ul>
            </div>
            <div className="package-includes">
              <h3>🎁 Benefits:</h3>
              <ul>
                {packageData.benefits.map((benefit, index) => (
                  <li key={index}>⭐ {benefit}</li>
                ))}
              </ul>
            </div>
            <button className="btn-buy-package" onClick={handlePackageSchedule}>
              Schedule & Purchase - ₹{packageData.finalPrice}
            </button>
          </div>
        </div>
      )}

      <UserInfoModal
        isOpen={showUserInfoModal}
        onClose={() => setShowUserInfoModal(false)}
        onSubmit={handleUserInfoSubmit}
        courseTitle={userInfoType === "individual" ? selectedCourse?.title : packageData.title}
      />

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

      {interviewDetails && !showPayment && (
        <div className="enrollment-modal-wrapper">
          <div className="enrollment-modal">
            <button className="btn-close" onClick={() => setInterviewDetails(null)}>✕</button>
            <div className="session-details">
              <h2>📅 Your Session Details</h2>
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
                  <span className="detail-value">₹{selectedCourse.price}</span>
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="btn-change" onClick={() => { setInterviewDetails(null); setShowScheduling(true); }}>
                ← Change Schedule
              </button>
              <button className="btn-proceed" onClick={() => setShowPayment(true)}>
                Proceed to Payment →
              </button>
            </div>
          </div>
        </div>
      )}

      {showPayment && !showPaymentConfirmation && (
        <div className="enrollment-modal-wrapper">
          <div className="payment-modal">
            <button className="btn-close" onClick={() => setShowPayment(false)}>✕</button>
            <h2>💳 Complete Payment</h2>
            <div className="payment-summary">
              <div className="summary-row">
                <span>Course</span>
                <span>{selectedCourse.title}</span>
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
                <span>₹{selectedCourse.price}</span>
              </div>
            </div>
            <div className="qr-section">
              <h3>📱 Scan to pay via UPI</h3>
              <div className="qr-box">
                <img src="/qr-code.png" alt="UPI Payment QR" className="qr-code" />
              </div>
              <p className="upi-id">UPI ID: evalo@upi</p>
            </div>
            <div className="payment-buttons">
              <button className="btn-back-payment" onClick={() => setShowPayment(false)}>
                ← Back
              </button>
              <button className="btn-done" onClick={() => setShowPaymentConfirmation(true)}>
                Payment Done
              </button>
            </div>
          </div>
        </div>
      )}

      {showPaymentConfirmation && (
        <div className="enrollment-modal-wrapper">
          <div className="payment-confirmation-modal">
            <button className="btn-close" onClick={() => setShowPaymentConfirmation(false)}>✕</button>
            <h2>✅ Payment Confirmation</h2>
            <div className="confirmation-content">
              <p className="confirmation-text">Have you successfully completed the payment?</p>
              <p className="confirmation-subtitle">Please upload your payment screenshot</p>
              <div className="screenshot-upload-section">
                <label htmlFor="screenshot-input" className="upload-label">
                  <div className="upload-area">
                    {paymentScreenshot ? (
                      <div className="screenshot-preview">
                        <img src={paymentScreenshot} alt="Payment Screenshot" />
                        <p className="preview-text">✓ Screenshot uploaded</p>
                      </div>
                    ) : (
                      <>
                        <div className="upload-icon">📸</div>
                        <p className="upload-text">Click to upload screenshot</p>
                        <p className="upload-subtext">or drag and drop</p>
                      </>
                    )}
                  </div>
                </label>
                <input
                  id="screenshot-input"
                  type="file"
                  accept="image/*"
                  onChange={handleScreenshotUpload}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            <div className="confirmation-buttons">
              <button className="btn-cancel-confirmation" onClick={() => setShowPaymentConfirmation(false)}>
                ← Back
              </button>
              <button 
                className="btn-submit-screenshot" 
                disabled={!paymentScreenshot}
              >
                Submit Screenshot
              </button>
            </div>
          </div>
        </div>
      )}

      {showPackageScheduling && (
        <div className="modal-overlay" onClick={() => setShowPackageScheduling(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>📅 Schedule Your Session</h2>
            <div className="scheduling-section">
              <label>Select Date:</label>
              <div className="date-options">
                <button className={`date-btn ${packageSelectedDate === "today" ? "active" : ""}`} onClick={() => setPackageSelectedDate("today")}>
                  Today
                </button>
                <button className={`date-btn ${packageSelectedDate === "tomorrow" ? "active" : ""}`} onClick={() => setPackageSelectedDate("tomorrow")}>
                  Tomorrow
                </button>
              </div>
            </div>
            <div className="scheduling-section">
              <label>Select Time Slot (12 PM - 5 PM):</label>
              <div className="time-slots">
                {TIME_SLOTS.map((time) => (
                  <button key={time} className={`time-slot ${packageSelectedTime === time ? "active" : ""}`} onClick={() => setPackageSelectedTime(time)}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowPackageScheduling(false)}>
                Cancel
              </button>
              <button className="btn-confirm" onClick={handlePackageScheduleSubmit} disabled={!packageSelectedTime}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {packageDetails && !showPackagePayment && (
        <div className="enrollment-modal-wrapper">
          <div className="enrollment-modal">
            <button className="btn-close" onClick={() => setPackageDetails(null)}>✕</button>
            <div className="session-details">
              <h2>📅 Your Session Details</h2>
              <div className="detail-card">
                <span className="detail-icon">📅</span>
                <div className="detail-content">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{packageDetails.dateLabel}</span>
                </div>
              </div>
              <div className="detail-card">
                <span className="detail-icon">🕐</span>
                <div className="detail-content">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">{packageDetails.time}</span>
                </div>
              </div>
              <div className="detail-card">
                <span className="detail-icon">💰</span>
                <div className="detail-content">
                  <span className="detail-label">Amount</span>
                  <span className="detail-value">₹{packageData.finalPrice}</span>
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="btn-change" onClick={() => { setPackageDetails(null); setShowPackageScheduling(true); }}>
                ← Change Schedule
              </button>
              <button className="btn-proceed" onClick={() => setShowPackagePayment(true)}>
                Proceed to Payment →
              </button>
            </div>
          </div>
        </div>
      )}

      {showPackagePayment && !showPackagePaymentConfirmation && (
        <div className="enrollment-modal-wrapper">
          <div className="payment-modal">
            <button className="btn-close" onClick={() => setShowPackagePayment(false)}>✕</button>
            <h2>💳 Complete Payment</h2>
            <div className="payment-summary">
              <div className="summary-row">
                <span>Package</span>
                <span>{packageData.title}</span>
              </div>
              <div className="summary-row">
                <span>Session Date</span>
                <span>{packageDetails.dateLabel}</span>
              </div>
              <div className="summary-row">
                <span>Session Time</span>
                <span>{packageDetails.time}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total Amount</span>
                <span>₹{packageData.finalPrice}</span>
              </div>
            </div>
            <div className="qr-section">
              <h3>📱 Scan to pay via UPI</h3>
              <div className="qr-box">
                <img src="/qr-code.png" alt="UPI Payment QR" className="qr-code" />
              </div>
              <p className="upi-id">UPI ID: evalo@upi</p>
            </div>
            <div className="payment-buttons">
              <button className="btn-back-payment" onClick={() => setShowPackagePayment(false)}>
                ← Back
              </button>
              <button className="btn-done" onClick={() => setShowPackagePaymentConfirmation(true)}>
                Payment Done
              </button>
            </div>
          </div>
        </div>
      )}

      {showPackagePaymentConfirmation && (
        <div className="enrollment-modal-wrapper">
          <div className="payment-confirmation-modal">
            <button className="btn-close" onClick={() => setShowPackagePaymentConfirmation(false)}>✕</button>
            <h2>✅ Payment Confirmation</h2>
            <div className="confirmation-content">
              <p className="confirmation-text">Have you successfully completed the payment?</p>
              <p className="confirmation-subtitle">Please upload your payment screenshot</p>
              <div className="screenshot-upload-section">
                <label htmlFor="package-screenshot-input" className="upload-label">
                  <div className="upload-area">
                    {packagePaymentScreenshot ? (
                      <div className="screenshot-preview">
                        <img src={packagePaymentScreenshot} alt="Payment Screenshot" />
                        <p className="preview-text">✓ Screenshot uploaded</p>
                      </div>
                    ) : (
                      <>
                        <div className="upload-icon">📸</div>
                        <p className="upload-text">Click to upload screenshot</p>
                        <p className="upload-subtext">or drag and drop</p>
                      </>
                    )}
                  </div>
                </label>
                <input
                  id="package-screenshot-input"
                  type="file"
                  accept="image/*"
                  onChange={handlePackageScreenshotUpload}
                  style={{ display: 'none' }}
                />
              </div>
            </div>
            <div className="confirmation-buttons">
              <button className="btn-cancel-confirmation" onClick={() => setShowPackagePaymentConfirmation(false)}>
                ← Back
              </button>
              <button 
                className="btn-submit-screenshot" 
                disabled={!packagePaymentScreenshot}
              >
                Submit Screenshot
              </button>
            </div>
          </div>
        </div>
      )}

      {screenshotConfirmationMessage && (
        <div className="confirmation-message-overlay">
          <div className="confirmation-message">
            <div className="message-icon">✓</div>
            <h3>Screenshot Received!</h3>
            <p>Your payment screenshot has been successfully uploaded.</p>
            <p className="message-subtitle">Processing your enrollment...</p>
          </div>
        </div>
      )}

      {packageScreenshotConfirmationMessage && (
        <div className="confirmation-message-overlay">
          <div className="confirmation-message">
            <div className="message-icon">✓</div>
            <h3>Screenshot Received!</h3>
            <p>Your payment screenshot has been successfully uploaded.</p>
            <p className="message-subtitle">Processing your package purchase...</p>
          </div>
        </div>
      )}
    </div>
  );
}
